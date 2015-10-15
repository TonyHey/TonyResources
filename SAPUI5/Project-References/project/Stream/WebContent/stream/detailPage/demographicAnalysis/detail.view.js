sap.ui.jsview("sap.stream.detailPage.demographicAnalysis.detail", {

    getControllerName : function() {
        return "sap.stream.detailPage.demographicAnalysis.detail";
    },

    createContent : function(oController) {

        jQuery.sap.initMobile();

        jQuery.sap.require("sap.ui.vbm.AnalyticMap");
        
        //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: oController.toHome
        });
        
        oController.oLink1 = new sap.m.Link ({
        	press: function () {
		    	jQuery.proxy(oController.setStyle(this), oController)
		    },
            text: '1'
        }).addStyleClass('detail-page-circle');
	 
        oController.oLink2 = new sap.m.Link ({
	    	press: function () {
		    	jQuery.proxy(oController.setStyle(this), oController)
		    },
            text: '2'
        }).addStyleClass('detail-page-circle');
	 
        oController.oLink3 = new sap.m.Link ({
	    	press: function () {
		    	jQuery.proxy(oController.setStyle(this), oController)
		    },
            text: '3'
        }).addStyleClass('detail-page-circle');
	 
        oController.oLink4 = new sap.m.Link ({
	    	press: function () {
		    	jQuery.proxy(oController.setStyle(this), oController)
		    },
            text: '4'
        }).addStyleClass('detail-page-circle');
	    
	    //Page Title
        oController.oPageTitle = new sap.m.Label({
            text: "Demo Graphic Analysis"
        }).addStyleClass("detail-page-header-title");
        
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
            viewName : "sap.stream.detailPage.demographicAnalysis.kpiHeader"
        });
        //Chart View
        var leftChartContainer = new sap.ui.core.mvc.JSView({
            viewName: "sap.stream.detailPage.demographicAnalysis.leftChartContainer"
        });

        var rightChartContainer = new sap.ui.core.mvc.JSView({
            viewName: "sap.stream.detailPage.demographicAnalysis.rightChartContainer"
        });  
        
        oController.footerBar = new sap.m.Bar({
            contentLeft:[oController.homeButton],
            contentRight: [
                           new sap.m.Button({icon: "sap-icon://download"}),
                           new sap.m.Button({icon: "sap-icon://duplicate"})
            ],
            design: sap.m.BarDesign.Footer
        }).addStyleClass("detail-page-footer");
            
        var oLayout2 = new sap.ui.layout.Grid({
        	width: '100%',
            hSpacing: 0,
            vSpacing: 0,
            content:[leftChartContainer,rightChartContainer ]       
        });

        oController.demographicAnalysisPage = new sap.m.Page("", {
            enableScrolling: true,
            customHeader: new sap.m.Bar({
                contentLeft: [ oController.oLink1,  oController.oLink2,  oController.oLink3,  oController.oLink4],
                contentMiddle: [new sap.m.Label({text: " "})],
                contentRight: [oController.oServerSelectLabel, oController.oServerSelect, oController.oDateRangeSelect, oController.oFilter]
            }),
            content: [oController.kpiHeaderView, oLayout2],
            footer: oController.footerBar
        }).addStyleClass("detail-page");

        return oController.demographicAnalysisPage;
    }
});
