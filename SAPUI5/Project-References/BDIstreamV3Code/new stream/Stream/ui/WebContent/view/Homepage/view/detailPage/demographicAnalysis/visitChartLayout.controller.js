sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitChartLayout", {

    onInit: function() {

    },

    refreshChart: function() {
        var kpiView = sap.ui.getCore().byId("demographicKPI");
        var visitDountChart = sap.ui.getCore().byId("demoVisitDountChart");
        var visitColumnChart = sap.ui.getCore().byId("demoVisitColumnChart");
        var visitMapChart = sap.ui.getCore().byId("demoVisitMapChart");

        kpiView.oController.refreshKpi();
        visitDountChart.oController.refreshChart();
        visitColumnChart.oController.refreshChart();
        visitMapChart.oController.refresh();
    },

    changeMap: function(selectOpt) {
        if (selectOpt === "Duration") {
            var page = sap.ui.getCore().byId("DemographicAnalysis");
            var visitDimen = sap.ui.getCore().byId("demographicVisitSelected").getSelectedKey();
            var VDDimenSelector = sap.ui.getCore().byId("demographicVisitDurationSelected");
            var kpiSelector = sap.ui.getCore().byId("demoVDKpiSelector");
            var chartApp = sap.ui.getCore().byId("demoVDChartApp");
            var VDChartButtons = sap.ui.getCore().byId("demoVDChartView").oController.bar.getContentRight();
            var VDMap = sap.ui.getCore().byId("demoVDMapChart");

            page.removeContent(page.getContent()[1]);
            page.addContent(sap.ui.getCore().byId("demoVDChartView"));

            for (i in VDChartButtons) {
                VDChartButtons[i].setType(sap.m.ButtonType.Default);
            }
            VDChartButtons[2].setType(sap.m.ButtonType.Accept);

            if (visitDimen == "AgeRange") {
                VDDimenSelector.setSelectedItem(VDDimenSelector.getItems()[1]);
            } else {
                VDDimenSelector.setSelectedItem(VDDimenSelector.getItems()[0]);
            }
            kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
            kpiSelector.setVisible(true);

            VDMap.oController.refresh();
            chartApp.to("demoVDMapChart", "fade");
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
                this.chartApp.to("demoVisitDountChart");
                break;
            case "COLUMN":
                this.chartApp.to("demoVisitColumnChart");
                break;
            case "MAP":
                this.expandMapChart();
                this.chartApp.to("demoVisitMapChart", "fade");
                break;
            default:
                this.chartApp.to("demoVisitDountChart");
        }
    },

    expandMapChart: function() {
      var page = sap.ui.getCore().byId("DemographicAnalysis");
      var kpiSelector = sap.ui.getCore().byId("demoVisitKpiSelector");

      page.removeContent(page.getContent()[1]);
      page.addContent(sap.ui.getCore().byId("demoVisitChartView"));

      kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
      kpiSelector.setVisible(true);
    }
});