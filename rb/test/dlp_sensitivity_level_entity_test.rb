# DlpSensitivityLevel entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareDlp_sdk"
require_relative "runner"

class DlpSensitivityLevelEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareDlpSDK.test(nil, nil)
    ent = testsdk.DlpSensitivityLevel(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "dlp_sensitivity_level" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareDlpSDK.test(seed, nil)
    seen = base.DlpSensitivityLevel(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareDlpConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareDlpSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.DlpSensitivityLevel(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = dlp_sensitivity_level_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "dlp_sensitivity_level." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    dlp_sensitivity_level_ref01_ent = client.DlpSensitivityLevel(nil)
    dlp_sensitivity_level_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.dlp_sensitivity_level"), "dlp_sensitivity_level_ref01"))
    dlp_sensitivity_level_ref01_data["account_id"] = setup[:idmap]["account01"]
    dlp_sensitivity_level_ref01_data["sensitivity_group_id"] = setup[:idmap]["sensitivity_group01"]

    dlp_sensitivity_level_ref01_data_result = dlp_sensitivity_level_ref01_ent.create(dlp_sensitivity_level_ref01_data, nil)
    dlp_sensitivity_level_ref01_data = Helpers.to_map(dlp_sensitivity_level_ref01_data_result.respond_to?(:data_get) ? dlp_sensitivity_level_ref01_data_result.data_get : dlp_sensitivity_level_ref01_data_result)
    assert !dlp_sensitivity_level_ref01_data.nil?
    assert !dlp_sensitivity_level_ref01_data["id"].nil?

    # LIST
    dlp_sensitivity_level_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "sensitivity_group_id" => setup[:idmap]["sensitivity_group01"],
    }

    dlp_sensitivity_level_ref01_list_result = dlp_sensitivity_level_ref01_ent.list(dlp_sensitivity_level_ref01_match, nil)
    assert dlp_sensitivity_level_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(dlp_sensitivity_level_ref01_list_result),
      { "id" => dlp_sensitivity_level_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    dlp_sensitivity_level_ref01_data_up0_up = {
      "id" => dlp_sensitivity_level_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "sensitivity_group_id" => setup[:idmap]["sensitivity_group_id"],
    }

    dlp_sensitivity_level_ref01_markdef_up0_name = "description"
    dlp_sensitivity_level_ref01_markdef_up0_value = "Mark01-dlp_sensitivity_level_ref01_#{setup[:now]}"
    dlp_sensitivity_level_ref01_data_up0_up[dlp_sensitivity_level_ref01_markdef_up0_name] = dlp_sensitivity_level_ref01_markdef_up0_value

    dlp_sensitivity_level_ref01_resdata_up0_result = dlp_sensitivity_level_ref01_ent.update(dlp_sensitivity_level_ref01_data_up0_up, nil)
    dlp_sensitivity_level_ref01_resdata_up0 = Helpers.to_map(dlp_sensitivity_level_ref01_resdata_up0_result.respond_to?(:data_get) ? dlp_sensitivity_level_ref01_resdata_up0_result.data_get : dlp_sensitivity_level_ref01_resdata_up0_result)
    assert !dlp_sensitivity_level_ref01_resdata_up0.nil?
    assert_equal dlp_sensitivity_level_ref01_resdata_up0["id"], dlp_sensitivity_level_ref01_data_up0_up["id"]
    assert_equal dlp_sensitivity_level_ref01_resdata_up0[dlp_sensitivity_level_ref01_markdef_up0_name], dlp_sensitivity_level_ref01_markdef_up0_value

    # LOAD
    dlp_sensitivity_level_ref01_match_dt0 = {
      "id" => dlp_sensitivity_level_ref01_data["id"],
    }
    dlp_sensitivity_level_ref01_data_dt0_loaded = dlp_sensitivity_level_ref01_ent.load(dlp_sensitivity_level_ref01_match_dt0, nil)
    dlp_sensitivity_level_ref01_data_dt0_load_result = Helpers.to_map(dlp_sensitivity_level_ref01_data_dt0_loaded.respond_to?(:data_get) ? dlp_sensitivity_level_ref01_data_dt0_loaded.data_get : dlp_sensitivity_level_ref01_data_dt0_loaded)
    assert !dlp_sensitivity_level_ref01_data_dt0_load_result.nil?
    assert_equal dlp_sensitivity_level_ref01_data_dt0_load_result["id"], dlp_sensitivity_level_ref01_data["id"]

    # REMOVE
    dlp_sensitivity_level_ref01_match_rm0 = {
      "id" => dlp_sensitivity_level_ref01_data["id"],
    }
    dlp_sensitivity_level_ref01_ent.remove(dlp_sensitivity_level_ref01_match_rm0, nil)

    # LIST
    dlp_sensitivity_level_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
      "sensitivity_group_id" => setup[:idmap]["sensitivity_group01"],
    }

    dlp_sensitivity_level_ref01_list_rt0_result = dlp_sensitivity_level_ref01_ent.list(dlp_sensitivity_level_ref01_match_rt0, nil)
    assert dlp_sensitivity_level_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(dlp_sensitivity_level_ref01_list_rt0_result),
      { "id" => dlp_sensitivity_level_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def dlp_sensitivity_level_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "dlp_sensitivity_level", "DlpSensitivityLevelTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareDlpSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["dlp_sensitivity_level01", "dlp_sensitivity_level02", "dlp_sensitivity_level03", "account01", "sensitivity_group01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID" => idmap,
    "CLOUDFLARE_DLP_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_DLP_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_DLP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["sensitivity_group_id"].nil?
    idmap_resolved["sensitivity_group_id"] = idmap_resolved["sensitivity_group01"]
  end

  if env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_DLP_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareDlpSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_DLP_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
