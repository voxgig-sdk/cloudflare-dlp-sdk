<?php
declare(strict_types=1);

// CloudflareDlp SDK configuration

class CloudflareDlpConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CloudflareDlp",
                "slug" => "cloudflare-dlp",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.cloudflare.com/client/v4",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-Auth-Email",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "dlp_custom_prompt_topic" => [],
                    "dlp_data_class" => [],
                    "dlp_data_tag" => [],
                    "dlp_data_tag_category" => [],
                    "dlp_data_tag_category_template" => [],
                    "dlp_dataset" => [],
                    "dlp_document_fingerprint" => [],
                    "dlp_email" => [],
                    "dlp_entry" => [],
                    "dlp_integration_entry" => [],
                    "dlp_predefined_entry" => [],
                    "dlp_profile" => [],
                    "dlp_sensitivity_group" => [],
                    "dlp_sensitivity_group_template" => [],
                    "dlp_sensitivity_level" => [],
                    "dlp_setting" => [],
                    "policy" => [],
                    "posture_api_create_remediation_job" => [],
                    "posture_api_create_webhook_job" => [],
                    "posture_api_export_job" => [],
                    "posture_api_finding" => [],
                    "posture_api_finding_instance" => [],
                    "posture_api_finding_type" => [],
                    "posture_api_paginated_content_asset_list" => [],
                    "posture_api_paginated_export_job_list" => [],
                    "posture_api_paginated_finding_instance_list" => [],
                    "posture_api_paginated_finding_list" => [],
                    "posture_api_paginated_finding_type_list" => [],
                    "posture_api_paginated_remediation_job_list" => [],
                    "posture_api_paginated_remediation_type_list" => [],
                    "posture_api_webhook" => [],
                    "posture_api_webhook_list" => [],
                    "webhook" => [],
                ],
            ],
            "entity" => [
        'dlp_custom_prompt_topic' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'profile_id',
              'title' => 'Profile Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'topic',
              'title' => 'Topic',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_custom_prompt_topic',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/custom_prompt_topics',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'custom_prompt_topics',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'custom_prompt_topics',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/custom_prompt_topics',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'custom_prompt_topics',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'custom_prompt_topics',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'custom_prompt_topics',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'custom_prompt_topics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'custom_prompt_topics',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'custom_prompt_topics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'custom_prompt_topics',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'custom_prompt_topics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_data_class' => [
          'fields' => [
            [
              'name' => 'data_tags',
              'title' => 'Data Tags',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'expression',
              'title' => 'Expression',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'sensitivity_levels',
              'title' => 'Sensitivity Levels',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_data_class',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/data_classes',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_classes',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_classes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_classes',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_classes',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_classes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_classes/{data_class_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_classes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_classes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'data_class_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'data_class_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/data_classes/{data_class_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_classes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_classes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'data_class_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'data_class_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/data_classes/{data_class_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_classes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_classes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'data_class_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'data_class_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_data_tag' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_data_tag',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'data_tag_category_id',
                    ],
                    [
                      'lit' => 'data_tags',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{data_tag_category_id}',
                    'data_tags',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'data_tag_category_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'data_tag_category_id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'data_tag_category_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'data_tag_category_id',
                    ],
                    [
                      'lit' => 'data_tags',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{data_tag_category_id}',
                    'data_tags',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'data_tag_category_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'data_tag_category_id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'data_tag_category_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'data_tag_category_id',
                    ],
                    [
                      'lit' => 'data_tags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{data_tag_category_id}',
                    'data_tags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'data_tag_category_id',
                      'tag_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'data_tag_category_id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'tag_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'data_tag_category_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'data_tag_category_id',
                    ],
                    [
                      'lit' => 'data_tags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{data_tag_category_id}',
                    'data_tags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'data_tag_category_id',
                      'tag_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'data_tag_category_id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'tag_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'data_tag_category_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'data_tag_category_id',
                    ],
                    [
                      'lit' => 'data_tags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{data_tag_category_id}',
                    'data_tags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'data_tag_category_id',
                      'tag_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'data_tag_category_id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'tag_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'data_tag_category_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_data_tag_category' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Tags to create with the category.',
            ],
            [
              'name' => 'template_id',
              'title' => 'Template Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_data_tag_category',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_categories/{category_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_categories',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'category_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_data_tag_category_template' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_data_tag_category_template',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_category_templates',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_category_templates',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_category_templates',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/data_tag_category_templates/{template_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'data_tag_category_templates',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'data_tag_category_templates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'template_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'template_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_dataset' => [
          'fields' => [
            [
              'name' => 'case_sensitive',
              'title' => 'Case Sensitive',
              'type' => '`$BOOLEAN`',
              'short' => 'Only applies to custom word lists.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'The description of the dataset.',
            ],
            [
              'name' => 'encoding_version',
              'title' => 'Encoding Version',
              'type' => '`$INTEGER`',
              'short' => 'Dataset encoding version Non-secret custom word lists with no header are always version 1.',
              'format' => 'int32',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name of the dataset, must be unique.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'secret',
              'title' => 'Secret',
              'type' => '`$BOOLEAN`',
              'short' => 'Generate a secret dataset.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_dataset',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'versions',
                    ],
                    [
                      'var' => 'version_id',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{dataset_id}',
                    'versions',
                    '{version_id}',
                    'entries',
                    '{entry_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'version' => 'version_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'version_id',
                        'orig' => 'version',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                      'entry_id',
                      'version_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'upload',
                    ],
                    [
                      'var' => 'version',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{dataset_id}',
                    'upload',
                    '{version}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'version',
                        'orig' => 'version',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                      'version',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'versions',
                    ],
                    [
                      'var' => 'version',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{dataset_id}',
                    'versions',
                    '{version}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'version',
                        'orig' => 'version',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                      'version',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}/upload',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'upload',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{dataset_id}',
                    'upload',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/datasets',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/datasets',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dataset_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dataset_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'datasets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dataset_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_document_fingerprint' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'match_percent',
              'title' => 'Match Percent',
              'type' => '`$INTEGER`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$INTEGER`',
                ],
              ],
              'format' => 'int32',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_document_fingerprint',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'document_fingerprint_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'document_fingerprint_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'document_fingerprint_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'document_fingerprint_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'document_fingerprint_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'document_fingerprint_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'document_fingerprints',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'document_fingerprints',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'document_fingerprint_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'document_fingerprint_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_email' => [
          'fields' => [
            [
              'name' => 'action',
              'title' => 'Action',
              'type' => '`$ANY`',
              'req' => true,
            ],
            [
              'name' => 'auth_requirements',
              'title' => 'Auth Requirements',
              'type' => '`$ANY`',
              'req' => true,
            ],
            [
              'name' => 'conditions',
              'title' => 'Conditions',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Triggered if all conditions match.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'new_priorities',
              'title' => 'New Priorities',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'name' => 'dlp_email',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/email/account_mapping',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'account_mapping',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'account_mapping',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/email/rules',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/email/rules',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/email/rules/{rule_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                    [
                      'var' => 'rule_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                    '{rule_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'rule_id',
                        'orig' => 'rule_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'rule_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/email/account_mapping',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'account_mapping',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'account_mapping',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'patch' => [
              'input' => 'data',
              'name' => 'patch',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/accounts/{account_id}/dlp/email/rules',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/email/rules/{rule_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                    [
                      'var' => 'rule_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                    '{rule_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'rule_id',
                        'orig' => 'rule_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'rule_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/email/rules/{rule_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'rules',
                    ],
                    [
                      'var' => 'rule_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'email',
                    'rules',
                    '{rule_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'rule_id',
                        'orig' => 'rule_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'rule_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_entry' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'pattern',
              'title' => 'Pattern',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'profile_id',
              'title' => 'Profile Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_entry',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/entries',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/entries',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/entries/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/entries/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/entries/custom/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'custom',
                    '{entry_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'entry_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/entries/predefined/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'predefined',
                    '{entry_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'entry_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/entries/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_integration_entry' => [
          'fields' => [
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'entry_id',
              'title' => 'Entry Id',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'uuid',
            ],
            [
              'name' => 'profile_id',
              'title' => 'Profile Id',
              'type' => '`$STRING`',
              'short' => 'This field is not used as the owning profile.',
              'format' => 'uuid',
            ],
          ],
          'name' => 'dlp_integration_entry',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/entries/integration',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'integration',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'integration',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/entries/integration/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'integration',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'integration',
                    '{entry_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'entry_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/entries/integration/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'integration',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'integration',
                    '{entry_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'entry_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_predefined_entry' => [
          'fields' => [
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'entry_id',
              'title' => 'Entry Id',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'uuid',
            ],
            [
              'name' => 'profile_id',
              'title' => 'Profile Id',
              'type' => '`$STRING`',
              'short' => 'This field is not used as the owning profile.',
              'format' => 'uuid',
            ],
          ],
          'name' => 'dlp_predefined_entry',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/entries/predefined',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'predefined',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/entries/predefined/{entry_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'entries',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'entry_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'entries',
                    'predefined',
                    '{entry_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'entry_id',
                        'orig' => 'entry_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'entry_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_profile' => [
          'fields' => [
            [
              'name' => 'ai_context_enabled',
              'title' => 'Ai Context Enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'allowed_match_count',
              'title' => 'Allowed Match Count',
              'type' => '`$INTEGER`',
              'short' => 'Related DLP policies will trigger when the match count exceeds the number set.',
              'format' => 'int32',
            ],
            [
              'name' => 'confidence_threshold',
              'title' => 'Confidence Threshold',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'context_awareness',
              'title' => 'Context Awareness',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Scan the context of predefined entries to only return matches surrounded by keywords.',
              'deprecated' => true,
            ],
            [
              'name' => 'data_classes',
              'title' => 'Data Classes',
              'type' => '`$ARRAY`',
              'short' => 'Data class IDs to associate with the profile.',
            ],
            [
              'name' => 'data_tags',
              'title' => 'Data Tags',
              'type' => '`$ARRAY`',
              'short' => 'Data tag IDs to associate with the profile.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'The description of the profile.',
            ],
            [
              'name' => 'entries',
              'title' => 'Entries',
              'type' => '`$ARRAY`',
              'short' => 'Custom entries from this profile.',
              'deprecated' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'ocr_enabled',
              'title' => 'Ocr Enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'sensitivity_levels',
              'title' => 'Sensitivity Levels',
              'type' => '`$ARRAY`',
              'short' => 'Sensitivity levels to associate with the profile.',
            ],
            [
              'name' => 'shared_entries',
              'title' => 'Shared Entries',
              'type' => '`$ARRAY`',
              'short' => 'Entries from other profiles (e.g.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_profile',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'predefined_id',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{predefined_id}',
                    'config',
                  ],
                  'rename' => [
                    'param' => [
                      'profile_id' => 'predefined_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'predefined_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'config',
                    'exist' => [
                      'account_id',
                      'predefined_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/profiles/custom',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'custom',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'all',
                        'orig' => 'all',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'all',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles/custom',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'custom',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'profile_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'predefined_id',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{predefined_id}',
                    'config',
                  ],
                  'rename' => [
                    'param' => [
                      'profile_id' => 'predefined_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'predefined_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'config',
                    'exist' => [
                      'account_id',
                      'predefined_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'custom',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'custom',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'predefined_id',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{predefined_id}',
                    'config',
                  ],
                  'rename' => [
                    'param' => [
                      'profile_id' => 'predefined_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'predefined_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'config',
                    'exist' => [
                      'account_id',
                      'predefined_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'custom',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'custom',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'profiles',
                    ],
                    [
                      'lit' => 'predefined',
                    ],
                    [
                      'var' => 'profile_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'profiles',
                    'predefined',
                    '{profile_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'profile_id',
                        'orig' => 'profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'profile_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_sensitivity_group' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'levels',
              'title' => 'Levels',
              'type' => '`$ARRAY`',
              'short' => 'Levels to create with the group.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'template_id',
              'title' => 'Template Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_sensitivity_group',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_group_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'level_order',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'level_order',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'level_order',
                    'exist' => [
                      'account_id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_group_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_group_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'level_order',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'level_order',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'level_order',
                    'exist' => [
                      'account_id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_sensitivity_group_template' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_sensitivity_group_template',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/templates',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'lit' => 'templates',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    'templates',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/templates/{template_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'lit' => 'templates',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    'templates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'template_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'template_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_sensitivity_level' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dlp_sensitivity_level',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'levels',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'levels',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'levels',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'levels',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'levels',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'levels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_level_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_level_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'levels',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'levels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_level_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_level_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'sensitivity_groups',
                    ],
                    [
                      'var' => 'sensitivity_group_id',
                    ],
                    [
                      'lit' => 'levels',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'sensitivity_groups',
                    '{sensitivity_group_id}',
                    'levels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'sensitivity_level_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'sensitivity_level_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'sensitivity_group_id',
                        'orig' => 'sensitivity_group_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                      'sensitivity_group_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dlp_setting' => [
          'fields' => [
            [
              'name' => 'ai_context_analysis',
              'title' => 'Ai Context Analysis',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether AI context analysis is enabled at the account level.',
            ],
            [
              'name' => 'masking_level',
              'title' => 'Masking Level',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'max_match_bytes',
              'title' => 'Max Match Bytes',
              'type' => '`$INTEGER`',
              'short' => 'Maximum number of bytes that the regular expression can match.',
              'format' => 'int32',
            ],
            [
              'name' => 'ocr',
              'title' => 'Ocr',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether OCR is enabled at the account level.',
            ],
            [
              'name' => 'payload_logging',
              'title' => 'Payload Logging',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'public_key',
              'title' => 'Public Key',
              'type' => '`$STRING`',
              'short' => 'Base64-encoded public key for encrypting payload logs.',
            ],
            [
              'name' => 'regex',
              'title' => 'Regex',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'DLP account-level settings response.',
            ],
          ],
          'name' => 'dlp_setting',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/dlp/patterns/validate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'patterns',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'patterns',
                    'validate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/limits',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'limits',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'limits',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/payload_log',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'payload_log',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'payload_log',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/dlp/settings',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'patch' => [
              'input' => 'data',
              'name' => 'patch',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/accounts/{account_id}/dlp/settings',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/dlp/settings',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/payload_log',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'payload_log',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'payload_log',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/dlp/settings',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'dlp',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'dlp',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'policy' => [
          'fields' => [
            [
              'name' => 'actions',
              'title' => 'Actions',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Actions to execute when this policy is triggered, grouped by action type.',
            ],
            [
              'name' => 'applies_to_all_integrations',
              'title' => 'Applies To All Integrations',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'When true, the policy applies to all integrations for the account.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Optional description of what this policy does.',
            ],
            [
              'name' => 'display_name',
              'title' => 'Display Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Display name for the policy configuration.',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Boolean specifying if the policy is enabled or disabled.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'finding_type_id',
              'title' => 'Finding Type Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The finding type this policy is associated with.',
              'format' => 'uuid',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'integration_ids',
              'title' => 'Integration Ids',
              'type' => '`$ARRAY`',
              'short' => 'The integrations this policy applies to.',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'Response body for a policy configuration.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'policy',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies/logs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                    'logs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'integration_id',
                        'orig' => 'integration_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'policy_name',
                        'orig' => 'policy_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'Auto-remediate publicly shared files',
                      ],
                      [
                        'name' => 'since',
                        'orig' => 'since',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '2026-04-01T00:00:00Z',
                      ],
                      [
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '2026-04-08T00:00:00Z',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'log',
                    'exist' => [
                      'account_id',
                      'integration_id',
                      'page',
                      'per_page',
                      'policy_name',
                      'since',
                      'until',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'cursor',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies/{policy_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies/{policy_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/data-security/posture/policies/{policy_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'policies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_create_remediation_job' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of error messages.',
            ],
            [
              'name' => 'finding_instance_ids',
              'title' => 'Finding Instance Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'UUIDs identifying Finding Instances.',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of informational messages.',
            ],
            [
              'name' => 'remediation_type_id',
              'title' => 'Remediation Type Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A UUID identifying this Remediation Type.',
              'format' => 'uuid',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_create_remediation_job',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/remediations/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'remediations',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'remediations',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_create_webhook_job' => [
          'fields' => [
            [
              'name' => 'finding_instance_ids',
              'title' => 'Finding Instance Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of finding instance IDs to send to the webhooks.',
            ],
            [
              'name' => 'webhook_ids',
              'title' => 'Webhook Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of webhook IDs to trigger jobs for.',
            ],
          ],
          'name' => 'posture_api_create_webhook_job',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_export_job' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'Filter for archived status.',
            ],
            [
              'name' => 'dlp_profile_id',
              'title' => 'Dlp Profile Id',
              'type' => '`$ARRAY`',
              'short' => 'Filter by DLP profile IDs.',
            ],
            [
              'name' => 'dlp_profile_information',
              'title' => 'Dlp Profile Information',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'DLP profile metadata for the export.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ignored',
              'title' => 'Ignored',
              'type' => '`$BOOLEAN`',
              'short' => 'Filter for only the ignored findings.',
            ],
            [
              'name' => 'integration_id',
              'title' => 'Integration Id',
              'type' => '`$ARRAY`',
              'short' => 'Filter by integration IDs.',
            ],
            [
              'name' => 'max_affliction_date',
              'title' => 'Max Affliction Date',
              'type' => '`$STRING`',
              'short' => 'Filter to view findings that occurred on or before the affliction date.',
              'format' => 'date-time',
            ],
            [
              'name' => 'max_updated_at',
              'title' => 'Max Updated At',
              'type' => '`$STRING`',
              'short' => 'Filter to view remediation jobs updated on or before this datetime.',
              'format' => 'date-time',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'min_affliction_date',
              'title' => 'Min Affliction Date',
              'type' => '`$STRING`',
              'short' => 'Filter to view findings that occurred on or after the affliction date.',
              'format' => 'date-time',
            ],
            [
              'name' => 'min_updated_at',
              'title' => 'Min Updated At',
              'type' => '`$STRING`',
              'short' => 'Filter to view remediation jobs updated on or after this datetime.',
              'format' => 'date-time',
            ],
            [
              'name' => 'orders',
              'title' => 'Orders',
              'type' => '`$ARRAY`',
              'short' => 'Ordering specifications for the export.',
            ],
            [
              'name' => 'product',
              'title' => 'Product',
              'type' => '`$STRING`',
              'short' => 'Filter by finding\'s category product.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Information about an export job.',
            ],
            [
              'name' => 'search',
              'title' => 'Search',
              'type' => '`$STRING`',
              'short' => 'A search term.',
            ],
            [
              'name' => 'severities',
              'title' => 'Severities',
              'type' => '`$ARRAY`',
              'short' => 'Filter by severity levels.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$ARRAY`',
              'short' => 'Filter by remediation job status.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
            [
              'name' => 'vendors',
              'title' => 'Vendors',
              'type' => '`$ARRAY`',
              'short' => 'Filter by vendor types.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_export_job',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'instances',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'instances',
                    'export',
                  ],
                  'rename' => [
                    'param' => [
                      'storage_namespace_id' => 'finding_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'storage_namespace_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/content/export',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'content',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'content',
                    'export',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/export',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    'export',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/remediations/jobs/export',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'remediations',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'remediations',
                    'jobs',
                    'export',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/exports/{id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'exports',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'exports',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_finding' => [
          'fields' => [
            [
              'name' => 'checks',
              'title' => 'Checks',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'A list of finding IDs to pass along.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'new_severity',
              'title' => 'New Severity',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'The numeric severity value to apply to the finding.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Aggregated finding information with counts and metadata.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_finding',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/reset_finding_severity',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'reset_finding_severity',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'reset_finding_severity',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/tune_finding_severity',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'tune_finding_severity',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'tune_finding_severity',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/ignore',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'lit' => 'ignore',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    'ignore',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/unignore',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'lit' => 'unignore',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    'unignore',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'finding_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_finding_instance' => [
          'fields' => [
            [
              'name' => 'check_instances',
              'title' => 'Check Instances',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'A list of finding instance IDs to pass along.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A specific instance of a security finding.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_finding_instance',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'instances',
                    ],
                    [
                      'lit' => 'archive',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'instances',
                    'archive',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'instances',
                    ],
                    [
                      'lit' => 'unarchive',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'instances',
                    'unarchive',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'instances',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'instances',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'instance_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'instance_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'finding_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_finding_type' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Basic finding type information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_finding_type',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'finding_types',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'finding_types',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'finding_type_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'finding_type_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_content_asset_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of content asset objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_content_asset_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/content',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'content',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'content',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'dlp_profile_id',
                        'orig' => 'dlp_profile_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'integration_id',
                        'orig' => 'integration_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_affliction_date',
                        'orig' => 'max_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_affliction_date',
                        'orig' => 'min_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'vendor',
                        'orig' => 'vendor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'GOOGLE_WORKSPACE',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'direction',
                      'dlp_profile_id',
                      'integration_id',
                      'max_affliction_date',
                      'min_affliction_date',
                      'order',
                      'page',
                      'per_page',
                      'search',
                      'vendor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_export_job_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of export job objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_export_job_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/exports',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'exports',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'exports',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'Success',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'page',
                      'per_page',
                      'status',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_finding_instance_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of finding instance objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_finding_instance_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                    [
                      'var' => 'finding_id',
                    ],
                    [
                      'lit' => 'instances',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                    '{finding_id}',
                    'instances',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_id',
                        'orig' => 'finding_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'asset_id',
                        'orig' => 'asset_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => [
                          'c416bc38-75db-425f-ae25-c37b5df5c37f',
                          'qw45mm66-75db-425f-ae25-c37b5df5c37f',
                        ],
                      ],
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'finding_instance_id',
                        'orig' => 'finding_instance_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => [
                          'c416bc38-75db-425f-ae25-c37b5df5c37f',
                          'b555bc38-75db-425f-ae25-c37b5df5c37f',
                        ],
                      ],
                      [
                        'name' => 'max_affliction_date',
                        'orig' => 'max_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_affliction_date',
                        'orig' => 'min_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'remediation_status',
                        'orig' => 'remediation_status',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => [
                          'pending',
                          'completed',
                          'none',
                        ],
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'archived',
                      'asset_id',
                      'cursor',
                      'direction',
                      'finding_id',
                      'finding_instance_id',
                      'max_affliction_date',
                      'min_affliction_date',
                      'order',
                      'page',
                      'per_page',
                      'remediation_status',
                      'search',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_finding_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of finding objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_finding_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/findings',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'findings',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'findings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'finding_type_id',
                        'orig' => 'finding_type_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '1bd08189-9871-43f9-b838-60338d1d2a15,d7446a0d-da76-4f05-9659-803d78b27b7d',
                      ],
                      [
                        'name' => 'ignored',
                        'orig' => 'ignored',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'integration_id',
                        'orig' => 'integration_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_affliction_date',
                        'orig' => 'max_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_affliction_date',
                        'orig' => 'min_affliction_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'observation',
                        'orig' => 'observation',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'product',
                        'orig' => 'product',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'severity',
                        'orig' => 'severity',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'vendor',
                        'orig' => 'vendor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'GOOGLE_WORKSPACE',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'cursor',
                      'direction',
                      'finding_type_id',
                      'ignored',
                      'integration_id',
                      'max_affliction_date',
                      'min_affliction_date',
                      'observation',
                      'order',
                      'page',
                      'per_page',
                      'product',
                      'search',
                      'severity',
                      'type',
                      'vendor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_finding_type_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of finding type objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_finding_type_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/finding_types',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'finding_types',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'finding_types',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'vendor',
                        'orig' => 'vendor',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'page',
                      'per_page',
                      'search',
                      'vendor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_remediation_job_list' => [
          'fields' => [
            [
              'name' => 'asset',
              'title' => 'Asset',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Asset information for a remediation job.',
            ],
            [
              'name' => 'created_at',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the remediation job was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'finding_id',
              'title' => 'Finding Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Encoded finding ID.',
            ],
            [
              'name' => 'finding_instance_id',
              'title' => 'Finding Instance Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'ID of the finding instance being remediated.',
              'format' => 'uuid',
            ],
            [
              'name' => 'finding_type_id',
              'title' => 'Finding Type Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'ID of the finding type.',
              'format' => 'uuid',
            ],
            [
              'name' => 'finding_type_name',
              'title' => 'Finding Type Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Name of the finding type.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Unique identifier for the remediation job.',
              'format' => 'uuid',
            ],
            [
              'name' => 'integration_name',
              'title' => 'Integration Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Name of the integration.',
            ],
            [
              'name' => 'last_updated',
              'title' => 'Last Updated',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the remediation job was last updated.',
              'format' => 'date-time',
            ],
            [
              'name' => 'remediation_type',
              'title' => 'Remediation Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Type of remediation being performed.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Status of a remediation job.',
            ],
            [
              'name' => 'triggered_by_actor',
              'title' => 'Triggered By Actor',
              'type' => '`$STRING`',
              'short' => 'Type of actor that triggered the remediation job.',
            ],
            [
              'name' => 'triggered_by_id',
              'title' => 'Triggered By Id',
              'type' => '`$STRING`',
              'short' => 'ID of the actor that triggered the job.',
            ],
            [
              'name' => 'triggered_by_user',
              'title' => 'Triggered By User',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Email of the user who triggered the remediation.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_paginated_remediation_job_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/remediations/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'remediations',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'remediations',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'integration_id',
                        'orig' => 'integration_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_updated_at',
                        'orig' => 'max_updated_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_updated_at',
                        'orig' => 'min_updated_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'pending',
                      ],
                      [
                        'name' => 'triggered_by_actor',
                        'orig' => 'triggered_by_actor',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => [
                          'user',
                          'account_token',
                        ],
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'cursor',
                      'direction',
                      'integration_id',
                      'max_updated_at',
                      'min_updated_at',
                      'order',
                      'page',
                      'per_page',
                      'search',
                      'status',
                      'triggered_by_actor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_paginated_remediation_type_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'Array of remediation type objects.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Pagination and result information.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_paginated_remediation_type_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'finding_types',
                    ],
                    [
                      'var' => 'finding_type_id',
                    ],
                    [
                      'lit' => 'remediation_types',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'finding_types',
                    '{finding_type_id}',
                    'remediation_types',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'finding_type_id',
                        'orig' => 'finding_type_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'integration_id',
                        'orig' => 'integration_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'cursor',
                      'finding_type_id',
                      'integration_id',
                      'page',
                      'per_page',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'posture_api_webhook' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Webhook configuration for sending finding notifications.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'posture_api_webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'webhook_id',
                    ],
                    [
                      'lit' => 'evaluate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    '{webhook_id}',
                    'evaluate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'webhook_id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'evaluate',
                    'exist' => [
                      'account_id',
                      'webhook_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhook_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.webhook',
              ],
            ],
          ],
        ],
        'posture_api_webhook_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'short' => 'List of webhook configurations.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'posture_api_webhook_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'webhook' => [
          'fields' => [
            [
              'name' => 'authentication_type',
              'title' => 'Authentication Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Type of authentication used for the webhook.',
            ],
            [
              'name' => 'destination_url',
              'title' => 'Destination Url',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Target URL for the webhook configuration.',
              'format' => 'uri',
            ],
            [
              'name' => 'headers',
              'title' => 'Headers',
              'type' => '`$ARRAY`',
              'short' => 'List of custom headers to include in webhook requests.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'label',
              'title' => 'Label',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Account-specified display label for the webhook configuration.',
            ],
            [
              'name' => 'signing_secret',
              'title' => 'Signing Secret',
              'type' => '`$STRING`',
              'short' => 'Secret key used for HMAC signing when authentication_type is "HMAC-Signing".',
              'writeOnly' => true,
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Status of the webhook configuration.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/evaluate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'lit' => 'evaluate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    'evaluate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'evaluate',
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhook_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'data-security',
                    ],
                    [
                      'lit' => 'posture',
                    ],
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'data-security',
                    'posture',
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhook_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '46148281d8a93d002ef242d8b0d5f9f6',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CloudflareDlpFeatures::make_feature($name);
    }
}
