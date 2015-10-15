//check if current user has admin role
function HasRole() {
	var conn;
	var pc;
    var rset;
    var hasRole = false;
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_HAS_PERMISSION"()';

    try {
        conn = $.db.getConnection();
        
        pc = conn.prepareCall(query);
        if (pc.execute()) {
        	rset = pc.getResultSet();
	   		if (rset.next()){
	   			if (rset.getString(1) === "1") {
	   				hasRole = true;
	   			}
	        }
        }
    } catch (error){
        $.trace.error("check if current use has admin role failed: " + error.toString());
        $.trace.error("Error sql: " + query);
        hasRole = false;
    } finally {
        if (conn){
            conn.commit();
            conn.close();
        }
    }
    
    return hasRole;
}

function handleGet() {
    var cmd = $.request.parameters.get("cmd");
    switch (cmd){
    case "hasRole":
        return HasRole();
    default:
        return {
            "error": "Invalid Command: mode"
    	};
    }
}

function handlePost() {
    var bodyStr = $.request.body ? JSON.parse($.request.body.asString()) : undefined;
    var cmd = $.request.parameters.get("cmd");
    if (bodyStr === undefined) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        return {
            "myResult" : "Missing BODY"
        };
    }
    $.response.status = $.net.http.CREATED;
    
    switch (cmd){
    case "" :
    	break;
    default:
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        return {
            "error": "Invalid Command mode."
        };
    }
}

function processRequest() {
    try {
        switch ($.request.method) {
        case $.net.http.GET:
            $.response.setBody(JSON.stringify(handleGet()));
            break;
        case $.net.http.POST:
            $.response.setBody(JSON.stringify(handlePost()));
            break;
        default:
            $.response.status = $.net.http.METHOD_NOT_ALLOWED;
            $.response.setBody("Wrong request method");
            break;
        }
        $.response.contentType = "application/json";
    } catch (e) {
        $.response.setBody("Failed to execute action: " + e.toString());
    }
}

processRequest();