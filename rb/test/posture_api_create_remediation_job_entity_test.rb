# PostureApiCreateRemediationJob entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareDlp_sdk"
require_relative "runner"

class PostureApiCreateRemediationJobEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareDlpSDK.test(nil, nil)
    ent = testsdk.PostureApiCreateRemediationJob(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = posture_api_create_remediation_job_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "posture_api_create_remediation_job." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    posture_api_create_remediation_job_ref01_ent = client.PostureApiCreateRemediationJob(nil)
    posture_api_create_remediation_job_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.posture_api_create_remediation_job"), "posture_api_create_remediation_job_ref01"))
    posture_api_create_remediation_job_ref01_data["account_id"] = setup[:idmap]["account01"]

    posture_api_create_remediation_job_ref01_data_result = posture_api_create_remediation_job_ref01_ent.create(posture_api_create_remediation_job_ref01_data, nil)
    posture_api_create_remediation_job_ref01_data = Helpers.to_map(posture_api_create_remediation_job_ref01_data_result.respond_to?(:data_get) ? posture_api_create_remediation_job_ref01_data_result.data_get : posture_api_create_remediation_job_ref01_data_result)
    assert !posture_api_create_remediation_job_ref01_data.nil?

  end
end

def posture_api_create_remediation_job_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "posture_api_create_remediation_job", "PostureApiCreateRemediationJobTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareDlpSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["posture_api_create_remediation_job01", "posture_api_create_remediation_job02", "posture_api_create_remediation_job03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID" => idmap,
    "CLOUDFLARE_DLP_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_DLP_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_DLP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID"])
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
