sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationChartLayout", {

    onInit: function() {
        
    },

    refreshChart: function() {
        var kpiView = sap.ui.getCore().byId("sourceAnalysisKpi");
        var visitDountChart = sap.ui.getCore().byId("sourceVDDountChart");
        var visitColumnChart = sap.ui.getCore().byId("sourceVDColumnChart");
        var visitMapChart = sap.ui.getCore().byId("sourceVDMapChart");

        kpiView.oController.refreshKpi();
        visitDountChart.oController.refreshChart();
        visitColumnChart.oController.refreshChart();
        visitMapChart.oController.refresh();
    },

    changeMap: function(selectOpt) {
        if (selectOpt === "Visits") {
            var page = sap.ui.getCore().byId("sourceAnalysis");
            var VDDimen = sap.ui.getCore().byId("sourceVisitDurationSelected").getSelectedKey();
            var visitDimenSelector = sap.ui.getCore().byId("sourceVisitSelected");
            var kpiSelector = sap.ui.getCore().byId("sourceVisitKpiSelector");
            var chartApp = sap.ui.getCore().byId("sourceVisitChartApp");
            var visitChartButtons = sap.ui.getCore().byId("sourceVisitChartView").oController.bar.getContentRight();
            var visitMap = sap.ui.getCore().byId("sourceVisitMapChart");

            page.removeContent(page.getContent()[1]);
            page.addContent(sap.ui.getCore().byId("sourceVisitChartView"));

            for (i in visitChartButtons) {
                visitChartButtons[i].setType(sap.m.ButtonType.Default);
            }
            visitChartButtons[2].setType(sap.m.ButtonType.Accept);

            if (VDDimen == "Site") {
                visitDimenSelector.setSelectedItem(visitDimenSelector.getItems()[1]);
            } else {
                visitDimenSelector.setSelectedItem(visitDimenSelector.getItems()[0]);
            }
            kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
            kpiSelector.setVisible(true);

            visitMap.oController.refresh();
            chartApp.to("sourceVisitMapChart", "fade");
        }
    },

    handleButtonPress: function(type, oButton) {
        var buttonArray = this.bar.getContentRight();
        var i = 0;

        for (i in buttonArray) {
            buttonArray[i].setType(sap.m.ButtonType.Default);
        }
        oButton.setType(sap.m.ButtonType.Accept);

        switch (type) {
            case "DONUT":
                this.chartApp.to("sourceVDDountChart");
                break;
            case "COLUMN":
                this.chartApp.to("sourceVDColumnChart");
                break;
            case "MAP":
                this.toVisitDurationMap();
                this.chartApp.to("sourceVDMapChart", "fade");
                break;
            default:
                this.chartApp.to("sourceVDDountChart");
        }
    },

    toVisitDurationMap: function() {
        var page = sap.ui.getCore().byId("DemographicAnalysis");
        var kpiSelector = sap.ui.getCore().byId("sourceVDKpiSelector");

        page.removeContent(page.getContent()[1]);
        page.addContent(sap.ui.getCore().byId("sourceVDChartView"));

        kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
        kpiSelector.setVisible(true);
      }
});