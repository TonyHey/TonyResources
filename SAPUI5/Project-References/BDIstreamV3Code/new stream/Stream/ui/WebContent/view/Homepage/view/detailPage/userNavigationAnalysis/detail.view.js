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
            press: sap.ui.getCore().byId("appView").getController().toHome
        });
        //Page Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.user.navigation.analysis") 
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

        oController.lineChartView =  new sap.ui.core.mvc.JSView("userNavLineChart", {
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.lineChart'
        });

        oController.barChartView = new sap.ui.core.mvc.JSView("userNavBarChart", {
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.barChart'
        });

        oController.pagesChartView = new sap.ui.core.mvc.JSView("userNavPagesBarChart", {
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.barChart'
        });

        oController.charts = new sap.m.App("userNavCharts", {
            pages: [
                    oController.lineChartView,
                    oController.barChartView,
                    oController.pagesChartView
            ]
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
            content: [oController.oKpiView, oController.charts]
        }).addStyleClass("detail-page");

        return  oController.userNavigationAnalysisPage;
    },

    createServerIP: function(oController) {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oServerSelectLabel = new sap.m.Label({
            text: oBundle.getText("user.navigation.analysis.detail.label.serverIP")
        }).addStyleClass("homepage-select");
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