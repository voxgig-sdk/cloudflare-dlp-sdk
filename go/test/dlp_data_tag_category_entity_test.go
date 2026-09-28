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

func TestDlpDataTagCategoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpDataTagCategory(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpDataTagCategoryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"dlp_data_tag_category": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DlpDataTagCategory(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DlpDataTagCategory(nil).Stream("list", nil, nil) {
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
		setup := dlp_data_tag_categoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_data_tag_category." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_DATA_TAG_CATEGORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpDataTagCategoryRef01Ent := client.DlpDataTagCategory(nil)
		dlpDataTagCategoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_data_tag_category"}), "dlp_data_tag_category_ref01"))
		dlpDataTagCategoryRef01Data["account_id"] = setup.idmap["account01"]

		dlpDataTagCategoryRef01DataResult, err := dlpDataTagCategoryRef01Ent.Create(dlpDataTagCategoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpDataTagCategoryRef01Data = core.ToMapAny(entityData(dlpDataTagCategoryRef01DataResult))
		if dlpDataTagCategoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dlpDataTagCategoryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dlpDataTagCategoryRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpDataTagCategoryRef01ListResult, err := dlpDataTagCategoryRef01Ent.List(dlpDataTagCategoryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpDataTagCategoryRef01List, dlpDataTagCategoryRef01ListOk := dlpDataTagCategoryRef01ListResult.([]any)
		if !dlpDataTagCategoryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dlpDataTagCategoryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dlpDataTagCategoryRef01List), map[string]any{"id": dlpDataTagCategoryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dlpDataTagCategoryRef01DataUp0Up := map[string]any{
			"id": dlpDataTagCategoryRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		dlpDataTagCategoryRef01MarkdefUp0Name := "description"
		dlpDataTagCategoryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_data_tag_category_ref01_%d", setup.now)
		dlpDataTagCategoryRef01DataUp0Up[dlpDataTagCategoryRef01MarkdefUp0Name] = dlpDataTagCategoryRef01MarkdefUp0Value

		dlpDataTagCategoryRef01ResdataUp0Result, err := dlpDataTagCategoryRef01Ent.Update(dlpDataTagCategoryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpDataTagCategoryRef01ResdataUp0 := core.ToMapAny(entityData(dlpDataTagCategoryRef01ResdataUp0Result))
		if dlpDataTagCategoryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpDataTagCategoryRef01ResdataUp0["id"] != dlpDataTagCategoryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dlpDataTagCategoryRef01ResdataUp0[dlpDataTagCategoryRef01MarkdefUp0Name] != dlpDataTagCategoryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpDataTagCategoryRef01MarkdefUp0Name, dlpDataTagCategoryRef01ResdataUp0[dlpDataTagCategoryRef01MarkdefUp0Name])
		}

		// LOAD
		dlpDataTagCategoryRef01MatchDt0 := map[string]any{
			"id": dlpDataTagCategoryRef01Data["id"],
		}
		dlpDataTagCategoryRef01DataDt0Loaded, err := dlpDataTagCategoryRef01Ent.Load(dlpDataTagCategoryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dlpDataTagCategoryRef01DataDt0LoadResult := core.ToMapAny(entityData(dlpDataTagCategoryRef01DataDt0Loaded))
		if dlpDataTagCategoryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dlpDataTagCategoryRef01DataDt0LoadResult["id"] != dlpDataTagCategoryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dlpDataTagCategoryRef01MatchRm0 := map[string]any{
			"id": dlpDataTagCategoryRef01Data["id"],
		}
		_, err = dlpDataTagCategoryRef01Ent.Remove(dlpDataTagCategoryRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dlpDataTagCategoryRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpDataTagCategoryRef01ListRt0Result, err := dlpDataTagCategoryRef01Ent.List(dlpDataTagCategoryRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpDataTagCategoryRef01ListRt0, dlpDataTagCategoryRef01ListRt0Ok := dlpDataTagCategoryRef01ListRt0Result.([]any)
		if !dlpDataTagCategoryRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dlpDataTagCategoryRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dlpDataTagCategoryRef01ListRt0), map[string]any{"id": dlpDataTagCategoryRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func dlp_data_tag_categoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_data_tag_category", "DlpDataTagCategoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_data_tag_category test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_data_tag_category test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_data_tag_category01", "dlp_data_tag_category02", "dlp_data_tag_category03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_DATA_TAG_CATEGORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_DATA_TAG_CATEGORY_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_DATA_TAG_CATEGORY_ENTID"])
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
