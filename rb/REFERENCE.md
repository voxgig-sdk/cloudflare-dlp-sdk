# CloudflareDlp Ruby SDK Reference

Complete API reference for the CloudflareDlp Ruby SDK.


## CloudflareDlpSDK

### Constructor

```ruby
require_relative 'CloudflareDlp_sdk'

client = CloudflareDlpSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDlpSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareDlpSDK.test
```


### Instance Methods

#### `DlpCustomPromptTopic(data = nil)`

Create a new `DlpCustomPromptTopic` entity instance. Pass `nil` for no initial data.

#### `DlpDataClass(data = nil)`

Create a new `DlpDataClass` entity instance. Pass `nil` for no initial data.

#### `DlpDataTag(data = nil)`

Create a new `DlpDataTag` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategory(data = nil)`

Create a new `DlpDataTagCategory` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategoryTemplate(data = nil)`

Create a new `DlpDataTagCategoryTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpDataset(data = nil)`

Create a new `DlpDataset` entity instance. Pass `nil` for no initial data.

#### `DlpDocumentFingerprint(data = nil)`

Create a new `DlpDocumentFingerprint` entity instance. Pass `nil` for no initial data.

#### `DlpEmail(data = nil)`

Create a new `DlpEmail` entity instance. Pass `nil` for no initial data.

#### `DlpEntry(data = nil)`

Create a new `DlpEntry` entity instance. Pass `nil` for no initial data.

#### `DlpIntegrationEntry(data = nil)`

Create a new `DlpIntegrationEntry` entity instance. Pass `nil` for no initial data.

#### `DlpPredefinedEntry(data = nil)`

Create a new `DlpPredefinedEntry` entity instance. Pass `nil` for no initial data.

#### `DlpProfile(data = nil)`

Create a new `DlpProfile` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroup(data = nil)`

Create a new `DlpSensitivityGroup` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroupTemplate(data = nil)`

Create a new `DlpSensitivityGroupTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityLevel(data = nil)`

Create a new `DlpSensitivityLevel` entity instance. Pass `nil` for no initial data.

#### `DlpSetting(data = nil)`

Create a new `DlpSetting` entity instance. Pass `nil` for no initial data.

#### `Policy(data = nil)`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateRemediationJob(data = nil)`

Create a new `PostureApiCreateRemediationJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateWebhookJob(data = nil)`

Create a new `PostureApiCreateWebhookJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiExportJob(data = nil)`

Create a new `PostureApiExportJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiFinding(data = nil)`

Create a new `PostureApiFinding` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingInstance(data = nil)`

Create a new `PostureApiFindingInstance` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingType(data = nil)`

Create a new `PostureApiFindingType` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedContentAssetList(data = nil)`

Create a new `PostureApiPaginatedContentAssetList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedExportJobList(data = nil)`

Create a new `PostureApiPaginatedExportJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingInstanceList(data = nil)`

Create a new `PostureApiPaginatedFindingInstanceList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingList(data = nil)`

Create a new `PostureApiPaginatedFindingList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingTypeList(data = nil)`

Create a new `PostureApiPaginatedFindingTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationJobList(data = nil)`

Create a new `PostureApiPaginatedRemediationJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationTypeList(data = nil)`

Create a new `PostureApiPaginatedRemediationTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhook(data = nil)`

Create a new `PostureApiWebhook` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhookList(data = nil)`

Create a new `PostureApiWebhookList` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DlpCustomPromptTopicEntity

```ruby
dlp_custom_prompt_topic = client.DlpCustomPromptTopic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `profile_id` | `String` | No |  |
| `result` | `Hash` | Yes |  |
| `topic` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpCustomPromptTopic.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "name" => "example_name", # String
  "result" => {}, # Hash
  "topic" => "example_topic", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpCustomPromptTopic.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpCustomPromptTopic.load({ "id" => "dlp_custom_prompt_topic_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpCustomPromptTopic.remove({ "id" => "dlp_custom_prompt_topic_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpCustomPromptTopic.update({
  "id" => "dlp_custom_prompt_topic_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpCustomPromptTopicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDataClassEntity

```ruby
dlp_data_class = client.DlpDataClass
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `Array` | Yes |  |
| `description` | `String` | No |  |
| `expression` | `String` | Yes |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `sensitivity_levels` | `Array` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpDataClass.create({
  "account_id" => "example_account_id", # String
  "data_tags" => [], # Array
  "expression" => "example_expression", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
  "sensitivity_levels" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDataClass.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataClass.load({ "id" => "dlp_data_class_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataClass.remove({ "id" => "dlp_data_class_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpDataClass.update({
  "id" => "dlp_data_class_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDataClassEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDataTagEntity

```ruby
dlp_data_tag = client.DlpDataTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpDataTag.create({
  "account_id" => "example_account_id", # String
  "data_tag_category_id" => "example_data_tag_category_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDataTag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataTag.load({ "id" => "dlp_data_tag_id", "account_id" => "account_id", "data_tag_category_id" => "data_tag_category_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataTag.remove({ "id" => "dlp_data_tag_id", "account_id" => "account_id", "data_tag_category_id" => "data_tag_category_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpDataTag.update({
  "id" => "dlp_data_tag_id",
  "account_id" => "account_id",
  "data_tag_category_id" => "data_tag_category_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDataTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDataTagCategoryEntity

```ruby
dlp_data_tag_category = client.DlpDataTagCategory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `tags` | `Array` | No | Tags to create with the category. |
| `template_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpDataTagCategory.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDataTagCategory.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataTagCategory.load({ "id" => "dlp_data_tag_category_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataTagCategory.remove({ "id" => "dlp_data_tag_category_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpDataTagCategory.update({
  "id" => "dlp_data_tag_category_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDataTagCategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDataTagCategoryTemplateEntity

```ruby
dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDataTagCategoryTemplate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataTagCategoryTemplate.load({ "id" => "dlp_data_tag_category_template_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDatasetEntity

```ruby
dlp_dataset = client.DlpDataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `Boolean` | No | Only applies to custom word lists. |
| `description` | `String` | No | The description of the dataset. |
| `encoding_version` | `Integer` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `String` | No |  |
| `name` | `String` | Yes | The name of the dataset, must be unique. |
| `result` | `Hash` | Yes |  |
| `secret` | `Boolean` | No | Generate a secret dataset. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpDataset.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDataset.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataset.load({ "id" => "dlp_dataset_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDataset.remove({ "id" => "dlp_dataset_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpDataset.update({
  "id" => "dlp_dataset_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpDocumentFingerprintEntity

```ruby
dlp_document_fingerprint = client.DlpDocumentFingerprint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `match_percent` | `Integer` | No |  |
| `name` | `String` | No |  |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpDocumentFingerprint.create({
  "account_id" => "example_account_id", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpDocumentFingerprint.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDocumentFingerprint.load({ "id" => "dlp_document_fingerprint_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpDocumentFingerprint.remove({ "id" => "dlp_document_fingerprint_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpDocumentFingerprint.update({
  "id" => "dlp_document_fingerprint_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpDocumentFingerprintEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpEmailEntity

```ruby
dlp_email = client.DlpEmail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Object` | Yes |  |
| `auth_requirements` | `Object` | Yes |  |
| `conditions` | `Array` | Yes | Triggered if all conditions match. |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `name` | `String` | Yes |  |
| `new_priorities` | `Hash` | Yes |  |
| `result` | `Hash` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpEmail.create({
  "account_id" => "example_account_id", # String
  "action" => "example_action", # Object
  "auth_requirements" => "example_auth_requirements", # Object
  "conditions" => [], # Array
  "enabled" => true, # Boolean
  "name" => "example_name", # String
  "new_priorities" => {}, # Hash
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpEmail.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpEmail.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpEmail.remove({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpEmail.update({
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpEmailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpEntryEntity

```ruby
dlp_entry = client.DlpEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pattern` | `Hash` | Yes |  |
| `profile_id` | `String` | No |  |
| `result` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "name" => "example_name", # String
  "pattern" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpEntry.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpEntry.load({ "id" => "dlp_entry_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpEntry.remove({ "id" => "dlp_entry_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpEntry.update({
  "id" => "dlp_entry_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpIntegrationEntryEntity

```ruby
dlp_integration_entry = client.DlpIntegrationEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes |  |
| `entry_id` | `String` | Yes |  |
| `profile_id` | `String` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpIntegrationEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "entry_id" => "example_entry_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpIntegrationEntry.remove({ "account_id" => "account_id", "entry_id" => "entry_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpIntegrationEntry.update({
  "account_id" => "account_id",
  "entry_id" => "entry_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpIntegrationEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpPredefinedEntryEntity

```ruby
dlp_predefined_entry = client.DlpPredefinedEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes |  |
| `entry_id` | `String` | Yes |  |
| `profile_id` | `String` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpPredefinedEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "entry_id" => "example_entry_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpPredefinedEntry.remove({ "account_id" => "account_id", "entry_id" => "entry_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpPredefinedEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpProfileEntity

```ruby
dlp_profile = client.DlpProfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `Boolean` | No |  |
| `allowed_match_count` | `Integer` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `String` | No |  |
| `context_awareness` | `Hash` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `Array` | No | Data class IDs to associate with the profile. |
| `data_tags` | `Array` | No | Data tag IDs to associate with the profile. |
| `description` | `String` | No | The description of the profile. |
| `entries` | `Array` | No | Custom entries from this profile. |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `ocr_enabled` | `Boolean` | No |  |
| `result` | `Object` | No |  |
| `sensitivity_levels` | `Array` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `Array` | No | Entries from other profiles (e.g. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpProfile.create({
  "account_id" => "example_account_id", # String
  "context_awareness" => {}, # Hash
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpProfile.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpProfile.load({ "id" => "dlp_profile_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpProfile.remove({ "account_id" => "account_id", "profile_id" => "profile_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpProfile.update({
  "id" => "dlp_profile_id",
  "account_id" => "account_id",
  "profile_id" => "profile_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpSensitivityGroupEntity

```ruby
dlp_sensitivity_group = client.DlpSensitivityGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `levels` | `Array` | No | Levels to create with the group. |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `template_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpSensitivityGroup.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpSensitivityGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSensitivityGroup.load({ "id" => "dlp_sensitivity_group_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSensitivityGroup.remove({ "id" => "dlp_sensitivity_group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpSensitivityGroup.update({
  "id" => "dlp_sensitivity_group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpSensitivityGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpSensitivityGroupTemplateEntity

```ruby
dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpSensitivityGroupTemplate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSensitivityGroupTemplate.load({ "id" => "dlp_sensitivity_group_template_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpSensitivityLevelEntity

```ruby
dlp_sensitivity_level = client.DlpSensitivityLevel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpSensitivityLevel.create({
  "account_id" => "example_account_id", # String
  "sensitivity_group_id" => "example_sensitivity_group_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DlpSensitivityLevel.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSensitivityLevel.load({ "id" => "dlp_sensitivity_level_id", "account_id" => "account_id", "sensitivity_group_id" => "sensitivity_group_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSensitivityLevel.remove({ "id" => "dlp_sensitivity_level_id", "account_id" => "account_id", "sensitivity_group_id" => "sensitivity_group_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpSensitivityLevel.update({
  "id" => "dlp_sensitivity_level_id",
  "account_id" => "account_id",
  "sensitivity_group_id" => "sensitivity_group_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpSensitivityLevelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DlpSettingEntity

```ruby
dlp_setting = client.DlpSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_analysis` | `Boolean` | No | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `Object` | No |  |
| `max_match_bytes` | `Integer` | No | Maximum number of bytes that the regular expression can match. |
| `ocr` | `Boolean` | No | Whether OCR is enabled at the account level. |
| `payload_logging` | `Object` | No |  |
| `public_key` | `String` | No | Base64-encoded public key for encrypting payload logs. |
| `regex` | `String` | Yes |  |
| `result` | `Hash` | Yes | DLP account-level settings response. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DlpSetting.create({
  "account_id" => "example_account_id", # String
  "regex" => "example_regex", # String
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSetting.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DlpSetting.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DlpSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DlpSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PolicyEntity

```ruby
policy = client.Policy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Hash` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `Boolean` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `String` | No | Optional description of what this policy does. |
| `display_name` | `String` | Yes | Display name for the policy configuration. |
| `enabled` | `Boolean` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `Array` | Yes |  |
| `finding_type_id` | `String` | Yes | The finding type this policy is associated with. |
| `id` | `String` | No |  |
| `integration_ids` | `Array` | No | The integrations this policy applies to. |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | Response body for a policy configuration. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Policy.create({
  "account_id" => "example_account_id", # String
  "actions" => {}, # Hash
  "applies_to_all_integrations" => true, # Boolean
  "display_name" => "example_display_name", # String
  "enabled" => true, # Boolean
  "errors" => [], # Array
  "finding_type_id" => "example_finding_type_id", # String
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Policy.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Policy.load({ "id" => "policy_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Policy.remove({ "id" => "policy_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Policy.update({
  "id" => "policy_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiCreateRemediationJobEntity

```ruby
posture_api_create_remediation_job = client.PostureApiCreateRemediationJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Array of error messages. |
| `finding_instance_ids` | `Array` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `Array` | Yes | Array of informational messages. |
| `remediation_type_id` | `String` | Yes | A UUID identifying this Remediation Type. |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiCreateRemediationJob.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "finding_instance_ids" => [], # Array
  "messages" => [], # Array
  "remediation_type_id" => "example_remediation_type_id", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiCreateWebhookJobEntity

```ruby
posture_api_create_webhook_job = client.PostureApiCreateWebhookJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `Array` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `Array` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiCreateWebhookJob.create({
  "account_id" => "example_account_id", # String
  "finding_instance_ids" => [], # Array
  "webhook_ids" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiExportJobEntity

```ruby
posture_api_export_job = client.PostureApiExportJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `Boolean` | No | Filter for archived status. |
| `dlp_profile_id` | `Array` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `Array` | Yes | DLP profile metadata for the export. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `ignored` | `Boolean` | No | Filter for only the ignored findings. |
| `integration_id` | `Array` | No | Filter by integration IDs. |
| `max_affliction_date` | `String` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `String` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `Array` | Yes |  |
| `min_affliction_date` | `String` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `String` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `Array` | No | Ordering specifications for the export. |
| `product` | `String` | No | Filter by finding's category product. |
| `result` | `Hash` | Yes | Information about an export job. |
| `search` | `String` | No | A search term. |
| `severities` | `Array` | No | Filter by severity levels. |
| `status` | `Array` | No | Filter by remediation job status. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `vendors` | `Array` | No | Filter by vendor types. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiExportJob.create({
  "account_id" => "example_account_id", # String
  "dlp_profile_information" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PostureApiExportJob.load({ "id" => "posture_api_export_job_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiExportJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiFindingEntity

```ruby
posture_api_finding = client.PostureApiFinding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `Array` | Yes | A list of finding IDs to pass along. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `new_severity` | `Integer` | Yes | The numeric severity value to apply to the finding. |
| `result` | `Hash` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiFinding.create({
  "account_id" => "example_account_id", # String
  "checks" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "new_severity" => 1, # Integer
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PostureApiFinding.load({ "id" => "posture_api_finding_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiFindingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiFindingInstanceEntity

```ruby
posture_api_finding_instance = client.PostureApiFindingInstance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `Array` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | A specific instance of a security finding. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiFindingInstance.create({
  "account_id" => "example_account_id", # String
  "finding_id" => "example_finding_id", # String
  "check_instances" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PostureApiFindingInstance.load({ "id" => "posture_api_finding_instance_id", "account_id" => "account_id", "finding_id" => "finding_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiFindingInstanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiFindingTypeEntity

```ruby
posture_api_finding_type = client.PostureApiFindingType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | Basic finding type information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PostureApiFindingType.load({ "id" => "posture_api_finding_type_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiFindingTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedContentAssetListEntity

```ruby
posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of content asset objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedContentAssetList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedExportJobListEntity

```ruby
posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of export job objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedExportJobList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedFindingInstanceListEntity

```ruby
posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of finding instance objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedFindingInstanceList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedFindingListEntity

```ruby
posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of finding objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedFindingList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedFindingTypeListEntity

```ruby
posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of finding type objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedFindingTypeList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedRemediationJobListEntity

```ruby
posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `Hash` | Yes | Asset information for a remediation job. |
| `created_at` | `String` | Yes | When the remediation job was created. |
| `finding_id` | `String` | Yes | Encoded finding ID. |
| `finding_instance_id` | `String` | Yes | ID of the finding instance being remediated. |
| `finding_type_id` | `String` | Yes | ID of the finding type. |
| `finding_type_name` | `String` | Yes | Name of the finding type. |
| `id` | `String` | Yes | Unique identifier for the remediation job. |
| `integration_name` | `String` | Yes | Name of the integration. |
| `last_updated` | `String` | Yes | When the remediation job was last updated. |
| `remediation_type` | `String` | Yes | Type of remediation being performed. |
| `status` | `String` | Yes | Status of a remediation job. |
| `triggered_by_actor` | `String` | No | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `String` | No | ID of the actor that triggered the job. |
| `triggered_by_user` | `String` | Yes | Email of the user who triggered the remediation. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedRemediationJobList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiPaginatedRemediationTypeListEntity

```ruby
posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | Array of remediation type objects. |
| `result_info` | `Hash` | Yes | Pagination and result information. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiPaginatedRemediationTypeList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiWebhookEntity

```ruby
posture_api_webhook = client.PostureApiWebhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PostureApiWebhook.create({
  "account_id" => "example_account_id", # String
  "webhook_id" => "example_webhook_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PostureApiWebhook.load({ "id" => "posture_api_webhook_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiWebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostureApiWebhookListEntity

```ruby
posture_api_webhook_list = client.PostureApiWebhookList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No | List of webhook configurations. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PostureApiWebhookList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostureApiWebhookListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `String` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `String` | Yes | Target URL for the webhook configuration. |
| `headers` | `Array` | No | List of custom headers to include in webhook requests. |
| `id` | `String` | No |  |
| `label` | `String` | Yes | Account-specified display label for the webhook configuration. |
| `signing_secret` | `String` | No | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `String` | No | Status of the webhook configuration. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
  "account_id" => "example_account_id", # String
  "authentication_type" => "example_authentication_type", # String
  "destination_url" => "example_destination_url", # String
  "label" => "example_label", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "account_id" => "account_id", "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Webhook.update({
  "account_id" => "account_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareDlpSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

