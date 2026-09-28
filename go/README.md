# CloudflareDlp Golang SDK



The Golang SDK for the CloudflareDlp API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.DlpCustomPromptTopic(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-dlp-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-dlp-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-dlp-sdk/go=../cloudflare-dlp-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-dlp-sdk/go"
)

func main() {
    client := sdk.NewCloudflareDlpSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_DLP_APIKEY"),
    })

    // List dlpCustomPromptTopic records — the value is the array of records itself.
    dlpCustomPromptTopics, err := client.DlpCustomPromptTopic(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range dlpCustomPromptTopics.([]any) {
        fmt.Println(item)
    }

    // Load a single dlpCustomPromptTopic — the value is the loaded record.
    dlpCustomPromptTopic, err := client.DlpCustomPromptTopic(nil).Load(map[string]any{"id": "example_id", "account_id": "example_account_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(dlpCustomPromptTopic)

    // Create a dlpCustomPromptTopic.
    created, err := client.DlpCustomPromptTopic(nil).Create(map[string]any{"account_id": "example_account_id", "enabled": true, "name": "example_name", "result": map[string]any{}, "topic": "example_topic"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a dlpCustomPromptTopic.
    updated, err := client.DlpCustomPromptTopic(nil).Update(map[string]any{"id": "example_id", "account_id": "example_account_id", "description": "example_description"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a dlpCustomPromptTopic.
    removed, err := client.DlpCustomPromptTopic(nil).Remove(map[string]any{"id": "example_id", "account_id": "example_account_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
dlpdatatagcategorys, err := client.DlpDataTagCategory(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = dlpdatatagcategorys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

dlpDataTagCategory, err := client.DlpDataTagCategory(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTagCategory) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareDlpSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareDlpSDK

```go
func NewCloudflareDlpSDK(options map[string]any) *CloudflareDlpSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareDlpSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDlpSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `DlpCustomPromptTopic` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpCustomPromptTopic entity instance. |
| `DlpDataClass` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDataClass entity instance. |
| `DlpDataTag` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDataTag entity instance. |
| `DlpDataTagCategory` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDataTagCategory entity instance. |
| `DlpDataTagCategoryTemplate` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDataTagCategoryTemplate entity instance. |
| `DlpDataset` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDataset entity instance. |
| `DlpDocumentFingerprint` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpDocumentFingerprint entity instance. |
| `DlpEmail` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpEmail entity instance. |
| `DlpEntry` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpEntry entity instance. |
| `DlpIntegrationEntry` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpIntegrationEntry entity instance. |
| `DlpPredefinedEntry` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpPredefinedEntry entity instance. |
| `DlpProfile` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpProfile entity instance. |
| `DlpSensitivityGroup` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpSensitivityGroup entity instance. |
| `DlpSensitivityGroupTemplate` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpSensitivityGroupTemplate entity instance. |
| `DlpSensitivityLevel` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpSensitivityLevel entity instance. |
| `DlpSetting` | `(data map[string]any) CloudflareDlpEntity` | Create a DlpSetting entity instance. |
| `Policy` | `(data map[string]any) CloudflareDlpEntity` | Create a Policy entity instance. |
| `PostureApiCreateRemediationJob` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiCreateRemediationJob entity instance. |
| `PostureApiCreateWebhookJob` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiCreateWebhookJob entity instance. |
| `PostureApiExportJob` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiExportJob entity instance. |
| `PostureApiFinding` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiFinding entity instance. |
| `PostureApiFindingInstance` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiFindingInstance entity instance. |
| `PostureApiFindingType` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiFindingType entity instance. |
| `PostureApiPaginatedContentAssetList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedContentAssetList entity instance. |
| `PostureApiPaginatedExportJobList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedExportJobList entity instance. |
| `PostureApiPaginatedFindingInstanceList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedFindingInstanceList entity instance. |
| `PostureApiPaginatedFindingList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedFindingList entity instance. |
| `PostureApiPaginatedFindingTypeList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedFindingTypeList entity instance. |
| `PostureApiPaginatedRemediationJobList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedRemediationJobList entity instance. |
| `PostureApiPaginatedRemediationTypeList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiPaginatedRemediationTypeList entity instance. |
| `PostureApiWebhook` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiWebhook entity instance. |
| `PostureApiWebhookList` | `(data map[string]any) CloudflareDlpEntity` | Create a PostureApiWebhookList entity instance. |
| `Webhook` | `(data map[string]any) CloudflareDlpEntity` | Create a Webhook entity instance. |

### Entity interface (CloudflareDlpEntity)

All entities implement the `CloudflareDlpEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    dlpCustomPromptTopic, err := client.DlpCustomPromptTopic(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // dlpCustomPromptTopic is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### DlpCustomPromptTopic

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"name"` |  |
| `"profile_id"` |  |
| `"result"` |  |
| `"topic"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/custom_prompt_topics`

#### DlpDataClass

| Field | Description |
| --- | --- |
| `"data_tags"` |  |
| `"description"` |  |
| `"expression"` |  |
| `"id"` |  |
| `"name"` |  |
| `"result"` |  |
| `"sensitivity_levels"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_classes`

#### DlpDataTag

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"result"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags`

#### DlpDataTagCategory

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"result"` |  |
| `"tags"` | Tags to create with the category. |
| `"template_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/data_tag_categories`

#### DlpDataTagCategoryTemplate

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/dlp/data_tag_category_templates`

#### DlpDataset

| Field | Description |
| --- | --- |
| `"case_sensitive"` | Only applies to custom word lists. |
| `"description"` | The description of the dataset. |
| `"encoding_version"` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `"id"` |  |
| `"name"` | The name of the dataset, must be unique. |
| `"result"` |  |
| `"secret"` | Generate a secret dataset. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}`

#### DlpDocumentFingerprint

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"match_percent"` |  |
| `"name"` |  |
| `"result"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}`

#### DlpEmail

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"auth_requirements"` |  |
| `"conditions"` | Triggered if all conditions match. |
| `"description"` |  |
| `"enabled"` |  |
| `"name"` |  |
| `"new_priorities"` |  |
| `"result"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/dlp/email/account_mapping`

#### DlpEntry

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pattern"` |  |
| `"profile_id"` |  |
| `"result"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/entries`

#### DlpIntegrationEntry

| Field | Description |
| --- | --- |
| `"enabled"` |  |
| `"entry_id"` |  |
| `"profile_id"` | This field is not used as the owning profile. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/dlp/entries/integration`

#### DlpPredefinedEntry

| Field | Description |
| --- | --- |
| `"enabled"` |  |
| `"entry_id"` |  |
| `"profile_id"` | This field is not used as the owning profile. |

Operations: Create, Remove.

API path: `/accounts/{account_id}/dlp/entries/predefined`

#### DlpProfile

| Field | Description |
| --- | --- |
| `"ai_context_enabled"` |  |
| `"allowed_match_count"` | Related DLP policies will trigger when the match count exceeds the number set. |
| `"confidence_threshold"` |  |
| `"context_awareness"` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `"data_classes"` | Data class IDs to associate with the profile. |
| `"data_tags"` | Data tag IDs to associate with the profile. |
| `"description"` | The description of the profile. |
| `"entries"` | Custom entries from this profile. |
| `"id"` |  |
| `"name"` |  |
| `"ocr_enabled"` |  |
| `"result"` |  |
| `"sensitivity_levels"` | Sensitivity levels to associate with the profile. |
| `"shared_entries"` | Entries from other profiles (e.g. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config`

#### DlpSensitivityGroup

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"levels"` | Levels to create with the group. |
| `"name"` |  |
| `"result"` |  |
| `"template_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/sensitivity_groups`

#### DlpSensitivityGroupTemplate

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/dlp/sensitivity_groups/templates`

#### DlpSensitivityLevel

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"result"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels`

#### DlpSetting

| Field | Description |
| --- | --- |
| `"ai_context_analysis"` | Whether AI context analysis is enabled at the account level. |
| `"masking_level"` |  |
| `"max_match_bytes"` | Maximum number of bytes that the regular expression can match. |
| `"ocr"` | Whether OCR is enabled at the account level. |
| `"payload_logging"` |  |
| `"public_key"` | Base64-encoded public key for encrypting payload logs. |
| `"regex"` |  |
| `"result"` | DLP account-level settings response. |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/dlp/patterns/validate`

#### Policy

| Field | Description |
| --- | --- |
| `"actions"` | Actions to execute when this policy is triggered, grouped by action type. |
| `"applies_to_all_integrations"` | When true, the policy applies to all integrations for the account. |
| `"description"` | Optional description of what this policy does. |
| `"display_name"` | Display name for the policy configuration. |
| `"enabled"` | Boolean specifying if the policy is enabled or disabled. |
| `"errors"` |  |
| `"finding_type_id"` | The finding type this policy is associated with. |
| `"id"` |  |
| `"integration_ids"` | The integrations this policy applies to. |
| `"messages"` |  |
| `"result"` | Response body for a policy configuration. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/data-security/posture/policies`

#### PostureApiCreateRemediationJob

| Field | Description |
| --- | --- |
| `"errors"` | Array of error messages. |
| `"finding_instance_ids"` | UUIDs identifying Finding Instances. |
| `"messages"` | Array of informational messages. |
| `"remediation_type_id"` | A UUID identifying this Remediation Type. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiCreateWebhookJob

| Field | Description |
| --- | --- |
| `"finding_instance_ids"` | Array of finding instance IDs to send to the webhooks. |
| `"webhook_ids"` | Array of webhook IDs to trigger jobs for. |

Operations: Create.

API path: `/accounts/{account_id}/data-security/posture/webhooks/jobs`

#### PostureApiExportJob

| Field | Description |
| --- | --- |
| `"archived"` | Filter for archived status. |
| `"dlp_profile_id"` | Filter by DLP profile IDs. |
| `"dlp_profile_information"` | DLP profile metadata for the export. |
| `"errors"` |  |
| `"id"` |  |
| `"ignored"` | Filter for only the ignored findings. |
| `"integration_id"` | Filter by integration IDs. |
| `"max_affliction_date"` | Filter to view findings that occurred on or before the affliction date. |
| `"max_updated_at"` | Filter to view remediation jobs updated on or before this datetime. |
| `"messages"` |  |
| `"min_affliction_date"` | Filter to view findings that occurred on or after the affliction date. |
| `"min_updated_at"` | Filter to view remediation jobs updated on or after this datetime. |
| `"orders"` | Ordering specifications for the export. |
| `"product"` | Filter by finding's category product. |
| `"result"` | Information about an export job. |
| `"search"` | A search term. |
| `"severities"` | Filter by severity levels. |
| `"status"` | Filter by remediation job status. |
| `"success"` | Whether the API call was successful. |
| `"vendors"` | Filter by vendor types. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export`

#### PostureApiFinding

| Field | Description |
| --- | --- |
| `"checks"` | A list of finding IDs to pass along. |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"new_severity"` | The numeric severity value to apply to the finding. |
| `"result"` | Aggregated finding information with counts and metadata. |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/reset_finding_severity`

#### PostureApiFindingInstance

| Field | Description |
| --- | --- |
| `"check_instances"` | A list of finding instance IDs to pass along. |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | A specific instance of a security finding. |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive`

#### PostureApiFindingType

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | Basic finding type information. |
| `"success"` | Whether the API call was successful. |

Operations: Load.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}`

#### PostureApiPaginatedContentAssetList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of content asset objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/content`

#### PostureApiPaginatedExportJobList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of export job objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/exports`

#### PostureApiPaginatedFindingInstanceList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of finding instance objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances`

#### PostureApiPaginatedFindingList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of finding objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/findings`

#### PostureApiPaginatedFindingTypeList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of finding type objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/finding_types`

#### PostureApiPaginatedRemediationJobList

| Field | Description |
| --- | --- |
| `"asset"` | Asset information for a remediation job. |
| `"created_at"` | When the remediation job was created. |
| `"finding_id"` | Encoded finding ID. |
| `"finding_instance_id"` | ID of the finding instance being remediated. |
| `"finding_type_id"` | ID of the finding type. |
| `"finding_type_name"` | Name of the finding type. |
| `"id"` | Unique identifier for the remediation job. |
| `"integration_name"` | Name of the integration. |
| `"last_updated"` | When the remediation job was last updated. |
| `"remediation_type"` | Type of remediation being performed. |
| `"status"` | Status of a remediation job. |
| `"triggered_by_actor"` | Type of actor that triggered the remediation job. |
| `"triggered_by_id"` | ID of the actor that triggered the job. |
| `"triggered_by_user"` | Email of the user who triggered the remediation. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/remediations/jobs`

#### PostureApiPaginatedRemediationTypeList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Array of remediation type objects. |
| `"result_info"` | Pagination and result information. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types`

#### PostureApiWebhook

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | Webhook configuration for sending finding notifications. |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load.

API path: `/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate`

#### PostureApiWebhookList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | List of webhook configurations. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/data-security/posture/webhooks`

#### Webhook

| Field | Description |
| --- | --- |
| `"authentication_type"` | Type of authentication used for the webhook. |
| `"destination_url"` | Target URL for the webhook configuration. |
| `"headers"` | List of custom headers to include in webhook requests. |
| `"id"` |  |
| `"label"` | Account-specified display label for the webhook configuration. |
| `"signing_secret"` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `"status"` | Status of the webhook configuration. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/data-security/posture/webhooks`



## Entities


### DlpCustomPromptTopic

Create an instance: `dlpCustomPromptTopic := client.DlpCustomPromptTopic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `profile_id` | `string` |  |
| `result` | `map[string]any` |  |
| `topic` | `string` |  |

#### Example: Load

```go
dlpCustomPromptTopic, err := client.DlpCustomPromptTopic(nil).Load(map[string]any{"id": "dlp_custom_prompt_topic_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpCustomPromptTopic) // the loaded record
```

#### Example: List

```go
dlpCustomPromptTopics, err := client.DlpCustomPromptTopic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpCustomPromptTopics) // the array of records
```

#### Example: Create

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


### DlpDataClass

Create an instance: `dlpDataClass := client.DlpDataClass(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_tags` | `[]any` |  |
| `description` | `string` |  |
| `expression` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `sensitivity_levels` | `[]any` |  |

#### Example: Load

```go
dlpDataClass, err := client.DlpDataClass(nil).Load(map[string]any{"id": "dlp_data_class_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataClass) // the loaded record
```

#### Example: List

```go
dlpDataClasss, err := client.DlpDataClass(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataClasss) // the array of records
```

#### Example: Create

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


### DlpDataTag

Create an instance: `dlpDataTag := client.DlpDataTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpDataTag, err := client.DlpDataTag(nil).Load(map[string]any{"id": "dlp_data_tag_id", "account_id": "account_id", "data_tag_category_id": "data_tag_category_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTag) // the loaded record
```

#### Example: List

```go
dlpDataTags, err := client.DlpDataTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTags) // the array of records
```

#### Example: Create

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


### DlpDataTagCategory

Create an instance: `dlpDataTagCategory := client.DlpDataTagCategory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `tags` | `[]any` | Tags to create with the category. |
| `template_id` | `string` |  |

#### Example: Load

```go
dlpDataTagCategory, err := client.DlpDataTagCategory(nil).Load(map[string]any{"id": "dlp_data_tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTagCategory) // the loaded record
```

#### Example: List

```go
dlpDataTagCategorys, err := client.DlpDataTagCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTagCategorys) // the array of records
```

#### Example: Create

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


### DlpDataTagCategoryTemplate

Create an instance: `dlpDataTagCategoryTemplate := client.DlpDataTagCategoryTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpDataTagCategoryTemplate, err := client.DlpDataTagCategoryTemplate(nil).Load(map[string]any{"id": "dlp_data_tag_category_template_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTagCategoryTemplate) // the loaded record
```

#### Example: List

```go
dlpDataTagCategoryTemplates, err := client.DlpDataTagCategoryTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataTagCategoryTemplates) // the array of records
```


### DlpDataset

Create an instance: `dlpDataset := client.DlpDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `case_sensitive` | `bool` | Only applies to custom word lists. |
| `description` | `string` | The description of the dataset. |
| `encoding_version` | `int` | Dataset encoding version Non-secret custom word lists with no header are always version 1. |
| `id` | `string` |  |
| `name` | `string` | The name of the dataset, must be unique. |
| `result` | `map[string]any` |  |
| `secret` | `bool` | Generate a secret dataset. |

#### Example: Load

```go
dlpDataset, err := client.DlpDataset(nil).Load(map[string]any{"id": "dlp_dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDataset) // the loaded record
```

#### Example: List

```go
dlpDatasets, err := client.DlpDataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDatasets) // the array of records
```

#### Example: Create

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


### DlpDocumentFingerprint

Create an instance: `dlpDocumentFingerprint := client.DlpDocumentFingerprint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `match_percent` | `int` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpDocumentFingerprint, err := client.DlpDocumentFingerprint(nil).Load(map[string]any{"id": "dlp_document_fingerprint_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDocumentFingerprint) // the loaded record
```

#### Example: List

```go
dlpDocumentFingerprints, err := client.DlpDocumentFingerprint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpDocumentFingerprints) // the array of records
```

#### Example: Create

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


### DlpEmail

Create an instance: `dlpEmail := client.DlpEmail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `any` |  |
| `auth_requirements` | `any` |  |
| `conditions` | `[]any` | Triggered if all conditions match. |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `name` | `string` |  |
| `new_priorities` | `map[string]any` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpEmail, err := client.DlpEmail(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpEmail) // the loaded record
```

#### Example: List

```go
dlpEmails, err := client.DlpEmail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpEmails) // the array of records
```

#### Example: Create

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


### DlpEntry

Create an instance: `dlpEntry := client.DlpEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pattern` | `map[string]any` |  |
| `profile_id` | `string` |  |
| `result` | `any` |  |

#### Example: Load

```go
dlpEntry, err := client.DlpEntry(nil).Load(map[string]any{"id": "dlp_entry_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpEntry) // the loaded record
```

#### Example: List

```go
dlpEntrys, err := client.DlpEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpEntrys) // the array of records
```

#### Example: Create

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


### DlpIntegrationEntry

Create an instance: `dlpIntegrationEntry := client.DlpIntegrationEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `entry_id` | `string` |  |
| `profile_id` | `string` | This field is not used as the owning profile. |

#### Example: Create

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


### DlpPredefinedEntry

Create an instance: `dlpPredefinedEntry := client.DlpPredefinedEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `entry_id` | `string` |  |
| `profile_id` | `string` | This field is not used as the owning profile. |

#### Example: Create

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


### DlpProfile

Create an instance: `dlpProfile := client.DlpProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_context_enabled` | `bool` |  |
| `allowed_match_count` | `int` | Related DLP policies will trigger when the match count exceeds the number set. |
| `confidence_threshold` | `string` |  |
| `context_awareness` | `map[string]any` | Scan the context of predefined entries to only return matches surrounded by keywords. |
| `data_classes` | `[]any` | Data class IDs to associate with the profile. |
| `data_tags` | `[]any` | Data tag IDs to associate with the profile. |
| `description` | `string` | The description of the profile. |
| `entries` | `[]any` | Custom entries from this profile. |
| `id` | `string` |  |
| `name` | `string` |  |
| `ocr_enabled` | `bool` |  |
| `result` | `any` |  |
| `sensitivity_levels` | `[]any` | Sensitivity levels to associate with the profile. |
| `shared_entries` | `[]any` | Entries from other profiles (e.g. |

#### Example: Load

```go
dlpProfile, err := client.DlpProfile(nil).Load(map[string]any{"id": "dlp_profile_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpProfile) // the loaded record
```

#### Example: List

```go
dlpProfiles, err := client.DlpProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpProfiles) // the array of records
```

#### Example: Create

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


### DlpSensitivityGroup

Create an instance: `dlpSensitivityGroup := client.DlpSensitivityGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `levels` | `[]any` | Levels to create with the group. |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `template_id` | `string` |  |

#### Example: Load

```go
dlpSensitivityGroup, err := client.DlpSensitivityGroup(nil).Load(map[string]any{"id": "dlp_sensitivity_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityGroup) // the loaded record
```

#### Example: List

```go
dlpSensitivityGroups, err := client.DlpSensitivityGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityGroups) // the array of records
```

#### Example: Create

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


### DlpSensitivityGroupTemplate

Create an instance: `dlpSensitivityGroupTemplate := client.DlpSensitivityGroupTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpSensitivityGroupTemplate, err := client.DlpSensitivityGroupTemplate(nil).Load(map[string]any{"id": "dlp_sensitivity_group_template_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityGroupTemplate) // the loaded record
```

#### Example: List

```go
dlpSensitivityGroupTemplates, err := client.DlpSensitivityGroupTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityGroupTemplates) // the array of records
```


### DlpSensitivityLevel

Create an instance: `dlpSensitivityLevel := client.DlpSensitivityLevel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dlpSensitivityLevel, err := client.DlpSensitivityLevel(nil).Load(map[string]any{"id": "dlp_sensitivity_level_id", "account_id": "account_id", "sensitivity_group_id": "sensitivity_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityLevel) // the loaded record
```

#### Example: List

```go
dlpSensitivityLevels, err := client.DlpSensitivityLevel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSensitivityLevels) // the array of records
```

#### Example: Create

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


### DlpSetting

Create an instance: `dlpSetting := client.DlpSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_context_analysis` | `bool` | Whether AI context analysis is enabled at the account level. |
| `masking_level` | `any` |  |
| `max_match_bytes` | `int` | Maximum number of bytes that the regular expression can match. |
| `ocr` | `bool` | Whether OCR is enabled at the account level. |
| `payload_logging` | `any` |  |
| `public_key` | `string` | Base64-encoded public key for encrypting payload logs. |
| `regex` | `string` |  |
| `result` | `map[string]any` | DLP account-level settings response. |

#### Example: Load

```go
dlpSetting, err := client.DlpSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dlpSetting) // the loaded record
```

#### Example: Create

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


### Policy

Create an instance: `policy := client.Policy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `map[string]any` | Actions to execute when this policy is triggered, grouped by action type. |
| `applies_to_all_integrations` | `bool` | When true, the policy applies to all integrations for the account. |
| `description` | `string` | Optional description of what this policy does. |
| `display_name` | `string` | Display name for the policy configuration. |
| `enabled` | `bool` | Boolean specifying if the policy is enabled or disabled. |
| `errors` | `[]any` |  |
| `finding_type_id` | `string` | The finding type this policy is associated with. |
| `id` | `string` |  |
| `integration_ids` | `[]any` | The integrations this policy applies to. |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Response body for a policy configuration. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
policy, err := client.Policy(nil).Load(map[string]any{"id": "policy_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policy) // the loaded record
```

#### Example: List

```go
policys, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(policys) // the array of records
```

#### Example: Create

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


### PostureApiCreateRemediationJob

Create an instance: `postureApiCreateRemediationJob := client.PostureApiCreateRemediationJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | Array of error messages. |
| `finding_instance_ids` | `[]any` | UUIDs identifying Finding Instances. |
| `messages` | `[]any` | Array of informational messages. |
| `remediation_type_id` | `string` | A UUID identifying this Remediation Type. |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Create

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


### PostureApiCreateWebhookJob

Create an instance: `postureApiCreateWebhookJob := client.PostureApiCreateWebhookJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `finding_instance_ids` | `[]any` | Array of finding instance IDs to send to the webhooks. |
| `webhook_ids` | `[]any` | Array of webhook IDs to trigger jobs for. |

#### Example: Create

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


### PostureApiExportJob

Create an instance: `postureApiExportJob := client.PostureApiExportJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Filter for archived status. |
| `dlp_profile_id` | `[]any` | Filter by DLP profile IDs. |
| `dlp_profile_information` | `[]any` | DLP profile metadata for the export. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `ignored` | `bool` | Filter for only the ignored findings. |
| `integration_id` | `[]any` | Filter by integration IDs. |
| `max_affliction_date` | `string` | Filter to view findings that occurred on or before the affliction date. |
| `max_updated_at` | `string` | Filter to view remediation jobs updated on or before this datetime. |
| `messages` | `[]any` |  |
| `min_affliction_date` | `string` | Filter to view findings that occurred on or after the affliction date. |
| `min_updated_at` | `string` | Filter to view remediation jobs updated on or after this datetime. |
| `orders` | `[]any` | Ordering specifications for the export. |
| `product` | `string` | Filter by finding's category product. |
| `result` | `map[string]any` | Information about an export job. |
| `search` | `string` | A search term. |
| `severities` | `[]any` | Filter by severity levels. |
| `status` | `[]any` | Filter by remediation job status. |
| `success` | `bool` | Whether the API call was successful. |
| `vendors` | `[]any` | Filter by vendor types. |

#### Example: Load

```go
postureApiExportJob, err := client.PostureApiExportJob(nil).Load(map[string]any{"id": "posture_api_export_job_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiExportJob) // the loaded record
```

#### Example: Create

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


### PostureApiFinding

Create an instance: `postureApiFinding := client.PostureApiFinding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checks` | `[]any` | A list of finding IDs to pass along. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `new_severity` | `int` | The numeric severity value to apply to the finding. |
| `result` | `map[string]any` | Aggregated finding information with counts and metadata. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
postureApiFinding, err := client.PostureApiFinding(nil).Load(map[string]any{"id": "posture_api_finding_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiFinding) // the loaded record
```

#### Example: Create

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


### PostureApiFindingInstance

Create an instance: `postureApiFindingInstance := client.PostureApiFindingInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_instances` | `[]any` | A list of finding instance IDs to pass along. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A specific instance of a security finding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
postureApiFindingInstance, err := client.PostureApiFindingInstance(nil).Load(map[string]any{"id": "posture_api_finding_instance_id", "account_id": "account_id", "finding_id": "finding_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiFindingInstance) // the loaded record
```

#### Example: Create

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


### PostureApiFindingType

Create an instance: `postureApiFindingType := client.PostureApiFindingType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Basic finding type information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
postureApiFindingType, err := client.PostureApiFindingType(nil).Load(map[string]any{"id": "posture_api_finding_type_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiFindingType) // the loaded record
```


### PostureApiPaginatedContentAssetList

Create an instance: `postureApiPaginatedContentAssetList := client.PostureApiPaginatedContentAssetList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of content asset objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedContentAssetLists, err := client.PostureApiPaginatedContentAssetList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedContentAssetLists) // the array of records
```


### PostureApiPaginatedExportJobList

Create an instance: `postureApiPaginatedExportJobList := client.PostureApiPaginatedExportJobList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of export job objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedExportJobLists, err := client.PostureApiPaginatedExportJobList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedExportJobLists) // the array of records
```


### PostureApiPaginatedFindingInstanceList

Create an instance: `postureApiPaginatedFindingInstanceList := client.PostureApiPaginatedFindingInstanceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of finding instance objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedFindingInstanceLists, err := client.PostureApiPaginatedFindingInstanceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedFindingInstanceLists) // the array of records
```


### PostureApiPaginatedFindingList

Create an instance: `postureApiPaginatedFindingList := client.PostureApiPaginatedFindingList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of finding objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedFindingLists, err := client.PostureApiPaginatedFindingList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedFindingLists) // the array of records
```


### PostureApiPaginatedFindingTypeList

Create an instance: `postureApiPaginatedFindingTypeList := client.PostureApiPaginatedFindingTypeList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of finding type objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedFindingTypeLists, err := client.PostureApiPaginatedFindingTypeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedFindingTypeLists) // the array of records
```


### PostureApiPaginatedRemediationJobList

Create an instance: `postureApiPaginatedRemediationJobList := client.PostureApiPaginatedRemediationJobList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `map[string]any` | Asset information for a remediation job. |
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

```go
postureApiPaginatedRemediationJobLists, err := client.PostureApiPaginatedRemediationJobList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedRemediationJobLists) // the array of records
```


### PostureApiPaginatedRemediationTypeList

Create an instance: `postureApiPaginatedRemediationTypeList := client.PostureApiPaginatedRemediationTypeList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | Array of remediation type objects. |
| `result_info` | `map[string]any` | Pagination and result information. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiPaginatedRemediationTypeLists, err := client.PostureApiPaginatedRemediationTypeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiPaginatedRemediationTypeLists) // the array of records
```


### PostureApiWebhook

Create an instance: `postureApiWebhook := client.PostureApiWebhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Webhook configuration for sending finding notifications. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
postureApiWebhook, err := client.PostureApiWebhook(nil).Load(map[string]any{"id": "posture_api_webhook_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiWebhook) // the loaded record
```

#### Example: Create

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


### PostureApiWebhookList

Create an instance: `postureApiWebhookList := client.PostureApiWebhookList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` | List of webhook configurations. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
postureApiWebhookLists, err := client.PostureApiWebhookList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postureApiWebhookLists) // the array of records
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication_type` | `string` | Type of authentication used for the webhook. |
| `destination_url` | `string` | Target URL for the webhook configuration. |
| `headers` | `[]any` | List of custom headers to include in webhook requests. |
| `id` | `string` |  |
| `label` | `string` | Account-specified display label for the webhook configuration. |
| `signing_secret` | `string` | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| `status` | `string` | Status of the webhook configuration. |

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-dlp-sdk/go/
├── cloudflare-dlp.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-dlp-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
dlpdatatagcategory := client.DlpDataTagCategory(nil)
dlpdatatagcategory.List(nil, nil)

// dlpdatatagcategory.Data() now returns the dlpdatatagcategory data from the last list
// dlpdatatagcategory.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
