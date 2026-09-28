

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


describe('PostureApiFindingInstanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiFindingInstance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_finding_instance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"check_instances":{"a":true,"h":"Check Instances","n":"check_instances","r":true,"sh":"A list of finding instance IDs to pass along.","t":"`$ARRAY`","key$":"check_instances","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"A specific instance of a security finding.","t":"`$OBJECT`","key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":5}},"id":{"field":"id","name":"id"},"name":"posture_api_finding_instance","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"finding_id","or":"finding_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive","q":{"exist":["account_id","finding_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"var":"finding_id"},{"lit":"instances"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"finding_id","or":"finding_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive","q":{"exist":["account_id","finding_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"var":"finding_id"},{"lit":"instances"},{"lit":"unarchive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"finding_id","or":"finding_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"id","or":"instance_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}","q":{"exist":["account_id","finding_id","id"]},"r":{"param":{"instance_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"var":"finding_id"},{"lit":"instances"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"posture_api_finding_instance","name__orig":"posture_api_finding_instance","Name":"PostureApiFindingInstance","name_":"posture_api_finding_instance","name-":"posture-api-finding-instance","NAME":"POSTURE_API_FINDING_INSTANCE","index$":21}, {"active":true,"entity":"posture_api_finding_instance","key$":"BasicPostureApiFindingInstanceFlow","kind":"basic","name":"BasicPostureApiFindingInstanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"posture_api_finding_instance_ref01"},"m":{"account_id":"account01","finding_id":"finding01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"posture_api_finding_instance_ref01","srcdatavar":"posture_api_finding_instance_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","finding_id":"finding01","id":"posture_api_finding_instance01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-posture_api_finding_instance_ref01"}}],"index$":1}]}, 'PostureApiFindingInstance', {"POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Request body for bulk actions on finding instances.","type":"object","properties":{"check_instances":{"description":"A list of finding instance IDs to pass along.","type":"array","items":{"format":"uuid","type":"string"},"example":["497f6eca-6276-4993-bfeb-53cbbbba6f08"],"key$":"check_instances"}},"required":["check_instances"],"x-ref":"#/components/schemas/posture-api_FindingInstanceBulkActionRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"The `id` of a finding, as returned in each item of the List posture findings response.\nIt is a base64-encoded identifier.","in":"path","name":"finding_id","required":true,"schema":{"type":"string","format":"byte"},"x-ref":"#/components/parameters/posture-api_FindingIdByte","index$":1}]},"POST /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Request body for bulk actions on finding instances.","type":"object","properties":{"check_instances":{"description":"A list of finding instance IDs to pass along.","type":"array","items":{"format":"uuid","type":"string"},"example":["497f6eca-6276-4993-bfeb-53cbbbba6f08"],"key$":"check_instances"}},"required":["check_instances"],"x-ref":"#/components/schemas/posture-api_FindingInstanceBulkActionRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"The `id` of a finding, as returned in each item of the List posture findings response.\nIt is a base64-encoded identifier.","in":"path","name":"finding_id","required":true,"schema":{"type":"string","format":"byte"},"x-ref":"#/components/parameters/posture-api_FindingIdByte","index$":1}]},"GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"The `id` of a finding, as returned in each item of the List posture findings response.\nIt is a base64-encoded identifier.","in":"path","name":"finding_id","required":true,"schema":{"type":"string","format":"byte"},"x-ref":"#/components/parameters/posture-api_FindingIdByte","index$":1},{"description":"A uuid ID identifying this Finding instance.","in":"path","name":"instance_id","required":true,"schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_FindingInstanceId","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const posture_api_finding_instance_ref01_ent = client.PostureApiFindingInstance()
    let posture_api_finding_instance_ref01_data = setup.data.new.posture_api_finding_instance['posture_api_finding_instance_ref01']
    posture_api_finding_instance_ref01_data['account_id'] = setup.idmap['account01']
    posture_api_finding_instance_ref01_data['finding_id'] = setup.idmap['finding01']

    posture_api_finding_instance_ref01_data = (await posture_api_finding_instance_ref01_ent.create(posture_api_finding_instance_ref01_data)).data()
    assert(null != posture_api_finding_instance_ref01_data.id)


    // LOAD
    const posture_api_finding_instance_ref01_match_dt0: any = {}
    posture_api_finding_instance_ref01_match_dt0.id = posture_api_finding_instance_ref01_data.id
    const posture_api_finding_instance_ref01_data_dt0 = (await posture_api_finding_instance_ref01_ent.load(posture_api_finding_instance_ref01_match_dt0)).data()
    assert(posture_api_finding_instance_ref01_data_dt0.id === posture_api_finding_instance_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_finding_instance/PostureApiFindingInstanceTestData.json')

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
    ['posture_api_finding_instance01','posture_api_finding_instance02','posture_api_finding_instance03','account01','finding01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_FINDING_INSTANCE_ENTID']
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
  
