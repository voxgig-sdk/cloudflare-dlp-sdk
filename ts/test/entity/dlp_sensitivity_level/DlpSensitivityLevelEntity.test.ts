

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


describe('DlpSensitivityLevelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.DlpSensitivityLevel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dlp_sensitivity_level.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":2},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$OBJECT`","key$":"result","index$":3}},"id":{"field":"id","name":"id"},"name":"dlp_sensitivity_level","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sensitivity_group_id","or":"sensitivity_group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels","q":{"exist":["account_id","sensitivity_group_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"sensitivity_groups"},{"var":"sensitivity_group_id"},{"lit":"levels"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sensitivity_group_id","or":"sensitivity_group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels","q":{"exist":["account_id","sensitivity_group_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"sensitivity_groups"},{"var":"sensitivity_group_id"},{"lit":"levels"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"sensitivity_level_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"sensitivity_group_id","or":"sensitivity_group_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","q":{"exist":["account_id","id","sensitivity_group_id"]},"r":{"param":{"sensitivity_level_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"sensitivity_groups"},{"var":"sensitivity_group_id"},{"lit":"levels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"sensitivity_level_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"sensitivity_group_id","or":"sensitivity_group_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","q":{"exist":["account_id","id","sensitivity_group_id"]},"r":{"param":{"sensitivity_level_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"sensitivity_groups"},{"var":"sensitivity_group_id"},{"lit":"levels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"sensitivity_level_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"sensitivity_group_id","or":"sensitivity_group_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}","q":{"exist":["account_id","id","sensitivity_group_id"]},"r":{"param":{"sensitivity_level_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"sensitivity_groups"},{"var":"sensitivity_group_id"},{"lit":"levels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dlp_sensitivity_level","name__orig":"dlp_sensitivity_level","Name":"DlpSensitivityLevel","name_":"dlp_sensitivity_level","name-":"dlp-sensitivity-level","NAME":"DLP_SENSITIVITY_LEVEL","index$":14}, {"active":true,"entity":"dlp_sensitivity_level","key$":"BasicDlpSensitivityLevelFlow","kind":"basic","name":"BasicDlpSensitivityLevelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dlp_sensitivity_level_ref01"},"m":{"account_id":"account01","sensitivity_group_id":"sensitivity_group01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","sensitivity_group_id":"sensitivity_group01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dlp_sensitivity_level_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01","sensitivity_group_id":"sensitivity_group01"},"i":{"ref":"dlp_sensitivity_level_ref01","srcdatavar":"dlp_sensitivity_level_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dlp_sensitivity_level_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"dlp_sensitivity_level_ref01","srcdatavar":"dlp_sensitivity_level_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dlp_sensitivity_level01","sensitivity_group_id":"sensitivity_group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dlp_sensitivity_level_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"dlp_sensitivity_level_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"dlp_sensitivity_level01","sensitivity_group_id":"sensitivity_group01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01","sensitivity_group_id":"sensitivity_group01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"dlp_sensitivity_level_ref01"}}],"index$":5}]}, 'DlpSensitivityLevel', {"POST /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels":{"protocol":"http","requestBody":{"description":"Attributes of the new sensitivity level.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","nullable":true,"key$":"description"},"name":{"type":"string","key$":"name"}},"required":["name"],"x-ref":"#/components/schemas/dlp_NewSensitivityLevel","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"sensitivity_group_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"sensitivity_group_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"sensitivity_group_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1},{"name":"sensitivity_level_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":2}]},"DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"sensitivity_group_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1},{"name":"sensitivity_level_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":2}]},"PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}":{"protocol":"http","requestBody":{"description":"Attributes of the sensitivity level to update.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","nullable":true,"key$":"description"},"name":{"type":"string","nullable":true,"key$":"name"}},"x-ref":"#/components/schemas/dlp_SensitivityLevelUpdate","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"sensitivity_group_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1},{"name":"sensitivity_level_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dlp_sensitivity_level_ref01_ent = client.DlpSensitivityLevel()
    let dlp_sensitivity_level_ref01_data = setup.data.new.dlp_sensitivity_level['dlp_sensitivity_level_ref01']
    dlp_sensitivity_level_ref01_data['account_id'] = setup.idmap['account01']
    dlp_sensitivity_level_ref01_data['sensitivity_group_id'] = setup.idmap['sensitivity_group01']

    dlp_sensitivity_level_ref01_data = (await dlp_sensitivity_level_ref01_ent.create(dlp_sensitivity_level_ref01_data)).data()
    assert(null != dlp_sensitivity_level_ref01_data.id)


    // LIST
    const dlp_sensitivity_level_ref01_match: any = {}
    dlp_sensitivity_level_ref01_match['account_id'] = setup.idmap['account01']
    dlp_sensitivity_level_ref01_match['sensitivity_group_id'] = setup.idmap['sensitivity_group01']

    const dlp_sensitivity_level_ref01_list = (await dlp_sensitivity_level_ref01_ent.list(dlp_sensitivity_level_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(dlp_sensitivity_level_ref01_list, { id: dlp_sensitivity_level_ref01_data.id })))


    // UPDATE
    const dlp_sensitivity_level_ref01_data_up0: any = {}
    dlp_sensitivity_level_ref01_data_up0.id = dlp_sensitivity_level_ref01_data.id
    dlp_sensitivity_level_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    dlp_sensitivity_level_ref01_data_up0 ['sensitivity_group_id'] = setup.idmap['sensitivity_group_id']

    const dlp_sensitivity_level_ref01_markdef_up0 = { name: 'description', value: 'Mark01-dlp_sensitivity_level_ref01_' + setup.now }
    ;(dlp_sensitivity_level_ref01_data_up0 as any)[dlp_sensitivity_level_ref01_markdef_up0.name] = dlp_sensitivity_level_ref01_markdef_up0.value

    const dlp_sensitivity_level_ref01_resdata_up0 = (await dlp_sensitivity_level_ref01_ent.update(dlp_sensitivity_level_ref01_data_up0)).data()
    assert(dlp_sensitivity_level_ref01_resdata_up0.id === dlp_sensitivity_level_ref01_data_up0.id)

    assert((dlp_sensitivity_level_ref01_resdata_up0 as any)[dlp_sensitivity_level_ref01_markdef_up0.name] === dlp_sensitivity_level_ref01_markdef_up0.value)


    // LOAD
    const dlp_sensitivity_level_ref01_match_dt0: any = {}
    dlp_sensitivity_level_ref01_match_dt0.id = dlp_sensitivity_level_ref01_data.id
    const dlp_sensitivity_level_ref01_data_dt0 = (await dlp_sensitivity_level_ref01_ent.load(dlp_sensitivity_level_ref01_match_dt0)).data()
    assert(dlp_sensitivity_level_ref01_data_dt0.id === dlp_sensitivity_level_ref01_data.id)


    // REMOVE
    const dlp_sensitivity_level_ref01_match_rm0: any = { id: dlp_sensitivity_level_ref01_data.id }
    await dlp_sensitivity_level_ref01_ent.remove(dlp_sensitivity_level_ref01_match_rm0)
  

    // LIST
    const dlp_sensitivity_level_ref01_match_rt0: any = {}
    dlp_sensitivity_level_ref01_match_rt0['account_id'] = setup.idmap['account01']
    dlp_sensitivity_level_ref01_match_rt0['sensitivity_group_id'] = setup.idmap['sensitivity_group01']

    const dlp_sensitivity_level_ref01_list_rt0 = (await dlp_sensitivity_level_ref01_ent.list(dlp_sensitivity_level_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(dlp_sensitivity_level_ref01_list_rt0, { id: dlp_sensitivity_level_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dlp_sensitivity_level/DlpSensitivityLevelTestData.json')

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
    ['dlp_sensitivity_level01','dlp_sensitivity_level02','dlp_sensitivity_level03','account01','sensitivity_group01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_SENSITIVITY_LEVEL_ENTID']
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
  
