
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.uxap --------------------------------------------------------------------------


// ---- sap.uxap.AnchorBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new AnchorBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Toolbar#constructor sap.m.Toolbar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A AnchorBar is bar that displays content differently between desktop/tablet and phone.
 * @extends sap.m.Toolbar
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.AnchorBar = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.AnchorBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * The button that represents the section being scrolled by the user.
 * @return {string} Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getSelectedButton = function() { return ""; };

/**
 * 
 * Getter for property <code>showPopover</code>.
 * Show or not the popover when clicking on first level buttons
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showPopover</code>
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getShowPopover = function() { return false; };

/**
 * 
 * The button that represents the section being scrolled by the user.
 * @param {string | sap.m.Button} vSelectedButton 
 *    Id of an element which becomes the new target of this <code>selectedButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.uxap.AnchorBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setSelectedButton = function(vSelectedButton) { return new sap.uxap.AnchorBar(); };


// ---- sap.uxap.BlockBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BlockBase.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumnLayout columnLayout} : sap.uxap.BlockBaseColumnLayout (default: 'auto')</li>
 * <li>{@link #getShowSubSectionMore showSubSectionMore} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMode mode} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMappings mappings} : sap.uxap.ModelMapping[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * A block is the main element that will be displayed, mainly in an object page, but not necessarily
 * only there.
 * </p><p>
 * A block is a control that use a view for storing its internal control tree.
 * A block is a control that has modes and a view associated to each modes.
 * At rendering time, the view associated to the mode is rendered.
 * </p><p>
 * As any UI5 views, the view can have a controller which automatically comes a this.oParentBlock attribute (so that the controller can interacts with the block).
 * If the controller implements the onParentBlockModeChange method, this method will get called with the sMode parameter when the view is used or re-used by the block.
 * </p><p>
 * For the actual properties of this control please see the .js file as we are defining a custom Metadata
 * to be used for this control.
 * @extends sap.ui.core.Control
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.BlockBase = function(sId,mSettings) {};
/**
 * 
 * Adds some mapping <code>oMapping</code> 
 * to the aggregation named <code>mappings</code>.
 * @param {sap.uxap.ModelMapping}
 *            oMapping the mapping to add; if empty, nothing is inserted
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.addMapping = function(oMapping) { return new sap.uxap.BlockBase(); };

/**
 * 
 * </p><p>
 * Create view
 * @param mParameter
 * @returns {sap.ui.core.mvc.View}
 * @protected
 */
sap.uxap.BlockBase.prototype.createView = function(mParameter) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Destroys all the mappings in the aggregation 
 * named <code>mappings</code>.
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.destroyMappings = function() { return new sap.uxap.BlockBase(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.BlockBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.BlockBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>columnLayout</code>.
 * Defines how many columns should it be assigned by the objectPageSubSection
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.uxap.BlockBaseColumnLayout} the value of property <code>columnLayout</code>
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getColumnLayout = function() { return new sap.uxap.BlockBaseColumnLayout(); };

/**
 * 
 * Getter for aggregation <code>mappings</code>.<br/>
 * the model mappings to use at runtime: provide a mapping between the runtime model bindings and the block design time model bindings
 * @return {sap.uxap.ModelMapping[]}
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getMappings = function() { return new Array(); };

/**
 * 
 * Getter for property <code>mode</code>.
 * The mode to use for rendering the block.
 * The mode can be anything as long as the block developer is providing a corresponding view for it.
 * </p><p>
 * When running inside of an ObjectPageLayout, the Block is expected to provide a view for the "Collapsed" and "Expanded" modes (which can be the same).
 * views: {
 * </p><p>
 * define your views here following the pattern:
 * "yourModeName": {viewName: "your.view.path" , type: "yourUI5ViewType" }
 * </p><p>
 * for example:
 * "OneLine": {
 * viewName: "MyBlock.OneLine",
 * type: "XML"
 * },
 * "TwoLine": {
 * viewName: "MyBlock.ViewNameAndModeCanBeDifferent",
 * type: "XML"
 * }
 * </p><p>
 * if no views are provided, the blockBase looks for an xml view which name is equal to the block's one in this case MyBlock.view.xml
 * </p><p>
 * }
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>mode</code>
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getMode = function() { return ""; };

/**
 * 
 * The view that is currently being used for rendering the control.
 * @return {string} Id of the element which is the current target of the <code>selectedView</code> association, or null
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getSelectedView = function() { return ""; };

/**
 * 
 * Getter for property <code>showSubSectionMore</code>.
 * Ask the parent sap.uxap.ObjectPageSubSection to show its "see more" button.
 * If at least one block within the ObjectPageSubSection is of type BlockBase and ask for the "see more" button then it would be displayed. Otherwise it's always hidden.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showSubSectionMore</code>
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getShowSubSectionMore = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible blocks are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation named <code>mappings</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ModelMapping}
 *            oMapping the mapping whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.indexOfMapping = function(oMapping) { return 0; };

/**
 * 
 * Inserts a mapping into the aggregation named <code>mappings</code>.
 * @param {sap.uxap.ModelMapping}
 *          oMapping the mapping to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the mapping should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the mapping is inserted at 
 *             the last position        
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.insertMapping = function(oMapping,iIndex) { return new sap.uxap.BlockBase(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>mappings</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ModelMapping[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.removeAllMappings = function() { return new Array(); };

/**
 * 
 * Removes an mapping from the aggregation named <code>mappings</code>.
 * @param {int | string | sap.uxap.ModelMapping} vMapping the mapping to remove or its index or id
 * @return {sap.uxap.ModelMapping} the removed mapping or null
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.removeMapping = function(vMapping) { return new sap.uxap.ModelMapping(); };

/**
 * 
 * Setter for property <code>columnLayout</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.uxap.BlockBaseColumnLayout} sColumnLayout  new value for property <code>columnLayout</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setColumnLayout = function(sColumnLayout) { return new sap.uxap.BlockBase(); };

/**
 * 
 * Set the view mode for this particular block
 * @param sMode {string} the mode to apply to the control (that should be synchronized with view declared)
 * @public
 */
sap.uxap.BlockBase.prototype.setMode = function(sMode) { return null; };

/**
 * 
 * The view that is currently being used for rendering the control.
 * @param {string | sap.ui.core.Control} vSelectedView 
 *    Id of an element which becomes the new target of this <code>selectedView</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setSelectedView = function(vSelectedView) { return new sap.uxap.BlockBase(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setVisible = function(bVisible) { return new sap.uxap.BlockBase(); };


// ---- sap.uxap.BlockBaseColumnLayout --------------------------------------------------------------------------


// ---- sap.uxap.HierarchicalSelect --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HierarchicalSelect.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Select#constructor sap.m.Select}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A select that display items on 2 level of hierarchy.
 * If a provided item has a custom data named "secondLevel", then it will be displayed as a second level, otherwise it would be displayed as a first level.
 * @extends sap.m.Select
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.HierarchicalSelect = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.uxap.HierarchicalSelect with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.HierarchicalSelect.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.uxap.ModelMapping --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ModelMapping.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExternalModelName externalModelName} : string</li>
 * <li>{@link #getInternalModelName internalModelName} : string (default: 'Model')</li>
 * <li>{@link #getExternalPath externalPath} : string</li></ul>
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
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Define the entity that will be passed to the ObjectPageLayout.
 * @extends sap.ui.core.Element
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ModelMapping = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ModelMapping.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>externalModelName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>externalModelName</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalModelName = function() { return ""; };

/**
 * 
 * Getter for property <code>externalPath</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>externalPath</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalPath = function() { return ""; };

/**
 * 
 * Getter for property <code>internalModelName</code>.
 * </p><p>
 * Default value is <code>Model</code>
 * @return {string} the value of property <code>internalModelName</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getInternalModelName = function() { return ""; };

/**
 * 
 * Setter for property <code>externalModelName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sExternalModelName  new value for property <code>externalModelName</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalModelName = function(sExternalModelName) { return new sap.uxap.ModelMapping(); };

/**
 * 
 * Setter for property <code>externalPath</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sExternalPath  new value for property <code>externalPath</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalPath = function(sExternalPath) { return new sap.uxap.ModelMapping(); };

/**
 * 
 * Setter for property <code>internalModelName</code>.
 * </p><p>
 * Default value is <code>Model</code> 
 * @param {string} sInternalModelName  new value for property <code>internalModelName</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setInternalModelName = function(sInternalModelName) { return new sap.uxap.ModelMapping(); };


// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageConfigurationMode.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageHeader --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageHeader.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getObjectImageURI objectImageURI} : string</li>
 * <li>{@link #getObjectImageAlt objectImageAlt} : string (default: '')</li>
 * <li>{@link #getObjectImageDensityAware objectImageDensityAware} : boolean (default: false)</li>
 * <li>{@link #getObjectTitle objectTitle} : string</li>
 * <li>{@link #getObjectSubtitle objectSubtitle} : string</li>
 * <li>{@link #getObjectImageShape objectImageShape} : sap.uxap.ObjectPageHeaderPictureShape (default: sap.uxap.ObjectPageHeaderPictureShape.Square)</li>
 * <li>{@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible} : boolean (default: false)</li>
 * <li>{@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getHeaderDesign headerDesign} : sap.uxap.ObjectPageHeaderDesign (default: sap.uxap.ObjectPageHeaderDesign.Light)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNavigationBar navigationBar} : sap.m.Bar</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Header of an ObjectPage, based on a sap.ui.core.Control.
 * This control allows to specify the basic properties for an object (title / description / picture)
 * As well as define some actions and additional info that will be displayed in a float layout.
 * @extends sap.ui.core.Control
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageHeader = function(sId,mSettings) {};
/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyActions = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Destroys the navigationBar in the aggregation 
 * named <code>navigationBar</code>.
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyNavigationBar = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * </p><p>
 * List of actions that will be displayed in the header.
 * You can use ObjectPageHeaderActionButton controls for having a different display between the header content and the action sheet.
 * You can add an use ObjectPageHeaderLayoutData that will be used to display a visual separator.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>headerDesign</code>.
 * Represent the design either Light or Dark for the
 * </p><p>
 * Default value is <code>Light</code>
 * @return {sap.uxap.ObjectPageHeaderDesign} the value of property <code>headerDesign</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getHeaderDesign = function() { return new sap.uxap.ObjectPageHeaderDesign(); };

/**
 * 
 * Getter for property <code>isActionAreaAlwaysVisible</code>.
 * Flag to set if the action buttons should always be visible or if it should be visible only when scrolling.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>isActionAreaAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsActionAreaAlwaysVisible = function() { return false; };

/**
 * 
 * Getter for property <code>isObjectIconAlwaysVisible</code>.
 * Flag to set if the icon should always be visible or if it should be visible only when scrolling.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isObjectIconAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectIconAlwaysVisible = function() { return false; };

/**
 * 
 * Getter for property <code>isObjectSubtitleAlwaysVisible</code>.
 * Flag to set if the title should always be visible or if it should be visible only when scrolling.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>isObjectSubtitleAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectSubtitleAlwaysVisible = function() { return false; };

/**
 * 
 * Getter for property <code>isObjectTitleAlwaysVisible</code>.
 * Flag to set if the title should always be visible or if it should be visible only when scrolling.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>isObjectTitleAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectTitleAlwaysVisible = function() { return false; };

/**
 * 
 * Getter for aggregation <code>navigationBar</code>.<br/>
 * </p><p>
 * A navigation bar you can embed in the header properly.
 * @return {sap.m.Bar}
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getNavigationBar = function() { return new sap.m.Bar(); };

/**
 * 
 * Getter for property <code>objectImageAlt</code>.
 * The string to be used in the alt attribute for the objectImage.
 * See sap.m.Image for more detail on alt property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>objectImageAlt</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageAlt = function() { return ""; };

/**
 * 
 * Getter for property <code>objectImageDensityAware</code>.
 * If this is set to true, the objectImage will send several requests trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * By default, this is set to false so the objectImage will be loaded directly saving bandwidth.
 * </p><p>
 * If pixel perfectness (versus bandwidth) is the key for the application, set this value to true.
 * </p><p>
 * Default value is false.
 * See sap.m.Image for more detail on density awareness.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>objectImageDensityAware</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>objectImageShape</code>.
 * Information to know if the header picture should be displayed in a square or with a circle shaped mask.
 * </p><p>
 * Default value is <code>Square</code>
 * @return {sap.uxap.ObjectPageHeaderPictureShape} the value of property <code>objectImageShape</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageShape = function() { return new sap.uxap.ObjectPageHeaderPictureShape(); };

/**
 * 
 * Getter for property <code>objectImageURI</code>.
 * The path that can be used to retrieve a picture
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>objectImageURI</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageURI = function() { return ""; };

/**
 * 
 * Getter for property <code>objectSubtitle</code>.
 * The description of the object
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>objectSubtitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectSubtitle = function() { return ""; };

/**
 * 
 * Getter for property <code>objectTitle</code>.
 * The title of the object
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>objectTitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.core.Control} vAction the action to remove or its index or id
 * @return {sap.ui.core.Control} the removed action or null
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Setter for property <code>headerDesign</code>.
 * </p><p>
 * Default value is <code>Light</code> 
 * @param {sap.uxap.ObjectPageHeaderDesign} oHeaderDesign  new value for property <code>headerDesign</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setHeaderDesign = function(oHeaderDesign) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>isActionAreaAlwaysVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIsActionAreaAlwaysVisible  new value for property <code>isActionAreaAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsActionAreaAlwaysVisible = function(bIsActionAreaAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>isObjectIconAlwaysVisible</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsObjectIconAlwaysVisible  new value for property <code>isObjectIconAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectIconAlwaysVisible = function(bIsObjectIconAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>isObjectSubtitleAlwaysVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIsObjectSubtitleAlwaysVisible  new value for property <code>isObjectSubtitleAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectSubtitleAlwaysVisible = function(bIsObjectSubtitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>isObjectTitleAlwaysVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIsObjectTitleAlwaysVisible  new value for property <code>isObjectTitleAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectTitleAlwaysVisible = function(bIsObjectTitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for the aggregated <code>navigationBar</code>.
 * @param {sap.m.Bar} oNavigationBar
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setNavigationBar = function(oNavigationBar) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectImageAlt</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sObjectImageAlt  new value for property <code>objectImageAlt</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageAlt = function(sObjectImageAlt) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectImageDensityAware</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bObjectImageDensityAware  new value for property <code>objectImageDensityAware</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageDensityAware = function(bObjectImageDensityAware) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectImageShape</code>.
 * </p><p>
 * Default value is <code>Square</code> 
 * @param {sap.uxap.ObjectPageHeaderPictureShape} oObjectImageShape  new value for property <code>objectImageShape</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageShape = function(oObjectImageShape) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectImageURI</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sObjectImageURI  new value for property <code>objectImageURI</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageURI = function(sObjectImageURI) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectSubtitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sObjectSubtitle  new value for property <code>objectSubtitle</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectSubtitle = function(sObjectSubtitle) { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Setter for property <code>objectTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sObjectTitle  new value for property <code>objectTitle</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectTitle = function(sObjectTitle) { return new sap.uxap.ObjectPageHeader(); };


// ---- sap.uxap.ObjectPageHeaderActionButton --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageHeaderActionButton.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHideText hideText} : boolean (default: true)</li>
 * <li>{@link #getHideIcon hideIcon} : boolean (default: false)</li></ul>
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
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Button that can be used in the ObjectPageHeader action aggregation.
 * @extends sap.m.Button
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageHeaderActionButton = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>hideIcon</code>.
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hideIcon</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideIcon = function() { return false; };

/**
 * 
 * Getter for property <code>hideText</code>.
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>hideText</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideText = function() { return false; };

/**
 * 
 * Setter for property <code>hideIcon</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHideIcon  new value for property <code>hideIcon</code>
 * @return {sap.uxap.ObjectPageHeaderActionButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideIcon = function(bHideIcon) { return new sap.uxap.ObjectPageHeaderActionButton(); };

/**
 * 
 * Setter for property <code>hideText</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bHideText  new value for property <code>hideText</code>
 * @return {sap.uxap.ObjectPageHeaderActionButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideText = function(bHideText) { return new sap.uxap.ObjectPageHeaderActionButton(); };


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderDesign.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageHeaderLayoutData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageHeaderLayoutData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getShowSeparatorBefore showSeparatorBefore} : boolean (default: false)</li>
 * <li>{@link #getShowSeparatorAfter showSeparatorAfter} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li></ul>
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
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within an ObjectPage headerContent aggregation
 * @extends sap.ui.core.LayoutData
 * @version 1.28.1
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageHeaderLayoutData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>showSeparatorAfter</code>.
 * If this property is set the control will display a separator after it.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showSeparatorAfter</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorAfter = function() { return false; };

/**
 * 
 * Getter for property <code>showSeparatorBefore</code>.
 * If this property is set the control will display a separator before it.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showSeparatorBefore</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorBefore = function() { return false; };

/**
 * 
 * Getter for property <code>visibleL</code>.
 * If this property is set the control will be visible (or not) in a large sized layout.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleL</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleL = function() { return false; };

/**
 * 
 * Getter for property <code>visibleM</code>.
 * If this property is set the control will be visible (or not) in a medium sized layout.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleM</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleM = function() { return false; };

/**
 * 
 * Getter for property <code>visibleS</code>.
 * If this property is set the control will be visible (or not) in a small sized layout.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleS</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleS = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * If this property is set the control will take the provided size.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>showSeparatorAfter</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowSeparatorAfter  new value for property <code>showSeparatorAfter</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorAfter = function(bShowSeparatorAfter) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * 
 * Setter for property <code>showSeparatorBefore</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowSeparatorBefore  new value for property <code>showSeparatorBefore</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorBefore = function(bShowSeparatorBefore) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * 
 * Setter for property <code>visibleL</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleL  new value for property <code>visibleL</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleL = function(bVisibleL) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * 
 * Setter for property <code>visibleM</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleM  new value for property <code>visibleM</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleM = function(bVisibleM) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * 
 * Setter for property <code>visibleS</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleS  new value for property <code>visibleS</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleS = function(bVisibleS) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setWidth = function(sWidth) { return new sap.uxap.ObjectPageHeaderLayoutData(); };


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderPictureShape.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowAnchorBar showAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getShowAnchorBarPopover showAnchorBarPopover} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnableLazyLoading enableLazyLoading} : boolean (default: false)</li>
 * <li>{@link #getSubSectionLayout subSectionLayout} : sap.uxap.ObjectPageSubSectionLayout (default: sap.uxap.ObjectPageSubSectionLayout.TitleOnTop)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} <strong>(default aggregation)</strong> : sap.uxap.ObjectPageSection[]</li>
 * <li>{@link #getHeaderTitle headerTitle} : sap.uxap.ObjectPageHeader</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.uxap.ObjectPageLayout#event:toggleAnchorBar toggleAnchorBar} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An ObjectPageLayout is a generic view to display blocks of information.
 * @extends sap.ui.core.Control
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageLayout = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the anchorBar is switch from moving to fixed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.fixed This flag indicates whether the anchorBar is switched to fixed or not (if false it is switched to moving).
 * @public
 */
sap.uxap.ObjectPageLayout.prototype.toggleAnchorBar = function(oControlEvent) { return null; };

/**
 * 
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addHeaderContent = function(oHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Adds some section <code>oSection</code> 
 * to the aggregation named <code>sections</code>.
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addSection = function(oSection) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uxap.ObjectPageLayout</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the anchorBar is switch from moving to fixed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code>.<br/> itself.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.attachToggleAnchorBar = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderContent = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Destroys the headerTitle in the aggregation 
 * named <code>headerTitle</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderTitle = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Destroys all the sections in the aggregation 
 * named <code>sections</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroySections = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.detachToggleAnchorBar = function(fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event toggleAnchorBar to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'fixed' of type <code>boolean</code> This flag indicates whether the anchorBar is switched to fixed or not (if false it is switched to moving).</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageLayout.prototype.fireToggleAnchorBar = function(mArguments) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Getter for property <code>enableLazyLoading</code>.
 * Enable the lazy loading based on the position in the current window
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableLazyLoading</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getEnableLazyLoading = function() { return false; };

/**
 * 
 * Getter for aggregation <code>headerContent</code>.<br/>
 * Object Page header content (What's up / KPI List).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>headerTitle</code>.<br/>
 * Object Page header (ObjectHeader).
 * @return {sap.uxap.ObjectPageHeader}
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderTitle = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * 
 * Getter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Returns the ui5 id of the section that is currently being scrolled.
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageLayout.prototype.getScrollingSectionId = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>sections</code>.<br/>
 * The various sections or subSections contained within the Object Page.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for ObjectPageLayout.
 * @return {sap.uxap.ObjectPageSection[]}
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSections = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showAnchorBar</code>.
 * Show or not the anchor bar
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showAnchorBar</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBar = function() { return false; };

/**
 * 
 * Getter for property <code>showAnchorBarPopover</code>.
 * Show or not the anchor bar popover when clicking on section links
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showAnchorBarPopover</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBarPopover = function() { return false; };

/**
 * 
 * Getter for property <code>subSectionLayout</code>.
 * Display the titles on the left or on top of the subSection contents.
 * </p><p>
 * Default value is <code>TitleOnTop</code>
 * @return {sap.uxap.ObjectPageSubSectionLayout} the value of property <code>subSectionLayout</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSubSectionLayout = function() { return new sap.uxap.ObjectPageSubSectionLayout(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation named <code>sections</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfSection = function(oSection) { return 0; };

/**
 * 
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Inserts a section into the aggregation named <code>sections</code>.
 * @param {sap.uxap.ObjectPageSection}
 *          oSection the section to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the section should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the section is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertSection = function(oSection,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>sections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ObjectPageSection[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllSections = function() { return new Array(); };

/**
 * 
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 * @param {int | string | sap.ui.core.Control} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerContent or null
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an section from the aggregation named <code>sections</code>.
 * @param {int | string | sap.uxap.ObjectPageSection} vSection the section to remove or its index or id
 * @return {sap.uxap.ObjectPageSection} the removed section or null
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeSection = function(vSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * 
 * Setter for property <code>enableLazyLoading</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableLazyLoading  new value for property <code>enableLazyLoading</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setEnableLazyLoading = function(bEnableLazyLoading) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeight = function(sHeight) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Setter for property <code>showAnchorBar</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowAnchorBar  new value for property <code>showAnchorBar</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowAnchorBar = function(bShowAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * 
 * Setter for property <code>subSectionLayout</code>.
 * </p><p>
 * Default value is <code>TitleOnTop</code> 
 * @param {sap.uxap.ObjectPageSubSectionLayout} oSubSectionLayout  new value for property <code>subSectionLayout</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setSubSectionLayout = function(oSubSectionLayout) { return new sap.uxap.ObjectPageLayout(); };


// ---- sap.uxap.ObjectPageSection --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageSection.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSections subSections} <strong>(default aggregation)</strong> : sap.uxap.ObjectPageSubSection[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A Section in the ObjectPage layout is a container for Objectpage Subsections
 * @extends sap.uxap.ObjectPageSectionBase
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSection = function(sId,mSettings) {};
/**
 * 
 * Adds some subSection <code>oSubSection</code> 
 * to the aggregation named <code>subSections</code>.
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.addSubSection = function(oSubSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * 
 * Destroys all the subSections in the aggregation 
 * named <code>subSections</code>.
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.destroySubSections = function() { return new sap.uxap.ObjectPageSection(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * Display the section title or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for aggregation <code>subSections</code>.<br/>
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for ObjectPageSection.
 * @return {sap.uxap.ObjectPageSubSection[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getSubSections = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation named <code>subSections</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.indexOfSubSection = function(oSubSection) { return 0; };

/**
 * 
 * Inserts a subSection into the aggregation named <code>subSections</code>.
 * @param {sap.uxap.ObjectPageSubSection}
 *          oSubSection the subSection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subSection should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subSection is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.insertSubSection = function(oSubSection,iIndex) { return new sap.uxap.ObjectPageSection(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>subSections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ObjectPageSubSection[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeAllSubSections = function() { return new Array(); };

/**
 * 
 * Removes an subSection from the aggregation named <code>subSections</code>.
 * @param {int | string | sap.uxap.ObjectPageSubSection} vSubSection the subSection to remove or its index or id
 * @return {sap.uxap.ObjectPageSubSection} the removed subSection or null
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeSubSection = function(vSubSection) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setShowTitle = function(bShowTitle) { return new sap.uxap.ObjectPageSection(); };


// ---- sap.uxap.ObjectPageSectionBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageSectionBase.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomAnchorBarButton customAnchorBarButton} : sap.m.Button</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An abstract container for object page sections and subSections
 * @extends sap.ui.core.Control
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSectionBase = function(sId,mSettings) {};
/**
 * 
 * Explicitly ask to connect to the UI5 model tree
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSectionBase.prototype.connectToModels = function() { return null; };

/**
 * 
 * Destroys the customAnchorBarButton in the aggregation 
 * named <code>customAnchorBarButton</code>.
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.destroyCustomAnchorBarButton = function() { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSectionBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>customAnchorBarButton</code>.<br/>
 * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar.
 * This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
 * </p><p>
 * If you want to change some of the button properties, you would need to bind them to a model.
 * @return {sap.m.Button}
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getCustomAnchorBarButton = function() { return new sap.m.Button(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Section Title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible ObjectPageSectionBase are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for the aggregated <code>customAnchorBarButton</code>.
 * @param {sap.m.Button} oCustomAnchorBarButton
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setCustomAnchorBarButton = function(oCustomAnchorBarButton) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setTitle = function(sTitle) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setVisible = function(bVisible) { return new sap.uxap.ObjectPageSectionBase(); };


// ---- sap.uxap.ObjectPageSubSection --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectPageSubSection.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMode mode} : sap.uxap.ObjectPageSubSectionMode (default: sap.uxap.ObjectPageSubSectionMode.Collapsed)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBlocks blocks} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getMoreBlocks moreBlocks} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A SubSection in the ObjectPage layout is a container for Objectpage Blocks
 * @extends sap.uxap.ObjectPageSectionBase
 * @version 1.28.1
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSubSection = function(sId,mSettings) {};
/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Adds some block <code>oBlock</code> 
 * to the aggregation named <code>blocks</code>.
 * @param {sap.ui.core.Control}
 *            oBlock the block to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addBlock = function(oBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Adds some moreBlock <code>oMoreBlock</code> 
 * to the aggregation named <code>moreBlocks</code>.
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addMoreBlock = function(oMoreBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyActions = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Destroys all the blocks in the aggregation 
 * named <code>blocks</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Destroys all the moreBlocks in the aggregation 
 * named <code>moreBlocks</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyMoreBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSubSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions available for this subSection
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>blocks</code>.<br/>
 * controls to display in the subsection
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for ObjectPageSubSection.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getBlocks = function() { return new Array(); };

/**
 * 
 * Getter for property <code>mode</code>.
 * Mode of subsection (propagated to the children blocks and moreBlocks modes)
 * Blocks of moreBlocks aggregation are getting displayed only when SubSection mode is set to Expanded.
 * </p><p>
 * Default value is <code>Collapsed</code>
 * @return {sap.uxap.ObjectPageSubSectionMode} the value of property <code>mode</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMode = function() { return new sap.uxap.ObjectPageSubSectionMode(); };

/**
 * 
 * Getter for aggregation <code>moreBlocks</code>.<br/>
 * Additional controls to display when the show more / see all button is pressed
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMoreBlocks = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>blocks</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oBlock the block whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfBlock = function(oBlock) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>moreBlocks</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfMoreBlock = function(oMoreBlock) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Inserts a block into the aggregation named <code>blocks</code>.
 * @param {sap.ui.core.Control}
 *          oBlock the block to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the block should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the block is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the block is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertBlock = function(oBlock,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Inserts a moreBlock into the aggregation named <code>moreBlocks</code>.
 * @param {sap.ui.core.Control}
 *          oMoreBlock the moreBlock to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the moreBlock should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the moreBlock is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the moreBlock is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertMoreBlock = function(oMoreBlock,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * 
 * Refresh the seeMore button visibility
 * @type 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSubSection.prototype.refreshSeeMoreVisibility = function() { return null; };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.core.Control} vAction the action to remove or its index or id
 * @return {sap.ui.core.Control} the removed action or null
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>blocks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllBlocks = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>moreBlocks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllMoreBlocks = function() { return new Array(); };

/**
 * 
 * Removes an block from the aggregation named <code>blocks</code>.
 * @param {int | string | sap.ui.core.Control} vBlock the block to remove or its index or id
 * @return {sap.ui.core.Control} the removed block or null
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeBlock = function(vBlock) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an moreBlock from the aggregation named <code>moreBlocks</code>.
 * @param {int | string | sap.ui.core.Control} vMoreBlock the moreBlock to remove or its index or id
 * @return {sap.ui.core.Control} the removed moreBlock or null
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeMoreBlock = function(vMoreBlock) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>mode</code>.
 * </p><p>
 * Default value is <code>Collapsed</code> 
 * @param {sap.uxap.ObjectPageSubSectionMode} oMode  new value for property <code>mode</code>
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.setMode = function(oMode) { return new sap.uxap.ObjectPageSubSection(); };


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionLayout.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

/**
 * 
 * @public
 * @memberOf sap.uxap.ObjectPageConfigurationMode
 */
sap.uxap.ObjectPageConfigurationMode.JsonModel = null;

/**
 * 
 * @public
 * @memberOf sap.uxap.ObjectPageConfigurationMode
 */
sap.uxap.ObjectPageConfigurationMode.JsonURL = null;


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

/**
 * 
 * Dark theme for the ObjectPageHeader.
 * @public
 * @memberOf sap.uxap.ObjectPageHeaderDesign
 */
sap.uxap.ObjectPageHeaderDesign.Dark = null;

/**
 * 
 * Light theme for the ObjectPageHeader.
 * @public
 * @memberOf sap.uxap.ObjectPageHeaderDesign
 */
sap.uxap.ObjectPageHeaderDesign.Light = null;


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

/**
 * 
 * Circle shape for the images in the ObjectPageHeader.
 * @public
 * @memberOf sap.uxap.ObjectPageHeaderPictureShape
 */
sap.uxap.ObjectPageHeaderPictureShape.Circle = null;

/**
 * 
 * Square shape for the images in the ObjectPageHeader.
 * @public
 * @memberOf sap.uxap.ObjectPageHeaderPictureShape
 */
sap.uxap.ObjectPageHeaderPictureShape.Square = null;


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

/**
 * 
 * TitleOnLeft: title and actions on the left, inside the block area.
 * @public
 * @memberOf sap.uxap.ObjectPageSubSectionLayout
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnLeft = null;

/**
 * 
 * TitleOnTop: title and actions on top of the block area.
 * @public
 * @memberOf sap.uxap.ObjectPageSubSectionLayout
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnTop = null;


// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

/**
 * 
 * Collapsed mode of display of the ObjectPageLayout.
 * @public
 * @memberOf sap.uxap.ObjectPageSubSectionMode
 */
sap.uxap.ObjectPageSubSectionMode.Collapsed = null;

/**
 * 
 * Expanded mode of displaying the ObjectPageLayout.
 * @public
 * @memberOf sap.uxap.ObjectPageSubSectionMode
 */
sap.uxap.ObjectPageSubSectionMode.Expanded = null;

