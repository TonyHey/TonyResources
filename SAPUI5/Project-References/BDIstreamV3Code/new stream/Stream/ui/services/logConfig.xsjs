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
	var data, conn = $.db.getConnection(), pstmt, body;  

    if($.request.body){
    	body = $.request.body;
        data = JSON.parse($.request.body.asString()).blogObj;
    }

    try {
    	conn = $.db.getConnection();
        pstmt = conn.prepareStatement( 'INSERT INTO "SAP_RDS_BDI_STREAM"."sap.rds-bdi.stream.model.rep::tables.UPLOAD_LOG_TAB" (FILE_NAME, LOG_FILE) VALUES(?,?)' );

        pstmt.setString(1, "TESTFILE" + new Date().getTime());
        //pstmt.setBlob(2,data);
        initBase64Tool();
        pstmt.setBlob(2, THREE.Base64.toArrayBuffer(data));

        pstmt.execute();
        pstmt.close();
    }catch(error) {
    	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    }finally {
    	conn.commit();
        conn.close();
    }
    
    $.response.contentType = 'text/plain';
    $.response.setBody('Upload ok');
    $.response.status = 200;
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
            $.response.setBody(JSON.stringify(handlePost()));
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