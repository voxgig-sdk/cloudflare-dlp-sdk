

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


describe('PostureApiPaginatedRemediationTypeListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiPaginatedRemediationTypeList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_paginated_remediation_type_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"Array of remediation type objects.","t":"`$ARRAY`","key$":"result","index$":2},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"sh":"Pagination and result information.","t":"`$OBJECT`","key$":"result_info","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"posture_api_paginated_remediation_type_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"finding_type_id","or":"finding_type_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"integration_id","or":"integration_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types","q":{"exist":["account_id","cursor","finding_type_id","integration_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"finding_types"},{"var":"finding_type_id"},{"lit":"remediation_types"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"posture_api_paginated_remediation_type_list","name__orig":"posture_api_paginated_remediation_type_list","Name":"PostureApiPaginatedRemediationTypeList","name_":"posture_api_paginated_remediation_type_list","name-":"posture-api-paginated-remediation-type-list","NAME":"POSTURE_API_PAGINATED_REMEDIATION_TYPE_LIST","index$":29}, {"active":true,"entity":"posture_api_paginated_remediation_type_list","key$":"BasicPostureApiPaginatedRemediationTypeListFlow","kind":"basic","name":"BasicPostureApiPaginatedRemediationTypeListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","finding_type_id":"finding_type01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"posture_api_paginated_remediation_type_list_ref01"}}],"index$":0}]}, 'PostureApiPaginatedRemediationTypeList', {"GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"A UUID string identifying the finding type.","in":"path","name":"finding_type_id","required":true,"schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_FindingTypeIdParam","index$":1},{"description":"Filter by an integration ID","in":"query","name":"integration_id","schema":{"type":"string","format":"uuid"},"x-ref":"#/components/parameters/posture-api_IntegrationId","index$":2},{"name":"cursor","in":"query","description":"A cursor for pagination.","schema":{"type":"string"},"index$":3},{"description":"A page number within the paginated result set.","in":"query","name":"page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_Page","index$":4},{"description":"Number of results to return per page.","in":"query","name":"per_page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_PerPage","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let posture_api_paginated_remediation_type_list_ref01_data = Object.values(setup.data.existing.posture_api_paginated_remediation_type_list)[0] as any

    // LIST
    const posture_api_paginated_remediation_type_list_ref01_ent = client.PostureApiPaginatedRemediationTypeList()
    const posture_api_paginated_remediation_type_list_ref01_match: any = {}
    posture_api_paginated_remediation_type_list_ref01_match['account_id'] = setup.idmap['account01']
    posture_api_paginated_remediation_type_list_ref01_match['finding_type_id'] = setup.idmap['finding_type01']

    const posture_api_paginated_remediation_type_list_ref01_list = (await posture_api_paginated_remediation_type_list_ref01_ent.list(posture_api_paginated_remediation_type_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_paginated_remediation_type_list/PostureApiPaginatedRemediationTypeListTestData.json')

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
    ['posture_api_paginated_remediation_type_list01','posture_api_paginated_remediation_type_list02','posture_api_paginated_remediation_type_list03','account01','finding_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_TYPE_LIST_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_TYPE_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_REMEDIATION_TYPE_LIST_ENTID']
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
  
