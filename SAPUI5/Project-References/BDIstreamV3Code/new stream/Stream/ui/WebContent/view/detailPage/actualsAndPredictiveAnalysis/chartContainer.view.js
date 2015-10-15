sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.chartContainer", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.chartContainer";
    },

    createContent : function(oController) { 
        var that = this;
        var forecast = 5;
        var measure = "Visits";
        var dimension = "Month";
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

//      Measure Select
        this.measureSelect = new sap.m.Select("measureSelected", {
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({
                         //text: oBundle.getText("predictive.analysis.chartcontainer.item.visits"),
                    	 text: "{i18n>predictive.analysis.chartcontainer.item.visits}",
                         key: "Visits"
                     }),
                     new sap.ui.core.Item({
                         text: oBundle.getText("predictive.analysis.chartcontainer.item.UV"),
                         key: "UV"
                     }),
                     new sap.ui.core.Item({
                         text: oBundle.getText("predictive.analysis.chartcontainer.item.bandwidth"),
                         key: "Bandwidth"
                     })
            ],
            change: function() {
            	oController.refreshChart();
            	oController.refreshKpi();
            }
        }).addStyleClass("homepage-select");

//      Forecast Select Text
        this.forecastSelectLabel = new sap.m.Label({
            text: oBundle.getText("predictive.analysis.chartcontainer.label.forecast")
        }).addStyleClass("predictive-detail-forecastLabel");
        
//      Forecast Select
        this.forecastSelect = new sap.m.Select("forecastSelected", {
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({
                         text:"5",
                         key: "5"
                     }),
                     new sap.ui.core.Item({
                         text:"6",
                         key: "6"
                     }),
                     new sap.ui.core.Item({
                         text:"7",
                         key: "7"
                     }),
                     new sap.ui.core.Item({
                         text:"8",
                         key: "8"
                     }),
                     new sap.ui.core.Item({
                         text:"9",
                         key: "9"
                     }),
                     new sap.ui.core.Item({
                         text:"10",
                         key: "10"
                     }),
                     new sap.ui.core.Item({
                         text:"11",
                         key: "11"
                     }),
                     new sap.ui.core.Item({
                         text:"12",
                         key: "12"
                     }),
                     new sap.ui.core.Item({
                         text:"13",
                         key: "13"
                     }),
                     new sap.ui.core.Item({
                         text:"14",
                         key: "14"
                     }),
                     new sap.ui.core.Item({
                         text:"15",
                         key: "15"
                     }),
                     new sap.ui.core.Item({
                         text:"16",
                         key: "16"
                     }),
                     new sap.ui.core.Item({
                         text:"17",
                         key: "17"
                     }),
                     new sap.ui.core.Item({
                         text:"18",
                         key: "18"
                     }),
                     new sap.ui.core.Item({
                         text:"19",
                         key: "19"
                     }),
                     new sap.ui.core.Item({
                         text:"20",
                         key: "20"
                     })
            ],
            change: function() {

            	oController.refreshChart();
            	oController.refreshKpi();
            }
        }).addStyleClass("homepage-select");

        this.selectLayout = new sap.ui.layout.HorizontalLayout({
            content: [that.measureSelect, that.forecastSelectLabel, that.forecastSelect]
        });
        


//      Dimension Select
        this.dimensionSelect = new sap.m.Select("dimensionSelected", {
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({
                         text: oBundle.getText("predictive.analysis.chartcontainer.item.month"),
                         key: "Month"
                     }),
                     new sap.ui.core.Item({
                         text: oBundle.getText("predictive.analysis.chartcontainer.item.week"),
                         key: "Week"
                     }),
                     new sap.ui.core.Item({
                         text: oBundle.getText("predictive.analysis.chartcontainer.item.day"),
                         key: "Day"
                     })
            ],
            change: function() {
            	oController.refreshChart();
            	oController.refreshKpi();
            }
        }).addStyleClass("homepage-select");

        
        oController.lineChartView =  new sap.ui.core.mvc.JSView({
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.lineChart'
        });
        
        oController.lineChartView.setModel(this.getModel("i18n"),"i18n");

        var oLineChart = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://line-chart",
            content: oController.lineChartView
        });

        var oChartContainer = new sap.suite.ui.commons.ChartContainer({
            showPersonalization: false,
            showFullScreen: false,
            showLegend: true,
            title: '',
            content: [oLineChart]
        });
        
        oChartContainer.addDimensionSelector(this.selectLayout);
        oChartContainer.addDimensionSelector(this.dimensionSelect);

        return oChartContainer;
    },

});