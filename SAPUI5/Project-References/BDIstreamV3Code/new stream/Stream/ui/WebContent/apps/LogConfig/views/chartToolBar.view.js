sap.ui.jsview("sap.rds.bdi.stream.logConfig.views.chartToolBar", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.logConfig.views.chartToolBar";
    },

    createContent : function(oController) {
        jQuery.sap.require("sap.ui.commons.MessageBox");
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage()
        });
        oController.oBundle = oBundle;

        oController.chartToolBar = new sap.ca.ui.charts.ChartToolBar({
            showFullScreen : false
        });
        oController.chartToolBar.addStyleClass("chartToolBar");

        var tableView = new sap.ui.core.mvc.JSView("alertTable", {viewName: "sap.rds.bdi.stream.logConfig.views.table"});
        tableView.getIcon = function() {
            return "sap-icon://choropleth-chart";
        };
        tableView.getLabel = function() {
            return "Table";
        };
        oController.tableView = tableView;
        oController.chartToolBar.insertChart(tableView);

        oController.saveButton = new sap.ui.commons.Button({
            text:oBundle.getText('chartToolbar.save'),
            tooltip:oBundle.getText('chartToolbar.save'),
            press:function() {
                var oGeneralTable = sap.ui.getCore().byId("oTable");
                var tableDatas = oGeneralTable.getModel().getData();
                var uploadDatas = [];
                for(var i=0; i<tableDatas.length; i++){
                    var file = {};
                    file.fileName = tableDatas[i].fileName;
                    file.selected = tableDatas[i].selected;
                    uploadDatas.push(file);
                }

                $.ajax({
                    url: "ui/WebContent/apps/LogConfig/services/logConfig.xsjs?cmd=saveFile",
                    type: "POST",
                    data: JSON.stringify(uploadDatas),
                    error: function(xhr, textStatus, errorThrown){
                        sap.ui.commons.MessageBox.show(xhr.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "Information");
                    },
                    success: function() {
                        sap.ui.commons.MessageBox.show(oBundle.getText('chartToolbar.saveLogFileMsg'), sap.ui.commons.MessageBox.Icon.SUCCESS, "Information");
                        oController.getLogFileList();
                    }
                });
            }
        }).addStyleClass("chartToolBarButton");
        oController.deleteButton = new sap.ui.commons.Button({
            text:oBundle.getText('chartToolbar.delete'),
            tooltip:oBundle.getText('chartToolbar.delete'),
            press:function() {
                var oGeneralTable = sap.ui.getCore().byId("oTable");
                var iRowIndex = oGeneralTable.getSelectedIndex();
                if (iRowIndex == -1) {
                    sap.ui.commons.MessageBox.show(oController.oBundle.getText("selectRowMsg"), sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
                    return;
                }
                var t = oGeneralTable.getContextByIndex(iRowIndex);

                if(!t){
                    sap.ui.commons.MessageBox.show(oController.oBundle.getText("selectRowMsg"), sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
                    return;
                }
                $.ajax({
                    url: "ui/WebContent/apps/LogConfig/services/logConfig.xsjs?cmd=deleteFile&fileName="+t.getProperty("fileName"),
                    type: "POST",
                    error: function(xhr, textStatus, errorThrown){
                        sap.ui.commons.MessageBox.show(xhr.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "Information");
                    },
                    success: function() {
                        sap.ui.commons.MessageBox.show(oBundle.getText('chartToolbar.deleteLogFileMsg'), sap.ui.commons.MessageBox.Icon.SUCCESS, "Information");
                        oController.getLogFileList();
                    }
                });
            }
        }).addStyleClass("chartToolBarButton");
        oController.chartToolBar.getToolBar().insertContentLeft(oController.saveButton, 0);
        oController.chartToolBar.getToolBar().insertContentLeft(oController.deleteButton, 1);

        return oController.chartToolBar;
    }
});