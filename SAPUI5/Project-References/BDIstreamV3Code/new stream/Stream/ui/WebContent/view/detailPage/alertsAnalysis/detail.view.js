sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.detail", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.detail";
    },

    createContent : function(oController) {

        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var afterDateToString = sap.rds.bdi.stream.Homepage.util.dateConvert.firstDayOfLast12Months();
        afterDateToString = oController.convertString(afterDateToString);

        //Page Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.alerts.analysis")
        }).addStyleClass("detail-page-header-title");

        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: sap.ui.getCore().byId("appView").getController().toHome
        });

        //server ip
        var serverIP =  this.serverIP(oController); 
        //DateRangeSelection
        oController.oDateRangeSelect = new sap.m.DateRangeSelection("alertsDate", {
            delimiter: "~", 
            displayFormat: "MMM dd, yyyy", 
            dateValue: new Date(afterDateToString), 
            secondDateValue: new Date(),
            change: function() {
            	oController.refreshKPI();
                oController.refreshChart();
            }
        }).addStyleClass("detail-page-daterange");
        //KPI Header
        oController.kpiHeaderView = new sap.ui.core.mvc.JSView("alertsKPI", {
            viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.kpi"
        });
        //Chart View
        var alertChartContainer = new sap.ui.core.mvc.JSView({
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitChartContainer"
        });

        oController.footerBar = new sap.m.Bar({
            contentLeft:[oController.homeButton],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");

        oController.alertsAnalysisPage = new sap.m.Page("AlertsAnalysis", {
            enableScrolling: true,
            customHeader: new sap.m.Bar({
                contentRight: [serverIP, oController.oDateRangeSelect]
            }),
            content: [oController.kpiHeaderView, alertChartContainer]
        }).addStyleClass("detail-page");

        return oController.alertsAnalysisPage;
    },

    serverIP: function(oController) {

    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oServerSelectLabel = new sap.m.Label({
            text: oBundle.getText("alerts.analysis.detail.label.serverIP")
        }).addStyleClass("homepage-select");

        //Server Select
        var oModel = oController.getServer(this);

        var oItemTemplate = new sap.ui.core.Item({
            key: "{select-model>ServerIP}",
            text: "{select-model>ServerName}"
        });

        oController.oServerSelect = new sap.m.Select("alertsIP", {
            autoAdjustWidth: true,
            items: {
                path: "select-model>/businessData",
                template: oItemTemplate
            },
        	selectedKey: "{select-model>ServerIP}",
        	change: function() {
                oController.refreshKPI();
                oController.refreshChart();
            }
        }).addStyleClass("homepage-select");

        oController.oServerSelect.setModel(oModel, "select-model");

        return [oController.oServerSelectLabel, oController.oServerSelect];
    },
});
