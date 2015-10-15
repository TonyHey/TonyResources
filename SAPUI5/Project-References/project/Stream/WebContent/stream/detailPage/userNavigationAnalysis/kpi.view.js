sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.kpi", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.kpi";
    },
 
    createContent : function(oController) {
        //Unique Visitors
        var uniqueVisitorsCell = this.createKpiCell("Unique Visitors",
                                                    "UniqueVisitors",
                                                    "{kpiModel>/uniqueVisitors}",
                                                    "{kpiModel>/currentDayUV}",
                                                    oController);

        //Total Visits for Top 10 Users
        var top10UsersCell = this.createKpiCell("Total Visits for Top 10 Users",
                                                "top10Users",
                                                "{kpiModel>/top10Users}",
                                                "{kpiModel>/currentDayTop10Users}",
                                                 oController);

        //Total Visits for Top 10 Pages Viewed
        var top10Pages = this.createKpiCell("Total Visits for Top 10 Pages Viewed",
                                            "top10Pages",
                                            "{kpiModel>/top10Pages}",
                                            "{kpiModel>/currentDayTop10Pages}",
                                             oController);

        var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer({
                scrollStep: 400,
                showDividers: true,
                items: [uniqueVisitorsCell, top10UsersCell, top10Pages]
        }).addStyleClass('kpi-wrapper');

        return oHeaderContainer;
    },

    createKpiCell: function(title, key, totalValue, currentMonthValue, oController) {

        var oLink = new sap.m.Link(key, {
                            text: title,
                            press: function() {
                                oController.changeChart(key, this, oLink);
                            }
                    }).addStyleClass("kpi-title");
        var kpiCell = new sap.suite.ui.commons.HeaderCell({
            height: '150px',
            north: new sap.suite.ui.commons.HeaderCellItem({
                content: oLink
            }),
            east: new sap.suite.ui.commons.HeaderCellItem({
                content: new sap.ui.commons.TextView({
                    design: sap.ui.commons.TextViewDesign.H1,
                    text: totalValue,
                    enabled: false
                }).addStyleClass("kpi-value")
            }),
            south: new sap.suite.ui.commons.HeaderCellItem({
                    content: new sap.ui.layout.HorizontalLayout({
                        content: [
                                  new sap.m.Label({
                                      text:'Current Day:'
                                  }).addStyleClass("kpi-lastday"),
                                  new sap.ui.commons.TextView({
                                      text: currentMonthValue,
                                      enabled: false
                                  }).addStyleClass("kpi-lastday-value")
                        ]
                    }).addStyleClass("kpi-bottom")
            })
        });

        return kpiCell;
    }
});