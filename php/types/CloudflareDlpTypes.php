<?php
declare(strict_types=1);

// Typed models for the CloudflareDlp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** DlpCustomPromptTopic entity data model. */
class DlpCustomPromptTopic
{
    public ?string $description = null;
    public bool $enabled;
    public ?string $id = null;
    public string $name;
    public ?string $profile_id = null;
    public array $result;
    public string $topic;
}

/** Request payload for DlpCustomPromptTopic#load. */
class DlpCustomPromptTopicLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpCustomPromptTopic#list. */
class DlpCustomPromptTopicListMatch
{
    public string $account_id;
}

/** Request payload for DlpCustomPromptTopic#create. */
class DlpCustomPromptTopicCreateData
{
    public string $account_id;
    public ?string $description = null;
    public bool $enabled;
    public ?string $id = null;
    public string $name;
    public ?string $profile_id = null;
    public array $result;
    public string $topic;
}

/** Request payload for DlpCustomPromptTopic#update. */
class DlpCustomPromptTopicUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $name = null;
    public ?string $profile_id = null;
    public ?array $result = null;
    public ?string $topic = null;
}

/** Request payload for DlpCustomPromptTopic#remove. */
class DlpCustomPromptTopicRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpDataClass entity data model. */
class DlpDataClass
{
    public array $data_tags;
    public ?string $description = null;
    public string $expression;
    public ?string $id = null;
    public string $name;
    public array $result;
    public array $sensitivity_levels;
}

/** Request payload for DlpDataClass#load. */
class DlpDataClassLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpDataClass#list. */
class DlpDataClassListMatch
{
    public string $account_id;
}

/** Request payload for DlpDataClass#create. */
class DlpDataClassCreateData
{
    public string $account_id;
    public array $data_tags;
    public ?string $description = null;
    public string $expression;
    public ?string $id = null;
    public string $name;
    public array $result;
    public array $sensitivity_levels;
}

/** Request payload for DlpDataClass#update. */
class DlpDataClassUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $data_tags = null;
    public ?string $description = null;
    public ?string $expression = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?array $sensitivity_levels = null;
}

/** Request payload for DlpDataClass#remove. */
class DlpDataClassRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpDataTag entity data model. */
class DlpDataTag
{
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
}

/** Request payload for DlpDataTag#load. */
class DlpDataTagLoadMatch
{
    public string $account_id;
    public string $data_tag_category_id;
    public string $id;
}

/** Request payload for DlpDataTag#list. */
class DlpDataTagListMatch
{
    public string $account_id;
    public string $data_tag_category_id;
}

/** Request payload for DlpDataTag#create. */
class DlpDataTagCreateData
{
    public string $account_id;
    public string $data_tag_category_id;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
}

/** Request payload for DlpDataTag#update. */
class DlpDataTagUpdateData
{
    public string $account_id;
    public string $data_tag_category_id;
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
}

/** Request payload for DlpDataTag#remove. */
class DlpDataTagRemoveMatch
{
    public string $account_id;
    public string $data_tag_category_id;
    public string $id;
}

/** DlpDataTagCategory entity data model. */
class DlpDataTagCategory
{
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
    public ?array $tags = null;
    public ?string $template_id = null;
}

/** Request payload for DlpDataTagCategory#load. */
class DlpDataTagCategoryLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpDataTagCategory#list. */
class DlpDataTagCategoryListMatch
{
    public string $account_id;
}

/** Request payload for DlpDataTagCategory#create. */
class DlpDataTagCategoryCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
    public ?array $tags = null;
    public ?string $template_id = null;
}

/** Request payload for DlpDataTagCategory#update. */
class DlpDataTagCategoryUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?array $tags = null;
    public ?string $template_id = null;
}

/** Request payload for DlpDataTagCategory#remove. */
class DlpDataTagCategoryRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpDataTagCategoryTemplate entity data model. */
class DlpDataTagCategoryTemplate
{
    public ?string $id = null;
    public array $result;
}

/** Request payload for DlpDataTagCategoryTemplate#load. */
class DlpDataTagCategoryTemplateLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpDataTagCategoryTemplate#list. */
class DlpDataTagCategoryTemplateListMatch
{
    public string $account_id;
}

/** DlpDataset entity data model. */
class DlpDataset
{
    public ?bool $case_sensitive = null;
    public ?string $description = null;
    public ?int $encoding_version = null;
    public ?string $id = null;
    public string $name;
    public array $result;
    public ?bool $secret = null;
}

/** Request payload for DlpDataset#load. */
class DlpDatasetLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpDataset#list. */
class DlpDatasetListMatch
{
    public string $account_id;
}

/** Request payload for DlpDataset#create. */
class DlpDatasetCreateData
{
    public string $account_id;
    public ?string $dataset_id = null;
    public ?string $entry_id = null;
    public ?int $version_id = null;
    public ?int $version = null;
    public ?bool $case_sensitive = null;
    public ?string $description = null;
    public ?int $encoding_version = null;
    public ?string $id = null;
    public string $name;
    public array $result;
    public ?bool $secret = null;
}

/** Request payload for DlpDataset#update. */
class DlpDatasetUpdateData
{
    public string $account_id;
    public string $id;
    public ?bool $case_sensitive = null;
    public ?string $description = null;
    public ?int $encoding_version = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?bool $secret = null;
}

/** Request payload for DlpDataset#remove. */
class DlpDatasetRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpDocumentFingerprint entity data model. */
class DlpDocumentFingerprint
{
    public ?string $description = null;
    public ?string $id = null;
    public ?int $match_percent = null;
    public ?string $name = null;
    public array $result;
}

/** Request payload for DlpDocumentFingerprint#load. */
class DlpDocumentFingerprintLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpDocumentFingerprint#list. */
class DlpDocumentFingerprintListMatch
{
    public string $account_id;
}

/** Request payload for DlpDocumentFingerprint#create. */
class DlpDocumentFingerprintCreateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $description = null;
    public ?int $match_percent = null;
    public ?string $name = null;
    public array $result;
}

/** Request payload for DlpDocumentFingerprint#update. */
class DlpDocumentFingerprintUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?int $match_percent = null;
    public ?string $name = null;
    public ?array $result = null;
}

/** Request payload for DlpDocumentFingerprint#remove. */
class DlpDocumentFingerprintRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpEmail entity data model. */
class DlpEmail
{
    public mixed $action;
    public mixed $auth_requirements;
    public array $conditions;
    public ?string $description = null;
    public bool $enabled;
    public string $name;
    public array $new_priorities;
    public array $result;
}

/** Request payload for DlpEmail#load. */
class DlpEmailLoadMatch
{
    public string $account_id;
    public ?string $rule_id = null;
}

/** Request payload for DlpEmail#list. */
class DlpEmailListMatch
{
    public string $account_id;
}

/** Request payload for DlpEmail#create. */
class DlpEmailCreateData
{
    public string $account_id;
    public mixed $action;
    public mixed $auth_requirements;
    public array $conditions;
    public ?string $description = null;
    public bool $enabled;
    public string $name;
    public array $new_priorities;
    public array $result;
}

/** Request payload for DlpEmail#update. */
class DlpEmailUpdateData
{
    public string $account_id;
    public string $rule_id;
    public mixed $action = null;
    public mixed $auth_requirements = null;
    public ?array $conditions = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $name = null;
    public ?array $new_priorities = null;
    public ?array $result = null;
}

/** Request payload for DlpEmail#remove. */
class DlpEmailRemoveMatch
{
    public string $account_id;
    public string $rule_id;
}

/** DlpEntry entity data model. */
class DlpEntry
{
    public ?string $description = null;
    public bool $enabled;
    public ?string $id = null;
    public string $name;
    public array $pattern;
    public ?string $profile_id = null;
    public mixed $result = null;
}

/** Request payload for DlpEntry#load. */
class DlpEntryLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpEntry#list. */
class DlpEntryListMatch
{
    public string $account_id;
}

/** Request payload for DlpEntry#create. */
class DlpEntryCreateData
{
    public string $account_id;
    public ?string $description = null;
    public bool $enabled;
    public ?string $id = null;
    public string $name;
    public array $pattern;
    public ?string $profile_id = null;
    public mixed $result = null;
}

/** Request payload for DlpEntry#update. */
class DlpEntryUpdateData
{
    public string $account_id;
    public ?string $entry_id = null;
    public ?string $id = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $name = null;
    public ?array $pattern = null;
    public ?string $profile_id = null;
    public mixed $result = null;
}

/** Request payload for DlpEntry#remove. */
class DlpEntryRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpIntegrationEntry entity data model. */
class DlpIntegrationEntry
{
    public bool $enabled;
    public string $entry_id;
    public ?string $profile_id = null;
}

/** Request payload for DlpIntegrationEntry#create. */
class DlpIntegrationEntryCreateData
{
    public string $account_id;
    public bool $enabled;
    public string $entry_id;
    public ?string $profile_id = null;
}

/** Request payload for DlpIntegrationEntry#update. */
class DlpIntegrationEntryUpdateData
{
    public string $account_id;
    public string $entry_id;
    public ?bool $enabled = null;
    public ?string $profile_id = null;
}

/** Request payload for DlpIntegrationEntry#remove. */
class DlpIntegrationEntryRemoveMatch
{
    public string $account_id;
    public string $entry_id;
}

/** DlpPredefinedEntry entity data model. */
class DlpPredefinedEntry
{
    public bool $enabled;
    public string $entry_id;
    public ?string $profile_id = null;
}

/** Request payload for DlpPredefinedEntry#create. */
class DlpPredefinedEntryCreateData
{
    public string $account_id;
    public bool $enabled;
    public string $entry_id;
    public ?string $profile_id = null;
}

/** Request payload for DlpPredefinedEntry#remove. */
class DlpPredefinedEntryRemoveMatch
{
    public string $account_id;
    public string $entry_id;
}

/** DlpProfile entity data model. */
class DlpProfile
{
    public ?bool $ai_context_enabled = null;
    public ?int $allowed_match_count = null;
    public ?string $confidence_threshold = null;
    public array $context_awareness;
    public ?array $data_classes = null;
    public ?array $data_tags = null;
    public ?string $description = null;
    public ?array $entries = null;
    public ?string $id = null;
    public string $name;
    public ?bool $ocr_enabled = null;
    public mixed $result = null;
    public ?array $sensitivity_levels = null;
    public ?array $shared_entries = null;
}

/** Request payload for DlpProfile#load. */
class DlpProfileLoadMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $profile_id = null;
}

/** Request payload for DlpProfile#list. */
class DlpProfileListMatch
{
    public string $account_id;
    public ?bool $all = null;
}

/** Request payload for DlpProfile#create. */
class DlpProfileCreateData
{
    public string $account_id;
    public ?bool $ai_context_enabled = null;
    public ?int $allowed_match_count = null;
    public ?string $confidence_threshold = null;
    public array $context_awareness;
    public ?array $data_classes = null;
    public ?array $data_tags = null;
    public ?string $description = null;
    public ?array $entries = null;
    public ?string $id = null;
    public string $name;
    public ?bool $ocr_enabled = null;
    public mixed $result = null;
    public ?array $sensitivity_levels = null;
    public ?array $shared_entries = null;
}

/** Request payload for DlpProfile#update. */
class DlpProfileUpdateData
{
    public string $account_id;
    public string $profile_id;
    public ?bool $ai_context_enabled = null;
    public ?int $allowed_match_count = null;
    public ?string $confidence_threshold = null;
    public ?array $context_awareness = null;
    public ?array $data_classes = null;
    public ?array $data_tags = null;
    public ?string $description = null;
    public ?array $entries = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $ocr_enabled = null;
    public mixed $result = null;
    public ?array $sensitivity_levels = null;
    public ?array $shared_entries = null;
}

/** Request payload for DlpProfile#remove. */
class DlpProfileRemoveMatch
{
    public string $account_id;
    public string $profile_id;
}

/** DlpSensitivityGroup entity data model. */
class DlpSensitivityGroup
{
    public ?string $description = null;
    public ?string $id = null;
    public ?array $levels = null;
    public string $name;
    public array $result;
    public ?string $template_id = null;
}

/** Request payload for DlpSensitivityGroup#load. */
class DlpSensitivityGroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpSensitivityGroup#list. */
class DlpSensitivityGroupListMatch
{
    public string $account_id;
}

/** Request payload for DlpSensitivityGroup#create. */
class DlpSensitivityGroupCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?string $id = null;
    public ?array $levels = null;
    public string $name;
    public array $result;
    public ?string $template_id = null;
}

/** Request payload for DlpSensitivityGroup#update. */
class DlpSensitivityGroupUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?array $levels = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $template_id = null;
}

/** Request payload for DlpSensitivityGroup#remove. */
class DlpSensitivityGroupRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DlpSensitivityGroupTemplate entity data model. */
class DlpSensitivityGroupTemplate
{
    public ?string $id = null;
    public array $result;
}

/** Request payload for DlpSensitivityGroupTemplate#load. */
class DlpSensitivityGroupTemplateLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DlpSensitivityGroupTemplate#list. */
class DlpSensitivityGroupTemplateListMatch
{
    public string $account_id;
}

/** DlpSensitivityLevel entity data model. */
class DlpSensitivityLevel
{
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
}

/** Request payload for DlpSensitivityLevel#load. */
class DlpSensitivityLevelLoadMatch
{
    public string $account_id;
    public string $id;
    public string $sensitivity_group_id;
}

/** Request payload for DlpSensitivityLevel#list. */
class DlpSensitivityLevelListMatch
{
    public string $account_id;
    public string $sensitivity_group_id;
}

/** Request payload for DlpSensitivityLevel#create. */
class DlpSensitivityLevelCreateData
{
    public string $account_id;
    public string $sensitivity_group_id;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public array $result;
}

/** Request payload for DlpSensitivityLevel#update. */
class DlpSensitivityLevelUpdateData
{
    public string $account_id;
    public string $id;
    public string $sensitivity_group_id;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
}

/** Request payload for DlpSensitivityLevel#remove. */
class DlpSensitivityLevelRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $sensitivity_group_id;
}

/** DlpSetting entity data model. */
class DlpSetting
{
    public ?bool $ai_context_analysis = null;
    public mixed $masking_level = null;
    public ?int $max_match_bytes = null;
    public ?bool $ocr = null;
    public mixed $payload_logging = null;
    public ?string $public_key = null;
    public string $regex;
    public array $result;
}

/** Request payload for DlpSetting#load. */
class DlpSettingLoadMatch
{
    public string $account_id;
}

/** Request payload for DlpSetting#create. */
class DlpSettingCreateData
{
    public string $account_id;
    public ?bool $ai_context_analysis = null;
    public mixed $masking_level = null;
    public ?int $max_match_bytes = null;
    public ?bool $ocr = null;
    public mixed $payload_logging = null;
    public ?string $public_key = null;
    public string $regex;
    public array $result;
}

/** Request payload for DlpSetting#update. */
class DlpSettingUpdateData
{
    public string $account_id;
    public ?bool $ai_context_analysis = null;
    public mixed $masking_level = null;
    public ?int $max_match_bytes = null;
    public ?bool $ocr = null;
    public mixed $payload_logging = null;
    public ?string $public_key = null;
    public ?string $regex = null;
    public ?array $result = null;
}

/** Request payload for DlpSetting#remove. */
class DlpSettingRemoveMatch
{
    public string $account_id;
}

/** Policy entity data model. */
class Policy
{
    public array $actions;
    public bool $applies_to_all_integrations;
    public ?string $description = null;
    public string $display_name;
    public bool $enabled;
    public array $errors;
    public string $finding_type_id;
    public ?string $id = null;
    public ?array $integration_ids = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for Policy#load. */
class PolicyLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Policy#list. */
class PolicyListMatch
{
    public string $account_id;
    public ?string $cursor = null;
}

/** Request payload for Policy#create. */
class PolicyCreateData
{
    public string $account_id;
    public array $actions;
    public bool $applies_to_all_integrations;
    public ?string $description = null;
    public string $display_name;
    public bool $enabled;
    public array $errors;
    public string $finding_type_id;
    public ?string $id = null;
    public ?array $integration_ids = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for Policy#update. */
class PolicyUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $actions = null;
    public ?bool $applies_to_all_integrations = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?string $finding_type_id = null;
    public ?array $integration_ids = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** Request payload for Policy#remove. */
class PolicyRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** PostureApiCreateRemediationJob entity data model. */
class PostureApiCreateRemediationJob
{
    public array $errors;
    public array $finding_instance_ids;
    public array $messages;
    public string $remediation_type_id;
    public array $result;
    public bool $success;
}

/** Request payload for PostureApiCreateRemediationJob#create. */
class PostureApiCreateRemediationJobCreateData
{
    public string $account_id;
    public array $errors;
    public array $finding_instance_ids;
    public array $messages;
    public string $remediation_type_id;
    public array $result;
    public bool $success;
}

/** PostureApiCreateWebhookJob entity data model. */
class PostureApiCreateWebhookJob
{
    public array $finding_instance_ids;
    public array $webhook_ids;
}

/** Request payload for PostureApiCreateWebhookJob#create. */
class PostureApiCreateWebhookJobCreateData
{
    public string $account_id;
    public array $finding_instance_ids;
    public array $webhook_ids;
}

/** PostureApiExportJob entity data model. */
class PostureApiExportJob
{
    public ?bool $archived = null;
    public ?array $dlp_profile_id = null;
    public array $dlp_profile_information;
    public array $errors;
    public ?string $id = null;
    public ?bool $ignored = null;
    public ?array $integration_id = null;
    public ?string $max_affliction_date = null;
    public ?string $max_updated_at = null;
    public array $messages;
    public ?string $min_affliction_date = null;
    public ?string $min_updated_at = null;
    public ?array $orders = null;
    public ?string $product = null;
    public array $result;
    public ?string $search = null;
    public ?array $severities = null;
    public ?array $status = null;
    public bool $success;
    public ?array $vendors = null;
}

/** Request payload for PostureApiExportJob#load. */
class PostureApiExportJobLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for PostureApiExportJob#create. */
class PostureApiExportJobCreateData
{
    public string $account_id;
    public ?string $finding_id = null;
    public ?bool $archived = null;
    public ?array $dlp_profile_id = null;
    public array $dlp_profile_information;
    public array $errors;
    public ?string $id = null;
    public ?bool $ignored = null;
    public ?array $integration_id = null;
    public ?string $max_affliction_date = null;
    public ?string $max_updated_at = null;
    public array $messages;
    public ?string $min_affliction_date = null;
    public ?string $min_updated_at = null;
    public ?array $orders = null;
    public ?string $product = null;
    public array $result;
    public ?string $search = null;
    public ?array $severities = null;
    public ?array $status = null;
    public bool $success;
    public ?array $vendors = null;
}

/** PostureApiFinding entity data model. */
class PostureApiFinding
{
    public array $checks;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public int $new_severity;
    public array $result;
    public bool $success;
}

/** Request payload for PostureApiFinding#load. */
class PostureApiFindingLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for PostureApiFinding#create. */
class PostureApiFindingCreateData
{
    public string $account_id;
    public ?string $finding_id = null;
    public array $checks;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public int $new_severity;
    public array $result;
    public bool $success;
}

/** PostureApiFindingInstance entity data model. */
class PostureApiFindingInstance
{
    public array $check_instances;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for PostureApiFindingInstance#load. */
class PostureApiFindingInstanceLoadMatch
{
    public string $account_id;
    public string $finding_id;
    public string $id;
}

/** Request payload for PostureApiFindingInstance#create. */
class PostureApiFindingInstanceCreateData
{
    public string $account_id;
    public string $finding_id;
    public array $check_instances;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** PostureApiFindingType entity data model. */
class PostureApiFindingType
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for PostureApiFindingType#load. */
class PostureApiFindingTypeLoadMatch
{
    public string $account_id;
    public string $id;
}

/** PostureApiPaginatedContentAssetList entity data model. */
class PostureApiPaginatedContentAssetList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedContentAssetList#list. */
class PostureApiPaginatedContentAssetListListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?string $dlp_profile_id = null;
    public ?string $integration_id = null;
    public ?string $max_affliction_date = null;
    public ?string $min_affliction_date = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $vendor = null;
}

/** PostureApiPaginatedExportJobList entity data model. */
class PostureApiPaginatedExportJobList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedExportJobList#list. */
class PostureApiPaginatedExportJobListListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $status = null;
}

/** PostureApiPaginatedFindingInstanceList entity data model. */
class PostureApiPaginatedFindingInstanceList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedFindingInstanceList#list. */
class PostureApiPaginatedFindingInstanceListListMatch
{
    public string $account_id;
    public string $finding_id;
    public ?bool $archived = null;
    public ?array $asset_id = null;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?array $finding_instance_id = null;
    public ?string $max_affliction_date = null;
    public ?string $min_affliction_date = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $remediation_status = null;
    public ?string $search = null;
}

/** PostureApiPaginatedFindingList entity data model. */
class PostureApiPaginatedFindingList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedFindingList#list. */
class PostureApiPaginatedFindingListListMatch
{
    public string $account_id;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?string $finding_type_id = null;
    public ?bool $ignored = null;
    public ?string $integration_id = null;
    public ?string $max_affliction_date = null;
    public ?string $min_affliction_date = null;
    public ?string $observation = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $product = null;
    public ?string $search = null;
    public ?string $severity = null;
    public ?string $type = null;
    public ?string $vendor = null;
}

/** PostureApiPaginatedFindingTypeList entity data model. */
class PostureApiPaginatedFindingTypeList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedFindingTypeList#list. */
class PostureApiPaginatedFindingTypeListListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?array $vendor = null;
}

/** PostureApiPaginatedRemediationJobList entity data model. */
class PostureApiPaginatedRemediationJobList
{
    public array $asset;
    public string $created_at;
    public string $finding_id;
    public string $finding_instance_id;
    public string $finding_type_id;
    public string $finding_type_name;
    public string $id;
    public string $integration_name;
    public string $last_updated;
    public string $remediation_type;
    public string $status;
    public ?string $triggered_by_actor = null;
    public ?string $triggered_by_id = null;
    public string $triggered_by_user;
}

/** Request payload for PostureApiPaginatedRemediationJobList#list. */
class PostureApiPaginatedRemediationJobListListMatch
{
    public string $account_id;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?string $integration_id = null;
    public ?string $max_updated_at = null;
    public ?string $min_updated_at = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $status = null;
    public ?array $triggered_by_actor = null;
}

/** PostureApiPaginatedRemediationTypeList entity data model. */
class PostureApiPaginatedRemediationTypeList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public array $result_info;
    public bool $success;
}

/** Request payload for PostureApiPaginatedRemediationTypeList#list. */
class PostureApiPaginatedRemediationTypeListListMatch
{
    public string $account_id;
    public string $finding_type_id;
    public ?string $cursor = null;
    public ?string $integration_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** PostureApiWebhook entity data model. */
class PostureApiWebhook
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for PostureApiWebhook#load. */
class PostureApiWebhookLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for PostureApiWebhook#create. */
class PostureApiWebhookCreateData
{
    public string $account_id;
    public string $webhook_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** PostureApiWebhookList entity data model. */
class PostureApiWebhookList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for PostureApiWebhookList#list. */
class PostureApiWebhookListListMatch
{
    public string $account_id;
}

/** Webhook entity data model. */
class Webhook
{
    public string $authentication_type;
    public string $destination_url;
    public ?array $headers = null;
    public ?string $id = null;
    public string $label;
    public ?string $signing_secret = null;
    public ?string $status = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public string $account_id;
    public string $authentication_type;
    public string $destination_url;
    public ?array $headers = null;
    public ?string $id = null;
    public string $label;
    public ?string $signing_secret = null;
    public ?string $status = null;
}

/** Request payload for Webhook#update. */
class WebhookUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $authentication_type = null;
    public ?string $destination_url = null;
    public ?array $headers = null;
    public ?string $label = null;
    public ?string $signing_secret = null;
    public ?string $status = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $account_id;
    public string $id;
}

