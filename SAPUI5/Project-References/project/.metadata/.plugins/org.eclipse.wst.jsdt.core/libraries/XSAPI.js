/**
 * Global scope for SAP HANA XS-Engine API
 * @namespace
 */
$ = {};
/**
* * Do not use $.internal for XSJS/XSJSLIB development 
*/
$.internal = {};
/** 
* Do not use $.internal.api. for XSJS/XSJSLIB development
*/
$.internal.api = {};

/**
 * The current XS Session
 * @type $.Session       
 */
$.session = function(){
	return
	{
		/**
		* Language of the session in IETF (BCP 47) format.
		*
		* This property contains the language that is used in the session.
		* The value is a string in the format specified by the IETF (BCP 47)
		* standard.
		* <p>
		* Initially the value is set to the language with the highest priority
		* in the "Accept-Language" header of the HTTP request that created
		* the session.
		* <p>
		* However, the value can by changed by applications according to their needs.
		* @type string
		*/
		$.session.language = new String();
		/**
		 * Asserts that the logged-on user has a specified application privilege
		 * 
		 * The specified privilege is checked and, if the user does not have the privilege, an exception is thrown.
		 * The exception contains an attribute 'privilege' which contains the name of the privilege.
		 * @param {String} privilegeName The fully qualified name of the application privilege to test
		 * @throws Throws an error containing a privilege property naming the missing privilege.
		 * @example
		 * try {
		 *     $.session.assertAppPrivilege("sap.xse.test::Execute"); 
		 * }
		 * catch(ex) {
		 *     $.response.setBody(ex.privilege);
		 *     $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		 * }
		 */
		$.session.assertAppPrivilege = function(privilegeName){};
		/**
		 * Provides the materialized content of the AttributeStatement tag which can be part of a SAML assertion.
		 * 
		 * It is an object of name/value pairs where name is the content of "Attribute Name='aName'"
		 * and value is the content of AttributeValue.
		 * This object is only available when the authentication method SAML is used.
		* @type object
		 * @example
		 * var emailAdress = $.session.samlUserInfo.mail;
		 */
		$.session.samlUserInfo = {};
		/**
		* Returns the number of requests sent to the current session
		* @returns {Number} The number of requests sent to the current session
		*/
		$.session.getInvocationCount = function(){return Number};
		/**
		 * Returns the user name of the logged-on database user.
		 * @returns {String} The user name of the logged-on database user.
		 */
		$.session.getUsername = function(){return new String()};
		/**
		 * Checks whether the logged-on user has a specified application privilege
		 * The specified privilege is checked, and the method returns true if the user has the privilege.
		 * If the user does not have the specified privilege, the method returns false.
		 *  
		 * @param {String} privilegeName The fully qualified name of the application privilege to test
		 * @returns {boolean} Returns true if the user does have the specified privilege and false if the user does not
		 * 
		 * @example
		 * 
		 * if (!$.session.hasAppPrivilege("sap.xse.test::Execute")) {
		 *     $.response.setBody("Privilege sap.xse.test::Execute is missing"); 
		 *     $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		 * }
		 * 
		 */
		$.session.hasAppPrivilege = function(privilegeName){};
	}
}();

//*************************************************************************************************
// db Database 
//*************************************************************************************************
/**
 * Namespace for HANA database access
 * @namespace
 */
$.db = {
	/**
     * Returns a connection to the database
     * @param {$.db.isolation} [isolationLevel=db.isolation.READ_COMMITTED] Specifies the transaction isolation level, for example,  $.db.isolation.READ_COMMITTED, $.db.isolation.REPEATABLE_READ, or $.db.isolation.SERIALIZABLE. Default is $.db.isolation.READ_COMMITTED
     * @returns {$.db.Connection} Connection - The internal connection to the database with the user of the current session.
     */
	/*getConnection : function(isolation){		
		return $.internal.api.Connection;
	}*/
};

/**
 * Constants that represent the isolation levels for a transaction  
 * @enum
 */
$.db.isolation = {};
/** 
 * @type {Number} 
 * @constant 
 */
$.db.isolation.READ_COMMITTED = 2;
/** 
 * @type {Number} 
 * @constant 
 */
$.db.isolation.REPEATABLE_READ = 4;
/** 
 * @type {Number} 
 * @constant 
 */
$.db.isolation.SERIALIZABLE = 8;
/**
 * Set of constants of the database column types 
 * @enum
 */
$.db.types = {};
/**
 * @type {Number}
 * @constant
 */
$.db.types.TINYINT = 1;
/**
 * @type {Number}
 * @constant
 */
$.db.types.SMALLINT = 2;
/**
 * @type {Number}
 * @constant
 */
$.db.types.INT = 3;
/**
 * @type {Number}
 * @constant
 */
$.db.types.INTEGER = 3;
/**
 * @type {Number}
 * @constant
 */
$.db.types.BIGINT = 4;
/**
 * @type {Number}
 * @constant
 */
$.db.types.DECIMAL = 5;
/**
 * @type {Number}
 * @constant
 */
$.db.types.REAL = 6;
/**
 * @type {Number}
 * @constant
 */
$.db.types.DOUBLE = 7;
/**
 * @type {Number}
 * @constant
 */
$.db.types.CHAR = 8;
/**
 * @type {Number}
 * @constant
 */
$.db.types.VARCHAR = 9;
/**
 * @type {Number}
 * @constant
 */
$.db.types.NCHAR = 10;
/**
 * @type {Number}
 * @constant
 */
$.db.types.NVARCHAR = 11;
/**
 * @type {Number}
 * @constant
 */
$.db.types.BINARY = 12;
/**
 * @type {Number}
 * @constant
 */
$.db.types.VARBINARY = 13;
/**
 * @type {Number}
 * @constant
 */
$.db.types.DATE = 14;
/**
 * @type {Number}
 * @constant
 */
$.db.types.TIME = 15;
/**
 * @type {Number}
 * @constant
 */
$.db.types.TIMESTAMP = 16;
/**
 * @type {Number}
 * @constant
 */
$.db.types.CLOB = 25;
/**
 * @type {Number}
 * @constant
 */
$.db.types.NCLOB = 26;
/**
 * @type {Number}
 * @constant
 */
$.db.types.BLOB = 27;
/**
 * @type {Number}
 * @constant
 */
$.db.types.SMALLDECIMAL = 47;
/**
 * @type {Number}
 * @constant
 */
$.db.types.TEXT = 51;
/**
 * @type {Number}
 * @constant
 */
$.db.types.SHORTTEXT = 52;
/**
 * @type {Number}
 * @constant
 */
$.db.types.ALPHANUM = 55;
/**
 * @type {Number}
 * @constant
 */
$.db.types.SECONDDATE = 62;

//for documentation purpose (without this part the above @type & @constant are taken over)
/**
 * Do not use, internal usage only 
 */
 $.internal.api.dummyconn = {
	/**
     * Returns name.
	 * @returns {String} name
	 */
	getConn : function(){		
		return 'Conn';
	}
 };

//*************************************************************************************************
// hdb Database 
//*************************************************************************************************
/**
* This namespace provides means for seamless HANA database access. It is intended to be a replacement of the older $.db namespace.<br> 
 * Fundamental goal of the new interface is to ensure simplicity, convenience, completeness and performance.
 * @namespace
 */
 $.hdb = {
	/**
     * Returns a database connection.
     * @param {Object} [options] JSON object specifying the options:<br>
	 * isolationLevel - transaction isolation level. Default is $.hdb.isolation.READ_COMMITTED<br>
	 * sqlcc - absolute or relative path to xssqlcc file
	 * @returns {$.hdb.Connection} Connection - The internal connection to the database with the user of the current session. 
	 */
	getConnection : function(options){		
		return $.internal.api.hdbConnection;
	}
 }
 
 /**
 * Constants that represent the isolation levels for a transaction  
 * @enum
 */
 $.hdb.isolation = $.db.isolation;
 /**
* Namespace: util
* @namespace
*/
 $.util = {};
 /**
* Gunzips the source data and returns an ArrayBuffer representation of the gunzipped content.
* @param {ArrayBuffer} source Argument used for the source data. Can be ArrayBuffer or $.web.Body.	
*/
$.util.gunzip = function(source){}; 
/**
* Gzips the source data and returns an ArrayBuffer representation of the gzipped content. 
* @param {ArrayBuffer} source Argument used for the source data. Can be ArrayBuffer or $.web.Body.	
*/
$.util.gzip = function(source){}; 
/**
* Converts an ArrayBuffer containing UTF-8 encoded string to a JavaScript String object 
* @param {ArrayBuffer} Object used for the conversion	
* @returns {String}
* @throws Throws an error if the input content cannot be converted 
*/
$.util.stringify = function(arrayBuffer){}; 

/**
* @class for parsing XML. It is based on expat. 
* @constructor
*/
$.util.SAXParser = function(){};
/**
* This property holds a callback function with four parameters: elname(String), attname(String), att_type(String), dflt(String) and isrequired(Integer).  
* @Type function
*/
$.util.SAXParser.prototype.attlistDeclHandler = {};
/**
* This property holds a callback function with one parameter: data(String).   
* @Type function
*/
$.util.SAXParser.prototype.commentHandler = {};
/**
* This property holds a callback function with one parameter: s(String).  
* @Type function
*/
$.util.SAXParser.prototype.characterDataHandler = {};
/**
* This property holds the current byte index of the parser 
* @Type Integer
*/
$.util.SAXParser.prototype.currentByteIndex = 0;
/**
* This property holds the current byte index of the parser 
* @Type Integer
*/
$.util.SAXParser.prototype.currentColumnNumber = 0;
/**
* This property holds the current line position of the parser 
* @Type Integer
*/
$.util.SAXParser.prototype.currentLineNumber = 0;
/**
* This property holds a callback function with no parameters.
* @Type function
*/
$.util.SAXParser.prototype.endCDataSectionHandler = {};
/**
* This property holds a callback function with no parameters.
* @Type Integer
*/
$.util.SAXParser.prototype.endDoctypeDeclHandler = {};
/**
* This property holds a callback function with no parameters.
* @Type function
*/
$.util.SAXParser.prototype.endElementHandler = {};
/**
* This property holds a callback function with one parameter: prefix(String). 
* @Type function
*/
$.util.SAXParser.prototype.endNameSpaceDeclHandler = {};
/**
* This property holds a callback function with seven parameters: entityName(String), is_parameter_entity(Integer), value(String), systemId(String), publicId(String) and notationName(String). 
* NOTE: During parsing it is the application's responsibility to prevent large number of multiple XML entity expansions.  
* @Type function
*/
$.util.SAXParser.prototype.entityDeclHandler = {};
/**
* This property holds a callback function with four parameters: context(String), systemId(String) and publicId(String). 
* @Type function
*/
$.util.SAXParser.prototype.externalEntityRefHandler = {};
/**
* This property holds a callback function with four parameters: notationName(String), systemId(String) and publicId(String). 
* @Type function
*/
$.util.SAXParser.prototype.notationDeclHandler = {};
/**
* This property holds a callback function with two parameters: target(String) and data(String).  
* @Type function
*/
$.util.SAXParser.prototype.processingInstructionHandler  = {};
/**
* This property holds a callback function with no parameters. 
* @Type function
*/
$.util.SAXParser.prototype.startCDataSectionHandler = {};
/**
* This property holds a callback function with four parameters: doctypeName(String), sysid(String), pubid(String) and has_internal_subset(Integer). 
* @Type function
*/
$.util.SAXParser.prototype.startDoctypeDeclHandler = {};
/**
* This property holds a callback function with two parameters: name(String) and atts(Object). atts contains key:value pairs of the attributes. 
* @Type function
*/
$.util.SAXParser.prototype.startElementHandler = {};
/**
* This property holds a callback function with two parameters: prefix(String) and uri(String). 
* @Type function
*/
$.util.SAXParser.prototype.startNameSpaceDeclHandler = {};
/**
* This property holds a callback function with three parameters: version(String), encoding(String), standalone(Integer). 
* @Type function
*/
$.util.SAXParser.prototype.xmlDeclHandler = {};
///**
//* This method parses the xmlString. 
//* @param {String} xml data that should be parsed
//* @throws Throws an error if there was a problem during parsing or the parser was stopped without the possibility of resuming  
//*/
//$.util.SAXParser.prototype.parse = function(xml){};
/**
* This method parses the xmlString. 
* @param {String|ArrayBuffer|$.web.Body} xml data that should be parsed
* @param {String} [encoding] supported encodings are UTF-8, UTF-16 and US-ASCII. The default is UTF-8.
* @throws Throws an error if there was a problem during parsing or the parser was stopped without the possibility of resuming 
*/
$.util.SAXParser.prototype.parse = function(xml, encoding){};
/**
* This method resets the parser.  
*/
$.util.SAXParser.prototype.reset = function(){};
/**
* This method resumes the parser. It should not be called from a callback function.   
*/
$.util.SAXParser.prototype.resume = function(){};
/**
* This method stops the parser. It should be called from a callback function.
* @param {isResumable} isResumable if true than when called the parser is suspended and can be resumed. If false the parser cannot be resumed and an error is thrown.
* @throws Throws an error if isResumable = false   
*/
$.util.SAXParser.prototype.stop = function(isResumable){};
/**
* Class for manipulation of zip archives. It provides functionality for zipping, unzipping, removal of entries and zip encryption.
* @constructor
* @param {ArrayBuffer | $.db.ResultSet | $.web.Body} [source] Argument used for creating object from different sources which provide zipped content. If it is not specified empty zip object will be created
* @param {Number} [index] If the first argument is of type ResultSet, the number specifies the index of a Blob column and is mandatory.
* @param {String} [password] Argument specifying key for enabling encryption. When creating zip object from existing encrypted archive, the password is mandatory.
* @throws Throws an error if the parameters are invalid 
*/
$.util.Zip = function(source, index, password){};
/**
* Key used for encryption. Empty string or nothing means no encryption of the data.
* @type String
*/
$.util.Zip.prototype._password_ = "";
/**
* Returns the zip archive as ArrayBuffer 
* @return {ArrayBuffer} Buffer containing the whole zipped content.
*/
$.util.Zip.prototype.asArrayBuffer = function(){};
/**
* Namespace: codec
*/
$.util.codec = {};
/**
* Decodes Base64 data 
* @param {String} base64Data Base64 string to be decoded to its original content format
* @return ArrayBuffer 
* @throws Throws an error if the input is invalid 
*/
$.util.codec.decodeBase64 = function(base64Data){return [];};
/**
* Decodes hexadecimal data  
* @param {String} hexData Hex string to be decoded to its original content format
* @return ArrayBuffer 
* @throws Throws an error if the input is invalid 
*/
$.util.codec.decodeHex = function(hexData){return [];};
/**
* Encodes Base64 data 
* @param {String|ArrayBuffer} The data to encode. If the parameter is of type String, its UTF-8 representation will be considered
* @return String 
* @throws Throws an error if the input is invalid 
*/
$.util.codec.encodeBase64 = function(data){return "";};
/**
* Encodes data into hexadecimal format   
* @param {String|ArrayBuffer} data Hex string to be decoded to its original content format
* @return String 
* @throws Throws an error if the input is invalid 
*/
$.util.codec.encodeHex = function(data){return "";};
/**
* Namespace: security
*/
$.security = {};

/**
* Namespace: crypto
* @namespace
*/
$.security.crypto = {};
/**
* Computes MD5 hash or HMAC-MD5 
* @param {String | ArrayBuffer} data String or binary data to produce the hash from. If the parameter is of type String, its UTF-8 representation will be considered
* @param {String} [key] Key used for HMAC-MD5 generation
* @return ArrayBuffer
* @throws Throws an error if the input parameters are invalid 
*/
$.security.crypto.md5 = function(data, key){};
/**
* Computes SHA1 or HMAC-SHA1  
* @param {String | ArrayBuffer} data String or binary data to produce the hash from. If the parameter is of type String, its UTF-8 representation will be considered
* @param {String} [key] Key used for HMAC-SHA1 generation
* @return ArrayBuffer
* @throws Throws an error if the input parameters are invalid 
*/
$.security.crypto.sha1 = function(data, key){};
/**
* Computes SHA256 or HMAC-SHA256  
* @param {String | ArrayBuffer} data String or binary data to produce the hash from. If the parameter is of type String, its UTF-8 representation will be considered
* @param {String} [key] Key used for HMAC-SHA256 generation
* @return ArrayBuffer
* @throws Throws an error if the input parameters are invalid 
*/
$.security.crypto.sha256 = function(data, key){};

/**
* Class for checking data with external Anti-Virus (AV) engines. The scan needs a Virus Scan Adapter (VSA) to be installed on the host.<br> The setup and configuration is available with SAP note 2081108. This class uses the SAP certified interface NW-VSI 2.00 (see SAP note 1883424). For a list of the AV products supported, see SAP note 1494278.
* @constructor
* @param {String} [Profile] The profile name for the scan instance. If no profile is specified, the default profile is used.
* @throws Throws an error if the profile is invalid 
*/
$.security.AntiVirus  = function(Profile){};
/**
* This method performs an AV check with VSI, using one of the external AV engines listed in SAP note 1494278.<br> The optional objectName parameter should be passed to the function whenever available, for example, in a file upload; the result of the AV scan depends on the file type (MIME type). 
* @param {String | ArrayBuffer | $.db.ResultSet} data Data to be scanned
* @param {String} [objectName] Name of the object
* @throws Throws an error if an infection was found or a problem occurred during the AV scan 
*/
$.security.AntiVirus.prototype.scan = function(data, objectName){};
/**
* The secure store API can be used to securely store data in name/value form. <br>
* Applications can define a secure store object file and refer to this design time object in the application coding. <br>
* The XSEngine takes care of the encryption and decryption and also provides the persistency for the data. <br>
* There are two visibility options for the data a) Visible application wide All users of the application share the same data and can decrypt/encrypt data e.g.: passwords for a remote system b)<br>
* Visible application wide but with a seperation on user level Every user of the application can have it’s own encrypted data which can only be decrypted by the user himself e.g. credit card numbers/pin codes etc.
* @param {String} secureStoreFile The location of the xssecurestore file
*/
$.security.Store = function(secureStoreFile){};
/**
* read values, accessible by all users of the application 
* @param {$.security.Store~ReadParameters} parameters parameter object
* @return String The decrypted value 
* @throws Throws an error if the access fails or the parameters are invalid 
*/
$.security.Store.prototype.read = function(parameters){return "";};
/**
* read values on user isolation level  
* @param {$.security.Store~ReadParameters} parameters parameter object
* @return String The decrypted value 
* @throws Throws an error if the access fails or the parameters are invalid 
*/
$.security.Store.prototype.readForUser = function(parameters){return "";};
/**
* remove values on application isolation level 
* @param {$.security.Store~DeletionParameters} parameters 
* @throws Throws an error if the access or the parameters are invalid 
*/
$.security.Store.prototype.remove = function(parameters){};
/**
* remove values on user isolation level  
* @param {$.security.Store~DeletionParameters} parameters 
* @throws Throws an error if the access or the parameters are invalid 
*/
$.security.Store.prototype.removeForUser = function(parameters){};
/**
* read values on user isolation level   
* @param {$.security.Store~WriteParameters} parameters 
* @throws Throws an error if the access or the parameters are invalid 
*/
$.security.Store.prototype.store = function(parameters){};
/**
* stores user specific values, no other user can decrypt it   
* @param {$.security.Store~WriteParameters} parameters 
* @throws Throws an error if the access or the parameters are invalid 
*/
$.security.Store.prototype.storeForUser = function(parameters){};
/**
* Namespace: jobs
* @namespace
*/
$.jobs = {};
/**
* 
* A scheduled job.<br/>
* Scheduled jobs are created via .xsjob files and can be used to define recurring
* tasks that run in the background.
* The JavaScript API allows developers to add and remove schedules from such jobs.
* @example
* var myjob = new $.jobs.Job({uri:“my.xsjob”, sqlcc:“sqlcc/otheruser.xssqlcc”});
* 
* @class $.jobs.Job Represents a XS scheduled job. 
* @constructor
* @param {$.jobs.Job~Parameters} parameters parameter object
* @throws Throws an error if the parameters object is not valid or looking up the job fails.
* @property {$.jobs.JobSchedules} schedules Object that allows manipulating a job's schedules.
*/
$.jobs.Job = function(parameter){};
/**
* 
* A scheduled job's schedules.
* 
* @class $.jobs.JobSchedules Allows manipulation of a job's schedules. 
* @constructor
*/
$.jobs.Job.prototype.schedules = $.internal.api.JobSchedules;
//$.jobs.Job.prototype.Parameters = $.internal.api.Parameters;
/*$.jobs.Job.JobSchedules = {};
$.jobs.Job.JobSchedules.AddParameters = {};
$.jobs.Job.JobSchedules.DeleteParameters = {};
$.jobs.Job.JobSchedules.AddParameters.xscron = "";
$.jobs.Job.JobSchedules.AddParameters.description = "";
$.jobs.Job.JobSchedules.AddParameters.parameter = object;
$.jobs.Job.JobSchedules.DeleteParameters.id = integer;*/
	
//*************************************************************************************************
// Trace Namespace
//*************************************************************************************************
/**
* Namespace: trace
* @namespace
*/	
$.trace = {};
/**
* Writes a given message to the application trace with <b>debug</b> level
* @param {String} message The message to be written to trace
* @throws Throws an error if message is missing.
*/
$.trace.debug = function(message){};
/**
* Writes a given message to the application trace with <b>error</b> level
* @param {String} message The message to be written to trace
* @throws Throws an error if message is missing.
*/
$.trace.error = function(message){};
/**
* Writes a given message to the application trace with <b>fatal</b> level
* @param {String} message The message to be written to trace
* @throws Throws an error if message is missing.
*/
$.trace.fatal = function(message){};
/**
* Writes a given message to the application trace with <b>info</b> level
* @param {String} message The message to be written to trace
* @throws Throws an error if message is missing.
*/
$.trace.info = function(message){};
/**
* Writes a given message to the application trace with <b>warning</b> level
* @param {String} message The message to be written to trace
* @throws Throws an error if message is missing.
*/
$.trace.warning = function(message){};

//*************************************************************************************************
// Network Namespace
//*************************************************************************************************
/**
 * Namespace: network
 * @namespace
 */
$.net = {};
/**
* Namespace: http
* @namespace
*/
$.net.http = {};
/**
* HTTP Method OPTIONS 
* @type {Number}
* @constant
*/
$.net.http.OPTIONS = 0;
/**
* HTTP Method GET 
* @type {Number}
* @constant
*/
$.net.http.GET = 1;
/**
* HTTP Method HEAD 
* @type {Number}
* @constant
*/
$.net.http.HEAD = 2;
/**
* HTTP Method POST 
* @type {Number}
* @constant
*/
$.net.http.POST = 3;
/**
* HTTP Method PUT 
* @type {Number}
* @constant
*/
$.net.http.PUT = 4;
/**
* HTTP Method DEL 
* @type {Number}
* @constant
*/
$.net.http.DEL = 5;
/**
* HTTP Method TRACE 
* @type {Number}
* @constant
*/
$.net.http.TRACE = 6;
/**
* HTTP Method PATCH
* @type {Number}
* @constant
*/
$.net.http.CONNECT = 7;
/**
* HTTP Method PATCH
* @type {Number}
* @constant
*/
$.net.http.PATCH = 8;
/**
* @type {Number}
* @constant
*/
$.net.http.CONTINUE = 100;
/**
* @type {Number}
* @constant
*/
$.net.http.SWITCH_PROTOCOL = 101;
/**
* @type {Number}
* @constant
*/
$.net.http.OK = 200;
/**
* @type {Number}
* @constant
*/
$.net.http.CREATED = 201;
/**
* @type {Number}
* @constant
*/
$.net.http.ACCEPTED = 202;
/**
* @type {Number}
* @constant
*/
$.net.http.NON_AUTHORITATIVE = 203;
/**
* @type {Number}
* @constant
*/
$.net.http.NO_CONTENT = 204;
/**
* @type {Number}
* @constant
*/
$.net.http.RESET_CONTENT = 205;
/**
* @type {Number}
* @constant
*/
$.net.http.PARTIAL_CONTENT = 206;
/**
* @type {Number}
* @constant
*/
$.net.http.MULTIPLE_CHOICES = 300;
/**
* @type {Number}
* @constant
*/
$.net.http.MOVED_PERMANENTLY = 301;
/**
* @type {Number}
* @constant
*/
$.net.http.FOUND = 302;
/**
* @type {Number}
* @constant
*/
$.net.http.SEE_OTHER = 303;
/**
* @type {Number}
* @constant
*/
$.net.http.NOT_MODIFIED = 304;
/**
* @type {Number}
* @constant
*/
$.net.http.USE_PROXY = 305;
/**
* @type {Number}
* @constant
*/
$.net.http.TEMPORARY_REDIRECT = 307;
/**
* @type {Number}
* @constant
*/
$.net.http.BAD_REQUEST = 400;
/**
* @type {Number}
* @constant
*/
$.net.http.UNAUTHORIZED = 401;
/**
* @type {Number}
* @constant
*/
$.net.http.PAYMENT_REQUIRED = 402;
/**
* @type {Number}
* @constant
*/
$.net.http.FORBIDDEN = 403;
/**
* @type {Number}
* @constant
*/
$.net.http.NOT_FOUND = 404;
/**
* @type {Number}
* @constant
*/
$.net.http.METHOD_NOT_ALLOWED = 405;
/**
* @type {Number}
* @constant
*/
$.net.http.NOT_ACCEPTABLE = 406;
/**
* @type {Number}
* @constant
*/
$.net.http.PROXY_AUTH_REQUIRED = 407;
/**
* @type {Number}
* @constant
*/
$.net.http.REQUEST_TIMEOUT = 408;
/**
* @type {Number}
* @constant
*/
$.net.http.CONFLICT = 409;
/**
* @type {Number}
* @constant
*/
$.net.http.GONE = 410;
/**
* @type {Number}
* @constant
*/
$.net.http.LENGTH_REQUIRED = 411;
/**
* @type {Number}
* @constant
*/
$.net.http.PRECONDITION_FAILED = 412;
/**
* @type {Number}
* @constant
*/
$.net.http.REQUEST_ENTITY_TOO_LARGE = 413;
/**
* @type {Number}
* @constant
*/
$.net.http.REQUEST_URI_TOO_LONG = 414;
/**
* @type {Number}
* @constant
*/
$.net.http.UNSUPPORTED_MEDIA_TYPE = 415;
/**
* @type {Number}
* @constant
*/
$.net.http.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
/**
* @type {Number}
* @constant
*/
$.net.http.EXPECTATION_FAILED = 417;
/**
* @type {Number}
* @constant
*/
$.net.http.INTERNAL_SERVER_ERROR = 500;
/**
* @type {Number}
* @constant
*/
$.net.http.NOT_YET_IMPLEMENTED = 501;
/**
* @type {Number}
* @constant
*/
$.net.http.BAD_GATEWAY = 502;
/**
* @type {Number}
* @constant
*/
$.net.http.SERVICE_UNAVAILABLE = 503;
/**
* @type {Number}
* @constant
*/
$.net.http.GATEWAY_TIMEOUT = 504;
/**
* @type {Number}
* @constant
*/
$.net.http.HTTP_VERSION_NOT_SUPPORTED = 505;
/**
* Returns a HTTP destination
* @param {String} package
* @param {String} objectName
* @returns {$.net.http.Destination}
* @throws Throws an error if no valid HTTP Destination is found with the given name
*/
$.net.http.readDestination = function(package,objectName){return $.internal.api.Destination};
/**
* HTTP(s) Client for outbound connectivity
* @class
* @contructor
* @example
* // create client
* var client = new $.net.http.Client();
* 
* // where and what to send
* var dest = $.net.http.readDestination("testApp", "myDestination");
* var request = new $.net.http.Request($.net.http.GET, "/"); // new Request(METHOD, PATH) 
*                                                            // the PATH will be prefixed by destination's pathPrefix e.g. "/search?" on the request
* 
* // send the request and synchronously get the response
* client.request(request, dest);
* var response = client.getResponse();
* 
* 
* // get all the cookies and headers from the response
* var co = [], he = [];
* for(var c in response.cookies) {
*     co.push(response.cookies[c]);
* }
* 
* for(var c in response.headers) {
*      he.push(response.headers[c]);
* }
* 
* // get the body
* var body = undefined;
* if(!response.body)
*     body = "<Empty body!>";
* else
*     body = response.body.asString();
* 
* // send the response as JSON
* $.response.contentType = "application/json";
* $.response.setBody(JSON.stringify({"status": response.status, "cookies": co, "headers": he, "body": body}));
*/
$.net.http.Client = function(){};
/**
* Retrieve the response from the previously sent request synchroniously/blocking
* @returns {$.web.WebResponse} A response object with headers, cookies and the response body
* @throws Throws an error if there is no valid response to return
*/
//please do not remove  - without this getResponse will not continue to complete WebResponse properties
$.net.http = {};
$.net.http.Client.prototype.getResponse = function(){return new $.internal.api.WebResponse();};
/**
* Send a new request object to the given destination
* @variant 1
* @param {($.net.http.Request|$.net.http.WebMethod)} request The request object to send or $.net.http WebMethod The HTTP Method to use for this request ($.net.http.GET/POST/PUT/...)
* @param {(String|$.net.http.Destination)} destination The destination object that holds the metadata of the host to send the request to or string URL The URL to send the request to e.g. "http://www.google.de/q=HANA"
* @param {String} proxy The Proxy URL to use for this request e.g. "http://proxy.mycompany.com:3128"
* @throws Throws an error if the request failes or the parameters are invalid
*/
$.net.http.Client.prototype.request = function(request,destination, proxy){};
/**
* Set the timeout for communication with the server
* @param {Number} timeout in seconds
*/
$.net.http.Client.prototype.setTimeout = function(timeout){};
/**
* Request class to be used with HTTP client
* @class
* @consturctor
* @extends $.web.WebRequest
*/
$.net.http.Request = function(method,path){};
/**
 * The body of the request.
 * Leave the body undefined, if there is no body.
 * @type $.web.Body
 */
 //please do not remove  - without this getResponse will not continue to complete Body properties
$.net.http = {};
 $.net.http.Request.prototype.body = $.internal.api.Body;
/**
 * The content type of the entity
 * @type String
 */
$.net.http.Request.prototype.contentType = new String();
/**
 * The cookies associated with the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete TupeList properties
 $.net.http = {};
$.net.http.Request.prototype.cookies = $.internal.api.TupelList;
/**
 * The headers of the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete EntityList properties
 $.net.http = {};
$.net.http.Request.prototype.entities = $.internal.api.EntityList;
/**
 * The headers of the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete TupeList properties
 $.net.http = {};
$.net.http.Request.prototype.headers = $.internal.api.TupelList;
/**
 * The HTTP method of the incoming HTTP request
 * @type $.net.http
 */
$.net.http.Request.prototype.method = $.net.http;
/**
 * The parameters of the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete TupeList properties
 $.net.http = {};
$.net.http.Request.prototype.parameters = $.internal.api.TupelList;
/**
* Sets the body of the entity; 
* the method supports all elemental JavaScript types and ArrayBuffers.
* 
* @param {any|ArrayBuffer} body Can be any elemental JavaScript type or an ArrayBuffer
*/
$.net.http.Request.prototype.setBody = function(body){};

//*************************************************************************************************
// Web Namespace
//*************************************************************************************************
/**
* Namespace: web
* @namespace
*/
$.web = {};
/**
* Represents the client HTTP request currently being processed.
* 
* @example
* 
* if($.request.method === $.net.http.GET) {
*    // get query parameter named id
*    var qpId = $.request.parameters.get("id");
*    
*    // handle request for the given id parameter...
*    var result = handleRequest(qpId);
*    
*    // send response
*    $.response.contentType = "plain/test";
*    $.response.setBody("result: " + result);
*    $.response.status = $.net.http.OK;
* } else {
*    // unsupported method
*    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
* }
* 
* 
* @see $.response represents the corresponding response object. 
* @class $.web.WebRequest
* @extends $.web.WebEntityRequest 
* @constructor
*/
$.web.WebRequest = function(method,path){};
/**
 * The body of the request.
 * Leave the body undefined, if there is no body.
 * @type $.web.Body
 */
 //please do not remove  - without this getResponse will not continue to complete body properties
 $.web = {};
$.web.WebRequest.prototype.body = $.internal.api.Body;
/**
 * The content type of the entity
 * @type string
 */
$.web.WebRequest.prototype.contentType = new String();
/**
 * The cookies associated with the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete cookies properties
 $.web = {};
$.web.WebRequest.prototype.cookies = $.internal.api.TupelList;
/**
* The sub-entities of the entity
* @type $.web.EntityList  
*/
//please do not remove  - without this getResponse will not continue to complete entries properties
 $.web = {};
$.web.WebRequest.prototype.entities = $.internal.api.EntityList;
/**
 * The headers of the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete headers properties
 $.web = {};
$.web.WebRequest.prototype.headers = $.internal.api.TupelList;
/**
 * The HTTP method of the incoming HTTP request
 * @type $.net.http
 */
$.web.WebRequest.prototype.method = $.net.http;
/**
 * The parameters of the entity
 * @type $.web.TupelList
 */
 //please do not remove  - without this getResponse will not continue to complete parameters properties
 $.web = {};
$.web.WebRequest.prototype.parameters = $.internal.api.TupelList;
/**
 * The URL path specified in the request
 * @type string 
 * @example
 * 
 * http://myhost:1080/sap.hana.xs.exampleapp/path/to/requested/resource.xsjs
 *                                          ^                              ^
 *                                          |                              |
 *                                          ----    request URL path    ---- 
 * 
 */
$.web.WebRequest.prototype.path = new String();
/**
* Sets the body of the entity; 
* the method supports all elemental JavaScript types and ArrayBuffers.
* 
* @param {any|ArrayBuffer} body Can be any elemental JavaScript type or an ArrayBuffer
*/ 
$.web.WebRequest.prototype.setBody = function(body){};
/**
 * The http request instance that is passed over from the HTTP server to the XS Engine.
 * Use this object as input for your XS Engine script.
 * @type $.web.WebRequest
 */
$.request = new $.web.WebRequest();
/**
 * The http response instance that is passed over to the HTTP server.
 * Use this object as output for your XS Engine script.
 * @type $.web.WebResponse       
 */
$.response = new $.internal.api.WebResponse();
/**
 * 
 * Imports a server-side JavaScript library artifact.
 * The library is a design-time artifact located in the repository. JavaScript library design-time artifacts have the suffix '.xsjslib'.
 * @example
 * // import math lib
 * $.import("sap.myapp.lib","math");
 * 
 * // use math lib
 * var max_res = $.sap.myapp.lib.math.max(3, 7);
 * @variant 1
 * @param {String} path The name of the path in which the library object is located or String package An absolute or relative path refering the library to be imported
 * @param {String} library The name of the library object in the repository (without the suffix .xsjslib)
 * @throws Throws an error if the import failed or if the parameters were not valid.
 */
$.import = function(path, library){};

$.internal.api.Destination = {};

$.internal.api.Parameters = {
	uri : {},
	sqlcc : {}
};

$.internal.api.JobSchedules = {
	/**
	* @typedef $.jobs.JobSchedules~AddParameters
	* @type {object}
	* @property {String} xscron xscron string defining when the schedule should run
	* @property {String} description describes the schedule
	* @property {object|String} parameter object or JSON string that will be passed to the job's action
	*/

	/**
	* Used to add a schedule to a job.
	* @example
	* var id = myjob.schedules.add({
	*     description: “Added at runtime, run every 10 minutes”,
	*     xscron: “* * * * * *\/10 0”,
	*     parameter: {
	*         a: “c”
	*     }
	* });
	*
	* @param {$.jobs.JobSchedules~AddParameters} parameters parameter object
	* @returns {Number} ID of the created schedule
	* @throws Throws an error if the parameters object is not valid or the execution fails.
	*/
	add : function(parameter){return integer}//,
	/**
	* @typedef $.jobs.JobSchedules~DeleteParameters
	* @type {object}
	* @property {Number} id id of the schedule to delete
	*/

	/**
	* Used to delete a schedule from a job.
	* @example
	* myjob.schedules.delete({id: id});
	*
	* @param {$.jobs.JobSchedules~DeleteParameters} parameters parameter object
	* @throws Throws an error if the parameters object is not valid or the execution fails.
	*/
	//delete : function(parameters){}
};
/**
 * HANA database connection.
 */
$.internal.api.hdbConnection = {
	/**
	 * Closes the connection.
	 * @throws Throws an error if the operation fails.
	 */
	close : function(){},
	/**
	 * Commits the changes and ends the current transaction. <b>By default autocommit mode is disabled, which means all database changes must be explicitly commited</b>.
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 */
	commit : function(){},	
	/**
	 * @param {String} queryString The query string to be executed.
	 * @param {VarArgs} arguments Variable number of arguments to be bound to the query parameters.
	 * @returns $.hdb.ResultSet
	 * @throws Throws an error if the statement cannot be executed.
	 */
	 executeQuery : function(queryString, arguments){return $.internal.api.hdbResultSet},
	 /**
	 * @param {String} dmlString The DML operation to be executed.
	 * @param {VarArgs} arguments Variable number of arguments to be bound to the query parameters.
	 * @returns {Number | Array}  Number of affected rows | Array of integers in case of batch update. 
	 */
	 executeUpdate : function(dmlString, arguments){},
	/**
	* Creates a javascript representing a stored procedure.
	* @param {String} schema The schema to which the procedure belongs.
	* @param {String} procedure The name of the procedure.
	* @returns {Function} 
	*/
	loadProcedure : function(schema, procedure){return function(){return $.internal.api.hdbProcedureResult}},
	/**
	 * Reverts the changes and ends the current transaction.
	 * @throws Throws an error if the statement cannot be executed.
	 */
	 rollback : function(){},
	 /**
	 * Changes the auto-commit flag of the connection.
	 * @param {Integer} An integer value, which can be either 0 (false) or 1 (true)
	 */
	 setAutoCommit : function(enable){}
};

$.internal.api.Connection = {
	/**
	 * Closes the connection.
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	close : function(){},
	/**
	 * Commits the changes.
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	commit : function(){},
	/**
	* Checks if the connection is closed.
	* @returns {boolean} Returns true if the connection is already closed, false if not
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	isClosed : function(){return boolean},
	/**
	 * Prepares a stored procedure for execution
	 *  
	 * @example
	 * var myCallableStatement = myconnection.prepareCall("{call myprocedure(?)}");
	 *
	 * @param {String} statement The SQL statement to be prepared
	 * @returns {$.db.CallableStatement} CallableStatement The object used to represent the callable statement
	 * @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	prepareCall : function(statement){return $.internal.api.CallableStatement},
	/**
	 * Prepares a statement for execution
	 * @param {String} statement The SQL statement to be prepared
	 * @returns {$.db.PreparedStatement} PreparedStatement object that represents the prepared statement
	 * @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	prepareStatement : function(statement){return $.internal.api.PreparedStatement},
	/**
	 * Rolls back the changes.
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	rollback : function(){},
	/**
	 * Changes the auto-commit flag of the connection
	 * @param {Number} enable An integer value, which can be either 0 (false) or 1 (true)
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	setAutoCommit : function(enable){}
};

$.internal.api.CallableStatement = {
	/**
	* Closes the statement.
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	close : function(){},
	/**
	* Executes a specified statement
	* @returns {boolean} True if the execution was successful
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	execute : function(){return Boolean},
	/**
	* Returns an Int64 value of a BIGINT parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {ctypes.Int64} ctypes.Int64
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	/**
	* Returns the ArrayBuffer value of a BLOB specified parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {ArrayBuffer} Blob representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/ 
	getBlob : function(index){return ArrayBuffer},
	/**
	* Returns the ArrayBuffer value of a BLOB specified parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {ArrayBuffer} Blob representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/ 
	getBString : function(index){return ArrayBuffer},
	/**
	* Returns the string value of a CLOB parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getClob : function(index){return new String()},
	/**
	* Used to retrieve the value of a DATE parameter
	* @param {Number} index The index of the parameter, <b>starting from 1</b>
	* @returns {Date} A JavaScript date object representing the value
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getDate : function(index){return Date},
	/**
	* Returns a number value of a DECIMAL parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getDecimal : function(index){return Number},
	/**
	* Returns a number value of a DOUBLE, FLOAT or REAL parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/ 
	getDouble : function(index){return Number},
	/**
	* Returns an integer value of a TINYINT, SMALLINT, INT or BIGINT parameter types
	* An exception will be thrown if the value is bigger than 9007199254740992 (2^53) or smaller than -9007199254740992 (-2^53).
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} Integer representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getInteger : function(index){return integer},
	/**
	* Checks if more resultsets are available and prepares the next resultset for retrieval
	* @returns {boolean} True if the next resultset is available
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	getMoreResults : function(){return Boolean},
	/**
	* Returns the string value of a NCLOB or TEXT parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getNClob : function(index){return new String()},
	/**
	* Sets a string parameter used for NCHAR, NVARCHAR parameter types, which should be used for strings containing unicode characters. <br>
	* This function converts the given unicode string into a storable format. Make sure you use getNString to read the data.
	* If you use getString on a column you wrote with setNString, an exception is thrown if the string contains unicode characters lager than 0xFFFF.
	* @param {Number} columnIndex The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	getNString : function(index){return new String()},
	/**
	* Returns the metadata for this statement
	* @returns {db.ParameterMetaData} ParameterMetaData object
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	getParameterMetaData : function(){return $.internal.api.ParameterMetaData},
	/**
	* Returns a number value of the specified column. getReal is used for REAL column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 
	getReal : function(index){return number},
	/**
	* Returns a resultset representing a table output parameter
	* @returns {db.ResultSet} ResultSet of the next output table parameter
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	getResultSet : function(){return $.internal.api.ResultSet},
	/**
	* Used to retrieve the value of a SECONDDATE parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Date} A JavaScript date object representing the value
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getSeconddate : function(index){return Date},
	/**
	* Sets a string parameter used for NCHAR, NVARCHAR parameter types, which should be used for strings containing unicode characters. <br>
	* This function converts the given unicode string into a storable format. Make sure you use getNString to read the data.
	* If you use getString on a column you wrote with setNString, an exception is thrown if the string contains unicode characters lager than 0xFFFF.
	* @param {Number} columnIndex The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	getString : function(index){return new String()},
	/**
	* Used to retrieve the value of a TIME parameter
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Date} A JavaScript date object representing the value
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getTime : function(index){return new String()},
	/**
	* Used to retrieve the value of a TIMESTAMP parameter. <br>
	* As this type contains only time information and no date, the JavaScript's date object will always be 1 Jan 1970 plus the time offset.<br>
	* For example: if the stored value is 10:00:00, the JavaScript date object will specify: 1 Jan 1970 10:00:00
	*
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Date} A JavaScript date object representing the value
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/
	getTimestamp : function(index){return new String()},
	/**
	* Checks if the statement is closed.
	* @returns {boolean} Returns true if the statement is already closed, false if not
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	isClosed : function(){return Boolean},
	/**
	* Sets an integer parameter used for BIGINT parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The number value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setBigInt : function(index,value){},
	/**
	* Sets a Timestamp parameter used for TIMESTAMP parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Date|String} value The timestamp value to be set for this parameter
	* The default format is: <b>date</b> <b>separator</b> <b>time</b>, for example, <br>
	* 2001-01-02 01:02:03.123, where <b>date</b> is the format to use for the date value <br>
	* (see setDate), <b>separator</b> can be a space, a comma, or the letter T, and <br>
	* <b>time</b> is the format to use for the time value (see setTime).<br>
	* Examples:<br> 
	* 2001-01-02 01:02:03.123<br>
	* 2001-01-02,01:02:03.123<br>
	* 2001-01-02T01:02:03.123<br>
	* <i>st.setTimestamp(4,"01.02.2003 01:02:03.123", "DD.MM.YYYY HH:MI:SS.FF");</i> 
	* @param {String} [format=""] Optional, see also setDate and setTime. 
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setTimestamp : function(columnIndex, value, format){},
	/**
	* setBlob is used to specify the values for CHAR, VARCHAR, NCHAR, NVARCHAR, BINARY, VARBINARY parameter types.
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {ArrayBuffer} value The ArrayBuffer object to be set for this parameter, can also be an array of integers or a string.
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setBlob : function(index,value){},
	/**
	* Sets a string parameter used for BINARY, VARBINARY parameter types. <br> Remark: the BINARY type is deprecated - its behavior in row store and column store differs in that row store may pad with zeros. 
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {ArrayBuffer} value The ArrayBuffer object to be set for this parameter.
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setBString : function(index,value){},
	/**
	* setClob is used to specify the values for CLOB parameter types.
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setClob : function(index,value){},
	/**
	* Sets a Date parameter for DATE parameters, but works with TIME and TIMESTAMP.<br/>
	* It is not possible to set the time with setDate; you can only set the date
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Date|String} value The date to be set for this parameter <br/>
	*        The parameter can be a Date object, a string in default ptime format (YYYY-MM-DD), or a string in the optionally specified format.<br/>
	*        For example: 'yyyymmdd' or 'yyyy-mm-dd' or 'yyyy/mm/dd'
	* <ul>
	* <li>Y,YY,YYY,YYYY-year</li>
	* <li>D-day</li>
	* <li>J-julian day</li> 
	* <li>MONTH-by name,MON-abbr.</li> 
	* <li>M-month</li> 
	* <li>Q-quarter</li>
	* <li>RM-roman numeral month</li> 
	* <li>W-week of month</li> 
	* <li>WW-week of year.</li>
	* </ul> <br>
	* Note that when you construct a new Date JavaScript object, the month number starts from <b>0</b> (not 1).<br>
	* For example the following statement represents <em>1st of Jan, 2010</em>:<br>
	* <i>new Date(2010,0,1);</i>
	*
	* @param {String} [format=""] One of the following formats: <br/>
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setDate : function(index,value,format){},
	/**
	* setDecimal sets a decimal parameter used for DECIMAL parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The number value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setDecimal : function(index,value){},
	/**
	* setDouble sets a double parameter used for FLOAT and DOUBLE parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The number value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setDouble : function(index,value){},
	/**
	* Sets an integer parameter used for TINYINT, SMALLINT, INT parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The integer value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setInteger : function(index,value){},
	/**
	* setNClob is used to specify the values for NCLOB parameter types.
	* @param {Number}  index The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter.
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setNClob : function(index,value){},
	/**
	* Sets a string parameter used for NCHAR, NVARCHAR parameter types, which should be used for strings containing unicode characters. <br>
	* This function converts the given unicode string into a storable format. Make sure you use getNString to read the data.
	* If you use getString on a column you wrote with setNString, an exception is thrown if the string contains unicode characters lager than 0xFFFF.
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setNString : function(index,value){},
	/**
	* Sets a null parameter used for all parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setNull : function(index){},
	/**
	* setReal sets a real parameter used for REAL parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The number value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setReal : function(index,value){},
	/**
	* Sets an integer parameter used for SMALLINT parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Number} value The integer value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setSmallInt : function(index,value){},
	/**
	* Sets a string parameter used for CHAR, VARCHAR column types; ASCII only, not suitable for strings containing Unicode characters <br>
	* This function can be used to store strings containing ASCII and a subset of Unicode (namely BMP; the first 0xFFFF characters). <br>
	* This function does not convert data; to improve performance, it stores data directly in the database. <br>
	* Note that special characters (in Unicode SMP or SIP) can cause the read operation to fail. 
	* For more information see {@link http://en.wikipedia.org/wiki/Plane_%28Unicode%29|Plane (Unicode)}. <br>
	* If also need special unicode characters or if you are not sure what this means it is safer to use setNString.
	* @param {Number} index The index of the parameter in the statement <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setString : function(index,value){},
	/**
	* Sets a Time parameter used for TIME parameter types (hour, min, sec) - milliseconds(mls) cannot be set 
	* @param {Number} index The index of the parameter, <b>starting from 1</b>
	* @param {Date|String} value The Date value to be set for this parameter
	* <ul>
	* <li>HH:MI:SS.FF AM</li>
	* <li>HH24:MI:SS.FF</li>
	* <li>HH:MI:SS AM</li>
	* <li>HH24:MI:SS</li>
	* <li>HH:MI AM</li>
	* <li>HH24:MI</li>
	* <li>HH24:MI:SS.FF Z</li>
	* <li>HH24:MI:SS Z</li>
	* </ul>
	* @param {String} [format=""] One of the following formats:<br/>
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setTime : function(index,value,format){},
	/**
	* Sets a Timestamp parameter used for TIMESTAMP parameter types
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @param {Date|string} value The timestamp value to be set for this parameter
	* The default format is: <b>date</b> <b>separator</b> <b>time</b>, for example, <br>
	* 2001-01-02 01:02:03.123, where <b>date</b> is the format to use for the date value <br>
	* (see setDate), <b>separator</b> can be a space, a comma, or the letter T, and <br>
	* <b>time</b> is the format to use for the time value (see setTime).<br>
	* Examples:<br> 
	* 2001-01-02 01:02:03.123<br>
	* 2001-01-02,01:02:03.123<br>
	* 2001-01-02T01:02:03.123<br>
	* <i>st.setTimestamp(4,"01.02.2003 01:02:03.123", "DD.MM.YYYY HH:MI:SS.FF");</i> 
	* @param {String} [format=""] Optional, see also setDate and setTime. 
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setTimestamp : function(index,value,format){},
	/**
	* Sets an integer parameter used for TINYINT parameter types
	* @param {Number} index The index of the parameter, <b>starting from 1</b>
	* @param {Number} value The integer value to be set for this parameter (unsigned char: min 0, max 255)
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
	*/
	setTinyInt : function(index,value){}
};

$.internal.api.PreparedStatement = {
	/**
	 * Adds last parameter values and iterates to the next batch slot
	 * @throws Throws an error if the statement if setBatchSize has not been called successfully or if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	addBatch : function(){},
	/**
	 * Closes the statement
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */	
	close : function(){},
	/**
	 * Executes a common statement
	 * @returns {boolean} True if the statement was a SELECT statement and false if the statement was INSERT, UPDATE, or DELETE
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	execute : function(){return boolean},
	/**
	 * Executes a batch insertion. Use setBatchSize and addBatch to prepare for batch execution.
	 * @returns {array} Array with integers representing the number of updated rows per batch
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	executeBatch : function(){return array},
	/**
	 * Executes an SQL statement
	 * @returns {db.ResultSet} ResultSet Holds the result of the executed SQL statement
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	executeQuery : function(){return $.internal.api.ResultSet},
	/**
	 * Executes an update statement
	 * @returns {Number} The number of changed rows resulting from the update statement
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	executeUpdate : function(){return integer},
	/**
	 * Returns the metadata of the ResultSet
	 * @returns {db.ResultSetMetaData} ResultSetMetaData object
	 * @deprecated Use getMetaData on ResultSet.
	 * @see $.db.ResultSet#getMetaData 
	 */	
	getMetaData : function(){return $.internal.api.ResultSetMetaData},
	/**
	 * Checks if more resultsets are available and prepares the next resultset for retrieval
	 * @returns {boolean} True if the next resultset is available
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	getMoreResults : function(){return boolean},
	/**
	 * Returns the metadata of the prepared statement
	 * @returns {db.ParameterMetaData} ParameterMetaData object
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	getParameterMetaData : function(){return $.internal.api.ParameterMetaData},
	/**
	 * Returns a resultset representing a table output parameter
	 * @returns {db.ResultSet} ResultSet of the next output table parameter
	 * @throws Throws an error if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	getResultSet : function(){return $.internal.api.ResultSet},
	/**
	* Checks if the statement is closed.
	* @returns {boolean} Returns true if the statement is already closed, false if not
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	isClosed : function(){return boolean},
	/**
	 * Reserves space for batch insertion
	 * @param {Number} size The number (count) of batch insertions that will be performed
	 * @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	 * @throws {$.db.SQLException}
	 */
	setBatchSize : function(size){},
	/**
	 * Sets an integer parameter used for BIGINT column types
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The number value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setBigInt : function(index,value){},
	/**
	 * setBlob is used to specify the values for CHAR, VARCHAR, NCHAR, NVARCHAR, BINARY, and VARBINARY column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement, <b>starting from 1</b>
	 * @param {ArrayBuffer} value The ArrayBuffer object to be set for this parameter, can also be an Array of integers or a string.
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setBlob : function(index,value){},
	/**
	 * Sets an array buffer parameter used for BINARY, VARBINARY column types. <br> Remark: the BINARY type is deprecated - its behavior in row store and column store differs in that row store may pad with zeros. 
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {ArrayBuffer} value The ArrayBuffer object to be set for this parameter.
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setBString : function(index,value){},
	/**
	 * setClob is used to specify the values for CLOB column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {String} value The string value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setClob : function(index,value){},
	/**
	 * Sets a Date parameter for DATE columns, but works with TIME and TIMESTAMP. It is not possible to set the time with setDate; you can only set the date.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Date|String} value The date to be set for this parameter <br/>
	 *        The parameter can be either a Date object, a string in default ptime format (YYYY-MM-DD), or a string in the optionally specified format.<br/>
	 *        For example: 'yyyymmdd' or 'yyyy-mm-dd' or 'yyyy/mm/dd'
	 * <ul>
	 * <li>Y,YY,YYY,YYYY-year</li>
	 * <li>D-day</li>
	 * <li>J-julian day</li> 
	 * <li>MONTH-by name,MON-abbr.</li> 
	 * <li>M-month</li> 
	 * <li>Q-quarter</li>
	 * <li>RM-roman numeral month</li> 
	 * <li>W-week of month</li> 
	 * <li>WW-week of year.</li>
	 * </ul>
	 * Note that when you construct a new Date JavaScript object, the month number starts from <b>0</b> (not 1).<br>
	 * For example the following statement represents <em>1st of Jan, 2010</em>:<br>
	 * <i>new Date(2010,0,1);</i>
	 * @param {String} [format=""] One of the following formats: <br/>
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setDate : function(index,value,format){},
	/**
	 * setDecimal sets a decimal parameter used for DECIMAL column types.
	 * @param {Number} index The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The number value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setDecimal : function(index,value){},
	/**
	 * setDouble sets a double parameter used for FLOAT and DOUBLE column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The number value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setDouble : function(index,value){},
	/**
	 * Sets an integer parameter used for TINYINT, SMALLINT, INT column types
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The integer value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setInteger : function(index,value){},
	/**
	 * setNClob is used to specify the values for NCLOB column types.
	 * @param {Number}  columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {String} value The string value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setNClob : function(index,value){},
	/**
	* Sets a string parameter used for NCHAR, NVARCHAR parameter types, which should be used for strings containing unicode characters. <br>
	* This function converts the given unicode string into a storable format. Make sure you use getNString to read the data.
	* If you use getString on a column you wrote with setNString, an exception is thrown if the string contains unicode characters lager than 0xFFFF.
	* @param {Number} columnIndex The index of the parameter <b>starting from 1</b>
	* @param {String} value The string value to be set for this parameter
	* @throws Throws an error on invalid parameters.
	* @throws {$.db.SQLException}
*/
	setNString : function(index,value){},
	/**
	 * setNull is used to set a Null parameter used for all column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setNull : function(index){},
	/**
	 * setReal sets a real parameter used for REAL column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The number value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setReal : function(index,value){},
	/**
	 * Sets an integer parameter used for SMALLINT column types
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Number} value The integer value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setSmallInt : function(index,value){},
	/**
	 * Sets a string parameter used for CHAR, VARCHAR column types; ASCII only, not suitable for strings containing Unicode characters <br>
	 * This function can be used to store strings containing ASCII and a subset of Unicode (namely BMP; the first 0xFFFF characters). <br>
	 * This function does not convert data; to improve performance, it stores data directly in the database. <br>
	 * Note that special characters (in Unicode SMP or SIP) can cause the read operation to fail. 
	 * For more information see {@link http://en.wikipedia.org/wiki/Plane_%28Unicode%29|Plane (Unicode)}. <br>
	 * If also need special unicode characters or if you are not sure what this means it is safer to use setNString.
	 * @param {Number} index The index of the parameter in the statement <b>starting from 1</b>
	 * @param {String} value The string value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setString : function(index,value){},
	/**
	 * setText is used to specify the values for TEXT column types.
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {String} value The string value to be set for this parameter
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setText : function(index,value){},
	/**
	 * Sets a Time parameter used for TIME column types (hour, min, sec). You cannot set milliseconds (mls).
	 * @param {Number} columnIndex The index of the parameter in the prepared statement, <b>starting from 1</b>
	 * @param {Date|String} value The Date value to be set for this parameter <br>
	 * <ul>
	 * <li>HH:MI:SS.FF AM</li>
	 * <li>HH24:MI:SS.FF</li>
	 * <li>HH:MI:SS AM</li>
	 * <li>HH24:MI:SS</li>
	 * <li>HH:MI AM</li>
	 * <li>HH24:MI</li>
	 * <li>HH24:MI:SS.FF Z</li>
	 * <li>HH24:MI:SS Z</li>
	 * </ul>
	 * @param {String} [format=""] One of the following formats:<br/>
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setTime : function(index,value,format){},
	/**
	 * Sets a Timestamp parameter used for TIMESTAMP column types
	 * @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	 * @param {Date|String} value The timestamp value to be set for this parameter
	 * The default format is: <b>date</b> <b>separator</b> <b>time</b>, for example, <br>
	 * 2001-01-02 01:02:03.123, where <b>date</b> is the format to use for the date value <br>
	 * (see setDate), <b>separator</b> can be a space, a comma, or the letter T, and <br>
	 * <b>time</b> is the format to use for the time value (see setTime).<br>
	 * Examples:<br> 
	 * 2001-01-02 01:02:03.123<br>
	 * 2001-01-02,01:02:03.123<br>
	 * 2001-01-02T01:02:03.123<br>
	 * <i>st.setTimestamp(4,"01.02.2003 01:02:03.123", "DD.MM.YYYY HH:MI:SS.FF");</i> 
	 * @param {String} [format=""] Optional, see also setDate and setTime
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setTimestamp : function(index,value,format){},
	/**
	 * Sets an integer parameter used for TINYINT column types
	 * @param {Number} columnIndex The index of the parameter in the prepared statement, <b>starting from 1</b>
	 * @param {Number} value The integer value to be set for this parameter (unsigned char: min 0, max 255)
	 * @throws Throws an error on invalid parameters.
	 * @throws {$.db.SQLException}
	 */
	setTinyInt : function(index,value){}
};

//*************************************************************************************************
//ResultSet
//*************************************************************************************************
/**
* Fetches the next row
* @returns {boolean} True if successful
*/
$.internal.api.ResultSet = {
	close : function(){},
	getBigInt : function(columnIndex){return integer},
	/**
	* Returns a ArrayBuffer value of the specified column. getBlob is used for BLOB column types.
	* @param {Number} columnIndex The target column, <b>starting from 1</b>
	* @returns {ArrayBuffer} Blob representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getBlob : function(columnIndex){return ArrayBuffer},
	/**
	* Returns an ArrayBuffer object of the specified column. getBString is used for BINARY and VARBINARY column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {ArrayBuffer} value ArrayBuffer object
	* @throws Throws an error if the index parameter is not valid or the SQL type of the queried parameter does not match.
	* @throws {$.db.SQLException}
	*/ 	
	getBString : function(columnIndex){return ArrayBuffer},
	/**
	* Returns a string value of the specified column. getClob is used for CLOB column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getClob : function(columnIndex){return new String()},
	/**
	* Used to retrieve the value of a DATE column in a ResultSet.
	* @param {Number} columnIndex The index of the column in the resultset <b>starting from 1</b>
	* @returns {Date} A JavaScript Date object representing the value
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getDate : function(columnIndex){return Date},
	/**
	* Returns a number value of the specified column. getDecimal is used for DECIMAL column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 	
	getDecimal : function(columnIndex){return number},
	/**
	* Returns a number value of the specified column. getDouble is used for DOUBLE column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 	
	getDouble : function(columnIndex){return number},
	/**
	* Returns a number value of the specified column. getFloat is used for FLOAT column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 	
	getFloat : function(columnIndex){return number},
	/**
	* Returns an integer value of the specified column, for TINYINT, SMALLINT, INT, and BIGINT column types.
	* An exception is thrown if the value is bigger than 9007199254740992 (2^53) or smaller than -9007199254740992 (-2^53).
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Integer 
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/
	getInteger : function(columnIndex){return integer},
	/**
	* Returns the metadata of the result set
	* @returns {db.ResultSetMetaData} The metadata of the result set
	*/ 
	getMetaData : function(columnIndex){return $.internal.api.ResultSetMetaData},
	/**
	* Returns a string value of the specified column. getNClob is used for NCLOB and TEXT column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getNClob : function(columnIndex){return new String()},
	/**
	* Returns a string value of the specified column. getNString is used for NCHAR, NVARCHAR, SHORTTEXT column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getNString : function(columnIndex){return new String()},
	/**
	* Returns a number value of the specified column. getReal is used for REAL column types.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {Number} Number representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 	
	getReal : function(columnIndex){return number},
	/**
	* Used to retrieve the value of a SECONDDATE column in a ResultSet.
	* @param {Number} columnIndex The index of the column in the resultset <b>starting from 1</b>
	* @returns {Date} A JavaScript Date object representing the value
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getSeconddate : function(columnIndex){return Date},
	/**
	* Returns a string value of the specified column. getString is used for CHAR and VARCHAR column types. ASCII only, not suitable for strings containing unicode characters.
	* @param {Number} columnIndex The target column <b>starting from 1</b>
	* @returns {String} String representation
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/
	getString : function(columnIndex){return string},
	/**
	* Used to retrieve the value of a TIME column in a ResultSet.
	* @param {Number} columnIndex The index of the column in the resultset <b>starting from 1</b>
	* @returns {Date} A JavaScript Date object representing the value
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/	
	getTime : function(columnIndex){return Date},
	/**
	* Used to retrieve the value of a TIMESTAMP column in a ResultSet. <br>
	* As this type contains only time information and no date, the JavaScript's date object will always be 1 Jan 1970 plus the time offset.<br>
	* For example: if the stored value is 10:00:00, the JavaScript Date object will be: 1 Jan 1970 10:00:00.
	* @param {Number} columnIndex The index of the column in the resultset <b>starting from 1</b>
	* @returns  {Date} A JavaScript Date object representing the value<br>
	* @throws Throws an error if the index parameter is not valid.
	* @throws {$.db.SQLException}
	*/ 	
	getTimestamp : function(columnIndex){return Date},
	/**
	* Checks if the ResultSet is closed.
	* @returns {boolean} Returns true if the ResultSet is already closed, false if not
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	isClosed : function(){return boolean},
	/**
	* Closes the ResultSet
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	next : function(){return boolean}
};

//*************************************************************************************************
//hdbResultSetIterator 
//*************************************************************************************************
$.internal.api.hdbResultSetIterator = {
	/**
	* Checks if the underlying $.hdb.ResultSet has more rows and sets the value of the iterator to the next row if it exists.
	* @Return {Boolean} True if the result set has more rows otherwise returns false.
	*/
	next: function(){return true;},
	/**
	* Returns the current row that the iterator's value is set to. Should always be called after a call to next();
	* @Return {Object} An object representing the row of a $.hdb.ResultSet. 
	* @throw An object representing the row of a $.hdb.ResultSet. 
	*/
	value: function(){return {};}
};

//*************************************************************************************************
//hdbResultSet 
//*************************************************************************************************
$.internal.api.hdbResultSet = {
	/**
	* The number of rows in the $.hdb.ResultSet object 
	* @type Number
	*/
	length : Number,
	/**
	* Returns an iterator over this result set 
	* @Return {$.hdb.ResultSetIterator} ResultSetIterator
	*/
	getIterator : function(){return $.internal.api.hdbResultSetIterator;}
};

//*************************************************************************************************
//hdbProcedureResult 
//*************************************************************************************************
$.internal.api.hdbProcedureResult = {};

$.internal.api.hdbProcedureResult.$resultSets  = function(){
	return [];
};

//**
//* An array containing all of the result sets returned by the stored procedure.
//*/
//$.internal.api.hdbProcedureResult.$resultSets = $.internal.api.hdbResultSet[];

//*************************************************************************************************
//ResultSetMetaData 
//*************************************************************************************************
$.internal.api.ResultSetMetaData = {
	/**
	* Returns the catalog name for the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {String} The catalog name for the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	getCatalogName : function(columnIndex){return new String()},
	/**
	* Returns the number of the columns in the result set
	* @returns {Number} The number of the columns in the result set
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getColumnCount : function(){return integer},
	/**
	* Returns the column display size of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {Number} The column display size of the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getColumnDisplaySize : function(columnIndex){return integer},
	/**
	* Returns the alias or name of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {String} The alias or name of the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getColumnLabel : function(columnIndex){return new String()},
	/**
	* Returns the name of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {String} The name of the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getColumnName : function(columnIndex){return new String()},
	/**
	* Returns the type of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {db.types} The type of the column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getColumnType : function(columnIndex){return $.db.types},
	/**
	* Returns the name of the specified column type
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {String} The name of the column type
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/ 	
	getColumnTypeName : function(columnIndex){return new String()},
	/**
	* Returns the precision of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {Number} The precision of the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getPrecision : function(columnIndex){return integer},
	/**
	* Returns the scale of the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {Number} The scale of the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getScale : function(columnIndex){return integer},
	/**
	* Returns the table name for the specified column
	* @param {Number} columnIndex The index of the column in the result set <b>starting from 1</b>
	* @returns {String} The table name for the specified column
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/ 	
	getTableName : function(columnIndex){return new String()}
};
	
//*************************************************************************************************
// ParameterMetaData 
//*************************************************************************************************		
/**
 * Represents the metadata of a prepared statement
 * @class $.db.ParameterMetaData represents the metadata of a prepared statement 
 * @constructor
 */	
$.internal.api.ParameterMetaData = {
	/**
	* Returns the number of the parameters in the prepared statement
	* @returns {Number} The number of the parameters in the prepared statement
	* @throws Throws an error if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/
	getParameterCount : function(){return integer},
	/**
	* Returns the mode of the specified parameter 
	* @todo provide an enumeration 
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} The mode of the specified parameter
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getParameterMode : function(index){return integer},
	/**
	* Returns the name of the specified parameter
	* @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	* @returns {String} The name of the specified parameter
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getParameterName : function(index){return new String()},
	/**
	* Returns the type (db.types) of the specified parameter
	* @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	* @returns {db.types} The type
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	* @see $.db.types
	*/	
	getParameterType : function(index){return $.db.types},
	/**
	* Returns the typename of the specified parameter
	* @param {Number} columnIndex is the index of the parameter in the prepared statement <b>starting from 1</b>
	* @returns {String} The typename of the specified parameter
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getParameterTypeName : function(index){return new String()},
	/**
	* Returns the designated parameter's number of decimal digits
	* @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	* @returns {String} The designated parameter's number of decimal digits
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getPrecision : function(index){return new String()},
	/**
	* Returns the designated parameter's scale
	* @param {Number} columnIndex The index of the parameter in the prepared statement <b>starting from 1</b>
	* @returns {String} The designated parameter's scale
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	getScale : function(index){return new String()},
	/**
	* Checks if the specified parameter has a default value
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} 1: true, 0: false
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	hasDefault : function(index){return integer},
	/**
	* Checks if the specified parameter is nullable
	* @param {Number} index The index of the parameter, <b>starting from 1</b>
	* @returns {Number} 1: true, 0: false
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	isNullable : function(index){return integer},
	/**
	* Checks if the specified parameter is signed
	* @param {Number} index The index of the parameter <b>starting from 1</b>
	* @returns {Number} 1: true, 0: false
	* @throws Throws an error on invalid parameters or if the object the method is being called on is not valid. 
	* @throws {$.db.SQLException}
	*/	
	isSigned : function(index){return integer}
};

$.internal.api.Body = {
	asArrayBuffer : function(){return ArrayBuffer},
	asString : function(){return new String()}
};

$.internal.api.EntityList = {
	length : integer,
	create : function(){return $.internal.api.WebEntityResponse}
};

$.internal.api.TupelList = {
	length : number,
	get : function(name){return new String()},
	set : function(name,value){return boolean}
};

$.internal.api.WebEntityRequest = {
	/**
	 * The body of the request.
	 * Leave the body undefined, if there is no body.
	 * @type $.web.Body
	 */	
	body : $.internal.api.Body,
	/**
	 * The content type of the entity
	 * @type string
	 * 
	 */	
	contentType : new String(),
	/**
	* The sub-entities of the entity
	* @type $.web.EntityList  
	*/	
	entities : $.internal.api.EntityList,
	/**
	 * The headers of the entity
	 * @type $.web.TupelList
	 */	
	headers : $.internal.api.TupelList,
	/**
	 * The parameters of the entity
	 * @type $.web.TupelList
	 */	
	parameters : $.internal.api.TupelList,
	/**
	 * Sets the body of the entity; 
	 * the method supports all elemental JavaScript types and ArrayBuffers.
	 * 
	 * @param {any|ArrayBuffer} body Can be any elemental JavaScript type or an ArrayBuffer.
	 * @returns {undefined}
	 * @throws Throws an error if the given parameters can not be used as body
	 */		
	setBody : function(body){}
};

$.internal.api.WebEntityResponse = {
	/**
	 * The content type of the entity
	 * @type string
	 * 
	 */	
	contentType : new String(),
	/**
	 * The headers of the entity
	 * @type $.web.TupelList
	 */		
	entities : $.internal.api.EntityList,
	/**
	 * The headers of the entity
	 * @type $.web.TupelList
	 */	
	headers : $.internal.api.TupelList,
	/**
	 * The parameters of the entity
	 * @type $.web.TupelList
	 */		
	parameters : $.internal.api.TupelList,
	/**
	 * Sets the body of the entity; 
	 * the method supports all elemental JavaScript types and ArrayBuffers.
	 * 
	 * @param {any|ArrayBuffer} body Can be any elemental JavaScript type or an ArrayBuffer.
	 * @returns {undefined}
	 * @throws Throws an error if the given parameters can not be used as body
	 */	
	setBody : function(body){}
};
/** 
* Do not use $.internal.api.WebResponse for XSJS/XSJSLIB development
*/
$.internal.api.WebResponse = function(){};
/**
 * Easy access to the cache control header of the entity
 * @type string 
 */
$.internal.api.WebResponse.prototype.cacheControl = new String();
/**
 * The headers of the entity
 * @type $.web.TupelList
 */		
$.internal.api.WebResponse.prototype.contentType = new String();
/**
 * The cookies associated with the entity
 * @type $.web.TupelList
 */	
 $.internal = {};
$.internal.api.WebResponse.prototype.cookies = $.internal.api.TupelList;
/**
 * The headers of the entity
 * @type $.web.TupelList
 */	
 $.internal = {};
$.internal.api.WebResponse.prototype.entities = $.internal.api.EntityList;
/**
 * The parameters of the entity
 * @type $.web.TupelList
 */	
 $.internal = {};
$.internal.api.WebResponse.prototype.headers = $.internal.api.TupelList;
/**
 * The parameters of the entity
 * @type $.web.TupelList
 */	
 $.internal = {};
$.internal.api.WebResponse.prototype.parameters = $.internal.api.TupelList;
/**
 * The HTTP method of the incoming HTTP request
 * @type $.net.http
 */	
$.internal.api.WebResponse.prototype.method = $.net.http;
/**
 * The HTTP status code of the outgoing HTTP response
 * @type $.net.http
 */	
$.internal.api.WebResponse.prototype.status = $.net.http;
/**
 * Sets the body of the entity; 
 * the method supports all elemental JavaScript types and ArrayBuffers.
 * 
 * @param {any|ArrayBuffer} body Can be any elemental JavaScript type or an ArrayBuffer.
 * @returns {undefined}
 * @throws Throws an error if the given parameters can not be used as body
 */	
$.internal.api.WebResponse.prototype.setBody = function(body){};

$.internal.api.util.SAXParser = function(){};
/**
* This property holds a callback function with four parameters: elname(String), attname(String), att_type(String), dflt(String) and isrequired(Integer). 
* @Type function
*/
$.internal.api.util.SAXParser.prototype.attlistDeclHandler  = function(elname,attname,att_type,dflt,isrequired){};

//$.db.SQLException = {};
//$.db.SQLException.code = 0;

//$.internal.api