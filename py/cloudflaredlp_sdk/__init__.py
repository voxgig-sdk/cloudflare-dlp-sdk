# CloudflareDlp SDK

from cloudflaredlp_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaredlp_sdk.core.utility_type import CloudflareDlpUtility
from cloudflaredlp_sdk.core.spec import CloudflareDlpSpec
from cloudflaredlp_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflaredlp_sdk.utility import register

# Load features
from cloudflaredlp_sdk.feature.base_feature import CloudflareDlpBaseFeature
from cloudflaredlp_sdk.features import _has_feature, _make_feature


class CloudflareDlpSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareDlpUtility()
        self._utility = utility

        from cloudflaredlp_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareDlpUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareDlpSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareDlpSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareDlpSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def DlpCustomPromptTopic(self, data=None) -> "DlpCustomPromptTopicEntity":
        """Entity factory: client.DlpCustomPromptTopic().list() / client.DlpCustomPromptTopic().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_custom_prompt_topic_entity import DlpCustomPromptTopicEntity
        return DlpCustomPromptTopicEntity(self, data)


    def DlpDataClass(self, data=None) -> "DlpDataClassEntity":
        """Entity factory: client.DlpDataClass().list() / client.DlpDataClass().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_data_class_entity import DlpDataClassEntity
        return DlpDataClassEntity(self, data)


    def DlpDataTag(self, data=None) -> "DlpDataTagEntity":
        """Entity factory: client.DlpDataTag().list() / client.DlpDataTag().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_data_tag_entity import DlpDataTagEntity
        return DlpDataTagEntity(self, data)


    def DlpDataTagCategory(self, data=None) -> "DlpDataTagCategoryEntity":
        """Entity factory: client.DlpDataTagCategory().list() / client.DlpDataTagCategory().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_data_tag_category_entity import DlpDataTagCategoryEntity
        return DlpDataTagCategoryEntity(self, data)


    def DlpDataTagCategoryTemplate(self, data=None) -> "DlpDataTagCategoryTemplateEntity":
        """Entity factory: client.DlpDataTagCategoryTemplate().list() / client.DlpDataTagCategoryTemplate().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_data_tag_category_template_entity import DlpDataTagCategoryTemplateEntity
        return DlpDataTagCategoryTemplateEntity(self, data)


    def DlpDataset(self, data=None) -> "DlpDatasetEntity":
        """Entity factory: client.DlpDataset().list() / client.DlpDataset().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_dataset_entity import DlpDatasetEntity
        return DlpDatasetEntity(self, data)


    def DlpDocumentFingerprint(self, data=None) -> "DlpDocumentFingerprintEntity":
        """Entity factory: client.DlpDocumentFingerprint().list() / client.DlpDocumentFingerprint().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_document_fingerprint_entity import DlpDocumentFingerprintEntity
        return DlpDocumentFingerprintEntity(self, data)


    def DlpEmail(self, data=None) -> "DlpEmailEntity":
        """Entity factory: client.DlpEmail().list() / client.DlpEmail().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_email_entity import DlpEmailEntity
        return DlpEmailEntity(self, data)


    def DlpEntry(self, data=None) -> "DlpEntryEntity":
        """Entity factory: client.DlpEntry().list() / client.DlpEntry().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_entry_entity import DlpEntryEntity
        return DlpEntryEntity(self, data)


    def DlpIntegrationEntry(self, data=None) -> "DlpIntegrationEntryEntity":
        """Entity factory: client.DlpIntegrationEntry().list() / client.DlpIntegrationEntry().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_integration_entry_entity import DlpIntegrationEntryEntity
        return DlpIntegrationEntryEntity(self, data)


    def DlpPredefinedEntry(self, data=None) -> "DlpPredefinedEntryEntity":
        """Entity factory: client.DlpPredefinedEntry().list() / client.DlpPredefinedEntry().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_predefined_entry_entity import DlpPredefinedEntryEntity
        return DlpPredefinedEntryEntity(self, data)


    def DlpProfile(self, data=None) -> "DlpProfileEntity":
        """Entity factory: client.DlpProfile().list() / client.DlpProfile().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_profile_entity import DlpProfileEntity
        return DlpProfileEntity(self, data)


    def DlpSensitivityGroup(self, data=None) -> "DlpSensitivityGroupEntity":
        """Entity factory: client.DlpSensitivityGroup().list() / client.DlpSensitivityGroup().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_sensitivity_group_entity import DlpSensitivityGroupEntity
        return DlpSensitivityGroupEntity(self, data)


    def DlpSensitivityGroupTemplate(self, data=None) -> "DlpSensitivityGroupTemplateEntity":
        """Entity factory: client.DlpSensitivityGroupTemplate().list() / client.DlpSensitivityGroupTemplate().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_sensitivity_group_template_entity import DlpSensitivityGroupTemplateEntity
        return DlpSensitivityGroupTemplateEntity(self, data)


    def DlpSensitivityLevel(self, data=None) -> "DlpSensitivityLevelEntity":
        """Entity factory: client.DlpSensitivityLevel().list() / client.DlpSensitivityLevel().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_sensitivity_level_entity import DlpSensitivityLevelEntity
        return DlpSensitivityLevelEntity(self, data)


    def DlpSetting(self, data=None) -> "DlpSettingEntity":
        """Entity factory: client.DlpSetting().list() / client.DlpSetting().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.dlp_setting_entity import DlpSettingEntity
        return DlpSettingEntity(self, data)


    def Policy(self, data=None) -> "PolicyEntity":
        """Entity factory: client.Policy().list() / client.Policy().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.policy_entity import PolicyEntity
        return PolicyEntity(self, data)


    def PostureApiCreateRemediationJob(self, data=None) -> "PostureApiCreateRemediationJobEntity":
        """Entity factory: client.PostureApiCreateRemediationJob().list() / client.PostureApiCreateRemediationJob().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_create_remediation_job_entity import PostureApiCreateRemediationJobEntity
        return PostureApiCreateRemediationJobEntity(self, data)


    def PostureApiCreateWebhookJob(self, data=None) -> "PostureApiCreateWebhookJobEntity":
        """Entity factory: client.PostureApiCreateWebhookJob().list() / client.PostureApiCreateWebhookJob().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_create_webhook_job_entity import PostureApiCreateWebhookJobEntity
        return PostureApiCreateWebhookJobEntity(self, data)


    def PostureApiExportJob(self, data=None) -> "PostureApiExportJobEntity":
        """Entity factory: client.PostureApiExportJob().list() / client.PostureApiExportJob().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_export_job_entity import PostureApiExportJobEntity
        return PostureApiExportJobEntity(self, data)


    def PostureApiFinding(self, data=None) -> "PostureApiFindingEntity":
        """Entity factory: client.PostureApiFinding().list() / client.PostureApiFinding().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_finding_entity import PostureApiFindingEntity
        return PostureApiFindingEntity(self, data)


    def PostureApiFindingInstance(self, data=None) -> "PostureApiFindingInstanceEntity":
        """Entity factory: client.PostureApiFindingInstance().list() / client.PostureApiFindingInstance().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_finding_instance_entity import PostureApiFindingInstanceEntity
        return PostureApiFindingInstanceEntity(self, data)


    def PostureApiFindingType(self, data=None) -> "PostureApiFindingTypeEntity":
        """Entity factory: client.PostureApiFindingType().list() / client.PostureApiFindingType().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_finding_type_entity import PostureApiFindingTypeEntity
        return PostureApiFindingTypeEntity(self, data)


    def PostureApiPaginatedContentAssetList(self, data=None) -> "PostureApiPaginatedContentAssetListEntity":
        """Entity factory: client.PostureApiPaginatedContentAssetList().list() / client.PostureApiPaginatedContentAssetList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_content_asset_list_entity import PostureApiPaginatedContentAssetListEntity
        return PostureApiPaginatedContentAssetListEntity(self, data)


    def PostureApiPaginatedExportJobList(self, data=None) -> "PostureApiPaginatedExportJobListEntity":
        """Entity factory: client.PostureApiPaginatedExportJobList().list() / client.PostureApiPaginatedExportJobList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_export_job_list_entity import PostureApiPaginatedExportJobListEntity
        return PostureApiPaginatedExportJobListEntity(self, data)


    def PostureApiPaginatedFindingInstanceList(self, data=None) -> "PostureApiPaginatedFindingInstanceListEntity":
        """Entity factory: client.PostureApiPaginatedFindingInstanceList().list() / client.PostureApiPaginatedFindingInstanceList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_finding_instance_list_entity import PostureApiPaginatedFindingInstanceListEntity
        return PostureApiPaginatedFindingInstanceListEntity(self, data)


    def PostureApiPaginatedFindingList(self, data=None) -> "PostureApiPaginatedFindingListEntity":
        """Entity factory: client.PostureApiPaginatedFindingList().list() / client.PostureApiPaginatedFindingList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_finding_list_entity import PostureApiPaginatedFindingListEntity
        return PostureApiPaginatedFindingListEntity(self, data)


    def PostureApiPaginatedFindingTypeList(self, data=None) -> "PostureApiPaginatedFindingTypeListEntity":
        """Entity factory: client.PostureApiPaginatedFindingTypeList().list() / client.PostureApiPaginatedFindingTypeList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_finding_type_list_entity import PostureApiPaginatedFindingTypeListEntity
        return PostureApiPaginatedFindingTypeListEntity(self, data)


    def PostureApiPaginatedRemediationJobList(self, data=None) -> "PostureApiPaginatedRemediationJobListEntity":
        """Entity factory: client.PostureApiPaginatedRemediationJobList().list() / client.PostureApiPaginatedRemediationJobList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_remediation_job_list_entity import PostureApiPaginatedRemediationJobListEntity
        return PostureApiPaginatedRemediationJobListEntity(self, data)


    def PostureApiPaginatedRemediationTypeList(self, data=None) -> "PostureApiPaginatedRemediationTypeListEntity":
        """Entity factory: client.PostureApiPaginatedRemediationTypeList().list() / client.PostureApiPaginatedRemediationTypeList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_paginated_remediation_type_list_entity import PostureApiPaginatedRemediationTypeListEntity
        return PostureApiPaginatedRemediationTypeListEntity(self, data)


    def PostureApiWebhook(self, data=None) -> "PostureApiWebhookEntity":
        """Entity factory: client.PostureApiWebhook().list() / client.PostureApiWebhook().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_webhook_entity import PostureApiWebhookEntity
        return PostureApiWebhookEntity(self, data)


    def PostureApiWebhookList(self, data=None) -> "PostureApiWebhookListEntity":
        """Entity factory: client.PostureApiWebhookList().list() / client.PostureApiWebhookList().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.posture_api_webhook_list_entity import PostureApiWebhookListEntity
        return PostureApiWebhookListEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from cloudflaredlp_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareDlpSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflaredlp_sdk.entity.dlp_custom_prompt_topic_entity import DlpCustomPromptTopicEntity
    from cloudflaredlp_sdk.entity.dlp_data_class_entity import DlpDataClassEntity
    from cloudflaredlp_sdk.entity.dlp_data_tag_entity import DlpDataTagEntity
    from cloudflaredlp_sdk.entity.dlp_data_tag_category_entity import DlpDataTagCategoryEntity
    from cloudflaredlp_sdk.entity.dlp_data_tag_category_template_entity import DlpDataTagCategoryTemplateEntity
    from cloudflaredlp_sdk.entity.dlp_dataset_entity import DlpDatasetEntity
    from cloudflaredlp_sdk.entity.dlp_document_fingerprint_entity import DlpDocumentFingerprintEntity
    from cloudflaredlp_sdk.entity.dlp_email_entity import DlpEmailEntity
    from cloudflaredlp_sdk.entity.dlp_entry_entity import DlpEntryEntity
    from cloudflaredlp_sdk.entity.dlp_integration_entry_entity import DlpIntegrationEntryEntity
    from cloudflaredlp_sdk.entity.dlp_predefined_entry_entity import DlpPredefinedEntryEntity
    from cloudflaredlp_sdk.entity.dlp_profile_entity import DlpProfileEntity
    from cloudflaredlp_sdk.entity.dlp_sensitivity_group_entity import DlpSensitivityGroupEntity
    from cloudflaredlp_sdk.entity.dlp_sensitivity_group_template_entity import DlpSensitivityGroupTemplateEntity
    from cloudflaredlp_sdk.entity.dlp_sensitivity_level_entity import DlpSensitivityLevelEntity
    from cloudflaredlp_sdk.entity.dlp_setting_entity import DlpSettingEntity
    from cloudflaredlp_sdk.entity.policy_entity import PolicyEntity
    from cloudflaredlp_sdk.entity.posture_api_create_remediation_job_entity import PostureApiCreateRemediationJobEntity
    from cloudflaredlp_sdk.entity.posture_api_create_webhook_job_entity import PostureApiCreateWebhookJobEntity
    from cloudflaredlp_sdk.entity.posture_api_export_job_entity import PostureApiExportJobEntity
    from cloudflaredlp_sdk.entity.posture_api_finding_entity import PostureApiFindingEntity
    from cloudflaredlp_sdk.entity.posture_api_finding_instance_entity import PostureApiFindingInstanceEntity
    from cloudflaredlp_sdk.entity.posture_api_finding_type_entity import PostureApiFindingTypeEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_content_asset_list_entity import PostureApiPaginatedContentAssetListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_export_job_list_entity import PostureApiPaginatedExportJobListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_finding_instance_list_entity import PostureApiPaginatedFindingInstanceListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_finding_list_entity import PostureApiPaginatedFindingListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_finding_type_list_entity import PostureApiPaginatedFindingTypeListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_remediation_job_list_entity import PostureApiPaginatedRemediationJobListEntity
    from cloudflaredlp_sdk.entity.posture_api_paginated_remediation_type_list_entity import PostureApiPaginatedRemediationTypeListEntity
    from cloudflaredlp_sdk.entity.posture_api_webhook_entity import PostureApiWebhookEntity
    from cloudflaredlp_sdk.entity.posture_api_webhook_list_entity import PostureApiWebhookListEntity
    from cloudflaredlp_sdk.entity.webhook_entity import WebhookEntity
