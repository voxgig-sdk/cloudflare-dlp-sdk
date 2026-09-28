# CloudflareDlp Python SDK Reference

Complete API reference for the CloudflareDlp Python SDK.


## CloudflareDlpSDK

### Constructor

```python
from cloudflaredlp_sdk import CloudflareDlpSDK

client = CloudflareDlpSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDlpSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareDlpSDK.test()
```


### Instance Methods

#### `DlpCustomPromptTopic(data=None)`

Create a new `DlpCustomPromptTopicEntity` instance. Pass `None` for no initial data.

#### `DlpDataClass(data=None)`

Create a new `DlpDataClassEntity` instance. Pass `None` for no initial data.

#### `DlpDataTag(data=None)`

Create a new `DlpDataTagEntity` instance. Pass `None` for no initial data.

#### `DlpDataTagCategory(data=None)`

Create a new `DlpDataTagCategoryEntity` instance. Pass `None` for no initial data.

#### `DlpDataTagCategoryTemplate(data=None)`

Create a new `DlpDataTagCategoryTemplateEntity` instance. Pass `None` for no initial data.

#### `DlpDataset(data=None)`

Create a new `DlpDatasetEntity` instance. Pass `None` for no initial data.

#### `DlpDocumentFingerprint(data=None)`

Create a new `DlpDocumentFingerprintEntity` instance. Pass `None` for no initial data.

#### `DlpEmail(data=None)`

Create a new `DlpEmailEntity` instance. Pass `None` for no initial data.

#### `DlpEntry(data=None)`

Create a new `DlpEntryEntity` instance. Pass `None` for no initial data.

#### `DlpIntegrationEntry(data=None)`

Create a new `DlpIntegrationEntryEntity` instance. Pass `None` for no initial data.

#### `DlpPredefinedEntry(data=None)`

Create a new `DlpPredefinedEntryEntity` instance. Pass `None` for no initial data.

#### `DlpProfile(data=None)`

Create a new `DlpProfileEntity` instance. Pass `None` for no initial data.

#### `DlpSensitivityGroup(data=None)`

Create a new `DlpSensitivityGroupEntity` instance. Pass `None` for no initial data.

#### `DlpSensitivityGroupTemplate(data=None)`

Create a new `DlpSensitivityGroupTemplateEntity` instance. Pass `None` for no initial data.

#### `DlpSensitivityLevel(data=None)`

Create a new `DlpSensitivityLevelEntity` instance. Pass `None` for no initial data.

#### `DlpSetting(data=None)`

Create a new `DlpSettingEntity` instance. Pass `None` for no initial data.

#### `Policy(data=None)`

Create a new `PolicyEntity` instance. Pass `None` for no initial data.

#### `PostureApiCreateRemediationJob(data=None)`

Create a new `PostureApiCreateRemediationJobEntity` instance. Pass `None` for no initial data.

#### `PostureApiCreateWebhookJob(data=None)`

Create a new `PostureApiCreateWebhookJobEntity` instance. Pass `None` for no initial data.

#### `PostureApiExportJob(data=None)`

Create a new `PostureApiExportJobEntity` instance. Pass `None` for no initial data.

#### `PostureApiFinding(data=None)`

Create a new `PostureApiFindingEntity` instance. Pass `None` for no initial data.

#### `PostureApiFindingInstance(data=None)`

Create a new `PostureApiFindingInstanceEntity` instance. Pass `None` for no initial data.

#### `PostureApiFindingType(data=None)`

Create a new `PostureApiFindingTypeEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedContentAssetList(data=None)`

Create a new `PostureApiPaginatedContentAssetListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedExportJobList(data=None)`

Create a new `PostureApiPaginatedExportJobListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedFindingInstanceList(data=None)`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedFindingList(data=None)`

Create a new `PostureApiPaginatedFindingListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedFindingTypeList(data=None)`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedRemediationJobList(data=None)`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance. Pass `None` for no initial data.

#### `PostureApiPaginatedRemediationTypeList(data=None)`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance. Pass `None` for no initial data.

#### `PostureApiWebhook(data=None)`

Create a new `PostureApiWebhookEntity` instance. Pass `None` for no initial data.

#### `PostureApiWebhookList(data=None)`

Create a new `PostureApiWebhookListEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DlpCustomPromptTopicEntity

```python
dlp_custom_prompt_topic = client.DlpCustomPromptTopic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `profile_id` | `str` | No |  |
| `result` | `dict` | Yes |  |
| `topic` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpCustomPromptTopic().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "name": "example_name",  # str
    "result": {},  # dict
    "topic": "example_topic",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpCustomPromptTopic().list({"account_id": "example"})
for dlp_custom_prompt_topic in results:
    print(dlp_custom_prompt_topic)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpCustomPromptTopic().load({"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpCustomPromptTopic().remove({"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpCustomPromptTopic().update({
    "id": "dlp_custom_prompt_topic_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpCustomPromptTopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDataClassEntity

```python
dlp_data_class = client.DlpDataClass()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_tags` | `list` | Yes |  |
| `description` | `str` | No |  |
| `expression` | `str` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `sensitivity_levels` | `list` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpDataClass().create({
    "account_id": "example_account_id",  # str
    "data_tags": [],  # list
    "expression": "example_expression",  # str
    "name": "example_name",  # str
    "result": {},  # dict
    "sensitivity_levels": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDataClass().list({"account_id": "example"})
for dlp_data_class in results:
    print(dlp_data_class)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDataClass().load({"id": "dlp_data_class_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpDataClass().remove({"id": "dlp_data_class_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpDataClass().update({
    "id": "dlp_data_class_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataClassEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDataTagEntity

```python
dlp_data_tag = client.DlpDataTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpDataTag().create({
    "account_id": "example_account_id",  # str
    "data_tag_category_id": "example_data_tag_category_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDataTag().list({"account_id": "example", "data_tag_category_id": "example"})
for dlp_data_tag in results:
    print(dlp_data_tag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDataTag().load({"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpDataTag().remove({"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpDataTag().update({
    "id": "dlp_data_tag_id",
    "account_id": "account_id",
    "data_tag_category_id": "data_tag_category_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDataTagCategoryEntity

```python
dlp_data_tag_category = client.DlpDataTagCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `tags` | `list` | No | Tags to create with the category. |
| `template_id` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpDataTagCategory().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDataTagCategory().list({"account_id": "example"})
for dlp_data_tag_category in results:
    print(dlp_data_tag_category)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDataTagCategory().load({"id": "dlp_data_tag_category_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpDataTagCategory().remove({"id": "dlp_data_tag_category_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpDataTagCategory().update({
    "id": "dlp_data_tag_category_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagCategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDataTagCategoryTemplateEntity

```python
dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDataTagCategoryTemplate().list({"account_id": "example"})
for dlp_data_tag_category_template in results:
    print(dlp_data_tag_category_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDataTagCategoryTemplate().load({"id": "dlp_data_tag_category_template_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDataTagCategoryTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDatasetEntity

```python
dlp_dataset = client.DlpDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `case_sensitive` | `bool` | No | Only applies to custom word lists. |
| `description` | `str` | No | The description of the dataset. |
| `encoding_version` | `int` | No | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the dataset, must be unique. |
| `result` | `dict` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpDataset().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDataset().list({"account_id": "example"})
for dlp_dataset in results:
    print(dlp_dataset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDataset().load({"id": "dlp_dataset_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpDataset().remove({"id": "dlp_dataset_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpDataset().update({
    "id": "dlp_dataset_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDatasetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpDocumentFingerprintEntity

```python
dlp_document_fingerprint = client.DlpDocumentFingerprint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `match_percent` | `int` | No |  |
| `name` | `str` | No |  |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match_percent` | - | - | Yes | - | - |
| `name` | - | - | Yes | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpDocumentFingerprint().create({
    "account_id": "example_account_id",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpDocumentFingerprint().list({"account_id": "example"})
for dlp_document_fingerprint in results:
    print(dlp_document_fingerprint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpDocumentFingerprint().load({"id": "dlp_document_fingerprint_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpDocumentFingerprint().remove({"id": "dlp_document_fingerprint_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpDocumentFingerprint().update({
    "id": "dlp_document_fingerprint_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpDocumentFingerprintEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpEmailEntity

```python
dlp_email = client.DlpEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Any` | Yes |  |
| `auth_requirements` | `Any` | Yes |  |
| `conditions` | `list` | Yes | Triggered if all conditions match. |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `new_priorities` | `dict` | Yes |  |
| `result` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpEmail().create({
    "account_id": "example_account_id",  # str
    "action": "example_action",  # Any
    "auth_requirements": "example_auth_requirements",  # Any
    "conditions": [],  # list
    "enabled": True,  # bool
    "name": "example_name",  # str
    "new_priorities": {},  # dict
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpEmail().list({"account_id": "example"})
for dlp_email in results:
    print(dlp_email)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpEmail().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpEmail().remove({"account_id": "account_id", "rule_id": "rule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpEmail().update({
    "account_id": "account_id",
    "rule_id": "rule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpEntryEntity

```python
dlp_entry = client.DlpEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `pattern` | `dict` | Yes |  |
| `profile_id` | `str` | No |  |
| `result` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "name": "example_name",  # str
    "pattern": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpEntry().list({"account_id": "example"})
for dlp_entry in results:
    print(dlp_entry)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpEntry().load({"id": "dlp_entry_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpEntry().remove({"id": "dlp_entry_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpEntry().update({
    "id": "dlp_entry_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpIntegrationEntryEntity

```python
dlp_integration_entry = client.DlpIntegrationEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `str` | Yes |  |
| `profile_id` | `str` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpIntegrationEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "entry_id": "example_entry_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpIntegrationEntry().remove({"account_id": "account_id", "entry_id": "entry_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpIntegrationEntry().update({
    "account_id": "account_id",
    "entry_id": "entry_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpIntegrationEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpPredefinedEntryEntity

```python
dlp_predefined_entry = client.DlpPredefinedEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `entry_id` | `str` | Yes |  |
| `profile_id` | `str` | No | This field is not used as the owning profile. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpPredefinedEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "entry_id": "example_entry_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpPredefinedEntry().remove({"account_id": "account_id", "entry_id": "entry_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpPredefinedEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpProfileEntity

```python
dlp_profile = client.DlpProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_enabled` | `bool` | No |  |
| `allowed_match_count` | `int` | No | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `str` | No |  |
| `context_awareness` | `dict` | Yes | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `list` | No | Data class IDs to associate with the profile. |
| `data_tags` | `list` | No | Data tag IDs to associate with the profile. |
| `description` | `str` | No | The description of the profile. |
| `entries` | `list` | No | Custom entries from this profile. |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `ocr_enabled` | `bool` | No |  |
| `result` | `Any` | No |  |
| `sensitivity_levels` | `list` | No | Sensitivity levels to associate with the profile. |
| `shared_entries` | `list` | No | Entries from other profiles (e.g. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpProfile().create({
    "account_id": "example_account_id",  # str
    "context_awareness": {},  # dict
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpProfile().list({"account_id": "example"})
for dlp_profile in results:
    print(dlp_profile)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpProfile().load({"id": "dlp_profile_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpProfile().remove({"account_id": "account_id", "profile_id": "profile_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpProfile().update({
    "id": "dlp_profile_id",
    "account_id": "account_id",
    "profile_id": "profile_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpSensitivityGroupEntity

```python
dlp_sensitivity_group = client.DlpSensitivityGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `levels` | `list` | No | Levels to create with the group. |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `template_id` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpSensitivityGroup().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpSensitivityGroup().list({"account_id": "example"})
for dlp_sensitivity_group in results:
    print(dlp_sensitivity_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpSensitivityGroup().load({"id": "dlp_sensitivity_group_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpSensitivityGroup().remove({"id": "dlp_sensitivity_group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpSensitivityGroup().update({
    "id": "dlp_sensitivity_group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpSensitivityGroupTemplateEntity

```python
dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `id` | - | - |
| `result` | - | Yes |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpSensitivityGroupTemplate().list({"account_id": "example"})
for dlp_sensitivity_group_template in results:
    print(dlp_sensitivity_group_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpSensitivityGroupTemplate().load({"id": "dlp_sensitivity_group_template_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityGroupTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpSensitivityLevelEntity

```python
dlp_sensitivity_level = client.DlpSensitivityLevel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpSensitivityLevel().create({
    "account_id": "example_account_id",  # str
    "sensitivity_group_id": "example_sensitivity_group_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DlpSensitivityLevel().list({"account_id": "example", "sensitivity_group_id": "example"})
for dlp_sensitivity_level in results:
    print(dlp_sensitivity_level)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpSensitivityLevel().load({"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpSensitivityLevel().remove({"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpSensitivityLevel().update({
    "id": "dlp_sensitivity_level_id",
    "account_id": "account_id",
    "sensitivity_group_id": "sensitivity_group_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSensitivityLevelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DlpSettingEntity

```python
dlp_setting = client.DlpSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_context_analysis` | `bool` | No | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `Any` | No |  |
| `max_match_bytes` | `int` | No | Maximum number of bytes that the regular expression can match. |
| `ocr` | `bool` | No | Whether OCR is enabled at the account level. |
| `payload_logging` | `Any` | No |  |
| `public_key` | `str` | No | Base64-encoded public key for encrypting payload logs. |
| `regex` | `str` | Yes |  |
| `result` | `dict` | Yes | DLP account-level settings response. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DlpSetting().create({
    "account_id": "example_account_id",  # str
    "regex": "example_regex",  # str
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DlpSetting().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DlpSetting().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DlpSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DlpSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyEntity

```python
policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `dict` | Yes | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `bool` | Yes | When true, the policy applies to all integrations for the account. |
| `description` | `str` | No | Optional description of what this policy does. |
| `display_name` | `str` | Yes | Display name for the policy configuration. |
| `enabled` | `bool` | Yes | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `list` | Yes |  |
| `finding_type_id` | `str` | Yes | The finding type this policy is associated with. |
| `id` | `str` | No |  |
| `integration_ids` | `list` | No | The integrations this policy applies to. |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | Response body for a policy configuration. |
| `result_info` | `dict` | Yes | Pagination and result information. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Policy().create({
    "account_id": "example_account_id",  # str
    "actions": {},  # dict
    "applies_to_all_integrations": True,  # bool
    "display_name": "example_display_name",  # str
    "enabled": True,  # bool
    "errors": [],  # list
    "finding_type_id": "example_finding_type_id",  # str
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Policy().list({"account_id": "example"})
for policy in results:
    print(policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Policy().load({"id": "policy_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Policy().remove({"id": "policy_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Policy().update({
    "id": "policy_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiCreateRemediationJobEntity

```python
posture_api_create_remediation_job = client.PostureApiCreateRemediationJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Array of error messages. |
| `finding_instance_ids` | `list` | Yes | UUIDs identifying Finding Instances. |
| `messages` | `list` | Yes | Array of informational messages. |
| `remediation_type_id` | `str` | Yes | A UUID identifying this Remediation Type. |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiCreateRemediationJob().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "finding_instance_ids": [],  # list
    "messages": [],  # list
    "remediation_type_id": "example_remediation_type_id",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiCreateRemediationJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiCreateWebhookJobEntity

```python
posture_api_create_webhook_job = client.PostureApiCreateWebhookJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `finding_instance_ids` | `list` | Yes | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `list` | Yes | Array of webhook IDs to trigger jobs for. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiCreateWebhookJob().create({
    "account_id": "example_account_id",  # str
    "finding_instance_ids": [],  # list
    "webhook_ids": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiCreateWebhookJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiExportJobEntity

```python
posture_api_export_job = client.PostureApiExportJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Filter for archived status. |
| `dlp_profile_id` | `list` | No | Filter by DLP profile IDs. |
| `dlp_profile_information` | `list` | Yes | DLP profile metadata for the export. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `ignored` | `bool` | No | Filter for only the ignored findings. |
| `integration_id` | `list` | No | Filter by integration IDs. |
| `max_affliction_date` | `str` | No | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `str` | No | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `list` | Yes |  |
| `min_affliction_date` | `str` | No | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `str` | No | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `list` | No | Ordering specifications for the export. |
| `product` | `str` | No | Filter by finding's category product. |
| `result` | `dict` | Yes | Information about an export job. |
| `search` | `str` | No | A search term. |
| `severities` | `list` | No | Filter by severity levels. |
| `status` | `list` | No | Filter by remediation job status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `vendors` | `list` | No | Filter by vendor types. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiExportJob().create({
    "account_id": "example_account_id",  # str
    "dlp_profile_information": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostureApiExportJob().load({"id": "posture_api_export_job_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiExportJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiFindingEntity

```python
posture_api_finding = client.PostureApiFinding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checks` | `list` | Yes | A list of finding IDs to pass along. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `new_severity` | `int` | Yes | The numeric severity value to apply to the finding. |
| `result` | `dict` | Yes | Aggregated finding information with counts and metadata. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiFinding().create({
    "account_id": "example_account_id",  # str
    "checks": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "new_severity": 1,  # int
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostureApiFinding().load({"id": "posture_api_finding_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiFindingInstanceEntity

```python
posture_api_finding_instance = client.PostureApiFindingInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_instances` | `list` | Yes | A list of finding instance IDs to pass along. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | A specific instance of a security finding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiFindingInstance().create({
    "account_id": "example_account_id",  # str
    "finding_id": "example_finding_id",  # str
    "check_instances": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostureApiFindingInstance().load({"id": "posture_api_finding_instance_id", "account_id": "account_id", "finding_id": "finding_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingInstanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiFindingTypeEntity

```python
posture_api_finding_type = client.PostureApiFindingType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | Basic finding type information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostureApiFindingType().load({"id": "posture_api_finding_type_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiFindingTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedContentAssetListEntity

```python
posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of content asset objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedContentAssetList().list({"account_id": "example"})
for posture_api_paginated_content_asset_list in results:
    print(posture_api_paginated_content_asset_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedContentAssetListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedExportJobListEntity

```python
posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of export job objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedExportJobList().list({"account_id": "example"})
for posture_api_paginated_export_job_list in results:
    print(posture_api_paginated_export_job_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedExportJobListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedFindingInstanceListEntity

```python
posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of finding instance objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedFindingInstanceList().list({"account_id": "example", "finding_id": "example"})
for posture_api_paginated_finding_instance_list in results:
    print(posture_api_paginated_finding_instance_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingInstanceListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedFindingListEntity

```python
posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of finding objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedFindingList().list({"account_id": "example"})
for posture_api_paginated_finding_list in results:
    print(posture_api_paginated_finding_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedFindingTypeListEntity

```python
posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of finding type objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedFindingTypeList().list({"account_id": "example"})
for posture_api_paginated_finding_type_list in results:
    print(posture_api_paginated_finding_type_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedFindingTypeListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedRemediationJobListEntity

```python
posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `dict` | Yes | Asset information for a remediation job. |
| `created_at` | `str` | Yes | When the remediation job was created. |
| `finding_id` | `str` | Yes | Encoded finding ID. |
| `finding_instance_id` | `str` | Yes | ID of the finding instance being remediated. |
| `finding_type_id` | `str` | Yes | ID of the finding type. |
| `finding_type_name` | `str` | Yes | Name of the finding type. |
| `id` | `str` | Yes | Unique identifier for the remediation job. |
| `integration_name` | `str` | Yes | Name of the integration. |
| `last_updated` | `str` | Yes | When the remediation job was last updated. |
| `remediation_type` | `str` | Yes | Type of remediation being performed. |
| `status` | `str` | Yes | Status of a remediation job. |
| `triggered_by_actor` | `str` | No | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `str` | No | ID of the actor that triggered the job. |
| `triggered_by_user` | `str` | Yes | Email of the user who triggered the remediation. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedRemediationJobList().list({"account_id": "example"})
for posture_api_paginated_remediation_job_list in results:
    print(posture_api_paginated_remediation_job_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedRemediationJobListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiPaginatedRemediationTypeListEntity

```python
posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | Array of remediation type objects. |
| `result_info` | `dict` | Yes | Pagination and result information. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiPaginatedRemediationTypeList().list({"account_id": "example", "finding_type_id": "example"})
for posture_api_paginated_remediation_type_list in results:
    print(posture_api_paginated_remediation_type_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiPaginatedRemediationTypeListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiWebhookEntity

```python
posture_api_webhook = client.PostureApiWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | Webhook configuration for sending finding notifications. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PostureApiWebhook().create({
    "account_id": "example_account_id",  # str
    "webhook_id": "example_webhook_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostureApiWebhook().load({"id": "posture_api_webhook_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiWebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostureApiWebhookListEntity

```python
posture_api_webhook_list = client.PostureApiWebhookList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No | List of webhook configurations. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostureApiWebhookList().list({"account_id": "example"})
for posture_api_webhook_list in results:
    print(posture_api_webhook_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostureApiWebhookListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_type` | `str` | Yes | Type of authentication used for the webhook. |
| `destination_url` | `str` | Yes | Target URL for the webhook configuration. |
| `headers` | `list` | No | List of custom headers to include in webhook requests. |
| `id` | `str` | No |  |
| `label` | `str` | Yes | Account-specified display label for the webhook configuration. |
| `signing_secret` | `str` | No | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `str` | No | Status of the webhook configuration. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "account_id": "example_account_id",  # str
    "authentication_type": "example_authentication_type",  # str
    "destination_url": "example_destination_url",  # str
    "label": "example_label",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"account_id": "account_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Webhook().update({
    "account_id": "account_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareDlpSDK({
    "feature": {
        "test": {"active": True},
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

