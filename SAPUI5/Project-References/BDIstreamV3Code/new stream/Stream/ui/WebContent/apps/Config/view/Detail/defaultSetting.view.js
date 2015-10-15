sap.ui.jsview("sap.rds.bdi.stream.config.view.Detail.defaultSetting", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.config.view.Detail.defaultSetting";
	},

	createContent : function(oController) {
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oDetailPanel;
		var oDetailTable;
		var oDetailDialog;
		var oDetailPswdDialog;
		var oTitle = stream.config.Detail.name;
    	oController.oBundle = jQuery.sap.resources({
			url : "ui/WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
		/**
		 * Create Detail view
		 * 
		 * @returns oDetailPanel
		 */
		function createDetailView() {
			if (oDetailPanel) {
				return oDetailPanel;
			}
			// Create Detail table
			createDetailTable();
			// Create a panel instance
			oDetailPanel = new sap.ui.commons.Panel({
				showCollapseIcon : false
			});
			// Create Detail dialog
    		createDetailDialog();
    		createDetailPswdDialog();
			// Set the title of the panel
			oDetailPanel.setTitle(new sap.ui.commons.Title({
//				text : oTitle + " " + oController.oBundle.getText("list")
				text: oController.oBundle.getText("Configuration.List")
			}));
			
			// Set content for the panel
			oDetailPanel.addContent(oDetailTable);
			
			// Add Button
    		oDetailPanel.addButton(new sap.ui.commons.Button("oDetailAddBtn", {
    			text : oController.oBundle.getText("Add"),
    			icon: "sap-icon://create",
    			tooltip : oController.oBundle.getText("AddTooltip"),
    			width : "60px",
    			press : function() {
       				// Set dialog title
    				oTitle = stream.config.Detail.name;
    				oDetailDialog.setTitle(oController.oBundle.getText("Add") + " " + oTitle);

    				// Set the field value
    				sap.ui.getCore().byId("DetailNameTextField").setValue("");
    				sap.ui.getCore().byId("DetailValueTextField").setValue("");
    	
    				// Set name field EditAble
   					sap.ui.getCore().byId("DetailNameTextField").setEditable(true);
   					sap.ui.getCore().byId("DetailSaveButton").setVisible(true);
    				sap.ui.getCore().byId("DetailUpdateButton").setVisible(false);

    				// Open dialog
    				oDetailDialog.open();    			
    			}
    		}));

			// Edit Button
    		oDetailPanel.addButton(new sap.ui.commons.Button({
    			text : oController.oBundle.getText("Edit"),
    			icon: "sap-icon://edit",
    			tooltip : oController.oBundle.getText("EditTooltip"),
    			width : "60px",
    			press : function() {
    				var iRowIndex = oDetailTable.getSelectedIndex();
    				if (iRowIndex == -1) {
    					sap.ui.commons.MessageBox.show(oController.oBundle.getText("selectRowMsg"), sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
    					return;
    				}
    				var t = oDetailTable.getContextByIndex(iRowIndex);
    				
    				if (t.getProperty("viewType") !== "P") {
    					// Set dialog title
    					oTitle = stream.config.Detail.name;
    					oDetailDialog.setTitle(oController.oBundle.getText("Edit") + " " + oTitle);

    					// Set the field value
    					sap.ui.getCore().byId("DetailNameTextField").setValue(t.getProperty("name"));
    					sap.ui.getCore().byId("DetailValueTextField").setValue(t.getProperty("value"));
    					sap.ui.getCore().byId("DetailKeyTextField").setValue(t.getProperty("key"));
    					sap.ui.getCore().byId("DetailUnitTextField").setValue(t.getProperty("unit"));

    					// Set name field unEditAble
    					sap.ui.getCore().byId("DetailNameTextField").setEditable(false);

    					sap.ui.getCore().byId("DetailUpdateButton").setVisible(true);
    					sap.ui.getCore().byId("DetailSaveButton").setVisible(false);

    					// Open dialog
    					oDetailDialog.open();
    				} else {
    					// Set dialog title
    					oTitle = stream.config.Detail.name;
    					oDetailPswdDialog.setTitle(oController.oBundle.getText("Edit") + " " + oTitle);

    					// Set the field value
    					sap.ui.getCore().byId("DetailPswdNameTextField").setValue(t.getProperty("name"));
    					sap.ui.getCore().byId("DetailPswdKeyTextField").setValue(t.getProperty("key"));

    					// Set name field unEditAble
    					sap.ui.getCore().byId("DetailPswdNameTextField").setEditable(false);

    					sap.ui.getCore().byId("DetailPswdSaveButton").setVisible(true);

    					// Open dialog
    					oDetailPswdDialog.open();
    				}
    			}
    		}));
    		
    		// Delete Button
    		oDetailPanel.addButton(new sap.ui.commons.Button("oDetailDeleteBtn", {
    			text : oController.oBundle.getText("Delete"),
    			icon: "sap-icon://delete",
    			tooltip : oController.oBundle.getText("DeleteTooltip"),
    			width : "80px",
    			press : function() {
    				
    				var iRowIndex = oDetailTable.getSelectedIndex();
    				if (iRowIndex == -1) {
    					sap.ui.commons.MessageBox.show(oController.oBundle.getText("selectRowMsg"), sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
    					return;
    				}
    				var t = oDetailTable.getContextByIndex(iRowIndex);
    				var data = {
    						"ACTION" : "delete",
                			"KEY" : t.getProperty("key"),
                			"NAME" : t.getProperty("name"),
                			"TYPE" : stream.config.SelectItem	
    				};
    				data = JSON.stringify(data);    				
    				
    				sap.ui.commons.MessageBox.confirm(oController.oBundle.getText("deleteConfirmMsg"), function(bConfirmed) {
    					if(!bConfirmed) {
    						return false;
    					}
    					$.ajax({
    						url : "ui/WebContent/apps/Config/logic/configData.xsjs",
    						type : "POST",
    						data : data,
    						error : function(XMLHttpRequest, textStatus, errorThrown) {
    							sap.ui.commons.MessageBox.show(XMLHttpRequest.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
    						},
    						success : function(responseJson) {
    							if (responseJson.result) {
    								// Refresh table
    								oController.refreshTable();
    							} else {
    								alert(responseJson.message);
    							}
    						}
    					});
    				});    				
    			}
    		}));
			
			return oDetailPanel;
		}

		/**
		 * Create Detail table
		 */
		function createDetailTable() {
			oDetailTable = new sap.ui.table.DataTable("oDetailTable_s");
			oDetailTable.setVisibleRowCount(10);
			oDetailTable.setSelectionMode(sap.ui.table.SelectionMode.Single);
			oDetailTable.setNavigationMode("Paginator");

			// Name Column
			oDetailControl = new sap.ui.commons.TextView().bindProperty("text", "name");
			oDetailTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : oController.oBundle.getText("NameColumn")
				}),
				template : oDetailControl,
				sortProperty : "name",
				filterProperty : "name",
			}));

			// Value Column
			oDetailControl = new sap.ui.commons.TextView().bindProperty("text", "value");
			oDetailTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : oController.oBundle.getText("ValueColumn")
				}),
				template : oDetailControl,
				sortProperty : "value",
				filterProperty : "value"					
			}));
			
			// key Column
    		oDetailControl = new sap.ui.commons.TextView().bindProperty("text", "key");
    		oDetailTable.addColumn(new sap.ui.table.Column({
    			label : new sap.ui.commons.Label({
    				text : "Key"
    			}),
    			template : oDetailControl,
    			sortProperty : "key",
    			filterProperty : "key",
    			visible: false
    		}));

    		// viewType Column
    		oDetailControl = new sap.ui.commons.TextView().bindProperty("text", "viewType");
    		oDetailTable.addColumn(new sap.ui.table.Column({
    			label : new sap.ui.commons.Label({
    				text : "ViewType"
    			}),
    			template : oDetailControl,
    			sortProperty : "viewType",
    			filterProperty : "viewType",
    			visible: false
    		}));
    		
    		// unit Column
    		oDetailControl = new sap.ui.commons.TextView().bindProperty("text", "unit");
    		oDetailTable.addColumn(new sap.ui.table.Column({
    			label : new sap.ui.commons.Label({
    				text : "Unit"
    			}),
    			template : oDetailControl,
    			sortProperty : "unit",
    			filterProperty : "unit",
    			visible: false
    		}));

			oController.refreshTable();

		}
		
		/**
    	 * Create Detail dialog
    	 */
    	function createDetailDialog() {
    		oDetailDialog = new sap.ui.commons.Dialog("createDetailDialog");
    		oDetailDialog.setModal(true);
    		oDetailDialog.setTitle("Name");
    		oDetailDialog.setWidth("530px");
    		oDetailDialog.setHeight("200px");
    		oDetailDialog.setMinWidth("530px");
    		oDetailDialog.setMinHeight("200px");
    		oDetailDialog.setMaxWidth("530px");
    		oDetailDialog.setMaxHeight("200px");

    		var oSaveBtn = new sap.ui.commons.Button("DetailSaveButton", {
    			text: oController.oBundle.getText("Save"),
    			press : function() {
    				AddDetail();
    				oDetailDialog.close();
    			}
    		});
    		
    		var oUpdateBtn = new sap.ui.commons.Button("DetailUpdateButton", {
    			text: oController.oBundle.getText("Save"),
    			press : function() {
    				updateDetail();
    				oDetailDialog.close();
    			}
    		});

    		var oCancelBtn = new sap.ui.commons.Button({
    			text : oController.oBundle.getText("Cancel"),
    			press : function() {
    				oDetailDialog.close();
    			}
    		});
    		oDetailDialog.addButton(oSaveBtn);
    		oDetailDialog.addButton(oUpdateBtn);
    		oDetailDialog.addButton(oCancelBtn);
    		oDetailDialog.setDefaultButton(oCancelBtn);

    		// Detail dialog layout
    		var oDetailLayout = new sap.ui.commons.layout.MatrixLayout();
    		oDetailLayout.setWidths([ "30%", "60%", "15%" ]);

    		// Name
    		var oLabel = new sap.ui.commons.Label("DetailNameLabel");
    		oLabel.setText(oController.oBundle.getText("Name") + ":");
    		var oInput = new sap.ui.commons.TextField("DetailNameTextField");
    		if (oLabel.setLabelFor)
    			oLabel.setLabelFor(oInput.getId());
    		oInput.setWidth("45ex");
    		oDetailLayout.createRow(oLabel, oInput);

    		// Value
    		oLabel = new sap.ui.commons.Label("DetailValueLabel");
    		oLabel.setText(oController.oBundle.getText("Value") + ":");
    		oInput = new sap.ui.commons.TextField("DetailValueTextField");
    		if (oLabel.setLabelFor)
    			oLabel.setLabelFor(oInput.getId());
    		oInput.setWidth("45ex");
    		oUnit = new sap.ui.commons.TextField("DetailUnitTextField");
    		oUnit.setWidth("10ex").setEditable(false);
    		oDetailLayout.createRow(oLabel, oInput, oUnit);

    		oDetailDialog.addContent(oDetailLayout);
    		
    		//TypeView not display
    		oInput = new sap.ui.commons.TextField("DetailKeyTextField");
    		
    		
    		/**
    		 * Add Detail request
    		 */
    		function AddDetail() {
    			var data = {
            			"ACTION" : "add",
            			"NAME" : sap.ui.getCore().byId("DetailNameTextField").getValue().trim(),
            			"VALUE" : sap.ui.getCore().byId("DetailValueTextField").getValue().trim(),
            			"TYPE" : stream.config.SelectItem
            		};
    		
    			data = JSON.stringify(data);
    			
            	$.ajax({
           			url : "ui/WebContent/apps/Config/logic/configData.xsjs",
           			type : "POST",
           			data : data,
           			error : function(XMLHttpRequest, textStatus, errorThrown) {
           				sap.ui.commons.MessageBox.show(XMLHttpRequest.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
           			},
           			success : function(responseJson) {
           				if (responseJson.result) {
           					// Refresh table
           					oController.refreshTable();
           				} else {
           					alert(responseJson.message);
           				}
            		}
            	});
    		}
    		/**
        	 * Update Detail request
        	 */
        	function updateDetail() {
        		var data = {
            			"ACTION" : "update",
            			"KEY" : sap.ui.getCore().byId("DetailKeyTextField").getValue().trim(),
            			"NAME" : sap.ui.getCore().byId("DetailNameTextField").getValue().trim(),
            			"VALUE" : sap.ui.getCore().byId("DetailValueTextField").getValue().trim(),
            			"TYPE" : stream.config.SelectItem
            		};

            	data = JSON.stringify(data);
            	$.ajax({
           			url : "ui/WebContent/apps/Config/logic/configData.xsjs",
           			type : "POST",
           			data : data,
           			error : function(XMLHttpRequest, textStatus, errorThrown) {
           				sap.ui.commons.MessageBox.show(XMLHttpRequest.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
           			},
           			success : function(responseJson) {
           				if (responseJson.result) {
           					// Refresh table
           					oController.refreshTable();
           				} else {
           					alert(responseJson.message);
           				}
            		}
            	});
        	}
    	}
    	/**
    	 * Create DetailPswd dialog
    	 */
    	function createDetailPswdDialog() {
    		oDetailPswdDialog = new sap.ui.commons.Dialog("createDetailPswdDialog");
    		oDetailPswdDialog.setModal(true);
    		oDetailPswdDialog.setWidth("530px");
    		oDetailPswdDialog.setHeight("250px");
    		oDetailPswdDialog.setMinWidth("530px");
    		oDetailPswdDialog.setMinHeight("250px");
    		oDetailPswdDialog.setMaxWidth("530px");
    		oDetailPswdDialog.setMaxHeight("250px");

    		var oSaveBtn = new sap.ui.commons.Button("DetailPswdSaveButton", {
    			text: oController.oBundle.getText("Save"),
    			press : function() {
    				var newDetailPswd = sap.ui.getCore().byId("DetailPswdValueTextField").getValue();
    				var confirmDetailPswd = sap.ui.getCore().byId("DetailPswdConfirmTextField").getValue();
    				if (newDetailPswd === confirmDetailPswd) {
    					updateDetailPswd();
    					sap.ui.getCore().byId("DetailPswdValueTextField").setValue("");
        				sap.ui.getCore().byId("DetailPswdConfirmTextField").setValue("");
    					oDetailPswdDialog.close();
    				} else {
    					alert(oController.oBundle.getText("RequireSamePswdMsg"));
    				}
    			}
    		});

    		var oCancelBtn = new sap.ui.commons.Button({
    			text: oController.oBundle.getText("Cancel"),
    			press : function() {
    				sap.ui.getCore().byId("DetailPswdValueTextField").setValue("");
    				sap.ui.getCore().byId("DetailPswdConfirmTextField").setValue("");
    				oDetailPswdDialog.close();
    			}
    		});
    		oDetailPswdDialog.addButton(oSaveBtn);
    		oDetailPswdDialog.addButton(oCancelBtn);
    		oDetailPswdDialog.setDefaultButton(oCancelBtn);

    		// DetailPswd dialog layout
    		var oDetailPswdLayout = new sap.ui.commons.layout.MatrixLayout();
    		oDetailPswdLayout.setWidths([ "30%", "70%" ]);

    		// Name
    		var oLabel = new sap.ui.commons.Label("DetailPswdNameLabel");
    		oLabel.setText(oController.oBundle.getText("Name") + ":");
    		var oInput = new sap.ui.commons.TextField("DetailPswdNameTextField");
    		if (oLabel.setLabelFor)
    			oLabel.setLabelFor(oInput.getId());
    		oInput.setWidth("45ex");
    		oDetailPswdLayout.createRow(oLabel, oInput);

    		// new Password
    		oLabel = new sap.ui.commons.Label("DetailPswdValueLabel");
    		oLabel.setText(oController.oBundle.getText("NewPassword") + ":");
    		oInput = new sap.m.Input("DetailPswdValueTextField");
    		oInput.setType(sap.m.InputType.Password);
    		if (oLabel.setLabelFor)
    			oLabel.setLabelFor(oInput.getId());
    		oInput.setWidth("45ex");
    		oDetailPswdLayout.createRow(oLabel, oInput);
    		
    		//confirm Password
    		oLabel = new sap.ui.commons.Label("DetailPswdConfirmLabel");
    		oLabel.setText(oController.oBundle.getText("ConfirmPassword") + ":");
    		oInput = new sap.m.Input("DetailPswdConfirmTextField");
    		oInput.setType(sap.m.InputType.Password);
    		if (oLabel.setLabelFor)
    			oLabel.setLabelFor(oInput.getId());
    		oInput.setWidth("45ex");
    		oDetailPswdLayout.createRow(oLabel, oInput);
    		
    		oDetailPswdDialog.addContent(oDetailPswdLayout);
    		
    		oInput = new sap.ui.commons.TextField("DetailPswdKeyTextField");
    		/**
        	 * Update DetailPswd request
        	 */
        	function updateDetailPswd() {
        		var data = {
            			"ACTION" : "update",
            			"KEY" : sap.ui.getCore().byId("DetailPswdKeyTextField").getValue().trim(),
            			"VALUE" : sap.ui.getCore().byId("DetailPswdValueTextField").getValue().trim(),
            			"TYPE" : stream.config.SelectItem
            		};

            	data = JSON.stringify(data);
            	$.ajax({
           			url : "ui/WebContent/apps/Config/logic/configData.xsjs",
           			type : "POST",
           			data : data,
           			error : function(XMLHttpRequest, textStatus, errorThrown) {
           				sap.ui.commons.MessageBox.show(XMLHttpRequest.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
           			},
           			success : function(responseJson) {
           				if (responseJson.result) {
           					// Refresh table
           					oController.refreshTable();
           				} else {
           					alert(responseJson.message);
           				}
            		}
            	});
        	}
    	}

    	
		return createDetailView();
	}
})