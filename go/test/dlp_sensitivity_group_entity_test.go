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

func TestDlpSensitivityGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpSensitivityGroup(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpSensitivityGroupEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"dlp_sensitivity_group": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DlpSensitivityGroup(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DlpSensitivityGroup(nil).Stream("list", nil, nil) {
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
		setup := dlp_sensitivity_groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_sensitivity_group." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpSensitivityGroupRef01Ent := client.DlpSensitivityGroup(nil)
		dlpSensitivityGroupRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_sensitivity_group"}), "dlp_sensitivity_group_ref01"))
		dlpSensitivityGroupRef01Data["account_id"] = setup.idmap["account01"]

		dlpSensitivityGroupRef01DataResult, err := dlpSensitivityGroupRef01Ent.Create(dlpSensitivityGroupRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpSensitivityGroupRef01Data = core.ToMapAny(entityData(dlpSensitivityGroupRef01DataResult))
		if dlpSensitivityGroupRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dlpSensitivityGroupRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dlpSensitivityGroupRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpSensitivityGroupRef01ListResult, err := dlpSensitivityGroupRef01Ent.List(dlpSensitivityGroupRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpSensitivityGroupRef01List, dlpSensitivityGroupRef01ListOk := dlpSensitivityGroupRef01ListResult.([]any)
		if !dlpSensitivityGroupRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dlpSensitivityGroupRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dlpSensitivityGroupRef01List), map[string]any{"id": dlpSensitivityGroupRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dlpSensitivityGroupRef01DataUp0Up := map[string]any{
			"id": dlpSensitivityGroupRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		dlpSensitivityGroupRef01MarkdefUp0Name := "description"
		dlpSensitivityGroupRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_sensitivity_group_ref01_%d", setup.now)
		dlpSensitivityGroupRef01DataUp0Up[dlpSensitivityGroupRef01MarkdefUp0Name] = dlpSensitivityGroupRef01MarkdefUp0Value

		dlpSensitivityGroupRef01ResdataUp0Result, err := dlpSensitivityGroupRef01Ent.Update(dlpSensitivityGroupRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpSensitivityGroupRef01ResdataUp0 := core.ToMapAny(entityData(dlpSensitivityGroupRef01ResdataUp0Result))
		if dlpSensitivityGroupRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpSensitivityGroupRef01ResdataUp0["id"] != dlpSensitivityGroupRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dlpSensitivityGroupRef01ResdataUp0[dlpSensitivityGroupRef01MarkdefUp0Name] != dlpSensitivityGroupRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpSensitivityGroupRef01MarkdefUp0Name, dlpSensitivityGroupRef01ResdataUp0[dlpSensitivityGroupRef01MarkdefUp0Name])
		}

		// LOAD
		dlpSensitivityGroupRef01MatchDt0 := map[string]any{
			"id": dlpSensitivityGroupRef01Data["id"],
		}
		dlpSensitivityGroupRef01DataDt0Loaded, err := dlpSensitivityGroupRef01Ent.Load(dlpSensitivityGroupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dlpSensitivityGroupRef01DataDt0LoadResult := core.ToMapAny(entityData(dlpSensitivityGroupRef01DataDt0Loaded))
		if dlpSensitivityGroupRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dlpSensitivityGroupRef01DataDt0LoadResult["id"] != dlpSensitivityGroupRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dlpSensitivityGroupRef01MatchRm0 := map[string]any{
			"id": dlpSensitivityGroupRef01Data["id"],
		}
		_, err = dlpSensitivityGroupRef01Ent.Remove(dlpSensitivityGroupRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dlpSensitivityGroupRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpSensitivityGroupRef01ListRt0Result, err := dlpSensitivityGroupRef01Ent.List(dlpSensitivityGroupRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpSensitivityGroupRef01ListRt0, dlpSensitivityGroupRef01ListRt0Ok := dlpSensitivityGroupRef01ListRt0Result.([]any)
		if !dlpSensitivityGroupRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dlpSensitivityGroupRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dlpSensitivityGroupRef01ListRt0), map[string]any{"id": dlpSensitivityGroupRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func dlp_sensitivity_groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_sensitivity_group", "DlpSensitivityGroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_sensitivity_group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_sensitivity_group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_sensitivity_group01", "dlp_sensitivity_group02", "dlp_sensitivity_group03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_GROUP_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_GROUP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
