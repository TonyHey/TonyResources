jQuery.sap.declare("sap.rds.bdi.semantic_v2_fiori.config.util.AjaxCall");

sap.rds.bdi.semantic_v2_fiori.config.util.AjaxCall = {
        getTimePeriod: function(){
            return jQuery.get("ui/WebContent/apps/Config/services/config.xsjs?cmd=getTimePeriod");
        }
} 