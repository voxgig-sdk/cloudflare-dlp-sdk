# frozen_string_literal: true

# Typed models for the CloudflareDlp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# DlpCustomPromptTopic entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] topic
#   @return [String]
DlpCustomPromptTopic = Struct.new(
  :description,
  :enabled,
  :id,
  :name,
  :profile_id,
  :result,
  :topic,
  keyword_init: true
)

# Request payload for DlpCustomPromptTopic#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpCustomPromptTopicLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpCustomPromptTopic#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpCustomPromptTopicListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpCustomPromptTopic#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] topic
#   @return [String]
DlpCustomPromptTopicCreateData = Struct.new(
  :account_id,
  :description,
  :enabled,
  :id,
  :name,
  :profile_id,
  :result,
  :topic,
  keyword_init: true
)

# Request payload for DlpCustomPromptTopic#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] topic
#   @return [String, nil]
DlpCustomPromptTopicUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :enabled,
  :name,
  :profile_id,
  :result,
  :topic,
  keyword_init: true
)

# Request payload for DlpCustomPromptTopic#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpCustomPromptTopicRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpDataClass entity data model.
#
# @!attribute [rw] data_tags
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expression
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array]
DlpDataClass = Struct.new(
  :data_tags,
  :description,
  :expression,
  :id,
  :name,
  :result,
  :sensitivity_levels,
  keyword_init: true
)

# Request payload for DlpDataClass#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataClassLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDataClass#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpDataClassListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpDataClass#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tags
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expression
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array]
DlpDataClassCreateData = Struct.new(
  :account_id,
  :data_tags,
  :description,
  :expression,
  :id,
  :name,
  :result,
  :sensitivity_levels,
  keyword_init: true
)

# Request payload for DlpDataClass#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] data_tags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expression
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array, nil]
DlpDataClassUpdateData = Struct.new(
  :account_id,
  :id,
  :data_tags,
  :description,
  :expression,
  :name,
  :result,
  :sensitivity_levels,
  keyword_init: true
)

# Request payload for DlpDataClass#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataClassRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpDataTag entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpDataTag = Struct.new(
  :description,
  :id,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDataTag#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tag_category_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataTagLoadMatch = Struct.new(
  :account_id,
  :data_tag_category_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDataTag#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tag_category_id
#   @return [String]
DlpDataTagListMatch = Struct.new(
  :account_id,
  :data_tag_category_id,
  keyword_init: true
)

# Request payload for DlpDataTag#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tag_category_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpDataTagCreateData = Struct.new(
  :account_id,
  :data_tag_category_id,
  :description,
  :id,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDataTag#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tag_category_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DlpDataTagUpdateData = Struct.new(
  :account_id,
  :data_tag_category_id,
  :id,
  :description,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDataTag#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] data_tag_category_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataTagRemoveMatch = Struct.new(
  :account_id,
  :data_tag_category_id,
  :id,
  keyword_init: true
)

# DlpDataTagCategory entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpDataTagCategory = Struct.new(
  :description,
  :id,
  :name,
  :result,
  :tags,
  :template_id,
  keyword_init: true
)

# Request payload for DlpDataTagCategory#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataTagCategoryLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDataTagCategory#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpDataTagCategoryListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpDataTagCategory#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpDataTagCategoryCreateData = Struct.new(
  :account_id,
  :description,
  :id,
  :name,
  :result,
  :tags,
  :template_id,
  keyword_init: true
)

# Request payload for DlpDataTagCategory#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpDataTagCategoryUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :name,
  :result,
  :tags,
  :template_id,
  keyword_init: true
)

# Request payload for DlpDataTagCategory#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataTagCategoryRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpDataTagCategoryTemplate entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
DlpDataTagCategoryTemplate = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for DlpDataTagCategoryTemplate#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDataTagCategoryTemplateLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDataTagCategoryTemplate#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpDataTagCategoryTemplateListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# DlpDataset entity data model.
#
# @!attribute [rw] case_sensitive
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] encoding_version
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] secret
#   @return [Boolean, nil]
DlpDataset = Struct.new(
  :case_sensitive,
  :description,
  :encoding_version,
  :id,
  :name,
  :result,
  :secret,
  keyword_init: true
)

# Request payload for DlpDataset#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDatasetLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDataset#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpDatasetListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpDataset#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
#
# @!attribute [rw] entry_id
#   @return [String, nil]
#
# @!attribute [rw] version_id
#   @return [Integer, nil]
#
# @!attribute [rw] version
#   @return [Integer, nil]
#
# @!attribute [rw] case_sensitive
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] encoding_version
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] secret
#   @return [Boolean, nil]
DlpDatasetCreateData = Struct.new(
  :account_id,
  :dataset_id,
  :entry_id,
  :version_id,
  :version,
  :case_sensitive,
  :description,
  :encoding_version,
  :id,
  :name,
  :result,
  :secret,
  keyword_init: true
)

# Request payload for DlpDataset#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] case_sensitive
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] encoding_version
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secret
#   @return [Boolean, nil]
DlpDatasetUpdateData = Struct.new(
  :account_id,
  :id,
  :case_sensitive,
  :description,
  :encoding_version,
  :name,
  :result,
  :secret,
  keyword_init: true
)

# Request payload for DlpDataset#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDatasetRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpDocumentFingerprint entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] match_percent
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
DlpDocumentFingerprint = Struct.new(
  :description,
  :id,
  :match_percent,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDocumentFingerprint#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDocumentFingerprintLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpDocumentFingerprint#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpDocumentFingerprintListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpDocumentFingerprint#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] match_percent
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
DlpDocumentFingerprintCreateData = Struct.new(
  :account_id,
  :id,
  :description,
  :match_percent,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDocumentFingerprint#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] match_percent
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DlpDocumentFingerprintUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :match_percent,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpDocumentFingerprint#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpDocumentFingerprintRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpEmail entity data model.
#
# @!attribute [rw] action
#   @return [Object]
#
# @!attribute [rw] auth_requirements
#   @return [Object]
#
# @!attribute [rw] conditions
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_priorities
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
DlpEmail = Struct.new(
  :action,
  :auth_requirements,
  :conditions,
  :description,
  :enabled,
  :name,
  :new_priorities,
  :result,
  keyword_init: true
)

# Request payload for DlpEmail#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String, nil]
DlpEmailLoadMatch = Struct.new(
  :account_id,
  :rule_id,
  keyword_init: true
)

# Request payload for DlpEmail#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpEmailListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpEmail#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [Object]
#
# @!attribute [rw] auth_requirements
#   @return [Object]
#
# @!attribute [rw] conditions
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_priorities
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
DlpEmailCreateData = Struct.new(
  :account_id,
  :action,
  :auth_requirements,
  :conditions,
  :description,
  :enabled,
  :name,
  :new_priorities,
  :result,
  keyword_init: true
)

# Request payload for DlpEmail#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [Object, nil]
#
# @!attribute [rw] auth_requirements
#   @return [Object, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] new_priorities
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DlpEmailUpdateData = Struct.new(
  :account_id,
  :rule_id,
  :action,
  :auth_requirements,
  :conditions,
  :description,
  :enabled,
  :name,
  :new_priorities,
  :result,
  keyword_init: true
)

# Request payload for DlpEmail#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
DlpEmailRemoveMatch = Struct.new(
  :account_id,
  :rule_id,
  keyword_init: true
)

# DlpEntry entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pattern
#   @return [Hash]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
DlpEntry = Struct.new(
  :description,
  :enabled,
  :id,
  :name,
  :pattern,
  :profile_id,
  :result,
  keyword_init: true
)

# Request payload for DlpEntry#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpEntryLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpEntry#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpEntryListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpEntry#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pattern
#   @return [Hash]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
DlpEntryCreateData = Struct.new(
  :account_id,
  :description,
  :enabled,
  :id,
  :name,
  :pattern,
  :profile_id,
  :result,
  keyword_init: true
)

# Request payload for DlpEntry#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] entry_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pattern
#   @return [Hash, nil]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
DlpEntryUpdateData = Struct.new(
  :account_id,
  :entry_id,
  :id,
  :description,
  :enabled,
  :name,
  :pattern,
  :profile_id,
  :result,
  keyword_init: true
)

# Request payload for DlpEntry#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpEntryRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpIntegrationEntry entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpIntegrationEntry = Struct.new(
  :enabled,
  :entry_id,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpIntegrationEntry#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpIntegrationEntryCreateData = Struct.new(
  :account_id,
  :enabled,
  :entry_id,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpIntegrationEntry#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpIntegrationEntryUpdateData = Struct.new(
  :account_id,
  :entry_id,
  :enabled,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpIntegrationEntry#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] entry_id
#   @return [String]
DlpIntegrationEntryRemoveMatch = Struct.new(
  :account_id,
  :entry_id,
  keyword_init: true
)

# DlpPredefinedEntry entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpPredefinedEntry = Struct.new(
  :enabled,
  :entry_id,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpPredefinedEntry#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpPredefinedEntryCreateData = Struct.new(
  :account_id,
  :enabled,
  :entry_id,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpPredefinedEntry#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] entry_id
#   @return [String]
DlpPredefinedEntryRemoveMatch = Struct.new(
  :account_id,
  :entry_id,
  keyword_init: true
)

# DlpProfile entity data model.
#
# @!attribute [rw] ai_context_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_match_count
#   @return [Integer, nil]
#
# @!attribute [rw] confidence_threshold
#   @return [String, nil]
#
# @!attribute [rw] context_awareness
#   @return [Hash]
#
# @!attribute [rw] data_classes
#   @return [Array, nil]
#
# @!attribute [rw] data_tags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entries
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ocr_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array, nil]
#
# @!attribute [rw] shared_entries
#   @return [Array, nil]
DlpProfile = Struct.new(
  :ai_context_enabled,
  :allowed_match_count,
  :confidence_threshold,
  :context_awareness,
  :data_classes,
  :data_tags,
  :description,
  :entries,
  :id,
  :name,
  :ocr_enabled,
  :result,
  :sensitivity_levels,
  :shared_entries,
  keyword_init: true
)

# Request payload for DlpProfile#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
DlpProfileLoadMatch = Struct.new(
  :account_id,
  :id,
  :profile_id,
  keyword_init: true
)

# Request payload for DlpProfile#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] all
#   @return [Boolean, nil]
DlpProfileListMatch = Struct.new(
  :account_id,
  :all,
  keyword_init: true
)

# Request payload for DlpProfile#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ai_context_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_match_count
#   @return [Integer, nil]
#
# @!attribute [rw] confidence_threshold
#   @return [String, nil]
#
# @!attribute [rw] context_awareness
#   @return [Hash]
#
# @!attribute [rw] data_classes
#   @return [Array, nil]
#
# @!attribute [rw] data_tags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entries
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ocr_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array, nil]
#
# @!attribute [rw] shared_entries
#   @return [Array, nil]
DlpProfileCreateData = Struct.new(
  :account_id,
  :ai_context_enabled,
  :allowed_match_count,
  :confidence_threshold,
  :context_awareness,
  :data_classes,
  :data_tags,
  :description,
  :entries,
  :id,
  :name,
  :ocr_enabled,
  :result,
  :sensitivity_levels,
  :shared_entries,
  keyword_init: true
)

# Request payload for DlpProfile#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String]
#
# @!attribute [rw] ai_context_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_match_count
#   @return [Integer, nil]
#
# @!attribute [rw] confidence_threshold
#   @return [String, nil]
#
# @!attribute [rw] context_awareness
#   @return [Hash, nil]
#
# @!attribute [rw] data_classes
#   @return [Array, nil]
#
# @!attribute [rw] data_tags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entries
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ocr_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] sensitivity_levels
#   @return [Array, nil]
#
# @!attribute [rw] shared_entries
#   @return [Array, nil]
DlpProfileUpdateData = Struct.new(
  :account_id,
  :profile_id,
  :ai_context_enabled,
  :allowed_match_count,
  :confidence_threshold,
  :context_awareness,
  :data_classes,
  :data_tags,
  :description,
  :entries,
  :id,
  :name,
  :ocr_enabled,
  :result,
  :sensitivity_levels,
  :shared_entries,
  keyword_init: true
)

# Request payload for DlpProfile#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String]
DlpProfileRemoveMatch = Struct.new(
  :account_id,
  :profile_id,
  keyword_init: true
)

# DlpSensitivityGroup entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpSensitivityGroup = Struct.new(
  :description,
  :id,
  :levels,
  :name,
  :result,
  :template_id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpSensitivityGroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroup#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpSensitivityGroupListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpSensitivityGroupCreateData = Struct.new(
  :account_id,
  :description,
  :id,
  :levels,
  :name,
  :result,
  :template_id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroup#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
DlpSensitivityGroupUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :levels,
  :name,
  :result,
  :template_id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroup#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpSensitivityGroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DlpSensitivityGroupTemplate entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
DlpSensitivityGroupTemplate = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for DlpSensitivityGroupTemplate#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DlpSensitivityGroupTemplateLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DlpSensitivityGroupTemplate#list.
#
# @!attribute [rw] account_id
#   @return [String]
DlpSensitivityGroupTemplateListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# DlpSensitivityLevel entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpSensitivityLevel = Struct.new(
  :description,
  :id,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpSensitivityLevel#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sensitivity_group_id
#   @return [String]
DlpSensitivityLevelLoadMatch = Struct.new(
  :account_id,
  :id,
  :sensitivity_group_id,
  keyword_init: true
)

# Request payload for DlpSensitivityLevel#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] sensitivity_group_id
#   @return [String]
DlpSensitivityLevelListMatch = Struct.new(
  :account_id,
  :sensitivity_group_id,
  keyword_init: true
)

# Request payload for DlpSensitivityLevel#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] sensitivity_group_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpSensitivityLevelCreateData = Struct.new(
  :account_id,
  :sensitivity_group_id,
  :description,
  :id,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpSensitivityLevel#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sensitivity_group_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DlpSensitivityLevelUpdateData = Struct.new(
  :account_id,
  :id,
  :sensitivity_group_id,
  :description,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DlpSensitivityLevel#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sensitivity_group_id
#   @return [String]
DlpSensitivityLevelRemoveMatch = Struct.new(
  :account_id,
  :id,
  :sensitivity_group_id,
  keyword_init: true
)

# DlpSetting entity data model.
#
# @!attribute [rw] ai_context_analysis
#   @return [Boolean, nil]
#
# @!attribute [rw] masking_level
#   @return [Object, nil]
#
# @!attribute [rw] max_match_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] ocr
#   @return [Boolean, nil]
#
# @!attribute [rw] payload_logging
#   @return [Object, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] regex
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpSetting = Struct.new(
  :ai_context_analysis,
  :masking_level,
  :max_match_bytes,
  :ocr,
  :payload_logging,
  :public_key,
  :regex,
  :result,
  keyword_init: true
)

# Request payload for DlpSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
DlpSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for DlpSetting#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ai_context_analysis
#   @return [Boolean, nil]
#
# @!attribute [rw] masking_level
#   @return [Object, nil]
#
# @!attribute [rw] max_match_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] ocr
#   @return [Boolean, nil]
#
# @!attribute [rw] payload_logging
#   @return [Object, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] regex
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
DlpSettingCreateData = Struct.new(
  :account_id,
  :ai_context_analysis,
  :masking_level,
  :max_match_bytes,
  :ocr,
  :payload_logging,
  :public_key,
  :regex,
  :result,
  keyword_init: true
)

# Request payload for DlpSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ai_context_analysis
#   @return [Boolean, nil]
#
# @!attribute [rw] masking_level
#   @return [Object, nil]
#
# @!attribute [rw] max_match_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] ocr
#   @return [Boolean, nil]
#
# @!attribute [rw] payload_logging
#   @return [Object, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] regex
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DlpSettingUpdateData = Struct.new(
  :account_id,
  :ai_context_analysis,
  :masking_level,
  :max_match_bytes,
  :ocr,
  :payload_logging,
  :public_key,
  :regex,
  :result,
  keyword_init: true
)

# Request payload for DlpSetting#remove.
#
# @!attribute [rw] account_id
#   @return [String]
DlpSettingRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Policy entity data model.
#
# @!attribute [rw] actions
#   @return [Hash]
#
# @!attribute [rw] applies_to_all_integrations
#   @return [Boolean]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] finding_type_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integration_ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Policy = Struct.new(
  :actions,
  :applies_to_all_integrations,
  :description,
  :display_name,
  :enabled,
  :errors,
  :finding_type_id,
  :id,
  :integration_ids,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Policy#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PolicyLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Policy#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
PolicyListMatch = Struct.new(
  :account_id,
  :cursor,
  keyword_init: true
)

# Request payload for Policy#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] actions
#   @return [Hash]
#
# @!attribute [rw] applies_to_all_integrations
#   @return [Boolean]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] finding_type_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integration_ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PolicyCreateData = Struct.new(
  :account_id,
  :actions,
  :applies_to_all_integrations,
  :description,
  :display_name,
  :enabled,
  :errors,
  :finding_type_id,
  :id,
  :integration_ids,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Policy#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] actions
#   @return [Hash, nil]
#
# @!attribute [rw] applies_to_all_integrations
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] finding_type_id
#   @return [String, nil]
#
# @!attribute [rw] integration_ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
PolicyUpdateData = Struct.new(
  :account_id,
  :id,
  :actions,
  :applies_to_all_integrations,
  :description,
  :display_name,
  :enabled,
  :errors,
  :finding_type_id,
  :integration_ids,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Policy#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PolicyRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# PostureApiCreateRemediationJob entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] finding_instance_ids
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] remediation_type_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiCreateRemediationJob = Struct.new(
  :errors,
  :finding_instance_ids,
  :messages,
  :remediation_type_id,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiCreateRemediationJob#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] finding_instance_ids
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] remediation_type_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiCreateRemediationJobCreateData = Struct.new(
  :account_id,
  :errors,
  :finding_instance_ids,
  :messages,
  :remediation_type_id,
  :result,
  :success,
  keyword_init: true
)

# PostureApiCreateWebhookJob entity data model.
#
# @!attribute [rw] finding_instance_ids
#   @return [Array]
#
# @!attribute [rw] webhook_ids
#   @return [Array]
PostureApiCreateWebhookJob = Struct.new(
  :finding_instance_ids,
  :webhook_ids,
  keyword_init: true
)

# Request payload for PostureApiCreateWebhookJob#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_instance_ids
#   @return [Array]
#
# @!attribute [rw] webhook_ids
#   @return [Array]
PostureApiCreateWebhookJobCreateData = Struct.new(
  :account_id,
  :finding_instance_ids,
  :webhook_ids,
  keyword_init: true
)

# PostureApiExportJob entity data model.
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] dlp_profile_id
#   @return [Array, nil]
#
# @!attribute [rw] dlp_profile_information
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ignored
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_id
#   @return [Array, nil]
#
# @!attribute [rw] max_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] max_updated_at
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] min_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] min_updated_at
#   @return [String, nil]
#
# @!attribute [rw] orders
#   @return [Array, nil]
#
# @!attribute [rw] product
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] severities
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] vendors
#   @return [Array, nil]
PostureApiExportJob = Struct.new(
  :archived,
  :dlp_profile_id,
  :dlp_profile_information,
  :errors,
  :id,
  :ignored,
  :integration_id,
  :max_affliction_date,
  :max_updated_at,
  :messages,
  :min_affliction_date,
  :min_updated_at,
  :orders,
  :product,
  :result,
  :search,
  :severities,
  :status,
  :success,
  :vendors,
  keyword_init: true
)

# Request payload for PostureApiExportJob#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PostureApiExportJobLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for PostureApiExportJob#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] dlp_profile_id
#   @return [Array, nil]
#
# @!attribute [rw] dlp_profile_information
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ignored
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_id
#   @return [Array, nil]
#
# @!attribute [rw] max_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] max_updated_at
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] min_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] min_updated_at
#   @return [String, nil]
#
# @!attribute [rw] orders
#   @return [Array, nil]
#
# @!attribute [rw] product
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] severities
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] vendors
#   @return [Array, nil]
PostureApiExportJobCreateData = Struct.new(
  :account_id,
  :finding_id,
  :archived,
  :dlp_profile_id,
  :dlp_profile_information,
  :errors,
  :id,
  :ignored,
  :integration_id,
  :max_affliction_date,
  :max_updated_at,
  :messages,
  :min_affliction_date,
  :min_updated_at,
  :orders,
  :product,
  :result,
  :search,
  :severities,
  :status,
  :success,
  :vendors,
  keyword_init: true
)

# PostureApiFinding entity data model.
#
# @!attribute [rw] checks
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] new_severity
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiFinding = Struct.new(
  :checks,
  :errors,
  :id,
  :messages,
  :new_severity,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiFinding#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PostureApiFindingLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for PostureApiFinding#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String, nil]
#
# @!attribute [rw] checks
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] new_severity
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiFindingCreateData = Struct.new(
  :account_id,
  :finding_id,
  :checks,
  :errors,
  :id,
  :messages,
  :new_severity,
  :result,
  :success,
  keyword_init: true
)

# PostureApiFindingInstance entity data model.
#
# @!attribute [rw] check_instances
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiFindingInstance = Struct.new(
  :check_instances,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiFindingInstance#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PostureApiFindingInstanceLoadMatch = Struct.new(
  :account_id,
  :finding_id,
  :id,
  keyword_init: true
)

# Request payload for PostureApiFindingInstance#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String]
#
# @!attribute [rw] check_instances
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiFindingInstanceCreateData = Struct.new(
  :account_id,
  :finding_id,
  :check_instances,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# PostureApiFindingType entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiFindingType = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiFindingType#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PostureApiFindingTypeLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# PostureApiPaginatedContentAssetList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedContentAssetList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedContentAssetList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] dlp_profile_id
#   @return [String, nil]
#
# @!attribute [rw] integration_id
#   @return [String, nil]
#
# @!attribute [rw] max_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] min_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] vendor
#   @return [String, nil]
PostureApiPaginatedContentAssetListListMatch = Struct.new(
  :account_id,
  :direction,
  :dlp_profile_id,
  :integration_id,
  :max_affliction_date,
  :min_affliction_date,
  :order,
  :page,
  :per_page,
  :search,
  :vendor,
  keyword_init: true
)

# PostureApiPaginatedExportJobList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedExportJobList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedExportJobList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
PostureApiPaginatedExportJobListListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# PostureApiPaginatedFindingInstanceList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedFindingInstanceList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedFindingInstanceList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_id
#   @return [Array, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] finding_instance_id
#   @return [Array, nil]
#
# @!attribute [rw] max_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] min_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] remediation_status
#   @return [Array, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
PostureApiPaginatedFindingInstanceListListMatch = Struct.new(
  :account_id,
  :finding_id,
  :archived,
  :asset_id,
  :cursor,
  :direction,
  :finding_instance_id,
  :max_affliction_date,
  :min_affliction_date,
  :order,
  :page,
  :per_page,
  :remediation_status,
  :search,
  keyword_init: true
)

# PostureApiPaginatedFindingList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedFindingList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedFindingList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] finding_type_id
#   @return [String, nil]
#
# @!attribute [rw] ignored
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_id
#   @return [String, nil]
#
# @!attribute [rw] max_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] min_affliction_date
#   @return [String, nil]
#
# @!attribute [rw] observation
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] product
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] vendor
#   @return [String, nil]
PostureApiPaginatedFindingListListMatch = Struct.new(
  :account_id,
  :cursor,
  :direction,
  :finding_type_id,
  :ignored,
  :integration_id,
  :max_affliction_date,
  :min_affliction_date,
  :observation,
  :order,
  :page,
  :per_page,
  :product,
  :search,
  :severity,
  :type,
  :vendor,
  keyword_init: true
)

# PostureApiPaginatedFindingTypeList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedFindingTypeList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedFindingTypeList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] vendor
#   @return [Array, nil]
PostureApiPaginatedFindingTypeListListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :search,
  :vendor,
  keyword_init: true
)

# PostureApiPaginatedRemediationJobList entity data model.
#
# @!attribute [rw] asset
#   @return [Hash]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] finding_id
#   @return [String]
#
# @!attribute [rw] finding_instance_id
#   @return [String]
#
# @!attribute [rw] finding_type_id
#   @return [String]
#
# @!attribute [rw] finding_type_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration_name
#   @return [String]
#
# @!attribute [rw] last_updated
#   @return [String]
#
# @!attribute [rw] remediation_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] triggered_by_actor
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_id
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_user
#   @return [String]
PostureApiPaginatedRemediationJobList = Struct.new(
  :asset,
  :created_at,
  :finding_id,
  :finding_instance_id,
  :finding_type_id,
  :finding_type_name,
  :id,
  :integration_name,
  :last_updated,
  :remediation_type,
  :status,
  :triggered_by_actor,
  :triggered_by_id,
  :triggered_by_user,
  keyword_init: true
)

# Request payload for PostureApiPaginatedRemediationJobList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] integration_id
#   @return [String, nil]
#
# @!attribute [rw] max_updated_at
#   @return [String, nil]
#
# @!attribute [rw] min_updated_at
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_actor
#   @return [Array, nil]
PostureApiPaginatedRemediationJobListListMatch = Struct.new(
  :account_id,
  :cursor,
  :direction,
  :integration_id,
  :max_updated_at,
  :min_updated_at,
  :order,
  :page,
  :per_page,
  :search,
  :status,
  :triggered_by_actor,
  keyword_init: true
)

# PostureApiPaginatedRemediationTypeList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiPaginatedRemediationTypeList = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for PostureApiPaginatedRemediationTypeList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finding_type_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] integration_id
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
PostureApiPaginatedRemediationTypeListListMatch = Struct.new(
  :account_id,
  :finding_type_id,
  :cursor,
  :integration_id,
  :page,
  :per_page,
  keyword_init: true
)

# PostureApiWebhook entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiWebhook = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiWebhook#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PostureApiWebhookLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for PostureApiWebhook#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] webhook_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiWebhookCreateData = Struct.new(
  :account_id,
  :webhook_id,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# PostureApiWebhookList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
PostureApiWebhookList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PostureApiWebhookList#list.
#
# @!attribute [rw] account_id
#   @return [String]
PostureApiWebhookListListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] authentication_type
#   @return [String]
#
# @!attribute [rw] destination_url
#   @return [String]
#
# @!attribute [rw] headers
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Webhook = Struct.new(
  :authentication_type,
  :destination_url,
  :headers,
  :id,
  :label,
  :signing_secret,
  :status,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] authentication_type
#   @return [String]
#
# @!attribute [rw] destination_url
#   @return [String]
#
# @!attribute [rw] headers
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
WebhookCreateData = Struct.new(
  :account_id,
  :authentication_type,
  :destination_url,
  :headers,
  :id,
  :label,
  :signing_secret,
  :status,
  keyword_init: true
)

# Request payload for Webhook#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] authentication_type
#   @return [String, nil]
#
# @!attribute [rw] destination_url
#   @return [String, nil]
#
# @!attribute [rw] headers
#   @return [Array, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
WebhookUpdateData = Struct.new(
  :account_id,
  :id,
  :authentication_type,
  :destination_url,
  :headers,
  :label,
  :signing_secret,
  :status,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
WebhookRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

