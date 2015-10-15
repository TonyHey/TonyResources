sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.detail", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.detail";
    },

    createContent : function(oController) {

        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var afterDateToString = sap.rds.bdi.stream.Homepage.util.dateConvert.firstDayOfLast12Months();
        afterDateToString = oController.convertString(afterDateToString);

        jQuery.sap.initMobile();

        jQuery.sap.require("sap.ui.vbm.AnalyticMap");

      //Page Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.source.analysis")
        }).addStyleClass("detail-page-header-title");

        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: sap.ui.getCore().byId("appView").getController().toHome
        });
        //Server Select
        var serverIP =  this.serverIP(oController); 
        //DateRangeSelection
        oController.oDateRangeSelect = new sap.m.DateRangeSelection('sourceAnalysisDate', {
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
        oController.kpiHeaderView = new sap.ui.core.mvc.JSView("sourceAnalysisKpi", {
            viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.kpi"
        });
//      }).addStyleClass("kpi-view");
        //Chart View
        var visitChart = new sap.ui.core.mvc.JSView("sourceVisitChartView", {
            height: "500px",
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartLayout"
        }).addStyleClass("charts-view");
        var visitDurationChart = new sap.ui.core.mvc.JSView("sourceVDChartView", {
            height: "500px",
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationChartLayout"
        }).addStyleClass("charts-view");

        var chartGrid = new sap.ui.layout.Grid("sourceChartGrid", {
            width: "100%",
            height: "500px",
            hSpacing: 0,
            vSpacing: 0,
            content:[visitChart, visitDurationChart]
        }).addStyleClass("charts-grid");

        oController.sourceAnalysisPage = new sap.m.Page("sourceAnalysis", {
            enableScrolling: true,
            customHeader: new sap.m.Bar({
                contentRight: [serverIP, oController.oDateRangeSelect]
            }),
            content: [oController.kpiHeaderView, chartGrid]
        }).addStyleClass("detail-page");

        return oController.sourceAnalysisPage;
    },
    
    serverIP: function(oController) {

        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oServerSelectLabel = new sap.m.Label({
            text: oBundle.getText("source.analysis.detail.label.serverIP")
        }).addStyleClass("homepage-select");

        //Server Select
        var oModel = oController.getServer(this);

        var oItemTemplate = new sap.ui.core.Item({
            key: "{select-model>ServerIP}",
            text: "{select-model>ServerName}"
        });

        oController.oServerSelect = new sap.m.Select("sourceAnalysisIP", {
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
