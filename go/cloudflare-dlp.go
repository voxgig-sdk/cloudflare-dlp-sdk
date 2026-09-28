package voxgigcloudflaredlpsdk

import (
	"github.com/voxgig-sdk/cloudflare-dlp-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-dlp-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-dlp-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-dlp-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareDlpSDK = core.CloudflareDlpSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareDlpEntity = core.CloudflareDlpEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareDlpError = core.CloudflareDlpError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDlpCustomPromptTopicEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpCustomPromptTopicEntity(client, entopts)
	}
	core.NewDlpDataClassEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDataClassEntity(client, entopts)
	}
	core.NewDlpDataTagEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDataTagEntity(client, entopts)
	}
	core.NewDlpDataTagCategoryEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDataTagCategoryEntity(client, entopts)
	}
	core.NewDlpDataTagCategoryTemplateEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDataTagCategoryTemplateEntity(client, entopts)
	}
	core.NewDlpDatasetEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDatasetEntity(client, entopts)
	}
	core.NewDlpDocumentFingerprintEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpDocumentFingerprintEntity(client, entopts)
	}
	core.NewDlpEmailEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpEmailEntity(client, entopts)
	}
	core.NewDlpEntryEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpEntryEntity(client, entopts)
	}
	core.NewDlpIntegrationEntryEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpIntegrationEntryEntity(client, entopts)
	}
	core.NewDlpPredefinedEntryEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpPredefinedEntryEntity(client, entopts)
	}
	core.NewDlpProfileEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpProfileEntity(client, entopts)
	}
	core.NewDlpSensitivityGroupEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpSensitivityGroupEntity(client, entopts)
	}
	core.NewDlpSensitivityGroupTemplateEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpSensitivityGroupTemplateEntity(client, entopts)
	}
	core.NewDlpSensitivityLevelEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpSensitivityLevelEntity(client, entopts)
	}
	core.NewDlpSettingEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewDlpSettingEntity(client, entopts)
	}
	core.NewPolicyEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPolicyEntity(client, entopts)
	}
	core.NewPostureApiCreateRemediationJobEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiCreateRemediationJobEntity(client, entopts)
	}
	core.NewPostureApiCreateWebhookJobEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiCreateWebhookJobEntity(client, entopts)
	}
	core.NewPostureApiExportJobEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiExportJobEntity(client, entopts)
	}
	core.NewPostureApiFindingEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiFindingEntity(client, entopts)
	}
	core.NewPostureApiFindingInstanceEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiFindingInstanceEntity(client, entopts)
	}
	core.NewPostureApiFindingTypeEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiFindingTypeEntity(client, entopts)
	}
	core.NewPostureApiPaginatedContentAssetListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedContentAssetListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedExportJobListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedExportJobListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedFindingInstanceListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedFindingInstanceListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedFindingListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedFindingListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedFindingTypeListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedFindingTypeListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedRemediationJobListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedRemediationJobListEntity(client, entopts)
	}
	core.NewPostureApiPaginatedRemediationTypeListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiPaginatedRemediationTypeListEntity(client, entopts)
	}
	core.NewPostureApiWebhookEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiWebhookEntity(client, entopts)
	}
	core.NewPostureApiWebhookListEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewPostureApiWebhookListEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.CloudflareDlpSDK, entopts map[string]any) core.CloudflareDlpEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareDlpSDK = core.NewCloudflareDlpSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareDlpSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareDlpSDK  { return NewCloudflareDlpSDK(nil) }
func Test() *CloudflareDlpSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
