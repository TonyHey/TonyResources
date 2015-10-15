/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.shells.ui.footerbar.SettingButton.
jQuery.sap.declare("sap.ushell.shells.ui.footerbar.SettingButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new button/SettingButton.
 *
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 *
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event),
 * then the framework assumes property, aggregation, association, event in that order.
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:"
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul>
 *
 *
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/footerbar/CreateTicketButton
 * @extends sap.m.Button
 * @version 1.24.3
 *
 * @constructor
 * @public
 * @name sap.ushell.shells.ui.footerbar.SettingButton
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.Button.extend("sap.ushell.shells.ui.footerbar.SettingButton", { metadata : {
	library : "sap.ushell.shells"
}});


/**
 * Creates a new subclass of class sap.ushell.shells.ui.footerbar.SettingButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 *
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ushell.shells.ui.footerbar.SettingButton.extend
 * @function
 */


// Start of sap/ushell/ui/footerbar/ContactSupportButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    /*global jQuery, sap, window*/

    jQuery.sap.require("sap.ushell.resources");
    jQuery.sap.declare("sap.ushell.shells.ui.footerbar.SettingButton");

    var oBundle = jQuery.sap.resources({
        url : "ui/WebContent/i18n/i18n.properties",
        locale : sap.ui.getCore().getConfiguration().getLanguage()
    });

    /**
     * ContactSupportButton
     *
     * @name sap.ushell.shells.ui.footerbar.SettingButton
     * @private
     * @since 1.16.0
     */
    sap.ushell.shells.ui.footerbar.SettingButton.prototype.init = function () {

        this.setIcon('sap-icon://settings');
        this.setWidth('100%');
        this.setText(oBundle.getText("Configuration"));
        this.setTooltip(oBundle.getText("Configuration"));
        this.attachPress(this.goToSettingPage);
        this.setEnabled();
    };

    sap.ushell.shells.ui.footerbar.SettingButton.prototype.goToSettingPage = function () {
        window.open('http://'+window.location.host+'/sap/rds-bdi/utl/transformer/config.html');
    };

    sap.ushell.shells.ui.footerbar.SettingButton.prototype.setEnabled = function (bEnabled) {
        if (!sap.ushell.Container) {
            if (this.getEnabled()) {
                jQuery.sap.log.warning(
                    "Disabling 'Contact Support' button: unified shell container not initialized",
                    null,
                    "sap.ushell.shells.ui.footerbar.SettingButton"
                );
            }
            bEnabled = false;
        }
        sap.m.Button.prototype.setEnabled.call(this, bEnabled);
    };
}());
