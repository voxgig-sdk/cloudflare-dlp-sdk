

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


describe('DlpDocumentFingerprintEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.DlpDocumentFingerprint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dlp_document_fingerprint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"match_percent":{"a":true,"fo":"int32","h":"Match Percent","n":"match_percent","op":{"create":{"req":true,"type":"`$INTEGER`"}},"r":false,"t":"`$INTEGER`","key$":"match_percent","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"name","index$":3},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$OBJECT`","key$":"result","index$":4}},"id":{"field":"id","name":"id"},"name":"dlp_document_fingerprint","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"document_fingerprint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","q":{"exist":["account_id","id"]},"r":{"param":{"document_fingerprint_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/dlp/document_fingerprints","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dlp/document_fingerprints","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dlp/document_fingerprints","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dlp/document_fingerprints","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"document_fingerprint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","q":{"exist":["account_id","id"]},"r":{"param":{"document_fingerprint_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"document_fingerprint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","q":{"exist":["account_id","id"]},"r":{"param":{"document_fingerprint_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"document_fingerprint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}","q":{"exist":["account_id","id"]},"r":{"param":{"document_fingerprint_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dlp"},{"lit":"document_fingerprints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dlp_document_fingerprint","name__orig":"dlp_document_fingerprint","Name":"DlpDocumentFingerprint","name_":"dlp_document_fingerprint","name-":"dlp-document-fingerprint","NAME":"DLP_DOCUMENT_FINGERPRINT","index$":6}, {"active":true,"entity":"dlp_document_fingerprint","key$":"BasicDlpDocumentFingerprintFlow","kind":"basic","name":"BasicDlpDocumentFingerprintFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dlp_document_fingerprint_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dlp_document_fingerprint_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"dlp_document_fingerprint_ref01","srcdatavar":"dlp_document_fingerprint_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dlp_document_fingerprint_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"dlp_document_fingerprint_ref01","srcdatavar":"dlp_document_fingerprint_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dlp_document_fingerprint01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dlp_document_fingerprint_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"dlp_document_fingerprint_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"dlp_document_fingerprint01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"dlp_document_fingerprint_ref01"}}],"index$":5}]}, 'DlpDocumentFingerprint', {"POST /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":{"protocol":"http","requestBody":{"description":"Attributes of the document fingerprint to update.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","nullable":true,"key$":"description"},"match_percent":{"type":"integer","format":"int32","nullable":true,"key$":"match_percent"},"name":{"type":"string","nullable":true,"key$":"name"}},"x-ref":"#/components/schemas/dlp_UpdateDocumentFingerprint","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"document_fingerprint_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"POST /accounts/{account_id}/dlp/document_fingerprints":{"protocol":"http","requestBody":{"description":"Attributes of the new document fingerprint.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","default":"","key$":"description"},"match_percent":{"type":"integer","format":"int32","key$":"match_percent"},"name":{"type":"string","key$":"name"}},"required":["name","match_percent"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/dlp/document_fingerprints":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"document_fingerprint_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"DELETE /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"document_fingerprint_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"PUT /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":{"protocol":"http","requestBody":{"description":"File used for document fingerprinting.","required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}},"required":["file"]}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"document_fingerprint_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dlp_document_fingerprint_ref01_ent = client.DlpDocumentFingerprint()
    let dlp_document_fingerprint_ref01_data = setup.data.new.dlp_document_fingerprint['dlp_document_fingerprint_ref01']
    dlp_document_fingerprint_ref01_data['account_id'] = setup.idmap['account01']

    dlp_document_fingerprint_ref01_data = (await dlp_document_fingerprint_ref01_ent.create(dlp_document_fingerprint_ref01_data)).data()
    assert(null != dlp_document_fingerprint_ref01_data.id)


    // LIST
    const dlp_document_fingerprint_ref01_match: any = {}
    dlp_document_fingerprint_ref01_match['account_id'] = setup.idmap['account01']

    const dlp_document_fingerprint_ref01_list = (await dlp_document_fingerprint_ref01_ent.list(dlp_document_fingerprint_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(dlp_document_fingerprint_ref01_list, { id: dlp_document_fingerprint_ref01_data.id })))


    // UPDATE
    const dlp_document_fingerprint_ref01_data_up0: any = {}
    dlp_document_fingerprint_ref01_data_up0.id = dlp_document_fingerprint_ref01_data.id
    dlp_document_fingerprint_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const dlp_document_fingerprint_ref01_markdef_up0 = { name: 'description', value: 'Mark01-dlp_document_fingerprint_ref01_' + setup.now }
    ;(dlp_document_fingerprint_ref01_data_up0 as any)[dlp_document_fingerprint_ref01_markdef_up0.name] = dlp_document_fingerprint_ref01_markdef_up0.value

    const dlp_document_fingerprint_ref01_resdata_up0 = (await dlp_document_fingerprint_ref01_ent.update(dlp_document_fingerprint_ref01_data_up0)).data()
    assert(dlp_document_fingerprint_ref01_resdata_up0.id === dlp_document_fingerprint_ref01_data_up0.id)

    assert((dlp_document_fingerprint_ref01_resdata_up0 as any)[dlp_document_fingerprint_ref01_markdef_up0.name] === dlp_document_fingerprint_ref01_markdef_up0.value)


    // LOAD
    const dlp_document_fingerprint_ref01_match_dt0: any = {}
    dlp_document_fingerprint_ref01_match_dt0.id = dlp_document_fingerprint_ref01_data.id
    const dlp_document_fingerprint_ref01_data_dt0 = (await dlp_document_fingerprint_ref01_ent.load(dlp_document_fingerprint_ref01_match_dt0)).data()
    assert(dlp_document_fingerprint_ref01_data_dt0.id === dlp_document_fingerprint_ref01_data.id)


    // REMOVE
    const dlp_document_fingerprint_ref01_match_rm0: any = { id: dlp_document_fingerprint_ref01_data.id }
    await dlp_document_fingerprint_ref01_ent.remove(dlp_document_fingerprint_ref01_match_rm0)
  

    // LIST
    const dlp_document_fingerprint_ref01_match_rt0: any = {}
    dlp_document_fingerprint_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const dlp_document_fingerprint_ref01_list_rt0 = (await dlp_document_fingerprint_ref01_ent.list(dlp_document_fingerprint_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(dlp_document_fingerprint_ref01_list_rt0, { id: dlp_document_fingerprint_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dlp_document_fingerprint/DlpDocumentFingerprintTestData.json')

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
    ['dlp_document_fingerprint01','dlp_document_fingerprint02','dlp_document_fingerprint03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_DLP_DOCUMENT_FINGERPRINT_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_DLP_DOCUMENT_FINGERPRINT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_DLP_DOCUMENT_FINGERPRINT_ENTID']
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
  
