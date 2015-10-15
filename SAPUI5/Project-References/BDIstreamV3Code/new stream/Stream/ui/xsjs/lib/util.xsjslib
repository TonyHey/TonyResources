//*************************************************************************************************
// Status Definition
//*************************************************************************************************
var STATUS = {
		"SUCCESS" : 'S',
		"ERROR"	  : 'E',
		"WARNING" : 'W'
};


//*************************************************************************************************
// Create Tuple from JSON object
//*************************************************************************************************
function Tuple(obj) {
	var key;
	if(typeof obj !== 'undefined' && obj instanceof Object){
		for (key in obj) {
			this[key] = obj[key];
		}
	}
}

Tuple.prototype = {
	get : function(key) {
		return this[key];
	}
};


// *************************************************************************************************
// Convert month num to string
// *************************************************************************************************
function getMonthString(num) {
	var month;
	switch (num) {
	case '01':
		month = "January";
		break;
	case '02':
		month = "February";
		break;
	case '03':
		month = "March";
		break;
	case '04':
		month = "April";
		break;
	case '05':
		month = "May";
		break;
	case '06':
		month = "June";
		break;
	case '07':
		month = "July";
		break;
	case '08':
		month = "August";
		break;
	case '09':
		month = "September";
		break;
	case '10':
		month = "October";
		break;
	case '11':
		month = "November";
		break;
	case '12':
		month = "December";
		break;
	default:
		month = "Invalid month";
	}
	return month;
}

// *************************************************************************************************
// DB Utils 
// *************************************************************************************************
function getExtParam(procParam) {
	var servReg = $.import("sap.rds-bdi.stream.ui.xsjs.services","default");
	return servReg.paramMapping[procParam];
}

function callProcedure(schema, path, procedure, params) {
	
	//Prepare for procedure input parameters (scalar type only)
	var procParamsValue = [];
	var i;
	var procParams = (function(schema, path, procedure){
		var connection = $.hdb.getConnection(); // TODO Add isolationLevel and sqlcc
		// later
		var sql = "SELECT \"PARAMETER_NAME\" FROM \"SYS\".\"PROCEDURE_PARAMETERS\" WHERE SCHEMA_NAME = '"
					+ schema
					+ "' AND PROCEDURE_NAME = '"
					+ path
					+ "::"
					+ procedure
					+ "' AND PARAMETER_TYPE = 'IN' ORDER BY \"POSITION\"";
		var result = connection.executeQuery(sql);
		var iterator = result.getIterator();
		var procParams = [];
		while (iterator.next()) {
			procParams.push(iterator.value()["PARAMETER_NAME"]);
		}
		return procParams;		
	}(schema, path, procedure));	
	
	for (i = 0; i < procParams.length; i++) {
		procParamsValue.push(params[getExtParam(procParams[i])]);
	}
	
	//Prepare for procedure function
	var XSProc = $.import("sap.hana.xs.libs.dbutils", "procedures");
	XSProc.setTempSchema(schema);
	var procProxy = XSProc.procedure(schema, path, procedure);
	var rs = procProxy.apply(null,procParamsValue).VAR_OUT;
	return rs;
}


