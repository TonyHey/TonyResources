sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.detail", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.detail";
    },

    createContent : function(oController) { 
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var defaultAfterDate = new Date(oController.convertString(util.firstDayOfLast12Months()));

        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: oController.toHome
        });
        //Page Title
        oController.oPageTitle = new sap.m.Label({
            text: "User Navigation Analysis" 
        }).addStyleClass("detail-page-header-title");

        //server IP
        var serverIP =  this.createServerIP(oController);
        //DateRangeSelection
        oController.oDateRangeSelect = new sap.m.DateRangeSelection("userNavigationAnalysisDateSelect", {
            delimiter: "~", 
            displayFormat: "MMM dd, yyyy", 
            dateValue: defaultAfterDate, 
            secondDateValue: new Date(),
            change: function(){
                jQuery.proxy(oController.refreshKPI(), oController);
                jQuery.proxy(oController.refreshChart(), oController);
            }
        }).addStyleClass("detail-page-daterange");

        oController.oKpiView = new sap.ui.core.mvc.JSView({
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.kpi'
        });

        oController.oChartView = new sap.ui.core.mvc.JSView("userNavigationChartContainer", {
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.chartContainer'
        });

        oController.footerBar = new sap.m.Bar({
            contentLeft: [oController.homeButton],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");
        
        oController.userNavigationAnalysisPage = new sap.m.Page("userNavigationAnalysisPage", {
            enableScrolling: true,
            showHeader: true,
            showFooter: true,
            customHeader: new sap.m.Bar({
                contentRight: [serverIP, oController.oDateRangeSelect]
            }),
            content: [oController.oKpiView, oController.oChartView],
            footer: oController.footerBar
        }).addStyleClass("detail-page");

        return  oController.userNavigationAnalysisPage;
    },

    createServerIP: function(oController) {
        oController.oServerSelectLabel = new sap.m.Label({
            text: "Server IPP :"
        });
        //Server Select
        var oModel = oController.getServer();
        var oItemTemplate = new sap.ui.core.Item({
            key: "{serverModel>ServerIP}",
            text: "{serverModel>ServerName}"
        });
        oController.oServerSelect = new sap.m.Select("userNavigationAnalysisServerIP", {
            autoAdjustWidth: true,
            items: {
                path: "serverModel>/businessData",
                template: oItemTemplate
            },
            change: function(){
                jQuery.proxy(oController.refreshKPI(), oController);
                jQuery.proxy(oController.refreshChart(), oController);
            }
        }).addStyleClass("homepage-select");

        oController.oServerSelect.setModel(oModel, "serverModel");

        return [oController.oServerSelectLabel, oController.oServerSelect];
    },

});