# CloudflareDlp TypeScript SDK



The TypeScript SDK for the CloudflareDlp API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.DlpCustomPromptTopic()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases](https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareDlpSDK } from '@voxgig-sdk/cloudflare-dlp-sdk'

const client = new CloudflareDlpSDK({
  apikey: process.env.CLOUDFLARE_DLP_APIKEY,
})
```

### 2. List dlpcustomprompttopic records

`list()` resolves to an array of DlpCustomPromptTopic ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const dlpcustomprompttopics = await client.DlpCustomPromptTopic().list({ account_id: "example" })

for (const dlpcustomprompttopic of dlpcustomprompttopics) {
  console.log(dlpcustomprompttopic)
}
```

### 3. Load a postureapiwebhook

PostureApiWebhook is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const postureapiwebhook = await client.PostureApiWebhook().load({
    account_id: 'example_account_id',
    id: 'example_id',
  })
  console.log(postureapiwebhook)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created DlpCustomPromptTopic ENTITY (.data() for the record)
const created = await client.DlpCustomPromptTopic().create({
  account_id: 'example_account_id',
  enabled: true,
  name: 'example_name',
  result: {},
  topic: 'example_topic',
})

// Update — the id comes off the returned entity's data()
const updated = await client.DlpCustomPromptTopic().update({
  id: created.data().id!,
  account_id: 'example_account_id',
  description: 'example_description',
})

// Remove
await client.DlpCustomPromptTopic().remove({
  id: created.data().id!,
  account_id: 'example_account_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const dlpdatatagcategorys = await client.DlpDataTagCategory().list()
  console.log(dlpdatatagcategorys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareDlpSDK.test()

const dlpdatatagcategory = await client.DlpDataTagCategory().list()
// dlpdatatagcategory is the entity, populated with mock response data
// — call dlpdatatagcategory.data() for the record itself
console.log(dlpdatatagcategory)
```

You can also use the instance method:

```ts
const client = new CloudflareDlpSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.DlpDataTagCategory()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareDlpSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareDlpSDK

#### Constructor

```ts
new CloudflareDlpSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `DlpCustomPromptTopic(data?)` | `DlpCustomPromptTopicEntity` | Create a DlpCustomPromptTopic entity instance. |
| `DlpDataClass(data?)` | `DlpDataClassEntity` | Create a DlpDataClass entity instance. |
| `DlpDataTag(data?)` | `DlpDataTagEntity` | Create a DlpDataTag entity instance. |
| `DlpDataTagCategory(data?)` | `DlpDataTagCategoryEntity` | Create a DlpDataTagCategory entity instance. |
| `DlpDataTagCategoryTemplate(data?)` | `DlpDataTagCategoryTemplateEntity` | Create a DlpDataTagCategoryTemplate entity instance. |
| `DlpDataset(data?)` | `DlpDatasetEntity` | Create a DlpDataset entity instance. |
| `DlpDocumentFingerprint(data?)` | `DlpDocumentFingerprintEntity` | Create a DlpDocumentFingerprint entity instance. |
| `DlpEmail(data?)` | `DlpEmailEntity` | Create a DlpEmail entity instance. |
| `DlpEntry(data?)` | `DlpEntryEntity` | Create a DlpEntry entity instance. |
| `DlpIntegrationEntry(data?)` | `DlpIntegrationEntryEntity` | Create a DlpIntegrationEntry entity instance. |
| `DlpPredefinedEntry(data?)` | `DlpPredefinedEntryEntity` | Create a DlpPredefinedEntry entity instance. |
| `DlpProfile(data?)` | `DlpProfileEntity` | Create a DlpProfile entity instance. |
| `DlpSensitivityGroup(data?)` | `DlpSensitivityGroupEntity` | Create a DlpSensitivityGroup entity instance. |
| `DlpSensitivityGroupTemplate(data?)` | `DlpSensitivityGroupTemplateEntity` | Create a DlpSensitivityGroupTemplate entity instance. |
| `DlpSensitivityLevel(data?)` | `DlpSensitivityLevelEntity` | Create a DlpSensitivityLevel entity instance. |
| `DlpSetting(data?)` | `DlpSettingEntity` | Create a DlpSetting entity instance. |
| `Policy(data?)` | `PolicyEntity` | Create a Policy entity instance. |
| `PostureApiCreateRemediationJob(data?)` | `PostureApiCreateRemediationJobEntity` | Create a PostureApiCreateRemediationJob entity instance. |
| `PostureApiCreateWebhookJob(data?)` | `PostureApiCreateWebhookJobEntity` | Create a PostureApiCreateWebhookJob entity instance. |
| `PostureApiExportJob(data?)` | `PostureApiExportJobEntity` | Create a PostureApiExportJob entity instance. |
| `PostureApiFinding(data?)` | `PostureApiFindingEntity` | Create a PostureApiFinding entity instance. |
| `PostureApiFindingInstance(data?)` | `PostureApiFindingInstanceEntity` | Create a PostureApiFindingInstance entity instance. |
| `PostureApiFindingType(data?)` | `PostureApiFindingTypeEntity` | Create a PostureApiFindingType entity instance. |
| `PostureApiPaginatedContentAssetList(data?)` | `PostureApiPaginatedContentAssetListEntity` | Create a PostureApiPaginatedContentAssetList entity instance. |
| `PostureApiPaginatedExportJobList(data?)` | `PostureApiPaginatedExportJobListEntity` | Create a PostureApiPaginatedExportJobList entity instance. |
| `PostureApiPaginatedFindingInstanceList(data?)` | `PostureApiPaginatedFindingInstanceListEntity` | Create a PostureApiPaginatedFindingInstanceList entity instance. |
| `PostureApiPaginatedFindingList(data?)` | `PostureApiPaginatedFindingListEntity` | Create a PostureApiPaginatedFindingList entity instance. |
| `PostureApiPaginatedFindingTypeList(data?)` | `PostureApiPaginatedFindingTypeListEntity` | Create a PostureApiPaginatedFindingTypeList entity instance. |
| `PostureApiPaginatedRemediationJobList(data?)` | `PostureApiPaginatedRemediationJobListEntity` | Create a PostureApiPaginatedRemediationJobList entity instance. |
| `PostureApiPaginatedRemediationTypeList(data?)` | `PostureApiPaginatedRemediationTypeListEntity` | Create a PostureApiPaginatedRemediationTypeList entity instance. |
| `PostureApiWebhook(data?)` | `PostureApiWebhookEntity` | Create a PostureApiWebhook entity instance. |
| `PostureApiWebhookList(data?)` | `PostureApiWebhookListEntity` | Create a PostureApiWebhookList entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareDlpSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareDlpSDK.test(testopts?, sdkopts?)` | `CloudflareDlpSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareDlpSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/dlp/data_classes`

#### DlpDataTag

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `result` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/dlp/data_tag_categories`

#### DlpDataTagCategoryTemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: list, load.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}`

#### DlpDocumentFingerprint

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `match_percent` |  |
| `name` |  |
| `result` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/dlp/entries`

#### DlpIntegrationEntry

| Field | Description |
| --- | --- |
| `enabled` |  |
| `entry_id` |  |
| `profile_id` | This field is not used as the owning profile. |

Operations: create, remove, update.

API path: `/accounts/{account_id}/dlp/entries/integration`

#### DlpPredefinedEntry

| Field | Description |
| --- | --- |
| `enabled` |  |
| `entry_id` |  |
| `profile_id` | This field is not used as the owning profile. |

Operations: create, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/dlp/sensitivity_groups`

#### DlpSensitivityGroupTemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: list, load.

API path: `/accounts/{account_id}/dlp/sensitivity_groups/templates`

#### DlpSensitivityLevel

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `result` |  |

Operations: create, list, load, remove, update.

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

Operations: create, load, patch, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiCreateWebhookJob

| Field | Description |
| --- | --- |
| `finding_instance_ids` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | Array of webhook IDs to trigger jobs for. |

Operations: create.

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

Operations: create, load.

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

Operations: create, load.

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

Operations: create, load.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive`

#### PostureApiFindingType

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Basic finding type information. |
| `success` | Whether the API call was successful. |

Operations: load.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}`

#### PostureApiPaginatedContentAssetList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of content asset objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/content`

#### PostureApiPaginatedExportJobList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of export job objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/exports`

#### PostureApiPaginatedFindingInstanceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding instance objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances`

#### PostureApiPaginatedFindingList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/findings`

#### PostureApiPaginatedFindingTypeList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of finding type objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiPaginatedRemediationTypeList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Array of remediation type objects. |
| `result_info` | Pagination and result information. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types`

#### PostureApiWebhook

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Webhook configuration for sending finding notifications. |
| `success` | Whether the API call was successful. |

Operations: create, load.

API path: `/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate`

#### PostureApiWebhookList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | List of webhook configurations. |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: create, remove, update.

API path: `/accounts/{account_id}/data-security/posture/webhooks`



## Entities


### DlpCustomPromptTopic

Create an instance: `const dlp_custom_prompt_topic = client.DlpCustomPromptTopic()`

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
| `result` | `Record<string, any>` |  |
| `topic` | `string` |  |

#### Example: Load

```ts
const dlp_custom_prompt_topic = await client.DlpCustomPromptTopic().load({ id: 'dlp_custom_prompt_topic_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_custom_prompt_topics = await client.DlpCustomPromptTopic().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_custom_prompt_topic = await client.DlpCustomPromptTopic().create({
  account_id: 'example_account_id',
  enabled: true,
  name: 'example_name',
  result: {},
  topic: 'example_topic',
})
```


### DlpDataClass

Create an instance: `const dlp_data_class = client.DlpDataClass()`

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
| `data_tags` | `any[]` |  |
| `description` | `string` |  |
| `expression` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `Record<string, any>` |  |
| `sensitivity_levels` | `any[]` |  |

#### Example: Load

```ts
const dlp_data_class = await client.DlpDataClass().load({ id: 'dlp_data_class_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_data_classs = await client.DlpDataClass().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_data_class = await client.DlpDataClass().create({
  account_id: 'example_account_id',
  data_tags: [],
  expression: 'example_expression',
  name: 'example_name',
  result: {},
  sensitivity_levels: [],
})
```


### DlpDataTag

Create an instance: `const dlp_data_tag = client.DlpDataTag()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_data_tag = await client.DlpDataTag().load({ id: 'dlp_data_tag_id', account_id: 'account_id', data_tag_category_id: 'data_tag_category_id' })
```

#### Example: List

```ts
const dlp_data_tags = await client.DlpDataTag().list({ account_id: "example", data_tag_category_id: "example" })
```

#### Example: Create

```ts
const dlp_data_tag = await client.DlpDataTag().create({
  account_id: 'example_account_id',
  data_tag_category_id: 'example_data_tag_category_id',
  name: 'example_name',
  result: {},
})
```


### DlpDataTagCategory

Create an instance: `const dlp_data_tag_category = client.DlpDataTagCategory()`

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
| `result` | `Record<string, any>` |  |
| `tags` | `any[]` | Tags to create with the category. |
| `template_id` | `string` |  |

#### Example: Load

```ts
const dlp_data_tag_category = await client.DlpDataTagCategory().load({ id: 'dlp_data_tag_category_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_data_tag_categorys = await client.DlpDataTagCategory().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_data_tag_category = await client.DlpDataTagCategory().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```


### DlpDataTagCategoryTemplate

Create an instance: `const dlp_data_tag_category_template = client.DlpDataTagCategoryTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_data_tag_category_template = await client.DlpDataTagCategoryTemplate().load({ id: 'dlp_data_tag_category_template_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_data_tag_category_templates = await client.DlpDataTagCategoryTemplate().list({ account_id: "example" })
```


### DlpDataset

Create an instance: `const dlp_dataset = client.DlpDataset()`

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
| `result` | `Record<string, any>` |  |
| `secret` | `boolean` | Generate a secret dataset. |

#### Example: Load

```ts
const dlp_dataset = await client.DlpDataset().load({ id: 'dlp_dataset_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_datasets = await client.DlpDataset().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_dataset = await client.DlpDataset().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```


### DlpDocumentFingerprint

Create an instance: `const dlp_document_fingerprint = client.DlpDocumentFingerprint()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_document_fingerprint = await client.DlpDocumentFingerprint().load({ id: 'dlp_document_fingerprint_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_document_fingerprints = await client.DlpDocumentFingerprint().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_document_fingerprint = await client.DlpDocumentFingerprint().create({
  account_id: 'example_account_id',
  result: {},
})
```


### DlpEmail

Create an instance: `const dlp_email = client.DlpEmail()`

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
| `conditions` | `any[]` | Triggered if all conditions match. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `name` | `string` |  |
| `new_priorities` | `Record<string, any>` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_email = await client.DlpEmail().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_emails = await client.DlpEmail().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_email = await client.DlpEmail().create({
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


### DlpEntry

Create an instance: `const dlp_entry = client.DlpEntry()`

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
| `pattern` | `Record<string, any>` |  |
| `profile_id` | `string` |  |
| `result` | `any` |  |

#### Example: Load

```ts
const dlp_entry = await client.DlpEntry().load({ id: 'dlp_entry_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_entrys = await client.DlpEntry().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_entry = await client.DlpEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  name: 'example_name',
  pattern: {},
})
```


### DlpIntegrationEntry

Create an instance: `const dlp_integration_entry = client.DlpIntegrationEntry()`

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

```ts
const dlp_integration_entry = await client.DlpIntegrationEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  entry_id: 'example_entry_id',
})
```


### DlpPredefinedEntry

Create an instance: `const dlp_predefined_entry = client.DlpPredefinedEntry()`

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

```ts
const dlp_predefined_entry = await client.DlpPredefinedEntry().create({
  account_id: 'example_account_id',
  enabled: true,
  entry_id: 'example_entry_id',
})
```


### DlpProfile

Create an instance: `const dlp_profile = client.DlpProfile()`

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
| `context_awareness` | `Record<string, any>` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `any[]` | Data class IDs to associate with the profile. |
| `data_tags` | `any[]` | Data tag IDs to associate with the profile. |
| `description` | `string` | The description of the profile. |
| `entries` | `any[]` | Custom entries from this profile. |
| `id` | `string` |  |
| `name` | `string` |  |
| `ocr_enabled` | `boolean` |  |
| `result` | `any` |  |
| `sensitivity_levels` | `any[]` | Sensitivity levels to associate with the profile. |
| `shared_entries` | `any[]` | Entries from other profiles (e.g. |

#### Example: Load

```ts
const dlp_profile = await client.DlpProfile().load({ id: 'dlp_profile_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_profiles = await client.DlpProfile().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_profile = await client.DlpProfile().create({
  account_id: 'example_account_id',
  context_awareness: {},
  name: 'example_name',
})
```


### DlpSensitivityGroup

Create an instance: `const dlp_sensitivity_group = client.DlpSensitivityGroup()`

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
| `levels` | `any[]` | Levels to create with the group. |
| `name` | `string` |  |
| `result` | `Record<string, any>` |  |
| `template_id` | `string` |  |

#### Example: Load

```ts
const dlp_sensitivity_group = await client.DlpSensitivityGroup().load({ id: 'dlp_sensitivity_group_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_sensitivity_groups = await client.DlpSensitivityGroup().list({ account_id: "example" })
```

#### Example: Create

```ts
const dlp_sensitivity_group = await client.DlpSensitivityGroup().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```


### DlpSensitivityGroupTemplate

Create an instance: `const dlp_sensitivity_group_template = client.DlpSensitivityGroupTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_sensitivity_group_template = await client.DlpSensitivityGroupTemplate().load({ id: 'dlp_sensitivity_group_template_id', account_id: 'account_id' })
```

#### Example: List

```ts
const dlp_sensitivity_group_templates = await client.DlpSensitivityGroupTemplate().list({ account_id: "example" })
```


### DlpSensitivityLevel

Create an instance: `const dlp_sensitivity_level = client.DlpSensitivityLevel()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dlp_sensitivity_level = await client.DlpSensitivityLevel().load({ id: 'dlp_sensitivity_level_id', account_id: 'account_id', sensitivity_group_id: 'sensitivity_group_id' })
```

#### Example: List

```ts
const dlp_sensitivity_levels = await client.DlpSensitivityLevel().list({ account_id: "example", sensitivity_group_id: "example" })
```

#### Example: Create

```ts
const dlp_sensitivity_level = await client.DlpSensitivityLevel().create({
  account_id: 'example_account_id',
  sensitivity_group_id: 'example_sensitivity_group_id',
  name: 'example_name',
  result: {},
})
```


### DlpSetting

Create an instance: `const dlp_setting = client.DlpSetting()`

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
| `result` | `Record<string, any>` | DLP account-level settings response. |

#### Example: Load

```ts
const dlp_setting = await client.DlpSetting().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const dlp_setting = await client.DlpSetting().create({
  account_id: 'example_account_id',
  regex: 'example_regex',
  result: {},
})
```


### Policy

Create an instance: `const policy = client.Policy()`

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
| `actions` | `Record<string, any>` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `boolean` | When true, the policy applies to all integrations for the account. |
| `description` | `string` | Optional description of what this policy does. |
| `display_name` | `string` | Display name for the policy configuration. |
| `enabled` | `boolean` | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `any[]` |  |
| `finding_type_id` | `string` | The finding type this policy is associated with. |
| `id` | `string` |  |
| `integration_ids` | `any[]` | The integrations this policy applies to. |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Response body for a policy configuration. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const policy = await client.Policy().load({ id: 'policy_id', account_id: 'account_id' })
```

#### Example: List

```ts
const policys = await client.Policy().list({ account_id: "example" })
```

#### Example: Create

```ts
const policy = await client.Policy().create({
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


### PostureApiCreateRemediationJob

Create an instance: `const posture_api_create_remediation_job = client.PostureApiCreateRemediationJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | Array of error messages. |
| `finding_instance_ids` | `any[]` | UUIDs identifying Finding Instances. |
| `messages` | `any[]` | Array of informational messages. |
| `remediation_type_id` | `string` | A UUID identifying this Remediation Type. |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Create

```ts
const posture_api_create_remediation_job = await client.PostureApiCreateRemediationJob().create({
  account_id: 'example_account_id',
  errors: [],
  finding_instance_ids: [],
  messages: [],
  remediation_type_id: 'example_remediation_type_id',
  result: {},
  success: true,
})
```


### PostureApiCreateWebhookJob

Create an instance: `const posture_api_create_webhook_job = client.PostureApiCreateWebhookJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `finding_instance_ids` | `any[]` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `any[]` | Array of webhook IDs to trigger jobs for. |

#### Example: Create

```ts
const posture_api_create_webhook_job = await client.PostureApiCreateWebhookJob().create({
  account_id: 'example_account_id',
  finding_instance_ids: [],
  webhook_ids: [],
})
```


### PostureApiExportJob

Create an instance: `const posture_api_export_job = client.PostureApiExportJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Filter for archived status. |
| `dlp_profile_id` | `any[]` | Filter by DLP profile IDs. |
| `dlp_profile_information` | `any[]` | DLP profile metadata for the export. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `ignored` | `boolean` | Filter for only the ignored findings. |
| `integration_id` | `any[]` | Filter by integration IDs. |
| `max_affliction_date` | `string` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `any[]` |  |
| `min_affliction_date` | `string` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `any[]` | Ordering specifications for the export. |
| `product` | `string` | Filter by finding's category product. |
| `result` | `Record<string, any>` | Information about an export job. |
| `search` | `string` | A search term. |
| `severities` | `any[]` | Filter by severity levels. |
| `status` | `any[]` | Filter by remediation job status. |
| `success` | `boolean` | Whether the API call was successful. |
| `vendors` | `any[]` | Filter by vendor types. |

#### Example: Load

```ts
const posture_api_export_job = await client.PostureApiExportJob().load({ id: 'posture_api_export_job_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const posture_api_export_job = await client.PostureApiExportJob().create({
  account_id: 'example_account_id',
  dlp_profile_information: [],
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### PostureApiFinding

Create an instance: `const posture_api_finding = client.PostureApiFinding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checks` | `any[]` | A list of finding IDs to pass along. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `new_severity` | `number` | The numeric severity value to apply to the finding. |
| `result` | `Record<string, any>` | Aggregated finding information with counts and metadata. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const posture_api_finding = await client.PostureApiFinding().load({ id: 'posture_api_finding_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const posture_api_finding = await client.PostureApiFinding().create({
  account_id: 'example_account_id',
  checks: [],
  errors: [],
  messages: [],
  new_severity: 1,
  result: {},
  success: true,
})
```


### PostureApiFindingInstance

Create an instance: `const posture_api_finding_instance = client.PostureApiFindingInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_instances` | `any[]` | A list of finding instance IDs to pass along. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A specific instance of a security finding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const posture_api_finding_instance = await client.PostureApiFindingInstance().load({ id: 'posture_api_finding_instance_id', account_id: 'account_id', finding_id: 'finding_id' })
```

#### Example: Create

```ts
const posture_api_finding_instance = await client.PostureApiFindingInstance().create({
  account_id: 'example_account_id',
  finding_id: 'example_finding_id',
  check_instances: [],
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### PostureApiFindingType

Create an instance: `const posture_api_finding_type = client.PostureApiFindingType()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Basic finding type information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const posture_api_finding_type = await client.PostureApiFindingType().load({ id: 'posture_api_finding_type_id', account_id: 'account_id' })
```


### PostureApiPaginatedContentAssetList

Create an instance: `const posture_api_paginated_content_asset_list = client.PostureApiPaginatedContentAssetList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of content asset objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_content_asset_lists = await client.PostureApiPaginatedContentAssetList().list({ account_id: "example" })
```


### PostureApiPaginatedExportJobList

Create an instance: `const posture_api_paginated_export_job_list = client.PostureApiPaginatedExportJobList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of export job objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_export_job_lists = await client.PostureApiPaginatedExportJobList().list({ account_id: "example" })
```


### PostureApiPaginatedFindingInstanceList

Create an instance: `const posture_api_paginated_finding_instance_list = client.PostureApiPaginatedFindingInstanceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of finding instance objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_finding_instance_lists = await client.PostureApiPaginatedFindingInstanceList().list({ account_id: "example", finding_id: "example" })
```


### PostureApiPaginatedFindingList

Create an instance: `const posture_api_paginated_finding_list = client.PostureApiPaginatedFindingList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of finding objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_finding_lists = await client.PostureApiPaginatedFindingList().list({ account_id: "example" })
```


### PostureApiPaginatedFindingTypeList

Create an instance: `const posture_api_paginated_finding_type_list = client.PostureApiPaginatedFindingTypeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of finding type objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_finding_type_lists = await client.PostureApiPaginatedFindingTypeList().list({ account_id: "example" })
```


### PostureApiPaginatedRemediationJobList

Create an instance: `const posture_api_paginated_remediation_job_list = client.PostureApiPaginatedRemediationJobList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `Record<string, any>` | Asset information for a remediation job. |
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

```ts
const posture_api_paginated_remediation_job_lists = await client.PostureApiPaginatedRemediationJobList().list({ account_id: "example" })
```


### PostureApiPaginatedRemediationTypeList

Create an instance: `const posture_api_paginated_remediation_type_list = client.PostureApiPaginatedRemediationTypeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | Array of remediation type objects. |
| `result_info` | `Record<string, any>` | Pagination and result information. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_paginated_remediation_type_lists = await client.PostureApiPaginatedRemediationTypeList().list({ account_id: "example", finding_type_id: "example" })
```


### PostureApiWebhook

Create an instance: `const posture_api_webhook = client.PostureApiWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Webhook configuration for sending finding notifications. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const posture_api_webhook = await client.PostureApiWebhook().load({ id: 'posture_api_webhook_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const posture_api_webhook = await client.PostureApiWebhook().create({
  account_id: 'example_account_id',
  webhook_id: 'example_webhook_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### PostureApiWebhookList

Create an instance: `const posture_api_webhook_list = client.PostureApiWebhookList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` | List of webhook configurations. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const posture_api_webhook_lists = await client.PostureApiWebhookList().list({ account_id: "example" })
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

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
| `headers` | `any[]` | List of custom headers to include in webhook requests. |
| `id` | `string` |  |
| `label` | `string` | Account-specified display label for the webhook configuration. |
| `signing_secret` | `string` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `string` | Status of the webhook configuration. |

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  account_id: 'example_account_id',
  authentication_type: 'example_authentication_type',
  destination_url: 'example_destination_url',
  label: 'example_label',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-dlp/
├── src/
│   ├── CloudflareDlpSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareDlpSDK } from '@voxgig-sdk/cloudflare-dlp-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const dlpdatatagcategory = client.DlpDataTagCategory()
await dlpdatatagcategory.list()

// dlpdatatagcategory.data() now returns the dlpdatatagcategory data from the last `list`
// dlpdatatagcategory.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
