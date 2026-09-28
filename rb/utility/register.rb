# CloudflareDlp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareDlpUtility.registrar = ->(u) {
  u.clean = CloudflareDlpUtilities::Clean
  u.done = CloudflareDlpUtilities::Done
  u.make_error = CloudflareDlpUtilities::MakeError
  u.feature_add = CloudflareDlpUtilities::FeatureAdd
  u.feature_hook = CloudflareDlpUtilities::FeatureHook
  u.feature_init = CloudflareDlpUtilities::FeatureInit
  u.fetcher = CloudflareDlpUtilities::Fetcher
  u.make_fetch_def = CloudflareDlpUtilities::MakeFetchDef
  u.make_context = CloudflareDlpUtilities::MakeContext
  u.make_options = CloudflareDlpUtilities::MakeOptions
  u.make_request = CloudflareDlpUtilities::MakeRequest
  u.make_response = CloudflareDlpUtilities::MakeResponse
  u.make_result = CloudflareDlpUtilities::MakeResult
  u.make_point = CloudflareDlpUtilities::MakePoint
  u.make_spec = CloudflareDlpUtilities::MakeSpec
  u.make_url = CloudflareDlpUtilities::MakeUrl
  u.param = CloudflareDlpUtilities::Param
  u.prepare_auth = CloudflareDlpUtilities::PrepareAuth
  u.prepare_body = CloudflareDlpUtilities::PrepareBody
  u.prepare_headers = CloudflareDlpUtilities::PrepareHeaders
  u.prepare_method = CloudflareDlpUtilities::PrepareMethod
  u.prepare_params = CloudflareDlpUtilities::PrepareParams
  u.prepare_path = CloudflareDlpUtilities::PreparePath
  u.prepare_query = CloudflareDlpUtilities::PrepareQuery
  u.graphql_body = CloudflareDlpUtilities::GraphqlBody
  u.graphql_errors = CloudflareDlpUtilities::GraphqlErrors
  u.result_basic = CloudflareDlpUtilities::ResultBasic
  u.result_body = CloudflareDlpUtilities::ResultBody
  u.result_headers = CloudflareDlpUtilities::ResultHeaders
  u.transform_request = CloudflareDlpUtilities::TransformRequest
  u.transform_response = CloudflareDlpUtilities::TransformResponse
}
