# CloudflareDlp SDK utility: make_context
require_relative '../core/context'
module CloudflareDlpUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareDlpContext.new(ctxmap, basectx)
  }
end
