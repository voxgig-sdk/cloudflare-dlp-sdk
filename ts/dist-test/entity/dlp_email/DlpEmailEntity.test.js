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
(0, node_test_1.describe)('DlpEmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.DlpEmail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dlp_email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action": { "a": true, "h": "Action", "n": "action", "r": true, "t": "`$ANY`", "key$": "action", "index$": 0 }, "auth_requirements": { "a": true, "h": "Auth Requirements", "n": "auth_requirements", "r": true, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "auth_requirements", "index$": 1 }, "conditions": { "a": true, "h": "Conditions", "n": "conditions", "r": true, "sh": "Triggered if all conditions match.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 3 }, "key$": "conditions", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 5 }, "new_priorities": { "a": true, "h": "New Priorities", "n": "new_priorities", "r": true, "t": "`$OBJECT`", "key$": "new_priorities", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "result", "index$": 7 } }, "name": "dlp_email", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/email/account_mapping", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/email/account_mapping", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "account_mapping" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/email/rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/email/rules", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/email/rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/email/rules", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/email/rules/{rule_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "rule_id", "or": "rule_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/email/rules/{rule_id}", "q": { "exist": ["account_id", "rule_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }, { "var": "rule_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/email/account_mapping", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/email/account_mapping", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "account_mapping" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/dlp/email/rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/dlp/email/rules", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/dlp/email/rules/{rule_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "rule_id", "or": "rule_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/dlp/email/rules/{rule_id}", "q": { "exist": ["account_id", "rule_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }, { "var": "rule_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/dlp/email/rules/{rule_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "rule_id", "or": "rule_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/dlp/email/rules/{rule_id}", "q": { "exist": ["account_id", "rule_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "email" }, { "lit": "rules" }, { "var": "rule_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "dlp_email", "name__orig": "dlp_email", "Name": "DlpEmail", "name_": "dlp_email", "name-": "dlp-email", "NAME": "DLP_EMAIL", "index$": 7 }, { "active": true, "entity": "dlp_email", "key$": "BasicDlpEmailFlow", "kind": "basic", "name": "BasicDlpEmailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dlp_email_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "dlp_email_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "dlp_email_ref01", "srcdatavar": "dlp_email_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_email_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "dlp_email_ref01", "srcdatavar": "dlp_email_ref01_data", "suffix": "_dt0" }, "m": { "id": "dlp_email01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_email_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "dlp_email_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "dlp_email01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "dlp_email_ref01" } }], "index$": 5 }] }, 'DlpEmail', { "POST /accounts/{account_id}/dlp/email/account_mapping": { "protocol": "http", "requestBody": { "description": "Account mapping.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "auth_requirements": { "oneOf": [{ "properties": { "allowed_microsoft_organizations": {}, "type": {} }, "required": ["allowed_microsoft_organizations", "type"], "type": "object" }, { "properties": { "type": {} }, "required": ["type"], "type": "object" }], "x-ref": "#/components/schemas/dlp_AddinAuth", "key$": "auth_requirements" } }, "required": ["auth_requirements"], "x-ref": "#/components/schemas/dlp_UpdateAddinAccountMapping", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /accounts/{account_id}/dlp/email/rules": { "protocol": "http", "requestBody": { "description": "Rule description.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "action": { "oneOf": [{ "properties": { "action": {}, "message": {} }, "required": ["action"], "type": "object" }], "x-ref": "#/components/schemas/dlp_EmailRuleAction", "key$": "action" }, "conditions": { "description": "Triggered if all conditions match.", "type": "array", "items": { "type": "object", "properties": { "operator": { "enum": [], "type": "string", "x-ref": "#/components/schemas/dlp_EmailRuleOperator" }, "selector": { "enum": [], "type": "string", "x-ref": "#/components/schemas/dlp_EmailRuleSelector" }, "value": { "oneOf": [], "x-ref": "#/components/schemas/dlp_EmailRuleValue" } }, "required": ["selector", "operator", "value"], "x-ref": "#/components/schemas/dlp_EmailRuleCondition" }, "key$": "conditions" }, "description": { "type": "string", "nullable": true, "key$": "description" }, "enabled": { "type": "boolean", "key$": "enabled" }, "name": { "type": "string", "key$": "name" } }, "required": ["name", "enabled", "conditions", "action"], "x-ref": "#/components/schemas/dlp_CreateEmailRule", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/email/rules": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/email/rules/{rule_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rule_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "GET /accounts/{account_id}/dlp/email/account_mapping": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PATCH /accounts/{account_id}/dlp/email/rules": { "protocol": "http", "requestBody": { "description": "Rule priorities.", "required": true, "content": { "application/json": { "schema": { "description": "Used to update multiple email rule priorities as an atomic action,\nto support patterns such as swapping the priorities of two email rules.", "type": "object", "properties": { "new_priorities": { "type": "object", "additionalProperties": { "format": "int32", "minimum": 0, "type": "integer" }, "key$": "new_priorities" } }, "required": ["new_priorities"], "x-ref": "#/components/schemas/dlp_UpdateEmailRulePriorities", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /accounts/{account_id}/dlp/email/rules/{rule_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rule_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "PUT /accounts/{account_id}/dlp/email/rules/{rule_id}": { "protocol": "http", "requestBody": { "description": "Rule description.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "action": { "oneOf": [{ "properties": { "action": {}, "message": {} }, "required": ["action"], "type": "object" }], "x-ref": "#/components/schemas/dlp_EmailRuleAction", "key$": "action" }, "conditions": { "description": "Triggered if all conditions match.", "type": "array", "items": { "type": "object", "properties": { "operator": { "enum": [], "type": "string", "x-ref": "#/components/schemas/dlp_EmailRuleOperator" }, "selector": { "enum": [], "type": "string", "x-ref": "#/components/schemas/dlp_EmailRuleSelector" }, "value": { "oneOf": [], "x-ref": "#/components/schemas/dlp_EmailRuleValue" } }, "required": ["selector", "operator", "value"], "x-ref": "#/components/schemas/dlp_EmailRuleCondition" }, "key$": "conditions" }, "description": { "type": "string", "nullable": true, "key$": "description" }, "enabled": { "type": "boolean", "key$": "enabled" }, "name": { "type": "string", "key$": "name" } }, "required": ["name", "enabled", "conditions", "action"], "x-ref": "#/components/schemas/dlp_CreateEmailRule", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rule_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const dlp_email_ref01_ent = client.DlpEmail();
        let dlp_email_ref01_data = setup.data.new.dlp_email['dlp_email_ref01'];
        dlp_email_ref01_data['account_id'] = setup.idmap['account01'];
        dlp_email_ref01_data = (await dlp_email_ref01_ent.create(dlp_email_ref01_data)).data();
        (0, node_assert_1.default)(null != dlp_email_ref01_data);
        // LIST
        const dlp_email_ref01_match = {};
        dlp_email_ref01_match['account_id'] = setup.idmap['account01'];
        const dlp_email_ref01_list = (await dlp_email_ref01_ent.list(dlp_email_ref01_match)).map((e) => e.data());
        // UPDATE
        const dlp_email_ref01_data_up0 = {};
        dlp_email_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const dlp_email_ref01_markdef_up0 = { name: 'description', value: 'Mark01-dlp_email_ref01_' + setup.now };
        dlp_email_ref01_data_up0[dlp_email_ref01_markdef_up0.name] = dlp_email_ref01_markdef_up0.value;
        const dlp_email_ref01_resdata_up0 = (await dlp_email_ref01_ent.update(dlp_email_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != dlp_email_ref01_resdata_up0);
        (0, node_assert_1.default)(dlp_email_ref01_resdata_up0[dlp_email_ref01_markdef_up0.name] === dlp_email_ref01_markdef_up0.value);
        // LIST
        const dlp_email_ref01_match_rt0 = {};
        dlp_email_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const dlp_email_ref01_list_rt0 = (await dlp_email_ref01_ent.list(dlp_email_ref01_match_rt0)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dlp_email/DlpEmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dlp_email01', 'dlp_email02', 'dlp_email03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID'];
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
//# sourceMappingURL=DlpEmailEntity.test.js.map