sap.ui.controller("sap.rds.bdi.stream.logConfig.views.chartToolBar", {    
    onInit : function() {
        //must give some data to model, otherwise model can't set new data
        this.alertTypeModel = new sap.ui.model.json.JSONModel({
        "data" : [ 
            {
                key : "-1",
                value : "all"
            }, {
                key : "1",
                value : "Web - Access Log 1"
            }, {
                key : "2",
                value : "Web - Access Log 2"
            }
        ]});
        this.chartToolBar.setModel(this.alertTypeModel, "alertType");
    },
    
    onBeforeRendering : function() {
        
    },
    onAfterRendering : function() {
        this.getLogFileList();
    },
    getLogFileList : function(){
        var that = this;
        jQuery.ajax({
            url: 'ui/WebContent/apps/LogConfig/services/logConfig.xsjs?cmd=getLogFileList',
            dataType: 'json',
            timeout: 5000,
            type: "POST",
            success: function(oResponse, textStatus, jqXHR) {
                var alertModel = sap.ui.getCore().getModel("alertModel");
                alertModel.setData(oResponse);
            },
            error: function(jqXHR, textStatus, errorThrown){
            },
            complete: function(){
            }
        });
    }
});