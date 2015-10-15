var Core = $.import("sap.rds-bdi.stream.ui.xsjs.lib","core");
var Util = $.import("sap.rds-bdi.stream.ui.xsjs.lib","util");

function handleGet() {
	var rs = Core.process($.request.queryPath, $.request.parameters);
	if(rs.get('status') === Util.STATUS.SUCCESS){
		setHttpOK();
		$.response.contentType = "application/json";
		$.response.setBody(JSON.stringify(rs.get('content')));
	} else if(rs.get('status') === Util.STATUS.ERROR){
		setHttpBAD_REQUEST(rs.get('log')); // 400
	}
}

function handlePost() {
    var bodyStr = $.request.body ? JSON.parse($.request.body.asString()) : undefined;
    var rs = Core.process($.request.queryPath, $.request.paramters, bodyStr);
	if(rs.get('status') === Util.STATUS.SUCCESS){
		setHttpCreated();
		$.response.contentType = "application/json";
		$.response.setBody(JSON.stringify(rs.get('content')));
	} else if(rs.get('status') === Util.STATUS.ERROR){
		setHttpBAD_REQUEST(rs.get('log')); // 400
	}
}

function processRequest() {
    try {
		switch ($.request.method) {
		case $.net.http.GET:
			handleGet();
			break;
		case $.net.http.POST:
			handlePost();
			break;
		default:
			setHttpMETHOD_NOT_ALLOWED(); //405
			break;
		}
    } catch (e) {
    	setHttpINTERNAL_SERVER_ERROR(e.toString()); //500
    }
}

processRequest();

//*************************************************************************************************
//Quick method to set http status
//*************************************************************************************************
function setHttpMETHOD_NOT_ALLOWED(errMessage) { // 403
	if (errMessage === undefined) {
		errMessage = "Method Not Allowed";
	}
	$.response.status = $.net.http.METHOD_NOT_ALLOWED;
	$.response.setBody(errMessage);
}

function setHttpNOT_FOUND(errMessage) {//404
	if (errMessage === undefined) {
		errMessage = "Request Not Found";
	}
	$.response.status = $.net.http.NOT_FOUND;
	$.response.setBody(errMessage);
}

function setHttpINTERNAL_SERVER_ERROR(errMessage) { //500
	if (errMessage === undefined) {
		errMessage = "Internal Server Error";
	}
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody(errMessage);
}

function setHttpBAD_REQUEST(errMessage) { //400
	if (errMessage === undefined) {
		errMessage = "Bad Request";
	}
	$.response.status = $.net.http.BAD_REQUEST;
	$.response.setBody(errMessage);
}

function setHttpCREATED(errMessage) { //201
	if (errMessage === undefined) {
		errMessage = "";
	}
	$.response.status = $.net.http.CREATED;
}

function setHttpOK(errMessage) { //200
	if (errMessage === undefined) {
		errMessage = "";
	}
	$.response.status = $.net.http.OK;
}