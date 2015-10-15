sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationChartLayout", {

    onInit: function() {
        
    },

    refreshChart: function() {
        var kpiView = sap.ui.getCore().byId("demographicKPI");
        var visitDountChart = sap.ui.getCore().byId("demoVDDountChart");
        var visitColumnChart = sap.ui.getCore().byId("demoVDColumnChart");
        var visitMapChart = sap.ui.getCore().byId("demoVDMapChart");

        kpiView.oController.refreshKpi();
        visitDountChart.oController.refreshChart();
        visitColumnChart.oController.refreshChart();
        visitMapChart.oController.refresh();
    },

    changeMap: function(selectOpt) {
        if (selectOpt === "Visits") {
            var page = sap.ui.getCore().byId("DemographicAnalysis");
            var VDDimen = sap.ui.getCore().byId("demographicVisitDurationSelected").getSelectedKey();
            var visitDimenSelector = sap.ui.getCore().byId("demographicVisitSelected");
            var kpiSelector = sap.ui.getCore().byId("demoVisitKpiSelector");
            var chartApp = sap.ui.getCore().byId("demoVisitChartApp");
            var visitChartButtons = sap.ui.getCore().byId("demoVisitChartView").oController.bar.getContentRight();
            var visitMap = sap.ui.getCore().byId("demoVisitMapChart");

            page.removeContent(page.getContent()[1]);
            page.addContent(sap.ui.getCore().byId("demoVisitChartView"));

            for (i in visitChartButtons) {
                visitChartButtons[i].setType(sap.m.ButtonType.Default);
            }
            visitChartButtons[2].setType(sap.m.ButtonType.Accept);

            if (VDDimen == "Gender") {
                visitDimenSelector.setSelectedItem(visitDimenSelector.getItems()[1]);
            } else {
                visitDimenSelector.setSelectedItem(visitDimenSelector.getItems()[0]);
            }
            kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
            kpiSelector.setVisible(true);

            visitMap.oController.refresh();
            chartApp.to("demoVisitMapChart", "fade");
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
                this.chartApp.to("demoVDDountChart");
                break;
            case "COLUMN":
                this.chartApp.to("demoVDColumnChart");
                break;
            case "MAP":
                this.toVisitDurationMap();
                this.chartApp.to("demoVDMapChart", "fade");
                break;
            default:
                this.chartApp.to("demoVDDountChart");
        }
    },

    toVisitDurationMap: function() {
        var page = sap.ui.getCore().byId("DemographicAnalysis");
        var kpiSelector = sap.ui.getCore().byId("demoVDKpiSelector");

        page.removeContent(page.getContent()[1]);
        page.addContent(sap.ui.getCore().byId("demoVDChartView"));

        kpiSelector.setSelectedItem(kpiSelector.getItems()[0]);
        kpiSelector.setVisible(true);
      }
});