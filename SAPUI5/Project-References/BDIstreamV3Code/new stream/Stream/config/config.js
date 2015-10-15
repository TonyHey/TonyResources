sap_namespace = function (ns) {
	var nsparts = ns.split('.'),
		curNs = window || document, 
		index = null, 
		part = null;

	for (index in nsparts) {
		part = nsparts[index];
		if (typeof curNs[part] === 'undefined') {
			curNs[part] = {};
		}
		curNs = curNs[part];
	}
};

sap_namespace("sap.i18n.Language");
sap.i18n.Language = {
	data: null,
	/**
	 * initializes the Language object by retrieving the i18n.properties file
	 */
	init: function() {
		this.data = jQuery.sap.resources({
			url : "ui/WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage()
		});	
	},
	/**
	 * gets the text from the language file
	 * @param sKey the key defining which string should be retrieved
	 * @returns the language string to the given key
	 */
	getText: function(sKey) {
		return this.data.getText(sKey);
	}
};
sap.i18n.Language.init();

sap_namespace("stream.config");
stream.config = {
		ESP: {type: "ESP", name: sap.i18n.Language.getText("ESP_Name")},
		ESP_CACHE: {type: "ESP_CACHE", name: sap.i18n.Language.getText("ESP_CACHE_Name")},
		ESP_NLS: {type: "ESP_NLS", name: sap.i18n.Language.getText("ESP_NLS_Name")},
		ESP_HANA_OUTPUT: {type: "ESP_HANA_OUTPUT", name: sap.i18n.Language.getText("ESP_HANA_OUTPUT_Name")},
		ESP_LOG_FILE_IDS_404: {type: "ESP_LOG_FILE_IDS_404", name: sap.i18n.Language.getText("ESP_LOG_FILE_IDS_404_Name")},
};


