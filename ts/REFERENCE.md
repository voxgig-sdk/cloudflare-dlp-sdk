# CloudflareDlp TypeScript SDK Reference

Complete API reference for the CloudflareDlp TypeScript SDK.


## CloudflareDlpSDK

### Constructor

```ts
new CloudflareDlpSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDlpSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareDlpSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareDlpSDK` instance in test mode.


### Instance Methods

#### `DlpCustomPromptTopic(data?: object)`

Create a new `DlpCustomPromptTopic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpCustomPromptTopicEntity` instance.

#### `DlpDataClass(data?: object)`

Create a new `DlpDataClass` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDataClassEntity` instance.

#### `DlpDataTag(data?: object)`

Create a new `DlpDataTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDataTagEntity` instance.

#### `DlpDataTagCategory(data?: object)`

Create a new `DlpDataTagCategory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDataTagCategoryEntity` instance.

#### `DlpDataTagCategoryTemplate(data?: object)`

Create a new `DlpDataTagCategoryTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDataTagCategoryTemplateEntity` instance.

#### `DlpDataset(data?: object)`

Create a new `DlpDataset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDatasetEntity` instance.

#### `DlpDocumentFingerprint(data?: object)`

Create a new `DlpDocumentFingerprint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpDocumentFingerprintEntity` instance.

#### `DlpEmail(data?: object)`

Create a new `DlpEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpEmailEntity` instance.

#### `DlpEntry(data?: object)`

Create a new `DlpEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpEntryEntity` instance.

#### `DlpIntegrationEntry(data?: object)`

Create a new `DlpIntegrationEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpIntegrationEntryEntity` instance.

#### `DlpPredefinedEntry(data?: object)`

Create a new `DlpPredefinedEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpPredefinedEntryEntity` instance.

#### `DlpProfile(data?: object)`

Create a new `DlpProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpProfileEntity` instance.

#### `DlpSensitivityGroup(data?: object)`

Create a new `DlpSensitivityGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpSensitivityGroupEntity` instance.

#### `DlpSensitivityGroupTemplate(data?: object)`

Create a new `DlpSensitivityGroupTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpSensitivityGroupTemplateEntity` instance.

#### `DlpSensitivityLevel(data?: object)`

Create a new `DlpSensitivityLevel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpSensitivityLevelEntity` instance.

#### `DlpSetting(data?: object)`

Create a new `DlpSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DlpSettingEntity` instance.

#### `Policy(data?: object)`

Create a new `Policy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyEntity` instance.

#### `PostureApiCreateRemediationJob(data?: object)`

Create a new `PostureApiCreateRemediationJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiCreateRemediationJobEntity` instance.

#### `PostureApiCreateWebhookJob(data?: object)`

Create a new `PostureApiCreateWebhookJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiCreateWebhookJobEntity` instance.

#### `PostureApiExportJob(data?: object)`

Create a new `PostureApiExportJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiExportJobEntity` instance.

#### `PostureApiFinding(data?: object)`

Create a new `PostureApiFinding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiFindingEntity` instance.

#### `PostureApiFindingInstance(data?: object)`

Create a new `PostureApiFindingInstance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiFindingInstanceEntity` instance.

#### `PostureApiFindingType(data?: object)`

Create a new `PostureApiFindingType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiFindingTypeEntity` instance.

#### `PostureApiPaginatedContentAssetList(data?: object)`

Create a new `PostureApiPaginatedContentAssetList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedContentAssetListEntity` instance.

#### `PostureApiPaginatedExportJobList(data?: object)`

Create a new `PostureApiPaginatedExportJobList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedExportJobListEntity` instance.

#### `PostureApiPaginatedFindingInstanceList(data?: object)`

Create a new `PostureApiPaginatedFindingInstanceList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedFindingInstanceListEntity` instance.

#### `PostureApiPaginatedFindingList(data?: object)`

Create a new `PostureApiPaginatedFindingList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedFindingListEntity` instance.

#### `PostureApiPaginatedFindingTypeList(data?: object)`

Create a new `PostureApiPaginatedFindingTypeList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedFindingTypeListEntity` instance.

#### `PostureApiPaginatedRemediationJobList(data?: object)`

Create a new `PostureApiPaginatedRemediationJobList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedRemediationJobListEntity` instance.

#### `PostureApiPaginatedRemediationTypeList(data?: object)`

Create a new `PostureApiPaginatedRemediationTypeList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiPaginatedRemediationTypeListEntity` instance.

#### `PostureApiWebhook(data?: object)`

Create a new `PostureApiWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiWebhookEntity` instance.

#### `PostureApiWebhookList(data?: object)`

Create a new `PostureApiWebhookList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostureApiWebhookListEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareDlpSDK.test()`.

**Returns:** `CloudflareDlpSDK` instance in test mode.


---

## DlpCustomPromptTopicEntity

```ts
const dlp_custom_prompt_topic = client.DlpCustomPromptTopic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpCustomPromptTopic().create({
  account_id: 'example_account_id',
  enabled: true,
  name: 'example_name',
  result: {},
  topic: 'example_topic',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpCustomPromptTopic().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpCustomPromptTopic().load({ id: 'dlp_custom_prompt_topic_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpCustomPromptTopic().remove({ id: 'dlp_custom_prompt_topic_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpCustomPromptTopic().update({
  id: 'dlp_custom_prompt_topic_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpCustomPromptTopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDataClassEntity

```ts
const dlp_data_class = client.DlpDataClass()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `any[]` | Yes |  |
| `description` | `string` | No |  |
| `expression` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `sensitivity_levels` | `any[]` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpDataClass().create({
  account_id: 'example_account_id',
  data_tags: [],
  expression: 'example_expression',
  name: 'example_name',
  result: {},
  sensitivity_levels: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDataClass().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDataClass().load({ id: 'dlp_data_class_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpDataClass().remove({ id: 'dlp_data_class_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpDataClass().update({
  id: 'dlp_data_class_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDataClassEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDataTagEntity

```ts
const dlp_data_tag = client.DlpDataTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpDataTag().create({
  account_id: 'example_account_id',
  data_tag_category_id: 'example_data_tag_category_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDataTag().list({ account_id: "example", data_tag_category_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDataTag().load({ id: 'dlp_data_tag_id', account_id: 'account_id', data_tag_category_id: 'data_tag_category_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpDataTag().remove({ id: 'dlp_data_tag_id', account_id: 'account_id', data_tag_category_id: 'data_tag_category_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpDataTag().update({
  id: 'dlp_data_tag_id',
  account_id: 'account_id',
  data_tag_category_id: 'data_tag_category_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDataTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDataTagCategoryEntity

```ts
const dlp_data_tag_category = client.DlpDataTagCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `tags` | `any[]` | No | Tags to create with the category. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpDataTagCategory().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDataTagCategory().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDataTagCategory().load({ id: 'dlp_data_tag_category_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpDataTagCategory().remove({ id: 'dlp_data_tag_category_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpDataTagCategory().update({
  id: 'dlp_data_tag_category_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDataTagCategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDataTagCategoryTemplateEntity

```ts
const dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDataTagCategoryTemplate().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDataTagCategoryTemplate().load({ id: 'dlp_data_tag_category_template_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDatasetEntity

```ts
const dlp_dataset = client.DlpDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `boolean` | No | Only applies to custom word lists. |
| `description` | `string` | No | The description of the dataset. |
| `encoding_version` | `number` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the dataset, must be unique. |
| `result` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpDataset().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDataset().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDataset().load({ id: 'dlp_dataset_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpDataset().remove({ id: 'dlp_dataset_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpDataset().update({
  id: 'dlp_dataset_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDatasetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpDocumentFingerprintEntity

```ts
const dlp_document_fingerprint = client.DlpDocumentFingerprint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match_percent` | `number` | No |  |
| `name` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpDocumentFingerprint().create({
  account_id: 'example_account_id',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpDocumentFingerprint().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpDocumentFingerprint().load({ id: 'dlp_document_fingerprint_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpDocumentFingerprint().remove({ id: 'dlp_document_fingerprint_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpDocumentFingerprint().update({
  id: 'dlp_document_fingerprint_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpDocumentFingerprintEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpEmailEntity

```ts
const dlp_email = client.DlpEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `any` | Yes |  |
| `auth_requirements` | `any` | Yes |  |
| `conditions` | `any[]` | Yes | Triggered if all conditions match. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `new_priorities` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpEmail().create({
  account_id: 'example_account_id',
  action: 'example_action',
  auth_requirements: 'example_auth_requirements',
  conditions: [],
  enabled: true,
  name: 'example_name',
  new_priorities: {},
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpEmail().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpEmail().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpEmail().remove({ account_id: 'account_id', rule_id: 'rule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpEmail().update({
  account_id: 'account_id',
  rule_id: 'rule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpEntryEntity

```ts
const dlp_entry = client.DlpEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pattern` | `Record<string, any>` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  name: 'example_name',
  pattern: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpEntry().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpEntry().load({ id: 'dlp_entry_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpEntry().remove({ id: 'dlp_entry_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpEntry().update({
  id: 'dlp_entry_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpIntegrationEntryEntity

```ts
const dlp_integration_entry = client.DlpIntegrationEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpIntegrationEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  entry_id: 'example_entry_id',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpIntegrationEntry().remove({ account_id: 'account_id', entry_id: 'entry_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpIntegrationEntry().update({
  account_id: 'account_id',
  entry_id: 'entry_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpIntegrationEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpPredefinedEntryEntity

```ts
const dlp_predefined_entry = client.DlpPredefinedEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpPredefinedEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  entry_id: 'example_entry_id',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpPredefinedEntry().remove({ account_id: 'account_id', entry_id: 'entry_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpPredefinedEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpProfileEntity

```ts
const dlp_profile = client.DlpProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `boolean` | No |  |
| `allowed_match_count` | `number` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` | No |  |
| `context_awareness` | `Record<string, any>` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `any[]` | No | Data class IDs to associate with the profile. |
| `data_tags` | `any[]` | No | Data tag IDs to associate with the profile. |
| `description` | `string` | No | The description of the profile. |
| `entries` | `any[]` | No | Custom entries from this profile. |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ocr_enabled` | `boolean` | No |  |
| `result` | `any` | No |  |
| `sensitivity_levels` | `any[]` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `any[]` | No | Entries from other profiles (e.g. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `config` | `/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | `client.DlpProfile().create({ $action: 'config', ... })` |
| `config` | `/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | `client.DlpProfile().load({ $action: 'config', ... })` |
| `config` | `/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | `client.DlpProfile().update({ $action: 'config', ... })` |

An action returns that action's OWN response, which is not necessarily a
DlpProfile record — check the API definition for its shape.

```ts
const result = await client.DlpProfile().create({
  $action: 'config',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpProfile().create({
  account_id: 'example_account_id',
  context_awareness: {},
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpProfile().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpProfile().load({ id: 'dlp_profile_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpProfile().remove({ account_id: 'account_id', profile_id: 'profile_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpProfile().update({
  id: 'dlp_profile_id',
  account_id: 'account_id',
  profile_id: 'profile_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpSensitivityGroupEntity

```ts
const dlp_sensitivity_group = client.DlpSensitivityGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `levels` | `any[]` | No | Levels to create with the group. |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `level_order` | `/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order` | `client.DlpSensitivityGroup().load({ $action: 'level_order', ... })` |
| `level_order` | `/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order` | `client.DlpSensitivityGroup().update({ $action: 'level_order', ... })` |

An action returns that action's OWN response, which is not necessarily a
DlpSensitivityGroup record — check the API definition for its shape.

```ts
const result = await client.DlpSensitivityGroup().load({
  $action: 'level_order',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpSensitivityGroup().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpSensitivityGroup().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpSensitivityGroup().load({ id: 'dlp_sensitivity_group_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpSensitivityGroup().remove({ id: 'dlp_sensitivity_group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpSensitivityGroup().update({
  id: 'dlp_sensitivity_group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpSensitivityGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpSensitivityGroupTemplateEntity

```ts
const dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpSensitivityGroupTemplate().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpSensitivityGroupTemplate().load({ id: 'dlp_sensitivity_group_template_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpSensitivityLevelEntity

```ts
const dlp_sensitivity_level = client.DlpSensitivityLevel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpSensitivityLevel().create({
  account_id: 'example_account_id',
  sensitivity_group_id: 'example_sensitivity_group_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DlpSensitivityLevel().list({ account_id: "example", sensitivity_group_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpSensitivityLevel().load({ id: 'dlp_sensitivity_level_id', account_id: 'account_id', sensitivity_group_id: 'sensitivity_group_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpSensitivityLevel().remove({ id: 'dlp_sensitivity_level_id', account_id: 'account_id', sensitivity_group_id: 'sensitivity_group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpSensitivityLevel().update({
  id: 'dlp_sensitivity_level_id',
  account_id: 'account_id',
  sensitivity_group_id: 'sensitivity_group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpSensitivityLevelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DlpSettingEntity

```ts
const dlp_setting = client.DlpSetting()
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
| `result` | `Record<string, any>` | Yes | DLP account-level settings response. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DlpSetting().create({
  account_id: 'example_account_id',
  regex: 'example_regex',
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DlpSetting().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DlpSetting().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DlpSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DlpSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyEntity

```ts
const policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Record<string, any>` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `boolean` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `string` | No | Optional description of what this policy does. |
| `display_name` | `string` | Yes | Display name for the policy configuration. |
| `enabled` | `boolean` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `any[]` | Yes |  |
| `finding_type_id` | `string` | Yes | The finding type this policy is associated with. |
| `id` | `string` | No |  |
| `integration_ids` | `any[]` | No | The integrations this policy applies to. |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Response body for a policy configuration. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `log` | `/accounts/{account_id}/data-security/posture/policies/logs` | `client.Policy().list({ $action: 'log', ... })` |

An action returns that action's OWN response, which is not necessarily a
Policy record — check the API definition for its shape.

```ts
const result = await client.Policy().list({
  $action: 'log',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Policy().create({
  account_id: 'example_account_id',
  actions: {},
  applies_to_all_integrations: true,
  display_name: 'example_display_name',
  enabled: true,
  errors: [],
  finding_type_id: 'example_finding_type_id',
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Policy().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Policy().load({ id: 'policy_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Policy().remove({ id: 'policy_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Policy().update({
  id: 'policy_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiCreateRemediationJobEntity

```ts
const posture_api_create_remediation_job = client.PostureApiCreateRemediationJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Array of error messages. |
| `finding_instance_ids` | `any[]` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `any[]` | Yes | Array of informational messages. |
| `remediation_type_id` | `string` | Yes | A UUID identifying this Remediation Type. |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiCreateRemediationJob().create({
  account_id: 'example_account_id',
  errors: [],
  finding_instance_ids: [],
  messages: [],
  remediation_type_id: 'example_remediation_type_id',
  result: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiCreateWebhookJobEntity

```ts
const posture_api_create_webhook_job = client.PostureApiCreateWebhookJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `any[]` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `any[]` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiCreateWebhookJob().create({
  account_id: 'example_account_id',
  finding_instance_ids: [],
  webhook_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiExportJobEntity

```ts
const posture_api_export_job = client.PostureApiExportJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Filter for archived status. |
| `dlp_profile_id` | `any[]` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `any[]` | Yes | DLP profile metadata for the export. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `boolean` | No | Filter for only the ignored findings. |
| `integration_id` | `any[]` | No | Filter by integration IDs. |
| `max_affliction_date` | `string` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `any[]` | Yes |  |
| `min_affliction_date` | `string` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `any[]` | No | Ordering specifications for the export. |
| `product` | `string` | No | Filter by finding's category product. |
| `result` | `Record<string, any>` | Yes | Information about an export job. |
| `search` | `string` | No | A search term. |
| `severities` | `any[]` | No | Filter by severity levels. |
| `status` | `any[]` | No | Filter by remediation job status. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `vendors` | `any[]` | No | Filter by vendor types. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiExportJob().create({
  account_id: 'example_account_id',
  dlp_profile_information: [],
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostureApiExportJob().load({ id: 'posture_api_export_job_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiExportJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiFindingEntity

```ts
const posture_api_finding = client.PostureApiFinding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `any[]` | Yes | A list of finding IDs to pass along. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `new_severity` | `number` | Yes | The numeric severity value to apply to the finding. |
| `result` | `Record<string, any>` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiFinding().create({
  account_id: 'example_account_id',
  checks: [],
  errors: [],
  messages: [],
  new_severity: 1,
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostureApiFinding().load({ id: 'posture_api_finding_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiFindingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiFindingInstanceEntity

```ts
const posture_api_finding_instance = client.PostureApiFindingInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `any[]` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | A specific instance of a security finding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiFindingInstance().create({
  account_id: 'example_account_id',
  finding_id: 'example_finding_id',
  check_instances: [],
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostureApiFindingInstance().load({ id: 'posture_api_finding_instance_id', account_id: 'account_id', finding_id: 'finding_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiFindingInstanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiFindingTypeEntity

```ts
const posture_api_finding_type = client.PostureApiFindingType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Basic finding type information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostureApiFindingType().load({ id: 'posture_api_finding_type_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiFindingTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedContentAssetListEntity

```ts
const posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of content asset objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedContentAssetList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedExportJobListEntity

```ts
const posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of export job objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedExportJobList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedFindingInstanceListEntity

```ts
const posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of finding instance objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedFindingInstanceList().list({ account_id: "example", finding_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedFindingListEntity

```ts
const posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of finding objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedFindingList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedFindingTypeListEntity

```ts
const posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of finding type objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedFindingTypeList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedRemediationJobListEntity

```ts
const posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `Record<string, any>` | Yes | Asset information for a remediation job. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedRemediationJobList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiPaginatedRemediationTypeListEntity

```ts
const posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | Array of remediation type objects. |
| `result_info` | `Record<string, any>` | Yes | Pagination and result information. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiPaginatedRemediationTypeList().list({ account_id: "example", finding_type_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiWebhookEntity

```ts
const posture_api_webhook = client.PostureApiWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `evaluate` | `/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate` | `client.PostureApiWebhook().create({ $action: 'evaluate', ... })` |

An action returns that action's OWN response, which is not necessarily a
PostureApiWebhook record — check the API definition for its shape.

```ts
const result = await client.PostureApiWebhook().create({
  $action: 'evaluate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PostureApiWebhook().create({
  account_id: 'example_account_id',
  webhook_id: 'example_webhook_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostureApiWebhook().load({ id: 'posture_api_webhook_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostureApiWebhookListEntity

```ts
const posture_api_webhook_list = client.PostureApiWebhookList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No | List of webhook configurations. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostureApiWebhookList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostureApiWebhookListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `string` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `string` | Yes | Target URL for the webhook configuration. |
| `headers` | `any[]` | No | List of custom headers to include in webhook requests. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `evaluate` | `/accounts/{account_id}/data-security/posture/webhooks/evaluate` | `client.Webhook().create({ $action: 'evaluate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Webhook record — check the API definition for its shape.

```ts
const result = await client.Webhook().create({
  $action: 'evaluate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  account_id: 'example_account_id',
  authentication_type: 'example_authentication_type',
  destination_url: 'example_destination_url',
  label: 'example_label',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ account_id: 'account_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Webhook().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDlpSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareDlpSDK({
  feature: {
    test: { active: true },
  }
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

