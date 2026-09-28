<?php
declare(strict_types=1);

// CloudflareDlp SDK base feature

class CloudflareDlpBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareDlpContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareDlpContext $ctx): void {}
    public function PostConstructEntity(CloudflareDlpContext $ctx): void {}
    public function SetData(CloudflareDlpContext $ctx): void {}
    public function GetData(CloudflareDlpContext $ctx): void {}
    public function GetMatch(CloudflareDlpContext $ctx): void {}
    public function SetMatch(CloudflareDlpContext $ctx): void {}
    public function PrePoint(CloudflareDlpContext $ctx): void {}
    public function PreSpec(CloudflareDlpContext $ctx): void {}
    public function PreRequest(CloudflareDlpContext $ctx): void {}
    public function PreResponse(CloudflareDlpContext $ctx): void {}
    public function PreResult(CloudflareDlpContext $ctx): void {}
    public function PreDone(CloudflareDlpContext $ctx): void {}
    public function PreUnexpected(CloudflareDlpContext $ctx): void {}
}
