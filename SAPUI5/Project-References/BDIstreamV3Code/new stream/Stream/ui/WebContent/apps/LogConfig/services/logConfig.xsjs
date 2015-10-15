var THREE;
function initBase64Tool() {
    if(THREE){
        return;
    }
    THREE = function() {};
    THREE.Base64 = function () {};
    THREE.Base64.base64ToIndex = function() {
        var indexOfA = "A".charCodeAt(0);
        var indexOfZ = "Z".charCodeAt(0);
        var indexOfa = "a".charCodeAt(0);
        var indexOfz = "z".charCodeAt(0);
        var indexOf0 = "0".charCodeAt(0);
        var indexOf9 = "9".charCodeAt(0);
        var indexOfSlash = "/".charCodeAt(0);
        var indexOfPlus = "+".charCodeAt(0);

        return function(index) {
            if (index < indexOfA) {
                if (index >= indexOf0) {
                    return 52 + index - indexOf0;
                }
                if (index === indexOfPlus) {
                    return 62
                }
                return 63;
            }
            if (index <= indexOfZ) {
                return index - indexOfA;
            }
            return 26 + index - indexOfa;
        };
    }();
    THREE.Base64.toArrayBuffer = function() {
        var base64ToIndex = THREE.Base64.base64ToIndex;
        return function(base64) {
            var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
            if (base64[base64.length - 1] === "=") {
                bufferLength--;
                if (base64[base64.length - 2] === "=") {
                    bufferLength--;
                }
            }
            var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(
                    arraybuffer);
            for (i = 0; i < len; i += 4) {
                encoded1 = THREE.Base64.base64ToIndexNew(base64[i]);
                encoded2 = THREE.Base64.base64ToIndexNew(base64[i + 1]);
                encoded3 = THREE.Base64.base64ToIndexNew(base64[i + 2]);
                encoded4 = THREE.Base64.base64ToIndexNew(base64[i + 3]);
                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return arraybuffer;
        };
    }();
    THREE.Base64.base64String = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    THREE.Base64.base64ToIndexNew = function() {
        var test = {};
        for (var i = 0; i < THREE.Base64.base64String.length; i++) {
            test[THREE.Base64.base64String[i]] = i;
        };
        return function(index) {
            return test[index];
        };
    }();
}
function uploadFile() {
    var data, conn = $.db.getConnection(), pstmt, body, oriFileName, toFileName, userName, isBlobInserted = false, formatId;

    if($.request.body){
        body = $.request.body;
        data = JSON.parse($.request.body.asString()).blogObj;
        oriFileName = JSON.parse($.request.body.asString()).fileName;
        toFileName = new Date().getTime() + oriFileName;
        userName = $.session.getUsername();
        formatId = JSON.parse($.request.body.asString()).formatId;
    }

    try {
        conn = $.db.getConnection();
        pstmt = conn.prepareStatement( 'INSERT INTO "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.UPLOAD_LOG_TAB" (FILE_NAME, LOG_FILE) VALUES(?,?)' );

        initBase64Tool();
        pstmt.setString(1, toFileName);
        pstmt.setBlob(2, THREE.Base64.toArrayBuffer(data));

        pstmt.execute();
        pstmt.close();
        isBlobInserted = true
    }catch(error) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    }finally {
        conn.commit();
    }

    try {
        pstmt = conn.prepareStatement('INSERT INTO "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LKUP_UPLOAD_LOG_TAB" (USER_NAME, ORIGINAL_FILE_NAME, FILE_NAME, LOG_FILE_FORMAT_ID, UPLOAD_TIME, UPLOAD_STATUS) VALUES(?,?,?,?,?,?)' );

        pstmt.setString(1, userName);
        pstmt.setString(2, oriFileName);
        pstmt.setString(3, toFileName);
        pstmt.setString(4, formatId);
        pstmt.setDate(5, new Date());
        if(isBlobInserted){
            pstmt.setString(6, "Success");
        }else{
            pstmt.setString(6, "Failed");
        }

        pstmt.execute();
        pstmt.close();
    }catch(error) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    }finally {
        conn.commit();
        conn.close();
    }
}
function dateFormat(oDate){
    if(!oDate){
        return "";
    }

    function formatNumber(value){
        if(value >= 10){
            return value+"";
        }else{
            return "0"+value;
        }
    }
    var date = oDate;
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var time = formatNumber(date.getHours())+":"+formatNumber(date.getMinutes())+":"+formatNumber(date.getSeconds());

    var englishMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var finalDate =englishMonth[month]+" "+day+", "+year;
    return finalDate;
}
function getLogFileList(fileType){
    var conn = null;
    var pstmt = null;
    var rset = null;
    var data = [];
    var query = "";
    var pc;
    var userName = $.session.getUsername();

    try {
        conn = $.db.getConnection();
        query = 'select USER_NAME, ORIGINAL_FILE_NAME, FILE_NAME, LOG_FILE_FORMAT_ID, UPLOAD_TIME, UPLOAD_STATUS, ESP_DEAMON_INIT_TIME, ESP_COMPLETE_TIME, ESP_PROCESSING_TAKEN_TIME, ESP_PROCESSING_MSG, LOG_FILE_SELECTED '+
            'from "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LKUP_UPLOAD_LOG_TAB" where USER_NAME = ? and UPLOAD_STATUS != \'Archived\'';
        pc = conn.prepareStatement(query);
        pc.setString(1, userName);

        if (pc.executeQuery()) {
            rset = pc.getResultSet();
            while (rset.next()){
                var temp = {};
                temp["userName"] = rset.getString(1);
                temp["originalFileName"] = rset.getString(2);
                temp["fileName"] = rset.getString(3);
                temp["logFileFormat"] = rset.getString(4);
                temp["uploadTime"] = dateFormat(rset.getDate(5));
                temp["uploadStatus"] = rset.getString(6);
                temp["espDeamonInitTime"] = dateFormat(rset.getDate(7));
                temp["espCompletetime"] = dateFormat(rset.getDate(8));
                temp["espProcessingTakenTime"] = rset.getInteger(9);
                temp["espProcessingMsg"] = rset.getString(10);
                temp["logFileSelected"] = rset.getString(11);
                if(rset.getString(11) == "Y"){
                    temp["selected"] = true;
                }else{
                    temp["selected"] = false;
                }
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

function saveFile(){
    var conn = null;
    var pstmt = null;
    var rset = null;
    var result = {result : true};
    var query = "";
    var pc;
    var fileList = JSON.parse($.request.body.asString());

    try {
        conn = $.db.getConnection();
        for(var i=0; i< fileList.length ; i++){
            if(fileList[i].selected){
                pc = conn.prepareStatement( 'update "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LKUP_UPLOAD_LOG_TAB" set LOG_FILE_SELECTED = \'Y\' where FILE_NAME = ? ' );
            }else{
                pc = conn.prepareStatement( 'update "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LKUP_UPLOAD_LOG_TAB" set LOG_FILE_SELECTED = \'N\' where FILE_NAME = ? ' );
            }
            pc.setString(1, fileList[i].fileName);
            pc.execute();
        }
    } catch (error){
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        result.result = false;
        result.message = error.toString();
    } finally {
        if (pc){
            pc.close();
        }
        if (conn){
            conn.commit();
            conn.close();
        }
    }
    $.response.contentType = "application/json";
    $.response.setBody(JSON.stringify(result));
}

function deleteFile(fileName){
    var conn = null;
    var pstmt = null;
    var rset = null;
    var result = {result : true};
    var query = "";
    var pc;

    try {
        conn = $.db.getConnection();
        pc = conn.prepareStatement( 'update "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LKUP_UPLOAD_LOG_TAB" set UPLOAD_STATUS = \'Archived\' where FILE_NAME = ? ' );
        pc.setString(1, fileName);
        pc.execute();
    } catch (error){
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        result.result = false;
        result.message = error.toString();
    } finally {
        if (pc){
            pc.close();
        }
        if (conn){
            conn.commit();
            conn.close();
        }
    }
    $.response.contentType = "application/json";
    $.response.setBody(JSON.stringify(result));
}

function getLogFileFormatList(){
    var conn = null;
    var pstmt = null;
    var rset = null;
    var data = [];
    var query = "";
    var pc;

    try {
        conn = $.db.getConnection();
        query = 'SELECT TOP 200 "LOG_FILE_FORMAT_ID" FROM "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.LOG_FILE_FORMAT_TAB"';
        pc = conn.prepareStatement(query);

        if (pc.executeQuery()) {
            rset = pc.getResultSet();
            while (rset.next()){
                var temp = {};
                temp["text"] = rset.getString(1);
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
function handleGet() {
    var cmd = $.request.parameters.get("cmd");
    switch (cmd){
    default:
        return {
            "error": "Invalid Command: mode"
        };
    }
}

function handlePost() {
    var cmd = $.request.parameters.get("cmd");

    switch (cmd){
    case "getLogFileList":
        var fileType = $.request.parameters.get("fileType");
        return getLogFileList(fileType);
    case "saveFile":
        return saveFile();
    case "deleteFile":
        var fileName = $.request.parameters.get("fileName");
        return deleteFile(fileName);
    case "getLogFileFormatList":
        return getLogFileFormatList();
    default:
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        return {
            "error": "Invalid Command mode."
        };
    }
}

function handlePut() {
    var bodyStr = $.request.body ? $.request.body.asString() : undefined;
    var cmd = $.request.parameters.get("cmd");
    if (bodyStr === undefined) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        return {
            "myResult" : "Missing BODY"
        };
    }
    $.response.status = $.net.http.CREATED;

    switch (cmd){
    case "uploadFile":
        return uploadFile();
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
            handlePost();
            break;
        case $.net.http.PUT:
            $.response.setBody(JSON.stringify(handlePut()));
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