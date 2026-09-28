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
(0, node_test_1.describe)('DlpDatasetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DLP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDlpSDK.test();
        const ent = testsdk.DlpDataset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dlp_dataset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "case_sensitive": { "a": true, "h": "Case Sensitive", "n": "case_sensitive", "r": false, "sh": "Only applies to custom word lists.", "t": "`$BOOLEAN`", "key$": "case_sensitive", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "The description of the dataset.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "encoding_version": { "a": true, "fo": "int32", "h": "Encoding Version", "n": "encoding_version", "r": false, "sh": "Dataset encoding version Non-secret custom word lists with no header are always version 1.", "t": "`$INTEGER`", "key$": "encoding_version", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name of the dataset, must be unique.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 5 }, "secret": { "a": true, "h": "Secret", "n": "secret", "r": false, "sh": "Generate a secret dataset.", "t": "`$BOOLEAN`", "key$": "secret", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "dlp_dataset", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "entry_id", "or": "entry_id", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "version_id", "or": "version", "r": true, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}", "q": { "exist": ["account_id", "dataset_id", "entry_id", "version_id"] }, "r": { "param": { "version": "version_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "dataset_id" }, { "lit": "versions" }, { "var": "version_id" }, { "lit": "entries" }, { "var": "entry_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "version", "or": "version", "r": true, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}", "q": { "exist": ["account_id", "dataset_id", "version"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "dataset_id" }, { "lit": "upload" }, { "var": "version" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "version", "or": "version", "r": true, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}", "q": { "exist": ["account_id", "dataset_id", "version"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "dataset_id" }, { "lit": "versions" }, { "var": "version" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}/upload", "q": { "exist": ["account_id", "dataset_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "dataset_id" }, { "lit": "upload" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/dlp/datasets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dlp/datasets", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/datasets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/datasets", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dlp/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "dataset_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/dlp/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "dataset_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/dlp/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/dlp/datasets/{dataset_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "dataset_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dlp" }, { "lit": "datasets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "dlp_dataset", "name__orig": "dlp_dataset", "Name": "DlpDataset", "name_": "dlp_dataset", "name-": "dlp-dataset", "NAME": "DLP_DATASET", "index$": 5 }, { "active": true, "entity": "dlp_dataset", "key$": "BasicDlpDatasetFlow", "kind": "basic", "name": "BasicDlpDatasetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dlp_dataset_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "dlp_dataset_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "dlp_dataset_ref01", "srcdatavar": "dlp_dataset_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_dataset_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "dlp_dataset_ref01", "srcdatavar": "dlp_dataset_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "dlp_dataset01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dlp_dataset_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "dlp_dataset_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "dlp_dataset01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "dlp_dataset_ref01" } }], "index$": 5 }] }, 'DlpDataset', { "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}": { "protocol": "http", "requestBody": { "description": "Dataset content.", "required": true, "content": { "application/octet-stream": { "schema": { "type": "string", "format": "binary" } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }, { "name": "version", "in": "path", "required": true, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }, { "name": "entry_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 3 }] }, "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}": { "protocol": "http", "requestBody": { "description": "Dataset. For custom wordlists this contains UTF-8 patterns separated by newline characters.", "required": true, "content": { "application/octet-stream": { "schema": { "type": "string", "format": "binary" } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }, { "name": "version", "in": "path", "required": true, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }] }, "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}": { "protocol": "http", "requestBody": { "description": "array of new columns to create for this dataset version.", "required": true, "content": { "application/json": { "schema": { "type": "array", "items": { "allOf": [{ "oneOf": [{ "properties": {}, "required": [], "title": "Existing Column", "type": "object" }, { "properties": {}, "required": [], "title": "New Column", "type": "object" }] }, { "properties": { "header_name": { "type": "string" }, "num_cells": { "type": "integer", "format": "int64", "minimum": 0 } }, "required": ["header_name", "num_cells"], "type": "object" }] }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }, { "name": "version", "in": "path", "required": true, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }] }, "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "POST /accounts/{account_id}/dlp/datasets": { "protocol": "http", "requestBody": { "description": "Dataset description.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "case_sensitive": { "description": "Only applies to custom word lists.\nDetermines if the words should be matched in a case-sensitive manner\nCannot be set to false if `secret` is true or undefined", "type": "boolean", "key$": "case_sensitive" }, "description": { "description": "The description of the dataset.", "type": "string", "nullable": true, "key$": "description" }, "encoding_version": { "description": "Dataset encoding version\n\nNon-secret custom word lists with no header are always version 1.\nSecret EDM lists with no header are version 1.\nMulticolumn CSV with headers are version 2.\nOmitting this field provides the default value 0, which is interpreted\nthe same as 1.", "type": "integer", "format": "int32", "minimum": 0, "key$": "encoding_version" }, "name": { "type": "string", "key$": "name" }, "secret": { "description": "Generate a secret dataset.\n\nIf true, the response will include a secret to use with the EDM encoder.\nIf false, the response has no secret and the dataset is uploaded in plaintext.", "type": "boolean", "key$": "secret" } }, "required": ["name"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/datasets": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/dlp/datasets/{dataset_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/dlp/datasets/{dataset_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "PUT /accounts/{account_id}/dlp/datasets/{dataset_id}": { "protocol": "http", "requestBody": { "description": "Dataset description.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "case_sensitive": { "description": "Determines if the words should be matched in a case-sensitive manner.\n\nOnly required for custom word lists.", "type": "boolean", "key$": "case_sensitive" }, "description": { "description": "The description of the dataset.", "type": "string", "nullable": true, "key$": "description" }, "name": { "description": "The name of the dataset, must be unique.", "type": "string", "nullable": true, "key$": "name" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "dataset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const dlp_dataset_ref01_ent = client.DlpDataset();
        let dlp_dataset_ref01_data = setup.data.new.dlp_dataset['dlp_dataset_ref01'];
        dlp_dataset_ref01_data['account_id'] = setup.idmap['account01'];
        dlp_dataset_ref01_data = (await dlp_dataset_ref01_ent.create(dlp_dataset_ref01_data)).data();
        (0, node_assert_1.default)(null != dlp_dataset_ref01_data.id);
        // LIST
        const dlp_dataset_ref01_match = {};
        dlp_dataset_ref01_match['account_id'] = setup.idmap['account01'];
        const dlp_dataset_ref01_list = (await dlp_dataset_ref01_ent.list(dlp_dataset_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(dlp_dataset_ref01_list, { id: dlp_dataset_ref01_data.id })));
        // UPDATE
        const dlp_dataset_ref01_data_up0 = {};
        dlp_dataset_ref01_data_up0.id = dlp_dataset_ref01_data.id;
        dlp_dataset_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const dlp_dataset_ref01_markdef_up0 = { name: 'description', value: 'Mark01-dlp_dataset_ref01_' + setup.now };
        dlp_dataset_ref01_data_up0[dlp_dataset_ref01_markdef_up0.name] = dlp_dataset_ref01_markdef_up0.value;
        const dlp_dataset_ref01_resdata_up0 = (await dlp_dataset_ref01_ent.update(dlp_dataset_ref01_data_up0)).data();
        (0, node_assert_1.default)(dlp_dataset_ref01_resdata_up0.id === dlp_dataset_ref01_data_up0.id);
        (0, node_assert_1.default)(dlp_dataset_ref01_resdata_up0[dlp_dataset_ref01_markdef_up0.name] === dlp_dataset_ref01_markdef_up0.value);
        // LOAD
        const dlp_dataset_ref01_match_dt0 = {};
        dlp_dataset_ref01_match_dt0.id = dlp_dataset_ref01_data.id;
        const dlp_dataset_ref01_data_dt0 = (await dlp_dataset_ref01_ent.load(dlp_dataset_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dlp_dataset_ref01_data_dt0.id === dlp_dataset_ref01_data.id);
        // REMOVE
        const dlp_dataset_ref01_match_rm0 = { id: dlp_dataset_ref01_data.id };
        await dlp_dataset_ref01_ent.remove(dlp_dataset_ref01_match_rm0);
        // LIST
        const dlp_dataset_ref01_match_rt0 = {};
        dlp_dataset_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const dlp_dataset_ref01_list_rt0 = (await dlp_dataset_ref01_ent.list(dlp_dataset_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(dlp_dataset_ref01_list_rt0, { id: dlp_dataset_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dlp_dataset/DlpDatasetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDlpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dlp_dataset01', 'dlp_dataset02', 'dlp_dataset03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID': idmap,
        'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DLP_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID'];
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
//# sourceMappingURL=DlpDatasetEntity.test.js.map