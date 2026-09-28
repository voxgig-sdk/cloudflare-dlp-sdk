# CloudflareDlp PHP SDK Reference

Complete API reference for the CloudflareDlp PHP SDK.


## CloudflareDlpSDK

### Constructor

```php
require_once __DIR__ . '/cloudflaredlp_sdk.php';

$client = new CloudflareDlpSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDlpSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareDlpSDK::test();
```


### Instance Methods

#### `DlpCustomPromptTopic($data = null)`

Create a new `DlpCustomPromptTopicEntity` instance. Pass `null` for no initial data.

#### `DlpDataClass($data = null)`

Create a new `DlpDataClassEntity` instance. Pass `null` for no initial data.

#### `DlpDataTag($data = null)`

Create a new `DlpDataTagEntity` instance. Pass `null` for no initial data.

#### `DlpDataTagCategory($data = null)`

Create a new `DlpDataTagCategoryEntity` instance. Pass `null` for no initial data.

#### `DlpDataTagCategoryTemplate($data = null)`

Create a new `DlpDataTagCategoryTemplateEntity` instance. Pass `null` for no initial data.

#### `DlpDataset($data = null)`

Create a new `DlpDatasetEntity` instance. Pass `null` for no initial data.

#### `DlpDocumentFingerprint($data = null)`

Create a new `DlpDocumentFingerprintEntity` instance. Pass `null` for no initial data.

#### `DlpEmail($data = null)`

Create a new `DlpEmailEntity` instance. Pass `null` for no initial data.

#### `DlpEntry($data = null)`

Create a new `DlpEntryEntity` instance. Pass `null` for no initial data.

#### `DlpIntegrationEntry($data = null)`

Create a new `DlpIntegrationEntryEntity` instance. Pass `null` for no initial data.

#### `DlpPredefinedEntry($data = null)`

Create a new `DlpPredefinedEntryEntity` instance. Pass `null` for no initial data.

#### `DlpProfile($data = null)`

Create a new `DlpProfileEntity` instance. Pass `null` for no initial data.

#### `DlpSensitivityGroup($data = null)`

Create a new `DlpSensitivityGroupEntity` instance. Pass `null` for no initial data.

#### `DlpSensitivityGroupTemplate($data = null)`

Create a new `DlpSensitivityGroupTemplateEntity` instance. Pass `null` for no initial data.

#### `DlpSensitivityLevel($data = null)`

Create a new `DlpSensitivityLevelEntity` instance. Pass `null` for no initial data.

#### `DlpSetting($data = null)`

Create a new `DlpSettingEntity` instance. Pass `null` for no initial data.

#### `Policy($data = null)`

Create a new `PolicyEntity` instance. Pass `null` for no initial data.

#### `PostureApiCreateRemediationJob($data = null)`

Create a new `PostureApiCreateRemediationJobEntity` instance. Pass `null` for no initial data.

#### `PostureApiCreateWebhookJob($data = null)`

Create a new `PostureApiCreateWebhookJobEntity` instance. Pass `null` for no initial data.

#### `PostureApiExportJob($data = null)`

Create a new `PostureApiExportJobEntity` instance. Pass `null` for no initial data.

#### `PostureApiFinding($data = null)`

Create a new `PostureApiFindingEntity` instance. Pass `null` for no initial data.

#### `PostureApiFindingInstance($data = null)`

Create a new `PostureApiFindingInstanceEntity` instance. Pass `null` for no initial data.

#### `PostureApiFindingType($data = null)`

Create a new `PostureApiFindingTypeEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedContentAssetList($data = null)`

Create a new `PostureApiPaginatedContentAssetListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedExportJobList($data = null)`

Create a new `PostureApiPaginatedExportJobListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedFindingInstanceList($data = null)`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedFindingList($data = null)`

Create a new `PostureApiPaginatedFindingListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedFindingTypeList($data = null)`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedRemediationJobList($data = null)`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance. Pass `null` for no initial data.

#### `PostureApiPaginatedRemediationTypeList($data = null)`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance. Pass `null` for no initial data.

#### `PostureApiWebhook($data = null)`

Create a new `PostureApiWebhookEntity` instance. Pass `null` for no initial data.

#### `PostureApiWebhookList($data = null)`

Create a new `PostureApiWebhookListEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareDlpUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## DlpCustomPromptTopicEntity

```php
$dlp_custom_prompt_topic = $client->DlpCustomPromptTopic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpCustomPromptTopic()->create([
  "account_id" => null, // string
  "enabled" => null, // bool
  "name" => null, // string
  "result" => null, // array
  "topic" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpCustomPromptTopic()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpCustomPromptTopic()->load(["id" => "dlp_custom_prompt_topic_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpCustomPromptTopic()->remove(["id" => "dlp_custom_prompt_topic_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpCustomPromptTopic()->update([
  "id" => "dlp_custom_prompt_topic_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpCustomPromptTopicEntity`

Create a new `DlpCustomPromptTopicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDataClassEntity

```php
$dlp_data_class = $client->DlpDataClass();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `array` | Yes |  |
| `description` | `string` | No |  |
| `expression` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `sensitivity_levels` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpDataClass()->create([
  "account_id" => null, // string
  "data_tags" => null, // array
  "expression" => null, // string
  "name" => null, // string
  "result" => null, // array
  "sensitivity_levels" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDataClass()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataClass()->load(["id" => "dlp_data_class_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataClass()->remove(["id" => "dlp_data_class_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpDataClass()->update([
  "id" => "dlp_data_class_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDataClassEntity`

Create a new `DlpDataClassEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDataTagEntity

```php
$dlp_data_tag = $client->DlpDataTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpDataTag()->create([
  "account_id" => null, // string
  "data_tag_category_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDataTag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataTag()->load(["id" => "dlp_data_tag_id", "account_id" => "account_id", "data_tag_category_id" => "data_tag_category_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataTag()->remove(["id" => "dlp_data_tag_id", "account_id" => "account_id", "data_tag_category_id" => "data_tag_category_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpDataTag()->update([
  "id" => "dlp_data_tag_id",
  "account_id" => "account_id",
  "data_tag_category_id" => "data_tag_category_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDataTagEntity`

Create a new `DlpDataTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDataTagCategoryEntity

```php
$dlp_data_tag_category = $client->DlpDataTagCategory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `tags` | `array` | No | Tags to create with the category. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpDataTagCategory()->create([
  "account_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDataTagCategory()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataTagCategory()->load(["id" => "dlp_data_tag_category_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataTagCategory()->remove(["id" => "dlp_data_tag_category_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpDataTagCategory()->update([
  "id" => "dlp_data_tag_category_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDataTagCategoryEntity`

Create a new `DlpDataTagCategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDataTagCategoryTemplateEntity

```php
$dlp_data_tag_category_template = $client->DlpDataTagCategoryTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDataTagCategoryTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataTagCategoryTemplate()->load(["id" => "dlp_data_tag_category_template_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDataTagCategoryTemplateEntity`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDatasetEntity

```php
$dlp_dataset = $client->DlpDataset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `bool` | No | Only applies to custom word lists. |
| `description` | `string` | No | The description of the dataset. |
| `encoding_version` | `int` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the dataset, must be unique. |
| `result` | `array` | Yes |  |
| `secret` | `bool` | No | Generate a secret dataset. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpDataset()->create([
  "account_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDataset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataset()->load(["id" => "dlp_dataset_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDataset()->remove(["id" => "dlp_dataset_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpDataset()->update([
  "id" => "dlp_dataset_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDatasetEntity`

Create a new `DlpDatasetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpDocumentFingerprintEntity

```php
$dlp_document_fingerprint = $client->DlpDocumentFingerprint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match_percent` | `int` | No |  |
| `name` | `string` | No |  |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpDocumentFingerprint()->create([
  "account_id" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpDocumentFingerprint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDocumentFingerprint()->load(["id" => "dlp_document_fingerprint_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpDocumentFingerprint()->remove(["id" => "dlp_document_fingerprint_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpDocumentFingerprint()->update([
  "id" => "dlp_document_fingerprint_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpDocumentFingerprintEntity`

Create a new `DlpDocumentFingerprintEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpEmailEntity

```php
$dlp_email = $client->DlpEmail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `mixed` | Yes |  |
| `auth_requirements` | `mixed` | Yes |  |
| `conditions` | `array` | Yes | Triggered if all conditions match. |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `new_priorities` | `array` | Yes |  |
| `result` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpEmail()->create([
  "account_id" => null, // string
  "action" => null, // mixed
  "auth_requirements" => null, // mixed
  "conditions" => null, // array
  "enabled" => null, // bool
  "name" => null, // string
  "new_priorities" => null, // array
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpEmail()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpEmail()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpEmail()->remove(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpEmail()->update([
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpEmailEntity`

Create a new `DlpEmailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpEntryEntity

```php
$dlp_entry = $client->DlpEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pattern` | `array` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpEntry()->create([
  "account_id" => null, // string
  "enabled" => null, // bool
  "name" => null, // string
  "pattern" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpEntry()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpEntry()->load(["id" => "dlp_entry_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpEntry()->remove(["id" => "dlp_entry_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpEntry()->update([
  "id" => "dlp_entry_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpEntryEntity`

Create a new `DlpEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpIntegrationEntryEntity

```php
$dlp_integration_entry = $client->DlpIntegrationEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpIntegrationEntry()->create([
  "account_id" => null, // string
  "enabled" => null, // bool
  "entry_id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpIntegrationEntry()->remove(["account_id" => "account_id", "entry_id" => "entry_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpIntegrationEntry()->update([
  "account_id" => "account_id",
  "entry_id" => "entry_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpIntegrationEntryEntity`

Create a new `DlpIntegrationEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpPredefinedEntryEntity

```php
$dlp_predefined_entry = $client->DlpPredefinedEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpPredefinedEntry()->create([
  "account_id" => null, // string
  "enabled" => null, // bool
  "entry_id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpPredefinedEntry()->remove(["account_id" => "account_id", "entry_id" => "entry_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpPredefinedEntryEntity`

Create a new `DlpPredefinedEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpProfileEntity

```php
$dlp_profile = $client->DlpProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `bool` | No |  |
| `allowed_match_count` | `int` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` | No |  |
| `context_awareness` | `array` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `array` | No | Data class IDs to associate with the profile. |
| `data_tags` | `array` | No | Data tag IDs to associate with the profile. |
| `description` | `string` | No | The description of the profile. |
| `entries` | `array` | No | Custom entries from this profile. |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ocr_enabled` | `bool` | No |  |
| `result` | `mixed` | No |  |
| `sensitivity_levels` | `array` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `array` | No | Entries from other profiles (e.g. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpProfile()->create([
  "account_id" => null, // string
  "context_awareness" => null, // array
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpProfile()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpProfile()->load(["id" => "dlp_profile_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpProfile()->remove(["account_id" => "account_id", "profile_id" => "profile_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpProfile()->update([
  "id" => "dlp_profile_id",
  "account_id" => "account_id",
  "profile_id" => "profile_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpProfileEntity`

Create a new `DlpProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpSensitivityGroupEntity

```php
$dlp_sensitivity_group = $client->DlpSensitivityGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `levels` | `array` | No | Levels to create with the group. |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpSensitivityGroup()->create([
  "account_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpSensitivityGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSensitivityGroup()->load(["id" => "dlp_sensitivity_group_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSensitivityGroup()->remove(["id" => "dlp_sensitivity_group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpSensitivityGroup()->update([
  "id" => "dlp_sensitivity_group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpSensitivityGroupEntity`

Create a new `DlpSensitivityGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpSensitivityGroupTemplateEntity

```php
$dlp_sensitivity_group_template = $client->DlpSensitivityGroupTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpSensitivityGroupTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSensitivityGroupTemplate()->load(["id" => "dlp_sensitivity_group_template_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpSensitivityGroupTemplateEntity`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpSensitivityLevelEntity

```php
$dlp_sensitivity_level = $client->DlpSensitivityLevel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpSensitivityLevel()->create([
  "account_id" => null, // string
  "sensitivity_group_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DlpSensitivityLevel()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSensitivityLevel()->load(["id" => "dlp_sensitivity_level_id", "account_id" => "account_id", "sensitivity_group_id" => "sensitivity_group_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSensitivityLevel()->remove(["id" => "dlp_sensitivity_level_id", "account_id" => "account_id", "sensitivity_group_id" => "sensitivity_group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpSensitivityLevel()->update([
  "id" => "dlp_sensitivity_level_id",
  "account_id" => "account_id",
  "sensitivity_group_id" => "sensitivity_group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpSensitivityLevelEntity`

Create a new `DlpSensitivityLevelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DlpSettingEntity

```php
$dlp_setting = $client->DlpSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_analysis` | `bool` | No | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `mixed` | No |  |
| `max_match_bytes` | `int` | No | Maximum number of bytes that the regular expression can match. |
| `ocr` | `bool` | No | Whether OCR is enabled at the account level. |
| `payload_logging` | `mixed` | No |  |
| `public_key` | `string` | No | Base64-encoded public key for encrypting payload logs. |
| `regex` | `string` | Yes |  |
| `result` | `array` | Yes | DLP account-level settings response. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DlpSetting()->create([
  "account_id" => null, // string
  "regex" => null, // string
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSetting()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DlpSetting()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DlpSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DlpSettingEntity`

Create a new `DlpSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyEntity

```php
$policy = $client->Policy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `bool` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `string` | No | Optional description of what this policy does. |
| `display_name` | `string` | Yes | Display name for the policy configuration. |
| `enabled` | `bool` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `array` | Yes |  |
| `finding_type_id` | `string` | Yes | The finding type this policy is associated with. |
| `id` | `string` | No |  |
| `integration_ids` | `array` | No | The integrations this policy applies to. |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | Response body for a policy configuration. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Policy()->create([
  "account_id" => null, // string
  "actions" => null, // array
  "applies_to_all_integrations" => null, // bool
  "display_name" => null, // string
  "enabled" => null, // bool
  "errors" => null, // array
  "finding_type_id" => null, // string
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Policy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Policy()->load(["id" => "policy_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Policy()->remove(["id" => "policy_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Policy()->update([
  "id" => "policy_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyEntity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiCreateRemediationJobEntity

```php
$posture_api_create_remediation_job = $client->PostureApiCreateRemediationJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Array of error messages. |
| `finding_instance_ids` | `array` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `array` | Yes | Array of informational messages. |
| `remediation_type_id` | `string` | Yes | A UUID identifying this Remediation Type. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiCreateRemediationJob()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "finding_instance_ids" => null, // array
  "messages" => null, // array
  "remediation_type_id" => null, // string
  "result" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiCreateRemediationJobEntity`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiCreateWebhookJobEntity

```php
$posture_api_create_webhook_job = $client->PostureApiCreateWebhookJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `array` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `array` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiCreateWebhookJob()->create([
  "account_id" => null, // string
  "finding_instance_ids" => null, // array
  "webhook_ids" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiCreateWebhookJobEntity`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiExportJobEntity

```php
$posture_api_export_job = $client->PostureApiExportJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Filter for archived status. |
| `dlp_profile_id` | `array` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `array` | Yes | DLP profile metadata for the export. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `bool` | No | Filter for only the ignored findings. |
| `integration_id` | `array` | No | Filter by integration IDs. |
| `max_affliction_date` | `string` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `array` | Yes |  |
| `min_affliction_date` | `string` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `array` | No | Ordering specifications for the export. |
| `product` | `string` | No | Filter by finding's category product. |
| `result` | `array` | Yes | Information about an export job. |
| `search` | `string` | No | A search term. |
| `severities` | `array` | No | Filter by severity levels. |
| `status` | `array` | No | Filter by remediation job status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `vendors` | `array` | No | Filter by vendor types. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiExportJob()->create([
  "account_id" => null, // string
  "dlp_profile_information" => null, // array
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostureApiExportJob()->load(["id" => "posture_api_export_job_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiExportJobEntity`

Create a new `PostureApiExportJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiFindingEntity

```php
$posture_api_finding = $client->PostureApiFinding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `array` | Yes | A list of finding IDs to pass along. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `new_severity` | `int` | Yes | The numeric severity value to apply to the finding. |
| `result` | `array` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiFinding()->create([
  "account_id" => null, // string
  "checks" => null, // array
  "errors" => null, // array
  "messages" => null, // array
  "new_severity" => null, // int
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostureApiFinding()->load(["id" => "posture_api_finding_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiFindingEntity`

Create a new `PostureApiFindingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiFindingInstanceEntity

```php
$posture_api_finding_instance = $client->PostureApiFindingInstance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `array` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | A specific instance of a security finding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiFindingInstance()->create([
  "account_id" => null, // string
  "finding_id" => null, // string
  "check_instances" => null, // array
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostureApiFindingInstance()->load(["id" => "posture_api_finding_instance_id", "account_id" => "account_id", "finding_id" => "finding_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiFindingInstanceEntity`

Create a new `PostureApiFindingInstanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiFindingTypeEntity

```php
$posture_api_finding_type = $client->PostureApiFindingType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | Basic finding type information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostureApiFindingType()->load(["id" => "posture_api_finding_type_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiFindingTypeEntity`

Create a new `PostureApiFindingTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedContentAssetListEntity

```php
$posture_api_paginated_content_asset_list = $client->PostureApiPaginatedContentAssetList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of content asset objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedContentAssetList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedContentAssetListEntity`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedExportJobListEntity

```php
$posture_api_paginated_export_job_list = $client->PostureApiPaginatedExportJobList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of export job objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedExportJobList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedExportJobListEntity`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedFindingInstanceListEntity

```php
$posture_api_paginated_finding_instance_list = $client->PostureApiPaginatedFindingInstanceList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of finding instance objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedFindingInstanceList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedFindingInstanceListEntity`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedFindingListEntity

```php
$posture_api_paginated_finding_list = $client->PostureApiPaginatedFindingList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of finding objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedFindingList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedFindingListEntity`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedFindingTypeListEntity

```php
$posture_api_paginated_finding_type_list = $client->PostureApiPaginatedFindingTypeList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of finding type objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedFindingTypeList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedFindingTypeListEntity`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedRemediationJobListEntity

```php
$posture_api_paginated_remediation_job_list = $client->PostureApiPaginatedRemediationJobList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `array` | Yes | Asset information for a remediation job. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedRemediationJobList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedRemediationJobListEntity`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiPaginatedRemediationTypeListEntity

```php
$posture_api_paginated_remediation_type_list = $client->PostureApiPaginatedRemediationTypeList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Array of remediation type objects. |
| `result_info` | `array` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiPaginatedRemediationTypeList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiPaginatedRemediationTypeListEntity`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiWebhookEntity

```php
$posture_api_webhook = $client->PostureApiWebhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PostureApiWebhook()->create([
  "account_id" => null, // string
  "webhook_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostureApiWebhook()->load(["id" => "posture_api_webhook_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiWebhookEntity`

Create a new `PostureApiWebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostureApiWebhookListEntity

```php
$posture_api_webhook_list = $client->PostureApiWebhookList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | List of webhook configurations. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostureApiWebhookList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostureApiWebhookListEntity`

Create a new `PostureApiWebhookListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `string` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `string` | Yes | Target URL for the webhook configuration. |
| `headers` | `array` | No | List of custom headers to include in webhook requests. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "account_id" => null, // string
  "authentication_type" => null, // string
  "destination_url" => null, // string
  "label" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["account_id" => "account_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Webhook()->update([
  "account_id" => "account_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareDlpSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

