# CloudflareDlp Python SDK



The Python SDK for the CloudflareDlp API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.DlpCustomPromptTopic()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflaredlp_sdk import CloudflareDlpSDK

client = CloudflareDlpSDK({
    "apikey": os.environ.get("CLOUDFLARE_DLP_APIKEY"),
})
```

### 2. List dlpcustomprompttopic records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    dlpcustomprompttopics = client.DlpCustomPromptTopic().list({"account_id": "example"})
    for dlpcustomprompttopic in dlpcustomprompttopics:
        print(dlpcustomprompttopic)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a postureapiwebhook

PostureApiWebhook is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    postureapiwebhook = client.PostureApiWebhook().load({"account_id": "example_account_id", "id": "example_id"})
    print(postureapiwebhook)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.DlpCustomPromptTopic().create({"account_id": "example_account_id", "enabled": True, "name": "example_name", "result": {}, "topic": "example_topic"})

# Update — the created record's id is a plain dict key
client.DlpCustomPromptTopic().update({"id": created.data_get()["id"], "account_id": "example_account_id", "description": "example_description"})

# Remove
client.DlpCustomPromptTopic().remove({"id": created.data_get()["id"], "account_id": "example_account_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    dlpdatatagcategorys = client.DlpDataTagCategory().list()
    print(dlpdatatagcategorys)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareDlpSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
dlpdatatagcategory = client.DlpDataTagCategory().list()
# dlpdatatagcategory contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareDlpSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_DLP_TEST_LIVE=TRUE
CLOUDFLARE_DLP_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### CloudflareDlpSDK

```python
from cloudflaredlp_sdk import CloudflareDlpSDK

client = CloudflareDlpSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareDlpSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareDlpSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `DlpCustomPromptTopic` | `(data) -> DlpCustomPromptTopicEntity` | Create a DlpCustomPromptTopic entity instance. |
| `DlpDataClass` | `(data) -> DlpDataClassEntity` | Create a DlpDataClass entity instance. |
| `DlpDataTag` | `(data) -> DlpDataTagEntity` | Create a DlpDataTag entity instance. |
| `DlpDataTagCategory` | `(data) -> DlpDataTagCategoryEntity` | Create a DlpDataTagCategory entity instance. |
| `DlpDataTagCategoryTemplate` | `(data) -> DlpDataTagCategoryTemplateEntity` | Create a DlpDataTagCategoryTemplate entity instance. |
| `DlpDataset` | `(data) -> DlpDatasetEntity` | Create a DlpDataset entity instance. |
| `DlpDocumentFingerprint` | `(data) -> DlpDocumentFingerprintEntity` | Create a DlpDocumentFingerprint entity instance. |
| `DlpEmail` | `(data) -> DlpEmailEntity` | Create a DlpEmail entity instance. |
| `DlpEntry` | `(data) -> DlpEntryEntity` | Create a DlpEntry entity instance. |
| `DlpIntegrationEntry` | `(data) -> DlpIntegrationEntryEntity` | Create a DlpIntegrationEntry entity instance. |
| `DlpPredefinedEntry` | `(data) -> DlpPredefinedEntryEntity` | Create a DlpPredefinedEntry entity instance. |
| `DlpProfile` | `(data) -> DlpProfileEntity` | Create a DlpProfile entity instance. |
| `DlpSensitivityGroup` | `(data) -> DlpSensitivityGroupEntity` | Create a DlpSensitivityGroup entity instance. |
| `DlpSensitivityGroupTemplate` | `(data) -> DlpSensitivityGroupTemplateEntity` | Create a DlpSensitivityGroupTemplate entity instance. |
| `DlpSensitivityLevel` | `(data) -> DlpSensitivityLevelEntity` | Create a DlpSensitivityLevel entity instance. |
| `DlpSetting` | `(data) -> DlpSettingEntity` | Create a DlpSetting entity instance. |
| `Policy` | `(data) -> PolicyEntity` | Create a Policy entity instance. |
| `PostureApiCreateRemediationJob` | `(data) -> PostureApiCreateRemediationJobEntity` | Create a PostureApiCreateRemediationJob entity instance. |
| `PostureApiCreateWebhookJob` | `(data) -> PostureApiCreateWebhookJobEntity` | Create a PostureApiCreateWebhookJob entity instance. |
| `PostureApiExportJob` | `(data) -> PostureApiExportJobEntity` | Create a PostureApiExportJob entity instance. |
| `PostureApiFinding` | `(data) -> PostureApiFindingEntity` | Create a PostureApiFinding entity instance. |
| `PostureApiFindingInstance` | `(data) -> PostureApiFindingInstanceEntity` | Create a PostureApiFindingInstance entity instance. |
| `PostureApiFindingType` | `(data) -> PostureApiFindingTypeEntity` | Create a PostureApiFindingType entity instance. |
| `PostureApiPaginatedContentAssetList` | `(data) -> PostureApiPaginatedContentAssetListEntity` | Create a PostureApiPaginatedContentAssetList entity instance. |
| `PostureApiPaginatedExportJobList` | `(data) -> PostureApiPaginatedExportJobListEntity` | Create a PostureApiPaginatedExportJobList entity instance. |
| `PostureApiPaginatedFindingInstanceList` | `(data) -> PostureApiPaginatedFindingInstanceListEntity` | Create a PostureApiPaginatedFindingInstanceList entity instance. |
| `PostureApiPaginatedFindingList` | `(data) -> PostureApiPaginatedFindingListEntity` | Create a PostureApiPaginatedFindingList entity instance. |
| `PostureApiPaginatedFindingTypeList` | `(data) -> PostureApiPaginatedFindingTypeListEntity` | Create a PostureApiPaginatedFindingTypeList entity instance. |
| `PostureApiPaginatedRemediationJobList` | `(data) -> PostureApiPaginatedRemediationJobListEntity` | Create a PostureApiPaginatedRemediationJobList entity instance. |
| `PostureApiPaginatedRemediationTypeList` | `(data) -> PostureApiPaginatedRemediationTypeListEntity` | Create a PostureApiPaginatedRemediationTypeList entity instance. |
| `PostureApiWebhook` | `(data) -> PostureApiWebhookEntity` | Create a PostureApiWebhook entity instance. |
| `PostureApiWebhookList` | `(data) -> PostureApiWebhookListEntity` | Create a PostureApiWebhookList entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### DlpCustomPromptTopic

| Field | Description |
| --- | --- |
| `description` |  |
| `enabled` |  |
| `id` |  |
| `name` |  |
| `profile_id` |  |
| `result` |  |
| `topic` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/custom_prompt_topics`

#### DlpDataClass

| Field | Description |
| --- | --- |
| `data_tags` |  |
| `description` |  |
| `expression` |  |
| `id` |  |
| `name` |  |
| `result` |  |
| `sensitivity_levels` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_classes`

#### DlpDataTag

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `result` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags`

#### DlpDataTagCategory

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `result` |  |
| `tags` | Tags to create with the category. |
| `template_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_tag_categories`

#### DlpDataTagCategoryTemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/dlp/data_tag_category_templates`

#### DlpDataset

| Field | Description |
| --- | --- |
| `case_sensitive` | Only applies to custom word lists. |
| `description` | The description of the dataset. |
| `encoding_version` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` |  |
| `name` | The name of the dataset, must be unique. |
| `result` |  |
| `secret` | Generate a secret dataset. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}`

#### DlpDocumentFingerprint

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `match_percent` |  |
| `name` |  |
| `result` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}`

#### DlpEmail

| Field | Description |
| --- | --- |
| `action` |  |
| `auth_requirements` |  |
| `conditions` | Triggered if all conditions match. |
| `description` |  |
| `enabled` |  |
| `name` |  |
| `new_priorities` |  |
| `result` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/dlp/email/account_mapping`

#### DlpEntry

| Field | Description |
| --- | --- |
| `description` |  |
| `enabled` |  |
| `id` |  |
| `name` |  |
| `pattern` |  |
| `profile_id` |  |
| `result` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/entries`

#### DlpIntegrationEntry

| Field | Description |
| --- | --- |
| `enabled` |  |
| `entry_id` |  |
| `profile_id` | This field is not used as the owning profile. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/dlp/entries/integration`

#### DlpPredefinedEntry

| Field | Description |
| --- | --- |
| `enabled` |  |
| `entry_id` |  |
| `profile_id` | This field is not used as the owning profile. |

Operations: Create, Remove.

API path: `/accounts/{account_id}/dlp/entries/predefined`

#### DlpProfile

| Field | Description |
| --- | --- |
| `ai_context_enabled` |  |
| `allowed_match_count` | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` |  |
| `context_awareness` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | Data class IDs to associate with the profile. |
| `data_tags` | Data tag IDs to associate with the profile. |
| `description` | The description of the profile. |
| `entries` | Custom entries from this profile. |
| `id` |  |
| `name` |  |
| `ocr_enabled` |  |
| `result` |  |
| `sensitivity_levels` | Sensitivity levels to associate with the profile. |
| `shared_entries` | Entries from other profiles (e.g. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config`

#### DlpSensitivityGroup

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `levels` | Levels to create with the group. |
| `name` |  |
| `result` |  |
| `template_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/sensitivity_groups`

#### DlpSensitivityGroupTemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/dlp/sensitivity_groups/templates`

#### DlpSensitivityLevel

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `result` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels`

#### DlpSetting

| Field | Description |
| --- | --- |
| `ai_context_analysis` | Whether AI context analysis is enabled at the account level. |
| `masking_level` |  |
| `max_match_bytes` | Maximum number of bytes that the regular expression can match. |
| `ocr` | Whether OCR is enabled at the account level. |
| `payload_logging` |  |
| `public_key` | Base64-encoded public key for encrypting payload logs. |
| `regex` |  |
| `result` | DLP account-level settings response. |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/dlp/patterns/validate`

#### Policy

| Field | Description |
| --- | --- |
| `actions` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | When true, the policy applies to all integrations for the account. |
| `description` | Optional description of what this policy does. |
| `display_name` | Display name for the policy configuration. |
| `enabled` | Boolean specifying if the policy is enabled or disabled. |
| `errors` |  |
| `finding_type_id` | The finding type this policy is associated with. |
| `id` |  |
| `integration_ids` | The integrations this policy applies to. |
| `messages` |  |
| `result` | Response body for a policy configuration. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/data-security/posture/policies`

#### PostureApiCreateRemediationJob

| Field | Description |
| --- | --- |
| `errors` | Array of error messages. |
| `finding_instance_ids` | UUIDs identifying Finding Instances. |
| `messages` | Array of informational messages. |
| `remediation_type_id` | A UUID identifying this Remediation Type. |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiCreateWebhookJob

| Field | Description |
| --- | --- |
| `finding_instance_ids` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | Array of webhook IDs to trigger jobs for. |

Operations: Create.

API path: `/accounts/{account_id}/data-security/posture/webhooks/jobs`

#### PostureApiExportJob

| Field | Description |
| --- | --- |
| `archived` | Filter for archived status. |
| `dlp_profile_id` | Filter by DLP profile IDs. |
| `dlp_profile_information` | DLP profile metadata for the export. |
| `errors` |  |
| `id` |  |
| `ignored` | Filter for only the ignored findings. |
| `integration_id` | Filter by integration IDs. |
| `max_affliction_date` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` |  |
| `min_affliction_date` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | Ordering specifications for the export. |
| `product` | Filter by finding's category product. |
| `result` | Information about an export job. |
| `search` | A search term. |
| `severities` | Filter by severity levels. |
| `status` | Filter by remediation job status. |
| `success` | Whether the API call was successful. |
| `vendors` | Filter by vendor types. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export`

#### PostureApiFinding

| Field | Description |
| --- | --- |
| `checks` | A list of finding IDs to pass along. |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `new_severity` | The numeric severity value to apply to the finding. |
| `result` | Aggregated finding information with counts and metadata. |
| `success` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/reset_finding_severity`

#### PostureApiFindingInstance

| Field | Description |
| --- | --- |
| `check_instances` | A list of finding instance IDs to pass along. |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A specific instance of a security finding. |
| `success` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive`

#### PostureApiFindingType

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Basic finding type information. |
| `success` | Whether the API call was successful. |

Operations: Load.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}`

#### PostureApiPaginatedContentAssetList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of content asset objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/content`

#### PostureApiPaginatedExportJobList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of export job objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/exports`

#### PostureApiPaginatedFindingInstanceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding instance objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances`

#### PostureApiPaginatedFindingList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/findings`

#### PostureApiPaginatedFindingTypeList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding type objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/finding_types`

#### PostureApiPaginatedRemediationJobList

| Field | Description |
| --- | --- |
| `asset` | Asset information for a remediation job. |
| `created_at` | When the remediation job was created. |
| `finding_id` | Encoded finding ID. |
| `finding_instance_id` | ID of the finding instance being remediated. |
| `finding_type_id` | ID of the finding type. |
| `finding_type_name` | Name of the finding type. |
| `id` | Unique identifier for the remediation job. |
| `integration_name` | Name of the integration. |
| `last_updated` | When the remediation job was last updated. |
| `remediation_type` | Type of remediation being performed. |
| `status` | Status of a remediation job. |
| `triggered_by_actor` | Type of actor that triggered the remediation job. |
| `triggered_by_id` | ID of the actor that triggered the job. |
| `triggered_by_user` | Email of the user who triggered the remediation. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiPaginatedRemediationTypeList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of remediation type objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types`

#### PostureApiWebhook

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Webhook configuration for sending finding notifications. |
| `success` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate`

#### PostureApiWebhookList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | List of webhook configurations. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/webhooks`

#### Webhook

| Field | Description |
| --- | --- |
| `authentication_type` | Type of authentication used for the webhook. |
| `destination_url` | Target URL for the webhook configuration. |
| `headers` | List of custom headers to include in webhook requests. |
| `id` |  |
| `label` | Account-specified display label for the webhook configuration. |
| `signing_secret` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | Status of the webhook configuration. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/data-security/posture/webhooks`



## Entities


### DlpCustomPromptTopic

Create an instance: `dlp_custom_prompt_topic = client.DlpCustomPromptTopic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `profile_id` | `str` |  |
| `result` | `dict` |  |
| `topic` | `str` |  |

#### Example: Load

```python
dlp_custom_prompt_topic = client.DlpCustomPromptTopic().load({"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_custom_prompt_topics = client.DlpCustomPromptTopic().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_custom_prompt_topic = client.DlpCustomPromptTopic().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "name": "example_name",  # str
    "result": {},  # dict
    "topic": "example_topic",  # str
})
```


### DlpDataClass

Create an instance: `dlp_data_class = client.DlpDataClass()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_tags` | `list` |  |
| `description` | `str` |  |
| `expression` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `result` | `dict` |  |
| `sensitivity_levels` | `list` |  |

#### Example: Load

```python
dlp_data_class = client.DlpDataClass().load({"id": "dlp_data_class_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_data_classs = client.DlpDataClass().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_data_class = client.DlpDataClass().create({
    "account_id": "example_account_id",  # str
    "data_tags": [],  # list
    "expression": "example_expression",  # str
    "name": "example_name",  # str
    "result": {},  # dict
    "sensitivity_levels": [],  # list
})
```


### DlpDataTag

Create an instance: `dlp_data_tag = client.DlpDataTag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_data_tag = client.DlpDataTag().load({"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"})
```

#### Example: List

```python
dlp_data_tags = client.DlpDataTag().list({"account_id": "example", "data_tag_category_id": "example"})
```

#### Example: Create

```python
dlp_data_tag = client.DlpDataTag().create({
    "account_id": "example_account_id",  # str
    "data_tag_category_id": "example_data_tag_category_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### DlpDataTagCategory

Create an instance: `dlp_data_tag_category = client.DlpDataTagCategory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `result` | `dict` |  |
| `tags` | `list` | Tags to create with the category. |
| `template_id` | `str` |  |

#### Example: Load

```python
dlp_data_tag_category = client.DlpDataTagCategory().load({"id": "dlp_data_tag_category_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_data_tag_categorys = client.DlpDataTagCategory().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_data_tag_category = client.DlpDataTagCategory().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### DlpDataTagCategoryTemplate

Create an instance: `dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate().load({"id": "dlp_data_tag_category_template_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_data_tag_category_templates = client.DlpDataTagCategoryTemplate().list({"account_id": "example"})
```


### DlpDataset

Create an instance: `dlp_dataset = client.DlpDataset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `case_sensitive` | `bool` | Only applies to custom word lists. |
| `description` | `str` | The description of the dataset. |
| `encoding_version` | `int` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `str` |  |
| `name` | `str` | The name of the dataset, must be unique. |
| `result` | `dict` |  |
| `secret` | `bool` | Generate a secret dataset. |

#### Example: Load

```python
dlp_dataset = client.DlpDataset().load({"id": "dlp_dataset_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_datasets = client.DlpDataset().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_dataset = client.DlpDataset().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### DlpDocumentFingerprint

Create an instance: `dlp_document_fingerprint = client.DlpDocumentFingerprint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `match_percent` | `int` |  |
| `name` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_document_fingerprint = client.DlpDocumentFingerprint().load({"id": "dlp_document_fingerprint_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_document_fingerprints = client.DlpDocumentFingerprint().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_document_fingerprint = client.DlpDocumentFingerprint().create({
    "account_id": "example_account_id",  # str
    "result": {},  # dict
})
```


### DlpEmail

Create an instance: `dlp_email = client.DlpEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `Any` |  |
| `auth_requirements` | `Any` |  |
| `conditions` | `list` | Triggered if all conditions match. |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `name` | `str` |  |
| `new_priorities` | `dict` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_email = client.DlpEmail().load({"account_id": "account_id"})
```

#### Example: List

```python
dlp_emails = client.DlpEmail().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_email = client.DlpEmail().create({
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


### DlpEntry

Create an instance: `dlp_entry = client.DlpEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `pattern` | `dict` |  |
| `profile_id` | `str` |  |
| `result` | `Any` |  |

#### Example: Load

```python
dlp_entry = client.DlpEntry().load({"id": "dlp_entry_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_entrys = client.DlpEntry().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_entry = client.DlpEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "name": "example_name",  # str
    "pattern": {},  # dict
})
```


### DlpIntegrationEntry

Create an instance: `dlp_integration_entry = client.DlpIntegrationEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `entry_id` | `str` |  |
| `profile_id` | `str` | This field is not used as the owning profile. |

#### Example: Create

```python
dlp_integration_entry = client.DlpIntegrationEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "entry_id": "example_entry_id",  # str
})
```


### DlpPredefinedEntry

Create an instance: `dlp_predefined_entry = client.DlpPredefinedEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `entry_id` | `str` |  |
| `profile_id` | `str` | This field is not used as the owning profile. |

#### Example: Create

```python
dlp_predefined_entry = client.DlpPredefinedEntry().create({
    "account_id": "example_account_id",  # str
    "enabled": True,  # bool
    "entry_id": "example_entry_id",  # str
})
```


### DlpProfile

Create an instance: `dlp_profile = client.DlpProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_context_enabled` | `bool` |  |
| `allowed_match_count` | `int` | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `str` |  |
| `context_awareness` | `dict` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `list` | Data class IDs to associate with the profile. |
| `data_tags` | `list` | Data tag IDs to associate with the profile. |
| `description` | `str` | The description of the profile. |
| `entries` | `list` | Custom entries from this profile. |
| `id` | `str` |  |
| `name` | `str` |  |
| `ocr_enabled` | `bool` |  |
| `result` | `Any` |  |
| `sensitivity_levels` | `list` | Sensitivity levels to associate with the profile. |
| `shared_entries` | `list` | Entries from other profiles (e.g. |

#### Example: Load

```python
dlp_profile = client.DlpProfile().load({"id": "dlp_profile_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_profiles = client.DlpProfile().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_profile = client.DlpProfile().create({
    "account_id": "example_account_id",  # str
    "context_awareness": {},  # dict
    "name": "example_name",  # str
})
```


### DlpSensitivityGroup

Create an instance: `dlp_sensitivity_group = client.DlpSensitivityGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `levels` | `list` | Levels to create with the group. |
| `name` | `str` |  |
| `result` | `dict` |  |
| `template_id` | `str` |  |

#### Example: Load

```python
dlp_sensitivity_group = client.DlpSensitivityGroup().load({"id": "dlp_sensitivity_group_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_sensitivity_groups = client.DlpSensitivityGroup().list({"account_id": "example"})
```

#### Example: Create

```python
dlp_sensitivity_group = client.DlpSensitivityGroup().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### DlpSensitivityGroupTemplate

Create an instance: `dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate().load({"id": "dlp_sensitivity_group_template_id", "account_id": "account_id"})
```

#### Example: List

```python
dlp_sensitivity_group_templates = client.DlpSensitivityGroupTemplate().list({"account_id": "example"})
```


### DlpSensitivityLevel

Create an instance: `dlp_sensitivity_level = client.DlpSensitivityLevel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
dlp_sensitivity_level = client.DlpSensitivityLevel().load({"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"})
```

#### Example: List

```python
dlp_sensitivity_levels = client.DlpSensitivityLevel().list({"account_id": "example", "sensitivity_group_id": "example"})
```

#### Example: Create

```python
dlp_sensitivity_level = client.DlpSensitivityLevel().create({
    "account_id": "example_account_id",  # str
    "sensitivity_group_id": "example_sensitivity_group_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### DlpSetting

Create an instance: `dlp_setting = client.DlpSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_context_analysis` | `bool` | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `Any` |  |
| `max_match_bytes` | `int` | Maximum number of bytes that the regular expression can match. |
| `ocr` | `bool` | Whether OCR is enabled at the account level. |
| `payload_logging` | `Any` |  |
| `public_key` | `str` | Base64-encoded public key for encrypting payload logs. |
| `regex` | `str` |  |
| `result` | `dict` | DLP account-level settings response. |

#### Example: Load

```python
dlp_setting = client.DlpSetting().load({"account_id": "account_id"})
```

#### Example: Create

```python
dlp_setting = client.DlpSetting().create({
    "account_id": "example_account_id",  # str
    "regex": "example_regex",  # str
    "result": {},  # dict
})
```


### Policy

Create an instance: `policy = client.Policy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `dict` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `bool` | When true, the policy applies to all integrations for the account. |
| `description` | `str` | Optional description of what this policy does. |
| `display_name` | `str` | Display name for the policy configuration. |
| `enabled` | `bool` | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `list` |  |
| `finding_type_id` | `str` | The finding type this policy is associated with. |
| `id` | `str` |  |
| `integration_ids` | `list` | The integrations this policy applies to. |
| `messages` | `list` |  |
| `result` | `dict` | Response body for a policy configuration. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
policy = client.Policy().load({"id": "policy_id", "account_id": "account_id"})
```

#### Example: List

```python
policys = client.Policy().list({"account_id": "example"})
```

#### Example: Create

```python
policy = client.Policy().create({
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


### PostureApiCreateRemediationJob

Create an instance: `posture_api_create_remediation_job = client.PostureApiCreateRemediationJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Array of error messages. |
| `finding_instance_ids` | `list` | UUIDs identifying Finding Instances. |
| `messages` | `list` | Array of informational messages. |
| `remediation_type_id` | `str` | A UUID identifying this Remediation Type. |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Create

```python
posture_api_create_remediation_job = client.PostureApiCreateRemediationJob().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "finding_instance_ids": [],  # list
    "messages": [],  # list
    "remediation_type_id": "example_remediation_type_id",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### PostureApiCreateWebhookJob

Create an instance: `posture_api_create_webhook_job = client.PostureApiCreateWebhookJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `finding_instance_ids` | `list` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `list` | Array of webhook IDs to trigger jobs for. |

#### Example: Create

```python
posture_api_create_webhook_job = client.PostureApiCreateWebhookJob().create({
    "account_id": "example_account_id",  # str
    "finding_instance_ids": [],  # list
    "webhook_ids": [],  # list
})
```


### PostureApiExportJob

Create an instance: `posture_api_export_job = client.PostureApiExportJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Filter for archived status. |
| `dlp_profile_id` | `list` | Filter by DLP profile IDs. |
| `dlp_profile_information` | `list` | DLP profile metadata for the export. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `ignored` | `bool` | Filter for only the ignored findings. |
| `integration_id` | `list` | Filter by integration IDs. |
| `max_affliction_date` | `str` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `str` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `list` |  |
| `min_affliction_date` | `str` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `str` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `list` | Ordering specifications for the export. |
| `product` | `str` | Filter by finding's category product. |
| `result` | `dict` | Information about an export job. |
| `search` | `str` | A search term. |
| `severities` | `list` | Filter by severity levels. |
| `status` | `list` | Filter by remediation job status. |
| `success` | `bool` | Whether the API call was successful. |
| `vendors` | `list` | Filter by vendor types. |

#### Example: Load

```python
posture_api_export_job = client.PostureApiExportJob().load({"id": "posture_api_export_job_id", "account_id": "account_id"})
```

#### Example: Create

```python
posture_api_export_job = client.PostureApiExportJob().create({
    "account_id": "example_account_id",  # str
    "dlp_profile_information": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### PostureApiFinding

Create an instance: `posture_api_finding = client.PostureApiFinding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checks` | `list` | A list of finding IDs to pass along. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `new_severity` | `int` | The numeric severity value to apply to the finding. |
| `result` | `dict` | Aggregated finding information with counts and metadata. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
posture_api_finding = client.PostureApiFinding().load({"id": "posture_api_finding_id", "account_id": "account_id"})
```

#### Example: Create

```python
posture_api_finding = client.PostureApiFinding().create({
    "account_id": "example_account_id",  # str
    "checks": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "new_severity": 1,  # int
    "result": {},  # dict
    "success": True,  # bool
})
```


### PostureApiFindingInstance

Create an instance: `posture_api_finding_instance = client.PostureApiFindingInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_instances` | `list` | A list of finding instance IDs to pass along. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | A specific instance of a security finding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
posture_api_finding_instance = client.PostureApiFindingInstance().load({"id": "posture_api_finding_instance_id", "account_id": "account_id", "finding_id": "finding_id"})
```

#### Example: Create

```python
posture_api_finding_instance = client.PostureApiFindingInstance().create({
    "account_id": "example_account_id",  # str
    "finding_id": "example_finding_id",  # str
    "check_instances": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### PostureApiFindingType

Create an instance: `posture_api_finding_type = client.PostureApiFindingType()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | Basic finding type information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
posture_api_finding_type = client.PostureApiFindingType().load({"id": "posture_api_finding_type_id", "account_id": "account_id"})
```


### PostureApiPaginatedContentAssetList

Create an instance: `posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of content asset objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_content_asset_lists = client.PostureApiPaginatedContentAssetList().list({"account_id": "example"})
```


### PostureApiPaginatedExportJobList

Create an instance: `posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of export job objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_export_job_lists = client.PostureApiPaginatedExportJobList().list({"account_id": "example"})
```


### PostureApiPaginatedFindingInstanceList

Create an instance: `posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of finding instance objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_finding_instance_lists = client.PostureApiPaginatedFindingInstanceList().list({"account_id": "example", "finding_id": "example"})
```


### PostureApiPaginatedFindingList

Create an instance: `posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of finding objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_finding_lists = client.PostureApiPaginatedFindingList().list({"account_id": "example"})
```


### PostureApiPaginatedFindingTypeList

Create an instance: `posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of finding type objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_finding_type_lists = client.PostureApiPaginatedFindingTypeList().list({"account_id": "example"})
```


### PostureApiPaginatedRemediationJobList

Create an instance: `posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `dict` | Asset information for a remediation job. |
| `created_at` | `str` | When the remediation job was created. |
| `finding_id` | `str` | Encoded finding ID. |
| `finding_instance_id` | `str` | ID of the finding instance being remediated. |
| `finding_type_id` | `str` | ID of the finding type. |
| `finding_type_name` | `str` | Name of the finding type. |
| `id` | `str` | Unique identifier for the remediation job. |
| `integration_name` | `str` | Name of the integration. |
| `last_updated` | `str` | When the remediation job was last updated. |
| `remediation_type` | `str` | Type of remediation being performed. |
| `status` | `str` | Status of a remediation job. |
| `triggered_by_actor` | `str` | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `str` | ID of the actor that triggered the job. |
| `triggered_by_user` | `str` | Email of the user who triggered the remediation. |

#### Example: List

```python
posture_api_paginated_remediation_job_lists = client.PostureApiPaginatedRemediationJobList().list({"account_id": "example"})
```


### PostureApiPaginatedRemediationTypeList

Create an instance: `posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | Array of remediation type objects. |
| `result_info` | `dict` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_paginated_remediation_type_lists = client.PostureApiPaginatedRemediationTypeList().list({"account_id": "example", "finding_type_id": "example"})
```


### PostureApiWebhook

Create an instance: `posture_api_webhook = client.PostureApiWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | Webhook configuration for sending finding notifications. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
posture_api_webhook = client.PostureApiWebhook().load({"id": "posture_api_webhook_id", "account_id": "account_id"})
```

#### Example: Create

```python
posture_api_webhook = client.PostureApiWebhook().create({
    "account_id": "example_account_id",  # str
    "webhook_id": "example_webhook_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### PostureApiWebhookList

Create an instance: `posture_api_webhook_list = client.PostureApiWebhookList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` | List of webhook configurations. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
posture_api_webhook_lists = client.PostureApiWebhookList().list({"account_id": "example"})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication_type` | `str` | Type of authentication used for the webhook. |
| `destination_url` | `str` | Target URL for the webhook configuration. |
| `headers` | `list` | List of custom headers to include in webhook requests. |
| `id` | `str` |  |
| `label` | `str` | Account-specified display label for the webhook configuration. |
| `signing_secret` | `str` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `str` | Status of the webhook configuration. |

#### Example: Create

```python
webhook = client.Webhook().create({
    "account_id": "example_account_id",  # str
    "authentication_type": "example_authentication_type",  # str
    "destination_url": "example_destination_url",  # str
    "label": "example_label",  # str
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

4 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `dlp_entry` | `result` | 7 | 12 levels |
| `dlp_profile` | `result` | 7 | 15 levels |
| `posture_api_create_remediation_job` | `result` | 3 | 10 levels |
| `posture_api_paginated_remediation_job_list` | `asset` | 3 | 5 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflaredlp_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflaredlp_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
dlpdatatagcategory = client.DlpDataTagCategory()
dlpdatatagcategory.list()

# dlpdatatagcategory.data_get() now returns the dlpdatatagcategory data from the last list
# dlpdatatagcategory.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
