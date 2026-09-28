<?php
declare(strict_types=1);

// CloudflareDlp SDK utility: result_headers

class CloudflareDlpResultHeaders
{
    public static function call(CloudflareDlpContext $ctx): ?CloudflareDlpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
