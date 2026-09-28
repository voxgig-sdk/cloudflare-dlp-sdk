

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


describe('PostureApiPaginatedFindingInstanceListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiPaginatedFindingInstanceList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_paginated_finding_instance_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"Array of finding instance objects.","t":"`$ARRAY`","key$":"result","index$":2},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"sh":"Pagination and result information.","t":"`$OBJECT`","key$":"result_info","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"posture_api_paginated_finding_instance_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"finding_id","or":"finding_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":["c416bc38-75db-425f-ae25-c37b5df5c37f","qw45mm66-75db-425f-ae25-c37b5df5c37f"],"k":"query","n":"asset_id","or":"asset_id","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":["c416bc38-75db-425f-ae25-c37b5df5c37f","b555bc38-75db-425f-ae25-c37b5df5c37f"],"k":"query","n":"finding_instance_id","or":"finding_instance_id","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"max_affliction_date","or":"max_affliction_date","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"min_affliction_date","or":"min_affliction_date","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":9},{"a":true,"ex":["pending","completed","none"],"k":"query","n":"remediation_status","or":"remediation_status","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances","q":{"exist":["account_id","archived","asset_id","cursor","direction","finding_id","finding_instance_id","max_affliction_date","min_affliction_date","order","page","per_page","remediation_status","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"var":"finding_id"},{"lit":"instances"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"posture_api_paginated_finding_instance_list","name__orig":"posture_api_paginated_finding_instance_list","Name":"PostureApiPaginatedFindingInstanceList","name_":"posture_api_paginated_finding_instance_list","name-":"posture-api-paginated-finding-instance-list","NAME":"POSTURE_API_PAGINATED_FINDING_INSTANCE_LIST","index$":25}, {"active":true,"entity":"posture_api_paginated_finding_instance_list","key$":"BasicPostureApiPaginatedFindingInstanceListFlow","kind":"basic","name":"BasicPostureApiPaginatedFindingInstanceListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","finding_id":"finding01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"posture_api_paginated_finding_instance_list_ref01"}}],"index$":0}]}, 'PostureApiPaginatedFindingInstanceList', {"GET /accounts/{account_id}/data-security/posture/findings/{finding_id}/instances":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"Archived","in":"query","name":"archived","schema":{"type":"boolean"},"x-ref":"#/components/parameters/posture-api_Archived","index$":1},{"description":"The `id` of a finding, as returned in each item of the List posture findings response.\nIt is a base64-encoded identifier.","in":"path","name":"finding_id","required":true,"schema":{"type":"string","format":"byte"},"x-ref":"#/components/parameters/posture-api_FindingIdByte","index$":2},{"name":"cursor","in":"query","description":"A cursor for pagination. Obtained from the `result_info.cursor` field of a previous response.","schema":{"type":"string"},"index$":3},{"description":"Direction to order results.","in":"query","name":"direction","schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/posture-api_Direction","index$":4},{"description":"Filter to view findings that occurred on or before the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","in":"query","name":"max_affliction_date","schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/posture-api_MaxAfflictionDate","index$":5},{"description":"Filter to view findings that occurred on or after the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","in":"query","name":"min_affliction_date","schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/posture-api_MinAfflictionDate","index$":6},{"description":"Which field to use when ordering the Finding's instances.\nWhen ordering by 'remediation.status', only the most recent non-stale remediation job is considered. Stale jobs (created before the instance's affliction_date) are treated as having no status for ordering purposes.","in":"query","name":"order","schema":{"type":"string","enum":["affliction_date","asset.name","remediation.status"]},"x-ref":"#/components/parameters/posture-api_FindingInstanceOrder","index$":7},{"description":"A page number within the paginated result set.","in":"query","name":"page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_Page","index$":8},{"description":"Number of results to return per page.","in":"query","name":"per_page","schema":{"type":"integer"},"x-ref":"#/components/parameters/posture-api_PerPage","index$":9},{"description":"A search term.","in":"query","name":"search","schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_Search","index$":10},{"description":"Filter finding instances by most recent remediation job status. Supports multiple comma-separated values.\nUse 'none' to filter instances with no remediation jobs or instances where the most recent job is stale.\nNote: Stale jobs (created before the instance's affliction_date) are ignored for filtering purposes, but are still included in the 'remediations' array with stale=true.","example":["pending","completed","none"],"explode":false,"in":"query","name":"remediation_statuses","schema":{"type":"array","items":{"enum":["none","pending","processing","validating","completed","failed"],"type":"string"}},"style":"form","x-ref":"#/components/parameters/posture-api_RemediationStatuses","index$":11},{"description":"Filter finding instances by an array of finding instance IDs. Supports multiple comma-separated values.","example":["c416bc38-75db-425f-ae25-c37b5df5c37f","b555bc38-75db-425f-ae25-c37b5df5c37f"],"in":"query","name":"finding_instance_ids","schema":{"type":"array","items":{"format":"uuid","type":"string"}},"x-ref":"#/components/parameters/posture-api_FindingInstanceIds","index$":12},{"description":"Filter finding instances by an array of asset IDs. Supports multiple comma-separated values.","example":["c416bc38-75db-425f-ae25-c37b5df5c37f","qw45mm66-75db-425f-ae25-c37b5df5c37f"],"in":"query","name":"asset_ids","schema":{"type":"array","items":{"format":"uuid","type":"string"}},"x-ref":"#/components/parameters/posture-api_AssetIds","index$":13}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let posture_api_paginated_finding_instance_list_ref01_data = Object.values(setup.data.existing.posture_api_paginated_finding_instance_list)[0] as any

    // LIST
    const posture_api_paginated_finding_instance_list_ref01_ent = client.PostureApiPaginatedFindingInstanceList()
    const posture_api_paginated_finding_instance_list_ref01_match: any = {}
    posture_api_paginated_finding_instance_list_ref01_match['account_id'] = setup.idmap['account01']
    posture_api_paginated_finding_instance_list_ref01_match['finding_id'] = setup.idmap['finding01']

    const posture_api_paginated_finding_instance_list_ref01_list = (await posture_api_paginated_finding_instance_list_ref01_ent.list(posture_api_paginated_finding_instance_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_paginated_finding_instance_list/PostureApiPaginatedFindingInstanceListTestData.json')

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
    ['posture_api_paginated_finding_instance_list01','posture_api_paginated_finding_instance_list02','posture_api_paginated_finding_instance_list03','account01','finding01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_FINDING_INSTANCE_LIST_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_FINDING_INSTANCE_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_PAGINATED_FINDING_INSTANCE_LIST_ENTID']
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
  
