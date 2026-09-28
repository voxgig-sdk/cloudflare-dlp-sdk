package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-dlp-sdk/go/utility/struct"
)

type CloudflareDlpSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareDlpSDK(options map[string]any) *CloudflareDlpSDK {
	sdk := &CloudflareDlpSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareDlpSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareDlpSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareDlpSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareDlpSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareDlpSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareDlpSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareDlpSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareDlpSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareDlpSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareDlpSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareDlpSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// DlpCustomPromptTopic returns a DlpCustomPromptTopic entity bound to this client.
// Idiomatic usage: client.DlpCustomPromptTopic(nil).List(nil, nil) or
// client.DlpCustomPromptTopic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpCustomPromptTopic(data map[string]any) CloudflareDlpEntity {
	return NewDlpCustomPromptTopicEntityFunc(sdk, data)
}


// DlpDataClass returns a DlpDataClass entity bound to this client.
// Idiomatic usage: client.DlpDataClass(nil).List(nil, nil) or
// client.DlpDataClass(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDataClass(data map[string]any) CloudflareDlpEntity {
	return NewDlpDataClassEntityFunc(sdk, data)
}


// DlpDataTag returns a DlpDataTag entity bound to this client.
// Idiomatic usage: client.DlpDataTag(nil).List(nil, nil) or
// client.DlpDataTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDataTag(data map[string]any) CloudflareDlpEntity {
	return NewDlpDataTagEntityFunc(sdk, data)
}


// DlpDataTagCategory returns a DlpDataTagCategory entity bound to this client.
// Idiomatic usage: client.DlpDataTagCategory(nil).List(nil, nil) or
// client.DlpDataTagCategory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDataTagCategory(data map[string]any) CloudflareDlpEntity {
	return NewDlpDataTagCategoryEntityFunc(sdk, data)
}


// DlpDataTagCategoryTemplate returns a DlpDataTagCategoryTemplate entity bound to this client.
// Idiomatic usage: client.DlpDataTagCategoryTemplate(nil).List(nil, nil) or
// client.DlpDataTagCategoryTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDataTagCategoryTemplate(data map[string]any) CloudflareDlpEntity {
	return NewDlpDataTagCategoryTemplateEntityFunc(sdk, data)
}


// DlpDataset returns a DlpDataset entity bound to this client.
// Idiomatic usage: client.DlpDataset(nil).List(nil, nil) or
// client.DlpDataset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDataset(data map[string]any) CloudflareDlpEntity {
	return NewDlpDatasetEntityFunc(sdk, data)
}


// DlpDocumentFingerprint returns a DlpDocumentFingerprint entity bound to this client.
// Idiomatic usage: client.DlpDocumentFingerprint(nil).List(nil, nil) or
// client.DlpDocumentFingerprint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpDocumentFingerprint(data map[string]any) CloudflareDlpEntity {
	return NewDlpDocumentFingerprintEntityFunc(sdk, data)
}


// DlpEmail returns a DlpEmail entity bound to this client.
// Idiomatic usage: client.DlpEmail(nil).List(nil, nil) or
// client.DlpEmail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpEmail(data map[string]any) CloudflareDlpEntity {
	return NewDlpEmailEntityFunc(sdk, data)
}


// DlpEntry returns a DlpEntry entity bound to this client.
// Idiomatic usage: client.DlpEntry(nil).List(nil, nil) or
// client.DlpEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpEntry(data map[string]any) CloudflareDlpEntity {
	return NewDlpEntryEntityFunc(sdk, data)
}


// DlpIntegrationEntry returns a DlpIntegrationEntry entity bound to this client.
// Idiomatic usage: client.DlpIntegrationEntry(nil).List(nil, nil) or
// client.DlpIntegrationEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpIntegrationEntry(data map[string]any) CloudflareDlpEntity {
	return NewDlpIntegrationEntryEntityFunc(sdk, data)
}


// DlpPredefinedEntry returns a DlpPredefinedEntry entity bound to this client.
// Idiomatic usage: client.DlpPredefinedEntry(nil).List(nil, nil) or
// client.DlpPredefinedEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpPredefinedEntry(data map[string]any) CloudflareDlpEntity {
	return NewDlpPredefinedEntryEntityFunc(sdk, data)
}


// DlpProfile returns a DlpProfile entity bound to this client.
// Idiomatic usage: client.DlpProfile(nil).List(nil, nil) or
// client.DlpProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpProfile(data map[string]any) CloudflareDlpEntity {
	return NewDlpProfileEntityFunc(sdk, data)
}


// DlpSensitivityGroup returns a DlpSensitivityGroup entity bound to this client.
// Idiomatic usage: client.DlpSensitivityGroup(nil).List(nil, nil) or
// client.DlpSensitivityGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpSensitivityGroup(data map[string]any) CloudflareDlpEntity {
	return NewDlpSensitivityGroupEntityFunc(sdk, data)
}


// DlpSensitivityGroupTemplate returns a DlpSensitivityGroupTemplate entity bound to this client.
// Idiomatic usage: client.DlpSensitivityGroupTemplate(nil).List(nil, nil) or
// client.DlpSensitivityGroupTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpSensitivityGroupTemplate(data map[string]any) CloudflareDlpEntity {
	return NewDlpSensitivityGroupTemplateEntityFunc(sdk, data)
}


// DlpSensitivityLevel returns a DlpSensitivityLevel entity bound to this client.
// Idiomatic usage: client.DlpSensitivityLevel(nil).List(nil, nil) or
// client.DlpSensitivityLevel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpSensitivityLevel(data map[string]any) CloudflareDlpEntity {
	return NewDlpSensitivityLevelEntityFunc(sdk, data)
}


// DlpSetting returns a DlpSetting entity bound to this client.
// Idiomatic usage: client.DlpSetting(nil).List(nil, nil) or
// client.DlpSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) DlpSetting(data map[string]any) CloudflareDlpEntity {
	return NewDlpSettingEntityFunc(sdk, data)
}


// Policy returns a Policy entity bound to this client.
// Idiomatic usage: client.Policy(nil).List(nil, nil) or
// client.Policy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) Policy(data map[string]any) CloudflareDlpEntity {
	return NewPolicyEntityFunc(sdk, data)
}


// PostureApiCreateRemediationJob returns a PostureApiCreateRemediationJob entity bound to this client.
// Idiomatic usage: client.PostureApiCreateRemediationJob(nil).List(nil, nil) or
// client.PostureApiCreateRemediationJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiCreateRemediationJob(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiCreateRemediationJobEntityFunc(sdk, data)
}


// PostureApiCreateWebhookJob returns a PostureApiCreateWebhookJob entity bound to this client.
// Idiomatic usage: client.PostureApiCreateWebhookJob(nil).List(nil, nil) or
// client.PostureApiCreateWebhookJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiCreateWebhookJob(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiCreateWebhookJobEntityFunc(sdk, data)
}


// PostureApiExportJob returns a PostureApiExportJob entity bound to this client.
// Idiomatic usage: client.PostureApiExportJob(nil).List(nil, nil) or
// client.PostureApiExportJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiExportJob(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiExportJobEntityFunc(sdk, data)
}


// PostureApiFinding returns a PostureApiFinding entity bound to this client.
// Idiomatic usage: client.PostureApiFinding(nil).List(nil, nil) or
// client.PostureApiFinding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiFinding(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiFindingEntityFunc(sdk, data)
}


// PostureApiFindingInstance returns a PostureApiFindingInstance entity bound to this client.
// Idiomatic usage: client.PostureApiFindingInstance(nil).List(nil, nil) or
// client.PostureApiFindingInstance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiFindingInstance(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiFindingInstanceEntityFunc(sdk, data)
}


// PostureApiFindingType returns a PostureApiFindingType entity bound to this client.
// Idiomatic usage: client.PostureApiFindingType(nil).List(nil, nil) or
// client.PostureApiFindingType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiFindingType(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiFindingTypeEntityFunc(sdk, data)
}


// PostureApiPaginatedContentAssetList returns a PostureApiPaginatedContentAssetList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedContentAssetList(nil).List(nil, nil) or
// client.PostureApiPaginatedContentAssetList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedContentAssetList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedContentAssetListEntityFunc(sdk, data)
}


// PostureApiPaginatedExportJobList returns a PostureApiPaginatedExportJobList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedExportJobList(nil).List(nil, nil) or
// client.PostureApiPaginatedExportJobList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedExportJobList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedExportJobListEntityFunc(sdk, data)
}


// PostureApiPaginatedFindingInstanceList returns a PostureApiPaginatedFindingInstanceList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedFindingInstanceList(nil).List(nil, nil) or
// client.PostureApiPaginatedFindingInstanceList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedFindingInstanceList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedFindingInstanceListEntityFunc(sdk, data)
}


// PostureApiPaginatedFindingList returns a PostureApiPaginatedFindingList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedFindingList(nil).List(nil, nil) or
// client.PostureApiPaginatedFindingList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedFindingList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedFindingListEntityFunc(sdk, data)
}


// PostureApiPaginatedFindingTypeList returns a PostureApiPaginatedFindingTypeList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedFindingTypeList(nil).List(nil, nil) or
// client.PostureApiPaginatedFindingTypeList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedFindingTypeList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedFindingTypeListEntityFunc(sdk, data)
}


// PostureApiPaginatedRemediationJobList returns a PostureApiPaginatedRemediationJobList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedRemediationJobList(nil).List(nil, nil) or
// client.PostureApiPaginatedRemediationJobList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedRemediationJobList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedRemediationJobListEntityFunc(sdk, data)
}


// PostureApiPaginatedRemediationTypeList returns a PostureApiPaginatedRemediationTypeList entity bound to this client.
// Idiomatic usage: client.PostureApiPaginatedRemediationTypeList(nil).List(nil, nil) or
// client.PostureApiPaginatedRemediationTypeList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiPaginatedRemediationTypeList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiPaginatedRemediationTypeListEntityFunc(sdk, data)
}


// PostureApiWebhook returns a PostureApiWebhook entity bound to this client.
// Idiomatic usage: client.PostureApiWebhook(nil).List(nil, nil) or
// client.PostureApiWebhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiWebhook(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiWebhookEntityFunc(sdk, data)
}


// PostureApiWebhookList returns a PostureApiWebhookList entity bound to this client.
// Idiomatic usage: client.PostureApiWebhookList(nil).List(nil, nil) or
// client.PostureApiWebhookList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) PostureApiWebhookList(data map[string]any) CloudflareDlpEntity {
	return NewPostureApiWebhookListEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareDlpSDK) Webhook(data map[string]any) CloudflareDlpEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareDlpSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareDlpSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
