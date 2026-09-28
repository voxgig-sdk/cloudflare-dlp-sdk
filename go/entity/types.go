// Typed models for the CloudflareDlp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-dlp-sdk/go/core"
)

// DlpCustomPromptTopic is the typed data model for the dlp_custom_prompt_topic entity.
type DlpCustomPromptTopic struct {
}

// DlpCustomPromptTopicLoadMatch is the typed request payload for DlpCustomPromptTopic.LoadTyped.
type DlpCustomPromptTopicLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpCustomPromptTopicListMatch is the typed request payload for DlpCustomPromptTopic.ListTyped.
type DlpCustomPromptTopicListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpCustomPromptTopicCreateData is the typed request payload for DlpCustomPromptTopic.CreateTyped.
type DlpCustomPromptTopicCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	ProfileId *string `json:"profile_id,omitempty"`
	Result map[string]any `json:"result"`
	Topic string `json:"topic"`
}

// DlpCustomPromptTopicUpdateData is the typed request payload for DlpCustomPromptTopic.UpdateTyped.
type DlpCustomPromptTopicUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	ProfileId *string `json:"profile_id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Topic *string `json:"topic,omitempty"`
}

// DlpCustomPromptTopicRemoveMatch is the typed request payload for DlpCustomPromptTopic.RemoveTyped.
type DlpCustomPromptTopicRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataClass is the typed data model for the dlp_data_class entity.
type DlpDataClass struct {
}

// DlpDataClassLoadMatch is the typed request payload for DlpDataClass.LoadTyped.
type DlpDataClassLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataClassListMatch is the typed request payload for DlpDataClass.ListTyped.
type DlpDataClassListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpDataClassCreateData is the typed request payload for DlpDataClass.CreateTyped.
type DlpDataClassCreateData struct {
	AccountId string `json:"account_id"`
	DataTags []any `json:"data_tags"`
	Description *string `json:"description,omitempty"`
	Expression string `json:"expression"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	SensitivityLevels []any `json:"sensitivity_levels"`
}

// DlpDataClassUpdateData is the typed request payload for DlpDataClass.UpdateTyped.
type DlpDataClassUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	DataTags *[]any `json:"data_tags,omitempty"`
	Description *string `json:"description,omitempty"`
	Expression *string `json:"expression,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SensitivityLevels *[]any `json:"sensitivity_levels,omitempty"`
}

// DlpDataClassRemoveMatch is the typed request payload for DlpDataClass.RemoveTyped.
type DlpDataClassRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataTag is the typed data model for the dlp_data_tag entity.
type DlpDataTag struct {
}

// DlpDataTagLoadMatch is the typed request payload for DlpDataTag.LoadTyped.
type DlpDataTagLoadMatch struct {
	AccountId string `json:"account_id"`
	DataTagCategoryId string `json:"data_tag_category_id"`
	Id string `json:"id"`
}

// DlpDataTagListMatch is the typed request payload for DlpDataTag.ListTyped.
type DlpDataTagListMatch struct {
	AccountId string `json:"account_id"`
	DataTagCategoryId string `json:"data_tag_category_id"`
}

// DlpDataTagCreateData is the typed request payload for DlpDataTag.CreateTyped.
type DlpDataTagCreateData struct {
	AccountId string `json:"account_id"`
	DataTagCategoryId string `json:"data_tag_category_id"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
}

// DlpDataTagUpdateData is the typed request payload for DlpDataTag.UpdateTyped.
type DlpDataTagUpdateData struct {
	AccountId string `json:"account_id"`
	DataTagCategoryId string `json:"data_tag_category_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DlpDataTagRemoveMatch is the typed request payload for DlpDataTag.RemoveTyped.
type DlpDataTagRemoveMatch struct {
	AccountId string `json:"account_id"`
	DataTagCategoryId string `json:"data_tag_category_id"`
	Id string `json:"id"`
}

// DlpDataTagCategory is the typed data model for the dlp_data_tag_category entity.
type DlpDataTagCategory struct {
}

// DlpDataTagCategoryLoadMatch is the typed request payload for DlpDataTagCategory.LoadTyped.
type DlpDataTagCategoryLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataTagCategoryListMatch is the typed request payload for DlpDataTagCategory.ListTyped.
type DlpDataTagCategoryListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpDataTagCategoryCreateData is the typed request payload for DlpDataTagCategory.CreateTyped.
type DlpDataTagCategoryCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	Tags *[]any `json:"tags,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
}

// DlpDataTagCategoryUpdateData is the typed request payload for DlpDataTagCategory.UpdateTyped.
type DlpDataTagCategoryUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
}

// DlpDataTagCategoryRemoveMatch is the typed request payload for DlpDataTagCategory.RemoveTyped.
type DlpDataTagCategoryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataTagCategoryTemplate is the typed data model for the dlp_data_tag_category_template entity.
type DlpDataTagCategoryTemplate struct {
}

// DlpDataTagCategoryTemplateLoadMatch is the typed request payload for DlpDataTagCategoryTemplate.LoadTyped.
type DlpDataTagCategoryTemplateLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDataTagCategoryTemplateListMatch is the typed request payload for DlpDataTagCategoryTemplate.ListTyped.
type DlpDataTagCategoryTemplateListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpDataset is the typed data model for the dlp_dataset entity.
type DlpDataset struct {
}

// DlpDatasetLoadMatch is the typed request payload for DlpDataset.LoadTyped.
type DlpDatasetLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDatasetListMatch is the typed request payload for DlpDataset.ListTyped.
type DlpDatasetListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpDatasetCreateData is the typed request payload for DlpDataset.CreateTyped.
type DlpDatasetCreateData struct {
	AccountId string `json:"account_id"`
	DatasetId *string `json:"dataset_id,omitempty"`
	EntryId *string `json:"entry_id,omitempty"`
	VersionId *int `json:"version_id,omitempty"`
	Version *int `json:"version,omitempty"`
	CaseSensitive *bool `json:"case_sensitive,omitempty"`
	Description *string `json:"description,omitempty"`
	EncodingVersion *int `json:"encoding_version,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	Secret *bool `json:"secret,omitempty"`
}

// DlpDatasetUpdateData is the typed request payload for DlpDataset.UpdateTyped.
type DlpDatasetUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CaseSensitive *bool `json:"case_sensitive,omitempty"`
	Description *string `json:"description,omitempty"`
	EncodingVersion *int `json:"encoding_version,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Secret *bool `json:"secret,omitempty"`
}

// DlpDatasetRemoveMatch is the typed request payload for DlpDataset.RemoveTyped.
type DlpDatasetRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDocumentFingerprint is the typed data model for the dlp_document_fingerprint entity.
type DlpDocumentFingerprint struct {
}

// DlpDocumentFingerprintLoadMatch is the typed request payload for DlpDocumentFingerprint.LoadTyped.
type DlpDocumentFingerprintLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpDocumentFingerprintListMatch is the typed request payload for DlpDocumentFingerprint.ListTyped.
type DlpDocumentFingerprintListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpDocumentFingerprintCreateData is the typed request payload for DlpDocumentFingerprint.CreateTyped.
type DlpDocumentFingerprintCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Description *string `json:"description,omitempty"`
	MatchPercent *int `json:"match_percent,omitempty"`
	Name *string `json:"name,omitempty"`
	Result map[string]any `json:"result"`
}

// DlpDocumentFingerprintUpdateData is the typed request payload for DlpDocumentFingerprint.UpdateTyped.
type DlpDocumentFingerprintUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	MatchPercent *int `json:"match_percent,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DlpDocumentFingerprintRemoveMatch is the typed request payload for DlpDocumentFingerprint.RemoveTyped.
type DlpDocumentFingerprintRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpEmail is the typed data model for the dlp_email entity.
type DlpEmail struct {
}

// DlpEmailLoadMatch is the typed request payload for DlpEmail.LoadTyped.
type DlpEmailLoadMatch struct {
	AccountId string `json:"account_id"`
	RuleId *string `json:"rule_id,omitempty"`
}

// DlpEmailListMatch is the typed request payload for DlpEmail.ListTyped.
type DlpEmailListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpEmailCreateData is the typed request payload for DlpEmail.CreateTyped.
type DlpEmailCreateData struct {
	AccountId string `json:"account_id"`
	Action any `json:"action"`
	AuthRequirements any `json:"auth_requirements"`
	Conditions []any `json:"conditions"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Name string `json:"name"`
	NewPriorities map[string]any `json:"new_priorities"`
	Result map[string]any `json:"result"`
}

// DlpEmailUpdateData is the typed request payload for DlpEmail.UpdateTyped.
type DlpEmailUpdateData struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
	Action *any `json:"action,omitempty"`
	AuthRequirements *any `json:"auth_requirements,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	NewPriorities *map[string]any `json:"new_priorities,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DlpEmailRemoveMatch is the typed request payload for DlpEmail.RemoveTyped.
type DlpEmailRemoveMatch struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
}

// DlpEntry is the typed data model for the dlp_entry entity.
type DlpEntry struct {
}

// DlpEntryLoadMatch is the typed request payload for DlpEntry.LoadTyped.
type DlpEntryLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpEntryListMatch is the typed request payload for DlpEntry.ListTyped.
type DlpEntryListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpEntryCreateData is the typed request payload for DlpEntry.CreateTyped.
type DlpEntryCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Pattern map[string]any `json:"pattern"`
	ProfileId *string `json:"profile_id,omitempty"`
	Result *any `json:"result,omitempty"`
}

// DlpEntryUpdateData is the typed request payload for DlpEntry.UpdateTyped.
type DlpEntryUpdateData struct {
	AccountId string `json:"account_id"`
	EntryId *string `json:"entry_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	Pattern *map[string]any `json:"pattern,omitempty"`
	ProfileId *string `json:"profile_id,omitempty"`
	Result *any `json:"result,omitempty"`
}

// DlpEntryRemoveMatch is the typed request payload for DlpEntry.RemoveTyped.
type DlpEntryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpIntegrationEntry is the typed data model for the dlp_integration_entry entity.
type DlpIntegrationEntry struct {
}

// DlpIntegrationEntryCreateData is the typed request payload for DlpIntegrationEntry.CreateTyped.
type DlpIntegrationEntryCreateData struct {
	AccountId string `json:"account_id"`
	Enabled bool `json:"enabled"`
	EntryId string `json:"entry_id"`
	ProfileId *string `json:"profile_id,omitempty"`
}

// DlpIntegrationEntryUpdateData is the typed request payload for DlpIntegrationEntry.UpdateTyped.
type DlpIntegrationEntryUpdateData struct {
	AccountId string `json:"account_id"`
	EntryId string `json:"entry_id"`
	Enabled *bool `json:"enabled,omitempty"`
	ProfileId *string `json:"profile_id,omitempty"`
}

// DlpIntegrationEntryRemoveMatch is the typed request payload for DlpIntegrationEntry.RemoveTyped.
type DlpIntegrationEntryRemoveMatch struct {
	AccountId string `json:"account_id"`
	EntryId string `json:"entry_id"`
}

// DlpPredefinedEntry is the typed data model for the dlp_predefined_entry entity.
type DlpPredefinedEntry struct {
}

// DlpPredefinedEntryCreateData is the typed request payload for DlpPredefinedEntry.CreateTyped.
type DlpPredefinedEntryCreateData struct {
	AccountId string `json:"account_id"`
	Enabled bool `json:"enabled"`
	EntryId string `json:"entry_id"`
	ProfileId *string `json:"profile_id,omitempty"`
}

// DlpPredefinedEntryRemoveMatch is the typed request payload for DlpPredefinedEntry.RemoveTyped.
type DlpPredefinedEntryRemoveMatch struct {
	AccountId string `json:"account_id"`
	EntryId string `json:"entry_id"`
}

// DlpProfile is the typed data model for the dlp_profile entity.
type DlpProfile struct {
}

// DlpProfileLoadMatch is the typed request payload for DlpProfile.LoadTyped.
type DlpProfileLoadMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	ProfileId *string `json:"profile_id,omitempty"`
}

// DlpProfileListMatch is the typed request payload for DlpProfile.ListTyped.
type DlpProfileListMatch struct {
	AccountId string `json:"account_id"`
	All *bool `json:"all,omitempty"`
}

// DlpProfileCreateData is the typed request payload for DlpProfile.CreateTyped.
type DlpProfileCreateData struct {
	AccountId string `json:"account_id"`
	AiContextEnabled *bool `json:"ai_context_enabled,omitempty"`
	AllowedMatchCount *int `json:"allowed_match_count,omitempty"`
	ConfidenceThreshold *string `json:"confidence_threshold,omitempty"`
	ContextAwareness map[string]any `json:"context_awareness"`
	DataClasses *[]any `json:"data_classes,omitempty"`
	DataTags *[]any `json:"data_tags,omitempty"`
	Description *string `json:"description,omitempty"`
	Entries *[]any `json:"entries,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	OcrEnabled *bool `json:"ocr_enabled,omitempty"`
	Result *any `json:"result,omitempty"`
	SensitivityLevels *[]any `json:"sensitivity_levels,omitempty"`
	SharedEntries *[]any `json:"shared_entries,omitempty"`
}

// DlpProfileUpdateData is the typed request payload for DlpProfile.UpdateTyped.
type DlpProfileUpdateData struct {
	AccountId string `json:"account_id"`
	ProfileId string `json:"profile_id"`
	AiContextEnabled *bool `json:"ai_context_enabled,omitempty"`
	AllowedMatchCount *int `json:"allowed_match_count,omitempty"`
	ConfidenceThreshold *string `json:"confidence_threshold,omitempty"`
	ContextAwareness *map[string]any `json:"context_awareness,omitempty"`
	DataClasses *[]any `json:"data_classes,omitempty"`
	DataTags *[]any `json:"data_tags,omitempty"`
	Description *string `json:"description,omitempty"`
	Entries *[]any `json:"entries,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OcrEnabled *bool `json:"ocr_enabled,omitempty"`
	Result *any `json:"result,omitempty"`
	SensitivityLevels *[]any `json:"sensitivity_levels,omitempty"`
	SharedEntries *[]any `json:"shared_entries,omitempty"`
}

// DlpProfileRemoveMatch is the typed request payload for DlpProfile.RemoveTyped.
type DlpProfileRemoveMatch struct {
	AccountId string `json:"account_id"`
	ProfileId string `json:"profile_id"`
}

// DlpSensitivityGroup is the typed data model for the dlp_sensitivity_group entity.
type DlpSensitivityGroup struct {
}

// DlpSensitivityGroupLoadMatch is the typed request payload for DlpSensitivityGroup.LoadTyped.
type DlpSensitivityGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpSensitivityGroupListMatch is the typed request payload for DlpSensitivityGroup.ListTyped.
type DlpSensitivityGroupListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpSensitivityGroupCreateData is the typed request payload for DlpSensitivityGroup.CreateTyped.
type DlpSensitivityGroupCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Levels *[]any `json:"levels,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	TemplateId *string `json:"template_id,omitempty"`
}

// DlpSensitivityGroupUpdateData is the typed request payload for DlpSensitivityGroup.UpdateTyped.
type DlpSensitivityGroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Levels *[]any `json:"levels,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
}

// DlpSensitivityGroupRemoveMatch is the typed request payload for DlpSensitivityGroup.RemoveTyped.
type DlpSensitivityGroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpSensitivityGroupTemplate is the typed data model for the dlp_sensitivity_group_template entity.
type DlpSensitivityGroupTemplate struct {
}

// DlpSensitivityGroupTemplateLoadMatch is the typed request payload for DlpSensitivityGroupTemplate.LoadTyped.
type DlpSensitivityGroupTemplateLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DlpSensitivityGroupTemplateListMatch is the typed request payload for DlpSensitivityGroupTemplate.ListTyped.
type DlpSensitivityGroupTemplateListMatch struct {
	AccountId string `json:"account_id"`
}

// DlpSensitivityLevel is the typed data model for the dlp_sensitivity_level entity.
type DlpSensitivityLevel struct {
}

// DlpSensitivityLevelLoadMatch is the typed request payload for DlpSensitivityLevel.LoadTyped.
type DlpSensitivityLevelLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	SensitivityGroupId string `json:"sensitivity_group_id"`
}

// DlpSensitivityLevelListMatch is the typed request payload for DlpSensitivityLevel.ListTyped.
type DlpSensitivityLevelListMatch struct {
	AccountId string `json:"account_id"`
	SensitivityGroupId string `json:"sensitivity_group_id"`
}

// DlpSensitivityLevelCreateData is the typed request payload for DlpSensitivityLevel.CreateTyped.
type DlpSensitivityLevelCreateData struct {
	AccountId string `json:"account_id"`
	SensitivityGroupId string `json:"sensitivity_group_id"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
}

// DlpSensitivityLevelUpdateData is the typed request payload for DlpSensitivityLevel.UpdateTyped.
type DlpSensitivityLevelUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	SensitivityGroupId string `json:"sensitivity_group_id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DlpSensitivityLevelRemoveMatch is the typed request payload for DlpSensitivityLevel.RemoveTyped.
type DlpSensitivityLevelRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	SensitivityGroupId string `json:"sensitivity_group_id"`
}

// DlpSetting is the typed data model for the dlp_setting entity.
type DlpSetting struct {
}

// DlpSettingLoadMatch is the typed request payload for DlpSetting.LoadTyped.
type DlpSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// DlpSettingCreateData is the typed request payload for DlpSetting.CreateTyped.
type DlpSettingCreateData struct {
	AccountId string `json:"account_id"`
	AiContextAnalysis *bool `json:"ai_context_analysis,omitempty"`
	MaskingLevel *any `json:"masking_level,omitempty"`
	MaxMatchBytes *int `json:"max_match_bytes,omitempty"`
	Ocr *bool `json:"ocr,omitempty"`
	PayloadLogging *any `json:"payload_logging,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	Regex string `json:"regex"`
	Result map[string]any `json:"result"`
}

// DlpSettingUpdateData is the typed request payload for DlpSetting.UpdateTyped.
type DlpSettingUpdateData struct {
	AccountId string `json:"account_id"`
	AiContextAnalysis *bool `json:"ai_context_analysis,omitempty"`
	MaskingLevel *any `json:"masking_level,omitempty"`
	MaxMatchBytes *int `json:"max_match_bytes,omitempty"`
	Ocr *bool `json:"ocr,omitempty"`
	PayloadLogging *any `json:"payload_logging,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	Regex *string `json:"regex,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DlpSettingRemoveMatch is the typed request payload for DlpSetting.RemoveTyped.
type DlpSettingRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// Policy is the typed data model for the policy entity.
type Policy struct {
}

// PolicyLoadMatch is the typed request payload for Policy.LoadTyped.
type PolicyLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PolicyListMatch is the typed request payload for Policy.ListTyped.
type PolicyListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *string `json:"cursor,omitempty"`
}

// PolicyCreateData is the typed request payload for Policy.CreateTyped.
type PolicyCreateData struct {
	AccountId string `json:"account_id"`
	Actions map[string]any `json:"actions"`
	AppliesToAllIntegrations bool `json:"applies_to_all_integrations"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"display_name"`
	Enabled bool `json:"enabled"`
	Errors []any `json:"errors"`
	FindingTypeId string `json:"finding_type_id"`
	Id *string `json:"id,omitempty"`
	IntegrationIds *[]any `json:"integration_ids,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// PolicyUpdateData is the typed request payload for Policy.UpdateTyped.
type PolicyUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Actions *map[string]any `json:"actions,omitempty"`
	AppliesToAllIntegrations *bool `json:"applies_to_all_integrations,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	FindingTypeId *string `json:"finding_type_id,omitempty"`
	IntegrationIds *[]any `json:"integration_ids,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PolicyRemoveMatch is the typed request payload for Policy.RemoveTyped.
type PolicyRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PostureApiCreateRemediationJob is the typed data model for the posture_api_create_remediation_job entity.
type PostureApiCreateRemediationJob struct {
}

// PostureApiCreateRemediationJobCreateData is the typed request payload for PostureApiCreateRemediationJob.CreateTyped.
type PostureApiCreateRemediationJobCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	FindingInstanceIds []any `json:"finding_instance_ids"`
	Messages []any `json:"messages"`
	RemediationTypeId string `json:"remediation_type_id"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// PostureApiCreateWebhookJob is the typed data model for the posture_api_create_webhook_job entity.
type PostureApiCreateWebhookJob struct {
}

// PostureApiCreateWebhookJobCreateData is the typed request payload for PostureApiCreateWebhookJob.CreateTyped.
type PostureApiCreateWebhookJobCreateData struct {
	AccountId string `json:"account_id"`
	FindingInstanceIds []any `json:"finding_instance_ids"`
	WebhookIds []any `json:"webhook_ids"`
}

// PostureApiExportJob is the typed data model for the posture_api_export_job entity.
type PostureApiExportJob struct {
}

// PostureApiExportJobLoadMatch is the typed request payload for PostureApiExportJob.LoadTyped.
type PostureApiExportJobLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PostureApiExportJobCreateData is the typed request payload for PostureApiExportJob.CreateTyped.
type PostureApiExportJobCreateData struct {
	AccountId string `json:"account_id"`
	FindingId *string `json:"finding_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DlpProfileId *[]any `json:"dlp_profile_id,omitempty"`
	DlpProfileInformation []any `json:"dlp_profile_information"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Ignored *bool `json:"ignored,omitempty"`
	IntegrationId *[]any `json:"integration_id,omitempty"`
	MaxAfflictionDate *string `json:"max_affliction_date,omitempty"`
	MaxUpdatedAt *string `json:"max_updated_at,omitempty"`
	Messages []any `json:"messages"`
	MinAfflictionDate *string `json:"min_affliction_date,omitempty"`
	MinUpdatedAt *string `json:"min_updated_at,omitempty"`
	Orders *[]any `json:"orders,omitempty"`
	Product *string `json:"product,omitempty"`
	Result map[string]any `json:"result"`
	Search *string `json:"search,omitempty"`
	Severities *[]any `json:"severities,omitempty"`
	Status *[]any `json:"status,omitempty"`
	Success bool `json:"success"`
	Vendors *[]any `json:"vendors,omitempty"`
}

// PostureApiFinding is the typed data model for the posture_api_finding entity.
type PostureApiFinding struct {
}

// PostureApiFindingLoadMatch is the typed request payload for PostureApiFinding.LoadTyped.
type PostureApiFindingLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PostureApiFindingCreateData is the typed request payload for PostureApiFinding.CreateTyped.
type PostureApiFindingCreateData struct {
	AccountId string `json:"account_id"`
	FindingId *string `json:"finding_id,omitempty"`
	Checks []any `json:"checks"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	NewSeverity int `json:"new_severity"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// PostureApiFindingInstance is the typed data model for the posture_api_finding_instance entity.
type PostureApiFindingInstance struct {
}

// PostureApiFindingInstanceLoadMatch is the typed request payload for PostureApiFindingInstance.LoadTyped.
type PostureApiFindingInstanceLoadMatch struct {
	AccountId string `json:"account_id"`
	FindingId string `json:"finding_id"`
	Id string `json:"id"`
}

// PostureApiFindingInstanceCreateData is the typed request payload for PostureApiFindingInstance.CreateTyped.
type PostureApiFindingInstanceCreateData struct {
	AccountId string `json:"account_id"`
	FindingId string `json:"finding_id"`
	CheckInstances []any `json:"check_instances"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// PostureApiFindingType is the typed data model for the posture_api_finding_type entity.
type PostureApiFindingType struct {
}

// PostureApiFindingTypeLoadMatch is the typed request payload for PostureApiFindingType.LoadTyped.
type PostureApiFindingTypeLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PostureApiPaginatedContentAssetList is the typed data model for the posture_api_paginated_content_asset_list entity.
type PostureApiPaginatedContentAssetList struct {
}

// PostureApiPaginatedContentAssetListListMatch is the typed request payload for PostureApiPaginatedContentAssetList.ListTyped.
type PostureApiPaginatedContentAssetListListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	DlpProfileId *string `json:"dlp_profile_id,omitempty"`
	IntegrationId *string `json:"integration_id,omitempty"`
	MaxAfflictionDate *string `json:"max_affliction_date,omitempty"`
	MinAfflictionDate *string `json:"min_affliction_date,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}

// PostureApiPaginatedExportJobList is the typed data model for the posture_api_paginated_export_job_list entity.
type PostureApiPaginatedExportJobList struct {
}

// PostureApiPaginatedExportJobListListMatch is the typed request payload for PostureApiPaginatedExportJobList.ListTyped.
type PostureApiPaginatedExportJobListListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PostureApiPaginatedFindingInstanceList is the typed data model for the posture_api_paginated_finding_instance_list entity.
type PostureApiPaginatedFindingInstanceList struct {
}

// PostureApiPaginatedFindingInstanceListListMatch is the typed request payload for PostureApiPaginatedFindingInstanceList.ListTyped.
type PostureApiPaginatedFindingInstanceListListMatch struct {
	AccountId string `json:"account_id"`
	FindingId string `json:"finding_id"`
	Archived *bool `json:"archived,omitempty"`
	AssetId *[]any `json:"asset_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	FindingInstanceId *[]any `json:"finding_instance_id,omitempty"`
	MaxAfflictionDate *string `json:"max_affliction_date,omitempty"`
	MinAfflictionDate *string `json:"min_affliction_date,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	RemediationStatus *[]any `json:"remediation_status,omitempty"`
	Search *string `json:"search,omitempty"`
}

// PostureApiPaginatedFindingList is the typed data model for the posture_api_paginated_finding_list entity.
type PostureApiPaginatedFindingList struct {
}

// PostureApiPaginatedFindingListListMatch is the typed request payload for PostureApiPaginatedFindingList.ListTyped.
type PostureApiPaginatedFindingListListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	FindingTypeId *string `json:"finding_type_id,omitempty"`
	Ignored *bool `json:"ignored,omitempty"`
	IntegrationId *string `json:"integration_id,omitempty"`
	MaxAfflictionDate *string `json:"max_affliction_date,omitempty"`
	MinAfflictionDate *string `json:"min_affliction_date,omitempty"`
	Observation *string `json:"observation,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Product *string `json:"product,omitempty"`
	Search *string `json:"search,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Type *string `json:"type,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}

// PostureApiPaginatedFindingTypeList is the typed data model for the posture_api_paginated_finding_type_list entity.
type PostureApiPaginatedFindingTypeList struct {
}

// PostureApiPaginatedFindingTypeListListMatch is the typed request payload for PostureApiPaginatedFindingTypeList.ListTyped.
type PostureApiPaginatedFindingTypeListListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Vendor *[]any `json:"vendor,omitempty"`
}

// PostureApiPaginatedRemediationJobList is the typed data model for the posture_api_paginated_remediation_job_list entity.
type PostureApiPaginatedRemediationJobList struct {
}

// PostureApiPaginatedRemediationJobListListMatch is the typed request payload for PostureApiPaginatedRemediationJobList.ListTyped.
type PostureApiPaginatedRemediationJobListListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	IntegrationId *string `json:"integration_id,omitempty"`
	MaxUpdatedAt *string `json:"max_updated_at,omitempty"`
	MinUpdatedAt *string `json:"min_updated_at,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Status *string `json:"status,omitempty"`
	TriggeredByActor *[]any `json:"triggered_by_actor,omitempty"`
}

// PostureApiPaginatedRemediationTypeList is the typed data model for the posture_api_paginated_remediation_type_list entity.
type PostureApiPaginatedRemediationTypeList struct {
}

// PostureApiPaginatedRemediationTypeListListMatch is the typed request payload for PostureApiPaginatedRemediationTypeList.ListTyped.
type PostureApiPaginatedRemediationTypeListListMatch struct {
	AccountId string `json:"account_id"`
	FindingTypeId string `json:"finding_type_id"`
	Cursor *string `json:"cursor,omitempty"`
	IntegrationId *string `json:"integration_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PostureApiWebhook is the typed data model for the posture_api_webhook entity.
type PostureApiWebhook struct {
}

// PostureApiWebhookLoadMatch is the typed request payload for PostureApiWebhook.LoadTyped.
type PostureApiWebhookLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PostureApiWebhookCreateData is the typed request payload for PostureApiWebhook.CreateTyped.
type PostureApiWebhookCreateData struct {
	AccountId string `json:"account_id"`
	WebhookId string `json:"webhook_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// PostureApiWebhookList is the typed data model for the posture_api_webhook_list entity.
type PostureApiWebhookList struct {
}

// PostureApiWebhookListListMatch is the typed request payload for PostureApiWebhookList.ListTyped.
type PostureApiWebhookListListMatch struct {
	AccountId string `json:"account_id"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	AccountId string `json:"account_id"`
	AuthenticationType string `json:"authentication_type"`
	DestinationUrl string `json:"destination_url"`
	Headers *[]any `json:"headers,omitempty"`
	Id *string `json:"id,omitempty"`
	Label string `json:"label"`
	SigningSecret *string `json:"signing_secret,omitempty"`
	Status *string `json:"status,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	AuthenticationType *string `json:"authentication_type,omitempty"`
	DestinationUrl *string `json:"destination_url,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	Label *string `json:"label,omitempty"`
	SigningSecret *string `json:"signing_secret,omitempty"`
	Status *string `json:"status,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
