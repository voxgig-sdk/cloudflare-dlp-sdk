

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


describe('PostureApiExportJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DLP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DLP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDlpSDK.test()
    const ent = testsdk.PostureApiExportJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DLP_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'posture_api_export_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Filter for archived status.","t":"`$BOOLEAN`","key$":"archived","index$":0},"dlp_profile_id":{"a":true,"h":"Dlp Profile Id","n":"dlp_profile_id","r":false,"sh":"Filter by DLP profile IDs.","t":"`$ARRAY`","key$":"dlp_profile_id","index$":1},"dlp_profile_information":{"a":true,"h":"Dlp Profile Information","n":"dlp_profile_information","r":true,"sh":"DLP profile metadata for the export.","t":"`$ARRAY`","key$":"dlp_profile_information","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"ignored":{"a":true,"h":"Ignored","n":"ignored","r":false,"sh":"Filter for only the ignored findings.","t":"`$BOOLEAN`","key$":"ignored","index$":5},"integration_id":{"a":true,"h":"Integration Id","n":"integration_id","r":false,"sh":"Filter by integration IDs.","t":"`$ARRAY`","key$":"integration_id","index$":6},"max_affliction_date":{"a":true,"fo":"date-time","h":"Max Affliction Date","n":"max_affliction_date","r":false,"sh":"Filter to view findings that occurred on or before the affliction date.","t":"`$STRING`","key$":"max_affliction_date","index$":7},"max_updated_at":{"a":true,"fo":"date-time","h":"Max Updated At","n":"max_updated_at","r":false,"sh":"Filter to view remediation jobs updated on or before this datetime.","t":"`$STRING`","key$":"max_updated_at","index$":8},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":9},"min_affliction_date":{"a":true,"fo":"date-time","h":"Min Affliction Date","n":"min_affliction_date","r":false,"sh":"Filter to view findings that occurred on or after the affliction date.","t":"`$STRING`","key$":"min_affliction_date","index$":10},"min_updated_at":{"a":true,"fo":"date-time","h":"Min Updated At","n":"min_updated_at","r":false,"sh":"Filter to view remediation jobs updated on or after this datetime.","t":"`$STRING`","key$":"min_updated_at","index$":11},"orders":{"a":true,"h":"Orders","n":"orders","r":false,"sh":"Ordering specifications for the export.","t":"`$ARRAY`","key$":"orders","index$":12},"product":{"a":true,"h":"Product","n":"product","r":false,"sh":"Filter by finding's category product.","t":"`$STRING`","union":{"branches":2,"count":1,"depth":0},"key$":"product","index$":13},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Information about an export job.","t":"`$OBJECT`","key$":"result","index$":14},"search":{"a":true,"h":"Search","n":"search","r":false,"sh":"A search term.","t":"`$STRING`","key$":"search","index$":15},"severities":{"a":true,"h":"Severities","n":"severities","r":false,"sh":"Filter by severity levels.","t":"`$ARRAY`","key$":"severities","index$":16},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Filter by remediation job status.","t":"`$ARRAY`","key$":"status","index$":17},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":18},"vendors":{"a":true,"h":"Vendors","n":"vendors","r":false,"sh":"Filter by vendor types.","t":"`$ARRAY`","key$":"vendors","index$":19}},"id":{"field":"id","name":"id"},"name":"posture_api_export_job","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002","k":"param","n":"finding_id","or":"storage_namespace_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export","q":{"exist":["account_id","finding_id"]},"r":{"param":{"storage_namespace_id":"finding_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"var":"finding_id"},{"lit":"instances"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/content/export","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/content/export","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"content"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/findings/export","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/findings/export","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"findings"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /accounts/{account_id}/data-security/posture/remediations/jobs/export","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/data-security/posture/remediations/jobs/export","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"remediations"},{"lit":"jobs"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/data-security/posture/exports/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"46148281d8a93d002ef242d8b0d5f9f6","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/data-security/posture/exports/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"data-security"},{"lit":"posture"},{"lit":"exports"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"posture_api_export_job","name__orig":"posture_api_export_job","Name":"PostureApiExportJob","name_":"posture_api_export_job","name-":"posture-api-export-job","NAME":"POSTURE_API_EXPORT_JOB","index$":19}, {"active":true,"entity":"posture_api_export_job","key$":"BasicPostureApiExportJobFlow","kind":"basic","name":"BasicPostureApiExportJobFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"posture_api_export_job_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"posture_api_export_job_ref01","srcdatavar":"posture_api_export_job_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"posture_api_export_job01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-posture_api_export_job_ref01"}}],"index$":1}]}, 'PostureApiExportJob', {"POST /accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Filter specification for finding instance exports.","type":"object","properties":{"archived":{"description":"Filter for archived status.","type":"boolean","example":false,"key$":"archived"},"max_affliction_date":{"description":"Filter to view findings that occurred on or before the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2024-01-01T00:00:00Z","key$":"max_affliction_date"},"min_affliction_date":{"description":"Filter to view findings that occurred on or after the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2023-01-01T00:00:00Z","key$":"min_affliction_date"},"orders":{"description":"Ordering specifications for the export.","type":"array","items":{"description":"Order specification for finding instance exports.","type":"object","properties":{"direction":{"description":"Sort direction.","type":"string","example":"asc","enum":[],"x-ref":"#/components/schemas/posture-api_DirectionEnum"},"name":{"description":"Which field to use when ordering the finding instances.","type":"string","example":"asset.name","enum":[]}},"required":["direction","name"],"x-ref":"#/components/schemas/posture-api_FindingInstanceExportOrderFilterRequest"},"default":[],"key$":"orders"},"search":{"description":"A search term.","type":"string","example":"sensitive data","key$":"search"}},"x-ref":"#/components/schemas/posture-api_FindingInstanceExportFilterRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"description":"Identifies the finding whose instances to export, in the form `<integration_id>-<finding_type_id>`.\nTake `integration.id` and `finding.id` from the finding in the List posture findings response\nand join them with a hyphen.","example":"00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002","in":"path","name":"storage_namespace_id","required":true,"schema":{"type":"string","pattern":"^[\\da-f]{8}-([\\da-f]{4}-){3}[\\da-f]{12}-[\\da-f]{8}-([\\da-f]{4}-){3}[\\da-f]{12}$"},"x-fern-parameter-name":"finding-namespace-id","x-ref":"#/components/parameters/posture-api_StorageNamespaceId","index$":1}]},"POST /accounts/{account_id}/data-security/posture/content/export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Request body for creating content exports.","type":"object","properties":{"dlp_profile_id":{"description":"Filter by DLP profile IDs.","type":"array","items":{"format":"uuid","type":"string"},"example":["e91a2360-da51-4fdf-9711-bcdecd462614"],"key$":"dlp_profile_id"},"dlp_profile_information":{"description":"DLP profile metadata for the export.","type":"array","items":{"description":"DLP profile configuration.","type":"object","properties":{"entries":{"description":"Entries contained within this DLP profile.","type":"array","items":{}},"id":{"description":"Unique identifier for the DLP profile.","type":"string","format":"uuid","example":"e91a2360-da51-4fdf-9711-bcdecd462614"},"name":{"description":"Name of the DLP profile.","type":"string","example":"Financial Information"}},"required":["id","name","entries"],"x-ref":"#/components/schemas/posture-api_DLPProfile"},"key$":"dlp_profile_information"},"integration_id":{"description":"Filter by integration IDs.","type":"array","items":{"format":"uuid","type":"string"},"example":["c416bc38-75dc-425f-ae25-c37b5df5c37f"],"key$":"integration_id"},"max_affliction_date":{"description":"Filter to view content flagged on or before this date.","type":"string","format":"date-time","example":"2024-01-01T00:00:00Z","key$":"max_affliction_date"},"min_affliction_date":{"description":"Filter to view content flagged on or after this date.","type":"string","format":"date-time","example":"2023-01-01T00:00:00Z","key$":"min_affliction_date"},"orders":{"description":"Ordering specifications for the export.","type":"array","items":{"type":"object","allOf":[{"description":"Generic ordering specification.","type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/posture-api_Order"},{"properties":{},"required":[],"type":"object"}],"x-ref":"#/components/schemas/posture-api_ContentOrder"},"key$":"orders"},"search":{"description":"Search term to filter content.","type":"string","example":"sensitive","key$":"search"},"vendors":{"description":"Filter by vendor types.","type":"array","items":{"description":"Supported vendor types for integrations.","type":"string","example":"GOOGLE_WORKSPACE","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK","ZOOM"],"x-ref":"#/components/schemas/posture-api_VendorsEnum"},"example":["GOOGLE_WORKSPACE"],"key$":"vendors"}},"required":["dlp_profile_information"],"x-ref":"#/components/schemas/posture-api_ContentExportRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0}]},"POST /accounts/{account_id}/data-security/posture/findings/export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Filter specification for findings export jobs.","type":"object","properties":{"ignored":{"description":"Filter for only the ignored findings. Set to false to only see active items.","type":"boolean","example":true,"key$":"ignored"},"integration_id":{"description":"Filter by multiple integration IDs.","type":"array","items":{"format":"uuid","type":"string"},"example":["55d7337e-1d0a-49fc-9826-925ba40df035"],"key$":"integration_id"},"max_affliction_date":{"description":"Filter to view findings that occurred on or before the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2019-08-24T14:15:22Z","key$":"max_affliction_date"},"min_affliction_date":{"description":"Filter to view findings that occurred on or after the affliction date. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2018-08-24T14:15:22Z","key$":"min_affliction_date"},"orders":{"description":"Which fields to use when ordering the findings.","type":"array","items":{"description":"Order specification for finding exports.","type":"object","properties":{"direction":{"description":"Sort direction.","type":"string","example":"asc","enum":[],"x-ref":"#/components/schemas/posture-api_DirectionEnum"},"name":{"description":"Which field to use when ordering the findings.","type":"string","example":"instance_count","enum":[]}},"required":["direction","name"],"x-ref":"#/components/schemas/posture-api_FindingExportOrderFilterRequest"},"key$":"orders"},"product":{"description":"Filter by finding's category product.","type":"string","example":"SaaS","nullable":true,"oneOf":[{"description":"The product category.","type":"string","example":"SaaS","enum":["SaaS","Cloud"],"x-ref":"#/components/schemas/posture-api_ProductEnum"},{"type":"string","enum":[null],"nullable":true,"x-ref":"#/components/schemas/posture-api_NullEnum"}],"key$":"product"},"search":{"description":"A search term.","type":"string","example":"public access","key$":"search"},"severities":{"description":"Filter by severity levels.","type":"array","items":{"description":"The severity level for export filters.","type":"string","example":"HIGH","enum":["CRITICAL","HIGH","MEDIUM","LOW"],"x-ref":"#/components/schemas/posture-api_SeveritiesEnum"},"example":["CRITICAL"],"key$":"severities"},"vendors":{"description":"Filter by vendor types.","type":"array","items":{"description":"Supported vendor types for integrations.","type":"string","example":"GOOGLE_WORKSPACE","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK","ZOOM"],"x-ref":"#/components/schemas/posture-api_VendorsEnum"},"example":["AWS"],"key$":"vendors"}},"x-ref":"#/components/schemas/posture-api_FindingExportFilterRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0}]},"POST /accounts/{account_id}/data-security/posture/remediations/jobs/export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Filter specification for remediation jobs export.","type":"object","properties":{"integration_id":{"description":"Filter by multiple integration IDs.","type":"array","items":{"format":"uuid","type":"string"},"example":["55d7337e-1d0a-49fc-9826-925ba40df035"],"key$":"integration_id"},"max_updated_at":{"description":"Filter to view remediation jobs updated on or before this datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2025-01-01T00:00:00Z","key$":"max_updated_at"},"min_updated_at":{"description":"Filter to view remediation jobs updated on or after this datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.","type":"string","format":"date-time","example":"2024-01-01T00:00:00Z","key$":"min_updated_at"},"orders":{"description":"Ordering specifications for the export.","type":"array","items":{"description":"Order specification for remediation jobs exports.","type":"object","properties":{"direction":{"description":"Sort direction.","type":"string","example":"asc","enum":[],"x-ref":"#/components/schemas/posture-api_DirectionEnum"},"name":{"description":"Which field to use when ordering the remediation jobs.","type":"string","example":"last_updated_at","enum":[]}},"required":["direction","name"],"x-ref":"#/components/schemas/posture-api_RemediationJobsExportOrderFilterRequest"},"default":[],"key$":"orders"},"search":{"description":"A search term.","type":"string","example":"public access","key$":"search"},"status":{"description":"Filter by remediation job status.","type":"array","items":{"description":"Status of a remediation job.","type":"string","example":"pending","enum":["pending","processing","completed","failed","validating"],"x-ref":"#/components/schemas/posture-api_RemediationJobStatusEnum"},"example":["pending","completed"],"key$":"status"}},"x-ref":"#/components/schemas/posture-api_RemediationJobsExportFilterRequest","index$":1}}}},"parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0}]},"GET /accounts/{account_id}/data-security/posture/exports/{id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID for the user making the request.","example":"46148281d8a93d002ef242d8b0d5f9f6","in":"path","name":"account_id","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/posture-api_AccountTag","index$":0},{"name":"id","in":"path","description":"Unique identifier for the export job","required":true,"schema":{"type":"string","pattern":"^[\\da-f]{8}-([\\da-f]{4}-){3}[\\da-f]{12}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const posture_api_export_job_ref01_ent = client.PostureApiExportJob()
    let posture_api_export_job_ref01_data = setup.data.new.posture_api_export_job['posture_api_export_job_ref01']
    posture_api_export_job_ref01_data['account_id'] = setup.idmap['account01']

    posture_api_export_job_ref01_data = (await posture_api_export_job_ref01_ent.create(posture_api_export_job_ref01_data)).data()
    assert(null != posture_api_export_job_ref01_data.id)


    // LOAD
    const posture_api_export_job_ref01_match_dt0: any = {}
    posture_api_export_job_ref01_match_dt0.id = posture_api_export_job_ref01_data.id
    const posture_api_export_job_ref01_data_dt0 = (await posture_api_export_job_ref01_ent.load(posture_api_export_job_ref01_match_dt0)).data()
    assert(posture_api_export_job_ref01_data_dt0.id === posture_api_export_job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/posture_api_export_job/PostureApiExportJobTestData.json')

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
    ['posture_api_export_job01','posture_api_export_job02','posture_api_export_job03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DLP_TEST_POSTURE_API_EXPORT_JOB_ENTID': idmap,
    'CLOUDFLARE_DLP_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DLP_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DLP_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DLP_TEST_POSTURE_API_EXPORT_JOB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DLP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DLP_TEST_POSTURE_API_EXPORT_JOB_ENTID']
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
  
