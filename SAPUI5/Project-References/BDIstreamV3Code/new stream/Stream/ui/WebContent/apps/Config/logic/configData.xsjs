
var configFunctionalTypes = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_FUNCTIONAL_TYPES"(?)';

function getFunctionalTypes() {
	var conn;
    var rset;
    var result = [];
    var query = "";
    var pstmt;
    var pc;
    try{
        conn = $.db.getConnection();
        
        pc = conn.prepareCall(configFunctionalTypes);
        if (pc.execute()) {
        	rset = pc.getResultSet();
	   		while(rset.next()){
	   			result.push({
	   				"name": rset.getString(1),
	   				"value": rset.getString(2),
	   				"type": rset.getString(3),
	    		});
	        }
        }
    } catch (error) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    } finally {
		if (conn !== null) {
			conn.close();
		}
    }
    
    return result;
}

var configData = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_DATA"(?,?)';

function getData(type) {
	var conn;
    var rset;
    var result = [];
    var query = "";
    var pstmt;
    var pc;
    try{
        conn = $.db.getConnection();
        
        pc = conn.prepareCall(configData);
        pc.setString(1, type);
        if (pc.execute()) {
        	rset = pc.getResultSet();
	   		while(rset.next()){
	   			result.push({
	   				"name": rset.getString(1),
	   				"key": rset.getString(2),
	   				"value": rset.getString(3),
	    			"viewType": rset.getString(4),
	    			"unit": "",
	    		});
	        }
        }
    } catch (error) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    } finally {
		if (conn !== null) {
			conn.close();
		}
    }
    
    return result;
}

/**
 * Add 
 *    
 * @param data 
 */
var configAdd = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_ADD"(?,?,?)';

function add(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	var pc;
	try {

        conn = $.db.getConnection();
        pc = conn.prepareCall(configAdd);
        pc.setString(1, data.TYPE);
        pc.setString(2, data.NAME);
        pc.setString(3, data.VALUE);
        pc.execute();
        conn.commit();
		result = {
			"result" : true,
			"message" : "Data has been modified succesfully"
		};

	} catch (error) {
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		$.trace.error("Update Data error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Update Data error: " + error.toString()
		};
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	var responseStr = JSON.stringify(result);
	$.trace.error("response: " + responseStr);
	$.response.contentType = "application/json";
	$.response.setBody(responseStr);
	$.response.status = $.net.http.OK;
}

/**
 * Update 
 *    
 * @param data 
 */
var configUpdate = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_UPDATE"(?,?,?,?)';

function update(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	var pc;
	try {

        conn = $.db.getConnection();
        pc = conn.prepareCall(configUpdate);
        pc.setString(1, data.TYPE);
        pc.setString(2, data.NAME);
        pc.setString(3, data.KEY);
        pc.setString(4, data.VALUE);
        pc.execute();
        conn.commit();
		result = {
			"result" : true,
			"message" : "Data has been modified succesfully"
		};

	} catch (error) {
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		$.trace.error("Update Data error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Update Data error: " + error.toString()
		};
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	var responseStr = JSON.stringify(result);
	$.trace.error("response: " + responseStr);
	$.response.contentType = "application/json";
	$.response.setBody(responseStr);
	$.response.status = $.net.http.OK;
}

/**
 * Delete
 *    
 * @param data 
 */
var configDelete = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_DELETE"(?,?)';

function Delete(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	var pc;
	try {

        conn = $.db.getConnection();
        pc = conn.prepareCall(configDelete);
        pc.setString(1, data.TYPE);
        pc.setString(2, data.KEY);
        pc.execute();
        conn.commit();
		result = {
			"result" : true,
			"message" : "Data has been modified succesfully"
		};

	} catch (error) {
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		$.trace.error("Update Data error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Update Data error: " + error.toString()
		};
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	var responseStr = JSON.stringify(result);
	$.trace.error("response: " + responseStr);
	$.response.contentType = "application/json";
	$.response.setBody(responseStr);
	$.response.status = $.net.http.OK;
}


/**
 * getLastUpdateTime 
 *    
 * @param data 
 */
var configLastUpdated = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.config::STREAM_PROC_CONFIG_LASTUPDATED"(?)';

function getLastUpdateTime(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	var rset = null;
	var pc;
	try {
        conn = $.db.getConnection();
        pc = conn.prepareCall(configLastUpdated);
        pc.setString(1, data.TYPE);
        if (pc.execute()) {
        	rset = pc.getResultSet();
	   		while(rset.next()){      
				result = {
					"result" : true,
					"year" : rset.getDate(1).getFullYear(),
					"month" : rset.getDate(1).getMonth(),
					"day" : rset.getDate(1).getDate(),
				}
	   		}
		}
	} catch (error) {
		$.trace.error("Get Data error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Get Data error: " + error.toString()
		};
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	var responseStr = JSON.stringify(result);
	$.trace.error("response: " + responseStr);
	$.response.contentType = "application/json";
	$.response.setBody(responseStr);
	$.response.status = $.net.http.OK;
}

function handleGet() {
    var cmd = $.request.parameters.get("cmd");
    var param = $.request.parameters.get("param");
    switch (cmd) {
    case "categories":
    	return getFunctionalTypes();
    case "details":
        return getData(param);
    default:
        return {
            "error": "Invalid Command: mode"
    	};
    }
}

function switchPOST() {
	$.trace.error("Do post method!");
	$.trace.error($.request.body.asString());

	var data = JSON.parse($.request.body.asString());
	$.trace.error("ACTION : " + data.ACTION);
	switch (data.ACTION) {
	case 'update':
		update(data);
		break;
	case 'add':
		add(data);
		break;
	case 'delete':
		Delete(data);
		break;
	case 'getLastUpdateTime':
		getLastUpdateTime(data);
		break;
	}
}


function processRequest() {
    try {
        switch ($.request.method) {
        case $.net.http.GET:
            $.response.setBody(JSON.stringify(handleGet()));
            break;
        case $.net.http.POST:
        	switchPOST();
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