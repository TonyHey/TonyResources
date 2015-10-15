sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.columnChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.columnChart";
    },

    createContent: function(oController) {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.columnChart = new sap.viz.ui5.Column({
            width: "100%",
            height: "400px",
            title: new sap.viz.ui5.types.Title ({
                visible: true,
                text: oBundle.getText("demographic.analysis.chart.visits.duration"),
                layout: new sap.viz.ui5.types.Title_layout ({
                    position: "bottom"
                })
            }),
            plotArea: {
                colorPalette: ['#3496f2', '#ce82bf', '#ffe02e']
            }
        }).addStyleClass("sourceAnalysis-detail-columnChart");

        return oController.columnChart;
    }

});