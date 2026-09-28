# Typed models for the CloudflareDlp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DlpCustomPromptTopicRequired(TypedDict):
    enabled: bool
    name: str
    result: dict
    topic: str


class DlpCustomPromptTopic(DlpCustomPromptTopicRequired, total=False):
    description: str
    id: str
    profile_id: str


class DlpCustomPromptTopicLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpCustomPromptTopicListMatch(TypedDict):
    account_id: str


class DlpCustomPromptTopicCreateDataRequired(TypedDict):
    account_id: str
    enabled: bool
    name: str
    result: dict
    topic: str


class DlpCustomPromptTopicCreateData(DlpCustomPromptTopicCreateDataRequired, total=False):
    description: str
    id: str
    profile_id: str


class DlpCustomPromptTopicUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpCustomPromptTopicUpdateData(DlpCustomPromptTopicUpdateDataRequired, total=False):
    description: str
    enabled: bool
    name: str
    profile_id: str
    result: dict
    topic: str


class DlpCustomPromptTopicRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpDataClassRequired(TypedDict):
    data_tags: list
    expression: str
    name: str
    result: dict
    sensitivity_levels: list


class DlpDataClass(DlpDataClassRequired, total=False):
    description: str
    id: str


class DlpDataClassLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpDataClassListMatch(TypedDict):
    account_id: str


class DlpDataClassCreateDataRequired(TypedDict):
    account_id: str
    data_tags: list
    expression: str
    name: str
    result: dict
    sensitivity_levels: list


class DlpDataClassCreateData(DlpDataClassCreateDataRequired, total=False):
    description: str
    id: str


class DlpDataClassUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpDataClassUpdateData(DlpDataClassUpdateDataRequired, total=False):
    data_tags: list
    description: str
    expression: str
    name: str
    result: dict
    sensitivity_levels: list


class DlpDataClassRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpDataTagRequired(TypedDict):
    name: str
    result: dict


class DlpDataTag(DlpDataTagRequired, total=False):
    description: str
    id: str


class DlpDataTagLoadMatch(TypedDict):
    account_id: str
    data_tag_category_id: str
    id: str


class DlpDataTagListMatch(TypedDict):
    account_id: str
    data_tag_category_id: str


class DlpDataTagCreateDataRequired(TypedDict):
    account_id: str
    data_tag_category_id: str
    name: str
    result: dict


class DlpDataTagCreateData(DlpDataTagCreateDataRequired, total=False):
    description: str
    id: str


class DlpDataTagUpdateDataRequired(TypedDict):
    account_id: str
    data_tag_category_id: str
    id: str


class DlpDataTagUpdateData(DlpDataTagUpdateDataRequired, total=False):
    description: str
    name: str
    result: dict


class DlpDataTagRemoveMatch(TypedDict):
    account_id: str
    data_tag_category_id: str
    id: str


class DlpDataTagCategoryRequired(TypedDict):
    name: str
    result: dict


class DlpDataTagCategory(DlpDataTagCategoryRequired, total=False):
    description: str
    id: str
    tags: list
    template_id: str


class DlpDataTagCategoryLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpDataTagCategoryListMatch(TypedDict):
    account_id: str


class DlpDataTagCategoryCreateDataRequired(TypedDict):
    account_id: str
    name: str
    result: dict


class DlpDataTagCategoryCreateData(DlpDataTagCategoryCreateDataRequired, total=False):
    description: str
    id: str
    tags: list
    template_id: str


class DlpDataTagCategoryUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpDataTagCategoryUpdateData(DlpDataTagCategoryUpdateDataRequired, total=False):
    description: str
    name: str
    result: dict
    tags: list
    template_id: str


class DlpDataTagCategoryRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpDataTagCategoryTemplateRequired(TypedDict):
    result: dict


class DlpDataTagCategoryTemplate(DlpDataTagCategoryTemplateRequired, total=False):
    id: str


class DlpDataTagCategoryTemplateLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpDataTagCategoryTemplateListMatch(TypedDict):
    account_id: str


class DlpDatasetRequired(TypedDict):
    name: str
    result: dict


class DlpDataset(DlpDatasetRequired, total=False):
    case_sensitive: bool
    description: str
    encoding_version: int
    id: str
    secret: bool


class DlpDatasetLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpDatasetListMatch(TypedDict):
    account_id: str


class DlpDatasetCreateDataRequired(TypedDict):
    account_id: str
    name: str
    result: dict


class DlpDatasetCreateData(DlpDatasetCreateDataRequired, total=False):
    dataset_id: str
    entry_id: str
    version_id: int
    version: int
    case_sensitive: bool
    description: str
    encoding_version: int
    id: str
    secret: bool


class DlpDatasetUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpDatasetUpdateData(DlpDatasetUpdateDataRequired, total=False):
    case_sensitive: bool
    description: str
    encoding_version: int
    name: str
    result: dict
    secret: bool


class DlpDatasetRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpDocumentFingerprintRequired(TypedDict):
    result: dict


class DlpDocumentFingerprint(DlpDocumentFingerprintRequired, total=False):
    description: str
    id: str
    match_percent: int
    name: str


class DlpDocumentFingerprintLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpDocumentFingerprintListMatch(TypedDict):
    account_id: str


class DlpDocumentFingerprintCreateDataRequired(TypedDict):
    account_id: str
    result: dict


class DlpDocumentFingerprintCreateData(DlpDocumentFingerprintCreateDataRequired, total=False):
    id: str
    description: str
    match_percent: int
    name: str


class DlpDocumentFingerprintUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpDocumentFingerprintUpdateData(DlpDocumentFingerprintUpdateDataRequired, total=False):
    description: str
    match_percent: int
    name: str
    result: dict


class DlpDocumentFingerprintRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpEmailRequired(TypedDict):
    action: Any
    auth_requirements: Any
    conditions: list
    enabled: bool
    name: str
    new_priorities: dict
    result: dict


class DlpEmail(DlpEmailRequired, total=False):
    description: str


class DlpEmailLoadMatchRequired(TypedDict):
    account_id: str


class DlpEmailLoadMatch(DlpEmailLoadMatchRequired, total=False):
    rule_id: str


class DlpEmailListMatch(TypedDict):
    account_id: str


class DlpEmailCreateDataRequired(TypedDict):
    account_id: str
    action: Any
    auth_requirements: Any
    conditions: list
    enabled: bool
    name: str
    new_priorities: dict
    result: dict


class DlpEmailCreateData(DlpEmailCreateDataRequired, total=False):
    description: str


class DlpEmailUpdateDataRequired(TypedDict):
    account_id: str
    rule_id: str


class DlpEmailUpdateData(DlpEmailUpdateDataRequired, total=False):
    action: Any
    auth_requirements: Any
    conditions: list
    description: str
    enabled: bool
    name: str
    new_priorities: dict
    result: dict


class DlpEmailRemoveMatch(TypedDict):
    account_id: str
    rule_id: str


class DlpEntryRequired(TypedDict):
    enabled: bool
    name: str
    pattern: dict


class DlpEntry(DlpEntryRequired, total=False):
    description: str
    id: str
    profile_id: str
    result: Any


class DlpEntryLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpEntryListMatch(TypedDict):
    account_id: str


class DlpEntryCreateDataRequired(TypedDict):
    account_id: str
    enabled: bool
    name: str
    pattern: dict


class DlpEntryCreateData(DlpEntryCreateDataRequired, total=False):
    description: str
    id: str
    profile_id: str
    result: Any


class DlpEntryUpdateDataRequired(TypedDict):
    account_id: str


class DlpEntryUpdateData(DlpEntryUpdateDataRequired, total=False):
    entry_id: str
    id: str
    description: str
    enabled: bool
    name: str
    pattern: dict
    profile_id: str
    result: Any


class DlpEntryRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpIntegrationEntryRequired(TypedDict):
    enabled: bool
    entry_id: str


class DlpIntegrationEntry(DlpIntegrationEntryRequired, total=False):
    profile_id: str


class DlpIntegrationEntryCreateDataRequired(TypedDict):
    account_id: str
    enabled: bool
    entry_id: str


class DlpIntegrationEntryCreateData(DlpIntegrationEntryCreateDataRequired, total=False):
    profile_id: str


class DlpIntegrationEntryUpdateDataRequired(TypedDict):
    account_id: str
    entry_id: str


class DlpIntegrationEntryUpdateData(DlpIntegrationEntryUpdateDataRequired, total=False):
    enabled: bool
    profile_id: str


class DlpIntegrationEntryRemoveMatch(TypedDict):
    account_id: str
    entry_id: str


class DlpPredefinedEntryRequired(TypedDict):
    enabled: bool
    entry_id: str


class DlpPredefinedEntry(DlpPredefinedEntryRequired, total=False):
    profile_id: str


class DlpPredefinedEntryCreateDataRequired(TypedDict):
    account_id: str
    enabled: bool
    entry_id: str


class DlpPredefinedEntryCreateData(DlpPredefinedEntryCreateDataRequired, total=False):
    profile_id: str


class DlpPredefinedEntryRemoveMatch(TypedDict):
    account_id: str
    entry_id: str


class DlpProfileRequired(TypedDict):
    context_awareness: dict
    name: str


class DlpProfile(DlpProfileRequired, total=False):
    ai_context_enabled: bool
    allowed_match_count: int
    confidence_threshold: str
    data_classes: list
    data_tags: list
    description: str
    entries: list
    id: str
    ocr_enabled: bool
    result: Any
    sensitivity_levels: list
    shared_entries: list


class DlpProfileLoadMatchRequired(TypedDict):
    account_id: str


class DlpProfileLoadMatch(DlpProfileLoadMatchRequired, total=False):
    id: str
    profile_id: str


class DlpProfileListMatchRequired(TypedDict):
    account_id: str


class DlpProfileListMatch(DlpProfileListMatchRequired, total=False):
    all: bool


class DlpProfileCreateDataRequired(TypedDict):
    account_id: str
    context_awareness: dict
    name: str


class DlpProfileCreateData(DlpProfileCreateDataRequired, total=False):
    ai_context_enabled: bool
    allowed_match_count: int
    confidence_threshold: str
    data_classes: list
    data_tags: list
    description: str
    entries: list
    id: str
    ocr_enabled: bool
    result: Any
    sensitivity_levels: list
    shared_entries: list


class DlpProfileUpdateDataRequired(TypedDict):
    account_id: str
    profile_id: str


class DlpProfileUpdateData(DlpProfileUpdateDataRequired, total=False):
    ai_context_enabled: bool
    allowed_match_count: int
    confidence_threshold: str
    context_awareness: dict
    data_classes: list
    data_tags: list
    description: str
    entries: list
    id: str
    name: str
    ocr_enabled: bool
    result: Any
    sensitivity_levels: list
    shared_entries: list


class DlpProfileRemoveMatch(TypedDict):
    account_id: str
    profile_id: str


class DlpSensitivityGroupRequired(TypedDict):
    name: str
    result: dict


class DlpSensitivityGroup(DlpSensitivityGroupRequired, total=False):
    description: str
    id: str
    levels: list
    template_id: str


class DlpSensitivityGroupLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpSensitivityGroupListMatch(TypedDict):
    account_id: str


class DlpSensitivityGroupCreateDataRequired(TypedDict):
    account_id: str
    name: str
    result: dict


class DlpSensitivityGroupCreateData(DlpSensitivityGroupCreateDataRequired, total=False):
    description: str
    id: str
    levels: list
    template_id: str


class DlpSensitivityGroupUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DlpSensitivityGroupUpdateData(DlpSensitivityGroupUpdateDataRequired, total=False):
    description: str
    levels: list
    name: str
    result: dict
    template_id: str


class DlpSensitivityGroupRemoveMatch(TypedDict):
    account_id: str
    id: str


class DlpSensitivityGroupTemplateRequired(TypedDict):
    result: dict


class DlpSensitivityGroupTemplate(DlpSensitivityGroupTemplateRequired, total=False):
    id: str


class DlpSensitivityGroupTemplateLoadMatch(TypedDict):
    account_id: str
    id: str


class DlpSensitivityGroupTemplateListMatch(TypedDict):
    account_id: str


class DlpSensitivityLevelRequired(TypedDict):
    name: str
    result: dict


class DlpSensitivityLevel(DlpSensitivityLevelRequired, total=False):
    description: str
    id: str


class DlpSensitivityLevelLoadMatch(TypedDict):
    account_id: str
    id: str
    sensitivity_group_id: str


class DlpSensitivityLevelListMatch(TypedDict):
    account_id: str
    sensitivity_group_id: str


class DlpSensitivityLevelCreateDataRequired(TypedDict):
    account_id: str
    sensitivity_group_id: str
    name: str
    result: dict


class DlpSensitivityLevelCreateData(DlpSensitivityLevelCreateDataRequired, total=False):
    description: str
    id: str


class DlpSensitivityLevelUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    sensitivity_group_id: str


class DlpSensitivityLevelUpdateData(DlpSensitivityLevelUpdateDataRequired, total=False):
    description: str
    name: str
    result: dict


class DlpSensitivityLevelRemoveMatch(TypedDict):
    account_id: str
    id: str
    sensitivity_group_id: str


class DlpSettingRequired(TypedDict):
    regex: str
    result: dict


class DlpSetting(DlpSettingRequired, total=False):
    ai_context_analysis: bool
    masking_level: Any
    max_match_bytes: int
    ocr: bool
    payload_logging: Any
    public_key: str


class DlpSettingLoadMatch(TypedDict):
    account_id: str


class DlpSettingCreateDataRequired(TypedDict):
    account_id: str
    regex: str
    result: dict


class DlpSettingCreateData(DlpSettingCreateDataRequired, total=False):
    ai_context_analysis: bool
    masking_level: Any
    max_match_bytes: int
    ocr: bool
    payload_logging: Any
    public_key: str


class DlpSettingUpdateDataRequired(TypedDict):
    account_id: str


class DlpSettingUpdateData(DlpSettingUpdateDataRequired, total=False):
    ai_context_analysis: bool
    masking_level: Any
    max_match_bytes: int
    ocr: bool
    payload_logging: Any
    public_key: str
    regex: str
    result: dict


class DlpSettingRemoveMatch(TypedDict):
    account_id: str


class PolicyRequired(TypedDict):
    actions: dict
    applies_to_all_integrations: bool
    display_name: str
    enabled: bool
    errors: list
    finding_type_id: str
    messages: list
    result: dict
    result_info: dict
    success: bool


class Policy(PolicyRequired, total=False):
    description: str
    id: str
    integration_ids: list


class PolicyLoadMatch(TypedDict):
    account_id: str
    id: str


class PolicyListMatchRequired(TypedDict):
    account_id: str


class PolicyListMatch(PolicyListMatchRequired, total=False):
    cursor: str


class PolicyCreateDataRequired(TypedDict):
    account_id: str
    actions: dict
    applies_to_all_integrations: bool
    display_name: str
    enabled: bool
    errors: list
    finding_type_id: str
    messages: list
    result: dict
    result_info: dict
    success: bool


class PolicyCreateData(PolicyCreateDataRequired, total=False):
    description: str
    id: str
    integration_ids: list


class PolicyUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class PolicyUpdateData(PolicyUpdateDataRequired, total=False):
    actions: dict
    applies_to_all_integrations: bool
    description: str
    display_name: str
    enabled: bool
    errors: list
    finding_type_id: str
    integration_ids: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class PolicyRemoveMatch(TypedDict):
    account_id: str
    id: str


class PostureApiCreateRemediationJob(TypedDict):
    errors: list
    finding_instance_ids: list
    messages: list
    remediation_type_id: str
    result: dict
    success: bool


class PostureApiCreateRemediationJobCreateData(TypedDict):
    account_id: str
    errors: list
    finding_instance_ids: list
    messages: list
    remediation_type_id: str
    result: dict
    success: bool


class PostureApiCreateWebhookJob(TypedDict):
    finding_instance_ids: list
    webhook_ids: list


class PostureApiCreateWebhookJobCreateData(TypedDict):
    account_id: str
    finding_instance_ids: list
    webhook_ids: list


class PostureApiExportJobRequired(TypedDict):
    dlp_profile_information: list
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiExportJob(PostureApiExportJobRequired, total=False):
    archived: bool
    dlp_profile_id: list
    id: str
    ignored: bool
    integration_id: list
    max_affliction_date: str
    max_updated_at: str
    min_affliction_date: str
    min_updated_at: str
    orders: list
    product: str
    search: str
    severities: list
    status: list
    vendors: list


class PostureApiExportJobLoadMatch(TypedDict):
    account_id: str
    id: str


class PostureApiExportJobCreateDataRequired(TypedDict):
    account_id: str
    dlp_profile_information: list
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiExportJobCreateData(PostureApiExportJobCreateDataRequired, total=False):
    finding_id: str
    archived: bool
    dlp_profile_id: list
    id: str
    ignored: bool
    integration_id: list
    max_affliction_date: str
    max_updated_at: str
    min_affliction_date: str
    min_updated_at: str
    orders: list
    product: str
    search: str
    severities: list
    status: list
    vendors: list


class PostureApiFindingRequired(TypedDict):
    checks: list
    errors: list
    messages: list
    new_severity: int
    result: dict
    success: bool


class PostureApiFinding(PostureApiFindingRequired, total=False):
    id: str


class PostureApiFindingLoadMatch(TypedDict):
    account_id: str
    id: str


class PostureApiFindingCreateDataRequired(TypedDict):
    account_id: str
    checks: list
    errors: list
    messages: list
    new_severity: int
    result: dict
    success: bool


class PostureApiFindingCreateData(PostureApiFindingCreateDataRequired, total=False):
    finding_id: str
    id: str


class PostureApiFindingInstanceRequired(TypedDict):
    check_instances: list
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiFindingInstance(PostureApiFindingInstanceRequired, total=False):
    id: str


class PostureApiFindingInstanceLoadMatch(TypedDict):
    account_id: str
    finding_id: str
    id: str


class PostureApiFindingInstanceCreateDataRequired(TypedDict):
    account_id: str
    finding_id: str
    check_instances: list
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiFindingInstanceCreateData(PostureApiFindingInstanceCreateDataRequired, total=False):
    id: str


class PostureApiFindingTypeRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiFindingType(PostureApiFindingTypeRequired, total=False):
    id: str


class PostureApiFindingTypeLoadMatch(TypedDict):
    account_id: str
    id: str


class PostureApiPaginatedContentAssetListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedContentAssetList(PostureApiPaginatedContentAssetListRequired, total=False):
    result: list


class PostureApiPaginatedContentAssetListListMatchRequired(TypedDict):
    account_id: str


class PostureApiPaginatedContentAssetListListMatch(PostureApiPaginatedContentAssetListListMatchRequired, total=False):
    direction: str
    dlp_profile_id: str
    integration_id: str
    max_affliction_date: str
    min_affliction_date: str
    order: str
    page: int
    per_page: int
    search: str
    vendor: str


class PostureApiPaginatedExportJobListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedExportJobList(PostureApiPaginatedExportJobListRequired, total=False):
    result: list


class PostureApiPaginatedExportJobListListMatchRequired(TypedDict):
    account_id: str


class PostureApiPaginatedExportJobListListMatch(PostureApiPaginatedExportJobListListMatchRequired, total=False):
    page: int
    per_page: int
    status: str


class PostureApiPaginatedFindingInstanceListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedFindingInstanceList(PostureApiPaginatedFindingInstanceListRequired, total=False):
    result: list


class PostureApiPaginatedFindingInstanceListListMatchRequired(TypedDict):
    account_id: str
    finding_id: str


class PostureApiPaginatedFindingInstanceListListMatch(PostureApiPaginatedFindingInstanceListListMatchRequired, total=False):
    archived: bool
    asset_id: list
    cursor: str
    direction: str
    finding_instance_id: list
    max_affliction_date: str
    min_affliction_date: str
    order: str
    page: int
    per_page: int
    remediation_status: list
    search: str


class PostureApiPaginatedFindingListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedFindingList(PostureApiPaginatedFindingListRequired, total=False):
    result: list


class PostureApiPaginatedFindingListListMatchRequired(TypedDict):
    account_id: str


class PostureApiPaginatedFindingListListMatch(PostureApiPaginatedFindingListListMatchRequired, total=False):
    cursor: str
    direction: str
    finding_type_id: str
    ignored: bool
    integration_id: str
    max_affliction_date: str
    min_affliction_date: str
    observation: str
    order: str
    page: int
    per_page: int
    product: str
    search: str
    severity: str
    type: str
    vendor: str


class PostureApiPaginatedFindingTypeListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedFindingTypeList(PostureApiPaginatedFindingTypeListRequired, total=False):
    result: list


class PostureApiPaginatedFindingTypeListListMatchRequired(TypedDict):
    account_id: str


class PostureApiPaginatedFindingTypeListListMatch(PostureApiPaginatedFindingTypeListListMatchRequired, total=False):
    page: int
    per_page: int
    search: str
    vendor: list


class PostureApiPaginatedRemediationJobListRequired(TypedDict):
    asset: dict
    created_at: str
    finding_id: str
    finding_instance_id: str
    finding_type_id: str
    finding_type_name: str
    id: str
    integration_name: str
    last_updated: str
    remediation_type: str
    status: str
    triggered_by_user: str


class PostureApiPaginatedRemediationJobList(PostureApiPaginatedRemediationJobListRequired, total=False):
    triggered_by_actor: str
    triggered_by_id: str


class PostureApiPaginatedRemediationJobListListMatchRequired(TypedDict):
    account_id: str


class PostureApiPaginatedRemediationJobListListMatch(PostureApiPaginatedRemediationJobListListMatchRequired, total=False):
    cursor: str
    direction: str
    integration_id: str
    max_updated_at: str
    min_updated_at: str
    order: str
    page: int
    per_page: int
    search: str
    status: str
    triggered_by_actor: list


class PostureApiPaginatedRemediationTypeListRequired(TypedDict):
    errors: list
    messages: list
    result_info: dict
    success: bool


class PostureApiPaginatedRemediationTypeList(PostureApiPaginatedRemediationTypeListRequired, total=False):
    result: list


class PostureApiPaginatedRemediationTypeListListMatchRequired(TypedDict):
    account_id: str
    finding_type_id: str


class PostureApiPaginatedRemediationTypeListListMatch(PostureApiPaginatedRemediationTypeListListMatchRequired, total=False):
    cursor: str
    integration_id: str
    page: int
    per_page: int


class PostureApiWebhookRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiWebhook(PostureApiWebhookRequired, total=False):
    id: str


class PostureApiWebhookLoadMatch(TypedDict):
    account_id: str
    id: str


class PostureApiWebhookCreateDataRequired(TypedDict):
    account_id: str
    webhook_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class PostureApiWebhookCreateData(PostureApiWebhookCreateDataRequired, total=False):
    id: str


class PostureApiWebhookListRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class PostureApiWebhookList(PostureApiWebhookListRequired, total=False):
    result: list


class PostureApiWebhookListListMatch(TypedDict):
    account_id: str


class WebhookRequired(TypedDict):
    authentication_type: str
    destination_url: str
    label: str


class Webhook(WebhookRequired, total=False):
    headers: list
    id: str
    signing_secret: str
    status: str


class WebhookCreateDataRequired(TypedDict):
    account_id: str
    authentication_type: str
    destination_url: str
    label: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    headers: list
    id: str
    signing_secret: str
    status: str


class WebhookUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class WebhookUpdateData(WebhookUpdateDataRequired, total=False):
    authentication_type: str
    destination_url: str
    headers: list
    label: str
    signing_secret: str
    status: str


class WebhookRemoveMatch(TypedDict):
    account_id: str
    id: str
