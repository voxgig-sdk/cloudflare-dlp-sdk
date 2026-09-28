"use strict";
// CloudflareDlp Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareDlpSDK = exports.CloudflareDlpEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const DlpCustomPromptTopicEntity_1 = require("./entity/DlpCustomPromptTopicEntity");
const DlpDataClassEntity_1 = require("./entity/DlpDataClassEntity");
const DlpDataTagEntity_1 = require("./entity/DlpDataTagEntity");
const DlpDataTagCategoryEntity_1 = require("./entity/DlpDataTagCategoryEntity");
const DlpDataTagCategoryTemplateEntity_1 = require("./entity/DlpDataTagCategoryTemplateEntity");
const DlpDatasetEntity_1 = require("./entity/DlpDatasetEntity");
const DlpDocumentFingerprintEntity_1 = require("./entity/DlpDocumentFingerprintEntity");
const DlpEmailEntity_1 = require("./entity/DlpEmailEntity");
const DlpEntryEntity_1 = require("./entity/DlpEntryEntity");
const DlpIntegrationEntryEntity_1 = require("./entity/DlpIntegrationEntryEntity");
const DlpPredefinedEntryEntity_1 = require("./entity/DlpPredefinedEntryEntity");
const DlpProfileEntity_1 = require("./entity/DlpProfileEntity");
const DlpSensitivityGroupEntity_1 = require("./entity/DlpSensitivityGroupEntity");
const DlpSensitivityGroupTemplateEntity_1 = require("./entity/DlpSensitivityGroupTemplateEntity");
const DlpSensitivityLevelEntity_1 = require("./entity/DlpSensitivityLevelEntity");
const DlpSettingEntity_1 = require("./entity/DlpSettingEntity");
const PolicyEntity_1 = require("./entity/PolicyEntity");
const PostureApiCreateRemediationJobEntity_1 = require("./entity/PostureApiCreateRemediationJobEntity");
const PostureApiCreateWebhookJobEntity_1 = require("./entity/PostureApiCreateWebhookJobEntity");
const PostureApiExportJobEntity_1 = require("./entity/PostureApiExportJobEntity");
const PostureApiFindingEntity_1 = require("./entity/PostureApiFindingEntity");
const PostureApiFindingInstanceEntity_1 = require("./entity/PostureApiFindingInstanceEntity");
const PostureApiFindingTypeEntity_1 = require("./entity/PostureApiFindingTypeEntity");
const PostureApiPaginatedContentAssetListEntity_1 = require("./entity/PostureApiPaginatedContentAssetListEntity");
const PostureApiPaginatedExportJobListEntity_1 = require("./entity/PostureApiPaginatedExportJobListEntity");
const PostureApiPaginatedFindingInstanceListEntity_1 = require("./entity/PostureApiPaginatedFindingInstanceListEntity");
const PostureApiPaginatedFindingListEntity_1 = require("./entity/PostureApiPaginatedFindingListEntity");
const PostureApiPaginatedFindingTypeListEntity_1 = require("./entity/PostureApiPaginatedFindingTypeListEntity");
const PostureApiPaginatedRemediationJobListEntity_1 = require("./entity/PostureApiPaginatedRemediationJobListEntity");
const PostureApiPaginatedRemediationTypeListEntity_1 = require("./entity/PostureApiPaginatedRemediationTypeListEntity");
const PostureApiWebhookEntity_1 = require("./entity/PostureApiWebhookEntity");
const PostureApiWebhookListEntity_1 = require("./entity/PostureApiWebhookListEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareDlpEntityBase_1 = require("./CloudflareDlpEntityBase");
Object.defineProperty(exports, "CloudflareDlpEntityBase", { enumerable: true, get: function () { return CloudflareDlpEntityBase_1.CloudflareDlpEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareDlpSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareDlpSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareDlpSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareDlpSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.DlpCustomPromptTopic().list()` / `client.DlpCustomPromptTopic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpCustomPromptTopic(entopts) {
        const self = this;
        return new DlpCustomPromptTopicEntity_1.DlpCustomPromptTopicEntity(self, entopts);
    }
    // Entity access: `client.DlpDataClass().list()` / `client.DlpDataClass().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDataClass(entopts) {
        const self = this;
        return new DlpDataClassEntity_1.DlpDataClassEntity(self, entopts);
    }
    // Entity access: `client.DlpDataTag().list()` / `client.DlpDataTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDataTag(entopts) {
        const self = this;
        return new DlpDataTagEntity_1.DlpDataTagEntity(self, entopts);
    }
    // Entity access: `client.DlpDataTagCategory().list()` / `client.DlpDataTagCategory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDataTagCategory(entopts) {
        const self = this;
        return new DlpDataTagCategoryEntity_1.DlpDataTagCategoryEntity(self, entopts);
    }
    // Entity access: `client.DlpDataTagCategoryTemplate().list()` / `client.DlpDataTagCategoryTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDataTagCategoryTemplate(entopts) {
        const self = this;
        return new DlpDataTagCategoryTemplateEntity_1.DlpDataTagCategoryTemplateEntity(self, entopts);
    }
    // Entity access: `client.DlpDataset().list()` / `client.DlpDataset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDataset(entopts) {
        const self = this;
        return new DlpDatasetEntity_1.DlpDatasetEntity(self, entopts);
    }
    // Entity access: `client.DlpDocumentFingerprint().list()` / `client.DlpDocumentFingerprint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpDocumentFingerprint(entopts) {
        const self = this;
        return new DlpDocumentFingerprintEntity_1.DlpDocumentFingerprintEntity(self, entopts);
    }
    // Entity access: `client.DlpEmail().list()` / `client.DlpEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpEmail(entopts) {
        const self = this;
        return new DlpEmailEntity_1.DlpEmailEntity(self, entopts);
    }
    // Entity access: `client.DlpEntry().list()` / `client.DlpEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpEntry(entopts) {
        const self = this;
        return new DlpEntryEntity_1.DlpEntryEntity(self, entopts);
    }
    // Entity access: `client.DlpIntegrationEntry().list()` / `client.DlpIntegrationEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpIntegrationEntry(entopts) {
        const self = this;
        return new DlpIntegrationEntryEntity_1.DlpIntegrationEntryEntity(self, entopts);
    }
    // Entity access: `client.DlpPredefinedEntry().list()` / `client.DlpPredefinedEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpPredefinedEntry(entopts) {
        const self = this;
        return new DlpPredefinedEntryEntity_1.DlpPredefinedEntryEntity(self, entopts);
    }
    // Entity access: `client.DlpProfile().list()` / `client.DlpProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpProfile(entopts) {
        const self = this;
        return new DlpProfileEntity_1.DlpProfileEntity(self, entopts);
    }
    // Entity access: `client.DlpSensitivityGroup().list()` / `client.DlpSensitivityGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpSensitivityGroup(entopts) {
        const self = this;
        return new DlpSensitivityGroupEntity_1.DlpSensitivityGroupEntity(self, entopts);
    }
    // Entity access: `client.DlpSensitivityGroupTemplate().list()` / `client.DlpSensitivityGroupTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpSensitivityGroupTemplate(entopts) {
        const self = this;
        return new DlpSensitivityGroupTemplateEntity_1.DlpSensitivityGroupTemplateEntity(self, entopts);
    }
    // Entity access: `client.DlpSensitivityLevel().list()` / `client.DlpSensitivityLevel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpSensitivityLevel(entopts) {
        const self = this;
        return new DlpSensitivityLevelEntity_1.DlpSensitivityLevelEntity(self, entopts);
    }
    // Entity access: `client.DlpSetting().list()` / `client.DlpSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DlpSetting(entopts) {
        const self = this;
        return new DlpSettingEntity_1.DlpSettingEntity(self, entopts);
    }
    // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Policy(entopts) {
        const self = this;
        return new PolicyEntity_1.PolicyEntity(self, entopts);
    }
    // Entity access: `client.PostureApiCreateRemediationJob().list()` / `client.PostureApiCreateRemediationJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiCreateRemediationJob(entopts) {
        const self = this;
        return new PostureApiCreateRemediationJobEntity_1.PostureApiCreateRemediationJobEntity(self, entopts);
    }
    // Entity access: `client.PostureApiCreateWebhookJob().list()` / `client.PostureApiCreateWebhookJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiCreateWebhookJob(entopts) {
        const self = this;
        return new PostureApiCreateWebhookJobEntity_1.PostureApiCreateWebhookJobEntity(self, entopts);
    }
    // Entity access: `client.PostureApiExportJob().list()` / `client.PostureApiExportJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiExportJob(entopts) {
        const self = this;
        return new PostureApiExportJobEntity_1.PostureApiExportJobEntity(self, entopts);
    }
    // Entity access: `client.PostureApiFinding().list()` / `client.PostureApiFinding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiFinding(entopts) {
        const self = this;
        return new PostureApiFindingEntity_1.PostureApiFindingEntity(self, entopts);
    }
    // Entity access: `client.PostureApiFindingInstance().list()` / `client.PostureApiFindingInstance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiFindingInstance(entopts) {
        const self = this;
        return new PostureApiFindingInstanceEntity_1.PostureApiFindingInstanceEntity(self, entopts);
    }
    // Entity access: `client.PostureApiFindingType().list()` / `client.PostureApiFindingType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiFindingType(entopts) {
        const self = this;
        return new PostureApiFindingTypeEntity_1.PostureApiFindingTypeEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedContentAssetList().list()` / `client.PostureApiPaginatedContentAssetList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedContentAssetList(entopts) {
        const self = this;
        return new PostureApiPaginatedContentAssetListEntity_1.PostureApiPaginatedContentAssetListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedExportJobList().list()` / `client.PostureApiPaginatedExportJobList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedExportJobList(entopts) {
        const self = this;
        return new PostureApiPaginatedExportJobListEntity_1.PostureApiPaginatedExportJobListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedFindingInstanceList().list()` / `client.PostureApiPaginatedFindingInstanceList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedFindingInstanceList(entopts) {
        const self = this;
        return new PostureApiPaginatedFindingInstanceListEntity_1.PostureApiPaginatedFindingInstanceListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedFindingList().list()` / `client.PostureApiPaginatedFindingList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedFindingList(entopts) {
        const self = this;
        return new PostureApiPaginatedFindingListEntity_1.PostureApiPaginatedFindingListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedFindingTypeList().list()` / `client.PostureApiPaginatedFindingTypeList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedFindingTypeList(entopts) {
        const self = this;
        return new PostureApiPaginatedFindingTypeListEntity_1.PostureApiPaginatedFindingTypeListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedRemediationJobList().list()` / `client.PostureApiPaginatedRemediationJobList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedRemediationJobList(entopts) {
        const self = this;
        return new PostureApiPaginatedRemediationJobListEntity_1.PostureApiPaginatedRemediationJobListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiPaginatedRemediationTypeList().list()` / `client.PostureApiPaginatedRemediationTypeList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiPaginatedRemediationTypeList(entopts) {
        const self = this;
        return new PostureApiPaginatedRemediationTypeListEntity_1.PostureApiPaginatedRemediationTypeListEntity(self, entopts);
    }
    // Entity access: `client.PostureApiWebhook().list()` / `client.PostureApiWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiWebhook(entopts) {
        const self = this;
        return new PostureApiWebhookEntity_1.PostureApiWebhookEntity(self, entopts);
    }
    // Entity access: `client.PostureApiWebhookList().list()` / `client.PostureApiWebhookList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostureApiWebhookList(entopts) {
        const self = this;
        return new PostureApiWebhookListEntity_1.PostureApiWebhookListEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareDlpSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareDlpSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareDlp' };
    }
    toString() {
        return 'CloudflareDlp ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareDlpSDK = CloudflareDlpSDK;
const SDK = CloudflareDlpSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareDlpSDK.js.map