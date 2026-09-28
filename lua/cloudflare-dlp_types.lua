-- Typed models for the CloudflareDlp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DlpCustomPromptTopic
---@field description? string
---@field enabled boolean
---@field id? string
---@field name string
---@field profile_id? string
---@field result table
---@field topic string

---@class DlpCustomPromptTopicLoadMatch
---@field account_id string
---@field id string

---@class DlpCustomPromptTopicListMatch
---@field account_id string

---@class DlpCustomPromptTopicCreateData
---@field account_id string
---@field description? string
---@field enabled boolean
---@field id? string
---@field name string
---@field profile_id? string
---@field result table
---@field topic string

---@class DlpCustomPromptTopicUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field enabled? boolean
---@field name? string
---@field profile_id? string
---@field result? table
---@field topic? string

---@class DlpCustomPromptTopicRemoveMatch
---@field account_id string
---@field id string

---@class DlpDataClass
---@field data_tags table
---@field description? string
---@field expression string
---@field id? string
---@field name string
---@field result table
---@field sensitivity_levels table

---@class DlpDataClassLoadMatch
---@field account_id string
---@field id string

---@class DlpDataClassListMatch
---@field account_id string

---@class DlpDataClassCreateData
---@field account_id string
---@field data_tags table
---@field description? string
---@field expression string
---@field id? string
---@field name string
---@field result table
---@field sensitivity_levels table

---@class DlpDataClassUpdateData
---@field account_id string
---@field id string
---@field data_tags? table
---@field description? string
---@field expression? string
---@field name? string
---@field result? table
---@field sensitivity_levels? table

---@class DlpDataClassRemoveMatch
---@field account_id string
---@field id string

---@class DlpDataTag
---@field description? string
---@field id? string
---@field name string
---@field result table

---@class DlpDataTagLoadMatch
---@field account_id string
---@field data_tag_category_id string
---@field id string

---@class DlpDataTagListMatch
---@field account_id string
---@field data_tag_category_id string

---@class DlpDataTagCreateData
---@field account_id string
---@field data_tag_category_id string
---@field description? string
---@field id? string
---@field name string
---@field result table

---@class DlpDataTagUpdateData
---@field account_id string
---@field data_tag_category_id string
---@field id string
---@field description? string
---@field name? string
---@field result? table

---@class DlpDataTagRemoveMatch
---@field account_id string
---@field data_tag_category_id string
---@field id string

---@class DlpDataTagCategory
---@field description? string
---@field id? string
---@field name string
---@field result table
---@field tags? table
---@field template_id? string

---@class DlpDataTagCategoryLoadMatch
---@field account_id string
---@field id string

---@class DlpDataTagCategoryListMatch
---@field account_id string

---@class DlpDataTagCategoryCreateData
---@field account_id string
---@field description? string
---@field id? string
---@field name string
---@field result table
---@field tags? table
---@field template_id? string

---@class DlpDataTagCategoryUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field name? string
---@field result? table
---@field tags? table
---@field template_id? string

---@class DlpDataTagCategoryRemoveMatch
---@field account_id string
---@field id string

---@class DlpDataTagCategoryTemplate
---@field id? string
---@field result table

---@class DlpDataTagCategoryTemplateLoadMatch
---@field account_id string
---@field id string

---@class DlpDataTagCategoryTemplateListMatch
---@field account_id string

---@class DlpDataset
---@field case_sensitive? boolean
---@field description? string
---@field encoding_version? number
---@field id? string
---@field name string
---@field result table
---@field secret? boolean

---@class DlpDatasetLoadMatch
---@field account_id string
---@field id string

---@class DlpDatasetListMatch
---@field account_id string

---@class DlpDatasetCreateData
---@field account_id string
---@field dataset_id? string
---@field entry_id? string
---@field version_id? number
---@field version? number
---@field case_sensitive? boolean
---@field description? string
---@field encoding_version? number
---@field id? string
---@field name string
---@field result table
---@field secret? boolean

---@class DlpDatasetUpdateData
---@field account_id string
---@field id string
---@field case_sensitive? boolean
---@field description? string
---@field encoding_version? number
---@field name? string
---@field result? table
---@field secret? boolean

---@class DlpDatasetRemoveMatch
---@field account_id string
---@field id string

---@class DlpDocumentFingerprint
---@field description? string
---@field id? string
---@field match_percent? number
---@field name? string
---@field result table

---@class DlpDocumentFingerprintLoadMatch
---@field account_id string
---@field id string

---@class DlpDocumentFingerprintListMatch
---@field account_id string

---@class DlpDocumentFingerprintCreateData
---@field account_id string
---@field id? string
---@field description? string
---@field match_percent? number
---@field name? string
---@field result table

---@class DlpDocumentFingerprintUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field match_percent? number
---@field name? string
---@field result? table

---@class DlpDocumentFingerprintRemoveMatch
---@field account_id string
---@field id string

---@class DlpEmail
---@field action any
---@field auth_requirements any
---@field conditions table
---@field description? string
---@field enabled boolean
---@field name string
---@field new_priorities table
---@field result table

---@class DlpEmailLoadMatch
---@field account_id string
---@field rule_id? string

---@class DlpEmailListMatch
---@field account_id string

---@class DlpEmailCreateData
---@field account_id string
---@field action any
---@field auth_requirements any
---@field conditions table
---@field description? string
---@field enabled boolean
---@field name string
---@field new_priorities table
---@field result table

---@class DlpEmailUpdateData
---@field account_id string
---@field rule_id string
---@field action? any
---@field auth_requirements? any
---@field conditions? table
---@field description? string
---@field enabled? boolean
---@field name? string
---@field new_priorities? table
---@field result? table

---@class DlpEmailRemoveMatch
---@field account_id string
---@field rule_id string

---@class DlpEntry
---@field description? string
---@field enabled boolean
---@field id? string
---@field name string
---@field pattern table
---@field profile_id? string
---@field result? any

---@class DlpEntryLoadMatch
---@field account_id string
---@field id string

---@class DlpEntryListMatch
---@field account_id string

---@class DlpEntryCreateData
---@field account_id string
---@field description? string
---@field enabled boolean
---@field id? string
---@field name string
---@field pattern table
---@field profile_id? string
---@field result? any

---@class DlpEntryUpdateData
---@field account_id string
---@field entry_id? string
---@field id? string
---@field description? string
---@field enabled? boolean
---@field name? string
---@field pattern? table
---@field profile_id? string
---@field result? any

---@class DlpEntryRemoveMatch
---@field account_id string
---@field id string

---@class DlpIntegrationEntry
---@field enabled boolean
---@field entry_id string
---@field profile_id? string

---@class DlpIntegrationEntryCreateData
---@field account_id string
---@field enabled boolean
---@field entry_id string
---@field profile_id? string

---@class DlpIntegrationEntryUpdateData
---@field account_id string
---@field entry_id string
---@field enabled? boolean
---@field profile_id? string

---@class DlpIntegrationEntryRemoveMatch
---@field account_id string
---@field entry_id string

---@class DlpPredefinedEntry
---@field enabled boolean
---@field entry_id string
---@field profile_id? string

---@class DlpPredefinedEntryCreateData
---@field account_id string
---@field enabled boolean
---@field entry_id string
---@field profile_id? string

---@class DlpPredefinedEntryRemoveMatch
---@field account_id string
---@field entry_id string

---@class DlpProfile
---@field ai_context_enabled? boolean
---@field allowed_match_count? number
---@field confidence_threshold? string
---@field context_awareness table
---@field data_classes? table
---@field data_tags? table
---@field description? string
---@field entries? table
---@field id? string
---@field name string
---@field ocr_enabled? boolean
---@field result? any
---@field sensitivity_levels? table
---@field shared_entries? table

---@class DlpProfileLoadMatch
---@field account_id string
---@field id? string
---@field profile_id? string

---@class DlpProfileListMatch
---@field account_id string
---@field all? boolean

---@class DlpProfileCreateData
---@field account_id string
---@field ai_context_enabled? boolean
---@field allowed_match_count? number
---@field confidence_threshold? string
---@field context_awareness table
---@field data_classes? table
---@field data_tags? table
---@field description? string
---@field entries? table
---@field id? string
---@field name string
---@field ocr_enabled? boolean
---@field result? any
---@field sensitivity_levels? table
---@field shared_entries? table

---@class DlpProfileUpdateData
---@field account_id string
---@field profile_id string
---@field ai_context_enabled? boolean
---@field allowed_match_count? number
---@field confidence_threshold? string
---@field context_awareness? table
---@field data_classes? table
---@field data_tags? table
---@field description? string
---@field entries? table
---@field id? string
---@field name? string
---@field ocr_enabled? boolean
---@field result? any
---@field sensitivity_levels? table
---@field shared_entries? table

---@class DlpProfileRemoveMatch
---@field account_id string
---@field profile_id string

---@class DlpSensitivityGroup
---@field description? string
---@field id? string
---@field levels? table
---@field name string
---@field result table
---@field template_id? string

---@class DlpSensitivityGroupLoadMatch
---@field account_id string
---@field id string

---@class DlpSensitivityGroupListMatch
---@field account_id string

---@class DlpSensitivityGroupCreateData
---@field account_id string
---@field description? string
---@field id? string
---@field levels? table
---@field name string
---@field result table
---@field template_id? string

---@class DlpSensitivityGroupUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field levels? table
---@field name? string
---@field result? table
---@field template_id? string

---@class DlpSensitivityGroupRemoveMatch
---@field account_id string
---@field id string

---@class DlpSensitivityGroupTemplate
---@field id? string
---@field result table

---@class DlpSensitivityGroupTemplateLoadMatch
---@field account_id string
---@field id string

---@class DlpSensitivityGroupTemplateListMatch
---@field account_id string

---@class DlpSensitivityLevel
---@field description? string
---@field id? string
---@field name string
---@field result table

---@class DlpSensitivityLevelLoadMatch
---@field account_id string
---@field id string
---@field sensitivity_group_id string

---@class DlpSensitivityLevelListMatch
---@field account_id string
---@field sensitivity_group_id string

---@class DlpSensitivityLevelCreateData
---@field account_id string
---@field sensitivity_group_id string
---@field description? string
---@field id? string
---@field name string
---@field result table

---@class DlpSensitivityLevelUpdateData
---@field account_id string
---@field id string
---@field sensitivity_group_id string
---@field description? string
---@field name? string
---@field result? table

---@class DlpSensitivityLevelRemoveMatch
---@field account_id string
---@field id string
---@field sensitivity_group_id string

---@class DlpSetting
---@field ai_context_analysis? boolean
---@field masking_level? any
---@field max_match_bytes? number
---@field ocr? boolean
---@field payload_logging? any
---@field public_key? string
---@field regex string
---@field result table

---@class DlpSettingLoadMatch
---@field account_id string

---@class DlpSettingCreateData
---@field account_id string
---@field ai_context_analysis? boolean
---@field masking_level? any
---@field max_match_bytes? number
---@field ocr? boolean
---@field payload_logging? any
---@field public_key? string
---@field regex string
---@field result table

---@class DlpSettingUpdateData
---@field account_id string
---@field ai_context_analysis? boolean
---@field masking_level? any
---@field max_match_bytes? number
---@field ocr? boolean
---@field payload_logging? any
---@field public_key? string
---@field regex? string
---@field result? table

---@class DlpSettingRemoveMatch
---@field account_id string

---@class Policy
---@field actions table
---@field applies_to_all_integrations boolean
---@field description? string
---@field display_name string
---@field enabled boolean
---@field errors table
---@field finding_type_id string
---@field id? string
---@field integration_ids? table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class PolicyLoadMatch
---@field account_id string
---@field id string

---@class PolicyListMatch
---@field account_id string
---@field cursor? string

---@class PolicyCreateData
---@field account_id string
---@field actions table
---@field applies_to_all_integrations boolean
---@field description? string
---@field display_name string
---@field enabled boolean
---@field errors table
---@field finding_type_id string
---@field id? string
---@field integration_ids? table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class PolicyUpdateData
---@field account_id string
---@field id string
---@field actions? table
---@field applies_to_all_integrations? boolean
---@field description? string
---@field display_name? string
---@field enabled? boolean
---@field errors? table
---@field finding_type_id? string
---@field integration_ids? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class PolicyRemoveMatch
---@field account_id string
---@field id string

---@class PostureApiCreateRemediationJob
---@field errors table
---@field finding_instance_ids table
---@field messages table
---@field remediation_type_id string
---@field result table
---@field success boolean

---@class PostureApiCreateRemediationJobCreateData
---@field account_id string
---@field errors table
---@field finding_instance_ids table
---@field messages table
---@field remediation_type_id string
---@field result table
---@field success boolean

---@class PostureApiCreateWebhookJob
---@field finding_instance_ids table
---@field webhook_ids table

---@class PostureApiCreateWebhookJobCreateData
---@field account_id string
---@field finding_instance_ids table
---@field webhook_ids table

---@class PostureApiExportJob
---@field archived? boolean
---@field dlp_profile_id? table
---@field dlp_profile_information table
---@field errors table
---@field id? string
---@field ignored? boolean
---@field integration_id? table
---@field max_affliction_date? string
---@field max_updated_at? string
---@field messages table
---@field min_affliction_date? string
---@field min_updated_at? string
---@field orders? table
---@field product? string
---@field result table
---@field search? string
---@field severities? table
---@field status? table
---@field success boolean
---@field vendors? table

---@class PostureApiExportJobLoadMatch
---@field account_id string
---@field id string

---@class PostureApiExportJobCreateData
---@field account_id string
---@field finding_id? string
---@field archived? boolean
---@field dlp_profile_id? table
---@field dlp_profile_information table
---@field errors table
---@field id? string
---@field ignored? boolean
---@field integration_id? table
---@field max_affliction_date? string
---@field max_updated_at? string
---@field messages table
---@field min_affliction_date? string
---@field min_updated_at? string
---@field orders? table
---@field product? string
---@field result table
---@field search? string
---@field severities? table
---@field status? table
---@field success boolean
---@field vendors? table

---@class PostureApiFinding
---@field checks table
---@field errors table
---@field id? string
---@field messages table
---@field new_severity number
---@field result table
---@field success boolean

---@class PostureApiFindingLoadMatch
---@field account_id string
---@field id string

---@class PostureApiFindingCreateData
---@field account_id string
---@field finding_id? string
---@field checks table
---@field errors table
---@field id? string
---@field messages table
---@field new_severity number
---@field result table
---@field success boolean

---@class PostureApiFindingInstance
---@field check_instances table
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PostureApiFindingInstanceLoadMatch
---@field account_id string
---@field finding_id string
---@field id string

---@class PostureApiFindingInstanceCreateData
---@field account_id string
---@field finding_id string
---@field check_instances table
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PostureApiFindingType
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PostureApiFindingTypeLoadMatch
---@field account_id string
---@field id string

---@class PostureApiPaginatedContentAssetList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedContentAssetListListMatch
---@field account_id string
---@field direction? string
---@field dlp_profile_id? string
---@field integration_id? string
---@field max_affliction_date? string
---@field min_affliction_date? string
---@field order? string
---@field page? number
---@field per_page? number
---@field search? string
---@field vendor? string

---@class PostureApiPaginatedExportJobList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedExportJobListListMatch
---@field account_id string
---@field page? number
---@field per_page? number
---@field status? string

---@class PostureApiPaginatedFindingInstanceList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedFindingInstanceListListMatch
---@field account_id string
---@field finding_id string
---@field archived? boolean
---@field asset_id? table
---@field cursor? string
---@field direction? string
---@field finding_instance_id? table
---@field max_affliction_date? string
---@field min_affliction_date? string
---@field order? string
---@field page? number
---@field per_page? number
---@field remediation_status? table
---@field search? string

---@class PostureApiPaginatedFindingList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedFindingListListMatch
---@field account_id string
---@field cursor? string
---@field direction? string
---@field finding_type_id? string
---@field ignored? boolean
---@field integration_id? string
---@field max_affliction_date? string
---@field min_affliction_date? string
---@field observation? string
---@field order? string
---@field page? number
---@field per_page? number
---@field product? string
---@field search? string
---@field severity? string
---@field type? string
---@field vendor? string

---@class PostureApiPaginatedFindingTypeList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedFindingTypeListListMatch
---@field account_id string
---@field page? number
---@field per_page? number
---@field search? string
---@field vendor? table

---@class PostureApiPaginatedRemediationJobList
---@field asset table
---@field created_at string
---@field finding_id string
---@field finding_instance_id string
---@field finding_type_id string
---@field finding_type_name string
---@field id string
---@field integration_name string
---@field last_updated string
---@field remediation_type string
---@field status string
---@field triggered_by_actor? string
---@field triggered_by_id? string
---@field triggered_by_user string

---@class PostureApiPaginatedRemediationJobListListMatch
---@field account_id string
---@field cursor? string
---@field direction? string
---@field integration_id? string
---@field max_updated_at? string
---@field min_updated_at? string
---@field order? string
---@field page? number
---@field per_page? number
---@field search? string
---@field status? string
---@field triggered_by_actor? table

---@class PostureApiPaginatedRemediationTypeList
---@field errors table
---@field messages table
---@field result? table
---@field result_info table
---@field success boolean

---@class PostureApiPaginatedRemediationTypeListListMatch
---@field account_id string
---@field finding_type_id string
---@field cursor? string
---@field integration_id? string
---@field page? number
---@field per_page? number

---@class PostureApiWebhook
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PostureApiWebhookLoadMatch
---@field account_id string
---@field id string

---@class PostureApiWebhookCreateData
---@field account_id string
---@field webhook_id string
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PostureApiWebhookList
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class PostureApiWebhookListListMatch
---@field account_id string

---@class Webhook
---@field authentication_type string
---@field destination_url string
---@field headers? table
---@field id? string
---@field label string
---@field signing_secret? string
---@field status? string

---@class WebhookCreateData
---@field account_id string
---@field authentication_type string
---@field destination_url string
---@field headers? table
---@field id? string
---@field label string
---@field signing_secret? string
---@field status? string

---@class WebhookUpdateData
---@field account_id string
---@field id string
---@field authentication_type? string
---@field destination_url? string
---@field headers? table
---@field label? string
---@field signing_secret? string
---@field status? string

---@class WebhookRemoveMatch
---@field account_id string
---@field id string

local M = {}

return M
