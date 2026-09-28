"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PostureApiCreateRemediationJobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.PostureApiCreateRemediationJob();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'posture_api_create_remediation_job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "sh": "Array of error messages.", "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "finding_instance_ids": { "a": true, "h": "Finding Instance Ids", "n": "finding_instance_ids", "r": true, "sh": "UUIDs identifying Finding Instances.", "t": "`$ARRAY`", "key$": "finding_instance_ids", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "sh": "Array of informational messages.", "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "remediation_type_id": { "a": true, "fo": "uuid", "h": "Remediation Type Id", "n": "remediation_type_id", "r": true, "sh": "A UUID identifying this Remediation Type.", "t": "`$STRING`", "key$": "remediation_type_id", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 10 }, "key$": "result", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 } }, "name": "posture_api_create_remediation_job", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/data-security/posture/remediations/jobs", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/data-security/posture/remediations/jobs", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "remediations" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "posture_api_create_remediation_job", "name__orig": "posture_api_create_remediation_job", "Name": "PostureApiCreateRemediationJob", "name_": "posture_api_create_remediation_job", "name-": "posture-api-create-remediation-job", "NAME": "POSTURE_API_CREATE_REMEDIATION_JOB", "index$": 17 }, { "active": true, "entity": "posture_api_create_remediation_job", "key$": "BasicPostureApiCreateRemediationJobFlow", "kind": "basic", "name": "BasicPostureApiCreateRemediationJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "posture_api_create_remediation_job_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PostureApiCreateRemediationJob', { "POST /accounts/{account_id}/data-security/posture/remediations/jobs": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "Request body for creating remediation jobs.", "type": "object", "properties": { "finding_instance_ids": { "description": "UUIDs identifying Finding Instances.", "type": "array", "items": { "format": "uuid", "type": "string" }, "example": ["3f7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d5e", "ab7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d7g"], "key$": "finding_instance_ids" }, "remediation_type_id": { "description": "A UUID identifying this Remediation Type.", "type": "string", "format": "uuid", "example": "5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a", "key$": "remediation_type_id" } }, "required": ["finding_instance_ids", "remediation_type_id"], "x-ref": "#/components/schemas/posture-api_RemediationJobsCreateRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const posture_api_create_remediation_job_ref01_ent = client.PostureApiCreateRemediationJob();
        let posture_api_create_remediation_job_ref01_data = setup.data.new.posture_api_create_remediation_job['posture_api_create_remediation_job_ref01'];
        posture_api_create_remediation_job_ref01_data['account_id'] = setup.idmap['account01'];
        posture_api_create_remediation_job_ref01_data = (await posture_api_create_remediation_job_ref01_ent.create(posture_api_create_remediation_job_ref01_data)).data();
        (0, node_assert_1.default)(null != posture_api_create_remediation_job_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/posture_api_create_remediation_job/PostureApiCreateRemediationJobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['posture_api_create_remediation_job01', 'posture_api_create_remediation_job02', 'posture_api_create_remediation_job03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareDlpSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_DLP_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_DLP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PostureApiCreateRemediationJobEntity.test.js.map