var Util = $.import("sap.rds-bdi.stream.ui.xsjs.lib", "util");

function getStreamDay(params) {
	params.dimen  = "DAY";
	params.source = "HANA";	

	var data = {"businessData":[]};
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			temp["Date"] = Date.UTC(record["DATE_GRANULARITY"].substring(0, 4),
					record["DATE_GRANULARITY"].substring(4, 6),
					record["DATE_GRANULARITY"].substring(6, 8));
			temp["Days"] = record["DATE_GRANULARITY"].substring(0, 4) + "/"
					+ record["DATE_GRANULARITY"].substring(4, 6) + "/"
					+ record["DATE_GRANULARITY"].substring(6, 8);
			temp["Year"] = record["DATE_GRANULARITY"].substring(0, 4);
			temp["Month"] = Util.getMonthString(record["DATE_GRANULARITY"]
					.substring(4, 6));
			temp["Day"] = record["DATE_GRANULARITY"].substring(6, 8);
			temp["Unique Visitors"] = record["UNIQUE_VISITORS"];
			temp["Visits"] = record["VISITS"];
			temp["Pages"] = record["PAGES"];
			temp["Hits"] = record["HITS"];
			temp["Bandwidth"] = record["BANDING_SUM"];
			temp["Visits Duration Average"] = record["VISITS_DURATION_AVG"];
			data.businessData.push(temp);
		}
	}
	return data;
}
getStreamDay.prototype.requiredParams = [ "after", "before", "serverIP" ];


function getStreamWeek(params) {
	params.source = "HANA";
	var data = {"businessData":[]};
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_WEEK", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			temp["Week"] = "CW"+ record["DATE_GRANULARITY"].substring(4,6);
			temp["Unique Visitors"] = record["UNIQUE_VISITORS"];
			temp["Visits"] = record["VISITS"];
			temp["Pages"] = record["PAGES"];
			temp["Hits"] = record["HITS"];
			temp["Bandwidth"] = record["BANDING_SUM"];
			temp["Visits Duration Average"] = record["VISITS_DURATION_AVG"];
			data.businessData.push(temp);
		}
	} 
	return data;
}
getStreamWeek.prototype.requiredParams = [ "after", "before", "serverIP" ];


function getStreamMonth(params) {
	var data = {"businessData":[]};
	params.dimen  = "MONTH";
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			temp["Year"] = record["DATE_GRANULARITY"].substring(0, 4);
			temp["Month"] = Util.getMonthString(record["DATE_GRANULARITY"]
					.substring(4, 6));
			temp["Unique Visitors"] = record["UNIQUE_VISITORS"];
			temp["Visits"] = record["VISITS"];
			temp["Pages"] = record["PAGES"];
			temp["Hits"] = record["HITS"];
			temp["Bandwidth"] = record["BANDING_SUM"];
			temp["Visits Duration Average"] = record["VISITS_DURATION_AVG"];
			data.businessData.push(temp);
		}
	} 
	return data;
}
getStreamMonth.prototype.requiredParams = [ "after", "before", "serverIP" ];

function getStreamAgeChart(params) {
	var data = {"businessData":[]};
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_AGE_ALL_CHART", params);
	if (rs) {
		data.businessData = rs;
	} 
	return data;
}
getStreamAgeChart.prototype.requiredParams = [ "after", "before", "serverIP" ];


function getStreamGenderChart(params) {
	var data = {"businessData":[]};
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_GENDER_ALL_CHART", params);
	if (rs) {
		data.businessData = rs;
	} 
	return data;
}
getStreamGenderChart.prototype.requiredParams = [ "after", "before", "serverIP" ];


function getStreamBrowserChart(params) {
	var data = {"businessData":[]};
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_BROWSER_ALL_CHART", params);
	if (rs) {
		data.businessData = rs;
	} 
	return data;
}
getStreamBrowserChart.prototype.requiredParams = [ "after", "before", "serverIP" ];


function getStreamOriginChart(params) {
	var data = {"businessData":[]};
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_ORIGIN_ALL_CHART", params);
	if (rs) {
		data.businessData = rs;
	} 
	return data;
}
getStreamOriginChart.prototype.requiredParams = [ "after", "before", "serverIP" ];

function getStreamCountAll(params) {
	var data = {"businessData":[]};
	params.source = "HANA";
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_COUNT_ALL", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			temp["Unique Visitors"] = record["UNIQUE_VISITORS"];
			temp["Visits"] = record["VISITS"];
			temp["Pages"] = record["PAGES"];
			temp["Hits"] = record["HITS"];
			temp["Bandwidth"] = record["BANDING_SUM"];
			temp["Visits Duration Average"] = record["VISITS_DURATION_AVG"];
			data.businessData.push(temp);
		}
	} 
	return data;
}
getStreamCountAll.prototype.requiredParams = [ "after", "before", "serverIP" ];


/*
 * 
 */
function getAllServerIP(params){
	params.source = "HANA";
	
	var data = {"businessData":[]};
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_ALL_SERVER_IP", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};	
			record = rs[i];
			temp["ServerName"] = record["SERVER_NAME"];
			temp["ServerIP"]   = record["SERVER_IP"];
			data.businessData.push(temp);
		}
	}
	return data;
}

/*
 * 
 */
function getDurationCount(params){
	params.source = "HANA";
	var data = {"businessData":[]};
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_COUNT_DURATION", params);
	if (rs) {
		data.businessData = rs;
	}
	return data;
}
getDurationCount.prototype.requiredParams = [ "after", "before", "serverIP" ];


/*
 * 
 */
function getUVCountCity(params){
	params.source = "HANA";
	
	var data = {"businessData":[]};
	if(params.top === undefined || isNaN(parseInt(params.top))){
		params.top = 1000;
	} else {
		params.top = parseInt(params.top);
	}
	var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_CLIENT_UV_MAP", params);
	if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			temp["City"] = record["CITY"];
			temp["Latitude"] = record["LATITUDE"];			
			temp["Longtitude"] = record["LONGITUDE"];
			temp["Unique Visits"] = record["UNIQUE_VISITS"];
			data.businessData.push(temp);
		}
	} 
	return data;
}
getDurationCount.prototype.requiredParams = [ "after", "before", "serverIP" ];


/*
 * 
 * 
 */
function getPredictVisitsMonth (params){
	params.dimen  = "MONTH";
	params.kpi = "VISITS";
	return __getPredictKPI(params);
} 
getPredictVisitsMonth.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictVisitsWeek (params){
	params.dimen  = "WEEK";
	params.kpi = "VISITS";
	return __getPredictKPI(params);
} 
getPredictVisitsWeek.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictVisitsDay (params){
	params.dimen  = "DAY";
	params.kpi = "VISITS";
	return __getPredictKPI(params);
} 
getPredictVisitsDay.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictDurationMonth (params){
	params.dimen  = "MONTH";
	params.kpi = "DURATION";
	return __getPredictKPI(params);
} 
getPredictDurationMonth.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictDurationWeek (params){
	params.dimen  = "WEEK";
	params.kpi = "DURATION";
	return __getPredictKPI(params);
} 
getPredictDurationWeek.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictDurationDay (params){
	params.dimen  = "DAY";
	params.kpi = "DURATION";
	return __getPredictKPI(params);
} 
getPredictDurationDay.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];
/*
 * 
 * 
 */
function getPredictUVMonth (params){
	params.dimen  = "MONTH";
	params.kpi = "UNIQUE_VISITORS";
	return __getPredictKPI(params);
} 
getPredictUVMonth.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictUVWeek (params){
	params.dimen  = "WEEK";
	params.kpi = "UNIQUE_VISITORS";
	return __getPredictKPI(params);
} 
getPredictUVWeek.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function getPredictUVDay (params){
	params.dimen  = "DAY";
	params.kpi = "UNIQUE_VISITORS";
	return __getPredictKPI(params);
} 
getPredictUVDay.prototype.requiredParams = [ "after", "before", "serverIP", "periods" ];

/*
 * 
 * 
 */
function __getPredictKPI (params){
	params.source = "HANA";	
	if(params.periods === undefined || isNaN(parseInt(params.periods))){
		params.periods = 5;
	} else {
		params.periods = parseInt(params.periods);
	}	
	
	var data = {"businessData":[]};
	var tempMonth = null;
    var rs = Util.callProcedure("SAP_RDS_BDI_STREAM","sap.rds-bdi.stream.procedures.rep", "GET_STREAM_PREDICTIVE", params);
    if (rs) {
		var i, record;
		for ( i = 0; i < rs.length; i++) {
			var temp = {};
			record = rs[i];
			if(params.dimen == "MONTH"){
		  		temp["YearMonth"] = record["DATE_STR"].substring(0,4)+"/"+record["DATE_STR"].substring(5,7);
	    		temp["Month"] = Util.getMonthString(record["DATE_STR"].substring(5,7));				
			} else if(params.dimen == "WEEK") {
	    		temp["Week"] = record["DATE_STR"].substring(0,4)+"/"+"CW"+record["DATE_STR"].substring(5,7);    		
			} else { //DAY
				temp["Date"] = Date.UTC(record["DATE_STR"].substring(0,4),record["DATE_STR"].substring(5,7), record["DATE_STR"].substring(8,10));
				temp["Days"] = record["DATE_STR"].substring(0,4) + "/" + record["DATE_STR"].substring(5,7) + "/" + record["DATE_STR"].substring(8,10);
	    		temp["Day"] = record["DATE_STR"].substring(8,10);				
			}
    		temp["Year"] = record["DATE_STR"].substring(0,4);
      		temp["ActualData"] = record["ACTUAL_DATA"];
    		temp["PredictiveData"] = record["PROJECTED_DATA"];
			data.businessData.push(temp);
		}
	}
    return data;
} 

/*
 * 
 */
var getInfoFromSession = function(){
	return {
			"user": {
				"name": $.session.getUsername(),
				"lang": $.session.language,
				"invoc": $.session.getInvocationCount(),
			}
	};    
};