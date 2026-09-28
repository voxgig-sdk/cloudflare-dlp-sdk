# CloudflareDlp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareDlpFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareDlpBaseFeature.new
    when "test"
      CloudflareDlpTestFeature.new
    else
      CloudflareDlpBaseFeature.new
    end
  end
end
