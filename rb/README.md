# CloudflareDlp Ruby SDK



The Ruby SDK for the CloudflareDlp API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.DlpCustomPromptTopic` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases](https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareDlp_sdk"

client = CloudflareDlpSDK.new({
  "apikey" => ENV["CLOUDFLARE_DLP_APIKEY"],
})
```

### 2. List dlpcustomprompttopic records

```ruby
begin
  # list returns an Array of DlpCustomPromptTopic records — iterate directly.
  dlpcustomprompttopics = client.DlpCustomPromptTopic.list
  dlpcustomprompttopics.each do |item|
    puts "#{item["id"]} #{item["description"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a postureapiwebhook

PostureApiWebhook is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the PostureApiWebhook record (raises on error).
  postureapiwebhook = client.PostureApiWebhook.load({ "account_id" => "example_account_id", "id" => "example_id" })
  puts postureapiwebhook
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created DlpCustomPromptTopic record.
created = client.DlpCustomPromptTopic.create({ "account_id" => "example_account_id", "enabled" => true, "name" => "example_name", "result" => {}, "topic" => "example_topic" })

# Update — index the record via data_get (created.data_get["id"]).
client.DlpCustomPromptTopic.update({ "id" => created.data_get["id"], "account_id" => "example_account_id", "description" => "example_description" })

# Remove
client.DlpCustomPromptTopic.remove({ "id" => created.data_get["id"], "account_id" => "example_account_id" })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  dlpdatatagcategorys = client.DlpDataTagCategory.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = CloudflareDlpSDK.test({
  "entity" => { "dlpdatatagcategory" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
dlpdatatagcategory = client.DlpDataTagCategory.list()
puts dlpdatatagcategory
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareDlpSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareDlpSDK

```ruby
require_relative "CloudflareDlp_sdk"
client = CloudflareDlpSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareDlpSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDlpSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareDlpError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `dlp_custom_prompt_topic = client.DlpCustomPromptTopic`

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
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `profile_id` | `String` |  |
| `result` | `Hash` |  |
| `topic` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpCustomPromptTopic record (raises on error).
dlp_custom_prompt_topic = client.DlpCustomPromptTopic.load({ "id" => "dlp_custom_prompt_topic_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpCustomPromptTopic records (raises on error).
dlp_custom_prompt_topics = client.DlpCustomPromptTopic.list
```

#### Example: Create

```ruby
dlp_custom_prompt_topic = client.DlpCustomPromptTopic.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "name" => "example_name", # String
  "result" => {}, # Hash
  "topic" => "example_topic", # String
})
```


### DlpDataClass

Create an instance: `dlp_data_class = client.DlpDataClass`

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
| `data_tags` | `Array` |  |
| `description` | `String` |  |
| `expression` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `sensitivity_levels` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDataClass record (raises on error).
dlp_data_class = client.DlpDataClass.load({ "id" => "dlp_data_class_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDataClass records (raises on error).
dlp_data_classs = client.DlpDataClass.list
```

#### Example: Create

```ruby
dlp_data_class = client.DlpDataClass.create({
  "account_id" => "example_account_id", # String
  "data_tags" => [], # Array
  "expression" => "example_expression", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
  "sensitivity_levels" => [], # Array
})
```


### DlpDataTag

Create an instance: `dlp_data_tag = client.DlpDataTag`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDataTag record (raises on error).
dlp_data_tag = client.DlpDataTag.load({ "id" => "dlp_data_tag_id", "account_id" => "account_id", "data_tag_category_id" => "data_tag_category_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDataTag records (raises on error).
dlp_data_tags = client.DlpDataTag.list
```

#### Example: Create

```ruby
dlp_data_tag = client.DlpDataTag.create({
  "account_id" => "example_account_id", # String
  "data_tag_category_id" => "example_data_tag_category_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DlpDataTagCategory

Create an instance: `dlp_data_tag_category = client.DlpDataTagCategory`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `tags` | `Array` | Tags to create with the category. |
| `template_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDataTagCategory record (raises on error).
dlp_data_tag_category = client.DlpDataTagCategory.load({ "id" => "dlp_data_tag_category_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDataTagCategory records (raises on error).
dlp_data_tag_categorys = client.DlpDataTagCategory.list
```

#### Example: Create

```ruby
dlp_data_tag_category = client.DlpDataTagCategory.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DlpDataTagCategoryTemplate

Create an instance: `dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDataTagCategoryTemplate record (raises on error).
dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate.load({ "id" => "dlp_data_tag_category_template_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDataTagCategoryTemplate records (raises on error).
dlp_data_tag_category_templates = client.DlpDataTagCategoryTemplate.list
```


### DlpDataset

Create an instance: `dlp_dataset = client.DlpDataset`

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
| `case_sensitive` | `Boolean` | Only applies to custom word lists. |
| `description` | `String` | The description of the dataset. |
| `encoding_version` | `Integer` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `String` |  |
| `name` | `String` | The name of the dataset, must be unique. |
| `result` | `Hash` |  |
| `secret` | `Boolean` | Generate a secret dataset. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDataset record (raises on error).
dlp_dataset = client.DlpDataset.load({ "id" => "dlp_dataset_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDataset records (raises on error).
dlp_datasets = client.DlpDataset.list
```

#### Example: Create

```ruby
dlp_dataset = client.DlpDataset.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DlpDocumentFingerprint

Create an instance: `dlp_document_fingerprint = client.DlpDocumentFingerprint`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `match_percent` | `Integer` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpDocumentFingerprint record (raises on error).
dlp_document_fingerprint = client.DlpDocumentFingerprint.load({ "id" => "dlp_document_fingerprint_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpDocumentFingerprint records (raises on error).
dlp_document_fingerprints = client.DlpDocumentFingerprint.list
```

#### Example: Create

```ruby
dlp_document_fingerprint = client.DlpDocumentFingerprint.create({
  "account_id" => "example_account_id", # String
  "result" => {}, # Hash
})
```


### DlpEmail

Create an instance: `dlp_email = client.DlpEmail`

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
| `action` | `Object` |  |
| `auth_requirements` | `Object` |  |
| `conditions` | `Array` | Triggered if all conditions match. |
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `name` | `String` |  |
| `new_priorities` | `Hash` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpEmail record (raises on error).
dlp_email = client.DlpEmail.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpEmail records (raises on error).
dlp_emails = client.DlpEmail.list
```

#### Example: Create

```ruby
dlp_email = client.DlpEmail.create({
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


### DlpEntry

Create an instance: `dlp_entry = client.DlpEntry`

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
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `pattern` | `Hash` |  |
| `profile_id` | `String` |  |
| `result` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpEntry record (raises on error).
dlp_entry = client.DlpEntry.load({ "id" => "dlp_entry_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpEntry records (raises on error).
dlp_entrys = client.DlpEntry.list
```

#### Example: Create

```ruby
dlp_entry = client.DlpEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "name" => "example_name", # String
  "pattern" => {}, # Hash
})
```


### DlpIntegrationEntry

Create an instance: `dlp_integration_entry = client.DlpIntegrationEntry`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` |  |
| `entry_id` | `String` |  |
| `profile_id` | `String` | This field is not used as the owning profile. |

#### Example: Create

```ruby
dlp_integration_entry = client.DlpIntegrationEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "entry_id" => "example_entry_id", # String
})
```


### DlpPredefinedEntry

Create an instance: `dlp_predefined_entry = client.DlpPredefinedEntry`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` |  |
| `entry_id` | `String` |  |
| `profile_id` | `String` | This field is not used as the owning profile. |

#### Example: Create

```ruby
dlp_predefined_entry = client.DlpPredefinedEntry.create({
  "account_id" => "example_account_id", # String
  "enabled" => true, # Boolean
  "entry_id" => "example_entry_id", # String
})
```


### DlpProfile

Create an instance: `dlp_profile = client.DlpProfile`

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
| `ai_context_enabled` | `Boolean` |  |
| `allowed_match_count` | `Integer` | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `String` |  |
| `context_awareness` | `Hash` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `Array` | Data class IDs to associate with the profile. |
| `data_tags` | `Array` | Data tag IDs to associate with the profile. |
| `description` | `String` | The description of the profile. |
| `entries` | `Array` | Custom entries from this profile. |
| `id` | `String` |  |
| `name` | `String` |  |
| `ocr_enabled` | `Boolean` |  |
| `result` | `Object` |  |
| `sensitivity_levels` | `Array` | Sensitivity levels to associate with the profile. |
| `shared_entries` | `Array` | Entries from other profiles (e.g. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpProfile record (raises on error).
dlp_profile = client.DlpProfile.load({ "id" => "dlp_profile_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpProfile records (raises on error).
dlp_profiles = client.DlpProfile.list
```

#### Example: Create

```ruby
dlp_profile = client.DlpProfile.create({
  "account_id" => "example_account_id", # String
  "context_awareness" => {}, # Hash
  "name" => "example_name", # String
})
```


### DlpSensitivityGroup

Create an instance: `dlp_sensitivity_group = client.DlpSensitivityGroup`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `levels` | `Array` | Levels to create with the group. |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `template_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpSensitivityGroup record (raises on error).
dlp_sensitivity_group = client.DlpSensitivityGroup.load({ "id" => "dlp_sensitivity_group_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpSensitivityGroup records (raises on error).
dlp_sensitivity_groups = client.DlpSensitivityGroup.list
```

#### Example: Create

```ruby
dlp_sensitivity_group = client.DlpSensitivityGroup.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DlpSensitivityGroupTemplate

Create an instance: `dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpSensitivityGroupTemplate record (raises on error).
dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate.load({ "id" => "dlp_sensitivity_group_template_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpSensitivityGroupTemplate records (raises on error).
dlp_sensitivity_group_templates = client.DlpSensitivityGroupTemplate.list
```


### DlpSensitivityLevel

Create an instance: `dlp_sensitivity_level = client.DlpSensitivityLevel`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpSensitivityLevel record (raises on error).
dlp_sensitivity_level = client.DlpSensitivityLevel.load({ "id" => "dlp_sensitivity_level_id", "account_id" => "account_id", "sensitivity_group_id" => "sensitivity_group_id" })
```

#### Example: List

```ruby
# list returns an Array of DlpSensitivityLevel records (raises on error).
dlp_sensitivity_levels = client.DlpSensitivityLevel.list
```

#### Example: Create

```ruby
dlp_sensitivity_level = client.DlpSensitivityLevel.create({
  "account_id" => "example_account_id", # String
  "sensitivity_group_id" => "example_sensitivity_group_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DlpSetting

Create an instance: `dlp_setting = client.DlpSetting`

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
| `ai_context_analysis` | `Boolean` | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `Object` |  |
| `max_match_bytes` | `Integer` | Maximum number of bytes that the regular expression can match. |
| `ocr` | `Boolean` | Whether OCR is enabled at the account level. |
| `payload_logging` | `Object` |  |
| `public_key` | `String` | Base64-encoded public key for encrypting payload logs. |
| `regex` | `String` |  |
| `result` | `Hash` | DLP account-level settings response. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DlpSetting record (raises on error).
dlp_setting = client.DlpSetting.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
dlp_setting = client.DlpSetting.create({
  "account_id" => "example_account_id", # String
  "regex" => "example_regex", # String
  "result" => {}, # Hash
})
```


### Policy

Create an instance: `policy = client.Policy`

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
| `actions` | `Hash` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `Boolean` | When true, the policy applies to all integrations for the account. |
| `description` | `String` | Optional description of what this policy does. |
| `display_name` | `String` | Display name for the policy configuration. |
| `enabled` | `Boolean` | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `Array` |  |
| `finding_type_id` | `String` | The finding type this policy is associated with. |
| `id` | `String` |  |
| `integration_ids` | `Array` | The integrations this policy applies to. |
| `messages` | `Array` |  |
| `result` | `Hash` | Response body for a policy configuration. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Policy record (raises on error).
policy = client.Policy.load({ "id" => "policy_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Policy records (raises on error).
policys = client.Policy.list
```

#### Example: Create

```ruby
policy = client.Policy.create({
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


### PostureApiCreateRemediationJob

Create an instance: `posture_api_create_remediation_job = client.PostureApiCreateRemediationJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | Array of error messages. |
| `finding_instance_ids` | `Array` | UUIDs identifying Finding Instances. |
| `messages` | `Array` | Array of informational messages. |
| `remediation_type_id` | `String` | A UUID identifying this Remediation Type. |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Create

```ruby
posture_api_create_remediation_job = client.PostureApiCreateRemediationJob.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "finding_instance_ids" => [], # Array
  "messages" => [], # Array
  "remediation_type_id" => "example_remediation_type_id", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PostureApiCreateWebhookJob

Create an instance: `posture_api_create_webhook_job = client.PostureApiCreateWebhookJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `finding_instance_ids` | `Array` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `Array` | Array of webhook IDs to trigger jobs for. |

#### Example: Create

```ruby
posture_api_create_webhook_job = client.PostureApiCreateWebhookJob.create({
  "account_id" => "example_account_id", # String
  "finding_instance_ids" => [], # Array
  "webhook_ids" => [], # Array
})
```


### PostureApiExportJob

Create an instance: `posture_api_export_job = client.PostureApiExportJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `Boolean` | Filter for archived status. |
| `dlp_profile_id` | `Array` | Filter by DLP profile IDs. |
| `dlp_profile_information` | `Array` | DLP profile metadata for the export. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `ignored` | `Boolean` | Filter for only the ignored findings. |
| `integration_id` | `Array` | Filter by integration IDs. |
| `max_affliction_date` | `String` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `String` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `Array` |  |
| `min_affliction_date` | `String` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `String` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `Array` | Ordering specifications for the export. |
| `product` | `String` | Filter by finding's category product. |
| `result` | `Hash` | Information about an export job. |
| `search` | `String` | A search term. |
| `severities` | `Array` | Filter by severity levels. |
| `status` | `Array` | Filter by remediation job status. |
| `success` | `Boolean` | Whether the API call was successful. |
| `vendors` | `Array` | Filter by vendor types. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostureApiExportJob record (raises on error).
posture_api_export_job = client.PostureApiExportJob.load({ "id" => "posture_api_export_job_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
posture_api_export_job = client.PostureApiExportJob.create({
  "account_id" => "example_account_id", # String
  "dlp_profile_information" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PostureApiFinding

Create an instance: `posture_api_finding = client.PostureApiFinding`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checks` | `Array` | A list of finding IDs to pass along. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `new_severity` | `Integer` | The numeric severity value to apply to the finding. |
| `result` | `Hash` | Aggregated finding information with counts and metadata. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostureApiFinding record (raises on error).
posture_api_finding = client.PostureApiFinding.load({ "id" => "posture_api_finding_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
posture_api_finding = client.PostureApiFinding.create({
  "account_id" => "example_account_id", # String
  "checks" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "new_severity" => 1, # Integer
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PostureApiFindingInstance

Create an instance: `posture_api_finding_instance = client.PostureApiFindingInstance`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_instances` | `Array` | A list of finding instance IDs to pass along. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | A specific instance of a security finding. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostureApiFindingInstance record (raises on error).
posture_api_finding_instance = client.PostureApiFindingInstance.load({ "id" => "posture_api_finding_instance_id", "account_id" => "account_id", "finding_id" => "finding_id" })
```

#### Example: Create

```ruby
posture_api_finding_instance = client.PostureApiFindingInstance.create({
  "account_id" => "example_account_id", # String
  "finding_id" => "example_finding_id", # String
  "check_instances" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PostureApiFindingType

Create an instance: `posture_api_finding_type = client.PostureApiFindingType`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | Basic finding type information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostureApiFindingType record (raises on error).
posture_api_finding_type = client.PostureApiFindingType.load({ "id" => "posture_api_finding_type_id", "account_id" => "account_id" })
```


### PostureApiPaginatedContentAssetList

Create an instance: `posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of content asset objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedContentAssetList records (raises on error).
posture_api_paginated_content_asset_lists = client.PostureApiPaginatedContentAssetList.list
```


### PostureApiPaginatedExportJobList

Create an instance: `posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of export job objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedExportJobList records (raises on error).
posture_api_paginated_export_job_lists = client.PostureApiPaginatedExportJobList.list
```


### PostureApiPaginatedFindingInstanceList

Create an instance: `posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of finding instance objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedFindingInstanceList records (raises on error).
posture_api_paginated_finding_instance_lists = client.PostureApiPaginatedFindingInstanceList.list
```


### PostureApiPaginatedFindingList

Create an instance: `posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of finding objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedFindingList records (raises on error).
posture_api_paginated_finding_lists = client.PostureApiPaginatedFindingList.list
```


### PostureApiPaginatedFindingTypeList

Create an instance: `posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of finding type objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedFindingTypeList records (raises on error).
posture_api_paginated_finding_type_lists = client.PostureApiPaginatedFindingTypeList.list
```


### PostureApiPaginatedRemediationJobList

Create an instance: `posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `Hash` | Asset information for a remediation job. |
| `created_at` | `String` | When the remediation job was created. |
| `finding_id` | `String` | Encoded finding ID. |
| `finding_instance_id` | `String` | ID of the finding instance being remediated. |
| `finding_type_id` | `String` | ID of the finding type. |
| `finding_type_name` | `String` | Name of the finding type. |
| `id` | `String` | Unique identifier for the remediation job. |
| `integration_name` | `String` | Name of the integration. |
| `last_updated` | `String` | When the remediation job was last updated. |
| `remediation_type` | `String` | Type of remediation being performed. |
| `status` | `String` | Status of a remediation job. |
| `triggered_by_actor` | `String` | Type of actor that triggered the remediation job. |
| `triggered_by_id` | `String` | ID of the actor that triggered the job. |
| `triggered_by_user` | `String` | Email of the user who triggered the remediation. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedRemediationJobList records (raises on error).
posture_api_paginated_remediation_job_lists = client.PostureApiPaginatedRemediationJobList.list
```


### PostureApiPaginatedRemediationTypeList

Create an instance: `posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | Array of remediation type objects. |
| `result_info` | `Hash` | Pagination and result information. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiPaginatedRemediationTypeList records (raises on error).
posture_api_paginated_remediation_type_lists = client.PostureApiPaginatedRemediationTypeList.list
```


### PostureApiWebhook

Create an instance: `posture_api_webhook = client.PostureApiWebhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | Webhook configuration for sending finding notifications. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostureApiWebhook record (raises on error).
posture_api_webhook = client.PostureApiWebhook.load({ "id" => "posture_api_webhook_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
posture_api_webhook = client.PostureApiWebhook.create({
  "account_id" => "example_account_id", # String
  "webhook_id" => "example_webhook_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PostureApiWebhookList

Create an instance: `posture_api_webhook_list = client.PostureApiWebhookList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` | List of webhook configurations. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of PostureApiWebhookList records (raises on error).
posture_api_webhook_lists = client.PostureApiWebhookList.list
```


### Webhook

Create an instance: `webhook = client.Webhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication_type` | `String` | Type of authentication used for the webhook. |
| `destination_url` | `String` | Target URL for the webhook configuration. |
| `headers` | `Array` | List of custom headers to include in webhook requests. |
| `id` | `String` |  |
| `label` | `String` | Account-specified display label for the webhook configuration. |
| `signing_secret` | `String` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `String` | Status of the webhook configuration. |

#### Example: Create

```ruby
webhook = client.Webhook.create({
  "account_id" => "example_account_id", # String
  "authentication_type" => "example_authentication_type", # String
  "destination_url" => "example_destination_url", # String
  "label" => "example_label", # String
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareDlp_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareDlp_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
dlpdatatagcategory = client.DlpDataTagCategory
dlpdatatagcategory.list()

# dlpdatatagcategory.data_get now returns the dlpdatatagcategory data from the last list
# dlpdatatagcategory.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
