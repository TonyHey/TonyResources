sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.detail", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.detail";
    },

    createContent : function(oController) { 
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var defaultAfterDate = new Date(oController.convertString(util.firstDayOfLast12Months()));

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
        	text: oBundle.getText("shell.page.title.predictive.analysis")
//            text: "Actual and Predictive Analysis" 
        }).addStyleClass("detail-page-header-title");

        //hadoop
		var hadoop = this.hadoop(oController);
        //server IP
        var serverIP =  this.createServerIP(oController);
        //DateRangeSelection
        oController.oDateRangeSelect = new sap.m.DateRangeSelection("actualsAndPredictiveAnalysisDateSelect", {
            delimiter: "~", 
            displayFormat: "MMM dd, yyyy", 
            dateValue: defaultAfterDate, 
            secondDateValue: new Date(),
            change: function(){
                jQuery.proxy(oController.refreshKPI(), oController);
                jQuery.proxy(oController.refreshChart(), oController);
            }
        }).addStyleClass("detail-page-daterange");

        oController.oKpiView = new sap.ui.core.mvc.JSView("predictiveKpiView", {
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.kpi'
        });

        oController.oChartView = new sap.ui.core.mvc.JSView({
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.chartContainer'
        });

        oController.footerBar = new sap.m.Bar({
            contentLeft: [oController.homeButton],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");
        
        oController.actualsAndPredictiveAnalysisPage = new sap.m.Page("actualsAndPredictiveAnalysisPage", {
            enableScrolling: true,
            showHeader: true,
            showFooter: false,
            customHeader: new sap.m.Bar({
 //           	contentLeft: [hadoop],
            	contentRight: [hadoop, serverIP, oController.oDateRangeSelect]
            }),
            content: [oController.oKpiView, oController.oChartView],
            footer: oController.footerBar
        }).addStyleClass("detail-page");

        return  oController.actualsAndPredictiveAnalysisPage;
    },

    createServerIP: function(oController) {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oServerSelectLabel = new sap.m.Label({
            text: oBundle.getText("predictive.analysis.detail.label.serverIP")
        });
        //Server Select
        var oModel = oController.getServer();
        var oItemTemplate = new sap.ui.core.Item({
            key: "{serverModel>ServerIP}",
            text: "{serverModel>ServerName}"
        });
        oController.oServerSelect = new sap.m.Select("actualsAndPredictiveAnalysisServerIP", {
            autoAdjustWidth: true,
            items: {
                path: "serverModel>/businessData",
                template: oItemTemplate
            },
            selectedKey: "{serverModel>ServerIP}",
            change: function(){
                jQuery.proxy(oController.refreshKPI(), oController);
                jQuery.proxy(oController.refreshChart(), oController);
            }
        }).addStyleClass("homepage-select");

        oController.oServerSelect.setModel(oModel, "serverModel");

        return [oController.oServerSelectLabel, oController.oServerSelect];
    },
    
    hadoop: function(oController) {

		var hadoopModel = new sap.ui.model.json.JSONModel();

		var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
		
		oController.oHadoopLabel = new sap.m.Label({
	        text: oBundle.getText("predictive.analysis.detail.label.datasource")
	    }).addStyleClass("timeseries-hadoop-selected");;

		var oData = {
				"businessData": [
					{
						"hadoopIP": "HANA",
						"DataName": "HANA"
					},
					{
						"hadoopIP": "HADOOP",
						"DataName": "Hadoop"
					},
				]
		}
		hadoopModel.setData(oData);
	    var oItemTemplate = new sap.ui.core.Item({
	        key: "{select-model>hadoopIP}",
	        text: "{select-model>DataName}"
	    });

	    oController.oHadoopSelect = new sap.m.Select("actualsAndPredictiveAnalysisSourceSelect", {
	        autoAdjustWidth: true,
	        items: {
	            path: "select-model>/businessData",
	            template: oItemTemplate
	        },
	        change: function(){
            jQuery.proxy(oController.refreshKPI(), oController);
            jQuery.proxy(oController.refreshChart(), oController);
	        }
	    }).addStyleClass("homepage-select");

	    oController.oHadoopSelect.setModel(hadoopModel, "select-model");

	    return [oController.oHadoopLabel, oController.oHadoopSelect];
	}
    
});