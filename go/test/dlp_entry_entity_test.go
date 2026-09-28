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

func TestDlpEntryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DlpEntry(nil)
		if ent == nil {
			t.Fatal("expected non-nil DlpEntryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"dlp_entry": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DlpEntry(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DlpEntry(nil).Stream("list", nil, nil) {
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
		setup := dlp_entryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dlp_entry." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DLP_TEST_DLP_ENTRY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dlpEntryRef01Ent := client.DlpEntry(nil)
		dlpEntryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dlp_entry"}), "dlp_entry_ref01"))
		dlpEntryRef01Data["account_id"] = setup.idmap["account01"]

		dlpEntryRef01DataResult, err := dlpEntryRef01Ent.Create(dlpEntryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dlpEntryRef01Data = core.ToMapAny(entityData(dlpEntryRef01DataResult))
		if dlpEntryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dlpEntryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dlpEntryRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpEntryRef01ListResult, err := dlpEntryRef01Ent.List(dlpEntryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpEntryRef01List, dlpEntryRef01ListOk := dlpEntryRef01ListResult.([]any)
		if !dlpEntryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dlpEntryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dlpEntryRef01List), map[string]any{"id": dlpEntryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dlpEntryRef01DataUp0Up := map[string]any{
			"id": dlpEntryRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		dlpEntryRef01MarkdefUp0Name := "description"
		dlpEntryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dlp_entry_ref01_%d", setup.now)
		dlpEntryRef01DataUp0Up[dlpEntryRef01MarkdefUp0Name] = dlpEntryRef01MarkdefUp0Value

		dlpEntryRef01ResdataUp0Result, err := dlpEntryRef01Ent.Update(dlpEntryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dlpEntryRef01ResdataUp0 := core.ToMapAny(entityData(dlpEntryRef01ResdataUp0Result))
		if dlpEntryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dlpEntryRef01ResdataUp0["id"] != dlpEntryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dlpEntryRef01ResdataUp0[dlpEntryRef01MarkdefUp0Name] != dlpEntryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dlpEntryRef01MarkdefUp0Name, dlpEntryRef01ResdataUp0[dlpEntryRef01MarkdefUp0Name])
		}

		// LOAD
		dlpEntryRef01MatchDt0 := map[string]any{
			"id": dlpEntryRef01Data["id"],
		}
		dlpEntryRef01DataDt0Loaded, err := dlpEntryRef01Ent.Load(dlpEntryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dlpEntryRef01DataDt0LoadResult := core.ToMapAny(entityData(dlpEntryRef01DataDt0Loaded))
		if dlpEntryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dlpEntryRef01DataDt0LoadResult["id"] != dlpEntryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dlpEntryRef01MatchRm0 := map[string]any{
			"id": dlpEntryRef01Data["id"],
		}
		_, err = dlpEntryRef01Ent.Remove(dlpEntryRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dlpEntryRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		dlpEntryRef01ListRt0Result, err := dlpEntryRef01Ent.List(dlpEntryRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dlpEntryRef01ListRt0, dlpEntryRef01ListRt0Ok := dlpEntryRef01ListRt0Result.([]any)
		if !dlpEntryRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dlpEntryRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dlpEntryRef01ListRt0), map[string]any{"id": dlpEntryRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func dlp_entryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dlp_entry", "DlpEntryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dlp_entry test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dlp_entry test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dlp_entry01", "dlp_entry02", "dlp_entry03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DLP_TEST_DLP_ENTRY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DLP_TEST_DLP_ENTRY_ENTID": idmap,
		"CLOUDFLARE_DLP_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DLP_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DLP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DLP_TEST_DLP_ENTRY_ENTID"])
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
