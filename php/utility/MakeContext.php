<?php
declare(strict_types=1);

// CloudflareDlp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareDlpMakeContext
{
    public static function call(array $ctxmap, ?CloudflareDlpContext $basectx): CloudflareDlpContext
    {
        return new CloudflareDlpContext($ctxmap, $basectx);
    }
}
