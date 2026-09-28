package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-dlp-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"dlp_custom_prompt_topic | dlp_data_class | dlp_data_tag | dlp_data_tag_category | dlp_data_tag_category_template | dlp_dataset | dlp_document_fingerprint | dlp_email | dlp_entry | dlp_integration_entry | dlp_predefined_entry | dlp_profile | dlp_sensitivity_group | dlp_sensitivity_group_template | dlp_sensitivity_level | dlp_setting | policy | posture_api_create_remediation_job | posture_api_create_webhook_job | posture_api_export_job | posture_api_finding | posture_api_finding_instance | posture_api_finding_type | posture_api_paginated_content_asset_list | posture_api_paginated_export_job_list | posture_api_paginated_finding_instance_list | posture_api_paginated_finding_list | posture_api_paginated_finding_type_list | posture_api_paginated_remediation_job_list | posture_api_paginated_remediation_type_list | posture_api_webhook | posture_api_webhook_list | webhook"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareDlpSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-dlp_list",
		Description: "List records from CloudflareDlp. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-dlp_load",
		Description: "Load a single record from CloudflareDlp. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareDlpSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareDlpSDK, name string) (sdk.CloudflareDlpEntity, error) {
	switch strings.ToLower(name) {
	case "dlp_custom_prompt_topic":
		return client.DlpCustomPromptTopic(nil), nil
	case "dlp_data_class":
		return client.DlpDataClass(nil), nil
	case "dlp_data_tag":
		return client.DlpDataTag(nil), nil
	case "dlp_data_tag_category":
		return client.DlpDataTagCategory(nil), nil
	case "dlp_data_tag_category_template":
		return client.DlpDataTagCategoryTemplate(nil), nil
	case "dlp_dataset":
		return client.DlpDataset(nil), nil
	case "dlp_document_fingerprint":
		return client.DlpDocumentFingerprint(nil), nil
	case "dlp_email":
		return client.DlpEmail(nil), nil
	case "dlp_entry":
		return client.DlpEntry(nil), nil
	case "dlp_integration_entry":
		return client.DlpIntegrationEntry(nil), nil
	case "dlp_predefined_entry":
		return client.DlpPredefinedEntry(nil), nil
	case "dlp_profile":
		return client.DlpProfile(nil), nil
	case "dlp_sensitivity_group":
		return client.DlpSensitivityGroup(nil), nil
	case "dlp_sensitivity_group_template":
		return client.DlpSensitivityGroupTemplate(nil), nil
	case "dlp_sensitivity_level":
		return client.DlpSensitivityLevel(nil), nil
	case "dlp_setting":
		return client.DlpSetting(nil), nil
	case "policy":
		return client.Policy(nil), nil
	case "posture_api_create_remediation_job":
		return client.PostureApiCreateRemediationJob(nil), nil
	case "posture_api_create_webhook_job":
		return client.PostureApiCreateWebhookJob(nil), nil
	case "posture_api_export_job":
		return client.PostureApiExportJob(nil), nil
	case "posture_api_finding":
		return client.PostureApiFinding(nil), nil
	case "posture_api_finding_instance":
		return client.PostureApiFindingInstance(nil), nil
	case "posture_api_finding_type":
		return client.PostureApiFindingType(nil), nil
	case "posture_api_paginated_content_asset_list":
		return client.PostureApiPaginatedContentAssetList(nil), nil
	case "posture_api_paginated_export_job_list":
		return client.PostureApiPaginatedExportJobList(nil), nil
	case "posture_api_paginated_finding_instance_list":
		return client.PostureApiPaginatedFindingInstanceList(nil), nil
	case "posture_api_paginated_finding_list":
		return client.PostureApiPaginatedFindingList(nil), nil
	case "posture_api_paginated_finding_type_list":
		return client.PostureApiPaginatedFindingTypeList(nil), nil
	case "posture_api_paginated_remediation_job_list":
		return client.PostureApiPaginatedRemediationJobList(nil), nil
	case "posture_api_paginated_remediation_type_list":
		return client.PostureApiPaginatedRemediationTypeList(nil), nil
	case "posture_api_webhook":
		return client.PostureApiWebhook(nil), nil
	case "posture_api_webhook_list":
		return client.PostureApiWebhookList(nil), nil
	case "webhook":
		return client.Webhook(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
