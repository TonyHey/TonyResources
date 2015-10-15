function parsePolygon(param){
    var s = "";
    
    for (var i = 0; i < param.length; i++) {
        s += param[i] + ", ";
    }
    s += param[0];
    return s;
}
function parseAllPolygons(polys) {
    var newPolys = [];
    for (var i = 0; i < polys.length; i++){
        if (polys[i].length >= 3){
            newPolys.push(parsePolygon(polys[i]));
        }
//        polys[i] = parsePolygon(polys[i]);
    }
    return newPolys;
}
function parseMultiPolygon(polys){
    var s = "((" + polys[0] + "))";
    
    for (var i = 1; i < polys.length; i++){
        s += ", ((" + polys[i] + "))";
    }
    
    return s;
}

function allPolygonsValid(polys){
    var conn;
    var pstmt;
    var rset;
    var valid = true;
    var query;
    
    if (!polys instanceof Array){
        return false;
    }
    try {
        conn = $.db.getConnection();
        for (var i = 0; i < polys.length; i++){
            query = 'SELECT NEW ST_Polygon( \'Polygon(( ' + polys[i] + ' ))\' ).ST_IsValid() FROM dummy';
            pstmt = conn.prepareStatement(query);
            rset = pstmt.executeQuery();
            if (!(rset.next() && rset.getInteger(1))){
                valid = false;
                break;
            }
        }
    } catch (error){
        $.trace.error("Polygon validation failed: " + error.toString());
        $.trace.error("Error sql: " + query);
    } finally {
        if (pstmt){
            pstmt.close();
        }
        if (conn){
            conn.commit();
            conn.close();
        }
    }
    
    return valid;
}

function updateHeaderSrchEngMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var sourceIn = 'HANA';
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_SRCH_ENG"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderSourceAnalysisMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var sourceIn = 'HANA';
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_SOURCE_ANALYSIS"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderAlertReportMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var sourceIn = 'HANA';
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_ALERT_REPORT"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderVisitsMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr, sourceIn){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_VISITS"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderUniqueVisMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr, sourceIn){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_UNIQUE_VIS"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderPagesMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr, sourceIn){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_PAGES"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderHitsMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr, sourceIn){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_HITS"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
	}

function updateHeaderBandMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr, sourceIn){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_BAND"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
}

function updateHeaderUsersAnalMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var sourceIn = 'HANA';
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_USERS_ANAL"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	                temp["totalVisit"] = "Total Visit for Top 10 users";
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
}

function updateHeaderPagesAnalMulti(afterDate, beforeDate, serverIP, polysArrStr, markersStr){
    var conn;
    var pstmt;
    var rset;
    var pc;
    var sourceIn = 'HANA';
    var polysArr = JSON.parse(polysArrStr);
    var polysStr = '';
    var parsedPolys = [];
    var businessData = [];
    var query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_PAGES_ANAL"(?, ?, ?, ?, ?, ?, ?)';
    
    if ( polysArr.length > 0){
        parsedPolys = parseAllPolygons(polysArr);
    }
    
    if (parsedPolys.length > 0){
    	polysStr = 'MultiPolygon(' + parseMultiPolygon(parsedPolys) + ')';
    }
	
	try {
		conn = $.db.getConnection();
		pc = conn.prepareCall(query);
	        
		pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, polysStr);
	    pc.setString(5, markersStr);
	    pc.setString(6, sourceIn);

	        if (pc.execute()) {
	        	rset = pc.getResultSet();
	        	while (rset.next()){
	        		var temp = {};
	              
	        		temp["Scale"] = setScale(rset.getString(1));
	                temp["Total"] = setValue(rset.getString(1));
	                temp["totalVisit"] = "Total Visit for Top 10 Pages";
	        		businessData.push(temp);
	            }
	        }
	    } catch (error){
	        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	    } finally {
	        if (pstmt){
	            pstmt.close();
	        }
	        if (conn){
	            conn.commit();
	            conn.close();
	        }  
	    }
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(businessData));
}

var isValidPolygon = function(points){
	var conn = $.db.getConnection();
    var pstmt;
    var rset;
    var valid = false;
    var query = 'SELECT NEW ST_Polygon( \'Polygon(( ' + points + ' ))\' ).ST_IsValid() FROM dummy';
    
    try {
        conn = $.db.getConnection();
        pstmt = conn.prepareStatement(query);
        rset = pstmt.executeQuery();
        if (rset.next() && rset.getInteger(1)){
            pstmt.close();
            conn.commit();
            conn.close();
            valid = true;
        }
    } catch (error){
        $.trace.error("Polygon validation error");
        $.trace.error("Error Query: " + query);
    }
    return valid;
};

function setScale(total) {
    var scaleTmp;
    if (total > 999999999)
                   scaleTmp = "B";
    else if (total > 999999)
                   scaleTmp = "M";
    else if (total > 9999)
                   scaleTmp = "K";
    else
                   scaleTmp = "";
    return scaleTmp;
}

function setValue(total) {
    var totalTmp;
    if (total > 999999999)
                   totalTmp = parseFloat(Math.round(total) / 1000000000).toFixed(3);
    else if (total > 999999)
                   totalTmp = parseFloat(Math.round(total) / 1000000).toFixed(3);
    else if (total > 9999)
                   totalTmp = parseFloat(Math.round(total) / 1000).toFixed(3);
    else
                   totalTmp = total;
    return totalTmp;
}

var command = $.request.parameters.get("cmd");
var afterDate = $.request.parameters.get("after");
var beforeDate = $.request.parameters.get("before");
var serverIP = $.request.parameters.get("serverIP");
var s = $.request.parameters.get("s");
var polysArrStr = $.request.parameters.get("polysArrStr");
var markersStr = $.request.parameters.get("markersStr");
var sourceIn = $.request.parameters.get("sourceIn");

if (command) {
    switch (command) {
case "updateHeaderSrchEngMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderSrchEngMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderSourceAnalysisMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderSourceAnalysisMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderAlertReportMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderAlertReportMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderUniqueVisMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderUniqueVisMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderVisitsMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderVisitsMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderPagesMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderPagesMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderHitsMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderHitsMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderBandMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderBandMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderUsersAnalMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderUsersAnalMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
case "updateHeaderPagesAnalMulti":
	   if (afterDate && beforeDate && serverIP) {
		   updateHeaderPagesAnalMulti(afterDate,beforeDate,serverIP, polysArrStr, markersStr, sourceIn);
	   }else {
		   $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		   $.response.setBody("Invalid Arguments: " + command);
	   }
break;
    default:
          $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
          $.response.setBody("Invalid Command: " + command);
    }
    
}