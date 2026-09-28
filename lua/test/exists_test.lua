-- CloudflareDlp SDK exists test

local sdk = require("cloudflare-dlp_sdk")

describe("CloudflareDlpSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
