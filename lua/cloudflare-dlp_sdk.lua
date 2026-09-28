-- CloudflareDlp SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-dlp_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareDlpSDK = {}
CloudflareDlpSDK.__index = CloudflareDlpSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareDlpSDK._make_feature = _make_feature


function CloudflareDlpSDK.new(options)
  local self = setmetatable({}, CloudflareDlpSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareDlpSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareDlpSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareDlpSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareDlpSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareDlpSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareDlpSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareDlpSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareDlpSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareDlpSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareDlpSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareDlpSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:DlpCustomPromptTopic():list() / client:DlpCustomPromptTopic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpCustomPromptTopic(data)
  local EntityMod = require("entity.dlp_custom_prompt_topic_entity")
  if data == nil then
    if self._dlp_custom_prompt_topic == nil then
      self._dlp_custom_prompt_topic = EntityMod.new(self, nil)
    end
    return self._dlp_custom_prompt_topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDataClass():list() / client:DlpDataClass():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDataClass(data)
  local EntityMod = require("entity.dlp_data_class_entity")
  if data == nil then
    if self._dlp_data_class == nil then
      self._dlp_data_class = EntityMod.new(self, nil)
    end
    return self._dlp_data_class
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDataTag():list() / client:DlpDataTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDataTag(data)
  local EntityMod = require("entity.dlp_data_tag_entity")
  if data == nil then
    if self._dlp_data_tag == nil then
      self._dlp_data_tag = EntityMod.new(self, nil)
    end
    return self._dlp_data_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDataTagCategory():list() / client:DlpDataTagCategory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDataTagCategory(data)
  local EntityMod = require("entity.dlp_data_tag_category_entity")
  if data == nil then
    if self._dlp_data_tag_category == nil then
      self._dlp_data_tag_category = EntityMod.new(self, nil)
    end
    return self._dlp_data_tag_category
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDataTagCategoryTemplate():list() / client:DlpDataTagCategoryTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDataTagCategoryTemplate(data)
  local EntityMod = require("entity.dlp_data_tag_category_template_entity")
  if data == nil then
    if self._dlp_data_tag_category_template == nil then
      self._dlp_data_tag_category_template = EntityMod.new(self, nil)
    end
    return self._dlp_data_tag_category_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDataset():list() / client:DlpDataset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDataset(data)
  local EntityMod = require("entity.dlp_dataset_entity")
  if data == nil then
    if self._dlp_dataset == nil then
      self._dlp_dataset = EntityMod.new(self, nil)
    end
    return self._dlp_dataset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpDocumentFingerprint():list() / client:DlpDocumentFingerprint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpDocumentFingerprint(data)
  local EntityMod = require("entity.dlp_document_fingerprint_entity")
  if data == nil then
    if self._dlp_document_fingerprint == nil then
      self._dlp_document_fingerprint = EntityMod.new(self, nil)
    end
    return self._dlp_document_fingerprint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpEmail():list() / client:DlpEmail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpEmail(data)
  local EntityMod = require("entity.dlp_email_entity")
  if data == nil then
    if self._dlp_email == nil then
      self._dlp_email = EntityMod.new(self, nil)
    end
    return self._dlp_email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpEntry():list() / client:DlpEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpEntry(data)
  local EntityMod = require("entity.dlp_entry_entity")
  if data == nil then
    if self._dlp_entry == nil then
      self._dlp_entry = EntityMod.new(self, nil)
    end
    return self._dlp_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpIntegrationEntry():list() / client:DlpIntegrationEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpIntegrationEntry(data)
  local EntityMod = require("entity.dlp_integration_entry_entity")
  if data == nil then
    if self._dlp_integration_entry == nil then
      self._dlp_integration_entry = EntityMod.new(self, nil)
    end
    return self._dlp_integration_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpPredefinedEntry():list() / client:DlpPredefinedEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpPredefinedEntry(data)
  local EntityMod = require("entity.dlp_predefined_entry_entity")
  if data == nil then
    if self._dlp_predefined_entry == nil then
      self._dlp_predefined_entry = EntityMod.new(self, nil)
    end
    return self._dlp_predefined_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpProfile():list() / client:DlpProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpProfile(data)
  local EntityMod = require("entity.dlp_profile_entity")
  if data == nil then
    if self._dlp_profile == nil then
      self._dlp_profile = EntityMod.new(self, nil)
    end
    return self._dlp_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpSensitivityGroup():list() / client:DlpSensitivityGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpSensitivityGroup(data)
  local EntityMod = require("entity.dlp_sensitivity_group_entity")
  if data == nil then
    if self._dlp_sensitivity_group == nil then
      self._dlp_sensitivity_group = EntityMod.new(self, nil)
    end
    return self._dlp_sensitivity_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpSensitivityGroupTemplate():list() / client:DlpSensitivityGroupTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpSensitivityGroupTemplate(data)
  local EntityMod = require("entity.dlp_sensitivity_group_template_entity")
  if data == nil then
    if self._dlp_sensitivity_group_template == nil then
      self._dlp_sensitivity_group_template = EntityMod.new(self, nil)
    end
    return self._dlp_sensitivity_group_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpSensitivityLevel():list() / client:DlpSensitivityLevel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpSensitivityLevel(data)
  local EntityMod = require("entity.dlp_sensitivity_level_entity")
  if data == nil then
    if self._dlp_sensitivity_level == nil then
      self._dlp_sensitivity_level = EntityMod.new(self, nil)
    end
    return self._dlp_sensitivity_level
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DlpSetting():list() / client:DlpSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:DlpSetting(data)
  local EntityMod = require("entity.dlp_setting_entity")
  if data == nil then
    if self._dlp_setting == nil then
      self._dlp_setting = EntityMod.new(self, nil)
    end
    return self._dlp_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Policy():list() / client:Policy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:Policy(data)
  local EntityMod = require("entity.policy_entity")
  if data == nil then
    if self._policy == nil then
      self._policy = EntityMod.new(self, nil)
    end
    return self._policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiCreateRemediationJob():list() / client:PostureApiCreateRemediationJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiCreateRemediationJob(data)
  local EntityMod = require("entity.posture_api_create_remediation_job_entity")
  if data == nil then
    if self._posture_api_create_remediation_job == nil then
      self._posture_api_create_remediation_job = EntityMod.new(self, nil)
    end
    return self._posture_api_create_remediation_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiCreateWebhookJob():list() / client:PostureApiCreateWebhookJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiCreateWebhookJob(data)
  local EntityMod = require("entity.posture_api_create_webhook_job_entity")
  if data == nil then
    if self._posture_api_create_webhook_job == nil then
      self._posture_api_create_webhook_job = EntityMod.new(self, nil)
    end
    return self._posture_api_create_webhook_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiExportJob():list() / client:PostureApiExportJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiExportJob(data)
  local EntityMod = require("entity.posture_api_export_job_entity")
  if data == nil then
    if self._posture_api_export_job == nil then
      self._posture_api_export_job = EntityMod.new(self, nil)
    end
    return self._posture_api_export_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiFinding():list() / client:PostureApiFinding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiFinding(data)
  local EntityMod = require("entity.posture_api_finding_entity")
  if data == nil then
    if self._posture_api_finding == nil then
      self._posture_api_finding = EntityMod.new(self, nil)
    end
    return self._posture_api_finding
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiFindingInstance():list() / client:PostureApiFindingInstance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiFindingInstance(data)
  local EntityMod = require("entity.posture_api_finding_instance_entity")
  if data == nil then
    if self._posture_api_finding_instance == nil then
      self._posture_api_finding_instance = EntityMod.new(self, nil)
    end
    return self._posture_api_finding_instance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiFindingType():list() / client:PostureApiFindingType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiFindingType(data)
  local EntityMod = require("entity.posture_api_finding_type_entity")
  if data == nil then
    if self._posture_api_finding_type == nil then
      self._posture_api_finding_type = EntityMod.new(self, nil)
    end
    return self._posture_api_finding_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedContentAssetList():list() / client:PostureApiPaginatedContentAssetList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedContentAssetList(data)
  local EntityMod = require("entity.posture_api_paginated_content_asset_list_entity")
  if data == nil then
    if self._posture_api_paginated_content_asset_list == nil then
      self._posture_api_paginated_content_asset_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_content_asset_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedExportJobList():list() / client:PostureApiPaginatedExportJobList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedExportJobList(data)
  local EntityMod = require("entity.posture_api_paginated_export_job_list_entity")
  if data == nil then
    if self._posture_api_paginated_export_job_list == nil then
      self._posture_api_paginated_export_job_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_export_job_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedFindingInstanceList():list() / client:PostureApiPaginatedFindingInstanceList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedFindingInstanceList(data)
  local EntityMod = require("entity.posture_api_paginated_finding_instance_list_entity")
  if data == nil then
    if self._posture_api_paginated_finding_instance_list == nil then
      self._posture_api_paginated_finding_instance_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_finding_instance_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedFindingList():list() / client:PostureApiPaginatedFindingList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedFindingList(data)
  local EntityMod = require("entity.posture_api_paginated_finding_list_entity")
  if data == nil then
    if self._posture_api_paginated_finding_list == nil then
      self._posture_api_paginated_finding_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_finding_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedFindingTypeList():list() / client:PostureApiPaginatedFindingTypeList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedFindingTypeList(data)
  local EntityMod = require("entity.posture_api_paginated_finding_type_list_entity")
  if data == nil then
    if self._posture_api_paginated_finding_type_list == nil then
      self._posture_api_paginated_finding_type_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_finding_type_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedRemediationJobList():list() / client:PostureApiPaginatedRemediationJobList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedRemediationJobList(data)
  local EntityMod = require("entity.posture_api_paginated_remediation_job_list_entity")
  if data == nil then
    if self._posture_api_paginated_remediation_job_list == nil then
      self._posture_api_paginated_remediation_job_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_remediation_job_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiPaginatedRemediationTypeList():list() / client:PostureApiPaginatedRemediationTypeList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiPaginatedRemediationTypeList(data)
  local EntityMod = require("entity.posture_api_paginated_remediation_type_list_entity")
  if data == nil then
    if self._posture_api_paginated_remediation_type_list == nil then
      self._posture_api_paginated_remediation_type_list = EntityMod.new(self, nil)
    end
    return self._posture_api_paginated_remediation_type_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiWebhook():list() / client:PostureApiWebhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiWebhook(data)
  local EntityMod = require("entity.posture_api_webhook_entity")
  if data == nil then
    if self._posture_api_webhook == nil then
      self._posture_api_webhook = EntityMod.new(self, nil)
    end
    return self._posture_api_webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostureApiWebhookList():list() / client:PostureApiWebhookList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:PostureApiWebhookList(data)
  local EntityMod = require("entity.posture_api_webhook_list_entity")
  if data == nil then
    if self._posture_api_webhook_list == nil then
      self._posture_api_webhook_list = EntityMod.new(self, nil)
    end
    return self._posture_api_webhook_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareDlpSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function CloudflareDlpSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareDlpSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareDlpSDK
