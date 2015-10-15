sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.kpi", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.kpi";
    },

    createContent: function(oController) {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var VisitCell = this.createKpiCell(oBundle.getText("source.analysis.kpi.label.total.visits"),
                                           "sourceVisitKpiValue",
                                           "{kpiModel>/visitsValue}",
                                           "kpi-cell kpi-cell-border-right");

        var VisitDurationCell = this.createKpiCell(oBundle.getText("source.analysis.kpi.label.avg.duration"),
                                           "sourceVisitDurationKpiValue",
                                           "{kpiModel>/visitsDurationValue}",
                                           "kpi-cell");
        var marginCell = new sap.m.Label({
            width: "50px"
        });
        var oHeaderContainer = new sap.ui.layout.HorizontalLayout({
            content: [marginCell, VisitCell, VisitDurationCell]
        }).addStyleClass('kpi-wrapper');
        
        var oPanel = new sap.ui.commons.Panel("sourceCollapsePanel",{
    		content: oHeaderContainer,
    		applyContentPadding: false
        });

//        return oHeaderContainer;
        return oPanel;
    },

    createKpiCell: function(title, valueID, kpiValue, className) {
        var kpiCell = new sap.suite.ui.commons.HeaderCell({
            height: '90px',
            north: new sap.suite.ui.commons.HeaderCellItem({
                       content: new sap.m.Label({
                                    text: title
                       			}).addStyleClass("kpi-title")
//                     			}).addStyleClass("kpi-big-title")
                   }),
            east: new sap.suite.ui.commons.HeaderCellItem({
                      content: new sap.ui.commons.TextView(valueID, {
                                   design: sap.ui.commons.TextViewDesign.H1,
                                   text: kpiValue,
                                   enabled: false
                               }).addStyleClass("kpi-green-value")
            })
        }).addStyleClass(className);

        return kpiCell;
    }

});