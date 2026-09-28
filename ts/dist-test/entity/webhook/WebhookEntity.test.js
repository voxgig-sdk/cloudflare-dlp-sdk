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
(0, node_test_1.describe)('WebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.Webhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "authentication_type": { "a": true, "h": "Authentication Type", "n": "authentication_type", "r": true, "sh": "Type of authentication used for the webhook.", "t": "`$STRING`", "key$": "authentication_type", "index$": 0 }, "destination_url": { "a": true, "fo": "uri", "h": "Destination Url", "n": "destination_url", "r": true, "sh": "Target URL for the webhook configuration.", "t": "`$STRING`", "key$": "destination_url", "index$": 1 }, "headers": { "a": true, "h": "Headers", "n": "headers", "r": false, "sh": "List of custom headers to include in webhook requests.", "t": "`$ARRAY`", "key$": "headers", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "sh": "Account-specified display label for the webhook configuration.", "t": "`$STRING`", "key$": "label", "index$": 4 }, "signing_secret": { "a": true, "h": "Signing Secret", "n": "signing_secret", "r": false, "sh": "Secret key used for HMAC signing when authentication_type is \"HMAC-Signing\".", "t": "`$STRING`", "wo": true, "key$": "signing_secret", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "op": { "update": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Status of the webhook configuration.", "t": "`$STRING`", "key$": "status", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/data-security/posture/webhooks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/data-security/posture/webhooks", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/data-security/posture/webhooks/evaluate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/data-security/posture/webhooks/evaluate", "q": { "$action": "evaluate", "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "webhooks" }, { "lit": "evaluate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "webhook_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "webhook_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "webhook", "name__orig": "webhook", "Name": "Webhook", "name_": "webhook", "name-": "webhook", "NAME": "WEBHOOK", "index$": 32 }, { "active": true, "entity": "webhook", "key$": "BasicWebhookFlow", "kind": "basic", "name": "BasicWebhookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhook_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "webhook_ref01", "srcdatavar": "webhook_ref01_data", "suffix": "_up0", "textfield": "authentication_type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhook_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "webhook_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "webhook01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'Webhook', { "POST /accounts/{account_id}/data-security/posture/webhooks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for creating a new webhook configuration.", "type": "object", "properties": { "authentication_type": { "description": "Type of authentication used for the webhook.", "type": "string", "example": "Bearer Auth", "enum": ["Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing"], "key$": "authentication_type" }, "destination_url": { "description": "Target URL for the webhook configuration. Where resulting data will be sent.", "type": "string", "format": "uri", "example": "https://example.com/webhook", "key$": "destination_url" }, "headers": { "description": "List of custom headers to include in webhook requests.", "type": "array", "items": { "description": "A header to include in webhook requests. On Create/Evaluate, both key and value are required. On Update, omitting value means \"keep existing value\".", "type": "object", "properties": { "key": { "description": "Header key name.", "type": "string", "example": "Authorization", "maxLength": 255 }, "value": { "description": "Header value. Required on Create and Evaluate. On Update, omit or set to null to keep existing value.", "type": "string", "example": "Bearer token123", "maxLength": 4096, "nullable": true, "writeOnly": true, "x-sensitive": true } }, "required": ["key"], "x-ref": "#/components/schemas/posture-api_WebhookHeaderInput" }, "example": [{ "key": "Authorization", "value": "Bearer token123" }, { "key": "X-Custom-Header", "value": "value" }], "key$": "headers" }, "label": { "description": "Account-specified display label for the webhook configuration.", "type": "string", "example": "Send to Slack", "key$": "label" }, "signing_secret": { "description": "Secret key used for HMAC signing when authentication_type is \"HMAC-Signing\".", "type": "string", "example": "my-secret-key", "writeOnly": true, "x-sensitive": true, "key$": "signing_secret" }, "status": { "description": "Status of the webhook configuration. Defaults to enabled when omitted.", "type": "string", "example": "enabled", "default": "enabled", "enum": ["enabled", "disabled"], "key$": "status" } }, "required": ["label", "destination_url", "authentication_type"], "x-ref": "#/components/schemas/posture-api_CreateWebhookRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }] }, "POST /accounts/{account_id}/data-security/posture/webhooks/evaluate": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for testing a webhook configuration before creating it.", "type": "object", "properties": { "authentication_type": { "description": "Type of authentication to use for the test webhook request.", "type": "string", "example": "Bearer Auth", "enum": ["Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing"] }, "destination_url": { "description": "Target URL to send the test webhook event to.", "type": "string", "format": "uri", "example": "https://example.com/webhook" }, "headers": { "description": "List of custom headers to include in the test webhook request.", "type": "array", "items": { "description": "A header to include in webhook requests. On Create/Evaluate, both key and value are required. On Update, omitting value means \"keep existing value\".", "type": "object", "properties": { "key": { "description": "Header key name.", "type": "string", "example": "Authorization", "maxLength": 255 }, "value": { "description": "Header value. Required on Create and Evaluate. On Update, omit or set to null to keep existing value.", "type": "string", "example": "Bearer token123", "maxLength": 4096, "nullable": true, "writeOnly": true, "x-sensitive": true } }, "required": ["key"], "x-ref": "#/components/schemas/posture-api_WebhookHeaderInput" }, "example": [{ "key": "Authorization", "value": "Bearer token123" }, { "key": "X-Custom-Header", "value": "value" }] }, "signing_secret": { "description": "Secret key used for HMAC signing when authentication_type is \"HMAC-Signing\".", "type": "string", "example": "my-secret-key", "writeOnly": true, "x-sensitive": true } }, "required": ["destination_url", "authentication_type"], "x-ref": "#/components/schemas/posture-api_EvaluateNewWebhookRequest" } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }] }, "DELETE /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "description": "A UUID identifying the webhook configuration.", "in": "path", "name": "webhook_id", "required": true, "schema": { "type": "string", "format": "uuid" }, "x-ref": "#/components/parameters/posture-api_WebhookId", "index$": 1 }] }, "PUT /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for updating an existing webhook configuration.", "type": "object", "properties": { "authentication_type": { "description": "Type of authentication used for the webhook.", "type": "string", "example": "Bearer Auth", "enum": ["Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing"], "key$": "authentication_type" }, "destination_url": { "description": "Target URL for the webhook configuration. Where resulting data will be sent.", "type": "string", "format": "uri", "example": "https://example.com/webhook", "key$": "destination_url" }, "headers": { "description": "List of custom headers to include in webhook requests.", "type": "array", "items": { "description": "A header to include in webhook requests. On Create/Evaluate, both key and value are required. On Update, omitting value means \"keep existing value\".", "type": "object", "properties": { "key": { "description": "Header key name.", "type": "string", "example": "Authorization", "maxLength": 255 }, "value": { "description": "Header value. Required on Create and Evaluate. On Update, omit or set to null to keep existing value.", "type": "string", "example": "Bearer token123", "maxLength": 4096, "nullable": true, "writeOnly": true, "x-sensitive": true } }, "required": ["key"], "x-ref": "#/components/schemas/posture-api_WebhookHeaderInput" }, "example": [{ "key": "Authorization", "value": "Bearer token123" }, { "key": "X-Custom-Header", "value": "value" }], "key$": "headers" }, "label": { "description": "Account-specified display label for the webhook configuration.", "type": "string", "example": "Send to Slack", "key$": "label" }, "signing_secret": { "description": "Secret key used for HMAC signing when authentication_type is \"HMAC-Signing\".", "type": "string", "example": "my-secret-key", "writeOnly": true, "x-sensitive": true, "key$": "signing_secret" }, "status": { "description": "Status of the webhook configuration.", "type": "string", "example": "enabled", "enum": ["enabled", "disabled"], "key$": "status" } }, "required": ["label", "destination_url", "authentication_type", "status"], "x-ref": "#/components/schemas/posture-api_UpdateWebhookRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "description": "A UUID identifying the webhook configuration.", "in": "path", "name": "webhook_id", "required": true, "schema": { "type": "string", "format": "uuid" }, "x-ref": "#/components/parameters/posture-api_WebhookId", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhook_ref01_ent = client.Webhook();
        let webhook_ref01_data = setup.data.new.webhook['webhook_ref01'];
        webhook_ref01_data['account_id'] = setup.idmap['account01'];
        webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data();
        (0, node_assert_1.default)(null != webhook_ref01_data.id);
        // UPDATE
        const webhook_ref01_data_up0 = {};
        webhook_ref01_data_up0.id = webhook_ref01_data.id;
        webhook_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const webhook_ref01_markdef_up0 = { name: 'authentication_type', value: 'Mark01-webhook_ref01_' + setup.now };
        webhook_ref01_data_up0[webhook_ref01_markdef_up0.name] = webhook_ref01_markdef_up0.value;
        const webhook_ref01_resdata_up0 = (await webhook_ref01_ent.update(webhook_ref01_data_up0)).data();
        (0, node_assert_1.default)(webhook_ref01_resdata_up0.id === webhook_ref01_data_up0.id);
        (0, node_assert_1.default)(webhook_ref01_resdata_up0[webhook_ref01_markdef_up0.name] === webhook_ref01_markdef_up0.value);
        // REMOVE
        const webhook_ref01_match_rm0 = { id: webhook_ref01_data.id };
        await webhook_ref01_ent.remove(webhook_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook/WebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook01', 'webhook02', 'webhook03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_WEBHOOK_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_WEBHOOK_ENTID'];
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
//# sourceMappingURL=WebhookEntity.test.js.map