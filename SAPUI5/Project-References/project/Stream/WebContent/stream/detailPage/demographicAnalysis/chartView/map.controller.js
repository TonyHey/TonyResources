sap.ui.controller("sap.stream.detailPage.demographicAnalysis.chartView.map", {

	onInit: function() {
		this.nokiaMapType = nokia.maps.map.Display.NORMAL;
        nokia.Settings.set("app_id", "5fxK8bbx28OP6DLr_rid");
        nokia.Settings.set("app_code", "f4OuqzyGkoTweklooZ5tBQ");
	},

	onBeforeRendering: function() {
	},

	onAfterRendering: function() {
		
		 var that = this;
	        this.map = new nokia.maps.map.Display(document.getElementById("demoMapContainer"), {
	            center: [36.50286588948265, -114.1864354375],
	            zoomLevel: 5,
	            baseMapType: that.nokiaMapType,
	            components: [ 
	                           new nokia.maps.map.component.Behavior(),
	                           new nokia.maps.map.component.ZoomBar(),
	                           new nokia.maps.map.component.TypeSelector()
	            ]
	        });

	        //remove the drag and drop funciton to Here map
	        $(".demoMapContainer").bind("mousedown", function(event) {
	                event.stopPropagation();
	        }); 

	        return this.map;
	},

	onExit: function() {

	}

});