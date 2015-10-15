
// ---- sap.ui.fl.Preprocessor --------------------------------------------------------------------------

/**
 * UI5 Flexiblity Services Preprocessor implementation that can be hooked in the View life cycle.
 * @class
 * @public
 * @extends sap.ui.core.mvc.Preprocessor
 * 
 */
sap.ui.fl.Preprocessor = function() {};
/**
 * Creates a new subclass of class sap.ui.fl.Preprocessor with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.mvc.Preprocessor.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.fl.Preprocessor.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.fl.Preprocessor.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.fl.Preprocessor.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.fl.PreprocessorImpl --------------------------------------------------------------------------

/**
 * UI5 Flexiblity Services Preprocessor implementation that can be hooked in the View life cycle.
 * @class
 * @public
 * 
 */
sap.ui.fl.PreprocessorImpl = function() {};
// ---- static fields of namespaces ---------------------------------------------------------------------
