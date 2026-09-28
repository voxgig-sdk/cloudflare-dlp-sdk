-- PostureApiFindingInstance entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-dlp_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PostureApiFindingInstanceEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PostureApiFindingInstance(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = posture_api_finding_instance_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "posture_api_finding_instance." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local posture_api_finding_instance_ref01_ent = client:PostureApiFindingInstance(nil)
    local posture_api_finding_instance_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.posture_api_finding_instance"), "posture_api_finding_instance_ref01"))
    posture_api_finding_instance_ref01_data["account_id"] = setup.idmap["account01"]
    posture_api_finding_instance_ref01_data["finding_id"] = setup.idmap["finding01"]

    local posture_api_finding_instance_ref01_data_result, err = posture_api_finding_instance_ref01_ent:create(posture_api_finding_instance_ref01_data, nil)
    assert.is_nil(err)
    posture_api_finding_instance_ref01_data = helpers.to_map(type(posture_api_finding_instance_ref01_data_result) == 'table' and posture_api_finding_instance_ref01_data_result.data_get and posture_api_finding_instance_ref01_data_result:data_get() or posture_api_finding_instance_ref01_data_result)
    assert.is_not_nil(posture_api_finding_instance_ref01_data)
    assert.is_not_nil(posture_api_finding_instance_ref01_data["id"])

    -- LOAD
    local posture_api_finding_instance_ref01_match_dt0 = {
      id = posture_api_finding_instance_ref01_data["id"],
    }
    local posture_api_finding_instance_ref01_data_dt0_loaded, err = posture_api_finding_instance_ref01_ent:load(posture_api_finding_instance_ref01_match_dt0, nil)
    assert.is_nil(err)
    local posture_api_finding_instance_ref01_data_dt0_load_result = helpers.to_map(type(posture_api_finding_instance_ref01_data_dt0_loaded) == 'table' and posture_api_finding_instance_ref01_data_dt0_loaded.data_get and posture_api_finding_instance_ref01_data_dt0_loaded:data_get() or posture_api_finding_instance_ref01_data_dt0_loaded)
    assert.is_not_nil(posture_api_finding_instance_ref01_data_dt0_load_result)
    assert.are.equal(posture_api_finding_instance_ref01_data_dt0_load_result["id"], posture_api_finding_instance_ref01_data["id"])

  end)
end)

function posture_api_finding_instance_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/posture_api_finding_instance/PostureApiFindingInstanceTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read posture_api_finding_instance test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "posture_api_finding_instance01", "posture_api_finding_instance02", "posture_api_finding_instance03", "account01", "finding01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID"] = idmap,
    ["CLOUDFLARE_DLP_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_DLP_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_DLP_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_DLP_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_DLP_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
