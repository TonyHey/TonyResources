/**
 * 
 */

var streamService = (function(){
	var instance;
	
	function init(){
		return {
			logOut: function(){
				
			},
			getServerList: function (){
				var serverList = [];
		        jQuery.ajax({
		            url: "ui/xsjs/api.xsjs/intelligence/getAllServerIP",
		            dataType: 'json',
		            async: false,
		            type: "GET",
		            success: function(data) {
		            	serverList = data;
		            },
		            error: function(data){
		                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
		                console.log(data);
		            }
		        });
		        return serverList;
			}
		}
	};
	return {
		getInstance: function () {
			if ($.isEmptyObject(instance)) {
				instance = init();
			} 
			return instance;
		}
	};	
})();