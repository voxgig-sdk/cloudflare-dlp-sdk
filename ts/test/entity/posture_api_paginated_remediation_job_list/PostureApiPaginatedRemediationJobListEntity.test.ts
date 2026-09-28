

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


describe('PostureApiPaginatedRemediationJobListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiPaginatedRemediationJobList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_paginated_remediation_job_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asset":{"a":true,"h":"Asset","n":"asset","r":true,"sh":"Asset information for a remediation job.","t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":5},"key$":"asset","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the remediation job was created.","t":"`$STRING`","key$":"created_at","index$":1},"finding_id":{"a":true,"h":"Finding Id","n":"finding_id","r":true,"sh":"Encoded finding ID.","t":"`$STRING`","key$":"finding_id","index$":2},"finding_instance_id":{"a":true,"fo":"uuid","h":"Finding Instance Id","n":"finding_instance_id","r":true,"sh":"ID of the finding instance being remediated.","t":"`$STRING`","key$":"finding_instance_id","index$":3},"finding_type_id":{"a":true,"fo":"uuid","h":"Finding Type Id","n":"finding_type_id","r":true,"sh":"ID of the finding type.","t":"`$STRING`","key$":"finding_type_id","index$":4},"finding_type_name":{"a":true,"h":"Finding Type Name","n":"finding_type_name","r":true,"sh":"Name of the finding type.","t":"`$STRING`","key$":"finding_type_name","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for the remediation job.","t":"`$STRING`","key$":"id","index$":6},"integration_name":{"a":true,"h":"Integration Name","n":"integration_name","r":true,"sh":"Name of the integration.","t":"`$STRING`","key$":"integration_name","index$":7},"last_updated":{"a":true,"fo":"date-time","h":"Last Updated","n":"last_updated","r":true,"sh":"When the remediation job was last updated.","t":"`$STRING`","key$":"last_updated","index$":8},"remediation_type":{"a":true,"h":"Remediation Type","n":"remediation_type","r":true,"sh":"Type of remediation being performed.","t":"`$STRING`","key$":"remediation_type","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of a remediation job.","t":"`$STRING`","key$":"status","index$":10},"triggered_by_actor":{"a":true,"h":"Triggered By Actor","n":"triggered_by_actor","r":false,"sh":"Type of actor that triggered the remediation job.","t":"`$STRING`","key$":"triggered_by_actor","index$":11},"triggered_by_id":{"a":true,"h":"Triggered By Id","n":"triggered_by_id","r":false,"sh":"ID of the actor that triggered the job.","t":"`$STRING`","key$":"triggered_by_id","index$":12},"triggered_by_user":{"a":true,"h":"Triggered By User","n":"triggered_by_user","r":true,"sh":"Email of the user who triggered the remediation.","t":"`$STRING`","key$":"triggered_by_user","index$":13}},"id":{"field":"id","name":"id"},"name":"posture_api_paginated_remediation_job_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/remediations/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"integration_id","or":"integration_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"max_updated_at","or":"max_updated_at","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"min_updated_at","or":"min_updated_at","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"pending","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":["user","account_token"],"k":"query","n":"triggered_by_actor","or":"triggered_by_actor","r":false,"t":"`$ARRAY`","index$":10}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/remediations/jobs","q":{"exist":["account_id","cursor","direction","integration_id","max_updated_at","min_updated_at","order","page","per_page","search","status","triggered_by_actor"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"remediations"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"posture_api_paginated_remediation_job_list","name__orig":"posture_api_paginated_remediation_job_list","Name":"PostureApiPaginatedRemediationJobList","name_":"posture_api_paginated_remediation_job_list","name-":"posture-api-paginated-remediation-job-list","NAME":"POSTURE_API_PAGINATED_REMEDIATION_JOB_LIST","index$":28}, {"active":true,"entity":"posture_api_paginated_remediation_job_list","key$":"BasicPostureApiPaginatedRemediationJobListFlow","kind":"basic","name":"BasicPostureApiPaginatedRemediationJobListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"posture_api_paginated_remediation_job_list_ref01"}}],"index$":0}]}, 'PostureApiPaginatedRemediationJobList', {"GET /accounts/{account_id}/data-security/posture/remediations/jobs":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"name":"cursor","in":"query","description":"A cursor for pagination.","schema":{"type":"string"},"index$":1},{"description":"A page number within the paginated result set.","in":"query","name":"page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_Page","index$":2},{"description":"Number of results to return per page.","in":"query","name":"per_page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_PerPage","index$":3},{"description":"A search term.","in":"query","name":"search","schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_Search","index$":4},{"name":"min_updated_at","in":"query","description":"Filter to view remediations updated on or after the min updated datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.","schema":{"type":"string","format":"date-time"},"index$":5},{"name":"max_updated_at","in":"query","description":"Filter to view remediations updated on or before the max updated datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.","schema":{"type":"string","format":"date-time"},"index$":6},{"name":"status","in":"query","description":"Filter to view remediations with the given status.","schema":{"description":"Status of a remediation job.","type":"string","example":"pending","enum":["pending","processing","completed","failed","validating"],"x-ref":"#/components/schemas/posture-api_RemediationJobStatusEnum"},"index$":7},{"name":"triggered_by_actor","in":"query","description":"Filter remediations by what kind of actor triggered them. Supports multiple comma-separated values.","schema":{"type":"array","items":{"description":"Type of actor that triggered the remediation job.","type":"string","example":"user","enum":["user","account_token"],"x-ref":"#/components/schemas/posture-api_RemediationJobActorTypeEnum"}},"example":["user","account_token"],"explode":false,"style":"form","index$":8},{"description":"Filter by an integration ID","in":"query","name":"integration_id","schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_IntegrationId","index$":9},{"name":"order","in":"query","description":"An optional param to sort the results by the given field.","schema":{"type":"string","enum":["created_at","affliction_date","integration_name","status","last_updated_at","asset_name","finding_type_name"]},"index$":10},{"description":"Direction to order results.","in":"query","name":"direction","schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/posture-api_Direction","index$":11}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let posture_api_paginated_remediation_job_list_ref01_data = Object.values(setup.data.existing.posture_api_paginated_remediation_job_list)[0] as any

    // LIST
    const posture_api_paginated_remediation_job_list_ref01_ent = client.PostureApiPaginatedRemediationJobList()
    const posture_api_paginated_remediation_job_list_ref01_match: any = {}
    posture_api_paginated_remediation_job_list_ref01_match['account_id'] = setup.idmap['account01']

    const posture_api_paginated_remediation_job_list_ref01_list = (await posture_api_paginated_remediation_job_list_ref01_ent.list(posture_api_paginated_remediation_job_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_paginated_remediation_job_list/PostureApiPaginatedRemediationJobListTestData.json')

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
    ['posture_api_paginated_remediation_job_list01','posture_api_paginated_remediation_job_list02','posture_api_paginated_remediation_job_list03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_JOB_LIST_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_JOB_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_JOB_LIST_ENTID']
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
  
