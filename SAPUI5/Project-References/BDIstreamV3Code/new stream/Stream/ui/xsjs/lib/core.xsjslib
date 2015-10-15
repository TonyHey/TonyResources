var Util = $.import("sap.rds-bdi.stream.ui.xsjs.lib","util");

var process  = (function() {
	var logError = function(err){
		return new Util.Tuple({
			"status" : 	Util.STATUS.ERROR,
			"content":  {},
			"log"    :  err});		
	};
	
	var logSuccess = function(businessData){
		return new Util.Tuple({
			"status" : 	Util.STATUS.SUCCESS,
			"content":  businessData,
			"log"    :  ''});
	};
	
	var convertTupleListToJSON = function(tl){
		var i;
		var json = {};
		for (i = 0; i < tl.length; ++i){
			json[tl[i].name] =  tl[i].value;
		}
		return json;
	};
	
	return function(resource, reqestParams, bodyStr){
		var response;
		if(typeof resource === 'undefined' || resource === null || resource === '') {
			response =  logError('Resource Not Indicated');
		} else {
			var params = convertTupleListToJSON(reqestParams);
			var res = resource.split("/");
			var serviceStr = "default";
			var apiStr = "";
			if(res.length===1){
				apiStr = res[0];
			} else {
				serviceStr = res[0];
				apiStr = res[1];
			}
			var serviceLib = $.import("sap.rds-bdi.stream.ui.xsjs.services",serviceStr);
			if(!serviceLib){
				response = logError('Service Not Indicated');
			} else {
				if(serviceLib.hasOwnProperty(apiStr)){
					var api = serviceLib[apiStr];
					var requiredKeys = api.prototype.requiredParams;
					if(requiredKeys !== undefined && requiredKeys.length>0){
						var missingKeys =function (keys, params) { // Check whether required parameters are missing.
							var missingKeys = [];
							for (var i = 0; i < keys.length; i++) {
								if (!params.hasOwnProperty(keys[i])) {
									missingKeys.push(keys[i]);
								}
							}
							return missingKeys;
							}(requiredKeys, params);
						if (missingKeys.length > 0){
							response =  logError("Not Enough Parameters, Provide Parameters for: " + missingKeys.toString());		
						} 						
					}
				}else {
					response = logError('API Not Implemented');					
				}
			}
		}
		if(!response){
			response = logSuccess(api(params));
		}
		return response;
	};
}());



