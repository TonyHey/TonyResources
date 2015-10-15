//Get the schemaName from conf.xscfgd
$.import("sap.rds-bdi.semantic.configuration.logic", "configlib");
var schemaName = $.sap["rds-bdi"].semantic.configuration.logic.configlib.getSchemaName();

$.import("sap.rds-bdi.semantic.configuration.logic", "sms");
var library = $.sap["rds-bdi"].semantic.configuration.logic.sms;
/**
 * mask the name 
 * @param str
 */
function maskWord(str) {
	var start = str.substr(0, 1), end = str.substr(str.length - 1), length = str.length - 2, result = "", i = 0;

	for (i = 0; i < length; ++i) {
		result += "*";
	}

	if (str.length < 3) {
		result = start + result;
	} else {
		result = start + result + end;
	}

	return result;
}
/**
 * Search exluded user for Blacklist
 * 
 * @param data
 */
function searchExcludedUser(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = "SELECT ID, SOCIALUSER, SOCIALMEDIACHANNEL, SOCIALUSERNAME FROM \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::EXCLUDED_USER\" WHERE 1=1 ";
	try {
		
		if (data.SOCIALUSER && data.SOCIALUSER !== "") {
			sql += " AND SOCIALUSER = '" + data.SOCIALUSER + "' ";
		}
		
		sql += "ORDER BY ID desc";
		
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		var rs = pstmt.executeQuery();

		result = {
			"data" : [],
			'result' : true,
			'message' : 'Search excluded users successfully.'
		};

		while (rs.next()) {
			result.data.push({
				ID : rs.getInteger(1),
				USERID : rs.getString(2),
				CHANNELID : rs.getString(3),
				NAME : maskWord(rs.getNString(4))
			});
		}

		rs.close();

	} catch (error) {
		$.trace.error("Search excluded user error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Search excluded user error: " + error.toString()
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
 * Search for all user
 * 
 * @param data
 */
function searchUser(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	try {
		sql = "SELECT SOCIALUSER, SOCIALUSERNAME FROM \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::SOCIALUSERINFO\" WHERE SOCIALMEDIACHANNEL = '" + data.CHANNEL
				+ "' AND LOWER(SOCIALUSERNAME) LIKE LOWER('" + data.USERNAME + "%') ORDER BY SOCIALUSERNAME LIMIT 5";
		$.trace.error("Search user sql: " + sql);
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		var rs = pstmt.executeQuery();

		result = {
			"data" : [],
			'result' : true,
			'message' : 'Search user success'
		};

		while (rs.next()) {
			result.data.push({
				ID : rs.getString(1),
				NAME : rs.getString(2)
			});
		}

		rs.close();

	} catch (error) {
		$.trace.error("Search user error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Search user error: " + error.toString()
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
 * Search user filter by name and channel
 * 
 * @param channelId
 * @param name
 */
function existSocialUser(channelId, name) {
	var result = false;
	var conn = null;
	var pstmt = null;
	var sql = "SELECT * FROM \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::SOCIALUSERINFO\" WHERE \"SOCIALUSERNAME\" = \'" + name + "\' AND \"SOCIALMEDIACHANNEL\" = '" + channelId
			+ "'";
	try {
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		var rs = pstmt.executeQuery();

		if (rs.next()) {
			result = true;
		}

		rs.close();

	} catch (error) {
		$.trace.error("Cannot find out if excluded user exist: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	return result;
}
/**
 * Check if user already exists
 * 
 * @param channelId
 * @param name
 */
function existExcludedUser(channelId, name) {
	var result = false;
	var conn = null;
	var pstmt = null;
	var sql = "SELECT * FROM \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::EXCLUDED_USER\" WHERE \"SOCIALUSERNAME\" = \'" + name + "\' AND \"SOCIALMEDIACHANNEL\" = '" + channelId
			+ "'";
	try {
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		var rs = pstmt.executeQuery();

		if (rs.next()) {
			result = true;
		}

		rs.close();

	} catch (error) {
		$.trace.error("Cannot find out if excluded user exist: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
	} finally {
		if (pstmt !== null) {
			pstmt.close();
		}
		if (conn !== null) {
			conn.close();
		}
	}

	return result;
}
/**
 * add user to exluded_user table in database
 * 
 * @param data
 */
function addExcludeUser(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;

	try {
		if (!existSocialUser(decodeURIComponent(data.CHANNEL), decodeURIComponent(data.NAME))) {
			$.trace.info("No user found with \"" + maskWord(data.NAME) + "\":" + decodeURIComponent(data.CHANNEL) + " (name masked).");
			throw ("User with this combination of username and channel not found.");
		}

		if (existExcludedUser(decodeURIComponent(data.CHANNEL), decodeURIComponent(data.NAME))) {
			$.trace.info("The user has already in the excluded list.");
			throw ("The user has already in the excluded list.");
		}

		sql = "INSERT INTO \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::EXCLUDED_USER\" " + "(SOCIALUSER, SOCIALMEDIACHANNEL, SOCIALUSERNAME,ID) " + "VALUES (?, ?, ?, \""
				+ schemaName + "\".\"sap.rds-bdi.semantic.sequences::SEQ_EXCLUDED_USER\".nextval)";
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, decodeURIComponent(data.ID));
		pstmt.setString(2, decodeURIComponent(data.CHANNEL));
		pstmt.setString(3, decodeURIComponent(data.NAME));
		pstmt.execute();
		conn.commit();

		// remove excluded user data
		sql = "CALL \"" + schemaName + "\".\"PROC_EXCLUDE_USER\"";
		$.trace.error("Procedure: " + sql);
		pstmt = conn.prepareCall(sql);
		pstmt.execute();
		conn.commit();

		result = {
			"result" : true,
			"message" : "Excluded user has bean added successfully"
		};
	} catch (error) {
		$.trace.error("Add exclude user error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Add exclude user error: " + error.toString()
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
 * remove user from Blacklist
 * 
 * @param data
 */
function removeExcludedUser(data) {
	var result;
	var conn = null;
	var pstmt = null;
	var sql = null;
	try {
		sql = "DELETE FROM \"" + schemaName + "\".\"sap.rds-bdi.semantic.tables::EXCLUDED_USER\" WHERE \"SOCIALMEDIACHANNEL\" = '" + data.CHANNEL + "' AND \"SOCIALUSER\" = '" + data.USERID
				+ "'";
		conn = $.db.getConnection();
		pstmt = conn.prepareStatement(sql);
		pstmt.execute();
		conn.commit();

		result = {
			"result" : true,
			"message" : "Excluded user has bean removed successfully"
		};
	} catch (error) {
		$.trace.error("Remove excluded user error: " + error.toString());
		$.trace.error("TEMP__:About to query:" + sql);
		result = {
			"result" : false,
			"message" : "Remove excluded user error: " + error.toString()
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
 * call functions
 * 
 */
function switchPOST() {
	$.trace.error("Do post method!");
	$.trace.error($.request.body.asString());

	var data = JSON.parse($.request.body.asString());
	$.trace.error("ACTION : " + data.ACTION);
	switch (data.ACTION) {
	case 'searchExcludedUser':
		searchExcludedUser(data);
		break;
	case 'addExcludeUser':
		addExcludeUser(data);
		break;
	case 'removeExcludedUser':
		removeExcludedUser(data);
		break;
	case 'searchUser':
		searchUser(data);
		break;
	case 'getChannels':
		$.response.contentType = "application/json";
		$.response.setBody(JSON.stringify(library.findAllChannels()));
		$.response.status = $.net.http.OK;
		break;
	}
}

if ($.request.method === $.net.http.POST) {
	switchPOST();
} else {
	$.response.setBody("Unsupport Method : " + $.request.method);
	$.response.status = $.net.http.OK;
}