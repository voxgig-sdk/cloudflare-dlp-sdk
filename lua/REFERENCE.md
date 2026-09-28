# CloudflareDlp Lua SDK Reference

Complete API reference for the CloudflareDlp Lua SDK.


## CloudflareDlpSDK

### Constructor

```lua
local sdk = require("cloudflare-dlp_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `DlpCustomPromptTopic(data)`

Create a new `DlpCustomPromptTopic` entity instance. Pass `nil` for no initial data.

#### `DlpDataClass(data)`

Create a new `DlpDataClass` entity instance. Pass `nil` for no initial data.

#### `DlpDataTag(data)`

Create a new `DlpDataTag` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategory(data)`

Create a new `DlpDataTagCategory` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategoryTemplate(data)`

Create a new `DlpDataTagCategoryTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpDataset(data)`

Create a new `DlpDataset` entity instance. Pass `nil` for no initial data.

#### `DlpDocumentFingerprint(data)`

Create a new `DlpDocumentFingerprint` entity instance. Pass `nil` for no initial data.

#### `DlpEmail(data)`

Create a new `DlpEmail` entity instance. Pass `nil` for no initial data.

#### `DlpEntry(data)`

Create a new `DlpEntry` entity instance. Pass `nil` for no initial data.

#### `DlpIntegrationEntry(data)`

Create a new `DlpIntegrationEntry` entity instance. Pass `nil` for no initial data.

#### `DlpPredefinedEntry(data)`

Create a new `DlpPredefinedEntry` entity instance. Pass `nil` for no initial data.

#### `DlpProfile(data)`

Create a new `DlpProfile` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroup(data)`

Create a new `DlpSensitivityGroup` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroupTemplate(data)`

Create a new `DlpSensitivityGroupTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityLevel(data)`

Create a new `DlpSensitivityLevel` entity instance. Pass `nil` for no initial data.

#### `DlpSetting(data)`

Create a new `DlpSetting` entity instance. Pass `nil` for no initial data.

#### `Policy(data)`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateRemediationJob(data)`

Create a new `PostureApiCreateRemediationJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateWebhookJob(data)`

Create a new `PostureApiCreateWebhookJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiExportJob(data)`

Create a new `PostureApiExportJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiFinding(data)`

Create a new `PostureApiFinding` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingInstance(data)`

Create a new `PostureApiFindingInstance` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingType(data)`

Create a new `PostureApiFindingType` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedContentAssetList(data)`

Create a new `PostureApiPaginatedContentAssetList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedExportJobList(data)`

Create a new `PostureApiPaginatedExportJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingInstanceList(data)`

Create a new `PostureApiPaginatedFindingInstanceList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingList(data)`

Create a new `PostureApiPaginatedFindingList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingTypeList(data)`

Create a new `PostureApiPaginatedFindingTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationJobList(data)`

Create a new `PostureApiPaginatedRemediationJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationTypeList(data)`

Create a new `PostureApiPaginatedRemediationTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhook(data)`

Create a new `PostureApiWebhook` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhookList(data)`

Create a new `PostureApiWebhookList` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## DlpCustomPromptTopicEntity

```lua
local dlp_custom_prompt_topic = client:DlpCustomPromptTopic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `table` | Yes |  |
| `topic` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `profile_id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `topic` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpCustomPromptTopic():create({
  account_id = --[[ string ]],
  enabled = --[[ boolean ]],
  name = --[[ string ]],
  result = --[[ table ]],
  topic = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpCustomPromptTopic():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpCustomPromptTopic():load({ id = "dlp_custom_prompt_topic_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpCustomPromptTopic():remove({ id = "dlp_custom_prompt_topic_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpCustomPromptTopic():update({
  id = "dlp_custom_prompt_topic_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpCustomPromptTopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDataClassEntity

```lua
local dlp_data_class = client:DlpDataClass(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `table` | Yes |  |
| `description` | `string` | No |  |
| `expression` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `sensitivity_levels` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `data_tags` | - | - | - | Yes | - |
| `description` | - | - | - | - | - |
| `expression` | - | - | - | Yes | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |
| `sensitivity_levels` | - | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpDataClass():create({
  account_id = --[[ string ]],
  data_tags = --[[ table ]],
  expression = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
  sensitivity_levels = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDataClass():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDataClass():load({ id = "dlp_data_class_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpDataClass():remove({ id = "dlp_data_class_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpDataClass():update({
  id = "dlp_data_class_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataClassEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDataTagEntity

```lua
local dlp_data_tag = client:DlpDataTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpDataTag():create({
  account_id = --[[ string ]],
  data_tag_category_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDataTag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDataTag():load({ id = "dlp_data_tag_id", account_id = "account_id", data_tag_category_id = "data_tag_category_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpDataTag():remove({ id = "dlp_data_tag_id", account_id = "account_id", data_tag_category_id = "data_tag_category_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpDataTag():update({
  id = "dlp_data_tag_id",
  account_id = "account_id",
  data_tag_category_id = "data_tag_category_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDataTagCategoryEntity

```lua
local dlp_data_tag_category = client:DlpDataTagCategory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `tags` | `table` | No | Tags to create with the category. |
| `template_id` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |
| `tags` | - | - | - | - | - |
| `template_id` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpDataTagCategory():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDataTagCategory():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDataTagCategory():load({ id = "dlp_data_tag_category_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpDataTagCategory():remove({ id = "dlp_data_tag_category_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpDataTagCategory():update({
  id = "dlp_data_tag_category_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagCategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDataTagCategoryTemplateEntity

```lua
local dlp_data_tag_category_template = client:DlpDataTagCategoryTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDataTagCategoryTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDataTagCategoryTemplate():load({ id = "dlp_data_tag_category_template_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDatasetEntity

```lua
local dlp_dataset = client:DlpDataset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `boolean` | No | Only applies to custom word lists. |
| `description` | `string` | No | The description of the dataset. |
| `encoding_version` | `number` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the dataset, must be unique. |
| `result` | `table` | Yes |  |
| `secret` | `boolean` | No | Generate a secret dataset. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `case_sensitive` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `encoding_version` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |
| `secret` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpDataset():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDataset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDataset():load({ id = "dlp_dataset_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpDataset():remove({ id = "dlp_dataset_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpDataset():update({
  id = "dlp_dataset_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDatasetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpDocumentFingerprintEntity

```lua
local dlp_document_fingerprint = client:DlpDocumentFingerprint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match_percent` | `number` | No |  |
| `name` | `string` | No |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpDocumentFingerprint():create({
  account_id = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpDocumentFingerprint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpDocumentFingerprint():load({ id = "dlp_document_fingerprint_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpDocumentFingerprint():remove({ id = "dlp_document_fingerprint_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpDocumentFingerprint():update({
  id = "dlp_document_fingerprint_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDocumentFingerprintEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpEmailEntity

```lua
local dlp_email = client:DlpEmail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `any` | Yes |  |
| `auth_requirements` | `any` | Yes |  |
| `conditions` | `table` | Yes | Triggered if all conditions match. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `new_priorities` | `table` | Yes |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `action` | - | - | - | - | - |
| `auth_requirements` | - | - | - | - | - |
| `conditions` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `new_priorities` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpEmail():create({
  account_id = --[[ string ]],
  action = --[[ any ]],
  auth_requirements = --[[ any ]],
  conditions = --[[ table ]],
  enabled = --[[ boolean ]],
  name = --[[ string ]],
  new_priorities = --[[ table ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpEmail():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpEmail():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpEmail():remove({ account_id = "account_id", rule_id = "rule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpEmail():update({
  account_id = "account_id",
  rule_id = "rule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpEmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpEntryEntity

```lua
local dlp_entry = client:DlpEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pattern` | `table` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpEntry():create({
  account_id = --[[ string ]],
  enabled = --[[ boolean ]],
  name = --[[ string ]],
  pattern = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpEntry():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpEntry():load({ id = "dlp_entry_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpEntry():remove({ id = "dlp_entry_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpEntry():update({
  id = "dlp_entry_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpIntegrationEntryEntity

```lua
local dlp_integration_entry = client:DlpIntegrationEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpIntegrationEntry():create({
  account_id = --[[ string ]],
  enabled = --[[ boolean ]],
  entry_id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpIntegrationEntry():remove({ account_id = "account_id", entry_id = "entry_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpIntegrationEntry():update({
  account_id = "account_id",
  entry_id = "entry_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpIntegrationEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpPredefinedEntryEntity

```lua
local dlp_predefined_entry = client:DlpPredefinedEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpPredefinedEntry():create({
  account_id = --[[ string ]],
  enabled = --[[ boolean ]],
  entry_id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpPredefinedEntry():remove({ account_id = "account_id", entry_id = "entry_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpPredefinedEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpProfileEntity

```lua
local dlp_profile = client:DlpProfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `boolean` | No |  |
| `allowed_match_count` | `number` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` | No |  |
| `context_awareness` | `table` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `table` | No | Data class IDs to associate with the profile. |
| `data_tags` | `table` | No | Data tag IDs to associate with the profile. |
| `description` | `string` | No | The description of the profile. |
| `entries` | `table` | No | Custom entries from this profile. |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ocr_enabled` | `boolean` | No |  |
| `result` | `any` | No |  |
| `sensitivity_levels` | `table` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `table` | No | Entries from other profiles (e.g. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpProfile():create({
  account_id = --[[ string ]],
  context_awareness = --[[ table ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpProfile():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpProfile():load({ id = "dlp_profile_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpProfile():remove({ account_id = "account_id", profile_id = "profile_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpProfile():update({
  id = "dlp_profile_id",
  account_id = "account_id",
  profile_id = "profile_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpSensitivityGroupEntity

```lua
local dlp_sensitivity_group = client:DlpSensitivityGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `levels` | `table` | No | Levels to create with the group. |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `template_id` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `levels` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |
| `template_id` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpSensitivityGroup():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpSensitivityGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpSensitivityGroup():load({ id = "dlp_sensitivity_group_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpSensitivityGroup():remove({ id = "dlp_sensitivity_group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpSensitivityGroup():update({
  id = "dlp_sensitivity_group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpSensitivityGroupTemplateEntity

```lua
local dlp_sensitivity_group_template = client:DlpSensitivityGroupTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpSensitivityGroupTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpSensitivityGroupTemplate():load({ id = "dlp_sensitivity_group_template_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpSensitivityLevelEntity

```lua
local dlp_sensitivity_level = client:DlpSensitivityLevel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpSensitivityLevel():create({
  account_id = --[[ string ]],
  sensitivity_group_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DlpSensitivityLevel():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpSensitivityLevel():load({ id = "dlp_sensitivity_level_id", account_id = "account_id", sensitivity_group_id = "sensitivity_group_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpSensitivityLevel():remove({ id = "dlp_sensitivity_level_id", account_id = "account_id", sensitivity_group_id = "sensitivity_group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpSensitivityLevel():update({
  id = "dlp_sensitivity_level_id",
  account_id = "account_id",
  sensitivity_group_id = "sensitivity_group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityLevelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DlpSettingEntity

```lua
local dlp_setting = client:DlpSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_analysis` | `boolean` | No | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `any` | No |  |
| `max_match_bytes` | `number` | No | Maximum number of bytes that the regular expression can match. |
| `ocr` | `boolean` | No | Whether OCR is enabled at the account level. |
| `payload_logging` | `any` | No |  |
| `public_key` | `string` | No | Base64-encoded public key for encrypting payload logs. |
| `regex` | `string` | Yes |  |
| `result` | `table` | Yes | DLP account-level settings response. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DlpSetting():create({
  account_id = --[[ string ]],
  regex = --[[ string ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DlpSetting():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DlpSetting():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DlpSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyEntity

```lua
local policy = client:Policy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `boolean` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `string` | No | Optional description of what this policy does. |
| `display_name` | `string` | Yes | Display name for the policy configuration. |
| `enabled` | `boolean` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `table` | Yes |  |
| `finding_type_id` | `string` | Yes | The finding type this policy is associated with. |
| `id` | `string` | No |  |
| `integration_ids` | `table` | No | The integrations this policy applies to. |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | Response body for a policy configuration. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `actions` | - | - | - | - | - |
| `applies_to_all_integrations` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `display_name` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `finding_type_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integration_ids` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Policy():create({
  account_id = --[[ string ]],
  actions = --[[ table ]],
  applies_to_all_integrations = --[[ boolean ]],
  display_name = --[[ string ]],
  enabled = --[[ boolean ]],
  errors = --[[ table ]],
  finding_type_id = --[[ string ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Policy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Policy():load({ id = "policy_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Policy():remove({ id = "policy_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Policy():update({
  id = "policy_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiCreateRemediationJobEntity

```lua
local posture_api_create_remediation_job = client:PostureApiCreateRemediationJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Array of error messages. |
| `finding_instance_ids` | `table` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `table` | Yes | Array of informational messages. |
| `remediation_type_id` | `string` | Yes | A UUID identifying this Remediation Type. |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiCreateRemediationJob():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  finding_instance_ids = --[[ table ]],
  messages = --[[ table ]],
  remediation_type_id = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiCreateWebhookJobEntity

```lua
local posture_api_create_webhook_job = client:PostureApiCreateWebhookJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `table` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `table` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiCreateWebhookJob():create({
  account_id = --[[ string ]],
  finding_instance_ids = --[[ table ]],
  webhook_ids = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiExportJobEntity

```lua
local posture_api_export_job = client:PostureApiExportJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Filter for archived status. |
| `dlp_profile_id` | `table` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `table` | Yes | DLP profile metadata for the export. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `boolean` | No | Filter for only the ignored findings. |
| `integration_id` | `table` | No | Filter by integration IDs. |
| `max_affliction_date` | `string` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `table` | Yes |  |
| `min_affliction_date` | `string` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `table` | No | Ordering specifications for the export. |
| `product` | `string` | No | Filter by finding's category product. |
| `result` | `table` | Yes | Information about an export job. |
| `search` | `string` | No | A search term. |
| `severities` | `table` | No | Filter by severity levels. |
| `status` | `table` | No | Filter by remediation job status. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `vendors` | `table` | No | Filter by vendor types. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiExportJob():create({
  account_id = --[[ string ]],
  dlp_profile_information = --[[ table ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostureApiExportJob():load({ id = "posture_api_export_job_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiExportJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiFindingEntity

```lua
local posture_api_finding = client:PostureApiFinding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `table` | Yes | A list of finding IDs to pass along. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `new_severity` | `number` | Yes | The numeric severity value to apply to the finding. |
| `result` | `table` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiFinding():create({
  account_id = --[[ string ]],
  checks = --[[ table ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  new_severity = --[[ number ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostureApiFinding():load({ id = "posture_api_finding_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiFindingInstanceEntity

```lua
local posture_api_finding_instance = client:PostureApiFindingInstance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `table` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | A specific instance of a security finding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiFindingInstance():create({
  account_id = --[[ string ]],
  finding_id = --[[ string ]],
  check_instances = --[[ table ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostureApiFindingInstance():load({ id = "posture_api_finding_instance_id", account_id = "account_id", finding_id = "finding_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingInstanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiFindingTypeEntity

```lua
local posture_api_finding_type = client:PostureApiFindingType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | Basic finding type information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostureApiFindingType():load({ id = "posture_api_finding_type_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedContentAssetListEntity

```lua
local posture_api_paginated_content_asset_list = client:PostureApiPaginatedContentAssetList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of content asset objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedContentAssetList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedExportJobListEntity

```lua
local posture_api_paginated_export_job_list = client:PostureApiPaginatedExportJobList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of export job objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedExportJobList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedFindingInstanceListEntity

```lua
local posture_api_paginated_finding_instance_list = client:PostureApiPaginatedFindingInstanceList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of finding instance objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedFindingInstanceList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedFindingListEntity

```lua
local posture_api_paginated_finding_list = client:PostureApiPaginatedFindingList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of finding objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedFindingList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedFindingTypeListEntity

```lua
local posture_api_paginated_finding_type_list = client:PostureApiPaginatedFindingTypeList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of finding type objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedFindingTypeList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedRemediationJobListEntity

```lua
local posture_api_paginated_remediation_job_list = client:PostureApiPaginatedRemediationJobList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `table` | Yes | Asset information for a remediation job. |
| `created_at` | `string` | Yes | When the remediation job was created. |
| `finding_id` | `string` | Yes | Encoded finding ID. |
| `finding_instance_id` | `string` | Yes | ID of the finding instance being remediated. |
| `finding_type_id` | `string` | Yes | ID of the finding type. |
| `finding_type_name` | `string` | Yes | Name of the finding type. |
| `id` | `string` | Yes | Unique identifier for the remediation job. |
| `integration_name` | `string` | Yes | Name of the integration. |
| `last_updated` | `string` | Yes | When the remediation job was last updated. |
| `remediation_type` | `string` | Yes | Type of remediation being performed. |
| `status` | `string` | Yes | Status of a remediation job. |
| `triggered_by_actor` | `string` | No | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `string` | No | ID of the actor that triggered the job. |
| `triggered_by_user` | `string` | Yes | Email of the user who triggered the remediation. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedRemediationJobList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiPaginatedRemediationTypeListEntity

```lua
local posture_api_paginated_remediation_type_list = client:PostureApiPaginatedRemediationTypeList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Array of remediation type objects. |
| `result_info` | `table` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiPaginatedRemediationTypeList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiWebhookEntity

```lua
local posture_api_webhook = client:PostureApiWebhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PostureApiWebhook():create({
  account_id = --[[ string ]],
  webhook_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostureApiWebhook():load({ id = "posture_api_webhook_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiWebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostureApiWebhookListEntity

```lua
local posture_api_webhook_list = client:PostureApiWebhookList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | List of webhook configurations. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostureApiWebhookList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiWebhookListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `string` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `string` | Yes | Target URL for the webhook configuration. |
| `headers` | `table` | No | List of custom headers to include in webhook requests. |
| `id` | `string` | No |  |
| `label` | `string` | Yes | Account-specified display label for the webhook configuration. |
| `signing_secret` | `string` | No | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `string` | No | Status of the webhook configuration. |

### Field Usage by Operation

| Field | create | update | remove |
| --- | --- | --- | --- |
| `authentication_type` | - | - | - |
| `destination_url` | - | - | - |
| `headers` | - | - | - |
| `id` | - | - | - |
| `label` | - | - | - |
| `signing_secret` | - | - | - |
| `status` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  account_id = --[[ string ]],
  authentication_type = --[[ string ]],
  destination_url = --[[ string ]],
  label = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ account_id = "account_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Webhook():update({
  account_id = "account_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

