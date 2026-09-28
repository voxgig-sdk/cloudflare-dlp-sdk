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

func TestDlpDatasetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpDataset(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpDatasetEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"dlp_dataset": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DlpDataset(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DlpDataset(nil).Stream("list", nil, nil) {
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
		setup := dlp_datasetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_dataset." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpDatasetRef01Ent := client.DlpDataset(nil)
		dlpDatasetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_dataset"}), "dlp_dataset_ref01"))
		dlpDatasetRef01Data["account_id"] = setup.idmap["account01"]

		dlpDatasetRef01DataResult, err := dlpDatasetRef01Ent.Create(dlpDatasetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpDatasetRef01Data = core.ToMapAny(entityData(dlpDatasetRef01DataResult))
		if dlpDatasetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dlpDatasetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dlpDatasetRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpDatasetRef01ListResult, err := dlpDatasetRef01Ent.List(dlpDatasetRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpDatasetRef01List, dlpDatasetRef01ListOk := dlpDatasetRef01ListResult.([]any)
		if !dlpDatasetRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dlpDatasetRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dlpDatasetRef01List), map[string]any{"id": dlpDatasetRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dlpDatasetRef01DataUp0Up := map[string]any{
			"id": dlpDatasetRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		dlpDatasetRef01MarkdefUp0Name := "description"
		dlpDatasetRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_dataset_ref01_%d", setup.now)
		dlpDatasetRef01DataUp0Up[dlpDatasetRef01MarkdefUp0Name] = dlpDatasetRef01MarkdefUp0Value

		dlpDatasetRef01ResdataUp0Result, err := dlpDatasetRef01Ent.Update(dlpDatasetRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpDatasetRef01ResdataUp0 := core.ToMapAny(entityData(dlpDatasetRef01ResdataUp0Result))
		if dlpDatasetRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpDatasetRef01ResdataUp0["id"] != dlpDatasetRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dlpDatasetRef01ResdataUp0[dlpDatasetRef01MarkdefUp0Name] != dlpDatasetRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpDatasetRef01MarkdefUp0Name, dlpDatasetRef01ResdataUp0[dlpDatasetRef01MarkdefUp0Name])
		}

		// LOAD
		dlpDatasetRef01MatchDt0 := map[string]any{
			"id": dlpDatasetRef01Data["id"],
		}
		dlpDatasetRef01DataDt0Loaded, err := dlpDatasetRef01Ent.Load(dlpDatasetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dlpDatasetRef01DataDt0LoadResult := core.ToMapAny(entityData(dlpDatasetRef01DataDt0Loaded))
		if dlpDatasetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dlpDatasetRef01DataDt0LoadResult["id"] != dlpDatasetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dlpDatasetRef01MatchRm0 := map[string]any{
			"id": dlpDatasetRef01Data["id"],
		}
		_, err = dlpDatasetRef01Ent.Remove(dlpDatasetRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dlpDatasetRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpDatasetRef01ListRt0Result, err := dlpDatasetRef01Ent.List(dlpDatasetRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpDatasetRef01ListRt0, dlpDatasetRef01ListRt0Ok := dlpDatasetRef01ListRt0Result.([]any)
		if !dlpDatasetRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dlpDatasetRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dlpDatasetRef01ListRt0), map[string]any{"id": dlpDatasetRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func dlp_datasetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_dataset", "DlpDatasetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_dataset test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_dataset test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_dataset01", "dlp_dataset02", "dlp_dataset03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_DATASET_ENTID"])
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
