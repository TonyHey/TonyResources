sap.ui.jsview("sap.rds.bdi.stream.logConfig.views.header", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.logConfig.views.header";
    },

    createContent : function(oController) { 
        oController.oBundle = jQuery.sap.resources({
            url : "ui/WebContent/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        oController.oFileUploader = new sap.ui.unified.FileUploader({
            id: "oFileUploader",
            width : "400px",
            tooltip : "Upload your file to the server",
            uploadComplete : function(oEvent) {
                var sResponse = oEvent.getParameter("response");
                if (sResponse) {
                  var sMsg = "";
                  var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
                  if (m[1] == "200") {
                    sMsg = "Return Code: " + m[1] + "\n" + m[2], "SUCCESS", "Upload Success";
                    oEvent.getSource().setValue("");
                  } else {
                    sMsg = "Return Code: " + m[1] + "\n" + m[2], "ERROR", "Upload Error";
                  }

                  sap.m.MessageToast.show(sMsg);
                }
        }
        });
        oController.uploadButton = new sap.ui.commons.Button("oUploadButton", {
            text:"Upload File", 
            tooltip:"Upload File",
            press:function() {
                oController.doFileUpload(oController);
            }
        });

        oController.oHorizontalLayout = new sap.ui.layout.HorizontalLayout("oHorizontalLayout", {
            content: [oController.oFileUploader, oController.uploadButton]
        });
        
        return oController.oHorizontalLayout;
    }
});