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
(0, node_test_1.describe)('PostureApiPaginatedContentAssetListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.PostureApiPaginatedContentAssetList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'posture_api_paginated_content_asset_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "Array of content asset objects.", "t": "`$ARRAY`", "key$": "result", "index$": 2 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Pagination and result information.", "t": "`$OBJECT`", "key$": "result_info", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "posture_api_paginated_content_asset_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/data-security/posture/content", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "dlp_profile_id", "or": "dlp_profile_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "integration_id", "or": "integration_id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "max_affliction_date", "or": "max_affliction_date", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "min_affliction_date", "or": "min_affliction_date", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": "GOOGLE_WORKSPACE", "k": "query", "n": "vendor", "or": "vendor", "r": false, "t": "`$STRING`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/data-security/posture/content", "q": { "exist": ["account_id", "direction", "dlp_profile_id", "integration_id", "max_affliction_date", "min_affliction_date", "order", "page", "per_page", "search", "vendor"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "posture_api_paginated_content_asset_list", "name__orig": "posture_api_paginated_content_asset_list", "Name": "PostureApiPaginatedContentAssetList", "name_": "posture_api_paginated_content_asset_list", "name-": "posture-api-paginated-content-asset-list", "NAME": "POSTURE_API_PAGINATED_CONTENT_ASSET_LIST", "index$": 23 }, { "active": true, "entity": "posture_api_paginated_content_asset_list", "key$": "BasicPostureApiPaginatedContentAssetListFlow", "kind": "basic", "name": "BasicPostureApiPaginatedContentAssetListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "posture_api_paginated_content_asset_list_ref01" } }], "index$": 0 }] }, 'PostureApiPaginatedContentAssetList', { "GET /accounts/{account_id}/data-security/posture/content": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "description": "Direction to order results.", "in": "query", "name": "direction", "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/posture-api_Direction", "index$": 1 }, { "name": "dlp_profile_id", "in": "query", "description": "Filter by an DLP profile ID", "schema": { "type": "string", "format": "uuid" }, "index$": 2 }, { "description": "Filter by an integration ID", "in": "query", "name": "integration_id", "schema": { "type": "string", "format": "uuid" }, "x-ref": "#/components/parameters/posture-api_IntegrationId", "index$": 3 }, { "description": "Filter to view findings that occurred on or before the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.", "in": "query", "name": "max_affliction_date", "schema": { "type": "string", "format": "date-time" }, "x-ref": "#/components/parameters/posture-api_MaxAfflictionDate", "index$": 4 }, { "description": "Filter to view findings that occurred on or after the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.", "in": "query", "name": "min_affliction_date", "schema": { "type": "string", "format": "date-time" }, "x-ref": "#/components/parameters/posture-api_MinAfflictionDate", "index$": 5 }, { "name": "order", "in": "query", "description": "Which field to use when ordering content assets.", "schema": { "type": "string", "enum": ["asset_name", "dlp_profile_count", "integration_name", "latest_affliction_date"] }, "index$": 6 }, { "description": "A page number within the paginated result set.", "in": "query", "name": "page", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/posture-api_Page", "index$": 7 }, { "description": "Number of results to return per page.", "in": "query", "name": "per_page", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/posture-api_PerPage", "index$": 8 }, { "description": "A search term.", "in": "query", "name": "search", "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_Search", "index$": 9 }, { "description": "Filter by vendor", "in": "query", "name": "vendor", "schema": { "description": "Supported vendor types for integrations.", "type": "string", "example": "GOOGLE_WORKSPACE", "enum": ["ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "MICROSOFT_INTERNAL", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM"], "x-ref": "#/components/schemas/posture-api_VendorsEnum" }, "x-ref": "#/components/parameters/posture-api_Vendor", "index$": 10 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let posture_api_paginated_content_asset_list_ref01_data = Object.values(setup.data.existing.posture_api_paginated_content_asset_list)[0];
        // LIST
        const posture_api_paginated_content_asset_list_ref01_ent = client.PostureApiPaginatedContentAssetList();
        const posture_api_paginated_content_asset_list_ref01_match = {};
        posture_api_paginated_content_asset_list_ref01_match['account_id'] = setup.idmap['account01'];
        const posture_api_paginated_content_asset_list_ref01_list = (await posture_api_paginated_content_asset_list_ref01_ent.list(posture_api_paginated_content_asset_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/posture_api_paginated_content_asset_list/PostureApiPaginatedContentAssetListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['posture_api_paginated_content_asset_list01', 'posture_api_paginated_content_asset_list02', 'posture_api_paginated_content_asset_list03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_CONTENT_ASSET_LIST_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_CONTENT_ASSET_LIST_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_CONTENT_ASSET_LIST_ENTID'];
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
//# sourceMappingURL=PostureApiPaginatedContentAssetListEntity.test.js.map