// CloudflareDlp Ts SDK

import { DlpCustomPromptTopicEntity } from './entity/DlpCustomPromptTopicEntity'
import { DlpDataClassEntity } from './entity/DlpDataClassEntity'
import { DlpDataTagEntity } from './entity/DlpDataTagEntity'
import { DlpDataTagCategoryEntity } from './entity/DlpDataTagCategoryEntity'
import { DlpDataTagCategoryTemplateEntity } from './entity/DlpDataTagCategoryTemplateEntity'
import { DlpDatasetEntity } from './entity/DlpDatasetEntity'
import { DlpDocumentFingerprintEntity } from './entity/DlpDocumentFingerprintEntity'
import { DlpEmailEntity } from './entity/DlpEmailEntity'
import { DlpEntryEntity } from './entity/DlpEntryEntity'
import { DlpIntegrationEntryEntity } from './entity/DlpIntegrationEntryEntity'
import { DlpPredefinedEntryEntity } from './entity/DlpPredefinedEntryEntity'
import { DlpProfileEntity } from './entity/DlpProfileEntity'
import { DlpSensitivityGroupEntity } from './entity/DlpSensitivityGroupEntity'
import { DlpSensitivityGroupTemplateEntity } from './entity/DlpSensitivityGroupTemplateEntity'
import { DlpSensitivityLevelEntity } from './entity/DlpSensitivityLevelEntity'
import { DlpSettingEntity } from './entity/DlpSettingEntity'
import { PolicyEntity } from './entity/PolicyEntity'
import { PostureApiCreateRemediationJobEntity } from './entity/PostureApiCreateRemediationJobEntity'
import { PostureApiCreateWebhookJobEntity } from './entity/PostureApiCreateWebhookJobEntity'
import { PostureApiExportJobEntity } from './entity/PostureApiExportJobEntity'
import { PostureApiFindingEntity } from './entity/PostureApiFindingEntity'
import { PostureApiFindingInstanceEntity } from './entity/PostureApiFindingInstanceEntity'
import { PostureApiFindingTypeEntity } from './entity/PostureApiFindingTypeEntity'
import { PostureApiPaginatedContentAssetListEntity } from './entity/PostureApiPaginatedContentAssetListEntity'
import { PostureApiPaginatedExportJobListEntity } from './entity/PostureApiPaginatedExportJobListEntity'
import { PostureApiPaginatedFindingInstanceListEntity } from './entity/PostureApiPaginatedFindingInstanceListEntity'
import { PostureApiPaginatedFindingListEntity } from './entity/PostureApiPaginatedFindingListEntity'
import { PostureApiPaginatedFindingTypeListEntity } from './entity/PostureApiPaginatedFindingTypeListEntity'
import { PostureApiPaginatedRemediationJobListEntity } from './entity/PostureApiPaginatedRemediationJobListEntity'
import { PostureApiPaginatedRemediationTypeListEntity } from './entity/PostureApiPaginatedRemediationTypeListEntity'
import { PostureApiWebhookEntity } from './entity/PostureApiWebhookEntity'
import { PostureApiWebhookListEntity } from './entity/PostureApiWebhookListEntity'
import { WebhookEntity } from './entity/WebhookEntity'

export type * from './CloudflareDlpTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareDlpEntityBase } from './CloudflareDlpEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareDlpSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareDlpSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareDlpSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareDlpSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.DlpCustomPromptTopic().list()` / `client.DlpCustomPromptTopic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpCustomPromptTopic(entopts?: Record<string, any>) {
    const self = this
    return new DlpCustomPromptTopicEntity(self, entopts)
  }


  // Entity access: `client.DlpDataClass().list()` / `client.DlpDataClass().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDataClass(entopts?: Record<string, any>) {
    const self = this
    return new DlpDataClassEntity(self, entopts)
  }


  // Entity access: `client.DlpDataTag().list()` / `client.DlpDataTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDataTag(entopts?: Record<string, any>) {
    const self = this
    return new DlpDataTagEntity(self, entopts)
  }


  // Entity access: `client.DlpDataTagCategory().list()` / `client.DlpDataTagCategory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDataTagCategory(entopts?: Record<string, any>) {
    const self = this
    return new DlpDataTagCategoryEntity(self, entopts)
  }


  // Entity access: `client.DlpDataTagCategoryTemplate().list()` / `client.DlpDataTagCategoryTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDataTagCategoryTemplate(entopts?: Record<string, any>) {
    const self = this
    return new DlpDataTagCategoryTemplateEntity(self, entopts)
  }


  // Entity access: `client.DlpDataset().list()` / `client.DlpDataset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDataset(entopts?: Record<string, any>) {
    const self = this
    return new DlpDatasetEntity(self, entopts)
  }


  // Entity access: `client.DlpDocumentFingerprint().list()` / `client.DlpDocumentFingerprint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpDocumentFingerprint(entopts?: Record<string, any>) {
    const self = this
    return new DlpDocumentFingerprintEntity(self, entopts)
  }


  // Entity access: `client.DlpEmail().list()` / `client.DlpEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpEmail(entopts?: Record<string, any>) {
    const self = this
    return new DlpEmailEntity(self, entopts)
  }


  // Entity access: `client.DlpEntry().list()` / `client.DlpEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpEntry(entopts?: Record<string, any>) {
    const self = this
    return new DlpEntryEntity(self, entopts)
  }


  // Entity access: `client.DlpIntegrationEntry().list()` / `client.DlpIntegrationEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpIntegrationEntry(entopts?: Record<string, any>) {
    const self = this
    return new DlpIntegrationEntryEntity(self, entopts)
  }


  // Entity access: `client.DlpPredefinedEntry().list()` / `client.DlpPredefinedEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpPredefinedEntry(entopts?: Record<string, any>) {
    const self = this
    return new DlpPredefinedEntryEntity(self, entopts)
  }


  // Entity access: `client.DlpProfile().list()` / `client.DlpProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpProfile(entopts?: Record<string, any>) {
    const self = this
    return new DlpProfileEntity(self, entopts)
  }


  // Entity access: `client.DlpSensitivityGroup().list()` / `client.DlpSensitivityGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpSensitivityGroup(entopts?: Record<string, any>) {
    const self = this
    return new DlpSensitivityGroupEntity(self, entopts)
  }


  // Entity access: `client.DlpSensitivityGroupTemplate().list()` / `client.DlpSensitivityGroupTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpSensitivityGroupTemplate(entopts?: Record<string, any>) {
    const self = this
    return new DlpSensitivityGroupTemplateEntity(self, entopts)
  }


  // Entity access: `client.DlpSensitivityLevel().list()` / `client.DlpSensitivityLevel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpSensitivityLevel(entopts?: Record<string, any>) {
    const self = this
    return new DlpSensitivityLevelEntity(self, entopts)
  }


  // Entity access: `client.DlpSetting().list()` / `client.DlpSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DlpSetting(entopts?: Record<string, any>) {
    const self = this
    return new DlpSettingEntity(self, entopts)
  }


  // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Policy(entopts?: Record<string, any>) {
    const self = this
    return new PolicyEntity(self, entopts)
  }


  // Entity access: `client.PostureApiCreateRemediationJob().list()` / `client.PostureApiCreateRemediationJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiCreateRemediationJob(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiCreateRemediationJobEntity(self, entopts)
  }


  // Entity access: `client.PostureApiCreateWebhookJob().list()` / `client.PostureApiCreateWebhookJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiCreateWebhookJob(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiCreateWebhookJobEntity(self, entopts)
  }


  // Entity access: `client.PostureApiExportJob().list()` / `client.PostureApiExportJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiExportJob(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiExportJobEntity(self, entopts)
  }


  // Entity access: `client.PostureApiFinding().list()` / `client.PostureApiFinding().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiFinding(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiFindingEntity(self, entopts)
  }


  // Entity access: `client.PostureApiFindingInstance().list()` / `client.PostureApiFindingInstance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiFindingInstance(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiFindingInstanceEntity(self, entopts)
  }


  // Entity access: `client.PostureApiFindingType().list()` / `client.PostureApiFindingType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiFindingType(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiFindingTypeEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedContentAssetList().list()` / `client.PostureApiPaginatedContentAssetList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedContentAssetList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedContentAssetListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedExportJobList().list()` / `client.PostureApiPaginatedExportJobList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedExportJobList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedExportJobListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedFindingInstanceList().list()` / `client.PostureApiPaginatedFindingInstanceList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedFindingInstanceList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedFindingInstanceListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedFindingList().list()` / `client.PostureApiPaginatedFindingList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedFindingList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedFindingListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedFindingTypeList().list()` / `client.PostureApiPaginatedFindingTypeList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedFindingTypeList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedFindingTypeListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedRemediationJobList().list()` / `client.PostureApiPaginatedRemediationJobList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedRemediationJobList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedRemediationJobListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiPaginatedRemediationTypeList().list()` / `client.PostureApiPaginatedRemediationTypeList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiPaginatedRemediationTypeList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiPaginatedRemediationTypeListEntity(self, entopts)
  }


  // Entity access: `client.PostureApiWebhook().list()` / `client.PostureApiWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiWebhook(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiWebhookEntity(self, entopts)
  }


  // Entity access: `client.PostureApiWebhookList().list()` / `client.PostureApiWebhookList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostureApiWebhookList(entopts?: Record<string, any>) {
    const self = this
    return new PostureApiWebhookListEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareDlpSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareDlpSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareDlp' }
  }

  toString() {
    return 'CloudflareDlp ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareDlpSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareDlpEntityBase,

  CloudflareDlpSDK,
  SDK,
}


