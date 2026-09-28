# CloudflareDlp SDK exists test

require "minitest/autorun"
require_relative "../CloudflareDlp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareDlpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
