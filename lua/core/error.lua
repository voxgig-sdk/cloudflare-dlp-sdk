-- CloudflareDlp SDK error

local CloudflareDlpError = {}
CloudflareDlpError.__index = CloudflareDlpError


function CloudflareDlpError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareDlpError)
  self.is_sdk_error = true
  self.sdk = "CloudflareDlp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareDlpError:error()
  return self.msg
end


function CloudflareDlpError:__tostring()
  return self.msg
end


return CloudflareDlpError
