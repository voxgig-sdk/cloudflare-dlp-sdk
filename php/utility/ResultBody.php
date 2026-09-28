<?php
declare(strict_types=1);

// CloudflareDlp SDK utility: result_body

class CloudflareDlpResultBody
{
    public static function call(CloudflareDlpContext $ctx): ?CloudflareDlpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
