# CloudflareDlp Golang SDK Reference

Complete API reference for the CloudflareDlp Golang SDK.


## CloudflareDlpSDK

### Constructor

```go
func NewCloudflareDlpSDK(options map[string]any) *CloudflareDlpSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareDlpSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareDlpSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `DlpCustomPromptTopic(data map[string]any) CloudflareDlpEntity`

Create a new `DlpCustomPromptTopic` entity instance. Pass `nil` for no initial data.

#### `DlpDataClass(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDataClass` entity instance. Pass `nil` for no initial data.

#### `DlpDataTag(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDataTag` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategory(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDataTagCategory` entity instance. Pass `nil` for no initial data.

#### `DlpDataTagCategoryTemplate(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDataTagCategoryTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpDataset(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDataset` entity instance. Pass `nil` for no initial data.

#### `DlpDocumentFingerprint(data map[string]any) CloudflareDlpEntity`

Create a new `DlpDocumentFingerprint` entity instance. Pass `nil` for no initial data.

#### `DlpEmail(data map[string]any) CloudflareDlpEntity`

Create a new `DlpEmail` entity instance. Pass `nil` for no initial data.

#### `DlpEntry(data map[string]any) CloudflareDlpEntity`

Create a new `DlpEntry` entity instance. Pass `nil` for no initial data.

#### `DlpIntegrationEntry(data map[string]any) CloudflareDlpEntity`

Create a new `DlpIntegrationEntry` entity instance. Pass `nil` for no initial data.

#### `DlpPredefinedEntry(data map[string]any) CloudflareDlpEntity`

Create a new `DlpPredefinedEntry` entity instance. Pass `nil` for no initial data.

#### `DlpProfile(data map[string]any) CloudflareDlpEntity`

Create a new `DlpProfile` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroup(data map[string]any) CloudflareDlpEntity`

Create a new `DlpSensitivityGroup` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityGroupTemplate(data map[string]any) CloudflareDlpEntity`

Create a new `DlpSensitivityGroupTemplate` entity instance. Pass `nil` for no initial data.

#### `DlpSensitivityLevel(data map[string]any) CloudflareDlpEntity`

Create a new `DlpSensitivityLevel` entity instance. Pass `nil` for no initial data.

#### `DlpSetting(data map[string]any) CloudflareDlpEntity`

Create a new `DlpSetting` entity instance. Pass `nil` for no initial data.

#### `Policy(data map[string]any) CloudflareDlpEntity`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateRemediationJob(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiCreateRemediationJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiCreateWebhookJob(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiCreateWebhookJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiExportJob(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiExportJob` entity instance. Pass `nil` for no initial data.

#### `PostureApiFinding(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiFinding` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingInstance(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiFindingInstance` entity instance. Pass `nil` for no initial data.

#### `PostureApiFindingType(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiFindingType` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedContentAssetList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedContentAssetList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedExportJobList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedExportJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingInstanceList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedFindingInstanceList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedFindingList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedFindingTypeList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedFindingTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationJobList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedRemediationJobList` entity instance. Pass `nil` for no initial data.

#### `PostureApiPaginatedRemediationTypeList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiPaginatedRemediationTypeList` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhook(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiWebhook` entity instance. Pass `nil` for no initial data.

#### `PostureApiWebhookList(data map[string]any) CloudflareDlpEntity`

Create a new `PostureApiWebhookList` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) CloudflareDlpEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## DlpCustomPromptTopicEntity

```go
dlpCustomPromptTopic := client.DlpCustomPromptTopic(nil)
fmt.Println(dlpCustomPromptTopic.GetName()) // "dlp_custom_prompt_topic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpCustomPromptTopic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpCustomPromptTopic(nil).Load(map[string]any{"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpCustomPromptTopic(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "enabled": true,
    "name": "example_name",
    "result": map[string]any{},
    "topic": "example_topic",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpCustomPromptTopic(nil).Update(map[string]any{
    "id": "dlp_custom_prompt_topic_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpCustomPromptTopic(nil).Remove(map[string]any{"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpCustomPromptTopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDataClassEntity

```go
dlpDataClass := client.DlpDataClass(nil)
fmt.Println(dlpDataClass.GetName()) // "dlp_data_class"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `[]any` | Yes |  |
| `description` | `string` | No |  |
| `expression` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `sensitivity_levels` | `[]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDataClass(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDataClass(nil).Load(map[string]any{"id": "dlp_data_class_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpDataClass(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "data_tags": []any{},
    "expression": "example_expression",
    "name": "example_name",
    "result": map[string]any{},
    "sensitivity_levels": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpDataClass(nil).Update(map[string]any{
    "id": "dlp_data_class_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpDataClass(nil).Remove(map[string]any{"id": "dlp_data_class_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDataClassEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDataTagEntity

```go
dlpDataTag := client.DlpDataTag(nil)
fmt.Println(dlpDataTag.GetName()) // "dlp_data_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDataTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDataTag(nil).Load(map[string]any{"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpDataTag(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "data_tag_category_id": "example_data_tag_category_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpDataTag(nil).Update(map[string]any{
    "id": "dlp_data_tag_id",
    "account_id": "account_id",
    "data_tag_category_id": "data_tag_category_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpDataTag(nil).Remove(map[string]any{"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDataTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDataTagCategoryEntity

```go
dlpDataTagCategory := client.DlpDataTagCategory(nil)
fmt.Println(dlpDataTagCategory.GetName()) // "dlp_data_tag_category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Tags to create with the category. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDataTagCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDataTagCategory(nil).Load(map[string]any{"id": "dlp_data_tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpDataTagCategory(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpDataTagCategory(nil).Update(map[string]any{
    "id": "dlp_data_tag_category_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpDataTagCategory(nil).Remove(map[string]any{"id": "dlp_data_tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDataTagCategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDataTagCategoryTemplateEntity

```go
dlpDataTagCategoryTemplate := client.DlpDataTagCategoryTemplate(nil)
fmt.Println(dlpDataTagCategoryTemplate.GetName()) // "dlp_data_tag_category_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDataTagCategoryTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDataTagCategoryTemplate(nil).Load(map[string]any{"id": "dlp_data_tag_category_template_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDatasetEntity

```go
dlpDataset := client.DlpDataset(nil)
fmt.Println(dlpDataset.GetName()) // "dlp_dataset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `bool` | No | Only applies to custom word lists. |
| `description` | `string` | No | The description of the dataset. |
| `encoding_version` | `int` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the dataset, must be unique. |
| `result` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDataset(nil).Load(map[string]any{"id": "dlp_dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpDataset(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpDataset(nil).Update(map[string]any{
    "id": "dlp_dataset_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpDataset(nil).Remove(map[string]any{"id": "dlp_dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDatasetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpDocumentFingerprintEntity

```go
dlpDocumentFingerprint := client.DlpDocumentFingerprint(nil)
fmt.Println(dlpDocumentFingerprint.GetName()) // "dlp_document_fingerprint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match_percent` | `int` | No |  |
| `name` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpDocumentFingerprint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpDocumentFingerprint(nil).Load(map[string]any{"id": "dlp_document_fingerprint_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpDocumentFingerprint(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpDocumentFingerprint(nil).Update(map[string]any{
    "id": "dlp_document_fingerprint_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpDocumentFingerprint(nil).Remove(map[string]any{"id": "dlp_document_fingerprint_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpDocumentFingerprintEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpEmailEntity

```go
dlpEmail := client.DlpEmail(nil)
fmt.Println(dlpEmail.GetName()) // "dlp_email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `any` | Yes |  |
| `auth_requirements` | `any` | Yes |  |
| `conditions` | `[]any` | Yes | Triggered if all conditions match. |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `new_priorities` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpEmail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpEmail(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpEmail(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "action": "example_action",
    "auth_requirements": "example_auth_requirements",
    "conditions": []any{},
    "enabled": true,
    "name": "example_name",
    "new_priorities": map[string]any{},
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpEmail(nil).Update(map[string]any{
    "account_id": "account_id",
    "rule_id": "rule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpEmail(nil).Remove(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpEmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpEntryEntity

```go
dlpEntry := client.DlpEntry(nil)
fmt.Println(dlpEntry.GetName()) // "dlp_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pattern` | `map[string]any` | Yes |  |
| `profile_id` | `string` | No |  |
| `result` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpEntry(nil).Load(map[string]any{"id": "dlp_entry_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpEntry(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "enabled": true,
    "name": "example_name",
    "pattern": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpEntry(nil).Update(map[string]any{
    "id": "dlp_entry_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpEntry(nil).Remove(map[string]any{"id": "dlp_entry_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpIntegrationEntryEntity

```go
dlpIntegrationEntry := client.DlpIntegrationEntry(nil)
fmt.Println(dlpIntegrationEntry.GetName()) // "dlp_integration_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpIntegrationEntry(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "enabled": true,
    "entry_id": "example_entry_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpIntegrationEntry(nil).Update(map[string]any{
    "account_id": "account_id",
    "entry_id": "entry_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpIntegrationEntry(nil).Remove(map[string]any{"account_id": "account_id", "entry_id": "entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpIntegrationEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpPredefinedEntryEntity

```go
dlpPredefinedEntry := client.DlpPredefinedEntry(nil)
fmt.Println(dlpPredefinedEntry.GetName()) // "dlp_predefined_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `string` | Yes |  |
| `profile_id` | `string` | No | This field is not used as the owning profile. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpPredefinedEntry(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "enabled": true,
    "entry_id": "example_entry_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpPredefinedEntry(nil).Remove(map[string]any{"account_id": "account_id", "entry_id": "entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpPredefinedEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpProfileEntity

```go
dlpProfile := client.DlpProfile(nil)
fmt.Println(dlpProfile.GetName()) // "dlp_profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `bool` | No |  |
| `allowed_match_count` | `int` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` | No |  |
| `context_awareness` | `map[string]any` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `[]any` | No | Data class IDs to associate with the profile. |
| `data_tags` | `[]any` | No | Data tag IDs to associate with the profile. |
| `description` | `string` | No | The description of the profile. |
| `entries` | `[]any` | No | Custom entries from this profile. |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ocr_enabled` | `bool` | No |  |
| `result` | `any` | No |  |
| `sensitivity_levels` | `[]any` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `[]any` | No | Entries from other profiles (e.g. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpProfile(nil).Load(map[string]any{"id": "dlp_profile_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpProfile(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "context_awareness": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpProfile(nil).Update(map[string]any{
    "id": "dlp_profile_id",
    "account_id": "account_id",
    "profile_id": "profile_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpProfile(nil).Remove(map[string]any{"account_id": "account_id", "profile_id": "profile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpSensitivityGroupEntity

```go
dlpSensitivityGroup := client.DlpSensitivityGroup(nil)
fmt.Println(dlpSensitivityGroup.GetName()) // "dlp_sensitivity_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `levels` | `[]any` | No | Levels to create with the group. |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpSensitivityGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpSensitivityGroup(nil).Load(map[string]any{"id": "dlp_sensitivity_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpSensitivityGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpSensitivityGroup(nil).Update(map[string]any{
    "id": "dlp_sensitivity_group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpSensitivityGroup(nil).Remove(map[string]any{"id": "dlp_sensitivity_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpSensitivityGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpSensitivityGroupTemplateEntity

```go
dlpSensitivityGroupTemplate := client.DlpSensitivityGroupTemplate(nil)
fmt.Println(dlpSensitivityGroupTemplate.GetName()) // "dlp_sensitivity_group_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpSensitivityGroupTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpSensitivityGroupTemplate(nil).Load(map[string]any{"id": "dlp_sensitivity_group_template_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpSensitivityLevelEntity

```go
dlpSensitivityLevel := client.DlpSensitivityLevel(nil)
fmt.Println(dlpSensitivityLevel.GetName()) // "dlp_sensitivity_level"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DlpSensitivityLevel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpSensitivityLevel(nil).Load(map[string]any{"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpSensitivityLevel(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "sensitivity_group_id": "example_sensitivity_group_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpSensitivityLevel(nil).Update(map[string]any{
    "id": "dlp_sensitivity_level_id",
    "account_id": "account_id",
    "sensitivity_group_id": "sensitivity_group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpSensitivityLevel(nil).Remove(map[string]any{"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpSensitivityLevelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DlpSettingEntity

```go
dlpSetting := client.DlpSetting(nil)
fmt.Println(dlpSetting.GetName()) // "dlp_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_analysis` | `bool` | No | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `any` | No |  |
| `max_match_bytes` | `int` | No | Maximum number of bytes that the regular expression can match. |
| `ocr` | `bool` | No | Whether OCR is enabled at the account level. |
| `payload_logging` | `any` | No |  |
| `public_key` | `string` | No | Base64-encoded public key for encrypting payload logs. |
| `regex` | `string` | Yes |  |
| `result` | `map[string]any` | Yes | DLP account-level settings response. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DlpSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DlpSetting(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "regex": "example_regex",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DlpSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DlpSetting(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DlpSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PolicyEntity

```go
policy := client.Policy(nil)
fmt.Println(policy.GetName()) // "policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `map[string]any` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `bool` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `string` | No | Optional description of what this policy does. |
| `display_name` | `string` | Yes | Display name for the policy configuration. |
| `enabled` | `bool` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `[]any` | Yes |  |
| `finding_type_id` | `string` | Yes | The finding type this policy is associated with. |
| `id` | `string` | No |  |
| `integration_ids` | `[]any` | No | The integrations this policy applies to. |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Response body for a policy configuration. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Policy(nil).Load(map[string]any{"id": "policy_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Policy(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "actions": map[string]any{},
    "applies_to_all_integrations": true,
    "display_name": "example_display_name",
    "enabled": true,
    "errors": []any{},
    "finding_type_id": "example_finding_type_id",
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Policy(nil).Update(map[string]any{
    "id": "policy_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Policy(nil).Remove(map[string]any{"id": "policy_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiCreateRemediationJobEntity

```go
postureApiCreateRemediationJob := client.PostureApiCreateRemediationJob(nil)
fmt.Println(postureApiCreateRemediationJob.GetName()) // "posture_api_create_remediation_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Array of error messages. |
| `finding_instance_ids` | `[]any` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `[]any` | Yes | Array of informational messages. |
| `remediation_type_id` | `string` | Yes | A UUID identifying this Remediation Type. |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiCreateRemediationJob(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "finding_instance_ids": []any{},
    "messages": []any{},
    "remediation_type_id": "example_remediation_type_id",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiCreateWebhookJobEntity

```go
postureApiCreateWebhookJob := client.PostureApiCreateWebhookJob(nil)
fmt.Println(postureApiCreateWebhookJob.GetName()) // "posture_api_create_webhook_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `[]any` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `[]any` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiCreateWebhookJob(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "finding_instance_ids": []any{},
    "webhook_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiExportJobEntity

```go
postureApiExportJob := client.PostureApiExportJob(nil)
fmt.Println(postureApiExportJob.GetName()) // "posture_api_export_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Filter for archived status. |
| `dlp_profile_id` | `[]any` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `[]any` | Yes | DLP profile metadata for the export. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `bool` | No | Filter for only the ignored findings. |
| `integration_id` | `[]any` | No | Filter by integration IDs. |
| `max_affliction_date` | `string` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `[]any` | Yes |  |
| `min_affliction_date` | `string` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `[]any` | No | Ordering specifications for the export. |
| `product` | `string` | No | Filter by finding's category product. |
| `result` | `map[string]any` | Yes | Information about an export job. |
| `search` | `string` | No | A search term. |
| `severities` | `[]any` | No | Filter by severity levels. |
| `status` | `[]any` | No | Filter by remediation job status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `vendors` | `[]any` | No | Filter by vendor types. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostureApiExportJob(nil).Load(map[string]any{"id": "posture_api_export_job_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiExportJob(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "dlp_profile_information": []any{},
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiExportJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiFindingEntity

```go
postureApiFinding := client.PostureApiFinding(nil)
fmt.Println(postureApiFinding.GetName()) // "posture_api_finding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `[]any` | Yes | A list of finding IDs to pass along. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `new_severity` | `int` | Yes | The numeric severity value to apply to the finding. |
| `result` | `map[string]any` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostureApiFinding(nil).Load(map[string]any{"id": "posture_api_finding_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiFinding(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "checks": []any{},
    "errors": []any{},
    "messages": []any{},
    "new_severity": 1,
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiFindingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiFindingInstanceEntity

```go
postureApiFindingInstance := client.PostureApiFindingInstance(nil)
fmt.Println(postureApiFindingInstance.GetName()) // "posture_api_finding_instance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `[]any` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | A specific instance of a security finding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostureApiFindingInstance(nil).Load(map[string]any{"id": "posture_api_finding_instance_id", "account_id": "account_id", "finding_id": "finding_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiFindingInstance(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "finding_id": "example_finding_id",
    "check_instances": []any{},
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiFindingInstanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiFindingTypeEntity

```go
postureApiFindingType := client.PostureApiFindingType(nil)
fmt.Println(postureApiFindingType.GetName()) // "posture_api_finding_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Basic finding type information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostureApiFindingType(nil).Load(map[string]any{"id": "posture_api_finding_type_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiFindingTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedContentAssetListEntity

```go
postureApiPaginatedContentAssetList := client.PostureApiPaginatedContentAssetList(nil)
fmt.Println(postureApiPaginatedContentAssetList.GetName()) // "posture_api_paginated_content_asset_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of content asset objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedContentAssetList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedExportJobListEntity

```go
postureApiPaginatedExportJobList := client.PostureApiPaginatedExportJobList(nil)
fmt.Println(postureApiPaginatedExportJobList.GetName()) // "posture_api_paginated_export_job_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of export job objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedExportJobList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedFindingInstanceListEntity

```go
postureApiPaginatedFindingInstanceList := client.PostureApiPaginatedFindingInstanceList(nil)
fmt.Println(postureApiPaginatedFindingInstanceList.GetName()) // "posture_api_paginated_finding_instance_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of finding instance objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedFindingInstanceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedFindingListEntity

```go
postureApiPaginatedFindingList := client.PostureApiPaginatedFindingList(nil)
fmt.Println(postureApiPaginatedFindingList.GetName()) // "posture_api_paginated_finding_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of finding objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedFindingList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedFindingTypeListEntity

```go
postureApiPaginatedFindingTypeList := client.PostureApiPaginatedFindingTypeList(nil)
fmt.Println(postureApiPaginatedFindingTypeList.GetName()) // "posture_api_paginated_finding_type_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of finding type objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedFindingTypeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedRemediationJobListEntity

```go
postureApiPaginatedRemediationJobList := client.PostureApiPaginatedRemediationJobList(nil)
fmt.Println(postureApiPaginatedRemediationJobList.GetName()) // "posture_api_paginated_remediation_job_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `map[string]any` | Yes | Asset information for a remediation job. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedRemediationJobList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiPaginatedRemediationTypeListEntity

```go
postureApiPaginatedRemediationTypeList := client.PostureApiPaginatedRemediationTypeList(nil)
fmt.Println(postureApiPaginatedRemediationTypeList.GetName()) // "posture_api_paginated_remediation_type_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | Array of remediation type objects. |
| `result_info` | `map[string]any` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiPaginatedRemediationTypeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiWebhookEntity

```go
postureApiWebhook := client.PostureApiWebhook(nil)
fmt.Println(postureApiWebhook.GetName()) // "posture_api_webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostureApiWebhook(nil).Load(map[string]any{"id": "posture_api_webhook_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PostureApiWebhook(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "webhook_id": "example_webhook_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiWebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PostureApiWebhookListEntity

```go
postureApiWebhookList := client.PostureApiWebhookList(nil)
fmt.Println(postureApiWebhookList.GetName()) // "posture_api_webhook_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No | List of webhook configurations. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostureApiWebhookList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostureApiWebhookListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `string` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `string` | Yes | Target URL for the webhook configuration. |
| `headers` | `[]any` | No | List of custom headers to include in webhook requests. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "authentication_type": "example_authentication_type",
    "destination_url": "example_destination_url",
    "label": "example_label",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Webhook(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareDlpSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

