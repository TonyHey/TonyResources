function getStream(afterDate, beforeDate, dimension, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HANA";
    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM" (?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, dimension);
        pc.setString(4, serverIP);
        pc.setString(5, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()){
        		var temp = {};
              
        		temp["Date"] = Date.UTC(rset.getString(1).substring(0,4),rset.getString(1).substring(4,6), rset.getString(1).substring(6,8));
        		temp["Days"] = rset.getString(1).substring(0,4) + "/" + rset.getString(1).substring(4,6) + "/" + rset.getString(1).substring(6,8);
        		temp["Year"] = rset.getString(1).substring(0,4);
        		temp["Month"] = getMonthString(rset.getString(1).substring(4,6));
        		temp["Day"] = rset.getString(1).substring(6,8);
        		temp["Unique Visitors"] = rset.getDecimal(3);
        		temp["Visits"] = rset.getDecimal(2); 
        		temp["Pages"] = rset.getDecimal(4);
        		temp["Hits"] = rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6); 
        		businessData.push(temp);
            }
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
function getStreamHadoop(afterDate, beforeDate, dimension, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HADOOP";
    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM" (?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, dimension);
        pc.setString(4, serverIP);
        pc.setString(5, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()){
        		var temp = {};
              
        		temp["Date"] = Date.UTC(rset.getString(1).substring(0,4),rset.getString(1).substring(4,6), rset.getString(1).substring(6,8));
        		temp["Days"] = rset.getString(1).substring(0,4) + "/" + rset.getString(1).substring(4,6) + "/" + rset.getString(1).substring(6,8);
        		temp["Year"] = rset.getString(1).substring(0,4);
        		temp["Month"] = getMonthString(rset.getString(1).substring(4,6));
        		temp["Day"] = rset.getString(1).substring(6,8);
        		temp["Unique Visitors"] = rset.getDecimal(3);
        		temp["Visits"] = rset.getDecimal(2); 
        		temp["Pages"] = rset.getDecimal(4);
        		temp["Hits"] = rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6); 
        		businessData.push(temp);
            }
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamWeek(afterDate, beforeDate, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HANA";

    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);
        
        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
         
        		temp["Week"] = "CW"+rset.getString(1).substring(4,6);
        		temp["Unique Visitors"] = rset.getDecimal(3);
        		temp["Visits"] = rset.getDecimal(2);
        		temp["Pages"] = rset.getDecimal(4);
        		temp["Hits"] = rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
function getStreamWeekHadoop(afterDate, beforeDate, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HADOOP";

    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);
        
        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
         
        		temp["Week"] = "CW"+rset.getString(1).substring(4,6);
        		temp["Unique Visitors"] = rset.getDecimal(3);
        		temp["Visits"] = rset.getDecimal(2);
        		temp["Pages"] = rset.getDecimal(4);
        		temp["Hits"] = rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountStreamW(afterDate, beforeDate, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HANA";
    var temp = {"Unique": 0, "Visits": 0, "Pages": 0, "Hits":0, "Bandwidth": 0};
    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
//    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_WEEK" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection(); 

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		temp["Unique"] += rset.getDecimal(3);
        		temp["Visits"] += rset.getDecimal(2);
        		temp["Pages"] += rset.getDecimal(4);
        		temp["Hits"] += rset.getDecimal(5);
        		temp["Bandwidth"] += rset.getDecimal(6);        		
        	}
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
function getCountStreamWHadoop(afterDate, beforeDate, serverIP)  {
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HADOOP";
    var temp = {"Unique": 0, "Visits": 0, "Pages": 0, "Hits":0, "Bandwidth": 0};
    var query = "";
    var pc;
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		temp["Unique"] += rset.getDecimal(3);
        		temp["Visits"] += rset.getDecimal(2);
        		temp["Pages"] += rset.getDecimal(4);
        		temp["Hits"] += rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6);        		
        	}
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
function getCountStream(afterDate, beforeDate,dimension, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HANA";
    var query = "";
    var pc;
    var temp = {"Unique": 0, "Visits": 0, "Pages": 0, "Hits":0, "Bandwidth": 0};
    
    try {
//        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM" (?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, dimension);
        pc.setString(4, serverIP);
        pc.setString(5, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		temp["Unique"] += rset.getDecimal(3);
        		temp["Visits"] += rset.getDecimal(2);
        		temp["Pages"] += rset.getDecimal(4);
        		temp["Hits"] += rset.getDecimal(5);
        		temp["Bandwidth"] += rset.getDecimal(6);        		
        	}
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
function getCountStreamHadoop(afterDate, beforeDate, dimension, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sourceIn = "HADOOP";
    var temp = {"Unique": 0, "Visits": 0, "Pages": 0, "Hits":0, "Bandwidth": 0};
    var query = "";
    var pc;
    
    try {
//        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_STREAM_W" (?, ?, ?, ?, ?)';
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM" (?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, dimension);
        pc.setString(4, serverIP);
        pc.setString(5, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		temp["Unique"] += rset.getDecimal(3);
        		temp["Visits"] += rset.getDecimal(2);
        		temp["Pages"] += rset.getDecimal(4);
        		temp["Hits"] += rset.getDecimal(5);
        		temp["Bandwidth"] = rset.getDecimal(6);        		
        	}
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}
//RF - Get total visits
function getTotalStream(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    
    var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_STREAM" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getDecimal(1);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}



function getSourceAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    
    var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SOURCE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Browser"] = rset.getString(2);
        		temp["Access"] = rset.getDecimal(3);
        		temp["Percent"] = (Math.ceil((rset.getFloat(4) * 100) * 100)/100);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}


function getTileSourceAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
	var data = [];

	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_SOURCE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};	
        		temp["Browser"] = rset.getString(1) + " (2 Months)";
        		temp["Access"] = setValue(rset.getDecimal(2));
        		temp["Scale"] = setScale(rset.getDecimal(2));
        		data.push(temp);
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
    $.response.setBody(JSON.stringify(data));
}

function getTotalTileSourceAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
	var data = [];

	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_TILE_SOURCE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};		
        		temp["Browser"] = "Source in total (2 Months)";
        		temp["Access"] = rset.getDecimal(1);
        		temp["Scale"] = setScale(rset.getDecimal(1));
        		data.push(temp);
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
    $.response.setBody(JSON.stringify(data));

}


//RF - Get the total visits for the Source Analysis
function getTotalSourceAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    
    var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_SOURCE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getDecimal(1);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountSourceAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	var sum = 0;
	var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_SOURCE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountAlertReport(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	var sum = 0;
	var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_ALERT_REPORT" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getSearchEngineAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SEARCH_ENGINE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["SearchEngine"] = rset.getString(2);
        		temp["Access"] = rset.getDecimal(3);
        		temp["Percent"] = (Math.ceil((rset.getFloat(5) * 100) * 100)/100);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

//RF
function getTotalSearchEngineAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_SEARCH_ENGINE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getDecimal(1);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountSearchEngineAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	var sum = 0;
	var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_SEARCH_ENGINE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserDemographicAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_DEMO_GRAPHIC_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["AgeRange"] = rset.getString(2);
        		temp["Access"] = rset.getDecimal(3);
        		temp["Percent"] = (Math.ceil((rset.getFloat(4) * 100) * 100)/100);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountUserDemographicAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	var sum = 0;
	var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_USER_DEMO_GRAPHIC_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}


function getTotalUserDemographicAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_USER_DEMO_GRAPHIC_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getString(1);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserGenderAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_GENDER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		var sex = rset.getString(2);
        		if (sex == 'F')
        			temp["Gender"] = 'Female';
        		if (sex == 'M')
        			temp["Gender"] = 'Male';
        		if (sex == 'U')
        			temp["Gender"] = 'Unknown';
        		temp["Access"] = rset.getDecimal(3);
        		temp["Percent"] = (Math.ceil((rset.getFloat(4) * 100) * 100)/100);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserNavigationalAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_NAVIGATIONAL_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["User"] = rset.getString(2);
        		temp["Visits"] = rset.getDecimal(4);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getPageNavigationalAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_PAGE_NAVIGATIONAL_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Page"] = rset.getString(2);
        		temp["Visits"] = rset.getDecimal(3);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}


function getCountUserNavigationalAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_USER_NAVIGATIONAL_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	var temp = {};
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getCountPagNavigationalAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_COUNT_PAG_NAVIGATIONAL_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	var temp = {};
        	temp["Total"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getTotalUserNavigationalAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_USER_NAVIGATIONAL_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(1);
        	}
        	var temp = {};
        	temp["Access"] = sum;
        	businessData.push(temp);
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserDemogMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_DEMOG_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Age"] = rset.getString(6);
        		temp["City"] = rset.getString(3);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(1);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(7);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserDemogServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_DEMOG_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);	
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["Age"] = rset.getString(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserGenderMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_GENDER_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Gender"] = rset.getString(1);
        		temp["City"] = rset.getString(2);
        		temp["Region"] = rset.getString(3);
        		temp["Country"] = rset.getString(4);
        		temp["Latitude"] = rset.getDecimal(5);
        		temp["Longitude"] = rset.getDecimal(6);
        		temp["SpatialCount"] = rset.getDecimal(7);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getUserGenderServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_GENDER_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["Gender"] = rset.getString(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getSourceServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SOURCE_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);	
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["Browser"] = rset.getString(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getAlertServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALERT_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["AlertType"] = rset.getString(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamUVMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_UVMAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	if (pc.getMoreResults()) {
        		rset = pc.getResultSet();
            	while (rset.next()) {
            		var temp = {};
            		temp["City"] = rset.getString(1);
            		temp["Region"] = rset.getString(2);
            		temp["Country"] = rset.getString(3);
            		temp["Latitude"] = rset.getDecimal(4);
            		temp["Longitude"] = rset.getDecimal(5);
            		temp["SpatialCount"] = rset.getDecimal(6);
            		businessData.push(temp);
            	}
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamUVMapAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_UVMAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamUVServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_UVSERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	if(pc.getMoreResults()) {
        		rset = pc.getResultSet();
        		while (rset.next()) {
            		var temp = {};
            		temp["Server_IP"] = rset.getString(1);
            		temp["Server_Name"] = rset.getString(2);
            		temp["Latitude"] = rset.getDecimal(3);
            		temp["Longitude"] = rset.getDecimal(4);
            		temp["SpatialCount"] = rset.getString(5);
            		businessData.push(temp);
            	}

        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamUVServerAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_UVSERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamVisMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_VIS_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamVisMapAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_VIS_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamVisServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_VIS_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamVisServerAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_VIS_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamPagMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_PAG_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamPagMapAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_PAG_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamPagServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_PAG_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamPagServerAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_PAG_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamHitsMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_HITS_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamHitsMapAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_HITS_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamHitsServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_HITS_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamHitsServerAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_HITS_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamBandMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_BAND_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamBandMapAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_BAND_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["City"] = rset.getString(1);
        		temp["Region"] = rset.getString(2);
        		temp["Country"] = rset.getString(3);
        		temp["Latitude"] = rset.getDecimal(4);
        		temp["Longitude"] = rset.getDecimal(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamBandServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_BAND_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getStreamBandServerAnalysisHadoop(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_STREAM_BAND_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getString(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getuserNavUsrMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_NAV_USR_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Latitude"] = rset.getDecimal(1);
        		temp["Longitude"] = rset.getDecimal(2);
        		temp["City"] = rset.getString(3);
        		temp["Region"] = rset.getString(4);
        		temp["Country"] = rset.getString(5);
        		temp["User"] = rset.getString(6);
        		temp["SpatialCount"] = rset.getDecimal(7);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getuserNavUsrServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_NAV_USR_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getDecimal(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}


function getuserNavPagMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_NAV_PAG_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Latitude"] = rset.getDecimal(1);
        		temp["Longitude"] = rset.getDecimal(2);
        		temp["City"] = rset.getString(3);
        		temp["Region"] = rset.getString(4);
        		temp["Country"] = rset.getString(5);
        		temp["Url"] = rset.getString(6);
        		temp["SpatialCount"] = rset.getDecimal(7);	
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getuserNavPagServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_USER_NAV_PAG_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);
        		temp["SpatialCount"] = rset.getDecimal(5);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getSrchEngMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SRCH_ENG_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["OriginSite"] = rset.getString(1);
        		temp["City"] = rset.getString(2);
        		temp["Region"] = rset.getString(3);
        		temp["Country"] = rset.getString(4);
        		temp["Latitude"] = rset.getDecimal(5);
        		temp["Longitude"] = rset.getDecimal(6);
        		temp["SpatialCount"] = rset.getDecimal(7);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getSrchEngServerAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SRCH_ENG_SERVER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Server_IP"] = rset.getString(1);
        		temp["Server_Name"] = rset.getString(2);
        		temp["Latitude"] = rset.getDecimal(3);
        		temp["Longitude"] = rset.getDecimal(4);	
        		temp["Site"] = rset.getString(5);
        		temp["SpatialCount"] = rset.getDecimal(6);
        		businessData.push(temp);
        	}
        }
        data.serverData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getSourceMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_SOURCE_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Browser"] = rset.getString(1);
        		temp["City"] = rset.getString(2);
        		temp["Region"] = rset.getString(3);
        		temp["Country"] = rset.getString(4);
        		temp["Latitude"] = rset.getDecimal(5);
        		temp["Longitude"] = rset.getDecimal(6);
        		temp["SpatialCount"] = rset.getDecimal(7);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}


function getAlertMapAnalysis(afterDate, beforeData, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALERT_MAP_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["AlertType"] = rset.getString(9);
        		temp["City"] = rset.getString(2);
        		temp["Region"] = rset.getString(3);
        		temp["Country"] = rset.getString(4);
        		temp["Latitude"] = rset.getDecimal(7);
        		temp["Longitude"] = rset.getDecimal(8);
        		temp["SpatialCount"] = rset.getDecimal(10);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
    $.response.setBody(JSON.stringify(data));
}

function getKpiEngineAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
    var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_ENGINE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getTileOriginatingSite(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
	var data = [];
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_ORIGINATING_SITE" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		temp["Scale"] = setScale(rset.getDecimal(1));
        		temp["Total"] = setValue(rset.getDecimal(1));
        		temp["Title"] = "Number of sites(2 Months)";
        		data.push(temp);
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
	$.response.setBody(JSON.stringify(data));
}

function getKpiSourceAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
    var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_SOURCE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getKpiAgeAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
    var businessData = [];
    var data = {};
    var sum = 0;
    var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_AGE_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getTileAgeAnalysis(afterDate, beforeDate){
	var conn = null;
    var pstmt = null;
    var rset = null;
	var data = [];

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_AGE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Scale"] = setScale(rset.getDecimal(2));
        		temp["Total"] = setValue(rset.getDecimal(2));
        		temp["Title"] = "Age: " + rset.getString(1) + " (2 Months)";
        		data.push(temp);
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
	$.response.setBody(JSON.stringify(data));
}


function getKpiGenderAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
    var pstmt = null;
    var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_GENDER_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getTileGenderAnalysis(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
//	var businessData = [];
	var data = [];

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_GENDER_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		switch (rset.getString(1)){
        		case "M":
        			temp = {
        				"Total" : setValue(rset.getDecimal(2)),
        				"Title" : "Gender: Male (2 Months)",
        				"Scale" : setScale(rset.getDecimal(2))
					};
        			data.push(temp);
        			break;
        		case "F":
        			temp = {
        				"Total" : setValue(rset.getDecimal(2)),
        				"Title" : "Gender: Female (2 Months)",
        				"Scale" : setScale(rset.getDecimal(2))
					};
        			data.push(temp);
        			break;
        		case "U":
        			temp = {
        				"Total" : setValue(rset.getDecimal(2)),
        				"Title" : "Gender: Unknown (2 Mon)",
        				"Scale" : setScale(rset.getDecimal(2))
					};
        			data.push(temp);
        			break;
        		}
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
	$.response.setBody(JSON.stringify(data));
}

function getKpiNavUsrAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_NAV_USR_ANALYSIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	temp["totalVisit"] = "Total Visit for Top 10 users";
        	businessData.push(temp);
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

function getTileNavUsrAnalysis(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = [];
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_NAV_USR_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	temp["Title"] = "Top10 user's Visit (2 Mon)";
        	data.push(temp);
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
	$.response.setBody(JSON.stringify(data));
}

function getKpiNavPagAnalysis(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
//        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_NAV_PAG_ANALYSIS" (?, ?, ?, ?, ?)';
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.polygon::UPDATE_HEADER_PAGES_ANAL" (?, ?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
//        pc.setString(1, afterDate);
//        pc.setString(2, beforeDate);
//        pc.setString(3, serverIP);
//        pc.setString(4, sourceIn);
        
        pc.setString(1, afterDate);
	    pc.setString(2, beforeDate);
	    pc.setString(3, serverIP);
	    pc.setString(4, '');
	    pc.setString(5, '');
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
//        	while (rset.next()) {
//        		sum = sum + rset.getDecimal(2);
//        	}
//        	temp["Scale"] = setScale(sum);
//        	temp["Total"] = setValue(sum);
//        	temp["totalVisit"] = "Total Visit for Top 10 pages";
//        	businessData.push(temp);
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

function getTileNavPagAnalysis(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = [];
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_NAV_PAG_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	temp["Title"] = "Top10 page's Visit (2 Mon)";
        	data.push(temp);
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
	$.response.setBody(JSON.stringify(data));
}


function getKpiUV(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    
    var sourceIn = "HANA";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_UV" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiUVHadoop(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    
    var sourceIn = "HADOOP";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_UV" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiVis(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_VIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiVisHadoop(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_VIS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiPages(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_PAGES" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiPagesHadoop(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_PAGES" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiHits(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_HITS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getKpiHitsHadoop(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_HITS" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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
function getKpiBand(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_BAND" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getKpiBandHadoop(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HADOOP";
    
    try {
        query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_BAND" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getTileTimeSeries(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
//	var businessData = [];
	var data = [];
	var sum = 0;
	var temp = {};
    var sourceIn = "HANA";
    	
	var query = "";
    var pc;
    
    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_TIME_SERIES" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		for(var i=1; i < 6; i++){
        			switch (i){
        			case 1:
        				temp = {
        					"Total" : setValue(rset.getDecimal(1)),
        					"Title" : "Unique Visitors (2 Months)",
        					"Scale" : setScale(rset.getDecimal(1))
        				};
        				data.push(temp);
        				break;
        			case 2:
        				temp = {
        					"Total" : setValue(rset.getDecimal(2)),
        					"Title" : "Visits (2 Months)",
        					"Scale" : setScale(rset.getDecimal(2))
        				};
        				data.push(temp);
        				break;
        			case 3:
        				temp = {
        					"Total" : setValue(rset.getDecimal(3)),
        					"Title" : "Pages Viewed (2 Months)",
        					"Scale" : setScale(rset.getDecimal(3))
        				};
        				data.push(temp);
        				break;
        			case 4:
        				temp = {
        					"Total" : setValue(rset.getDecimal(4)),
        					"Title" : "Hits (2 Months)",
        					"Scale" : setScale(rset.getDecimal(4))
        				};
        				data.push(temp);
        				break;
        			case 5:
        				temp = {
        					"Total" : setValue(rset.getDecimal(5)),
        					"Title" : "Bandwith (2 Months)",
        					"Scale" : setScale(rset.getDecimal(5))
        				};
        				data.push(temp);
        				break;
        			}
        		}
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
    $.response.setBody(JSON.stringify(data));

}
function getTileTimeSeriesHadoop(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
//	var businessData = [];
	var data = [];
	var sum = 0;
	var temp = {};
    var sourceIn = "HADOOP";
    	
	var query = "";
    var pc;
    
    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_TIME_SERIES" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		for(var i=1; i < 6; i++){
        			switch (i){
        			case 1:
        				temp = {
        					"Total" : setValue(rset.getDecimal(1)),
        					"Title" : "Unique Visitors (2 Months)",
        					"Scale" : setScale(rset.getDecimal(1))
        				};
        				data.push(temp);
        				break;
        			case 2:
        				temp = {
        					"Total" : setValue(rset.getDecimal(2)),
        					"Title" : "Visits (2 Months)",
        					"Scale" : setScale(rset.getDecimal(2))
        				};
        				data.push(temp);
        				break;
        			case 3:
        				temp = {
        					"Total" : setValue(rset.getDecimal(3)),
        					"Title" : "Pages Viewed (2 Months)",
        					"Scale" : setScale(rset.getDecimal(3))
        				};
        				data.push(temp);
        				break;
        			case 4:
        				temp = {
        					"Total" : setValue(rset.getDecimal(4)),
        					"Title" : "Hits (2 Months)",
        					"Scale" : setScale(rset.getDecimal(4))
        				};
        				data.push(temp);
        				break;
        			case 5:
        				temp = {
        					"Total" : setValue(rset.getDecimal(5)),
        					"Title" : "Bandwith (2 Months)",
        					"Scale" : setScale(rset.getDecimal(5))
        				};
        				data.push(temp);
        				break;
        			}
        		}
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
    $.response.setBody(JSON.stringify(data));

}
function getKpiAlertReport(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_KPI_ALERT_REPORT" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(3);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	businessData.push(temp);
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

function getTileAlertReport(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = [];
	var sum = 0;
	var temp = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TILE_ALERT_REPORT" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		sum = sum + rset.getDecimal(2);
        	}
        	temp["Scale"] = setScale(sum);
        	temp["Total"] = setValue(sum);
        	temp["Title"] = "Alert (2 Months)";
        	data.push(temp);
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
	$.response.setBody(JSON.stringify(data));
}


function getAllServerIP(){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = {};
	var businessData = [];
    var sourceIn = "HANA";
	var query = "";
    var pc;
    
    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALL_SERVER_IP" (?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["ServerName"] = rset.getString(1);
        		temp["ServerIP"] = rset.getString(2);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}
function getAllServerIPHadoop(){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = {};
	var businessData = [];
    var sourceIn = "HADOOP";
	var query = "";
    var pc;
    
    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALL_SERVER_IP" (?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["ServerName"] = rset.getString(1);
        		temp["ServerIP"] = rset.getString(2);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}
function getAlertServerIP(){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = {};
	var businessData = [];

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALERT_SERVER_IP" (?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["ServerName"] = rset.getString(1);
        		temp["ServerIP"] = rset.getString(2);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}

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

function getActualAndPredictive (afterDate, beforeDate, dimension, serverIP, forecast, kpi) {

	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = {};
	var businessData = [];
	var tempDays = null;
	var tempMonth = null;
	var tempWeek = null;

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "_SYS_BIC"."sap.rds-bdi.stream.hanaviewext/CA_TS_PRED_INFO/proc" (?, ?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, serverIP);
        pc.setString(2, kpi);
        pc.setString(3, dimension);
        pc.setString(4, afterDate);
        pc.setString(5, beforeDate);
        pc.setString(6, forecast);
        // pc.setString(7, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Date"] = Date.UTC(rset.getString(4).substring(0,4),rset.getString(4).substring(5,7), rset.getString(4).substring(8,10));
        		tempDays = rset.getString(4).substring(0,4) + "/" + rset.getString(4).substring(5,7) + "/" + rset.getString(4).substring(8,10);
        		tempMonth = getMonthString(rset.getString(4).substring(5,7));
        		tempWeek = rset.getString(4).substring(5,7);
        		if (tempDays != "MORE/RO/S")
        		{
        			temp["Days"] = tempDays;
        		}
        		else {
        			temp["Days"] = "Not enough actual data for predictive calculation";
        		}
		
        		if(tempMonth == "Invalid month"){
        			temp["Month"] = "Not enough actual data for predictive calculation";
        		}
        		else{	
        			temp["Month"] = rset.getString(4).substring(0,4)+"/"+rset.getString(4).substring(5,7);
        		}
		
        		if(tempWeek != "RO"){
        			temp["Week"] = rset.getString(4).substring(0,4)+"/"+"CW"+tempWeek;
        		}
        		else{
        			temp["Week"] = "Not enough actual data for predictive calculation";
        		}
		
        		temp["Year"] = rset.getString(4).substring(0,4);
        		temp["Day"] = rset.getString(4).substring(8,10);
        		temp["ActualData"] = rset.getString(2);
        		temp["PredictiveData"] = rset.getString(3);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
} 

function getActualAndPredictiveHadoop(afterDate, beforeDate, dimension, serverIP, forecast, kpi) {

	var conn = null;
	var pstmt = null;
	var rset = null;
	var data = {};
	var businessData = [];
	var tempDays = null;
	var tempMonth = null;
	var tempWeek = null;

	var query = "";
    var pc;
    var sourceIn = "HADOOP";

    try {
    	query = 'call "_SYS_BIC"."sap.rds-bdi.stream.hanaviewext/CA_TS_PRED_INFO_HIVE/proc" (?, ?, ?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, serverIP);
        pc.setString(2, kpi);
        pc.setString(3, dimension);
        pc.setString(4, afterDate);
        pc.setString(5, beforeDate);
        pc.setString(6, forecast);
        //pc.setString(7, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Date"] = Date.UTC(rset.getString(4).substring(0,4),rset.getString(4).substring(5,7), rset.getString(4).substring(8,10));
        		tempDays = rset.getString(4).substring(0,4) + "/" + rset.getString(4).substring(5,7) + "/" + rset.getString(4).substring(8,10);
        		tempMonth = getMonthString(rset.getString(4).substring(5,7));
        		tempWeek = rset.getString(4).substring(5,7);
        		if (tempDays != "MORE/RO/S")
        		{
        			temp["Days"] = tempDays;
        		}
        		else {
        			temp["Days"] = "Not enough actual data for predictive calculation";
        		}
		
        		if(tempMonth == "Invalid month"){
        			temp["Month"] = "Not enough actual data for predictive calculation";
        		}
        		else{	
        			temp["Month"] = rset.getString(4).substring(0,4)+"/"+rset.getString(4).substring(5,7);
        		}
		
        		if(tempWeek != "RO"){
        			temp["Week"] = rset.getString(4).substring(0,4)+"/"+"CW"+tempWeek;
        		}
        		else{
        			temp["Week"] = "Not enough actual data for predictive calculation";
        		}
		
        		temp["Year"] = rset.getString(4).substring(0,4);
        		temp["Day"] = rset.getString(4).substring(8,10);
        		temp["ActualData"] = rset.getString(2);
        		temp["PredictiveData"] = rset.getString(3);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}

function getTotalActualPredictiveAnalysis(afterDate, beforeDate){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_ACTUAL_PREDICTIVE_ANALYSIS" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getDecimal(2);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}

function getTotalAlertReport(afterDate, beforeDate){
	var conn = null;
	var pstmt = null; 
	var rset = null;
	var businessData = [];
	var data = {};

	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_TOTAL_ALERT_REPORT" (?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();
        	while (rset.next()) {
        		var temp = {};
        		temp["Access"] = rset.getDecimal(1);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}

function getAlertReport(afterDate, beforeDate, serverIP){
	var conn = null;
	var pstmt = null;
	var rset = null;
	var businessData = [];
	var data = {};
	
	var query = "";
    var pc;
    var sourceIn = "HANA";

    try {
    	query = 'call "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.procedures.rep::GET_ALERT_REPORT" (?, ?, ?, ?, ?)';
        conn = $.db.getConnection();

        pc = conn.prepareCall(query);
        pc.setString(1, afterDate);
        pc.setString(2, beforeDate);
        pc.setString(3, serverIP);
        pc.setString(4, sourceIn);

        if (pc.execute()) {
        	rset = pc.getResultSet();	
        	while (rset.next()) {
        		var temp = {};
		
        		temp["AlertType"] = rset.getString(1);
        		temp["Access"] = rset.getDecimal(2);
        		temp["Percent"] = (Math.ceil((rset.getFloat(4) * 100) * 100)/100);
        		businessData.push(temp);
        	}
        }
        data.businessData = businessData;
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
	$.response.setBody(JSON.stringify(data));
}


var getInfoFromSession = function(){
	var result = {
			user: {
				name: $.session.getUsername(),
				lang: $.session.language,
				invoc: $.session.getInvocationCount(),
			}
	};    
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(result));

	return result;
};


var command = $.request.parameters.get("cmd");
var afterDate = $.request.parameters.get("after");
var beforeDate = $.request.parameters.get("before");
var dimension = $.request.parameters.get("dimen");
var serverIP = $.request.parameters.get("serverIP");
var forecast = $.request.parameters.get("forecast");
var kpi = $.request.parameters.get("kpi");

function getMonthString(num)
{
	var month;    
	switch(num)
	{
	case '01':
		month="January";
		break;
	case '02':
		month="February";
		break;
	case '03':
		month="March";
		break;
	case '04':
		month="April";
		break;
	case '05':
		month="May";
		break;
	case '06':
		month="June";
		break;
	case '07':
		month="July";
		break;
	case '08':
		month="August";
		break;
	case '09':
		month="September";
		break;
	case '10':
		month="October";
		break;
	case '11':
		month="November";
		break;
	case '12':
		month="December";
		break;
	default:
		month="Invalid month";
	}
	return month;
}


if (command) {
	switch (command) {
	case "getStream":
		if (afterDate && beforeDate && dimension && serverIP)
			getStream(afterDate,beforeDate,dimension, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamHadoop":
		if (afterDate && beforeDate && dimension && serverIP)
			getStreamHadoop(afterDate,beforeDate,dimension, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamWeek":
		if (afterDate && beforeDate && serverIP)
			getStreamWeek(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamWeekHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamWeekHadoop(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountStream":
		if (afterDate && beforeDate && dimension &&  serverIP)
			getCountStream(afterDate,beforeDate, dimension, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountStreamHadoop":
		if (afterDate && beforeDate && dimension &&  serverIP)
			getCountStreamHadoop(afterDate,beforeDate, dimension, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getSourceAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSourceAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountSourceAnalysis":
		if (afterDate && beforeDate && serverIP)
			getCountSourceAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileSourceAnalysis":
		if (afterDate && beforeDate)
			getTileSourceAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalTileSourceAnalysis":
		if (afterDate && beforeDate)
			getTotalTileSourceAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "searchEngineAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSearchEngineAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "searchCountEngineAnalysis":
		if (afterDate && beforeDate && serverIP)
			getCountSearchEngineAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountUserDemographicAnalysis":
		if (afterDate && beforeDate && serverIP)
			getCountUserDemographicAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "userNavigationalAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserNavigationalAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "pageNavigationalAnalysis":
		if (afterDate && beforeDate && serverIP)
			getPageNavigationalAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountUserNavigationalAnalysis":
		if (afterDate && beforeDate && serverIP)
			getCountUserNavigationalAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;    
	case "getCountPagNavigationalAnalysis":
		if (afterDate && beforeDate && serverIP)
			getCountPagNavigationalAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;  
	case "getUserDemographicAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserDemographicAnalysis(afterDate,beforeDate, serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalSourceAnalysis":
		if (afterDate && beforeDate)
			getTotalSourceAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalStream":
		if (afterDate && beforeDate)
			getTotalStream(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalSearchEngineAnalysis":
		if (afterDate && beforeDate)
			getTotalSearchEngineAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalUserDemographicAnalysis":
		if (afterDate && beforeDate)
			getTotalUserDemographicAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalUserNavigationalAnalysis":
		if (afterDate && beforeDate)
			getTotalUserNavigationalAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTotalActualPredictiveAnalysis":
		if (afterDate && beforeDate)
			getTotalActualPredictiveAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;  
	case "getTotalAlertReport":
		if (afterDate && beforeDate)
			getTotalAlertReport(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;  
	case "getUserGenderAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserGenderAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getUserDemogMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserDemogMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getUserGenderMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserGenderMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamUVMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamUVMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamUVMapAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamUVMapAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamVisMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamVisMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamVisMapAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamVisMapAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamPagMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamPagMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamPagMapAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamPagMapAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamHitsMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamHitsMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamHitsMapAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamHitsMapAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamBandMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamBandMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamBandMapAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamBandMapAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getuserNavUsrMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getuserNavUsrMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;  
	case "getuserNavPagMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getuserNavPagMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break; 
	case "getSrchEngMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSrchEngMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;    
	case "getSourceMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSourceMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getActualAndPredictive":
		if (afterDate && beforeDate && dimension && serverIP && forecast && kpi)
			getActualAndPredictive(afterDate, beforeDate, dimension, serverIP, forecast, kpi);
		else{
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getActualAndPredictiveHadoop":
		if (afterDate && beforeDate && dimension && serverIP && forecast && kpi)
			getActualAndPredictiveHadoop(afterDate, beforeDate, dimension, serverIP, forecast, kpi);
		else{
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getUserDemogServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserDemogServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getUserGenderServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getUserGenderServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getSourceServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSourceServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getSrchEngServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getSrchEngServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamUVServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamUVServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;     
	case "getStreamUVServerAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamUVServerAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;     
	case "getStreamVisServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamVisServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamVisServerAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamVisServerAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamPagServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamPagServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamPagServerAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamPagServerAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamHitsServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamHitsServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamHitsServerAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamHitsServerAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamBandServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getStreamBandServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getStreamBandServerAnalysisHadoop":
		if (afterDate && beforeDate && serverIP)
			getStreamBandServerAnalysisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getuserNavUsrServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getuserNavUsrServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getuserNavPagServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getuserNavPagServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getAlertReport":
		if (afterDate && beforeDate && serverIP)
			getAlertReport(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountAlertReport":
		if (afterDate && beforeDate && serverIP)
			getCountAlertReport(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getAlertMapAnalysis":
		if (afterDate && beforeDate && serverIP)
			getAlertMapAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getAlertServerAnalysis":
		if (afterDate && beforeDate && serverIP)
			getAlertServerAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break; 
	case "getKpiEngineAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiEngineAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileOriginatingSite":
		if (afterDate && beforeDate)
			getTileOriginatingSite(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiSourceAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiSourceAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiGenderAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiGenderAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileGenderAnalysis":
		if (afterDate && beforeDate)
			getTileGenderAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiAgeAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiAgeAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileAgeAnalysis":
		if (afterDate && beforeDate)
			getTileAgeAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiAlertReport":
		if (afterDate && beforeDate && serverIP)
			getKpiAlertReport(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileAlertReport":
		if (afterDate && beforeDate)
			getTileAlertReport(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
	break;
	case "getKpiUV":
		if (afterDate && beforeDate && serverIP)
			getKpiUV(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiUVHadoop":
		if (afterDate && beforeDate && serverIP)
			getKpiUVHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiVis":
		if (afterDate && beforeDate && serverIP)
			getKpiVis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiVisHadoop":
		if (afterDate && beforeDate && serverIP)
			getKpiVisHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiPages":
		if (afterDate && beforeDate && serverIP)
			getKpiPages(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiPagesHadoop":
		if (afterDate && beforeDate && serverIP)
			getKpiPagesHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiHits":
		if (afterDate && beforeDate && serverIP)
			getKpiHits(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiHitsHadoop":
		if (afterDate && beforeDate && serverIP)
			getKpiHitsHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountStreamW":
		if (afterDate && beforeDate && serverIP)
			getCountStreamW(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getCountStreamWHadoop":
		if (afterDate && beforeDate && serverIP)
			getCountStreamWHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiBand":
		if (afterDate && beforeDate && serverIP)
			getKpiBand(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiBandHadoop":
		if (afterDate && beforeDate && serverIP)
			getKpiBandHadoop(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileTimeSeries":
		if (afterDate && beforeDate)
			getTileTimeSeries(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileTimeSeriesHadoop":
		if (afterDate && beforeDate)
			getTileTimeSeriesHadoop(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getKpiNavPagAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiNavPagAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getTileNavPagAnalysis":
		if (afterDate && beforeDate)
			getTileNavPagAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;	
	case "getKpiNavUsrAnalysis":
		if (afterDate && beforeDate && serverIP)
			getKpiNavUsrAnalysis(afterDate,beforeDate,serverIP);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
		
	case "getTileNavUsrAnalysis":
		if (afterDate && beforeDate)
			getTileNavUsrAnalysis(afterDate,beforeDate);
		else {
			$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
			$.response.setBody("Invalid Arguments: " + command);
		}
		break;
	case "getAllServerIP":
		getAllServerIP();
		break;
	case "getAllServerIPHadoop":
		getAllServerIPHadoop();
		break;
	case "getAlertServerIP":
		getAlertServerIP();
		break;
	case "getInfoFromSession":
		getInfoFromSession();
		break;
	default:
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody("Invalid Command: " + command);
	}
}
