sap.ui.jsview("sap.stream.detailPage.sourceAnalysis.detail", {

    getControllerName : function() {
        return "sap.stream.detailPage.sourceAnalysis.detail";
    },

    createContent : function(oController) {
        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: oController.toHome
        });
        //Link in Header
        oController.sourceAnalysisLink = new sap.m.Link({
            text: "1",
            press: function() {
            	jQuery.proxy(oController.setStyle(this), oController);
                jQuery.proxy(oController.showView("SourceAnalysis"), oController)
            }
        }).addStyleClass('detail-page-link');
      //Link in Header
        oController.timeSeriesLink = new sap.m.Link({
            text: "2",
            press: function() {
            	jQuery.proxy(oController.setStyle(this), oController);
                jQuery.proxy(oController.showView("timeSeries"), oController)
            }
        }).addStyleClass('detail-page-link');
        //Page Title
        oController.oPageTitle = new sap.m.Label({
            text: "Source Analysis"
        }).addStyleClass("detail-page-header-title");
        //Server Select
        oController.oServerSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({text:"ALL"}),
                     new sap.ui.core.Item({text:"Server A"}),
                     new sap.ui.core.Item({text:"Server B"})
            ]
        }).addStyleClass("detail-page-select");
        //DateRangeSelection
        oController.oDateRangeSelect = new sap.m.DateRangeSelection({
            delimiter: "~", 
            displayFormat: "MMM dd, yyyy", 
            dateValue: new Date(), 
            secondDateValue: new Date()
        }).addStyleClass("detail-page-daterange");
        //Filter Button
        oController.oFilter = new sap.m.Button({
            icon: "sap-icon://filter",
            press: function() {
                alert("Filter");
            }
        });
        //KPI Header
        oController.kpiHeaderView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.sourceAnalysis.kpiHeader"
        });
        //Chart View
        oController.chartView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.sourceAnalysis.chartView"
        });
        //Another KPI Header
        oController.anotherKpiHeaderView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.sourceAnalysis.anotherKpiHeader"
        });
        //Another Chart View
        oController.anotherChartView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.sourceAnalysis.anotherChartView"
        });

        oController.footerBar = new sap.m.Bar({
            contentLeft: [oController.homeButton],
            contentRight: [
                           new sap.m.Button({icon: "sap-icon://download"}),
                           new sap.m.Button({icon: "sap-icon://duplicate"})
            ],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");

        oController.sourceAnalysisPage = new sap.m.Page("", {
            enableScrolling: true,
            showHeader: true,
            showFooter: true,
            customHeader: new sap.m.Bar({
                contentLeft: [oController.sourceAnalysisLink, oController.timeSeriesLink],
                contentRight: [oController.oServerSelectLabel, oController.oServerSelect, oController.oDateRangeSelect, oController.oFilter]
            }),
            content: [oController.kpiHeaderView, oController.chartView, oController.anotherKpiHeaderView, oController.anotherChartView],
            footer: oController.footerBar
        }).addStyleClass("detail-page");

        return oController.sourceAnalysisPage;
    }
});