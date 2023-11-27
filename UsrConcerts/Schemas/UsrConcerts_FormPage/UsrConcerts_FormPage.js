define("UsrConcerts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "af3fa03b-546b-46dc-b101-1c84e948b260",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_1dttbhk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_1dttbhk_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_RunPerformanceService",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_i43vehs_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_1dttbhk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_AddPerformances",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_30d5ukv_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutoCreatePerformanceRecords",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ConcertIdParameter"
						}
					},
					"icon": "webhooks-integration-button-icon"
				},
				"parentName": "Button_1dttbhk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_jsi4qtm",
					"labelPosition": "auto",
					"control": "$StringAttribute_jsi4qtm",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrConcertType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ovvbcfw",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ovvbcfw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOwner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0ddpcm7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0ddpcm7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_318c9kp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_318c9kp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrActive",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_w7s0l87",
					"labelPosition": "auto",
					"control": "$LookupAttribute_w7s0l87",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrNotes",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_6f02d1x",
					"labelPosition": "auto",
					"control": "$StringAttribute_6f02d1x"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mtbwdo8",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mtbwdo8_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_596blrf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_mtbwdo8",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tfpandn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_596blrf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_4jcemc9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_4jcemc9_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPerformances",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_tfpandn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ati6fkw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ati6fkw_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_mcf6d5eDS"
						}
					}
				},
				"parentName": "FlexContainer_tfpandn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_xwkg081",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_xwkg081_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_tfpandn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_d07tkt3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_d07tkt3_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_mcf6d5e"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xwkg081",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_hlbplxk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_hlbplxk_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformances"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xwkg081",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_6ziqgm9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_6ziqgm9_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_mcf6d5e"
					]
				},
				"parentName": "FlexContainer_tfpandn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_rszaj39",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_mtbwdo8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mcf6d5e",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_mcf6d5e",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_mcf6d5eDS_Id",
					"columns": [
						{
							"id": "37dc35d5-0aab-02d3-1a49-04bdee4468c3",
							"code": "GridDetail_mcf6d5eDS_UsrNumber",
							"path": "UsrNumber",
							"caption": "#ResourceString(GridDetail_mcf6d5eDS_UsrNumber)#",
							"dataValueType": 4
						},
						{
							"id": "8dafd700-cdad-2cb4-6ba6-31ff563f98f3",
							"code": "GridDetail_mcf6d5eDS_UsrName",
							"caption": "#ResourceString(GridDetail_mcf6d5eDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "9620c89c-86ba-1226-430a-4d77d0fdbbfd",
							"code": "GridDetail_mcf6d5eDS_UsrDuration",
							"path": "UsrDuration",
							"caption": "#ResourceString(GridDetail_mcf6d5eDS_UsrDuration)#",
							"dataValueType": 4,
							"width": 207
						},
						{
							"id": "51113241-5121-dc3e-75c1-7d56186821f2",
							"code": "GridDetail_mcf6d5eDS_UsrPerformanceType",
							"path": "UsrPerformanceType",
							"caption": "#ResourceString(GridDetail_mcf6d5eDS_UsrPerformanceType)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrPerformanceTypeFUI",
							"width": 232
						}
					]
				},
				"parentName": "GridContainer_rszaj39",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"StringAttribute_jsi4qtm": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"LookupAttribute_ovvbcfw": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"LookupAttribute_0ddpcm7": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"LookupAttribute_w7s0l87": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"StringAttribute_6f02d1x": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"GridDetail_mcf6d5e": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_mcf6d5eDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_mcf6d5eDS_UsrNumber": {
									"modelConfig": {
										"path": "GridDetail_mcf6d5eDS.UsrNumber"
									}
								},
								"GridDetail_mcf6d5eDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_mcf6d5eDS.UsrName"
									}
								},
								"GridDetail_mcf6d5eDS_UsrDuration": {
									"modelConfig": {
										"path": "GridDetail_mcf6d5eDS.UsrDuration"
									}
								},
								"GridDetail_mcf6d5eDS_UsrPerformanceType": {
									"modelConfig": {
										"path": "GridDetail_mcf6d5eDS.UsrPerformanceType"
									}
								},
								"GridDetail_mcf6d5eDS_Id": {
									"modelConfig": {
										"path": "GridDetail_mcf6d5eDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_mcf6d5eDS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrConcerts"
						},
						"scope": "page"
					},
					"GridDetail_mcf6d5eDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPerformances",
							"attributes": {
								"UsrNumber": {
									"path": "UsrNumber"
								},
								"UsrName": {
									"path": "UsrName"
								},
								"UsrDuration": {
									"path": "UsrDuration"
								},
								"UsrPerformanceType": {
									"path": "UsrPerformanceType"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "PerformanceService";
					const methodName = "GetTotalDurationByCode";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost:8080/0/rest/PerformanceService/GetTotalDurationByCode";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						entityName: "Con-003"
					};
					const response = await httpClientService.post(endpoint, params);
					
					this.console.log("response total duration = " + response.body.GetTotalDurationByCodeResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			/*{

				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					const sysSettingsService = new sdk.SysSettingsService();


					// read a system setting
					const MaximumDuration = await sysSettingsService.getByCode('UsrMaximumTotalDuration');
					var Regional = await request.$context.LookupAttribute_6svphl4;
					var boolValue = await request.$context.BooleanAttribute_253hf0v;
					
					

					if (Regional.value=='c26718ef-5f23-4bd5-9454-659cd061986d' && boolValue==true){
						const chessGamesModel = await sdk.Model.create("UsrTournament");

						const filters = new sdk.FilterGroup();
						await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrActive", true);
						await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrTournamenType.Name", "Regional");

						const newFilters = Object.assign({}, filters);
						newFilters.items = filters.items;


						const gamesPlans = await chessGamesModel.load({
							attributes: ["UsrActive","UsrTournamenType"],
							parameters: [{
								type: sdk.ModelParameterType.Filter,
								value: newFilters
							}]
						});

						const recordCount = gamesPlans.length;
						if (recordCount >= RegionalGames.value){
							request.$context.executeRequest({
								type: "crt.ShowDialogRequest",
								$context: request.$context,
								dialogConfig: {
									data: {
										message: "You can't add more than "+RegionalGames.value+" Regional games here.",
										actions: [{
											key: "OK",
											config: {
												color: "primary",
												caption: "OK"
											}
										}]
									}
								}
							});
							return false;
						}else{
							next.handle(request);
							return true;
						}

					}else{
						next.handle(request);
						return true;
					}
				}
			}*/
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});