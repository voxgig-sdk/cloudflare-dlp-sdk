package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareDlp",
			"slug": "cloudflare-dlp",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dlp_custom_prompt_topic": map[string]any{},
				"dlp_data_class": map[string]any{},
				"dlp_data_tag": map[string]any{},
				"dlp_data_tag_category": map[string]any{},
				"dlp_data_tag_category_template": map[string]any{},
				"dlp_dataset": map[string]any{},
				"dlp_document_fingerprint": map[string]any{},
				"dlp_email": map[string]any{},
				"dlp_entry": map[string]any{},
				"dlp_integration_entry": map[string]any{},
				"dlp_predefined_entry": map[string]any{},
				"dlp_profile": map[string]any{},
				"dlp_sensitivity_group": map[string]any{},
				"dlp_sensitivity_group_template": map[string]any{},
				"dlp_sensitivity_level": map[string]any{},
				"dlp_setting": map[string]any{},
				"policy": map[string]any{},
				"posture_api_create_remediation_job": map[string]any{},
				"posture_api_create_webhook_job": map[string]any{},
				"posture_api_export_job": map[string]any{},
				"posture_api_finding": map[string]any{},
				"posture_api_finding_instance": map[string]any{},
				"posture_api_finding_type": map[string]any{},
				"posture_api_paginated_content_asset_list": map[string]any{},
				"posture_api_paginated_export_job_list": map[string]any{},
				"posture_api_paginated_finding_instance_list": map[string]any{},
				"posture_api_paginated_finding_list": map[string]any{},
				"posture_api_paginated_finding_type_list": map[string]any{},
				"posture_api_paginated_remediation_job_list": map[string]any{},
				"posture_api_paginated_remediation_type_list": map[string]any{},
				"posture_api_webhook": map[string]any{},
				"posture_api_webhook_list": map[string]any{},
				"webhook": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dlp_custom_prompt_topic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "profile_id",
						"title": "Profile Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_custom_prompt_topic",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/custom_prompt_topics",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "custom_prompt_topics",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"custom_prompt_topics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/custom_prompt_topics",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "custom_prompt_topics",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"custom_prompt_topics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "custom_prompt_topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"custom_prompt_topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "custom_prompt_topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"custom_prompt_topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "custom_prompt_topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"custom_prompt_topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_data_class": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data_tags",
						"title": "Data Tags",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expression",
						"title": "Expression",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "sensitivity_levels",
						"title": "Sensitivity Levels",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_data_class",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/data_classes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_classes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_classes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_classes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_classes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_classes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_classes/{data_class_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_classes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_classes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"data_class_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "data_class_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/data_classes/{data_class_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_classes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_classes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"data_class_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "data_class_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/data_classes/{data_class_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_classes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_classes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"data_class_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "data_class_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_data_tag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_data_tag",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "data_tag_category_id",
									},
									map[string]any{
										"lit": "data_tags",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{data_tag_category_id}",
									"data_tags",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "data_tag_category_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "data_tag_category_id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"data_tag_category_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "data_tag_category_id",
									},
									map[string]any{
										"lit": "data_tags",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{data_tag_category_id}",
									"data_tags",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "data_tag_category_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "data_tag_category_id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"data_tag_category_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "data_tag_category_id",
									},
									map[string]any{
										"lit": "data_tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{data_tag_category_id}",
									"data_tags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "data_tag_category_id",
										"tag_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "data_tag_category_id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "tag_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"data_tag_category_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "data_tag_category_id",
									},
									map[string]any{
										"lit": "data_tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{data_tag_category_id}",
									"data_tags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "data_tag_category_id",
										"tag_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "data_tag_category_id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "tag_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"data_tag_category_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "data_tag_category_id",
									},
									map[string]any{
										"lit": "data_tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{data_tag_category_id}",
									"data_tags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "data_tag_category_id",
										"tag_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "data_tag_category_id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "tag_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"data_tag_category_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_data_tag_category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags to create with the category.",
					},
					map[string]any{
						"name": "template_id",
						"title": "Template Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_data_tag_category",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/data_tag_categories/{category_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_categories",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "category_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_data_tag_category_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_data_tag_category_template",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_category_templates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_category_templates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_category_templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/data_tag_category_templates/{template_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "data_tag_category_templates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"data_tag_category_templates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"template_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "template_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "case_sensitive",
						"title": "Case Sensitive",
						"type": "`$BOOLEAN`",
						"short": "Only applies to custom word lists.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "The description of the dataset.",
					},
					map[string]any{
						"name": "encoding_version",
						"title": "Encoding Version",
						"type": "`$INTEGER`",
						"short": "Dataset encoding version Non-secret custom word lists with no header are always version 1.",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the dataset, must be unique.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "secret",
						"title": "Secret",
						"type": "`$BOOLEAN`",
						"short": "Generate a secret dataset.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_dataset",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version_id",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{dataset_id}",
									"versions",
									"{version_id}",
									"entries",
									"{entry_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"version": "version_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "version_id",
											"orig": "version",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
										"entry_id",
										"version_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "upload",
									},
									map[string]any{
										"var": "version",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{dataset_id}",
									"upload",
									"{version}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
										"version",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{dataset_id}",
									"versions",
									"{version}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
										"version",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}/upload",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "upload",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{dataset_id}",
									"upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataset_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataset_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataset_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_document_fingerprint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "match_percent",
						"title": "Match Percent",
						"type": "`$INTEGER`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_document_fingerprint",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"document_fingerprint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "document_fingerprint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"document_fingerprint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "document_fingerprint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"document_fingerprint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "document_fingerprint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "document_fingerprints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"document_fingerprints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"document_fingerprint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "document_fingerprint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "auth_requirements",
						"title": "Auth Requirements",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "conditions",
						"title": "Conditions",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Triggered if all conditions match.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "new_priorities",
						"title": "New Priorities",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"name": "dlp_email",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/email/account_mapping",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "account_mapping",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"account_mapping",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/email/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/email/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/email/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/email/account_mapping",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "account_mapping",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"account_mapping",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/dlp/email/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/email/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/email/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"email",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_entry": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "pattern",
						"title": "Pattern",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "profile_id",
						"title": "Profile Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_entry",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/entries",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/entries",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/entries/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/entries/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/entries/custom/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"custom",
									"{entry_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"entry_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/entries/predefined/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"predefined",
									"{entry_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"entry_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/entries/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_integration_entry": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "entry_id",
						"title": "Entry Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "profile_id",
						"title": "Profile Id",
						"type": "`$STRING`",
						"short": "This field is not used as the owning profile.",
						"format": "uuid",
					},
				},
				"name": "dlp_integration_entry",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/entries/integration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "integration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"integration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/entries/integration/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"integration",
									"{entry_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"entry_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/entries/integration/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"integration",
									"{entry_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"entry_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_predefined_entry": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "entry_id",
						"title": "Entry Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "profile_id",
						"title": "Profile Id",
						"type": "`$STRING`",
						"short": "This field is not used as the owning profile.",
						"format": "uuid",
					},
				},
				"name": "dlp_predefined_entry",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/entries/predefined",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "predefined",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"predefined",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/entries/predefined/{entry_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "entries",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "entry_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"entries",
									"predefined",
									"{entry_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "entry_id",
											"orig": "entry_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"entry_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_context_enabled",
						"title": "Ai Context Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allowed_match_count",
						"title": "Allowed Match Count",
						"type": "`$INTEGER`",
						"short": "Related DLP policies will trigger when the match count exceeds the number set.",
						"format": "int32",
					},
					map[string]any{
						"name": "confidence_threshold",
						"title": "Confidence Threshold",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_awareness",
						"title": "Context Awareness",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Scan the context of predefined entries to only return matches surrounded by keywords.",
						"deprecated": true,
					},
					map[string]any{
						"name": "data_classes",
						"title": "Data Classes",
						"type": "`$ARRAY`",
						"short": "Data class IDs to associate with the profile.",
					},
					map[string]any{
						"name": "data_tags",
						"title": "Data Tags",
						"type": "`$ARRAY`",
						"short": "Data tag IDs to associate with the profile.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "The description of the profile.",
					},
					map[string]any{
						"name": "entries",
						"title": "Entries",
						"type": "`$ARRAY`",
						"short": "Custom entries from this profile.",
						"deprecated": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ocr_enabled",
						"title": "Ocr Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sensitivity_levels",
						"title": "Sensitivity Levels",
						"type": "`$ARRAY`",
						"short": "Sensitivity levels to associate with the profile.",
					},
					map[string]any{
						"name": "shared_entries",
						"title": "Shared Entries",
						"type": "`$ARRAY`",
						"short": "Entries from other profiles (e.g.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_profile",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "predefined_id",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{predefined_id}",
									"config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "predefined_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "predefined_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "config",
									"exist": []any{
										"account_id",
										"predefined_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/profiles/custom",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "custom",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"custom",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "all",
											"orig": "all",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"all",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles/custom",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "custom",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"custom",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "predefined_id",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{predefined_id}",
									"config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "predefined_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "predefined_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "config",
									"exist": []any{
										"account_id",
										"predefined_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles/custom/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"custom",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/profiles/custom/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"custom",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "predefined_id",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{predefined_id}",
									"config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "predefined_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "predefined_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "config",
									"exist": []any{
										"account_id",
										"predefined_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/profiles/custom/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"custom",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/profiles/predefined/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"lit": "predefined",
									},
									map[string]any{
										"var": "profile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"profiles",
									"predefined",
									"{profile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_sensitivity_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "levels",
						"title": "Levels",
						"type": "`$ARRAY`",
						"short": "Levels to create with the group.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "template_id",
						"title": "Template Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_sensitivity_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "level_order",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"level_order",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "level_order",
									"exist": []any{
										"account_id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "level_order",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"level_order",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "level_order",
									"exist": []any{
										"account_id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_sensitivity_group_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_sensitivity_group_template",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/templates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"lit": "templates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/templates/{template_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"templates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"template_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "template_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_sensitivity_level": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dlp_sensitivity_level",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "levels",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"levels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "levels",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"levels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "levels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"levels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_level_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_level_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "levels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"levels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_level_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_level_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "sensitivity_groups",
									},
									map[string]any{
										"var": "sensitivity_group_id",
									},
									map[string]any{
										"lit": "levels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"sensitivity_groups",
									"{sensitivity_group_id}",
									"levels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sensitivity_level_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sensitivity_level_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sensitivity_group_id",
											"orig": "sensitivity_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"sensitivity_group_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dlp_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_context_analysis",
						"title": "Ai Context Analysis",
						"type": "`$BOOLEAN`",
						"short": "Whether AI context analysis is enabled at the account level.",
					},
					map[string]any{
						"name": "masking_level",
						"title": "Masking Level",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "max_match_bytes",
						"title": "Max Match Bytes",
						"type": "`$INTEGER`",
						"short": "Maximum number of bytes that the regular expression can match.",
						"format": "int32",
					},
					map[string]any{
						"name": "ocr",
						"title": "Ocr",
						"type": "`$BOOLEAN`",
						"short": "Whether OCR is enabled at the account level.",
					},
					map[string]any{
						"name": "payload_logging",
						"title": "Payload Logging",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "public_key",
						"title": "Public Key",
						"type": "`$STRING`",
						"short": "Base64-encoded public key for encrypting payload logs.",
					},
					map[string]any{
						"name": "regex",
						"title": "Regex",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "DLP account-level settings response.",
					},
				},
				"name": "dlp_setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dlp/patterns/validate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "patterns",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"patterns",
									"validate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/limits",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "limits",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"limits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/payload_log",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "payload_log",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"payload_log",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dlp/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/dlp/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dlp/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/payload_log",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "payload_log",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"payload_log",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dlp/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dlp",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dlp",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actions",
						"title": "Actions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Actions to execute when this policy is triggered, grouped by action type.",
					},
					map[string]any{
						"name": "applies_to_all_integrations",
						"title": "Applies To All Integrations",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "When true, the policy applies to all integrations for the account.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Optional description of what this policy does.",
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name for the policy configuration.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Boolean specifying if the policy is enabled or disabled.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "finding_type_id",
						"title": "Finding Type Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The finding type this policy is associated with.",
						"format": "uuid",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integration_ids",
						"title": "Integration Ids",
						"type": "`$ARRAY`",
						"short": "The integrations this policy applies to.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Response body for a policy configuration.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/policies",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/policies/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
									"logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "policy_name",
											"orig": "policy_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Auto-remediate publicly shared files",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01T00:00:00Z",
										},
										map[string]any{
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-08T00:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"$action": "log",
									"exist": []any{
										"account_id",
										"integration_id",
										"page",
										"per_page",
										"policy_name",
										"since",
										"until",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/policies",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/policies/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/data-security/posture/policies/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/data-security/posture/policies/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_create_remediation_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of error messages.",
					},
					map[string]any{
						"name": "finding_instance_ids",
						"title": "Finding Instance Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "UUIDs identifying Finding Instances.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of informational messages.",
					},
					map[string]any{
						"name": "remediation_type_id",
						"title": "Remediation Type Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A UUID identifying this Remediation Type.",
						"format": "uuid",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_create_remediation_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/remediations/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "remediations",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"remediations",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_create_webhook_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "finding_instance_ids",
						"title": "Finding Instance Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of finding instance IDs to send to the webhooks.",
					},
					map[string]any{
						"name": "webhook_ids",
						"title": "Webhook Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of webhook IDs to trigger jobs for.",
					},
				},
				"name": "posture_api_create_webhook_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_export_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "Filter for archived status.",
					},
					map[string]any{
						"name": "dlp_profile_id",
						"title": "Dlp Profile Id",
						"type": "`$ARRAY`",
						"short": "Filter by DLP profile IDs.",
					},
					map[string]any{
						"name": "dlp_profile_information",
						"title": "Dlp Profile Information",
						"type": "`$ARRAY`",
						"req": true,
						"short": "DLP profile metadata for the export.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ignored",
						"title": "Ignored",
						"type": "`$BOOLEAN`",
						"short": "Filter for only the ignored findings.",
					},
					map[string]any{
						"name": "integration_id",
						"title": "Integration Id",
						"type": "`$ARRAY`",
						"short": "Filter by integration IDs.",
					},
					map[string]any{
						"name": "max_affliction_date",
						"title": "Max Affliction Date",
						"type": "`$STRING`",
						"short": "Filter to view findings that occurred on or before the affliction date.",
						"format": "date-time",
					},
					map[string]any{
						"name": "max_updated_at",
						"title": "Max Updated At",
						"type": "`$STRING`",
						"short": "Filter to view remediation jobs updated on or before this datetime.",
						"format": "date-time",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "min_affliction_date",
						"title": "Min Affliction Date",
						"type": "`$STRING`",
						"short": "Filter to view findings that occurred on or after the affliction date.",
						"format": "date-time",
					},
					map[string]any{
						"name": "min_updated_at",
						"title": "Min Updated At",
						"type": "`$STRING`",
						"short": "Filter to view remediation jobs updated on or after this datetime.",
						"format": "date-time",
					},
					map[string]any{
						"name": "orders",
						"title": "Orders",
						"type": "`$ARRAY`",
						"short": "Ordering specifications for the export.",
					},
					map[string]any{
						"name": "product",
						"title": "Product",
						"type": "`$STRING`",
						"short": "Filter by finding's category product.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Information about an export job.",
					},
					map[string]any{
						"name": "search",
						"title": "Search",
						"type": "`$STRING`",
						"short": "A search term.",
					},
					map[string]any{
						"name": "severities",
						"title": "Severities",
						"type": "`$ARRAY`",
						"short": "Filter by severity levels.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ARRAY`",
						"short": "Filter by remediation job status.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "vendors",
						"title": "Vendors",
						"type": "`$ARRAY`",
						"short": "Filter by vendor types.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_export_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{storage_namespace_id}/instances/export",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"instances",
									"export",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"storage_namespace_id": "finding_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "storage_namespace_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/content/export",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"content",
									"export",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/export",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"export",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/remediations/jobs/export",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "remediations",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"remediations",
									"jobs",
									"export",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/exports/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"exports",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_finding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "checks",
						"title": "Checks",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of finding IDs to pass along.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "new_severity",
						"title": "New Severity",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The numeric severity value to apply to the finding.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Aggregated finding information with counts and metadata.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_finding",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/reset_finding_severity",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "reset_finding_severity",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"reset_finding_severity",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/tune_finding_severity",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "tune_finding_severity",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"tune_finding_severity",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/ignore",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"lit": "ignore",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"ignore",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/unignore",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"lit": "unignore",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"unignore",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"finding_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_finding_instance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "check_instances",
						"title": "Check Instances",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of finding instance IDs to pass along.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A specific instance of a security finding.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_finding_instance",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/archive",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"instances",
									"archive",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/unarchive",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"lit": "unarchive",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"instances",
									"unarchive",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances/{instance_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"instances",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"instance_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "instance_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finding_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_finding_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Basic finding type information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_finding_type",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "finding_types",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"finding_types",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"finding_type_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "finding_type_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_content_asset_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of content asset objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_content_asset_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/content",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"content",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "dlp_profile_id",
											"orig": "dlp_profile_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_affliction_date",
											"orig": "max_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_affliction_date",
											"orig": "min_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "vendor",
											"orig": "vendor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "GOOGLE_WORKSPACE",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"dlp_profile_id",
										"integration_id",
										"max_affliction_date",
										"min_affliction_date",
										"order",
										"page",
										"per_page",
										"search",
										"vendor",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_export_job_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of export job objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_export_job_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/exports",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"exports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Success",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"status",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_finding_instance_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of finding instance objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_finding_instance_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/findings/{finding_id}/instances",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
									map[string]any{
										"var": "finding_id",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
									"{finding_id}",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_id",
											"orig": "finding_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "asset_id",
											"orig": "asset_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"c416bc38-75db-425f-ae25-c37b5df5c37f",
												"qw45mm66-75db-425f-ae25-c37b5df5c37f",
											},
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "finding_instance_id",
											"orig": "finding_instance_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"c416bc38-75db-425f-ae25-c37b5df5c37f",
												"b555bc38-75db-425f-ae25-c37b5df5c37f",
											},
										},
										map[string]any{
											"name": "max_affliction_date",
											"orig": "max_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_affliction_date",
											"orig": "min_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "remediation_status",
											"orig": "remediation_status",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"pending",
												"completed",
												"none",
											},
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"archived",
										"asset_id",
										"cursor",
										"direction",
										"finding_id",
										"finding_instance_id",
										"max_affliction_date",
										"min_affliction_date",
										"order",
										"page",
										"per_page",
										"remediation_status",
										"search",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_finding_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of finding objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_finding_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/findings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "findings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"findings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "finding_type_id",
											"orig": "finding_type_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "1bd08189-9871-43f9-b838-60338d1d2a15,d7446a0d-da76-4f05-9659-803d78b27b7d",
										},
										map[string]any{
											"name": "ignored",
											"orig": "ignored",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_affliction_date",
											"orig": "max_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_affliction_date",
											"orig": "min_affliction_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "observation",
											"orig": "observation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "product",
											"orig": "product",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "severity",
											"orig": "severity",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "vendor",
											"orig": "vendor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "GOOGLE_WORKSPACE",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"direction",
										"finding_type_id",
										"ignored",
										"integration_id",
										"max_affliction_date",
										"min_affliction_date",
										"observation",
										"order",
										"page",
										"per_page",
										"product",
										"search",
										"severity",
										"type",
										"vendor",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_finding_type_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of finding type objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_finding_type_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/finding_types",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "finding_types",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"finding_types",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "vendor",
											"orig": "vendor",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"search",
										"vendor",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_remediation_job_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asset",
						"title": "Asset",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Asset information for a remediation job.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the remediation job was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "finding_id",
						"title": "Finding Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Encoded finding ID.",
					},
					map[string]any{
						"name": "finding_instance_id",
						"title": "Finding Instance Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the finding instance being remediated.",
						"format": "uuid",
					},
					map[string]any{
						"name": "finding_type_id",
						"title": "Finding Type Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the finding type.",
						"format": "uuid",
					},
					map[string]any{
						"name": "finding_type_name",
						"title": "Finding Type Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the finding type.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the remediation job.",
						"format": "uuid",
					},
					map[string]any{
						"name": "integration_name",
						"title": "Integration Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the integration.",
					},
					map[string]any{
						"name": "last_updated",
						"title": "Last Updated",
						"type": "`$STRING`",
						"req": true,
						"short": "When the remediation job was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "remediation_type",
						"title": "Remediation Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of remediation being performed.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Status of a remediation job.",
					},
					map[string]any{
						"name": "triggered_by_actor",
						"title": "Triggered By Actor",
						"type": "`$STRING`",
						"short": "Type of actor that triggered the remediation job.",
					},
					map[string]any{
						"name": "triggered_by_id",
						"title": "Triggered By Id",
						"type": "`$STRING`",
						"short": "ID of the actor that triggered the job.",
					},
					map[string]any{
						"name": "triggered_by_user",
						"title": "Triggered By User",
						"type": "`$STRING`",
						"req": true,
						"short": "Email of the user who triggered the remediation.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_paginated_remediation_job_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/remediations/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "remediations",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"remediations",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_updated_at",
											"orig": "max_updated_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_updated_at",
											"orig": "min_updated_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "pending",
										},
										map[string]any{
											"name": "triggered_by_actor",
											"orig": "triggered_by_actor",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"user",
												"account_token",
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"direction",
										"integration_id",
										"max_updated_at",
										"min_updated_at",
										"order",
										"page",
										"per_page",
										"search",
										"status",
										"triggered_by_actor",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_paginated_remediation_type_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Array of remediation type objects.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination and result information.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_paginated_remediation_type_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "finding_types",
									},
									map[string]any{
										"var": "finding_type_id",
									},
									map[string]any{
										"lit": "remediation_types",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"finding_types",
									"{finding_type_id}",
									"remediation_types",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "finding_type_id",
											"orig": "finding_type_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"finding_type_id",
										"integration_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"posture_api_webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Webhook configuration for sending finding notifications.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "posture_api_webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}/evaluate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "evaluate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"{webhook_id}",
									"evaluate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "webhook_id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "evaluate",
									"exist": []any{
										"account_id",
										"webhook_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.webhook",
						},
					},
				},
			},
			"posture_api_webhook_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "List of webhook configurations.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "posture_api_webhook_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authentication_type",
						"title": "Authentication Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of authentication used for the webhook.",
					},
					map[string]any{
						"name": "destination_url",
						"title": "Destination Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Target URL for the webhook configuration.",
						"format": "uri",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$ARRAY`",
						"short": "List of custom headers to include in webhook requests.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Account-specified display label for the webhook configuration.",
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"short": "Secret key used for HMAC signing when authentication_type is \"HMAC-Signing\".",
						"writeOnly": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Status of the webhook configuration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/evaluate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "evaluate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"evaluate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
									},
								},
								"select": map[string]any{
									"$action": "evaluate",
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/data-security/posture/webhooks/{webhook_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "data-security",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"data-security",
									"posture",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "46148281d8a93d002ef242d8b0d5f9f6",
										},
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
