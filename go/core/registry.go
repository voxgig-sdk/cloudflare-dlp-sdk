package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDlpCustomPromptTopicEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDataClassEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDataTagEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDataTagCategoryEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDataTagCategoryTemplateEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDatasetEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpDocumentFingerprintEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpEmailEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpEntryEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpIntegrationEntryEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpPredefinedEntryEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpProfileEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpSensitivityGroupEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpSensitivityGroupTemplateEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpSensitivityLevelEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewDlpSettingEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPolicyEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiCreateRemediationJobEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiCreateWebhookJobEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiExportJobEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiFindingEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiFindingInstanceEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiFindingTypeEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedContentAssetListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedExportJobListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedFindingInstanceListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedFindingListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedFindingTypeListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedRemediationJobListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiPaginatedRemediationTypeListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiWebhookEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewPostureApiWebhookListEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

var NewWebhookEntityFunc func(client *CloudflareDlpSDK, entopts map[string]any) CloudflareDlpEntity

