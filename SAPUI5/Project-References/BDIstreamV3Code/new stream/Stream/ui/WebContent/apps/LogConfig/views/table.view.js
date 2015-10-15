sap.ui.jsview("sap.rds.bdi.stream.logConfig.views.table", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.logConfig.views.table";
    },

    createContent : function(oController) {
    	oController.oBundle = jQuery.sap.resources({
			url : "ui/WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
    	
    	//Create an instance of the table control
    	var oTable = new sap.ui.table.Table("oTable",{
    		visibleRowCount: 13,
    		firstVisibleRow: 3,
    		//selectionMode: sap.ui.table.SelectionMode.Single,
    		navigationMode: sap.ui.table.NavigationMode.Paginator,
    		fixedColumnCount: 3
    	});
    	
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "USER NAME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		hAlign : sap.ui.core.HorizontalAlign.Center,
    		template: "userName",
    		width: "80px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "ORIGINAL FILE NAME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "originalFileName",
    		width: "250px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "FILE NAME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "fileName",
    		width: "300px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "FOLDER",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "folder",
    		width: "300px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "LOG FILE FORMAT",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		hAlign : sap.ui.core.HorizontalAlign.End,
    		template: "logFileFormat",
    		width: "150px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "UPLOAD TIME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		hAlign : sap.ui.core.HorizontalAlign.Right,
    		template: "uploadTime",
    		width: "150px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "UPLOAD STATUS",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "uploadStatus",
    		width: "100px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "ESP DEAMON INIT TIME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "espDeamonInitTime",
    		width: "200px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "ESP COMPLETE TIME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "espCompletetime",
    		width: "200px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "ESP PROCESSING TAKEN TIME",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "espProcessingTakenTime",
    		width: "100px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "ESP PROCESSING MSG",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template:  "espProcessingMsg",
    		width: "100px"
    	}));
    	oTable.addColumn(new sap.ui.table.Column({
    		label: new sap.ui.commons.Label({
    			text: "LOG FILE SELECTED",
             	textAlign : sap.ui.core.TextAlign.Center
             }),
    		template: "logFileSelected",
    		width: "100px"
    	}));
    	
    	//set model to table
    	var oModel = new sap.ui.model.json.JSONModel();
    	sap.ui.getCore().setModel(oModel, "alertModel");
    	oTable.setModel(oModel);
  	  	oTable.bindRows("/tableData");

    	return oTable;
    }
});