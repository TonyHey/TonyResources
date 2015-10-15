sap.ui.controller("sap.stream.topLocations.map", {

    onInit : function() {
      //Nokia map
    	
    },

    onBeforeRendering: function(){
    	
        
    },
    addMarkerToGroup: function(group, coordinate, html) {
	  var marker = new H.map.Marker(coordinate);
	  // add custom data to the marker
	  marker.setData(html);
	  group.addObject(marker);
	},
	
	addInfoBubble: function(map,ui) {
	  var group = new H.map.Group();
	  var standardMarker = new H.map.Marker(new H.geo.Point(48.2000, 16.3667));
	  map.addObject(standardMarker);
	  map.addObject(group);
	  
	  var mapviewchangeend = new H.util.Event(mapviewchangeend);
	  
	  
	  group.addEventListener('tap', function (evt) {
	    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
	      // read custom data
	      content: evt.target.getData()
	    });
	    // show info bubble
	    ui.addBubble(bubble);
	    // get scale bar value
	    console.log(bubble.getElement());
	    
	  }, false);
	  

	  this.addMarkerToGroup(group, {lat:53.439, lng:-2.221},
	    '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
	    '</div><div>M City<br/>Capacity: 48,000</div>');

	  this.addMarkerToGroup(group, {lat:53.430, lng:-2.961},
	    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
	    '</div><div >Anfield<b/r>Capacity: 45,362</div>');
	  
	  

	},

	isLeapYear: function(Year){
        
        if(!isNaN(parseInt(Year))){
         if((Year%4==0 && Year%100!=0)||(Year%100==0 && Year%400==0)){
        	alert(Year+"isLeaYear！");
         }else{
            alert(Year+"notLearYear！");
         }
        }else{
            alert("please input correct year！");
        }
    },

    onAfterRendering : function(oEvent) {
		
    	var platform = new H.service.Platform({
    		  app_id: '5fxK8bbx28OP6DLr_rid',
    		  app_code: 'f4OuqzyGkoTweklooZ5tBQ',
    		  useCIT: true,
    		  useHTTPS: true
    	});
		var defaultLayers = platform.createDefaultLayers();

		
		var map = new H.Map(document.getElementById('mapContainer'), defaultLayers.normal.map,{
			center: {lat:53.439, lng:-2.221},
			zoom: 5
		});
		
		var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
		
		var ui = H.ui.UI.createDefault(map, defaultLayers);
		ui.setUnitSystem("metric");
		
		
		
		//remove the drag and drop funciton to Here map
        $(".mapContainer").bind("mousedown", function(event) {
                event.stopPropagation();
        }); 
        
        this.addInfoBubble(map,ui);
        
       
        
        //get the scale bar value
        
        var scaleValueChange;
        $(".mapContainer").mouseover(function(){
        	scaleValueChange = setInterval(function(){
            		console.log(parseInt($(".H_scalebar").text()));
        	},500);     	
        });
        $(".mapContainer").mouseout(function(){
        	clearInterval(scaleValueChange);
        });
        
//        var scaleValueChange;
//        map.addEventListener('pointerenter', function(){
//        	scaleValueChange = setInterval(function(){
//        		console.log(parseInt($(".H_scalebar").text()));
//        	},500);
//  	  	});
//        map.addEventListener('pointerleave', function(){
//        	clearInterval(scaleValueChange);
//        });
        
        
        
       // this.isLeapYear(2004);
        

    }
});