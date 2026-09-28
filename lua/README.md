# CloudflareDlp Lua SDK



The Lua SDK for the CloudflareDlp API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:DlpCustomPromptTopic()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-dlp_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_DLP_APIKEY"),
})
```

### 2. List dlpcustomprompttopic records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local dlpcustomprompttopics, err = client:DlpCustomPromptTopic():list()
if err then error(err) end

for _, item in ipairs(dlpcustomprompttopics) do
  print(item["id"])
end
```

### 3. Load a postureapiwebhook

PostureApiWebhook is nested under account, so provide the `account_id`.

```lua
local postureapiwebhook, err = client:PostureApiWebhook():load({ account_id = "example_account_id", id = "example_id" })
if err then error(err) end
print(postureapiwebhook)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:DlpCustomPromptTopic():create({ account_id = "example_account_id", enabled = true, name = "example_name", result = {}, topic = "example_topic" })
if err then error(err) end

-- Update
client:DlpCustomPromptTopic():update({ id = created:data_get()["id"], account_id = "example_account_id", description = "example_description" })

-- Remove
client:DlpCustomPromptTopic():remove({ id = created:data_get()["id"], account_id = "example_account_id" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local dlpdatatagcategorys, err = client:DlpDataTagCategory():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:DlpDataTagCategory():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareDlpSDK

```lua
local sdk = require("cloudflare-dlp_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDlpSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local dlp_custom_prompt_topic, err = client:DlpCustomPromptTopic():load({ id = "example_id" })
    if err then error(err) end
    -- dlp_custom_prompt_topic is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local dlp_custom_prompt_topic = client:DlpCustomPromptTopic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `profile_id` | `string` |  |
| `result` | `table` |  |
| `topic` | `string` |  |

#### Example: Load

```lua
local dlp_custom_prompt_topic, err = client:DlpCustomPromptTopic():load({ id = "dlp_custom_prompt_topic_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_custom_prompt_topics, err = client:DlpCustomPromptTopic():list()
```

#### Example: Create

```lua
local dlp_custom_prompt_topic, err = client:DlpCustomPromptTopic():create({
  account_id = "example_account_id", -- string
  enabled = true, -- boolean
  name = "example_name", -- string
  result = {}, -- table
  topic = "example_topic", -- string
})
```


### DlpDataClass

Create an instance: `local dlp_data_class = client:DlpDataClass(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_tags` | `table` |  |
| `description` | `string` |  |
| `expression` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `table` |  |
| `sensitivity_levels` | `table` |  |

#### Example: Load

```lua
local dlp_data_class, err = client:DlpDataClass():load({ id = "dlp_data_class_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_data_classs, err = client:DlpDataClass():list()
```

#### Example: Create

```lua
local dlp_data_class, err = client:DlpDataClass():create({
  account_id = "example_account_id", -- string
  data_tags = {}, -- table
  expression = "example_expression", -- string
  name = "example_name", -- string
  result = {}, -- table
  sensitivity_levels = {}, -- table
})
```


### DlpDataTag

Create an instance: `local dlp_data_tag = client:DlpDataTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_data_tag, err = client:DlpDataTag():load({ id = "dlp_data_tag_id", account_id = "account_id", data_tag_category_id = "data_tag_category_id" })
```

#### Example: List

```lua
local dlp_data_tags, err = client:DlpDataTag():list()
```

#### Example: Create

```lua
local dlp_data_tag, err = client:DlpDataTag():create({
  account_id = "example_account_id", -- string
  data_tag_category_id = "example_data_tag_category_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DlpDataTagCategory

Create an instance: `local dlp_data_tag_category = client:DlpDataTagCategory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `table` |  |
| `tags` | `table` | Tags to create with the category. |
| `template_id` | `string` |  |

#### Example: Load

```lua
local dlp_data_tag_category, err = client:DlpDataTagCategory():load({ id = "dlp_data_tag_category_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_data_tag_categorys, err = client:DlpDataTagCategory():list()
```

#### Example: Create

```lua
local dlp_data_tag_category, err = client:DlpDataTagCategory():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DlpDataTagCategoryTemplate

Create an instance: `local dlp_data_tag_category_template = client:DlpDataTagCategoryTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_data_tag_category_template, err = client:DlpDataTagCategoryTemplate():load({ id = "dlp_data_tag_category_template_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_data_tag_category_templates, err = client:DlpDataTagCategoryTemplate():list()
```


### DlpDataset

Create an instance: `local dlp_dataset = client:DlpDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `case_sensitive` | `boolean` | Only applies to custom word lists. |
| `description` | `string` | The description of the dataset. |
| `encoding_version` | `number` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` |  |
| `name` | `string` | The name of the dataset, must be unique. |
| `result` | `table` |  |
| `secret` | `boolean` | Generate a secret dataset. |

#### Example: Load

```lua
local dlp_dataset, err = client:DlpDataset():load({ id = "dlp_dataset_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_datasets, err = client:DlpDataset():list()
```

#### Example: Create

```lua
local dlp_dataset, err = client:DlpDataset():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DlpDocumentFingerprint

Create an instance: `local dlp_document_fingerprint = client:DlpDocumentFingerprint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `match_percent` | `number` |  |
| `name` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_document_fingerprint, err = client:DlpDocumentFingerprint():load({ id = "dlp_document_fingerprint_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_document_fingerprints, err = client:DlpDocumentFingerprint():list()
```

#### Example: Create

```lua
local dlp_document_fingerprint, err = client:DlpDocumentFingerprint():create({
  account_id = "example_account_id", -- string
  result = {}, -- table
})
```


### DlpEmail

Create an instance: `local dlp_email = client:DlpEmail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `any` |  |
| `auth_requirements` | `any` |  |
| `conditions` | `table` | Triggered if all conditions match. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `name` | `string` |  |
| `new_priorities` | `table` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_email, err = client:DlpEmail():load({ account_id = "account_id" })
```

#### Example: List

```lua
local dlp_emails, err = client:DlpEmail():list()
```

#### Example: Create

```lua
local dlp_email, err = client:DlpEmail():create({
  account_id = "example_account_id", -- string
  action = "example_action", -- any
  auth_requirements = "example_auth_requirements", -- any
  conditions = {}, -- table
  enabled = true, -- boolean
  name = "example_name", -- string
  new_priorities = {}, -- table
  result = {}, -- table
})
```


### DlpEntry

Create an instance: `local dlp_entry = client:DlpEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pattern` | `table` |  |
| `profile_id` | `string` |  |
| `result` | `any` |  |

#### Example: Load

```lua
local dlp_entry, err = client:DlpEntry():load({ id = "dlp_entry_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_entrys, err = client:DlpEntry():list()
```

#### Example: Create

```lua
local dlp_entry, err = client:DlpEntry():create({
  account_id = "example_account_id", -- string
  enabled = true, -- boolean
  name = "example_name", -- string
  pattern = {}, -- table
})
```


### DlpIntegrationEntry

Create an instance: `local dlp_integration_entry = client:DlpIntegrationEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `entry_id` | `string` |  |
| `profile_id` | `string` | This field is not used as the owning profile. |

#### Example: Create

```lua
local dlp_integration_entry, err = client:DlpIntegrationEntry():create({
  account_id = "example_account_id", -- string
  enabled = true, -- boolean
  entry_id = "example_entry_id", -- string
})
```


### DlpPredefinedEntry

Create an instance: `local dlp_predefined_entry = client:DlpPredefinedEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `entry_id` | `string` |  |
| `profile_id` | `string` | This field is not used as the owning profile. |

#### Example: Create

```lua
local dlp_predefined_entry, err = client:DlpPredefinedEntry():create({
  account_id = "example_account_id", -- string
  enabled = true, -- boolean
  entry_id = "example_entry_id", -- string
})
```


### DlpProfile

Create an instance: `local dlp_profile = client:DlpProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_context_enabled` | `boolean` |  |
| `allowed_match_count` | `number` | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` |  |
| `context_awareness` | `table` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `table` | Data class IDs to associate with the profile. |
| `data_tags` | `table` | Data tag IDs to associate with the profile. |
| `description` | `string` | The description of the profile. |
| `entries` | `table` | Custom entries from this profile. |
| `id` | `string` |  |
| `name` | `string` |  |
| `ocr_enabled` | `boolean` |  |
| `result` | `any` |  |
| `sensitivity_levels` | `table` | Sensitivity levels to associate with the profile. |
| `shared_entries` | `table` | Entries from other profiles (e.g. |

#### Example: Load

```lua
local dlp_profile, err = client:DlpProfile():load({ id = "dlp_profile_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_profiles, err = client:DlpProfile():list()
```

#### Example: Create

```lua
local dlp_profile, err = client:DlpProfile():create({
  account_id = "example_account_id", -- string
  context_awareness = {}, -- table
  name = "example_name", -- string
})
```


### DlpSensitivityGroup

Create an instance: `local dlp_sensitivity_group = client:DlpSensitivityGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `levels` | `table` | Levels to create with the group. |
| `name` | `string` |  |
| `result` | `table` |  |
| `template_id` | `string` |  |

#### Example: Load

```lua
local dlp_sensitivity_group, err = client:DlpSensitivityGroup():load({ id = "dlp_sensitivity_group_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_sensitivity_groups, err = client:DlpSensitivityGroup():list()
```

#### Example: Create

```lua
local dlp_sensitivity_group, err = client:DlpSensitivityGroup():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DlpSensitivityGroupTemplate

Create an instance: `local dlp_sensitivity_group_template = client:DlpSensitivityGroupTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_sensitivity_group_template, err = client:DlpSensitivityGroupTemplate():load({ id = "dlp_sensitivity_group_template_id", account_id = "account_id" })
```

#### Example: List

```lua
local dlp_sensitivity_group_templates, err = client:DlpSensitivityGroupTemplate():list()
```


### DlpSensitivityLevel

Create an instance: `local dlp_sensitivity_level = client:DlpSensitivityLevel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local dlp_sensitivity_level, err = client:DlpSensitivityLevel():load({ id = "dlp_sensitivity_level_id", account_id = "account_id", sensitivity_group_id = "sensitivity_group_id" })
```

#### Example: List

```lua
local dlp_sensitivity_levels, err = client:DlpSensitivityLevel():list()
```

#### Example: Create

```lua
local dlp_sensitivity_level, err = client:DlpSensitivityLevel():create({
  account_id = "example_account_id", -- string
  sensitivity_group_id = "example_sensitivity_group_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DlpSetting

Create an instance: `local dlp_setting = client:DlpSetting(nil)`

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
| `ai_context_analysis` | `boolean` | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `any` |  |
| `max_match_bytes` | `number` | Maximum number of bytes that the regular expression can match. |
| `ocr` | `boolean` | Whether OCR is enabled at the account level. |
| `payload_logging` | `any` |  |
| `public_key` | `string` | Base64-encoded public key for encrypting payload logs. |
| `regex` | `string` |  |
| `result` | `table` | DLP account-level settings response. |

#### Example: Load

```lua
local dlp_setting, err = client:DlpSetting():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local dlp_setting, err = client:DlpSetting():create({
  account_id = "example_account_id", -- string
  regex = "example_regex", -- string
  result = {}, -- table
})
```


### Policy

Create an instance: `local policy = client:Policy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `table` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `boolean` | When true, the policy applies to all integrations for the account. |
| `description` | `string` | Optional description of what this policy does. |
| `display_name` | `string` | Display name for the policy configuration. |
| `enabled` | `boolean` | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `table` |  |
| `finding_type_id` | `string` | The finding type this policy is associated with. |
| `id` | `string` |  |
| `integration_ids` | `table` | The integrations this policy applies to. |
| `messages` | `table` |  |
| `result` | `table` | Response body for a policy configuration. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local policy, err = client:Policy():load({ id = "policy_id", account_id = "account_id" })
```

#### Example: List

```lua
local policys, err = client:Policy():list()
```

#### Example: Create

```lua
local policy, err = client:Policy():create({
  account_id = "example_account_id", -- string
  actions = {}, -- table
  applies_to_all_integrations = true, -- boolean
  display_name = "example_display_name", -- string
  enabled = true, -- boolean
  errors = {}, -- table
  finding_type_id = "example_finding_type_id", -- string
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### PostureApiCreateRemediationJob

Create an instance: `local posture_api_create_remediation_job = client:PostureApiCreateRemediationJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | Array of error messages. |
| `finding_instance_ids` | `table` | UUIDs identifying Finding Instances. |
| `messages` | `table` | Array of informational messages. |
| `remediation_type_id` | `string` | A UUID identifying this Remediation Type. |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Create

```lua
local posture_api_create_remediation_job, err = client:PostureApiCreateRemediationJob():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  finding_instance_ids = {}, -- table
  messages = {}, -- table
  remediation_type_id = "example_remediation_type_id", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### PostureApiCreateWebhookJob

Create an instance: `local posture_api_create_webhook_job = client:PostureApiCreateWebhookJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `finding_instance_ids` | `table` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `table` | Array of webhook IDs to trigger jobs for. |

#### Example: Create

```lua
local posture_api_create_webhook_job, err = client:PostureApiCreateWebhookJob():create({
  account_id = "example_account_id", -- string
  finding_instance_ids = {}, -- table
  webhook_ids = {}, -- table
})
```


### PostureApiExportJob

Create an instance: `local posture_api_export_job = client:PostureApiExportJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Filter for archived status. |
| `dlp_profile_id` | `table` | Filter by DLP profile IDs. |
| `dlp_profile_information` | `table` | DLP profile metadata for the export. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `ignored` | `boolean` | Filter for only the ignored findings. |
| `integration_id` | `table` | Filter by integration IDs. |
| `max_affliction_date` | `string` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `table` |  |
| `min_affliction_date` | `string` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `table` | Ordering specifications for the export. |
| `product` | `string` | Filter by finding's category product. |
| `result` | `table` | Information about an export job. |
| `search` | `string` | A search term. |
| `severities` | `table` | Filter by severity levels. |
| `status` | `table` | Filter by remediation job status. |
| `success` | `boolean` | Whether the API call was successful. |
| `vendors` | `table` | Filter by vendor types. |

#### Example: Load

```lua
local posture_api_export_job, err = client:PostureApiExportJob():load({ id = "posture_api_export_job_id", account_id = "account_id" })
```

#### Example: Create

```lua
local posture_api_export_job, err = client:PostureApiExportJob():create({
  account_id = "example_account_id", -- string
  dlp_profile_information = {}, -- table
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### PostureApiFinding

Create an instance: `local posture_api_finding = client:PostureApiFinding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checks` | `table` | A list of finding IDs to pass along. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `new_severity` | `number` | The numeric severity value to apply to the finding. |
| `result` | `table` | Aggregated finding information with counts and metadata. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local posture_api_finding, err = client:PostureApiFinding():load({ id = "posture_api_finding_id", account_id = "account_id" })
```

#### Example: Create

```lua
local posture_api_finding, err = client:PostureApiFinding():create({
  account_id = "example_account_id", -- string
  checks = {}, -- table
  errors = {}, -- table
  messages = {}, -- table
  new_severity = 1, -- number
  result = {}, -- table
  success = true, -- boolean
})
```


### PostureApiFindingInstance

Create an instance: `local posture_api_finding_instance = client:PostureApiFindingInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_instances` | `table` | A list of finding instance IDs to pass along. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | A specific instance of a security finding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local posture_api_finding_instance, err = client:PostureApiFindingInstance():load({ id = "posture_api_finding_instance_id", account_id = "account_id", finding_id = "finding_id" })
```

#### Example: Create

```lua
local posture_api_finding_instance, err = client:PostureApiFindingInstance():create({
  account_id = "example_account_id", -- string
  finding_id = "example_finding_id", -- string
  check_instances = {}, -- table
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### PostureApiFindingType

Create an instance: `local posture_api_finding_type = client:PostureApiFindingType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | Basic finding type information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local posture_api_finding_type, err = client:PostureApiFindingType():load({ id = "posture_api_finding_type_id", account_id = "account_id" })
```


### PostureApiPaginatedContentAssetList

Create an instance: `local posture_api_paginated_content_asset_list = client:PostureApiPaginatedContentAssetList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of content asset objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_content_asset_lists, err = client:PostureApiPaginatedContentAssetList():list()
```


### PostureApiPaginatedExportJobList

Create an instance: `local posture_api_paginated_export_job_list = client:PostureApiPaginatedExportJobList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of export job objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_export_job_lists, err = client:PostureApiPaginatedExportJobList():list()
```


### PostureApiPaginatedFindingInstanceList

Create an instance: `local posture_api_paginated_finding_instance_list = client:PostureApiPaginatedFindingInstanceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of finding instance objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_finding_instance_lists, err = client:PostureApiPaginatedFindingInstanceList():list()
```


### PostureApiPaginatedFindingList

Create an instance: `local posture_api_paginated_finding_list = client:PostureApiPaginatedFindingList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of finding objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_finding_lists, err = client:PostureApiPaginatedFindingList():list()
```


### PostureApiPaginatedFindingTypeList

Create an instance: `local posture_api_paginated_finding_type_list = client:PostureApiPaginatedFindingTypeList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of finding type objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_finding_type_lists, err = client:PostureApiPaginatedFindingTypeList():list()
```


### PostureApiPaginatedRemediationJobList

Create an instance: `local posture_api_paginated_remediation_job_list = client:PostureApiPaginatedRemediationJobList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `table` | Asset information for a remediation job. |
| `created_at` | `string` | When the remediation job was created. |
| `finding_id` | `string` | Encoded finding ID. |
| `finding_instance_id` | `string` | ID of the finding instance being remediated. |
| `finding_type_id` | `string` | ID of the finding type. |
| `finding_type_name` | `string` | Name of the finding type. |
| `id` | `string` | Unique identifier for the remediation job. |
| `integration_name` | `string` | Name of the integration. |
| `last_updated` | `string` | When the remediation job was last updated. |
| `remediation_type` | `string` | Type of remediation being performed. |
| `status` | `string` | Status of a remediation job. |
| `triggered_by_actor` | `string` | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `string` | ID of the actor that triggered the job. |
| `triggered_by_user` | `string` | Email of the user who triggered the remediation. |

#### Example: List

```lua
local posture_api_paginated_remediation_job_lists, err = client:PostureApiPaginatedRemediationJobList():list()
```


### PostureApiPaginatedRemediationTypeList

Create an instance: `local posture_api_paginated_remediation_type_list = client:PostureApiPaginatedRemediationTypeList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Array of remediation type objects. |
| `result_info` | `table` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_paginated_remediation_type_lists, err = client:PostureApiPaginatedRemediationTypeList():list()
```


### PostureApiWebhook

Create an instance: `local posture_api_webhook = client:PostureApiWebhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | Webhook configuration for sending finding notifications. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local posture_api_webhook, err = client:PostureApiWebhook():load({ id = "posture_api_webhook_id", account_id = "account_id" })
```

#### Example: Create

```lua
local posture_api_webhook, err = client:PostureApiWebhook():create({
  account_id = "example_account_id", -- string
  webhook_id = "example_webhook_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### PostureApiWebhookList

Create an instance: `local posture_api_webhook_list = client:PostureApiWebhookList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | List of webhook configurations. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local posture_api_webhook_lists, err = client:PostureApiWebhookList():list()
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication_type` | `string` | Type of authentication used for the webhook. |
| `destination_url` | `string` | Target URL for the webhook configuration. |
| `headers` | `table` | List of custom headers to include in webhook requests. |
| `id` | `string` |  |
| `label` | `string` | Account-specified display label for the webhook configuration. |
| `signing_secret` | `string` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `string` | Status of the webhook configuration. |

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
  account_id = "example_account_id", -- string
  authentication_type = "example_authentication_type", -- string
  destination_url = "example_destination_url", -- string
  label = "example_label", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-dlp_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-dlp_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local dlpdatatagcategory = client:DlpDataTagCategory()
dlpdatatagcategory:list()

-- dlpdatatagcategory:data_get() now returns the dlpdatatagcategory data from the last list
-- dlpdatatagcategory:match_get() returns the last match criteria
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
