# Cloudflare DLP

Cloudflare Data Loss Prevention: profiles, datasets, patterns, and detection entries.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 33 entities and 129 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html)

Results: Create custom prompt topic response.; List custom prompt topics response.; Get custom prompt topic response.; Delete custom prompt topic response.; Update custom prompt topic response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [DlpDataClass](docs/api/dlp_data_class.html)

Results: Data class created successfully.; Data class list was successful.; Data class read was successful.; Data class delete was successful.; Data class update was successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [DlpDataTag](docs/api/dlp_data_tag.html)

Results: Data tag created successfully.; Data tags read was successful.; Data tag read was successful.; Data tag delete was successful.; Data tag update was successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [DlpDataTagCategory](docs/api/dlp_data_tag_category.html)

Results: Data tag category created successfully.; Data tag category read was successful.; Data tag category delete was successful.; Data tag category update was successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `tags`: Tags to create with the category.

### [DlpDataTagCategoryTemplate](docs/api/dlp_data_tag_category_template.html)

Results: Data tag category template read was successful.

SDK operations: `list`, `load`.

### [DlpDataset](docs/api/dlp_dataset.html)

Results: Dataset column uploaded successfully.; Dataset version uploaded successfully.; Dataset columns created successfully.; Dataset version created successfully.; Dataset created successfully.; Datasets read successfully.; Dataset read successfully.; Dataset deleted successfully.; Dataset updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `case_sensitive`: Only applies to custom word lists.
- `description`: The description of the dataset.
- `encoding_version`: Encoding version to use for dataset.
- `name`: The name of the dataset, must be unique.
- `secret`: The secret to use for Exact Data Match datasets. This is not present in Custom Wordlists.

### [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html)

Results: Document fingerprint read was successful.; Document fingerprint created successfully.; Document fingerprint delete was successful.; File uploaded successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [DlpEmail](docs/api/dlp_email.html)

Results: New Email Scanner Account Mapping response.; New Email Scanner Rule response.; List all email scanner rules response.; Get Email Scanner Rule response.; Get Email Scanner Account Mapping response.; Update Email Scanner Rule priorities response.; Delete Email Scanner Rule response.; Update Email Scanner Rule response.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `conditions`: Triggered if all conditions match.

### [DlpEntry](docs/api/dlp_entry.html)

Results: Create new custom entry response.; List all entries response.; Get entry response.; Delete custom entry response.; Update entry response.; Update predefined entry response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: The optional description of the custom prompt topic entry.

### [DlpIntegrationEntry](docs/api/dlp_integration_entry.html)

Results: Create integration entry response.; Delete integration entry response.; Update integration entry response.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `profile_id`: This field is not used as the owning profile.

### [DlpPredefinedEntry](docs/api/dlp_predefined_entry.html)

Results: Create predefined entry response.; Delete predefined entry response.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `profile_id`: This field is not used as the owning profile.

### [DlpProfile](docs/api/dlp_profile.html)

Results: Create predefined profile response.; New custom profile response.; List all profiles response.; List all custom profiles response.; Get profile response.; Predefined profile response.; Custom profile response.; Delete custom profile response.; Delete predefined profile response.; Update predefined profile response.; Update custom profile response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allowed_match_count`: Related DLP policies will trigger when the match count exceeds the number set.
- `context_awareness`: Scan the context of predefined entries to only return matches surrounded by keywords.
- `data_classes`: Data classes associated with this profile.
- `data_tags`: Data tags associated with this profile.
- `description`: The optional description of the custom prompt topic entry.

### [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html)

Results: Sensitivity group created successfully.; Sensitivity group read was successful.; Level order read was successful.; Sensitivity group delete was successful.; Sensitivity group update was successful.; Level order update was successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `levels`: Levels to create with the group.
- `result`: The ordered list of level IDs for a sensitivity group. Used to get and set the ordering of levels independently of level attributes.

### [DlpSensitivityGroupTemplate](docs/api/dlp_sensitivity_group_template.html)

Results: Sensitivity group template read was successful.

SDK operations: `list`, `load`.

### [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html)

Results: Sensitivity level created successfully.; Sensitivity levels read was successful.; Sensitivity level read was successful.; Sensitivity level delete was successful.; Sensitivity level update was successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [DlpSetting](docs/api/dlp_setting.html)

Results: Validation response.; Limits retrieved successfully.; Payload log settings.; DLP settings.; DLP settings reset.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `ai_context_analysis`: Whether AI context analysis is enabled at the account level.
- `max_match_bytes`: Maximum number of bytes that the regular expression can match.
- `ocr`: Whether OCR is enabled at the account level.
- `public_key`: Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
- `result`: DLP account-level settings response.

### [Policy](docs/api/policy.html)

Results: OK: Policy created successfully; OK: Policy logs retrieved successfully; OK: Policies retrieved successfully; OK: Policy retrieved successfully; OK: Policy deleted successfully; OK: Policy updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `actions`: The actions configured for this policy.
- `applies_to_all_integrations`: When true, the policy applies to all integrations for the account. When false, it applies only to the specified integration_ids.
- `description`: User-set description of what this policy does. Limited to 1000 characters.
- `display_name`: Display name for the policy configuration. Limited to 255 characters.
- `enabled`: Whether the policy is enabled. Derived from disabled_at (enabled when disabled_at is unset).

### [PostureApiCreateRemediationJob](docs/api/posture_api_create_remediation_job.html)

Results: OK: Successful HTTP request.

SDK operations: `create`.

Key fields to recognise:

- `errors`: Array of error messages.
- `finding_instance_ids`: UUIDs identifying Finding Instances.
- `messages`: Array of informational messages.
- `remediation_type_id`: A UUID identifying this Remediation Type.
- `success`: Whether the API call was successful.

### [PostureApiCreateWebhookJob](docs/api/posture_api_create_webhook_job.html)

Results: OK: Webhook jobs successfully created.

SDK operations: `create`.

Key fields to recognise:

- `finding_instance_ids`: Array of finding instance IDs to send to the webhooks.
- `webhook_ids`: Array of webhook IDs to trigger jobs for.

### [PostureApiExportJob](docs/api/posture_api_export_job.html)

Results: OK: Successful HTTP request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `archived`: Filter for archived status.
- `dlp_profile_id`: Filter by DLP profile IDs.
- `dlp_profile_information`: DLP profile metadata for the export.
- `errors`: Contains information on errors which may have occurred during export creation.
- `id`: Unique identifier for the export job.

### [PostureApiFinding](docs/api/posture_api_finding.html)

Results: OK: Successful HTTP request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `checks`: A list of finding IDs to pass along.
- `id`: Base64 encoded identifier of the security finding.
- `new_severity`: The numeric severity value to apply to the finding.
- `result`: Aggregated finding information with counts and metadata. This is optimized for list API queries and represents a finding along with its instance statistics.
- `success`: Whether the API call was successful.

### [PostureApiFindingInstance](docs/api/posture_api_finding_instance.html)

Results: OK: Successful HTTP request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `check_instances`: A list of finding instance IDs to pass along.
- `id`: Unique identifier for the finding instance.
- `result`: A specific instance of a security finding. In the API interface, we refer to the &#39;finding&#39; table in our DB as finding instances, optimized for the p99 use case.
- `success`: Whether the API call was successful.

### [PostureApiFindingType](docs/api/posture_api_finding_type.html)

Results: OK: Successful HTTP request.

SDK operations: `load`.

Key fields to recognise:

- `id`: The unique identifier of the finding.
- `result`: Basic finding type information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedContentAssetList](docs/api/posture_api_paginated_content_asset_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: Array of content asset objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedExportJobList](docs/api/posture_api_paginated_export_job_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `errors`: Contains information on errors which may have occurred during export creation.
- `result`: Array of export job objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedFindingInstanceList](docs/api/posture_api_paginated_finding_instance_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: Array of finding instance objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedFindingList](docs/api/posture_api_paginated_finding_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: Array of finding objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedFindingTypeList](docs/api/posture_api_paginated_finding_type_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: Array of finding type objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiPaginatedRemediationJobList](docs/api/posture_api_paginated_remediation_job_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `asset`: Asset information for a remediation job.
- `created_at`: When the remediation job was created.
- `finding_id`: Encoded finding ID.
- `finding_instance_id`: ID of the finding instance being remediated.
- `finding_type_id`: ID of the finding type.

### [PostureApiPaginatedRemediationTypeList](docs/api/posture_api_paginated_remediation_type_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: Array of remediation type objects.
- `result_info`: Pagination and result information.
- `success`: Whether the API call was successful.

### [PostureApiWebhook](docs/api/posture_api_webhook.html)

Results: OK: Webhook test completed (check success field for result); OK: Successful HTTP request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the specific webhook configuration.
- `result`: Response body for webhook evaluation test results.
- `success`: Whether the API call was successful.

### [PostureApiWebhookList](docs/api/posture_api_webhook_list.html)

Results: OK: Successful HTTP request.

SDK operations: `list`.

Key fields to recognise:

- `result`: List of webhook configurations.
- `success`: Whether the API call was successful.

### [Webhook](docs/api/webhook.html)

Results: OK: Webhook created successfully; OK: Webhook test completed (check success field for result); OK: Webhook successfully deleted; OK: Webhook updated successfully.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `authentication_type`: Type of authentication used for the webhook.
- `destination_url`: Target URL for the webhook configuration. Where resulting data will be sent.
- `headers`: List of header keys configured for this webhook. Values are not included for security reasons.
- `id`: Unique identifier for the specific webhook configuration.
- `label`: Account-specified display label for the webhook configuration.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html) | `create` | `POST /accounts/{account_id}/dlp/custom_prompt_topics` | Required |
| [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html) | `list` | `GET /accounts/{account_id}/dlp/custom_prompt_topics` | Required |
| [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html) | `load` | `GET /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}` | Required |
| [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html) | `remove` | `DELETE /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}` | Required |
| [DlpCustomPromptTopic](docs/api/dlp_custom_prompt_topic.html) | `update` | `PUT /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}` | Required |
| [DlpDataClass](docs/api/dlp_data_class.html) | `create` | `POST /accounts/{account_id}/dlp/data_classes` | Required |
| [DlpDataClass](docs/api/dlp_data_class.html) | `list` | `GET /accounts/{account_id}/dlp/data_classes` | Required |
| [DlpDataClass](docs/api/dlp_data_class.html) | `load` | `GET /accounts/{account_id}/dlp/data_classes/{data_class_id}` | Required |
| [DlpDataClass](docs/api/dlp_data_class.html) | `remove` | `DELETE /accounts/{account_id}/dlp/data_classes/{data_class_id}` | Required |
| [DlpDataClass](docs/api/dlp_data_class.html) | `update` | `PUT /accounts/{account_id}/dlp/data_classes/{data_class_id}` | Required |
| [DlpDataTag](docs/api/dlp_data_tag.html) | `create` | `POST /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags` | Required |
| [DlpDataTag](docs/api/dlp_data_tag.html) | `list` | `GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags` | Required |
| [DlpDataTag](docs/api/dlp_data_tag.html) | `load` | `GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}` | Required |
| [DlpDataTag](docs/api/dlp_data_tag.html) | `remove` | `DELETE /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}` | Required |
| [DlpDataTag](docs/api/dlp_data_tag.html) | `update` | `PUT /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}` | Required |
| [DlpDataTagCategory](docs/api/dlp_data_tag_category.html) | `create` | `POST /accounts/{account_id}/dlp/data_tag_categories` | Required |
| [DlpDataTagCategory](docs/api/dlp_data_tag_category.html) | `list` | `GET /accounts/{account_id}/dlp/data_tag_categories` | Required |
| [DlpDataTagCategory](docs/api/dlp_data_tag_category.html) | `load` | `GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}` | Required |
| [DlpDataTagCategory](docs/api/dlp_data_tag_category.html) | `remove` | `DELETE /accounts/{account_id}/dlp/data_tag_categories/{category_id}` | Required |
| [DlpDataTagCategory](docs/api/dlp_data_tag_category.html) | `update` | `PUT /accounts/{account_id}/dlp/data_tag_categories/{category_id}` | Required |
| [DlpDataTagCategoryTemplate](docs/api/dlp_data_tag_category_template.html) | `list` | `GET /accounts/{account_id}/dlp/data_tag_category_templates` | Required |
| [DlpDataTagCategoryTemplate](docs/api/dlp_data_tag_category_template.html) | `load` | `GET /accounts/{account_id}/dlp/data_tag_category_templates/{template_id}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `create` | `POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `create` | `POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `create` | `POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `create` | `POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `create` | `POST /accounts/{account_id}/dlp/datasets` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `list` | `GET /accounts/{account_id}/dlp/datasets` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `load` | `GET /accounts/{account_id}/dlp/datasets/{dataset_id}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `remove` | `DELETE /accounts/{account_id}/dlp/datasets/{dataset_id}` | Required |
| [DlpDataset](docs/api/dlp_dataset.html) | `update` | `PUT /accounts/{account_id}/dlp/datasets/{dataset_id}` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `create` | `POST /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `create` | `POST /accounts/{account_id}/dlp/document_fingerprints` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `list` | `GET /accounts/{account_id}/dlp/document_fingerprints` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `load` | `GET /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `remove` | `DELETE /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}` | Required |
| [DlpDocumentFingerprint](docs/api/dlp_document_fingerprint.html) | `update` | `PUT /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `create` | `POST /accounts/{account_id}/dlp/email/account_mapping` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `create` | `POST /accounts/{account_id}/dlp/email/rules` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `list` | `GET /accounts/{account_id}/dlp/email/rules` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `load` | `GET /accounts/{account_id}/dlp/email/rules/{rule_id}` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `load` | `GET /accounts/{account_id}/dlp/email/account_mapping` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `patch` | `PATCH /accounts/{account_id}/dlp/email/rules` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `remove` | `DELETE /accounts/{account_id}/dlp/email/rules/{rule_id}` | Required |
| [DlpEmail](docs/api/dlp_email.html) | `update` | `PUT /accounts/{account_id}/dlp/email/rules/{rule_id}` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `create` | `POST /accounts/{account_id}/dlp/entries` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `list` | `GET /accounts/{account_id}/dlp/entries` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `load` | `GET /accounts/{account_id}/dlp/entries/{entry_id}` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `remove` | `DELETE /accounts/{account_id}/dlp/entries/{entry_id}` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `update` | `PUT /accounts/{account_id}/dlp/entries/custom/{entry_id}` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `update` | `PUT /accounts/{account_id}/dlp/entries/predefined/{entry_id}` | Required |
| [DlpEntry](docs/api/dlp_entry.html) | `update` | `PUT /accounts/{account_id}/dlp/entries/{entry_id}` | Required |
| [DlpIntegrationEntry](docs/api/dlp_integration_entry.html) | `create` | `POST /accounts/{account_id}/dlp/entries/integration` | Required |
| [DlpIntegrationEntry](docs/api/dlp_integration_entry.html) | `remove` | `DELETE /accounts/{account_id}/dlp/entries/integration/{entry_id}` | Required |
| [DlpIntegrationEntry](docs/api/dlp_integration_entry.html) | `update` | `PUT /accounts/{account_id}/dlp/entries/integration/{entry_id}` | Required |
| [DlpPredefinedEntry](docs/api/dlp_predefined_entry.html) | `create` | `POST /accounts/{account_id}/dlp/entries/predefined` | Required |
| [DlpPredefinedEntry](docs/api/dlp_predefined_entry.html) | `remove` | `DELETE /accounts/{account_id}/dlp/entries/predefined/{entry_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `create` | `POST /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `create` | `POST /accounts/{account_id}/dlp/profiles/custom` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `create` | `POST /accounts/{account_id}/dlp/profiles/predefined` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `list` | `GET /accounts/{account_id}/dlp/profiles` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `list` | `GET /accounts/{account_id}/dlp/profiles/custom` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `load` | `GET /accounts/{account_id}/dlp/profiles/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `load` | `GET /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `load` | `GET /accounts/{account_id}/dlp/profiles/custom/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `load` | `GET /accounts/{account_id}/dlp/profiles/predefined/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `remove` | `DELETE /accounts/{account_id}/dlp/profiles/custom/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `remove` | `DELETE /accounts/{account_id}/dlp/profiles/predefined/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `update` | `PUT /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `update` | `PUT /accounts/{account_id}/dlp/profiles/custom/{profile_id}` | Required |
| [DlpProfile](docs/api/dlp_profile.html) | `update` | `PUT /accounts/{account_id}/dlp/profiles/predefined/{profile_id}` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `create` | `POST /accounts/{account_id}/dlp/sensitivity_groups` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `list` | `GET /accounts/{account_id}/dlp/sensitivity_groups` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `load` | `GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `load` | `GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `remove` | `DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `update` | `PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}` | Required |
| [DlpSensitivityGroup](docs/api/dlp_sensitivity_group.html) | `update` | `PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order` | Required |
| [DlpSensitivityGroupTemplate](docs/api/dlp_sensitivity_group_template.html) | `list` | `GET /accounts/{account_id}/dlp/sensitivity_groups/templates` | Required |
| [DlpSensitivityGroupTemplate](docs/api/dlp_sensitivity_group_template.html) | `load` | `GET /accounts/{account_id}/dlp/sensitivity_groups/templates/{template_id}` | Required |
| [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html) | `create` | `POST /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels` | Required |
| [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html) | `list` | `GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels` | Required |
| [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html) | `load` | `GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}` | Required |
| [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html) | `remove` | `DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}` | Required |
| [DlpSensitivityLevel](docs/api/dlp_sensitivity_level.html) | `update` | `PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `create` | `POST /accounts/{account_id}/dlp/patterns/validate` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `load` | `GET /accounts/{account_id}/dlp/limits` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `load` | `GET /accounts/{account_id}/dlp/payload_log` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `load` | `GET /accounts/{account_id}/dlp/settings` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `patch` | `PATCH /accounts/{account_id}/dlp/settings` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `remove` | `DELETE /accounts/{account_id}/dlp/settings` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `update` | `PUT /accounts/{account_id}/dlp/payload_log` | Required |
| [DlpSetting](docs/api/dlp_setting.html) | `update` | `PUT /accounts/{account_id}/dlp/settings` | Required |
| [Policy](docs/api/policy.html) | `create` | `POST /accounts/{account_id}/data-security/posture/policies` | Required |
| [Policy](docs/api/policy.html) | `list` | `GET /accounts/{account_id}/data-security/posture/policies/logs` | Required |
| [Policy](docs/api/policy.html) | `list` | `GET /accounts/{account_id}/data-security/posture/policies` | Required |
| [Policy](docs/api/policy.html) | `load` | `GET /accounts/{account_id}/data-security/posture/policies/{policy_id}` | Required |
| [Policy](docs/api/policy.html) | `remove` | `DELETE /accounts/{account_id}/data-security/posture/policies/{policy_id}` | Required |
| [Policy](docs/api/policy.html) | `update` | `PUT /accounts/{account_id}/data-security/posture/policies/{policy_id}` | Required |
| [PostureApiCreateRemediationJob](docs/api/posture_api_create_remediation_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/remediations/jobs` | Required |
| [PostureApiCreateWebhookJob](docs/api/posture_api_create_webhook_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/webhooks/jobs` | Required |
| [PostureApiExportJob](docs/api/posture_api_export_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export` | Required |
| [PostureApiExportJob](docs/api/posture_api_export_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/content/export` | Required |
| [PostureApiExportJob](docs/api/posture_api_export_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/export` | Required |
| [PostureApiExportJob](docs/api/posture_api_export_job.html) | `create` | `POST /accounts/{account_id}/data-security/posture/remediations/jobs/export` | Required |
| [PostureApiExportJob](docs/api/posture_api_export_job.html) | `load` | `GET /accounts/{account_id}/data-security/posture/exports/{id}` | Required |
| [PostureApiFinding](docs/api/posture_api_finding.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/reset_finding_severity` | Required |
| [PostureApiFinding](docs/api/posture_api_finding.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/tune_finding_severity` | Required |
| [PostureApiFinding](docs/api/posture_api_finding.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/ignore` | Required |
| [PostureApiFinding](docs/api/posture_api_finding.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/unignore` | Required |
| [PostureApiFinding](docs/api/posture_api_finding.html) | `load` | `GET /accounts/{account_id}/data-security/posture/findings/{finding_id}` | Required |
| [PostureApiFindingInstance](docs/api/posture_api_finding_instance.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive` | Required |
| [PostureApiFindingInstance](docs/api/posture_api_finding_instance.html) | `create` | `POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive` | Required |
| [PostureApiFindingInstance](docs/api/posture_api_finding_instance.html) | `load` | `GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}` | Required |
| [PostureApiFindingType](docs/api/posture_api_finding_type.html) | `load` | `GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}` | Required |
| [PostureApiPaginatedContentAssetList](docs/api/posture_api_paginated_content_asset_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/content` | Required |
| [PostureApiPaginatedExportJobList](docs/api/posture_api_paginated_export_job_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/exports` | Required |
| [PostureApiPaginatedFindingInstanceList](docs/api/posture_api_paginated_finding_instance_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances` | Required |
| [PostureApiPaginatedFindingList](docs/api/posture_api_paginated_finding_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/findings` | Required |
| [PostureApiPaginatedFindingTypeList](docs/api/posture_api_paginated_finding_type_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/finding_types` | Required |
| [PostureApiPaginatedRemediationJobList](docs/api/posture_api_paginated_remediation_job_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/remediations/jobs` | Required |
| [PostureApiPaginatedRemediationTypeList](docs/api/posture_api_paginated_remediation_type_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types` | Required |
| [PostureApiWebhook](docs/api/posture_api_webhook.html) | `create` | `POST /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate` | Required |
| [PostureApiWebhook](docs/api/posture_api_webhook.html) | `load` | `GET /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}` | Required |
| [PostureApiWebhookList](docs/api/posture_api_webhook_list.html) | `list` | `GET /accounts/{account_id}/data-security/posture/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /accounts/{account_id}/data-security/posture/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /accounts/{account_id}/data-security/posture/webhooks/evaluate` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}` | Required |
| [Webhook](docs/api/webhook.html) | `update` | `PUT /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-dlp_list`: List records for an entity. Supported entities: `dlp_custom_prompt_topic`, `dlp_data_class`, `dlp_data_tag`, `dlp_data_tag_category`, `dlp_data_tag_category_template`, `dlp_dataset`, `dlp_document_fingerprint`, `dlp_email`, `dlp_entry`, `dlp_profile`, `dlp_sensitivity_group`, `dlp_sensitivity_group_template`, `dlp_sensitivity_level`, `policy`, `posture_api_paginated_content_asset_list`, `posture_api_paginated_export_job_list`, `posture_api_paginated_finding_instance_list`, `posture_api_paginated_finding_list`, `posture_api_paginated_finding_type_list`, `posture_api_paginated_remediation_job_list`, `posture_api_paginated_remediation_type_list`, `posture_api_webhook_list`.
- `cloudflare-dlp_load`: Load one record for an entity. Supported entities: `dlp_custom_prompt_topic`, `dlp_data_class`, `dlp_data_tag`, `dlp_data_tag_category`, `dlp_data_tag_category_template`, `dlp_dataset`, `dlp_document_fingerprint`, `dlp_email`, `dlp_entry`, `dlp_profile`, `dlp_sensitivity_group`, `dlp_sensitivity_group_template`, `dlp_sensitivity_level`, `dlp_setting`, `policy`, `posture_api_export_job`, `posture_api_finding`, `posture_api_finding_instance`, `posture_api_finding_type`, `posture_api_webhook`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

