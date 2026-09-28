

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


describe('PostureApiWebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiWebhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Webhook configuration for sending finding notifications.","t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"posture_api_webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate","q":{"$action":"evaluate","exist":["account_id","webhook_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"evaluate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}","q":{"exist":["account_id","id"]},"r":{"param":{"webhook_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.webhook"]]},"key$":"posture_api_webhook","name__orig":"posture_api_webhook","Name":"PostureApiWebhook","name_":"posture_api_webhook","name-":"posture-api-webhook","NAME":"POSTURE_API_WEBHOOK","index$":30}, {"active":true,"entity":"posture_api_webhook","key$":"BasicPostureApiWebhookFlow","kind":"basic","name":"BasicPostureApiWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"posture_api_webhook_ref01"},"m":{"account_id":"account01","webhook_id":"webhook01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"posture_api_webhook_ref01","srcdatavar":"posture_api_webhook_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"posture_api_webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-posture_api_webhook_ref01"}}],"index$":1}]}, 'PostureApiWebhook', {"POST /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"A UUID identifying the webhook configuration.","in":"path","name":"webhook_id","required":true,"schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_WebhookId","index$":1}]},"GET /accounts/{account_id}/data-security/posture/webhooks/{webhook_id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"A UUID identifying the webhook configuration.","in":"path","name":"webhook_id","required":true,"schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_WebhookId","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const posture_api_webhook_ref01_ent = client.PostureApiWebhook()
    let posture_api_webhook_ref01_data = setup.data.new.posture_api_webhook['posture_api_webhook_ref01']
    posture_api_webhook_ref01_data['account_id'] = setup.idmap['account01']
    posture_api_webhook_ref01_data['webhook_id'] = setup.idmap['webhook01']

    posture_api_webhook_ref01_data = (await posture_api_webhook_ref01_ent.create(posture_api_webhook_ref01_data)).data()
    assert(null != posture_api_webhook_ref01_data.id)


    // LOAD
    const posture_api_webhook_ref01_match_dt0: any = {}
    posture_api_webhook_ref01_match_dt0.id = posture_api_webhook_ref01_data.id
    const posture_api_webhook_ref01_data_dt0 = (await posture_api_webhook_ref01_ent.load(posture_api_webhook_ref01_match_dt0)).data()
    assert(posture_api_webhook_ref01_data_dt0.id === posture_api_webhook_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_webhook/PostureApiWebhookTestData.json')

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
    ['posture_api_webhook01','posture_api_webhook02','posture_api_webhook03','webhook01','webhook02','webhook03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_WEBHOOK_ENTID']
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
  
