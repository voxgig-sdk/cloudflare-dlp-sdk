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

func TestPostureApiWebhookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PostureApiWebhook(nil)
		if ent == nil {
			t.Fatal("expected non-nil PostureApiWebhookEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := posture_api_webhookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "posture_api_webhook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		postureApiWebhookRef01Ent := client.PostureApiWebhook(nil)
		postureApiWebhookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "posture_api_webhook"}), "posture_api_webhook_ref01"))
		postureApiWebhookRef01Data["account_id"] = setup.idmap["account01"]
		postureApiWebhookRef01Data["webhook_id"] = setup.idmap["webhook01"]

		postureApiWebhookRef01DataResult, err := postureApiWebhookRef01Ent.Create(postureApiWebhookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		postureApiWebhookRef01Data = core.ToMapAny(entityData(postureApiWebhookRef01DataResult))
		if postureApiWebhookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if postureApiWebhookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		postureApiWebhookRef01MatchDt0 := map[string]any{
			"id": postureApiWebhookRef01Data["id"],
		}
		postureApiWebhookRef01DataDt0Loaded, err := postureApiWebhookRef01Ent.Load(postureApiWebhookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		postureApiWebhookRef01DataDt0LoadResult := core.ToMapAny(entityData(postureApiWebhookRef01DataDt0Loaded))
		if postureApiWebhookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if postureApiWebhookRef01DataDt0LoadResult["id"] != postureApiWebhookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func posture_api_webhookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "posture_api_webhook", "PostureApiWebhookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read posture_api_webhook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse posture_api_webhook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"posture_api_webhook01", "posture_api_webhook02", "posture_api_webhook03", "webhook01", "webhook02", "webhook03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID"])
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
