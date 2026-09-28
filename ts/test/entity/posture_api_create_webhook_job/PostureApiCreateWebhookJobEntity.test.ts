

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


describe('PostureApiCreateWebhookJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiCreateWebhookJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_create_webhook_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"finding_instance_ids":{"a":true,"h":"Finding Instance Ids","n":"finding_instance_ids","r":true,"sh":"Array of finding instance IDs to send to the webhooks.","t":"`$ARRAY`","key$":"finding_instance_ids","index$":0},"webhook_ids":{"a":true,"h":"Webhook Ids","n":"webhook_ids","r":true,"sh":"Array of webhook IDs to trigger jobs for.","t":"`$ARRAY`","key$":"webhook_ids","index$":1}},"name":"posture_api_create_webhook_job","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/webhooks/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/webhooks/jobs","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"webhooks"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"posture_api_create_webhook_job","name__orig":"posture_api_create_webhook_job","Name":"PostureApiCreateWebhookJob","name_":"posture_api_create_webhook_job","name-":"posture-api-create-webhook-job","NAME":"POSTURE_API_CREATE_WEBHOOK_JOB","index$":18}, {"active":true,"entity":"posture_api_create_webhook_job","key$":"BasicPostureApiCreateWebhookJobFlow","kind":"basic","name":"BasicPostureApiCreateWebhookJobFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"posture_api_create_webhook_job_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PostureApiCreateWebhookJob', {"POST /accounts/{account_id}/data-security/posture/webhooks/jobs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body for creating up to 100 webhook jobs. The number of jobs is the product of webhook_ids and finding_instance_ids.","type":"object","properties":{"finding_instance_ids":{"description":"Array of finding instance IDs to send to the webhooks.","type":"array","items":{"format":"uuid","type":"string"},"example":["770e8400-e29b-41d4-a716-446655440002","660e8400-e29b-41d4-a716-446655440001"],"key$":"finding_instance_ids"},"webhook_ids":{"description":"Array of webhook IDs to trigger jobs for.","type":"array","items":{"format":"uuid","type":"string"},"example":["550e8400-e29b-41d4-a716-446655440000","660e8400-e29b-41d4-a716-446655440001"],"minItems":1,"key$":"webhook_ids"}},"required":["webhook_ids","finding_instance_ids"],"x-ref":"#/components/schemas/posture-api_CreateWebhookJobsRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const posture_api_create_webhook_job_ref01_ent = client.PostureApiCreateWebhookJob()
    let posture_api_create_webhook_job_ref01_data = setup.data.new.posture_api_create_webhook_job['posture_api_create_webhook_job_ref01']
    posture_api_create_webhook_job_ref01_data['account_id'] = setup.idmap['account01']

    posture_api_create_webhook_job_ref01_data = (await posture_api_create_webhook_job_ref01_ent.create(posture_api_create_webhook_job_ref01_data)).data()
    assert(null != posture_api_create_webhook_job_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_create_webhook_job/PostureApiCreateWebhookJobTestData.json')

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
    ['posture_api_create_webhook_job01','posture_api_create_webhook_job02','posture_api_create_webhook_job03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_WEBHOOK_JOB_ENTID']
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
  
