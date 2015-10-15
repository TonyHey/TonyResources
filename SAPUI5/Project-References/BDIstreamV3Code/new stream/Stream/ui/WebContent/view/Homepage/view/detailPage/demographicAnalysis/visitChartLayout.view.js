sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitChartLayout", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitChartLayout";
    },
 
    createContent : function(oController) {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        oController.bar = new sap.m.Bar({
            contentLeft: [
                          new sap.m.Select("demographicVisitSelected", {
                              items: [
                                      new sap.ui.core.Item({
                                          key: "AgeRange",
                                          text: oBundle.getText("demographic.analysis.chart.item.age")
                                      }),
                                      new sap.ui.core.Item({
                                          key: "Gender",
                                          text: oBundle.getText("demographic.analysis.chart.item.gender")
                                      })
                              ],
                              change: function() {
                                  jQuery.proxy(oController.refreshChart(), oController);
                              }
                          }).addStyleClass('homepage-select'),
                          new sap.m.Select("demoVisitKpiSelector", {
                              items: [
                                      new sap.ui.core.Item({
                                          key: "Visits",
                                          text: oBundle.getText("demographic.analysis.kpi.label.total.visits")
                                      }),
                                      new sap.ui.core.Item({
                                          key: "Duration",
                                          text: oBundle.getText("demographic.analysis.kpi.label.avg.duration")
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

        oController.chartApp = new sap.m.App("demoVisitChartApp", {
            height: "450px",
            pages: [
                    new sap.ui.core.mvc.JSView("demoVisitDountChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.donutChart"
                    }),
                    new sap.ui.core.mvc.JSView("demoVisitColumnChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.columnChart"
                    }),
                    new sap.ui.core.mvc.HTMLView("demoVisitMapChart", {
                        viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.map",
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