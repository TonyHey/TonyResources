sap.ui.controller("sap.rds.bdi.stream.logConfig.views.header", {
    onInit : function() {

    },
    doFileUpload : function(that) {
    	var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage()
        });
         var uploadField = document.getElementById("oFileUploader-fu");
         var file = uploadField.files[0];
         if(!file){
        	 jQuery.sap.require("sap.ui.commons.MessageBox");
             sap.ui.commons.MessageBox.show(oBundle.getText('header.chooseFile'), sap.ui.commons.MessageBox.Icon.INFORMATION, "Information");
             return;
         }

//         jQuery.sap.require("sap.ui.core.BusyIndicator");
         jQuery.sap.require("sap.ui.commons.MessageBox");
         jQuery.sap.require("sap.m.BusyDialog");
//         sap.ui.core.BusyIndicator.show();
         var oBusyDialog = new sap.m.BusyDialog({
        	 title: oBundle.getText('header.busyDialog.title'),
        	 text: oBundle.getText('header.busyDialog.text'),
        	 showCancelButton: false
         });
         oBusyDialog.open();

         var fileLoader = that.oFileUploader;
         var oriFileName = fileLoader.getValue();
         var fileName = oriFileName + new Date().getTime();

         var reader = new FileReader();
         var oriFileName = file.name;
         var formatIdStr = that.oFormatSelect.getValue();

         if(file.size > 104857600){
             sap.ui.commons.MessageBox.show(oBundle.getText('header.busyDialog.maxFileSizeMsg'), sap.ui.commons.MessageBox.Icon.ERROR, "Information");
//             sap.ui.core.BusyIndicator.hide();
             return;
         }

         reader.onload = function () {
             var source = reader.result.split(',')[1];

             $.ajax({
                    url: "ui/WebContent/apps/LogConfig/services/logConfig.xsjs?cmd=uploadFile",
                    type: "PUT",
                    processData: false,
                    contentType: file.type,
                    data : JSON.stringify({blogObj : source, fileName : oriFileName, formatId: formatIdStr}),
                    xhr: function() {
                        var req = $.ajaxSettings.xhr();
                        if (req) {
                            if (req.overrideMimeType) {
                                req.overrideMimeType('text/plain; charset=x-user-defined');
                            }
                            if (req.sendAsBinary) {
                                req.send = req.sendAsBinary;
                            }
                        }
                        return req;
                    },
                    error: function(xhr, textStatus, errorThrown){
//                        sap.ui.core.BusyIndicator.hide();
                        oBusyDialog.close();
                        uploadField.files[0] = null;
                        sap.ui.commons.MessageBox.show(xhr.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "Information");
                    },
                    success: function() {
//                        sap.ui.core.BusyIndicator.hide();
                        oBusyDialog.close();
                        fileLoader.clear();
                        uploadField.files[0] = null;
                        sap.ui.commons.MessageBox.show(oBundle.getText('header.uploadSuccessMsg'), sap.ui.commons.MessageBox.Icon.SUCCESS, "Information");
                        reader.onload = null;
                        var toolBarView = sap.ui.getCore().byId("alertchartToolBar");
                        toolBarView.getController().getLogFileList();
                    }
             });
         };
         reader.readAsDataURL(file);
    }
});