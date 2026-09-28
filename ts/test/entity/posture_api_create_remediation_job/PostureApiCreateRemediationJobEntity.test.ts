

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


describe('PostureApiCreateRemediationJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiCreateRemediationJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_create_remediation_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Array of error messages.","t":"`$ARRAY`","key$":"errors","index$":0},"finding_instance_ids":{"a":true,"h":"Finding Instance Ids","n":"finding_instance_ids","r":true,"sh":"UUIDs identifying Finding Instances.","t":"`$ARRAY`","key$":"finding_instance_ids","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Array of informational messages.","t":"`$ARRAY`","key$":"messages","index$":2},"remediation_type_id":{"a":true,"fo":"uuid","h":"Remediation Type Id","n":"remediation_type_id","r":true,"sh":"A UUID identifying this Remediation Type.","t":"`$STRING`","key$":"remediation_type_id","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":10},"key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"posture_api_create_remediation_job","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/remediations/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/remediations/jobs","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"remediations"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"posture_api_create_remediation_job","name__orig":"posture_api_create_remediation_job","Name":"PostureApiCreateRemediationJob","name_":"posture_api_create_remediation_job","name-":"posture-api-create-remediation-job","NAME":"POSTURE_API_CREATE_REMEDIATION_JOB","index$":17}, {"active":true,"entity":"posture_api_create_remediation_job","key$":"BasicPostureApiCreateRemediationJobFlow","kind":"basic","name":"BasicPostureApiCreateRemediationJobFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"posture_api_create_remediation_job_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PostureApiCreateRemediationJob', {"POST /accounts/{account_id}/data-security/posture/remediations/jobs":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Request body for creating remediation jobs.","type":"object","properties":{"finding_instance_ids":{"description":"UUIDs identifying Finding Instances.","type":"array","items":{"format":"uuid","type":"string"},"example":["3f7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d5e","ab7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d7g"],"key$":"finding_instance_ids"},"remediation_type_id":{"description":"A UUID identifying this Remediation Type.","type":"string","format":"uuid","example":"5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a","key$":"remediation_type_id"}},"required":["finding_instance_ids","remediation_type_id"],"x-ref":"#/components/schemas/posture-api_RemediationJobsCreateRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const posture_api_create_remediation_job_ref01_ent = client.PostureApiCreateRemediationJob()
    let posture_api_create_remediation_job_ref01_data = setup.data.new.posture_api_create_remediation_job['posture_api_create_remediation_job_ref01']
    posture_api_create_remediation_job_ref01_data['account_id'] = setup.idmap['account01']

    posture_api_create_remediation_job_ref01_data = (await posture_api_create_remediation_job_ref01_ent.create(posture_api_create_remediation_job_ref01_data)).data()
    assert(null != posture_api_create_remediation_job_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_create_remediation_job/PostureApiCreateRemediationJobTestData.json')

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
    ['posture_api_create_remediation_job01','posture_api_create_remediation_job02','posture_api_create_remediation_job03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_CREATE_REMEDIATION_JOB_ENTID']
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
  
