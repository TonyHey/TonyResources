sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.detail", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.detail";
	},

	createContent : function(oController) {	
		
		jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
		var afterDateToString = sap.rds.bdi.stream.Homepage.util.dateConvert.firstDayOfLast12Months();
		afterDateToString = oController.convertString(afterDateToString);
          //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: sap.ui.getCore().byId("appView").getController().toHome
        });
		 
		//Page Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
	    oController.oPageTitle = new sap.m.Label({
	        text: oBundle.getText("shell.page.title.time.seires.analysis")
	    }).addStyleClass("detail-page-header-title");
		 
		//hadoop
		 var hadoop = this.hadoop(oController);
		//server ip
		var serverIP =  this.serverIP(oController); 	
		//DateRangeSelection
		oController.oDateRangeSelect = new sap.m.DateRangeSelection("detailDateSelect", {
		    delimiter: "~", 
		    displayFormat: "MMM dd, yyyy", 
		    dateValue: new Date(afterDateToString), 
		    secondDateValue: new Date(),
		    change: function(){
		    	oController.getDate();
		    	oController.refreshKPI();
		    	oController.refreshLineChart();
		    	oController.refreshColumnChart();
		    }
		}).addStyleClass("detail-page-daterange");
		//Filter Button
		oController.oFilter = new sap.m.Button({
		    icon: "sap-icon://filter",
		    press: function() {
		        alert("Filter");
		    }
		});
		
		oController.oChartView = new sap.ui.core.mvc.JSView ({
			viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.chartContainer'
		});
		
		oController.oKpiView = new sap.ui.core.mvc.JSView ("timeSeriesKPIPage", {
			viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.kpi'
		});
		
		oController.footerBar = new sap.m.Bar({
		    contentLeft: [oController.homeButton],
		    design: sap.m.BarDesign.Footer
		}).addStyleClass("detail-page-footer");
		
		oController.timeSeriesAnalysisPage = new sap.m.Page("", {
		    enableScrolling: true,
		    showHeader: true,
		    showFooter: false,
		    customHeader: new sap.m.Bar({
		        contentRight: [hadoop, serverIP, oController.oDateRangeSelect]
		    }),
		    content: [oController.oKpiView, oController.oChartView],
		    footer: oController.footerBar
		}).addStyleClass("detail-page");

		return  oController.timeSeriesAnalysisPage;
	},

	serverIP: function(oController) {

		var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
		
		oController.oServerSelectLabel = new sap.m.Label({
	        text: oBundle.getText("time.series.analysis.detail.label.serverIP")
	    }).addStyleClass("homepage-select");

	    //Server Select
	    oController.getServer(oController);

	    var oItemTemplate = new sap.ui.core.Item({
	        key: "{select-model>ServerIP}",
	        text: "{select-model>ServerName}"
	    });

	    oController.oServerSelect = new sap.m.Select("timeSAServerIP", {
	        autoAdjustWidth: true,
	        items: {
	            path: "select-model>/businessData",
	            template: oItemTemplate
	        }
	    }).addStyleClass("homepage-select");

	    return [oController.oServerSelectLabel, oController.oServerSelect];
	},

	hadoop: function(oController) {

		var hadoopModel = new sap.ui.model.json.JSONModel();

		var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
		
		oController.oHadoopLabel = new sap.m.Label({
	        text: oBundle.getText("time.series.analysis.detail.label.datasource")
	    }).addStyleClass("homepage-select");

		var oData = {
				"businessData": [
					{
						"hanaIP": "AZ",
						"DataName": "HANA"
					},
					{
						"hadoopIP": "DZ",
						"DataName": "Hadoop"
					},
					
				]
		}
		hadoopModel.setData(oData);
	    var oItemTemplate = new sap.ui.core.Item({
	        key: "{select-model>hadoopIP}",
	        text: "{select-model>DataName}"
	    });

	    oController.oHadoopSelect = new sap.m.Select({
	        autoAdjustWidth: true,
	        items: {
	            path: "select-model>/businessData",
	            template: oItemTemplate
	        },
	        change: function() {
	        	oController.refreshKPI();
		    	oController.refreshLineChart();
		    	oController.refreshColumnChart();
	        }
	    }).addStyleClass("homepage-select");

	    oController.oHadoopSelect.setModel(hadoopModel, "select-model");

	    return [oController.oHadoopLabel, oController.oHadoopSelect];
	}

});