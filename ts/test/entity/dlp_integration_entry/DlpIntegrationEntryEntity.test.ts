

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareDlpSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DlpIntegrationEntryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.DlpIntegrationEntry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dlp_integration_entry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"t":"`$BOOLEAN`","key$":"enabled","index$":0},"entry_id":{"a":true,"fo":"uuid","h":"Entry Id","n":"entry_id","r":true,"t":"`$STRING`","key$":"entry_id","index$":1},"profile_id":{"a":true,"fo":"uuid","h":"Profile Id","n":"profile_id","r":false,"sh":"This field is not used as the owning profile.","t":"`$STRING`","key$":"profile_id","index$":2}},"name":"dlp_integration_entry","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/dlp/entries/integration","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dlp/entries/integration","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"entries"},{"lit":"integration"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/dlp/entries/integration/{entry_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"entry_id","or":"entry_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/dlp/entries/integration/{entry_id}","q":{"exist":["account_id","entry_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"entries"},{"lit":"integration"},{"var":"entry_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/dlp/entries/integration/{entry_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"entry_id","or":"entry_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/dlp/entries/integration/{entry_id}","q":{"exist":["account_id","entry_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"entries"},{"lit":"integration"},{"var":"entry_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dlp_integration_entry","name__orig":"dlp_integration_entry","Name":"DlpIntegrationEntry","name_":"dlp_integration_entry","name-":"dlp-integration-entry","NAME":"DLP_INTEGRATION_ENTRY","index$":9}, {"active":true,"entity":"dlp_integration_entry","key$":"BasicDlpIntegrationEntryFlow","kind":"basic","name":"BasicDlpIntegrationEntryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dlp_integration_entry_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"dlp_integration_entry_ref01","srcdatavar":"dlp_integration_entry_ref01_data","suffix":"_up0","textfield":"profile_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dlp_integration_entry_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"dlp_integration_entry_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"dlp_integration_entry01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'DlpIntegrationEntry', {"POST /accounts/{account_id}/dlp/entries/integration":{"protocol":"http","requestBody":{"description":"This endpoint will update an existing integration entry. It is not possible to create new integration entries.","required":true,"content":{"application/json":{"schema":{"description":"Used to create a new predefined or integration entry.\n\nPredefined or integration entries can not be updated via the API so\nthese fields will update the entry's settings.","type":"object","properties":{"enabled":{"type":"boolean","key$":"enabled"},"entry_id":{"type":"string","format":"uuid","key$":"entry_id"},"profile_id":{"description":"This field is not used as the owning profile.\nFor predefined entries it is already set to a predefined profile.","type":"string","format":"uuid","nullable":true,"key$":"profile_id"}},"required":["enabled","entry_id"],"x-ref":"#/components/schemas/dlp_NewPredefinedEntry","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"DELETE /accounts/{account_id}/dlp/entries/integration/{entry_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"entry_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"PUT /accounts/{account_id}/dlp/entries/integration/{entry_id}":{"protocol":"http","requestBody":{"description":"Enable or disable integration entry in owning profile.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"type":"boolean","key$":"enabled"}},"required":["enabled"],"x-ref":"#/components/schemas/dlp_PredefinedEntryUpdate","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"entry_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dlp_integration_entry_ref01_ent = client.DlpIntegrationEntry()
    let dlp_integration_entry_ref01_data = setup.data.new.dlp_integration_entry['dlp_integration_entry_ref01']
    dlp_integration_entry_ref01_data['account_id'] = setup.idmap['account01']

    dlp_integration_entry_ref01_data = (await dlp_integration_entry_ref01_ent.create(dlp_integration_entry_ref01_data)).data()
    assert(null != dlp_integration_entry_ref01_data)


    // UPDATE
    const dlp_integration_entry_ref01_data_up0: any = {}
    dlp_integration_entry_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const dlp_integration_entry_ref01_markdef_up0 = { name: 'profile_id', value: 'Mark01-dlp_integration_entry_ref01_' + setup.now }
    ;(dlp_integration_entry_ref01_data_up0 as any)[dlp_integration_entry_ref01_markdef_up0.name] = dlp_integration_entry_ref01_markdef_up0.value

    const dlp_integration_entry_ref01_resdata_up0 = (await dlp_integration_entry_ref01_ent.update(dlp_integration_entry_ref01_data_up0)).data()
    assert(null != dlp_integration_entry_ref01_resdata_up0)

    assert((dlp_integration_entry_ref01_resdata_up0 as any)[dlp_integration_entry_ref01_markdef_up0.name] === dlp_integration_entry_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dlp_integration_entry/DlpIntegrationEntryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareDlpSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['dlp_integration_entry01','dlp_integration_entry02','dlp_integration_entry03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_DLP_INTEGRATION_ENTRY_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_DLP_INTEGRATION_ENTRY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_INTEGRATION_ENTRY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareDlpSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_DLP_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_DLP_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
