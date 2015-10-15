sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartLayout", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartLayout";
    },
 
    createContent : function(oController) {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        oController.bar = new sap.m.Bar({
            contentLeft: [
                          new sap.m.Select("sourceVisitSelected", {
                              items: [
                                      new sap.ui.core.Item({
                                          key: "Browser",
                                          text: oBundle.getText("source.analysis.chart.item.browser")
                                      }),
                                      new sap.ui.core.Item({
                                          key: "Site",
                                          text: oBundle.getText("source.analysis.chart.item.originating.site")
                                      })
                              ],
                              change: function() {
                                  jQuery.proxy(oController.refreshChart(), oController);
                              }
                          }).addStyleClass('homepage-select'),
                          new sap.m.Select("sourceVisitKpiSelector", {
                              items: [
                                      new sap.ui.core.Item({
                                          key: "Visits",
                                          text: oBundle.getText("source.analysis.kpi.label.total.visits")
                                      }),
                                      new sap.ui.core.Item({
                                          key: "Duration",
                                          text: oBundle.getText("source.analysis.kpi.label.avg.duration")
                                      })
                              ],
                              change: function() {
                                  jQuery.proxy(oController.changeMap(this.getSelectedKey()), oController);
                              }
                          }).addStyleClass('homepage-select').setVisible(false)
            ],
            contentRight: [
                           new sap.m.Button({
                               icon: "sap-icon://pie-chart",
                               type: sap.m.ButtonType.Accept,
                               press: function() {
                                   jQuery.proxy(oController.handleButtonPress("DONUT", this), oController);
                               }
                           }),
                           new sap.m.Button({
                               icon: "sap-icon://vertical-bar-chart",
                               press: function() {
                                   jQuery.proxy(oController.handleButtonPress("COLUMN", this), oController);
                               }
                           }),
                           new sap.m.Button({
                               icon: "sap-icon://choropleth-chart",
                               press: function() {
                                   jQuery.proxy(oController.handleButtonPress("MAP", this), oController);
                               }
                           })
            ]
        }).addStyleClass("charts-bar");

        oController.chartApp = new sap.m.App("sourceVisitChartApp", {
            height: "450px",
            pages: [
                    new sap.ui.core.mvc.JSView("sourceVisitDountChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.donutChart"
                    }),
                    new sap.ui.core.mvc.JSView("sourceVisitColumnChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.columnChart"
                    }),
                    new sap.ui.core.mvc.HTMLView("sourceVisitMapChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.map",
                    })
            ]
        });

        var oLayout = new sap.ui.layout.VerticalLayout({
            width: "98%",
            height: "500px",
            content: [oController.bar, oController.chartApp]
        });

        return oLayout;
    }

});