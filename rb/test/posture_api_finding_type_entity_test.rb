# PostureApiFindingType entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareDlp_sdk"
require_relative "runner"

class PostureApiFindingTypeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareDlpSDK.test(nil, nil)
    ent = testsdk.PostureApiFindingType(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = posture_api_finding_type_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "posture_api_finding_type." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_TYPE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    posture_api_finding_type_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.posture_api_finding_type")))
    posture_api_finding_type_ref01_data = nil
    if posture_api_finding_type_ref01_data_raw.length > 0
      posture_api_finding_type_ref01_data = Helpers.to_map(posture_api_finding_type_ref01_data_raw[0][1])
    end

    # LOAD
    posture_api_finding_type_ref01_ent = client.PostureApiFindingType(nil)
    posture_api_finding_type_ref01_match_dt0 = {
      "id" => posture_api_finding_type_ref01_data["id"],
    }
    posture_api_finding_type_ref01_data_dt0_loaded = posture_api_finding_type_ref01_ent.load(posture_api_finding_type_ref01_match_dt0, nil)
    posture_api_finding_type_ref01_data_dt0_load_result = Helpers.to_map(posture_api_finding_type_ref01_data_dt0_loaded.respond_to?(:data_get) ? posture_api_finding_type_ref01_data_dt0_loaded.data_get : posture_api_finding_type_ref01_data_dt0_loaded)
    assert !posture_api_finding_type_ref01_data_dt0_load_result.nil?
    assert_equal posture_api_finding_type_ref01_data_dt0_load_result["id"], posture_api_finding_type_ref01_data["id"]

  end
end

def posture_api_finding_type_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "posture_api_finding_type", "PostureApiFindingTypeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareDlpSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["posture_api_finding_type01", "posture_api_finding_type02", "posture_api_finding_type03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_TYPE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_TYPE_ENTID" => idmap,
    "CLOUDFLARE_DLP_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_DLP_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_DLP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_TYPE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
