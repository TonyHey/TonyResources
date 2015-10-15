/**
 * Utils for configuration
 * 
 * Creator: Ye Tian
 * Contact: y.tian@sap.com
 * 
 * Functions:
 * ========================================
 * 1) trim, escape and removeEnters functions for Strings
 * 2) a template for Tooltips
 * 3) a template for alerted information
 *
 *
 * Note:
 * This javascript source file should be executed at the very beginning.
 */

/**
 * Trim Strings if .trim() is not natively available
 */

if (!String.prototype.trim) 
{
	String.prototype.trim = function () 
	{
		return this.replace(/^\s+|\s+$/g, '');
	};
}

/** 
 * Escape, in case of being needed.
 */

if(!String.prototype.escape)
{
	String.prototype.escape = function() 
	{
	    return this.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
	};
}

/** 
 * removeEnters, in case of being needed.
 */

if(!String.prototype.removeEnters)
{
	String.prototype.removeEnters = function()
	{
	    return this.replace(/\n/gm, ' ');
	};
}

/** 
 * Template for tooltips
 */

function utils_displayTooltips_callout(sText)
{
	var oText = new sap.ui.commons.TextView({text:sText});
	var oCallout = new sap.ui.commons.Callout({ content: oText });
	return oCallout;
}

/** 
 * Template for alerted information
 */

function utils_alert(sText)
{
	sap.ui.commons.MessageBox.show(sText, sap.ui.commons.MessageBox.Icon.WARNING);
}










