sap.ui.jsview("sap.stream.detailPage.timeSeriesAnalysis.detail", {

	getControllerName : function() {
		return "sap.stream.detailPage.timeSeriesAnalysis.detail";
	},

	createContent : function(oController) {	
          //Home Button
        oController.homeButton = new sap.m.Button({
            icon: "sap-icon://home",
            press: oController.toHome
        });
		
		//link begin
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
	        text: "Time Series Analysis"
	    }).addStyleClass("detail-page-header-title");
		 
		 
		//server ip
		var serverIP =  this.serverIP(oController); 	
	
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
		
		oController.oChartView = new sap.ui.core.mvc.JSView ({
			viewName: 'sap.stream.detailPage.timeSeriesAnalysis.chartContainer'
		});
		
		oController.oKpiView = new sap.ui.core.mvc.JSView ({
			viewName: 'sap.stream.detailPage.timeSeriesAnalysis.kpi'
		});
		
		oController.footerBar = new sap.m.Bar({
		    contentLeft: [oController.homeButton],
		    contentRight: [
		                   new sap.m.Button({icon: "sap-icon://download"}),
		                   new sap.m.Button({icon: "sap-icon://duplicate"})
		    ],
		    design: sap.m.BarDesign.Footer
		}).addStyleClass("detail-page-footer");
		
		oController.timeSeriesAnalysisPage = new sap.m.Page("", {
		    enableScrolling: true,
		    showHeader: true,
		    showFooter: false,
		    customHeader: new sap.m.Bar({
		        contentLeft: [oController.homeButton, oController.oLink1, oController.oLink2, oController.oLink3, oController.oLink4],
		        contentRight: [serverIP, oController.oDateRangeSelect, oController.oFilter]
		    }),
		    content: [oController.oKpiView, oController.oChartView],
		    footer: oController.footerBar
		}).addStyleClass("detail-page");

		return  oController.timeSeriesAnalysisPage;
	},

	serverIP: function(oController) {

		oController.oServerSelectLabel = new sap.m.Label({
	        text: "Server IP :"
	    });

	    //Server Select
	    var oModel = oController.getServer(this);

	    var oItemTemplate = new sap.ui.core.Item({
	        key: "{select-model>ServerIP}",
	        text: "{select-model>ServerName}"
	    });

	    oController.oServerSelect = new sap.m.Select({
	        autoAdjustWidth: true,
	        items: {
	            path: "select-model>/businessData",
	            template: oItemTemplate
	        }
	    }).addStyleClass("homepage-select");

	    oController.oServerSelect.setModel(oModel, "select-model");

	    return [oController.oServerSelectLabel, oController.oServerSelect];
	}

});