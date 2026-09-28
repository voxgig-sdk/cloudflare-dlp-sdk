export interface DlpCustomPromptTopic {
    description?: string;
    enabled: boolean;
    id?: string;
    name: string;
    profile_id?: string;
    result: Record<string, any>;
    topic: string;
}
export interface DlpCustomPromptTopicLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpCustomPromptTopicListMatch {
    account_id: string;
}
export interface DlpCustomPromptTopicCreateData {
    account_id: string;
    description?: string;
    enabled: boolean;
    id?: string;
    name: string;
    profile_id?: string;
    result: Record<string, any>;
    topic: string;
}
export interface DlpCustomPromptTopicUpdateData {
    account_id: string;
    id: string;
    description?: string;
    enabled?: boolean;
    name?: string;
    profile_id?: string;
    result?: Record<string, any>;
    topic?: string;
}
export interface DlpCustomPromptTopicRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpDataClass {
    data_tags: any[];
    description?: string;
    expression: string;
    id?: string;
    name: string;
    result: Record<string, any>;
    sensitivity_levels: any[];
}
export interface DlpDataClassLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpDataClassListMatch {
    account_id: string;
}
export interface DlpDataClassCreateData {
    account_id: string;
    data_tags: any[];
    description?: string;
    expression: string;
    id?: string;
    name: string;
    result: Record<string, any>;
    sensitivity_levels: any[];
}
export interface DlpDataClassUpdateData {
    account_id: string;
    id: string;
    data_tags?: any[];
    description?: string;
    expression?: string;
    name?: string;
    result?: Record<string, any>;
    sensitivity_levels?: any[];
}
export interface DlpDataClassRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpDataTag {
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
}
export interface DlpDataTagLoadMatch {
    account_id: string;
    data_tag_category_id: string;
    id: string;
}
export interface DlpDataTagListMatch {
    account_id: string;
    data_tag_category_id: string;
}
export interface DlpDataTagCreateData {
    account_id: string;
    data_tag_category_id: string;
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
}
export interface DlpDataTagUpdateData {
    account_id: string;
    data_tag_category_id: string;
    id: string;
    description?: string;
    name?: string;
    result?: Record<string, any>;
}
export interface DlpDataTagRemoveMatch {
    account_id: string;
    data_tag_category_id: string;
    id: string;
}
export interface DlpDataTagCategory {
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
    tags?: any[];
    template_id?: string;
}
export interface DlpDataTagCategoryLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpDataTagCategoryListMatch {
    account_id: string;
}
export interface DlpDataTagCategoryCreateData {
    account_id: string;
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
    tags?: any[];
    template_id?: string;
}
export interface DlpDataTagCategoryUpdateData {
    account_id: string;
    id: string;
    description?: string;
    name?: string;
    result?: Record<string, any>;
    tags?: any[];
    template_id?: string;
}
export interface DlpDataTagCategoryRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpDataTagCategoryTemplate {
    id?: string;
    result: Record<string, any>;
}
export interface DlpDataTagCategoryTemplateLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpDataTagCategoryTemplateListMatch {
    account_id: string;
}
export interface DlpDataset {
    case_sensitive?: boolean;
    description?: string;
    encoding_version?: number;
    id?: string;
    name: string;
    result: Record<string, any>;
    secret?: boolean;
}
export interface DlpDatasetLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpDatasetListMatch {
    account_id: string;
}
export interface DlpDatasetCreateData {
    account_id: string;
    dataset_id?: string;
    entry_id?: string;
    version_id?: number;
    version?: number;
    case_sensitive?: boolean;
    description?: string;
    encoding_version?: number;
    id?: string;
    name: string;
    result: Record<string, any>;
    secret?: boolean;
}
export interface DlpDatasetUpdateData {
    account_id: string;
    id: string;
    case_sensitive?: boolean;
    description?: string;
    encoding_version?: number;
    name?: string;
    result?: Record<string, any>;
    secret?: boolean;
}
export interface DlpDatasetRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpDocumentFingerprint {
    description?: string;
    id?: string;
    match_percent?: number;
    name?: string;
    result: Record<string, any>;
}
export interface DlpDocumentFingerprintLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpDocumentFingerprintListMatch {
    account_id: string;
}
export interface DlpDocumentFingerprintCreateData {
    account_id: string;
    id?: string;
    description?: string;
    match_percent?: number;
    name?: string;
    result: Record<string, any>;
}
export interface DlpDocumentFingerprintUpdateData {
    account_id: string;
    id: string;
    description?: string;
    match_percent?: number;
    name?: string;
    result?: Record<string, any>;
}
export interface DlpDocumentFingerprintRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpEmail {
    action: any;
    auth_requirements: any;
    conditions: any[];
    description?: string;
    enabled: boolean;
    name: string;
    new_priorities: Record<string, any>;
    result: Record<string, any>;
}
export interface DlpEmailLoadMatch {
    account_id: string;
    rule_id?: string;
}
export interface DlpEmailListMatch {
    account_id: string;
}
export interface DlpEmailCreateData {
    account_id: string;
    action: any;
    auth_requirements: any;
    conditions: any[];
    description?: string;
    enabled: boolean;
    name: string;
    new_priorities: Record<string, any>;
    result: Record<string, any>;
}
export interface DlpEmailUpdateData {
    account_id: string;
    rule_id: string;
    action?: any;
    auth_requirements?: any;
    conditions?: any[];
    description?: string;
    enabled?: boolean;
    name?: string;
    new_priorities?: Record<string, any>;
    result?: Record<string, any>;
}
export interface DlpEmailRemoveMatch {
    account_id: string;
    rule_id: string;
}
export interface DlpEntry {
    description?: string;
    enabled: boolean;
    id?: string;
    name: string;
    pattern: Record<string, any>;
    profile_id?: string;
    result?: any;
}
export interface DlpEntryLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpEntryListMatch {
    account_id: string;
}
export interface DlpEntryCreateData {
    account_id: string;
    description?: string;
    enabled: boolean;
    id?: string;
    name: string;
    pattern: Record<string, any>;
    profile_id?: string;
    result?: any;
}
export interface DlpEntryUpdateData {
    account_id: string;
    entry_id?: string;
    id?: string;
    description?: string;
    enabled?: boolean;
    name?: string;
    pattern?: Record<string, any>;
    profile_id?: string;
    result?: any;
}
export interface DlpEntryRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpIntegrationEntry {
    enabled: boolean;
    entry_id: string;
    profile_id?: string;
}
export interface DlpIntegrationEntryCreateData {
    account_id: string;
    enabled: boolean;
    entry_id: string;
    profile_id?: string;
}
export interface DlpIntegrationEntryUpdateData {
    account_id: string;
    entry_id: string;
    enabled?: boolean;
    profile_id?: string;
}
export interface DlpIntegrationEntryRemoveMatch {
    account_id: string;
    entry_id: string;
}
export interface DlpPredefinedEntry {
    enabled: boolean;
    entry_id: string;
    profile_id?: string;
}
export interface DlpPredefinedEntryCreateData {
    account_id: string;
    enabled: boolean;
    entry_id: string;
    profile_id?: string;
}
export interface DlpPredefinedEntryRemoveMatch {
    account_id: string;
    entry_id: string;
}
export interface DlpProfile {
    ai_context_enabled?: boolean;
    allowed_match_count?: number;
    confidence_threshold?: string;
    context_awareness: Record<string, any>;
    data_classes?: any[];
    data_tags?: any[];
    description?: string;
    entries?: any[];
    id?: string;
    name: string;
    ocr_enabled?: boolean;
    result?: any;
    sensitivity_levels?: any[];
    shared_entries?: any[];
}
export interface DlpProfileLoadMatch {
    account_id: string;
    id?: string;
    profile_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface DlpProfileListMatch {
    account_id: string;
    all?: boolean;
}
export interface DlpProfileCreateData {
    account_id: string;
    ai_context_enabled?: boolean;
    allowed_match_count?: number;
    confidence_threshold?: string;
    context_awareness: Record<string, any>;
    data_classes?: any[];
    data_tags?: any[];
    description?: string;
    entries?: any[];
    id?: string;
    name: string;
    ocr_enabled?: boolean;
    result?: any;
    sensitivity_levels?: any[];
    shared_entries?: any[];
    $action?: string;
    [action: string]: any;
}
export interface DlpProfileUpdateData {
    account_id: string;
    profile_id: string;
    ai_context_enabled?: boolean;
    allowed_match_count?: number;
    confidence_threshold?: string;
    context_awareness?: Record<string, any>;
    data_classes?: any[];
    data_tags?: any[];
    description?: string;
    entries?: any[];
    id?: string;
    name?: string;
    ocr_enabled?: boolean;
    result?: any;
    sensitivity_levels?: any[];
    shared_entries?: any[];
    $action?: string;
    [action: string]: any;
}
export interface DlpProfileRemoveMatch {
    account_id: string;
    profile_id: string;
}
export interface DlpSensitivityGroup {
    description?: string;
    id?: string;
    levels?: any[];
    name: string;
    result: Record<string, any>;
    template_id?: string;
}
export interface DlpSensitivityGroupLoadMatch {
    account_id: string;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface DlpSensitivityGroupListMatch {
    account_id: string;
}
export interface DlpSensitivityGroupCreateData {
    account_id: string;
    description?: string;
    id?: string;
    levels?: any[];
    name: string;
    result: Record<string, any>;
    template_id?: string;
}
export interface DlpSensitivityGroupUpdateData {
    account_id: string;
    id: string;
    description?: string;
    levels?: any[];
    name?: string;
    result?: Record<string, any>;
    template_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface DlpSensitivityGroupRemoveMatch {
    account_id: string;
    id: string;
}
export interface DlpSensitivityGroupTemplate {
    id?: string;
    result: Record<string, any>;
}
export interface DlpSensitivityGroupTemplateLoadMatch {
    account_id: string;
    id: string;
}
export interface DlpSensitivityGroupTemplateListMatch {
    account_id: string;
}
export interface DlpSensitivityLevel {
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
}
export interface DlpSensitivityLevelLoadMatch {
    account_id: string;
    id: string;
    sensitivity_group_id: string;
}
export interface DlpSensitivityLevelListMatch {
    account_id: string;
    sensitivity_group_id: string;
}
export interface DlpSensitivityLevelCreateData {
    account_id: string;
    sensitivity_group_id: string;
    description?: string;
    id?: string;
    name: string;
    result: Record<string, any>;
}
export interface DlpSensitivityLevelUpdateData {
    account_id: string;
    id: string;
    sensitivity_group_id: string;
    description?: string;
    name?: string;
    result?: Record<string, any>;
}
export interface DlpSensitivityLevelRemoveMatch {
    account_id: string;
    id: string;
    sensitivity_group_id: string;
}
export interface DlpSetting {
    ai_context_analysis?: boolean;
    masking_level?: any;
    max_match_bytes?: number;
    ocr?: boolean;
    payload_logging?: any;
    public_key?: string;
    regex: string;
    result: Record<string, any>;
}
export interface DlpSettingLoadMatch {
    account_id: string;
}
export interface DlpSettingCreateData {
    account_id: string;
    ai_context_analysis?: boolean;
    masking_level?: any;
    max_match_bytes?: number;
    ocr?: boolean;
    payload_logging?: any;
    public_key?: string;
    regex: string;
    result: Record<string, any>;
}
export interface DlpSettingUpdateData {
    account_id: string;
    ai_context_analysis?: boolean;
    masking_level?: any;
    max_match_bytes?: number;
    ocr?: boolean;
    payload_logging?: any;
    public_key?: string;
    regex?: string;
    result?: Record<string, any>;
}
export interface DlpSettingRemoveMatch {
    account_id: string;
}
export interface Policy {
    actions: Record<string, any>;
    applies_to_all_integrations: boolean;
    description?: string;
    display_name: string;
    enabled: boolean;
    errors: any[];
    finding_type_id: string;
    id?: string;
    integration_ids?: any[];
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
}
export interface PolicyLoadMatch {
    account_id: string;
    id: string;
}
export interface PolicyListMatch {
    account_id: string;
    cursor?: string;
    $action?: string;
    [action: string]: any;
}
export interface PolicyCreateData {
    account_id: string;
    actions: Record<string, any>;
    applies_to_all_integrations: boolean;
    description?: string;
    display_name: string;
    enabled: boolean;
    errors: any[];
    finding_type_id: string;
    id?: string;
    integration_ids?: any[];
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
}
export interface PolicyUpdateData {
    account_id: string;
    id: string;
    actions?: Record<string, any>;
    applies_to_all_integrations?: boolean;
    description?: string;
    display_name?: string;
    enabled?: boolean;
    errors?: any[];
    finding_type_id?: string;
    integration_ids?: any[];
    messages?: any[];
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    success?: boolean;
}
export interface PolicyRemoveMatch {
    account_id: string;
    id: string;
}
export interface PostureApiCreateRemediationJob {
    errors: any[];
    finding_instance_ids: any[];
    messages: any[];
    remediation_type_id: string;
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiCreateRemediationJobCreateData {
    account_id: string;
    errors: any[];
    finding_instance_ids: any[];
    messages: any[];
    remediation_type_id: string;
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiCreateWebhookJob {
    finding_instance_ids: any[];
    webhook_ids: any[];
}
export interface PostureApiCreateWebhookJobCreateData {
    account_id: string;
    finding_instance_ids: any[];
    webhook_ids: any[];
}
export interface PostureApiExportJob {
    archived?: boolean;
    dlp_profile_id?: any[];
    dlp_profile_information: any[];
    errors: any[];
    id?: string;
    ignored?: boolean;
    integration_id?: any[];
    max_affliction_date?: string;
    max_updated_at?: string;
    messages: any[];
    min_affliction_date?: string;
    min_updated_at?: string;
    orders?: any[];
    product?: string;
    result: Record<string, any>;
    search?: string;
    severities?: any[];
    status?: any[];
    success: boolean;
    vendors?: any[];
}
export interface PostureApiExportJobLoadMatch {
    account_id: string;
    id: string;
}
export interface PostureApiExportJobCreateData {
    account_id: string;
    finding_id?: string;
    archived?: boolean;
    dlp_profile_id?: any[];
    dlp_profile_information: any[];
    errors: any[];
    id?: string;
    ignored?: boolean;
    integration_id?: any[];
    max_affliction_date?: string;
    max_updated_at?: string;
    messages: any[];
    min_affliction_date?: string;
    min_updated_at?: string;
    orders?: any[];
    product?: string;
    result: Record<string, any>;
    search?: string;
    severities?: any[];
    status?: any[];
    success: boolean;
    vendors?: any[];
}
export interface PostureApiFinding {
    checks: any[];
    errors: any[];
    id?: string;
    messages: any[];
    new_severity: number;
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiFindingLoadMatch {
    account_id: string;
    id: string;
}
export interface PostureApiFindingCreateData {
    account_id: string;
    finding_id?: string;
    checks: any[];
    errors: any[];
    id?: string;
    messages: any[];
    new_severity: number;
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiFindingInstance {
    check_instances: any[];
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiFindingInstanceLoadMatch {
    account_id: string;
    finding_id: string;
    id: string;
}
export interface PostureApiFindingInstanceCreateData {
    account_id: string;
    finding_id: string;
    check_instances: any[];
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiFindingType {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiFindingTypeLoadMatch {
    account_id: string;
    id: string;
}
export interface PostureApiPaginatedContentAssetList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedContentAssetListListMatch {
    account_id: string;
    direction?: string;
    dlp_profile_id?: string;
    integration_id?: string;
    max_affliction_date?: string;
    min_affliction_date?: string;
    order?: string;
    page?: number;
    per_page?: number;
    search?: string;
    vendor?: string;
}
export interface PostureApiPaginatedExportJobList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedExportJobListListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
    status?: string;
}
export interface PostureApiPaginatedFindingInstanceList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedFindingInstanceListListMatch {
    account_id: string;
    finding_id: string;
    archived?: boolean;
    asset_id?: any[];
    cursor?: string;
    direction?: string;
    finding_instance_id?: any[];
    max_affliction_date?: string;
    min_affliction_date?: string;
    order?: string;
    page?: number;
    per_page?: number;
    remediation_status?: any[];
    search?: string;
}
export interface PostureApiPaginatedFindingList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedFindingListListMatch {
    account_id: string;
    cursor?: string;
    direction?: string;
    finding_type_id?: string;
    ignored?: boolean;
    integration_id?: string;
    max_affliction_date?: string;
    min_affliction_date?: string;
    observation?: string;
    order?: string;
    page?: number;
    per_page?: number;
    product?: string;
    search?: string;
    severity?: string;
    type?: string;
    vendor?: string;
}
export interface PostureApiPaginatedFindingTypeList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedFindingTypeListListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
    search?: string;
    vendor?: any[];
}
export interface PostureApiPaginatedRemediationJobList {
    asset: Record<string, any>;
    created_at: string;
    finding_id: string;
    finding_instance_id: string;
    finding_type_id: string;
    finding_type_name: string;
    id: string;
    integration_name: string;
    last_updated: string;
    remediation_type: string;
    status: string;
    triggered_by_actor?: string;
    triggered_by_id?: string;
    triggered_by_user: string;
}
export interface PostureApiPaginatedRemediationJobListListMatch {
    account_id: string;
    cursor?: string;
    direction?: string;
    integration_id?: string;
    max_updated_at?: string;
    min_updated_at?: string;
    order?: string;
    page?: number;
    per_page?: number;
    search?: string;
    status?: string;
    triggered_by_actor?: any[];
}
export interface PostureApiPaginatedRemediationTypeList {
    errors: any[];
    messages: any[];
    result?: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface PostureApiPaginatedRemediationTypeListListMatch {
    account_id: string;
    finding_type_id: string;
    cursor?: string;
    integration_id?: string;
    page?: number;
    per_page?: number;
}
export interface PostureApiWebhook {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface PostureApiWebhookLoadMatch {
    account_id: string;
    id: string;
}
export interface PostureApiWebhookCreateData {
    account_id: string;
    webhook_id: string;
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
    $action?: string;
    [action: string]: any;
}
export interface PostureApiWebhookList {
    errors: any[];
    messages: any[];
    result?: any[];
    success: boolean;
}
export interface PostureApiWebhookListListMatch {
    account_id: string;
}
export interface Webhook {
    authentication_type: string;
    destination_url: string;
    headers?: any[];
    id?: string;
    label: string;
    signing_secret?: string;
    status?: string;
}
export interface WebhookCreateData {
    account_id: string;
    authentication_type: string;
    destination_url: string;
    headers?: any[];
    id?: string;
    label: string;
    signing_secret?: string;
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface WebhookUpdateData {
    account_id: string;
    id: string;
    authentication_type?: string;
    destination_url?: string;
    headers?: any[];
    label?: string;
    signing_secret?: string;
    status?: string;
}
export interface WebhookRemoveMatch {
    account_id: string;
    id: string;
}
