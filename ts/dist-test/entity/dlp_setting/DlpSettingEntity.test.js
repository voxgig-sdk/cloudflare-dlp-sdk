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
(0, node_test_1.describe)('DlpSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.DlpSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dlp_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ai_context_analysis": { "a": true, "h": "Ai Context Analysis", "n": "ai_context_analysis", "r": false, "sh": "Whether AI context analysis is enabled at the account level.", "t": "`$BOOLEAN`", "key$": "ai_context_analysis", "index$": 0 }, "masking_level": { "a": true, "h": "Masking Level", "n": "masking_level", "r": false, "t": "`$ANY`", "key$": "masking_level", "index$": 1 }, "max_match_bytes": { "a": true, "fo": "int32", "h": "Max Match Bytes", "n": "max_match_bytes", "r": false, "sh": "Maximum number of bytes that the regular expression can match.", "t": "`$INTEGER`", "key$": "max_match_bytes", "index$": 2 }, "ocr": { "a": true, "h": "Ocr", "n": "ocr", "r": false, "sh": "Whether OCR is enabled at the account level.", "t": "`$BOOLEAN`", "key$": "ocr", "index$": 3 }, "payload_logging": { "a": true, "h": "Payload Logging", "n": "payload_logging", "r": false, "t": "`$ANY`", "key$": "payload_logging", "index$": 4 }, "public_key": { "a": true, "h": "Public Key", "n": "public_key", "r": false, "sh": "Base64-encoded public key for encrypting payload logs.", "t": "`$STRING`", "key$": "public_key", "index$": 5 }, "regex": { "a": true, "h": "Regex", "n": "regex", "r": true, "t": "`$STRING`", "key$": "regex", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "DLP account-level settings response.", "t": "`$OBJECT`", "key$": "result", "index$": 7 } }, "name": "dlp_setting", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/patterns/validate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/patterns/validate", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "patterns" }, { "lit": "validate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/limits", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/limits", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "limits" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/payload_log", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/payload_log", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "payload_log" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/settings", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/dlp/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/dlp/settings", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/dlp/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/dlp/settings", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/dlp/payload_log", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/dlp/payload_log", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "payload_log" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /accounts/{account_id}/dlp/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/dlp/settings", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "dlp_setting", "name__orig": "dlp_setting", "Name": "DlpSetting", "name_": "dlp_setting", "name-": "dlp-setting", "NAME": "DLP_SETTING", "index$": 15 }, { "active": true, "entity": "dlp_setting", "key$": "BasicDlpSettingFlow", "kind": "basic", "name": "BasicDlpSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dlp_setting_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "dlp_setting_ref01", "srcdatavar": "dlp_setting_ref01_data", "suffix": "_up0", "textfield": "public_key" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_setting_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "dlp_setting_ref01", "srcdatavar": "dlp_setting_ref01_data", "suffix": "_dt0" }, "m": { "id": "dlp_setting01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_setting_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "dlp_setting_ref01", "suffix": "_rm0" }, "m": { "id": "dlp_setting01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'DlpSetting', { "POST /accounts/{account_id}/dlp/patterns/validate": { "protocol": "http", "requestBody": { "description": "Validation query.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "max_match_bytes": { "description": "Maximum number of bytes that the regular expression can match.\n\nIf this is `null` then there is no limit on the length. Patterns can use\n`*` and `+`. Otherwise repeats should use a range `{m,n}` to restrict\npatterns to the length. If this field is missing, then a default length\nlimit is used.\n\nNote that the length is specified in bytes. Since regular expressions\nuse UTF-8 the pattern `.` can match up to 4 bytes. Hence `.{1,256}`\nhas a maximum length of 1024 bytes.", "type": "integer", "format": "int32", "minimum": 0, "nullable": true, "key$": "max_match_bytes" }, "regex": { "type": "string", "key$": "regex" } }, "required": ["regex"], "x-ref": "#/components/schemas/dlp_RegexValidationQuery", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/limits": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/payload_log": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/settings": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PATCH /accounts/{account_id}/dlp/settings": { "protocol": "http", "requestBody": { "description": "DLP settings fields to update.", "required": true, "content": { "application/json": { "schema": { "description": "Request model for updating DLP account-level settings.\nAll fields are optional. Missing fields behave differently for PUT vs PATCH:\n- PUT: missing fields reset to initial (unconfigured) values.\n- PATCH: missing fields keep existing values.", "type": "object", "properties": { "ai_context_analysis": { "description": "Whether AI context analysis is enabled at the account level.", "type": "boolean", "default": false, "nullable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "ai_context_analysis" }, "ocr": { "description": "Whether OCR is enabled at the account level.", "type": "boolean", "default": false, "nullable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "ocr" }, "payload_logging": { "allOf": [{ "description": "Request model for payload log settings within the DLP settings endpoint.\nUnlike the legacy endpoint, null and missing are treated identically here\n(both mean \"not provided\" for PATCH, \"reset to default\" for PUT).", "type": "object", "properties": { "masking_level": {}, "public_key": {} }, "x-ref": "#/components/schemas/dlp_PayloadLogSettingUpdate" }], "x-stainless-terraform-configurability": "computed_optional", "key$": "payload_logging" } }, "x-ref": "#/components/schemas/dlp_DlpSettingsUpdate", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /accounts/{account_id}/dlp/settings": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PUT /accounts/{account_id}/dlp/payload_log": { "protocol": "http", "requestBody": { "description": "New payload log settings.", "required": true, "content": { "application/json": { "schema": { "description": "Request model for the legacy payload log settings endpoint.", "type": "object", "properties": { "masking_level": { "allOf": [{ "description": "Masking level for payload logs.\n\n- `full`: The entire payload is masked.\n- `partial`: Only partial payload content is masked.\n- `clear`: No masking is applied to the payload content.\n- `default`: DLP uses its default masking behavior.", "type": "string", "enum": ["full", "partial", "clear", "default"], "x-ref": "#/components/schemas/dlp_PayloadLogMaskingLevel" }], "key$": "masking_level" }, "public_key": { "description": "Base64-encoded public key for encrypting payload logs.\n\n- Set to null or empty string to disable payload logging.\n- Set to a non-empty base64 string to enable payload logging with the given key.\n\nFor customers with configurable payload masking feature rolled out:\n- If the field is missing, the existing setting will be kept. Note that this is different from setting to null or empty string.\n\nFor all other customers:\n- If the field is missing, the existing setting will be cleared.", "type": "string", "nullable": true, "key$": "public_key" } }, "x-ref": "#/components/schemas/dlp_PayloadLogSettingUpdateLegacy", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PUT /accounts/{account_id}/dlp/settings": { "protocol": "http", "requestBody": { "description": "New DLP settings.", "required": true, "content": { "application/json": { "schema": { "description": "Request model for updating DLP account-level settings.\nAll fields are optional. Missing fields behave differently for PUT vs PATCH:\n- PUT: missing fields reset to initial (unconfigured) values.\n- PATCH: missing fields keep existing values.", "type": "object", "properties": { "ai_context_analysis": { "description": "Whether AI context analysis is enabled at the account level.", "type": "boolean", "default": false, "nullable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "ai_context_analysis" }, "ocr": { "description": "Whether OCR is enabled at the account level.", "type": "boolean", "default": false, "nullable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "ocr" }, "payload_logging": { "allOf": [{ "description": "Request model for payload log settings within the DLP settings endpoint.\nUnlike the legacy endpoint, null and missing are treated identically here\n(both mean \"not provided\" for PATCH, \"reset to default\" for PUT).", "type": "object", "properties": { "masking_level": {}, "public_key": {} }, "x-ref": "#/components/schemas/dlp_PayloadLogSettingUpdate" }], "x-stainless-terraform-configurability": "computed_optional", "key$": "payload_logging" } }, "x-ref": "#/components/schemas/dlp_DlpSettingsUpdate", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const dlp_setting_ref01_ent = client.DlpSetting();
        let dlp_setting_ref01_data = setup.data.new.dlp_setting['dlp_setting_ref01'];
        dlp_setting_ref01_data['account_id'] = setup.idmap['account01'];
        dlp_setting_ref01_data = (await dlp_setting_ref01_ent.create(dlp_setting_ref01_data)).data();
        (0, node_assert_1.default)(null != dlp_setting_ref01_data);
        // UPDATE
        const dlp_setting_ref01_data_up0 = {};
        const dlp_setting_ref01_markdef_up0 = { name: 'public_key', value: 'Mark01-dlp_setting_ref01_' + setup.now };
        dlp_setting_ref01_data_up0[dlp_setting_ref01_markdef_up0.name] = dlp_setting_ref01_markdef_up0.value;
        const dlp_setting_ref01_resdata_up0 = (await dlp_setting_ref01_ent.update(dlp_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != dlp_setting_ref01_resdata_up0);
        (0, node_assert_1.default)(dlp_setting_ref01_resdata_up0[dlp_setting_ref01_markdef_up0.name] === dlp_setting_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dlp_setting/DlpSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dlp_setting01', 'dlp_setting02', 'dlp_setting03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID'];
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
//# sourceMappingURL=DlpSettingEntity.test.js.map