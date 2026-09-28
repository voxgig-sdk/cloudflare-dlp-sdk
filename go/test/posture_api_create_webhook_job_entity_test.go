package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-dlp-sdk/go"
	"github.com/voxgig-sdk/cloudflare-dlp-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-dlp-sdk/go/utility/struct"
)

func TestPostureApiCreateWebhookJobEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PostureApiCreateWebhookJob(nil)
		if ent == nil {
			t.Fatal("expected non-nil PostureApiCreateWebhookJobEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := posture_api_create_webhook_jobBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "posture_api_create_webhook_job." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		postureApiCreateWebhookJobRef01Ent := client.PostureApiCreateWebhookJob(nil)
		postureApiCreateWebhookJobRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "posture_api_create_webhook_job"}), "posture_api_create_webhook_job_ref01"))
		postureApiCreateWebhookJobRef01Data["account_id"] = setup.idmap["account01"]

		postureApiCreateWebhookJobRef01DataResult, err := postureApiCreateWebhookJobRef01Ent.Create(postureApiCreateWebhookJobRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		postureApiCreateWebhookJobRef01Data = core.ToMapAny(entityData(postureApiCreateWebhookJobRef01DataResult))
		if postureApiCreateWebhookJobRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func posture_api_create_webhook_jobBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "posture_api_create_webhook_job", "PostureApiCreateWebhookJobTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read posture_api_create_webhook_job test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse posture_api_create_webhook_job test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"posture_api_create_webhook_job01", "posture_api_create_webhook_job02", "posture_api_create_webhook_job03", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_DLP_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareDlpSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_DLP_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_DLP_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
