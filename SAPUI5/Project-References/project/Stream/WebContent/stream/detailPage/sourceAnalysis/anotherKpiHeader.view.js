sap.ui.jsview("sap.stream.detailPage.sourceAnalysis.anotherKpiHeader", {

    getControllerName : function() {
        return "sap.stream.detailPage.sourceAnalysis.anotherKpiHeader";
    },

    createContent : function(oController) {
        oController.headerContainer = new sap.suite.ui.commons.HeaderContainer("", {
            items : [ 
                      new sap.suite.ui.commons.HeaderCell({
                          north : new sap.suite.ui.commons.HeaderCellItem({
                              content: new sap.m.Label({
                                  text: "Total Visits Increase"
                              })
                          }),
                          south : new sap.suite.ui.commons.HeaderCellItem({
                              content: new sap.suite.ui.commons.NumericContent("", {
                                          value : "3277"
                                       }).addStyleClass("detai-page-kpi-number")
                          })
                      }),
                      new sap.suite.ui.commons.HeaderCell({
                          north : new sap.suite.ui.commons.HeaderCellItem({
                              content: new sap.m.Label({
                                  text: "Average Length of Stay"
                              })
                          }),
                          south : new sap.suite.ui.commons.HeaderCellItem({
                              content: new sap.suite.ui.commons.NumericContent("", {
                                          value : "04:35"
                                       }).addStyleClass("detai-page-kpi-number")
                          })
                      })
            ]
        }).addStyleClass("detail-page-kpi-header");
        
        return oController.headerContainer;
    }
});