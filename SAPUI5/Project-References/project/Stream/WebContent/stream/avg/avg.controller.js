sap.ui.controller("sap.stream.avg.avg", {
	onAfterRendering: function(){
		var time = 3600;
	    if (null != time && "" != time) {    // this function ignore the situation that hour > 24.
	        
        	var hour = parseInt(time / 3600);
        	var minute = parseInt((parseFloat(time / 3600) - parseInt(time / 3600)) * 60);
        	if(hour < 10){
            	hour = "0" + hour;
            }
        	if(minute < 10){
            	minute = "0" + minute;
            }
            time = hour + ":" + minute;
	        
	    }else{
	    	console.log( "input time is not correct!");
	    }
		
		$("#mainText").html("<text>"+ time +"</text>");  //return
		
	},

});