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

func TestDlpSensitivityLevelEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpSensitivityLevel(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpSensitivityLevelEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"dlp_sensitivity_level": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DlpSensitivityLevel(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.DlpSensitivityLevel(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dlp_sensitivity_levelBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_sensitivity_level." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpSensitivityLevelRef01Ent := client.DlpSensitivityLevel(nil)
		dlpSensitivityLevelRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_sensitivity_level"}), "dlp_sensitivity_level_ref01"))
		dlpSensitivityLevelRef01Data["account_id"] = setup.idmap["account01"]
		dlpSensitivityLevelRef01Data["sensitivity_group_id"] = setup.idmap["sensitivity_group01"]

		dlpSensitivityLevelRef01DataResult, err := dlpSensitivityLevelRef01Ent.Create(dlpSensitivityLevelRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpSensitivityLevelRef01Data = core.ToMapAny(entityData(dlpSensitivityLevelRef01DataResult))
		if dlpSensitivityLevelRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dlpSensitivityLevelRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dlpSensitivityLevelRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"sensitivity_group_id": setup.idmap["sensitivity_group01"],
		}

		dlpSensitivityLevelRef01ListResult, err := dlpSensitivityLevelRef01Ent.List(dlpSensitivityLevelRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpSensitivityLevelRef01List, dlpSensitivityLevelRef01ListOk := dlpSensitivityLevelRef01ListResult.([]any)
		if !dlpSensitivityLevelRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dlpSensitivityLevelRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dlpSensitivityLevelRef01List), map[string]any{"id": dlpSensitivityLevelRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dlpSensitivityLevelRef01DataUp0Up := map[string]any{
			"id": dlpSensitivityLevelRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"sensitivity_group_id": setup.idmap["sensitivity_group_id"],
		}

		dlpSensitivityLevelRef01MarkdefUp0Name := "description"
		dlpSensitivityLevelRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_sensitivity_level_ref01_%d", setup.now)
		dlpSensitivityLevelRef01DataUp0Up[dlpSensitivityLevelRef01MarkdefUp0Name] = dlpSensitivityLevelRef01MarkdefUp0Value

		dlpSensitivityLevelRef01ResdataUp0Result, err := dlpSensitivityLevelRef01Ent.Update(dlpSensitivityLevelRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpSensitivityLevelRef01ResdataUp0 := core.ToMapAny(entityData(dlpSensitivityLevelRef01ResdataUp0Result))
		if dlpSensitivityLevelRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpSensitivityLevelRef01ResdataUp0["id"] != dlpSensitivityLevelRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dlpSensitivityLevelRef01ResdataUp0[dlpSensitivityLevelRef01MarkdefUp0Name] != dlpSensitivityLevelRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpSensitivityLevelRef01MarkdefUp0Name, dlpSensitivityLevelRef01ResdataUp0[dlpSensitivityLevelRef01MarkdefUp0Name])
		}

		// LOAD
		dlpSensitivityLevelRef01MatchDt0 := map[string]any{
			"id": dlpSensitivityLevelRef01Data["id"],
		}
		dlpSensitivityLevelRef01DataDt0Loaded, err := dlpSensitivityLevelRef01Ent.Load(dlpSensitivityLevelRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dlpSensitivityLevelRef01DataDt0LoadResult := core.ToMapAny(entityData(dlpSensitivityLevelRef01DataDt0Loaded))
		if dlpSensitivityLevelRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dlpSensitivityLevelRef01DataDt0LoadResult["id"] != dlpSensitivityLevelRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dlpSensitivityLevelRef01MatchRm0 := map[string]any{
			"id": dlpSensitivityLevelRef01Data["id"],
		}
		_, err = dlpSensitivityLevelRef01Ent.Remove(dlpSensitivityLevelRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dlpSensitivityLevelRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
			"sensitivity_group_id": setup.idmap["sensitivity_group01"],
		}

		dlpSensitivityLevelRef01ListRt0Result, err := dlpSensitivityLevelRef01Ent.List(dlpSensitivityLevelRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpSensitivityLevelRef01ListRt0, dlpSensitivityLevelRef01ListRt0Ok := dlpSensitivityLevelRef01ListRt0Result.([]any)
		if !dlpSensitivityLevelRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dlpSensitivityLevelRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dlpSensitivityLevelRef01ListRt0), map[string]any{"id": dlpSensitivityLevelRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func dlp_sensitivity_levelBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_sensitivity_level", "DlpSensitivityLevelTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_sensitivity_level test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_sensitivity_level test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_sensitivity_level01", "dlp_sensitivity_level02", "dlp_sensitivity_level03", "account01", "sensitivity_group01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add sensitivity_group_id alias for update test.
	if idmapResolved["sensitivity_group_id"] == nil {
		idmapResolved["sensitivity_group_id"] = idmapResolved["sensitivity_group01"]
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
