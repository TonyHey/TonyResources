jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.myFiori.util.Formatter = {
		
		_statusStateMap : {
			"Neu" : "Warning",
			"Initial" : "Success"
		},
		
		statusState : function(value) {
			var map =  sap.ui.demo.myFiori.util.Formatter._statusStateMap;
			return (value && map[value]) ? map[value] : "None";
		},
		
		date : function (value) {
			if(value) {
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
					pattern: "yyyy-MM-dd"
				});
				return oDateFormat.format(new Date(value));
			} else {
				return value;
			}
		},
		
		weightState :  function (fValue) {
			    try {
			      fValue = parseFloat(fValue);
			      if (fValue < 0) {
			        return "None";
			      } else if (fValue < 1000) {
			        return "Success";
			      } else if (fValue < 2000) {
			        return "Warning";
			      } else {
			        return "Error";
			      }
			    } catch (err) {
			      return "None";
			    }
			  },
		
		quantity : function (value) {
			try {
				return (value) ? parseFloat(value).toFixed(0) : value;
			} catch (err) {
				return "Exception : Not-A-Number";
			}
		}
};