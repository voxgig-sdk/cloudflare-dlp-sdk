package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestDlpSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dlp_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpSettingRef01Ent := client.DlpSetting(nil)
		dlpSettingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_setting"}), "dlp_setting_ref01"))
		dlpSettingRef01Data["account_id"] = setup.idmap["account01"]

		dlpSettingRef01DataResult, err := dlpSettingRef01Ent.Create(dlpSettingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpSettingRef01Data = core.ToMapAny(entityData(dlpSettingRef01DataResult))
		if dlpSettingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		dlpSettingRef01DataUp0Up := map[string]any{
		}

		dlpSettingRef01MarkdefUp0Name := "public_key"
		dlpSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_setting_ref01_%d", setup.now)
		dlpSettingRef01DataUp0Up[dlpSettingRef01MarkdefUp0Name] = dlpSettingRef01MarkdefUp0Value

		dlpSettingRef01ResdataUp0Result, err := dlpSettingRef01Ent.Update(dlpSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpSettingRef01ResdataUp0 := core.ToMapAny(entityData(dlpSettingRef01ResdataUp0Result))
		if dlpSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpSettingRef01ResdataUp0[dlpSettingRef01MarkdefUp0Name] != dlpSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpSettingRef01MarkdefUp0Name, dlpSettingRef01ResdataUp0[dlpSettingRef01MarkdefUp0Name])
		}

		// LOAD
		dlpSettingRef01MatchDt0 := map[string]any{}
		dlpSettingRef01DataDt0Loaded, err := dlpSettingRef01Ent.Load(dlpSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if dlpSettingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


	})
}

func dlp_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_setting", "DlpSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_setting01", "dlp_setting02", "dlp_setting03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_SETTING_ENTID"])
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
