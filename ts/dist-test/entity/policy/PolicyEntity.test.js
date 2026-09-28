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
(0, node_test_1.describe)('PolicyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.Policy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'policy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actions": { "a": true, "h": "Actions", "n": "actions", "r": true, "sh": "Actions to execute when this policy is triggered, grouped by action type.", "t": "`$OBJECT`", "key$": "actions", "index$": 0 }, "applies_to_all_integrations": { "a": true, "h": "Applies To All Integrations", "n": "applies_to_all_integrations", "r": true, "sh": "When true, the policy applies to all integrations for the account.", "t": "`$BOOLEAN`", "key$": "applies_to_all_integrations", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Optional description of what this policy does.", "t": "`$STRING`", "key$": "description", "index$": 2 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": true, "sh": "Display name for the policy configuration.", "t": "`$STRING`", "key$": "display_name", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Boolean specifying if the policy is enabled or disabled.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 5 }, "finding_type_id": { "a": true, "fo": "uuid", "h": "Finding Type Id", "n": "finding_type_id", "r": true, "sh": "The finding type this policy is associated with.", "t": "`$STRING`", "key$": "finding_type_id", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 7 }, "integration_ids": { "a": true, "h": "Integration Ids", "n": "integration_ids", "r": false, "sh": "The integrations this policy applies to.", "t": "`$ARRAY`", "key$": "integration_ids", "index$": 8 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 9 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Response body for a policy configuration.", "t": "`$OBJECT`", "key$": "result", "index$": 10 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Pagination and result information.", "t": "`$OBJECT`", "key$": "result_info", "index$": 11 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "policy", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/data-security/posture/policies", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/data-security/posture/policies", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/data-security/posture/policies/logs", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "497f6eca-6276-4993-bfeb-53cbbbba6f08", "k": "query", "n": "integration_id", "or": "integration_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "Auto-remediate publicly shared files", "k": "query", "n": "policy_name", "or": "policy_name", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "2026-04-01T00:00:00Z", "k": "query", "n": "since", "or": "since", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "2026-04-08T00:00:00Z", "k": "query", "n": "until", "or": "until", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/data-security/posture/policies/logs", "q": { "$action": "log", "exist": ["account_id", "integration_id", "page", "per_page", "policy_name", "since", "until"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }, { "lit": "logs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/data-security/posture/policies", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/data-security/posture/policies", "q": { "exist": ["account_id", "cursor"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/data-security/posture/policies/{policy_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "497f6eca-6276-4993-bfeb-53cbbbba6f08", "k": "param", "n": "id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/data-security/posture/policies/{policy_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "policy_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/data-security/posture/policies/{policy_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/data-security/posture/policies/{policy_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "policy_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/data-security/posture/policies/{policy_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "46148281d8a93d002ef242d8b0d5f9f6", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/data-security/posture/policies/{policy_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "policy_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "data-security" }, { "lit": "posture" }, { "lit": "policies" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "policy", "name__orig": "policy", "Name": "Policy", "name_": "policy", "name-": "policy", "NAME": "POLICY", "index$": 16 }, { "active": true, "entity": "policy", "key$": "BasicPolicyFlow", "kind": "basic", "name": "BasicPolicyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "policy_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "policy_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "policy_ref01", "srcdatavar": "policy_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-policy_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "policy_ref01", "srcdatavar": "policy_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "policy01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-policy_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "policy_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "policy01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "policy_ref01" } }], "index$": 5 }] }, 'Policy', { "POST /accounts/{account_id}/data-security/posture/policies": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for creating a new policy configuration.", "type": "object", "properties": { "actions": { "description": "Actions to execute when this policy is triggered, grouped by action type.\nA policy must contain at least one action across all groups and may include\nat most one remediation.", "type": "object", "properties": { "remediation_types": { "description": "Remediation actions to execute (at most one).", "type": "array", "items": { "description": "A remediation action to be executed.", "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/posture-api_PolicyRemediationActionInput" }, "maxItems": 1 }, "webhook_configs": { "description": "Webhook actions to execute.", "type": "array", "items": { "description": "A webhook action to be executed.", "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/posture-api_PolicyWebhookActionInput" } } }, "minProperties": 1, "x-ref": "#/components/schemas/posture-api_PolicyActionsInput", "key$": "actions" }, "applies_to_all_integrations": { "description": "When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.", "type": "boolean", "example": false, "key$": "applies_to_all_integrations" }, "description": { "description": "Optional description of what this policy does.", "type": "string", "example": "Automatically remove public access from files when detected", "maxLength": 1000, "x-stainless-terraform-configurability": "computed_optional", "key$": "description" }, "display_name": { "description": "Display name for the policy configuration.", "type": "string", "example": "Auto-remediate public files", "maxLength": 255, "key$": "display_name" }, "enabled": { "description": "Boolean specifying if the policy is enabled or disabled.", "type": "boolean", "example": true, "key$": "enabled" }, "finding_type_id": { "description": "The finding type this policy is associated with. All remediation actions must match this finding type.", "type": "string", "format": "uuid", "example": "5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a", "key$": "finding_type_id" }, "integration_ids": { "description": "The integrations this policy applies to. Required when applies_to_all_integrations is false.", "type": "array", "items": { "format": "uuid", "type": "string" }, "example": ["497f6eca-6276-4993-bfeb-53cbbbba6f08"], "x-stainless-terraform-configurability": "computed_optional", "key$": "integration_ids" } }, "required": ["display_name", "enabled", "applies_to_all_integrations", "finding_type_id", "actions"], "x-ref": "#/components/schemas/posture-api_CreatePolicyRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }] }, "GET /accounts/{account_id}/data-security/posture/policies/logs": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "name": "since", "in": "query", "description": "Lower bound on the log entry timestamp. Accepts ISO 8601 / RFC3339 or epoch seconds. Defaults to 7 days before `until`. The window between `since` and `until` cannot exceed 180 days.", "schema": { "type": "string", "format": "date-time" }, "example": "2026-04-01T00:00:00Z", "index$": 1 }, { "name": "until", "in": "query", "description": "Upper bound on the log entry timestamp. Accepts ISO 8601 / RFC3339 or epoch seconds. Defaults to the current time. Must be greater than or equal to `since`.", "schema": { "type": "string", "format": "date-time" }, "example": "2026-04-08T00:00:00Z", "index$": 2 }, { "name": "integration_id", "in": "query", "description": "Comma-separated list of CASB integration IDs to filter by. At most 100 values, each at most 128 characters. Values outside the account's tenancy allowlist are silently ignored. When omitted, results are scoped to the full allowlist.", "schema": { "type": "string" }, "example": "497f6eca-6276-4993-bfeb-53cbbbba6f08", "index$": 3 }, { "name": "policy_name", "in": "query", "description": "Comma-separated list of policy display names to filter by. At most 100 values, each at most 255 characters.", "schema": { "type": "string" }, "example": "Auto-remediate publicly shared files", "index$": 4 }, { "description": "A page number within the paginated result set.", "in": "query", "name": "page", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/posture-api_Page", "index$": 5 }, { "description": "Number of results to return per page.", "in": "query", "name": "per_page", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/posture-api_PerPage", "index$": 6 }] }, "GET /accounts/{account_id}/data-security/posture/policies": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "name": "cursor", "in": "query", "description": "Cursor for pagination. Obtained from the `result_info.cursor` field of a previous response.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /accounts/{account_id}/data-security/posture/policies/{policy_id}": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "name": "policy_id", "in": "path", "description": "The UUID of the policy configuration to retrieve.", "required": true, "schema": { "type": "string", "format": "uuid", "example": "497f6eca-6276-4993-bfeb-53cbbbba6f08" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/data-security/posture/policies/{policy_id}": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "description": "A UUID identifying the policy.", "in": "path", "name": "policy_id", "required": true, "schema": { "type": "string", "format": "uuid" }, "x-ref": "#/components/parameters/posture-api_PolicyId", "index$": 1 }] }, "PUT /accounts/{account_id}/data-security/posture/policies/{policy_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for updating an existing policy configuration.", "type": "object", "properties": { "actions": { "description": "Actions to execute when this policy is triggered, grouped by action type.\nA policy must contain at least one action across all groups and may include\nat most one remediation.", "type": "object", "properties": { "remediation_types": { "description": "Remediation actions to execute (at most one).", "type": "array", "items": { "description": "A remediation action to be executed.", "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/posture-api_PolicyRemediationActionInput" }, "maxItems": 1 }, "webhook_configs": { "description": "Webhook actions to execute.", "type": "array", "items": { "description": "A webhook action to be executed.", "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/posture-api_PolicyWebhookActionInput" } } }, "minProperties": 1, "x-ref": "#/components/schemas/posture-api_PolicyActionsInput", "key$": "actions" }, "applies_to_all_integrations": { "description": "When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.", "type": "boolean", "example": false, "key$": "applies_to_all_integrations" }, "description": { "description": "Optional description of what this policy does.", "type": "string", "example": "Automatically remove public access from files when detected", "maxLength": 1000, "x-stainless-terraform-configurability": "computed_optional", "key$": "description" }, "display_name": { "description": "Display name for the policy configuration.", "type": "string", "example": "Auto-remediate public files", "maxLength": 255, "key$": "display_name" }, "enabled": { "description": "Boolean specifying if the policy is enabled or disabled.", "type": "boolean", "example": true, "key$": "enabled" }, "integration_ids": { "description": "The integrations this policy applies to. Required when applies_to_all_integrations is false.", "type": "array", "items": { "format": "uuid", "type": "string" }, "example": ["497f6eca-6276-4993-bfeb-53cbbbba6f08"], "x-stainless-terraform-configurability": "computed_optional", "key$": "integration_ids" } }, "required": ["display_name", "enabled", "applies_to_all_integrations", "actions"], "x-ref": "#/components/schemas/posture-api_UpdatePolicyRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID for the user making the request.", "example": "46148281d8a93d002ef242d8b0d5f9f6", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/posture-api_AccountTag", "index$": 0 }, { "name": "policy_id", "in": "path", "description": "Policy configuration ID", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const policy_ref01_ent = client.Policy();
        let policy_ref01_data = setup.data.new.policy['policy_ref01'];
        policy_ref01_data['account_id'] = setup.idmap['account01'];
        policy_ref01_data = (await policy_ref01_ent.create(policy_ref01_data)).data();
        (0, node_assert_1.default)(null != policy_ref01_data.id);
        // LIST
        const policy_ref01_match = {};
        policy_ref01_match['account_id'] = setup.idmap['account01'];
        const policy_ref01_list = (await policy_ref01_ent.list(policy_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(policy_ref01_list, { id: policy_ref01_data.id })));
        // UPDATE
        const policy_ref01_data_up0 = {};
        policy_ref01_data_up0.id = policy_ref01_data.id;
        policy_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const policy_ref01_markdef_up0 = { name: 'description', value: 'Mark01-policy_ref01_' + setup.now };
        policy_ref01_data_up0[policy_ref01_markdef_up0.name] = policy_ref01_markdef_up0.value;
        const policy_ref01_resdata_up0 = (await policy_ref01_ent.update(policy_ref01_data_up0)).data();
        (0, node_assert_1.default)(policy_ref01_resdata_up0.id === policy_ref01_data_up0.id);
        (0, node_assert_1.default)(policy_ref01_resdata_up0[policy_ref01_markdef_up0.name] === policy_ref01_markdef_up0.value);
        // LOAD
        const policy_ref01_match_dt0 = {};
        policy_ref01_match_dt0.id = policy_ref01_data.id;
        const policy_ref01_data_dt0 = (await policy_ref01_ent.load(policy_ref01_match_dt0)).data();
        (0, node_assert_1.default)(policy_ref01_data_dt0.id === policy_ref01_data.id);
        // REMOVE
        const policy_ref01_match_rm0 = { id: policy_ref01_data.id };
        await policy_ref01_ent.remove(policy_ref01_match_rm0);
        // LIST
        const policy_ref01_match_rt0 = {};
        policy_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const policy_ref01_list_rt0 = (await policy_ref01_ent.list(policy_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(policy_ref01_list_rt0, { id: policy_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/policy/PolicyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['policy01', 'policy02', 'policy03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_POLICY_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_POLICY_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_POLICY_ENTID'];
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
//# sourceMappingURL=PolicyEntity.test.js.map