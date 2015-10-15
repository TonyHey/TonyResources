sap.ui.controller("sap.stream.timeSeries.timeSeries", {
    
    onInit : function() {

    },

    getServer: function() {
        jQuery.ajax({
            url: "./services/intelligence.xsjs?cmd=getAllServerIP",
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                console.log("Tracing[05] ----------- getAllServerIP ------ success");
                console.log(data);
            },
            error: function(data){
                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
                console.log(data);
            }
        });
    }
});