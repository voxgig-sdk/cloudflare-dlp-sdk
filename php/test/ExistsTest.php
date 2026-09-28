<?php
declare(strict_types=1);

// CloudflareDlp SDK exists test

require_once __DIR__ . '/../cloudflaredlp_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareDlpSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
