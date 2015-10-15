sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.map", {

	onAfterRendering: function() {
        nokia.Settings.set("app_id", "5fxK8bbx28OP6DLr_rid");
        nokia.Settings.set("app_code", "f4OuqzyGkoTweklooZ5tBQ");
    
        var map = new nokia.maps.map.Display(
                document.getElementById("visitDurationMapContainer"), {
                    // Zoom level for the map
                    zoomLevel: 10,
                    // Map center coordinates
                    center: [52.51, 13.4]
                }
            );
	    
	}
});