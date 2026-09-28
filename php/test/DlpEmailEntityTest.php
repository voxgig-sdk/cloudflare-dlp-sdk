<?php
declare(strict_types=1);

// DlpEmail entity test

require_once __DIR__ . '/../cloudflaredlp_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DlpEmailEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareDlpSDK::test(null, null);
        $ent = $testsdk->DlpEmail(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "dlp_email" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudflareDlpSDK::test($seed, null);
        $seen = iterator_to_array($base->DlpEmail(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudflareDlpConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudflareDlpSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->DlpEmail(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = dlp_email_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dlp_email." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $dlp_email_ref01_ent = $client->DlpEmail(null);
        $dlp_email_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.dlp_email"), "dlp_email_ref01"));
        $dlp_email_ref01_data["account_id"] = $setup["idmap"]["account01"];

        $dlp_email_ref01_data_result = $dlp_email_ref01_ent->create($dlp_email_ref01_data, null);
        $dlp_email_ref01_data = Helpers::to_map(is_object($dlp_email_ref01_data_result) && method_exists($dlp_email_ref01_data_result, 'data_get') ? $dlp_email_ref01_data_result->data_get() : $dlp_email_ref01_data_result);
        $this->assertNotNull($dlp_email_ref01_data);

        // LIST
        $dlp_email_ref01_match = [
            "account_id" => $setup["idmap"]["account01"],
        ];

        $dlp_email_ref01_list_result = $dlp_email_ref01_ent->list($dlp_email_ref01_match, null);
        $this->assertIsArray($dlp_email_ref01_list_result);

        // UPDATE
        $dlp_email_ref01_data_up0_up = [
            "account_id" => $setup["idmap"]["account_id"],
        ];

        $dlp_email_ref01_markdef_up0_name = "description";
        $dlp_email_ref01_markdef_up0_value = "Mark01-dlp_email_ref01_" . $setup["now"];
        $dlp_email_ref01_data_up0_up[$dlp_email_ref01_markdef_up0_name] = $dlp_email_ref01_markdef_up0_value;

        $dlp_email_ref01_resdata_up0_result = $dlp_email_ref01_ent->update($dlp_email_ref01_data_up0_up, null);
        $dlp_email_ref01_resdata_up0 = Helpers::to_map(is_object($dlp_email_ref01_resdata_up0_result) && method_exists($dlp_email_ref01_resdata_up0_result, 'data_get') ? $dlp_email_ref01_resdata_up0_result->data_get() : $dlp_email_ref01_resdata_up0_result);
        $this->assertNotNull($dlp_email_ref01_resdata_up0);
        $this->assertEquals($dlp_email_ref01_resdata_up0[$dlp_email_ref01_markdef_up0_name], $dlp_email_ref01_markdef_up0_value);

        // LOAD
        $dlp_email_ref01_match_dt0 = [];
        $dlp_email_ref01_data_dt0_loaded = $dlp_email_ref01_ent->load($dlp_email_ref01_match_dt0, null);
        $this->assertNotNull($dlp_email_ref01_data_dt0_loaded);


        // LIST
        $dlp_email_ref01_match_rt0 = [
            "account_id" => $setup["idmap"]["account01"],
        ];

        $dlp_email_ref01_list_rt0_result = $dlp_email_ref01_ent->list($dlp_email_ref01_match_rt0, null);
        $this->assertIsArray($dlp_email_ref01_list_rt0_result);

    }
}

function dlp_email_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dlp_email/DlpEmailTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareDlpSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dlp_email01", "dlp_email02", "dlp_email03", "account01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID" => $idmap,
        "CLOUDFLARE_DLP_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_DLP_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_DLP_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }

    if ($env["CLOUDFLARE_DLP_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_DLP_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareDlpSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_DLP_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_DLP_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
