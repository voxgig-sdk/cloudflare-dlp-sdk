<?php
declare(strict_types=1);

// CloudflareDlp SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareDlpSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareDlpUtility();
        $this->_utility = $utility;

        $config = CloudflareDlpConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareDlpHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareDlpHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareDlpFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareDlpFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareDlpUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareDlpHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareDlpHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareDlpHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareDlpSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareDlpError($op . "_allow",
                "CloudflareDlpSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareDlpHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareDlpHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareDlpError("graphql_error",
                "CloudflareDlpSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_dlp_custom_prompt_topic = null;

    // Canonical facade: $client->DlpCustomPromptTopic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_custom_prompt_topic()
    // resolves here too.
    public function DlpCustomPromptTopic($data = null)
    {
        require_once __DIR__ . '/entity/dlp_custom_prompt_topic_entity.php';
        if ($data === null) {
            if ($this->_dlp_custom_prompt_topic === null) {
                $this->_dlp_custom_prompt_topic = new DlpCustomPromptTopicEntity($this, null);
            }
            return $this->_dlp_custom_prompt_topic;
        }
        return new DlpCustomPromptTopicEntity($this, $data);
    }


    private $_dlp_data_class = null;

    // Canonical facade: $client->DlpDataClass()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_data_class()
    // resolves here too.
    public function DlpDataClass($data = null)
    {
        require_once __DIR__ . '/entity/dlp_data_class_entity.php';
        if ($data === null) {
            if ($this->_dlp_data_class === null) {
                $this->_dlp_data_class = new DlpDataClassEntity($this, null);
            }
            return $this->_dlp_data_class;
        }
        return new DlpDataClassEntity($this, $data);
    }


    private $_dlp_data_tag = null;

    // Canonical facade: $client->DlpDataTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_data_tag()
    // resolves here too.
    public function DlpDataTag($data = null)
    {
        require_once __DIR__ . '/entity/dlp_data_tag_entity.php';
        if ($data === null) {
            if ($this->_dlp_data_tag === null) {
                $this->_dlp_data_tag = new DlpDataTagEntity($this, null);
            }
            return $this->_dlp_data_tag;
        }
        return new DlpDataTagEntity($this, $data);
    }


    private $_dlp_data_tag_category = null;

    // Canonical facade: $client->DlpDataTagCategory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_data_tag_category()
    // resolves here too.
    public function DlpDataTagCategory($data = null)
    {
        require_once __DIR__ . '/entity/dlp_data_tag_category_entity.php';
        if ($data === null) {
            if ($this->_dlp_data_tag_category === null) {
                $this->_dlp_data_tag_category = new DlpDataTagCategoryEntity($this, null);
            }
            return $this->_dlp_data_tag_category;
        }
        return new DlpDataTagCategoryEntity($this, $data);
    }


    private $_dlp_data_tag_category_template = null;

    // Canonical facade: $client->DlpDataTagCategoryTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_data_tag_category_template()
    // resolves here too.
    public function DlpDataTagCategoryTemplate($data = null)
    {
        require_once __DIR__ . '/entity/dlp_data_tag_category_template_entity.php';
        if ($data === null) {
            if ($this->_dlp_data_tag_category_template === null) {
                $this->_dlp_data_tag_category_template = new DlpDataTagCategoryTemplateEntity($this, null);
            }
            return $this->_dlp_data_tag_category_template;
        }
        return new DlpDataTagCategoryTemplateEntity($this, $data);
    }


    private $_dlp_dataset = null;

    // Canonical facade: $client->DlpDataset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_dataset()
    // resolves here too.
    public function DlpDataset($data = null)
    {
        require_once __DIR__ . '/entity/dlp_dataset_entity.php';
        if ($data === null) {
            if ($this->_dlp_dataset === null) {
                $this->_dlp_dataset = new DlpDatasetEntity($this, null);
            }
            return $this->_dlp_dataset;
        }
        return new DlpDatasetEntity($this, $data);
    }


    private $_dlp_document_fingerprint = null;

    // Canonical facade: $client->DlpDocumentFingerprint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_document_fingerprint()
    // resolves here too.
    public function DlpDocumentFingerprint($data = null)
    {
        require_once __DIR__ . '/entity/dlp_document_fingerprint_entity.php';
        if ($data === null) {
            if ($this->_dlp_document_fingerprint === null) {
                $this->_dlp_document_fingerprint = new DlpDocumentFingerprintEntity($this, null);
            }
            return $this->_dlp_document_fingerprint;
        }
        return new DlpDocumentFingerprintEntity($this, $data);
    }


    private $_dlp_email = null;

    // Canonical facade: $client->DlpEmail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_email()
    // resolves here too.
    public function DlpEmail($data = null)
    {
        require_once __DIR__ . '/entity/dlp_email_entity.php';
        if ($data === null) {
            if ($this->_dlp_email === null) {
                $this->_dlp_email = new DlpEmailEntity($this, null);
            }
            return $this->_dlp_email;
        }
        return new DlpEmailEntity($this, $data);
    }


    private $_dlp_entry = null;

    // Canonical facade: $client->DlpEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_entry()
    // resolves here too.
    public function DlpEntry($data = null)
    {
        require_once __DIR__ . '/entity/dlp_entry_entity.php';
        if ($data === null) {
            if ($this->_dlp_entry === null) {
                $this->_dlp_entry = new DlpEntryEntity($this, null);
            }
            return $this->_dlp_entry;
        }
        return new DlpEntryEntity($this, $data);
    }


    private $_dlp_integration_entry = null;

    // Canonical facade: $client->DlpIntegrationEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_integration_entry()
    // resolves here too.
    public function DlpIntegrationEntry($data = null)
    {
        require_once __DIR__ . '/entity/dlp_integration_entry_entity.php';
        if ($data === null) {
            if ($this->_dlp_integration_entry === null) {
                $this->_dlp_integration_entry = new DlpIntegrationEntryEntity($this, null);
            }
            return $this->_dlp_integration_entry;
        }
        return new DlpIntegrationEntryEntity($this, $data);
    }


    private $_dlp_predefined_entry = null;

    // Canonical facade: $client->DlpPredefinedEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_predefined_entry()
    // resolves here too.
    public function DlpPredefinedEntry($data = null)
    {
        require_once __DIR__ . '/entity/dlp_predefined_entry_entity.php';
        if ($data === null) {
            if ($this->_dlp_predefined_entry === null) {
                $this->_dlp_predefined_entry = new DlpPredefinedEntryEntity($this, null);
            }
            return $this->_dlp_predefined_entry;
        }
        return new DlpPredefinedEntryEntity($this, $data);
    }


    private $_dlp_profile = null;

    // Canonical facade: $client->DlpProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_profile()
    // resolves here too.
    public function DlpProfile($data = null)
    {
        require_once __DIR__ . '/entity/dlp_profile_entity.php';
        if ($data === null) {
            if ($this->_dlp_profile === null) {
                $this->_dlp_profile = new DlpProfileEntity($this, null);
            }
            return $this->_dlp_profile;
        }
        return new DlpProfileEntity($this, $data);
    }


    private $_dlp_sensitivity_group = null;

    // Canonical facade: $client->DlpSensitivityGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_sensitivity_group()
    // resolves here too.
    public function DlpSensitivityGroup($data = null)
    {
        require_once __DIR__ . '/entity/dlp_sensitivity_group_entity.php';
        if ($data === null) {
            if ($this->_dlp_sensitivity_group === null) {
                $this->_dlp_sensitivity_group = new DlpSensitivityGroupEntity($this, null);
            }
            return $this->_dlp_sensitivity_group;
        }
        return new DlpSensitivityGroupEntity($this, $data);
    }


    private $_dlp_sensitivity_group_template = null;

    // Canonical facade: $client->DlpSensitivityGroupTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_sensitivity_group_template()
    // resolves here too.
    public function DlpSensitivityGroupTemplate($data = null)
    {
        require_once __DIR__ . '/entity/dlp_sensitivity_group_template_entity.php';
        if ($data === null) {
            if ($this->_dlp_sensitivity_group_template === null) {
                $this->_dlp_sensitivity_group_template = new DlpSensitivityGroupTemplateEntity($this, null);
            }
            return $this->_dlp_sensitivity_group_template;
        }
        return new DlpSensitivityGroupTemplateEntity($this, $data);
    }


    private $_dlp_sensitivity_level = null;

    // Canonical facade: $client->DlpSensitivityLevel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_sensitivity_level()
    // resolves here too.
    public function DlpSensitivityLevel($data = null)
    {
        require_once __DIR__ . '/entity/dlp_sensitivity_level_entity.php';
        if ($data === null) {
            if ($this->_dlp_sensitivity_level === null) {
                $this->_dlp_sensitivity_level = new DlpSensitivityLevelEntity($this, null);
            }
            return $this->_dlp_sensitivity_level;
        }
        return new DlpSensitivityLevelEntity($this, $data);
    }


    private $_dlp_setting = null;

    // Canonical facade: $client->DlpSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dlp_setting()
    // resolves here too.
    public function DlpSetting($data = null)
    {
        require_once __DIR__ . '/entity/dlp_setting_entity.php';
        if ($data === null) {
            if ($this->_dlp_setting === null) {
                $this->_dlp_setting = new DlpSettingEntity($this, null);
            }
            return $this->_dlp_setting;
        }
        return new DlpSettingEntity($this, $data);
    }


    private $_policy = null;

    // Canonical facade: $client->Policy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->policy()
    // resolves here too.
    public function Policy($data = null)
    {
        require_once __DIR__ . '/entity/policy_entity.php';
        if ($data === null) {
            if ($this->_policy === null) {
                $this->_policy = new PolicyEntity($this, null);
            }
            return $this->_policy;
        }
        return new PolicyEntity($this, $data);
    }


    private $_posture_api_create_remediation_job = null;

    // Canonical facade: $client->PostureApiCreateRemediationJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_create_remediation_job()
    // resolves here too.
    public function PostureApiCreateRemediationJob($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_create_remediation_job_entity.php';
        if ($data === null) {
            if ($this->_posture_api_create_remediation_job === null) {
                $this->_posture_api_create_remediation_job = new PostureApiCreateRemediationJobEntity($this, null);
            }
            return $this->_posture_api_create_remediation_job;
        }
        return new PostureApiCreateRemediationJobEntity($this, $data);
    }


    private $_posture_api_create_webhook_job = null;

    // Canonical facade: $client->PostureApiCreateWebhookJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_create_webhook_job()
    // resolves here too.
    public function PostureApiCreateWebhookJob($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_create_webhook_job_entity.php';
        if ($data === null) {
            if ($this->_posture_api_create_webhook_job === null) {
                $this->_posture_api_create_webhook_job = new PostureApiCreateWebhookJobEntity($this, null);
            }
            return $this->_posture_api_create_webhook_job;
        }
        return new PostureApiCreateWebhookJobEntity($this, $data);
    }


    private $_posture_api_export_job = null;

    // Canonical facade: $client->PostureApiExportJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_export_job()
    // resolves here too.
    public function PostureApiExportJob($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_export_job_entity.php';
        if ($data === null) {
            if ($this->_posture_api_export_job === null) {
                $this->_posture_api_export_job = new PostureApiExportJobEntity($this, null);
            }
            return $this->_posture_api_export_job;
        }
        return new PostureApiExportJobEntity($this, $data);
    }


    private $_posture_api_finding = null;

    // Canonical facade: $client->PostureApiFinding()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_finding()
    // resolves here too.
    public function PostureApiFinding($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_finding_entity.php';
        if ($data === null) {
            if ($this->_posture_api_finding === null) {
                $this->_posture_api_finding = new PostureApiFindingEntity($this, null);
            }
            return $this->_posture_api_finding;
        }
        return new PostureApiFindingEntity($this, $data);
    }


    private $_posture_api_finding_instance = null;

    // Canonical facade: $client->PostureApiFindingInstance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_finding_instance()
    // resolves here too.
    public function PostureApiFindingInstance($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_finding_instance_entity.php';
        if ($data === null) {
            if ($this->_posture_api_finding_instance === null) {
                $this->_posture_api_finding_instance = new PostureApiFindingInstanceEntity($this, null);
            }
            return $this->_posture_api_finding_instance;
        }
        return new PostureApiFindingInstanceEntity($this, $data);
    }


    private $_posture_api_finding_type = null;

    // Canonical facade: $client->PostureApiFindingType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_finding_type()
    // resolves here too.
    public function PostureApiFindingType($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_finding_type_entity.php';
        if ($data === null) {
            if ($this->_posture_api_finding_type === null) {
                $this->_posture_api_finding_type = new PostureApiFindingTypeEntity($this, null);
            }
            return $this->_posture_api_finding_type;
        }
        return new PostureApiFindingTypeEntity($this, $data);
    }


    private $_posture_api_paginated_content_asset_list = null;

    // Canonical facade: $client->PostureApiPaginatedContentAssetList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_content_asset_list()
    // resolves here too.
    public function PostureApiPaginatedContentAssetList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_content_asset_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_content_asset_list === null) {
                $this->_posture_api_paginated_content_asset_list = new PostureApiPaginatedContentAssetListEntity($this, null);
            }
            return $this->_posture_api_paginated_content_asset_list;
        }
        return new PostureApiPaginatedContentAssetListEntity($this, $data);
    }


    private $_posture_api_paginated_export_job_list = null;

    // Canonical facade: $client->PostureApiPaginatedExportJobList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_export_job_list()
    // resolves here too.
    public function PostureApiPaginatedExportJobList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_export_job_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_export_job_list === null) {
                $this->_posture_api_paginated_export_job_list = new PostureApiPaginatedExportJobListEntity($this, null);
            }
            return $this->_posture_api_paginated_export_job_list;
        }
        return new PostureApiPaginatedExportJobListEntity($this, $data);
    }


    private $_posture_api_paginated_finding_instance_list = null;

    // Canonical facade: $client->PostureApiPaginatedFindingInstanceList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_finding_instance_list()
    // resolves here too.
    public function PostureApiPaginatedFindingInstanceList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_finding_instance_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_finding_instance_list === null) {
                $this->_posture_api_paginated_finding_instance_list = new PostureApiPaginatedFindingInstanceListEntity($this, null);
            }
            return $this->_posture_api_paginated_finding_instance_list;
        }
        return new PostureApiPaginatedFindingInstanceListEntity($this, $data);
    }


    private $_posture_api_paginated_finding_list = null;

    // Canonical facade: $client->PostureApiPaginatedFindingList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_finding_list()
    // resolves here too.
    public function PostureApiPaginatedFindingList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_finding_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_finding_list === null) {
                $this->_posture_api_paginated_finding_list = new PostureApiPaginatedFindingListEntity($this, null);
            }
            return $this->_posture_api_paginated_finding_list;
        }
        return new PostureApiPaginatedFindingListEntity($this, $data);
    }


    private $_posture_api_paginated_finding_type_list = null;

    // Canonical facade: $client->PostureApiPaginatedFindingTypeList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_finding_type_list()
    // resolves here too.
    public function PostureApiPaginatedFindingTypeList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_finding_type_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_finding_type_list === null) {
                $this->_posture_api_paginated_finding_type_list = new PostureApiPaginatedFindingTypeListEntity($this, null);
            }
            return $this->_posture_api_paginated_finding_type_list;
        }
        return new PostureApiPaginatedFindingTypeListEntity($this, $data);
    }


    private $_posture_api_paginated_remediation_job_list = null;

    // Canonical facade: $client->PostureApiPaginatedRemediationJobList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_remediation_job_list()
    // resolves here too.
    public function PostureApiPaginatedRemediationJobList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_remediation_job_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_remediation_job_list === null) {
                $this->_posture_api_paginated_remediation_job_list = new PostureApiPaginatedRemediationJobListEntity($this, null);
            }
            return $this->_posture_api_paginated_remediation_job_list;
        }
        return new PostureApiPaginatedRemediationJobListEntity($this, $data);
    }


    private $_posture_api_paginated_remediation_type_list = null;

    // Canonical facade: $client->PostureApiPaginatedRemediationTypeList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_paginated_remediation_type_list()
    // resolves here too.
    public function PostureApiPaginatedRemediationTypeList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_paginated_remediation_type_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_paginated_remediation_type_list === null) {
                $this->_posture_api_paginated_remediation_type_list = new PostureApiPaginatedRemediationTypeListEntity($this, null);
            }
            return $this->_posture_api_paginated_remediation_type_list;
        }
        return new PostureApiPaginatedRemediationTypeListEntity($this, $data);
    }


    private $_posture_api_webhook = null;

    // Canonical facade: $client->PostureApiWebhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_webhook()
    // resolves here too.
    public function PostureApiWebhook($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_webhook_entity.php';
        if ($data === null) {
            if ($this->_posture_api_webhook === null) {
                $this->_posture_api_webhook = new PostureApiWebhookEntity($this, null);
            }
            return $this->_posture_api_webhook;
        }
        return new PostureApiWebhookEntity($this, $data);
    }


    private $_posture_api_webhook_list = null;

    // Canonical facade: $client->PostureApiWebhookList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->posture_api_webhook_list()
    // resolves here too.
    public function PostureApiWebhookList($data = null)
    {
        require_once __DIR__ . '/entity/posture_api_webhook_list_entity.php';
        if ($data === null) {
            if ($this->_posture_api_webhook_list === null) {
                $this->_posture_api_webhook_list = new PostureApiWebhookListEntity($this, null);
            }
            return $this->_posture_api_webhook_list;
        }
        return new PostureApiWebhookListEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareDlpSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
