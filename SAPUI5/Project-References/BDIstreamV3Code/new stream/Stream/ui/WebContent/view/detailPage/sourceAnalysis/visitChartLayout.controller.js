sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartLayout", {

    onInit: function() {

    },

    refreshChart: function() {
        var kpiView = sap.ui.getCore().byId("sourceAnalysisKpi");
        var visitDountChart = sap.ui.getCore().byId("sourceVisitDountChart");
        var visitColumnChart = sap.ui.getCore().byId("sourceVisitColumnChart");
        var visitMapChart = sap.ui.getCore().byId("sourceVisitMapChart");

        kpiView.oController.refreshKpi();
        visitDountChart.oController.refreshChart();
        visitColumnChart.oController.refreshChart();
        visitMapChart.oController.refresh();
    },

    changeMap: function(selectOpt) {
        if (selectOpt === "Duration") {
            var page = sap.ui.getCore().byId("sourceAnalysis");
            var visitDimen = sap.ui.getCore().byId("sourceVisitSelected").getSelectedKey();
            var VDDimenSelector = sap.ui.getCore().byId("sourceVisitDurationSelected");
            var kpiSelector = sap.ui.getCore().byId("sourceVDKpiSelector");
            var chartApp = sap.ui.getCore().byId("sourceVDChartApp");
            var VDChartButtons = sap.ui.getCore().byId("sourceVDChartView").oController.bar.getContentRight();
            var VDMap = sap.ui.getCore().byId("sourceVDMapChart");

            page.removeContent(page.getContent()[1]);
            page.addContent(sap.ui.getCore().byId("sourceVDChartView"));

            for (i in VDChartButtons) {
                VDChartButtons[i].setType(sap.m.ButtonType.Default);
            }
            VDChartButtons[2].setType(sap.m.ButtonType.Accept);

            if (visitDimen == "Browser") {
                VDDimenSelector.setSelectedItem(VDDimenSelector.getItems()[1]);
            } else {
                VDDimenSelector.setSelectedItem(VDDimenSelector.getItems()[0]);
            }
            kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
            kpiSelector.setVisible(true);

            VDMap.oController.refresh();
            chartApp.to("sourceVDMapChart", "fade");
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
                this.chartApp.to("sourceVisitDountChart");
                break;
            case "COLUMN":
                this.chartApp.to("sourceVisitColumnChart");
                break;
            case "MAP":
                this.expandMapChart();
                this.chartApp.to("sourceVisitMapChart", "fade");
                break;
            default:
                this.chartApp.to("sourceVisitDountChart");
        }
    },

    expandMapChart: function() {
      var page = sap.ui.getCore().byId("sourceAnalysis");
      var kpiSelector = sap.ui.getCore().byId("sourceVisitKpiSelector");

      page.removeContent(page.getContent()[1]);
      page.addContent(sap.ui.getCore().byId("sourceVisitChartView"));

      kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
      kpiSelector.setVisible(true);
    }
});