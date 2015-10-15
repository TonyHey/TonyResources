sap.ui.jsview("sap.stream.detailPage.actualsAndPredictiveAnalysis.detail", {

    getControllerName: function() {
        return "sap.stream.detailPage.actualsAndPredictiveAnalysis.detail";
    },

    createContent: function(oController) {

        //header title
        oController.oPageTitle = new sap.m.Label({
            text: "Source Analysis"
        }).addStyleClass("detail-page-header-title");
        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: oController.toHome
        });
        //number select
        var numberBtn = this.createNumberBtn(oController);
        //ServerSelect Label
        oController.oServerSelectLabel = new sap.m.Label({
            text: "Server IP :"
        });
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
            viewName : "sap.stream.detailPage.actualsAndPredictiveAnalysis.kpiHeader"
        });
        
        //chart Container
        oController.chartContainer = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.actualsAndPredictiveAnalysis.chartContainer"
        });

        //footer
        oController.footerBar = new sap.m.Bar({
            contentLeft: [oController.homeButton],
            contentRight: [
                           new sap.m.Button({icon: "sap-icon://download"}),
                           new sap.m.Button({icon: "sap-icon://duplicate"})
            ],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");

        oController.actualsAndPredictiveAnalysisPage = new sap.m.Page("", {
            enableScrolling: true,
            customHeader: new sap.m.Bar({
                contentLeft: [numberBtn],
                contentRight: [oController.oServerSelectLabel, oController.oServerSelect, oController.oDateRangeSelect, oController.oFilter]
            }),
            content: [oController.kpiHeaderView, oController.chartContainer],
            footer: oController.footerBar
        }).addStyleClass("detail-page");;

        return oController.actualsAndPredictiveAnalysisPage;
    },

    createNumberBtn: function(oController){

        //select number
        oController.oneBtn = new sap.m.Link({
            text: "1",
            press: function(){
            	jQuery.proxy(oController.setStyle(this), oController);
                oController.toDetailPage("timeSeriesAnalysis");
            }
        }).addStyleClass("detail-page-circle");


        oController.twoBtn = new sap.m.Link({
            text: "2",
            press: function(){
            	jQuery.proxy(oController.setStyle(this), oController)
            }
        }).addStyleClass("detail-page-circle");


        oController.threeBtn = new sap.m.Link({
            text: "3",
            press: function(){
            	jQuery.proxy(oController.setStyle(this), oController)
            }
        }).addStyleClass("detail-page-circle");

        oController.fourBtn = new sap.m.Link({
            text: "4",
            press: function(){
            	jQuery.proxy(oController.setStyle(this), oController)
            }
        }).addStyleClass("detail-page-circle");

        return [ oController.oneBtn,  oController.twoBtn,  oController.threeBtn,  oController.fourBtn];
    }
});