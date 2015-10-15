sap.ui.controller("sap.rds.bdi.stream.logConfig.views.main", {

    onInit : function() {
       
    },
    openLoadDataOverlay: function(){
        $("#alertPage-scroll .overlay.hide").remove();
        $("#alertPage-scroll").append("<div class='overlay hide'><div id='busyIndicatorOverlay' ></div></div>");
        if (document.getElementById("busyIndicatorOverlay")) {
            new sap.m.BusyIndicator().placeAt("busyIndicatorOverlay", "only");
        }
        $("#alertPage-scroll .overlay").removeClass("hide");
        $("#alertPage-scroll .overlay").addClass("show");
    },
    closeLoadDataOverlay: function(){
        $("#alertPage-scroll .overlay").removeClass("show");
        $("#alertPage-scroll .overlay").addClass("hide");
    }

});