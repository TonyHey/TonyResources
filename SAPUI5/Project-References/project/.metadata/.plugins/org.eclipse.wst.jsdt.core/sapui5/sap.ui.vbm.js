
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.vbm --------------------------------------------------------------------------


// ---- sap.ui.vbm.AnalyticMap --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new AnalyticMap.
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
 * <li>{@link #getLegendVisible legendVisible} : boolean (default: true)</li>
 * <li>{@link #getScaleVisible scaleVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRegions regions} : sap.ui.vbm.Region[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.AnalyticMap#event:regionClick regionClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.AnalyticMap#event:regionContextMenu regionContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.GeoMap#constructor sap.ui.vbm.GeoMap}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The AnalyticMap control.
 * @extends sap.ui.vbm.GeoMap
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.AnalyticMap = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click or a tap on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 */
sap.ui.vbm.AnalyticMap.prototype.regionClick = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 */
sap.ui.vbm.AnalyticMap.prototype.regionContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Adds some region <code>oRegion</code> 
 * to the aggregation named <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.addRegion = function(oRegion) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'regionClick' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click or a tap on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'regionContextMenu' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Destroys all the regions in the aggregation 
 * named <code>regions</code>.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.destroyRegions = function() { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'regionClick' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionClick = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'regionContextMenu' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.AnalyticMap with name <code>sClassName</code> 
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
sap.ui.vbm.AnalyticMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event regionClick to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionClick = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Fire event regionContextMenu to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionContextMenu = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Getter for property <code>legendVisible</code>.
 * toggle the visibility of the legend
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>legendVisible</code>
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getLegendVisible = function() { return false; };

/**
 * 
 * Getter for aggregation <code>regions</code>.<br/>
 * Region properties that are different from the defaults. It is possible to specify the tooltip or color for regions. A region code must match the GeoJSON id2 identifier.
 * @return {sap.ui.vbm.Region[]}
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getRegions = function() { return new Array(); };

/**
 * 
 * Returns Infos for Regions like name, bounding box and midpoint
 * @param {string[]} aCodes
 *         Array of region codes. The region code must match the geo json tag.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.AnalyticMap.prototype.getRegionsInfo = function(aCodes) { return new Object(); };

/**
 * 
 * Getter for property <code>scaleVisible</code>.
 * set the visibility of the scale
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>scaleVisible</code>
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getScaleVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Region</code> in the aggregation named <code>regions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.indexOfRegion = function(oRegion) { return 0; };

/**
 * 
 * Inserts a region into the aggregation named <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *          oRegion the region to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the region should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the region is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the region is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.insertRegion = function(oRegion,iIndex) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>regions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Region[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeAllRegions = function() { return new Array(); };

/**
 * 
 * Removes an region from the aggregation named <code>regions</code>.
 * @param {int | string | sap.ui.vbm.Region} vRegion the region to remove or its index or id
 * @return {sap.ui.vbm.Region} the removed region or null
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeRegion = function(vRegion) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Setter for property <code>legendVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bLegendVisible  new value for property <code>legendVisible</code>
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.setLegendVisible = function(bLegendVisible) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Setter for property <code>scaleVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bScaleVisible  new value for property <code>scaleVisible</code>
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.setScaleVisible = function(bScaleVisible) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Zoom to one ore more regions.
 * @param {string[]} aCodes
 *         Array of region codes. The region codes must match the geo json tags.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.AnalyticMap.prototype.zoomToRegions = function(aCodes) { return null; };


// ---- sap.ui.vbm.Area --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Area.
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
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getColor color} : string</li>
 * <li>{@link #getColorBorder colorBorder} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Area#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Area#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Area#event:edgeClick edgeClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Area#event:edgeContextMenu edgeContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Area#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Area container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Area = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Area.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Area.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Area.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the edge of an Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Area.prototype.edgeClick = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the edge of an Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Area.prototype.edgeContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Area</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Area</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code>.<br/> itself.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Area</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Area</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code>.<br/> itself.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Area</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Area</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code>.<br/> itself.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'edgeClick' event of this <code>sap.ui.vbm.Area</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Area</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the edge of an Area is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code>.<br/> itself.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachEdgeClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'edgeContextMenu' event of this <code>sap.ui.vbm.Area</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Area</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the edge of an Area is right clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code>.<br/> itself.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachEdgeContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Area</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Area</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Area</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'edgeClick' event of this <code>sap.ui.vbm.Area</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachEdgeClick = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'edgeContextMenu' event of this <code>sap.ui.vbm.Area</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachEdgeContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Area with name <code>sClassName</code> 
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
sap.ui.vbm.Area.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Fire event edgeClick to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireEdgeClick = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Fire event edgeContextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireEdgeContextMenu = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The fill color of the Area.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>colorBorder</code>.
 * The border color of the Area.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getColorBorder = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position array for the Area.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getPosition = function() { return ""; };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Area.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the area at click position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Area.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setColor = function(sColor) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Setter for property <code>colorBorder</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sColorBorder  new value for property <code>colorBorder</code>
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Area(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Area(); };


// ---- sap.ui.vbm.Areas --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Areas.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Area[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Areas#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Areas#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Areas#event:edgeClick edgeClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Areas#event:edgeContextMenu edgeContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Areas#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Areas aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Areas = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Areas.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Areas.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on an Area.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Areas.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the edge of an Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Areas.prototype.edgeClick = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the edge of an Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Areas.prototype.edgeContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Area}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.addItem = function(oItem) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Areas</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Areas</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code>.<br/> itself.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Areas</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Areas</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code>.<br/> itself.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Areas</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Areas</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on an Area.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code>.<br/> itself.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'edgeClick' event of this <code>sap.ui.vbm.Areas</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Areas</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the edge of an Area is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code>.<br/> itself.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachEdgeClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'edgeContextMenu' event of this <code>sap.ui.vbm.Areas</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Areas</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the edge of an Area is right clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code>.<br/> itself.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachEdgeContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.destroyItems = function() { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Areas</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Areas</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Areas</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'edgeClick' event of this <code>sap.ui.vbm.Areas</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachEdgeClick = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'edgeContextMenu' event of this <code>sap.ui.vbm.Areas</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachEdgeContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Areas with name <code>sClassName</code> 
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
sap.ui.vbm.Areas.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Fire event edgeClick to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireEdgeClick = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Fire event edgeContextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireEdgeContextMenu = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Area object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Areas.
 * @return {sap.ui.vbm.Area[]}
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Area</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Area}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Area}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Areas} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Areas(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Area[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Area} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Area} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Area(); };


// ---- sap.ui.vbm.Box --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Box.
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
 * <li>{@link #getPosition position} : string (default: '0;0;0')</li>
 * <li>{@link #getScale scale} : string (default: '1;1;1')</li>
 * <li>{@link #getColor color} : string (default: 'RGB(255;0;0)')</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: 'RGB(255;0;0)')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Box#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Box#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Box#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Box container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Box = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Box.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Box.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Box.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Box</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Box</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Box</code>.<br/> itself.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Box</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Box</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Box</code>.<br/> itself.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Box</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Box</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Box</code>.<br/> itself.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Box</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Box</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Box</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Box with name <code>sClassName</code> 
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
sap.ui.vbm.Box.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Box.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Box.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Box.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the box.
 * </p><p>
 * Default value is <code>RGB(255;0;0)</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>colorBorder</code>.
 * The border color of the box.
 * </p><p>
 * Default value is <code>RGB(255;0;0)</code>
 * @return {string} the value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getColorBorder = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the Box.
 * </p><p>
 * Default value is <code>0;0;0</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scale of the box.
 * </p><p>
 * Default value is <code>1;1;1</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getScale = function() { return ""; };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Box.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the box at box position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Box.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>RGB(255;0;0)</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setColor = function(sColor) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Setter for property <code>colorBorder</code>.
 * </p><p>
 * Default value is <code>RGB(255;0;0)</code> 
 * @param {string} sColorBorder  new value for property <code>colorBorder</code>
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>0;0;0</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Box(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is <code>1;1;1</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.ui.vbm.Box} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setScale = function(sScale) { return new sap.ui.vbm.Box(); };


// ---- sap.ui.vbm.Boxes --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Boxes.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Box[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Boxes#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Boxes#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Boxes#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Boxes aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Boxes = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Boxes.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Boxes.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Box.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Boxes.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Box}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.addItem = function(oItem) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Boxes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Boxes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Boxes</code>.<br/> itself.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Boxes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Boxes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Boxes</code>.<br/> itself.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Boxes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Boxes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Box.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Boxes</code>.<br/> itself.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.destroyItems = function() { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Boxes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Boxes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Boxes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Boxes with name <code>sClassName</code> 
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
sap.ui.vbm.Boxes.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Boxes.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Boxes.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Boxes.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Box object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Boxes.
 * @return {sap.ui.vbm.Box[]}
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Box</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Box}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Box}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Boxes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Boxes(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Box[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Box} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Box} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Box(); };


// ---- sap.ui.vbm.Circle --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Circle.
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
 * <li>{@link #getPosition position} : string (default: '0;0;0')</li>
 * <li>{@link #getRadius radius} : string (default: '20')</li>
 * <li>{@link #getColor color} : string (default: 'RGBA(0,0,128,128)')</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: 'RGB(0,0,0)')</li>
 * <li>{@link #getSlices slices} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Circle#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Circle#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Circle#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Circle container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Circle = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Circle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circle.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Circle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circle.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Circle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circle.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Circle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Circle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circle</code>.<br/> itself.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Circle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Circle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circle</code>.<br/> itself.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Circle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Circle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circle</code>.<br/> itself.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Circle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Circle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Circle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Circle with name <code>sClassName</code> 
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
sap.ui.vbm.Circle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circle.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circle.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circle.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the circle.
 * </p><p>
 * Default value is <code>RGBA(0,0,128,128)</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>colorBorder</code>.
 * The border color of the circle.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code>
 * @return {string} the value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getColorBorder = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the circle.
 * </p><p>
 * Default value is <code>0;0;0</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>radius</code>.
 * The pixel radius of the circle.
 * </p><p>
 * Default value is <code>20</code>
 * @return {string} the value of property <code>radius</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getRadius = function() { return ""; };

/**
 * 
 * Getter for property <code>slices</code>.
 * Number of circle slices. The property is required only when the PlugIn is used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>slices</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getSlices = function() { return ""; };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Circle.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the circle at its position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Circle.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>RGBA(0,0,128,128)</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setColor = function(sColor) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Setter for property <code>colorBorder</code>.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code> 
 * @param {string} sColorBorder  new value for property <code>colorBorder</code>
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>0;0;0</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Setter for property <code>radius</code>.
 * </p><p>
 * Default value is <code>20</code> 
 * @param {string} sRadius  new value for property <code>radius</code>
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setRadius = function(sRadius) { return new sap.ui.vbm.Circle(); };

/**
 * 
 * Setter for property <code>slices</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSlices  new value for property <code>slices</code>
 * @return {sap.ui.vbm.Circle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setSlices = function(sSlices) { return new sap.ui.vbm.Circle(); };


// ---- sap.ui.vbm.Circles --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Circles.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Circle[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Circles#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Circles#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Circles#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Circles aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Circles = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Circle
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circles.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Circle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circles.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Circle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Circles.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Circle}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.addItem = function(oItem) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Circles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Circle
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circles</code>.<br/> itself.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Circles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Circle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circles</code>.<br/> itself.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Circles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Circles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Circle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Circles</code>.<br/> itself.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.destroyItems = function() { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Circles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Circles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Circles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Circles with name <code>sClassName</code> 
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
sap.ui.vbm.Circles.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circles.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circles.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Circles.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * circle object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Circles.
 * @return {sap.ui.vbm.Circle[]}
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Circle</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Circle}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Circle}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Circles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Circles(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Circle[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Circle} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Circle} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Circle(); };


// ---- sap.ui.vbm.Container --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Container.
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
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getAlignment alignment} : string (default: '0')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItem item} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Container#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Container#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Container container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Container = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Container.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Container.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Container.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Container.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Container</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Container</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Container.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Container</code>.<br/> itself.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Container</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Container</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Container.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Container</code>.<br/> itself.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Destroys the item in the aggregation 
 * named <code>item</code>.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.destroyItem = function() { return new sap.ui.vbm.Container(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Container</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Container</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Container with name <code>sClassName</code> 
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
sap.ui.vbm.Container.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Container.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Container.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Getter for property <code>alignment</code>.
 * Alignment of the element to its Position:
 * 0: center
 * 1: top center
 * 2: top right
 * 3: center right
 * 4: bottom right
 * 5: bottom center
 * 6: bottom left
 * 7: center left
 * 8: top left
 * </p><p>
 * Default value is <code>0</code>
 * @return {string} the value of property <code>alignment</code>
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getAlignment = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>item</code>.<br/>
 * The control that should be placed in the container.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getItem = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>position</code>.
 * The position array for the Container.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getPosition = function() { return ""; };

/**
 * 
 * For internal use only!
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Container.prototype.propagateModels = function() { return null; };

/**
 * 
 * Setter for property <code>alignment</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {string} sAlignment  new value for property <code>alignment</code>
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setAlignment = function(sAlignment) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Setter for the aggregated <code>item</code>.
 * @param {sap.ui.core.Control} oItem
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setItem = function(oItem) { return new sap.ui.vbm.Container(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Container} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Container(); };


// ---- sap.ui.vbm.Containers --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Containers.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Container[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Containers#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Containers#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Containers aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Containers = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Container.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Containers.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Container.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Containers.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Container}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.addItem = function(oItem) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Containers</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Containers</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Container.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Containers</code>.<br/> itself.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Containers</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Containers</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Container.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Containers</code>.<br/> itself.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.destroyItems = function() { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Containers</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Containers</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Containers with name <code>sClassName</code> 
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
sap.ui.vbm.Containers.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Containers.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Containers.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Container object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Containers.
 * @return {sap.ui.vbm.Container[]}
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Container</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Container}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Container}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Containers} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Containers(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Container[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Container} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Container} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Container(); };


// ---- sap.ui.vbm.DragSource --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DragSource.
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
 * <li>{@link #getType type} : string</li></ul>
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
 * Aggregation element for DragSource
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.DragSource = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.vbm.DragSource with name <code>sClassName</code> 
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
sap.ui.vbm.DragSource.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>type</code>.
 * Drag type
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.DragSource.prototype.getType = function() { return ""; };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.vbm.DragSource} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.DragSource.prototype.setType = function(sType) { return new sap.ui.vbm.DragSource(); };


// ---- sap.ui.vbm.DropTarget --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DropTarget.
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
 * <li>{@link #getType type} : string</li></ul>
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
 * Aggregation element for DropTarget
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.DropTarget = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.vbm.DropTarget with name <code>sClassName</code> 
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
sap.ui.vbm.DropTarget.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>type</code>.
 * Drop type
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.DropTarget.prototype.getType = function() { return ""; };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.vbm.DropTarget} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.DropTarget.prototype.setType = function(sType) { return new sap.ui.vbm.DropTarget(); };


// ---- sap.ui.vbm.GeoCircle --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GeoCircle.
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
 * <li>{@link #getPosition position} : string (default: '0;0;0')</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: 'RGB(0,0,0)')</li>
 * <li>{@link #getRadius radius} : string (default: '10000')</li>
 * <li>{@link #getColor color} : string (default: 'RGB(0,0,0)')</li>
 * <li>{@link #getSlices slices} : string (default: '20')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.GeoCircle#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoCircle#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoCircle#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the GeoCircle container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoCircle = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircle.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircle.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircle.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircle</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.GeoCircle</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.GeoCircle with name <code>sClassName</code> 
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
sap.ui.vbm.GeoCircle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircle.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircle.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircle.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the geocirle.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>colorBorder</code>.
 * The border color of the geocirle.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code>
 * @return {string} the value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getColorBorder = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the geocircle.
 * </p><p>
 * Default value is <code>0;0;0</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>radius</code>.
 * The radius in meters of the geocirle.
 * </p><p>
 * Default value is <code>10000</code>
 * @return {string} the value of property <code>radius</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getRadius = function() { return ""; };

/**
 * 
 * Getter for property <code>slices</code>.
 * The number of slices of the geocircle.
 * </p><p>
 * Default value is <code>20</code>
 * @return {string} the value of property <code>slices</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getSlices = function() { return ""; };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoCircle.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the geo circle at its click position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoCircle.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setColor = function(sColor) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Setter for property <code>colorBorder</code>.
 * </p><p>
 * Default value is <code>RGB(0,0,0)</code> 
 * @param {string} sColorBorder  new value for property <code>colorBorder</code>
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>0;0;0</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Setter for property <code>radius</code>.
 * </p><p>
 * Default value is <code>10000</code> 
 * @param {string} sRadius  new value for property <code>radius</code>
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setRadius = function(sRadius) { return new sap.ui.vbm.GeoCircle(); };

/**
 * 
 * Setter for property <code>slices</code>.
 * </p><p>
 * Default value is <code>20</code> 
 * @param {string} sSlices  new value for property <code>slices</code>
 * @return {sap.ui.vbm.GeoCircle} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setSlices = function(sSlices) { return new sap.ui.vbm.GeoCircle(); };


// ---- sap.ui.vbm.GeoCircles --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GeoCircles.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.GeoCircle[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.GeoCircles#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoCircles#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoCircles#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * GeoCircles aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoCircles = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircles.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircles.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a GeoCircle.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.GeoCircles.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.GeoCircle}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.addItem = function(oItem) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a GeoCircle.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoCircles</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.destroyItems = function() { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.GeoCircles</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.GeoCircles with name <code>sClassName</code> 
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
sap.ui.vbm.GeoCircles.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircles.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircles.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoCircles.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * GeoCircle object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for GeoCircles.
 * @return {sap.ui.vbm.GeoCircle[]}
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.GeoCircle</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.GeoCircle}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.GeoCircle}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.GeoCircles} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.GeoCircles(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.GeoCircle[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.GeoCircle} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.GeoCircle} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.removeItem = function(vItem) { return new sap.ui.vbm.GeoCircle(); };


// ---- sap.ui.vbm.GeoMap --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GeoMap.
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
 * <li>{@link #getMapConfiguration mapConfiguration} : object</li>
 * <li>{@link #getLegendVisible legendVisible} : boolean (default: true)</li>
 * <li>{@link #getScaleVisible scaleVisible} : boolean (default: true)</li>
 * <li>{@link #getNavcontrolVisible navcontrolVisible} : boolean (default: true)</li>
 * <li>{@link #getInitialPosition initialPosition} : string (default: '0;0;0')</li>
 * <li>{@link #getInitialZoom initialZoom} : string (default: '2')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getVos vos} <strong>(default aggregation)</strong> : sap.ui.vbm.VoAggregation[]</li>
 * <li>{@link #getResources resources} : sap.ui.vbm.Resource[]</li>
 * <li>{@link #getLegend legend} : sap.ui.vbm.Legend</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.GeoMap#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoMap#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.GeoMap#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VBI#constructor sap.ui.vbm.VBI}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Simple map with standard UI5 interface
 * @extends sap.ui.vbm.VBI
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoMap = function(sId,mSettings) {};
/**
 * 
 * Raised when the map is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pos Geo coordinates
 * @public
 */
sap.ui.vbm.GeoMap.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * Raised when the map is right clicked/longPress(tap and hold).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.clientX Client coordinate X
 * @param {int} oControlEvent.getParameters.clientY Client coordinate Y
 * @param {string} oControlEvent.getParameters.pos Geo coordinates
 * @public
 */
sap.ui.vbm.GeoMap.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Raised when something is dropped on the map.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pos Geo coordinates
 * @public
 */
sap.ui.vbm.GeoMap.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some resource <code>oResource</code> 
 * to the aggregation named <code>resources</code>.
 * @param {sap.ui.vbm.Resource}
 *            oResource the resource to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addResource = function(oResource) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Adds some vo <code>oVo</code> 
 * to the aggregation named <code>vos</code>.
 * @param {sap.ui.vbm.VoAggregation}
 *            oVo the vo to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addVo = function(oVo) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself. 
 * </p><p>
 * Raised when the map is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself. 
 * </p><p>
 * Raised when the map is right clicked/longPress(tap and hold).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself. 
 * </p><p>
 * Raised when something is dropped on the map.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code>.<br/> itself.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Destroys the legend in the aggregation 
 * named <code>legend</code>.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyLegend = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Destroys all the resources in the aggregation 
 * named <code>resources</code>.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyResources = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Destroys all the vos in the aggregation 
 * named <code>vos</code>.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyVos = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.GeoMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.GeoMap with name <code>sClassName</code> 
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
sap.ui.vbm.GeoMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'pos' of type <code>string</code> Geo coordinates</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'clientX' of type <code>int</code> Client coordinate X</li>
 * <li>'clientY' of type <code>int</code> Client coordinate Y</li>
 * <li>'pos' of type <code>string</code> Geo coordinates</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Fire event drop to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'pos' of type <code>string</code> Geo coordinates</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Getter for property <code>initialPosition</code>.
 * Initial position of the Map. Only supported on initialization!
 * Format is "<longitude>;<latitude>;0".
 * </p><p>
 * Default value is <code>0;0;0</code>
 * @return {string} the value of property <code>initialPosition</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getInitialPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>initialZoom</code>.
 * Initial zoom. Value needs to be positive whole number. Only supported on initialization!
 * </p><p>
 * Default value is <code>2</code>
 * @return {string} the value of property <code>initialZoom</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getInitialZoom = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>legend</code>.<br/>
 * Legend for the Map
 * @return {sap.ui.vbm.Legend}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getLegend = function() { return new sap.ui.vbm.Legend(); };

/**
 * 
 * Getter for property <code>legendVisible</code>.
 * Toggles the visibility of the legend
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>legendVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getLegendVisible = function() { return false; };

/**
 * 
 * Getter for property <code>mapConfiguration</code>.
 * This is the map configuration for the geo map. The map configuration defines the used maps, the layering of the maps and the servers that can be used to request the map tiles.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>mapConfiguration</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getMapConfiguration = function() { return new Object(); };

/**
 * 
 * Getter for property <code>navcontrolVisible</code>.
 * Toggles the visibility of the navigation control. Only supported on initialization!
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>navcontrolVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getNavcontrolVisible = function() { return false; };

/**
 * 
 * Getter for aggregation <code>resources</code>.<br/>
 * Aggregation of resources. The images of different spots have to be provided in the resources section. Binary resources data like images is pecified as a base64 encoded text.
 * @return {sap.ui.vbm.Resource[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getResources = function() { return new Array(); };

/**
 * 
 * Getter for property <code>scaleVisible</code>.
 * Toggles the visibility of the scale. Only supported on initialization!
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>scaleVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getScaleVisible = function() { return false; };

/**
 * 
 * Getter for aggregation <code>vos</code>.<br/>
 * Aggregation of visual object types.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for GeoMap.
 * @return {sap.ui.vbm.VoAggregation[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getVos = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Resource</code> in the aggregation named <code>resources</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Resource}
 *            oResource the resource whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfResource = function(oResource) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.VoAggregation</code> in the aggregation named <code>vos</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.VoAggregation}
 *            oVo the vo whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfVo = function(oVo) { return 0; };

/**
 * 
 * Inserts a resource into the aggregation named <code>resources</code>.
 * @param {sap.ui.vbm.Resource}
 *          oResource the resource to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the resource should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the resource is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the resource is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertResource = function(oResource,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Inserts a vo into the aggregation named <code>vos</code>.
 * @param {sap.ui.vbm.VoAggregation}
 *          oVo the vo to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the vo should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the vo is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the vo is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertVo = function(oVo,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>resources</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Resource[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllResources = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>vos</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.VoAggregation[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllVos = function() { return new Array(); };

/**
 * 
 * Removes an resource from the aggregation named <code>resources</code>.
 * @param {int | string | sap.ui.vbm.Resource} vResource the resource to remove or its index or id
 * @return {sap.ui.vbm.Resource} the removed resource or null
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeResource = function(vResource) { return new sap.ui.vbm.Resource(); };

/**
 * 
 * Removes an vo from the aggregation named <code>vos</code>.
 * @param {int | string | sap.ui.vbm.VoAggregation} vVo the vo to remove or its index or id
 * @return {sap.ui.vbm.VoAggregation} the removed vo or null
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeVo = function(vVo) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Setter for property <code>initialPosition</code>.
 * </p><p>
 * Default value is <code>0;0;0</code> 
 * @param {string} sInitialPosition  new value for property <code>initialPosition</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setInitialPosition = function(sInitialPosition) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for property <code>initialZoom</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {string} sInitialZoom  new value for property <code>initialZoom</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setInitialZoom = function(sInitialZoom) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for the aggregated <code>legend</code>.
 * @param {sap.ui.vbm.Legend} oLegend
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setLegend = function(oLegend) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for property <code>legendVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bLegendVisible  new value for property <code>legendVisible</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setLegendVisible = function(bLegendVisible) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for property <code>mapConfiguration</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oMapConfiguration  new value for property <code>mapConfiguration</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setMapConfiguration = function(oMapConfiguration) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for property <code>navcontrolVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bNavcontrolVisible  new value for property <code>navcontrolVisible</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setNavcontrolVisible = function(bNavcontrolVisible) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Setter for property <code>scaleVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bScaleVisible  new value for property <code>scaleVisible</code>
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setScaleVisible = function(bScaleVisible) { return new sap.ui.vbm.GeoMap(); };


// ---- sap.ui.vbm.Legend --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Legend.
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
 * <li>{@link #getCaption caption} : string (default: 'Legend')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.LegendItem[]</li></ul>
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
 * The Legend is a window in the GeoMap or AnalyticMap control wich can be used to display color/icon-text pairs on a map.
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Legend = function(sId,mSettings) {};
/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.LegendItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Legend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.addItem = function(oItem) { return new sap.ui.vbm.Legend(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Legend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.destroyItems = function() { return new sap.ui.vbm.Legend(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Legend with name <code>sClassName</code> 
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
sap.ui.vbm.Legend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>caption</code>.
 * The caption of the legend.
 * </p><p>
 * Default value is <code>Legend</code>
 * @return {string} the value of property <code>caption</code>
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.getCaption = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * LegendItem object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Legend.
 * @return {sap.ui.vbm.LegendItem[]}
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.LegendItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.LegendItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.LegendItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Legend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Legend(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.LegendItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.LegendItem} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.LegendItem} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.removeItem = function(vItem) { return new sap.ui.vbm.LegendItem(); };

/**
 * 
 * Setter for property <code>caption</code>.
 * </p><p>
 * Default value is <code>Legend</code> 
 * @param {string} sCaption  new value for property <code>caption</code>
 * @return {sap.ui.vbm.Legend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.setCaption = function(sCaption) { return new sap.ui.vbm.Legend(); };


// ---- sap.ui.vbm.LegendItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new LegendItem.
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
 * <li>{@link #getColor color} : string (default: '')</li>
 * <li>{@link #getImage image} : string</li>
 * <li>{@link #getText text} : string</li></ul>
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
 * Aggregation element for the Legend
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.LegendItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.vbm.LegendItem with name <code>sClassName</code> 
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
sap.ui.vbm.LegendItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the legend marker.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>image</code>.
 * The image for the legend marker.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>image</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getImage = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text of the legend item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.LegendItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setColor = function(sColor) { return new sap.ui.vbm.LegendItem(); };

/**
 * 
 * Setter for property <code>image</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sImage  new value for property <code>image</code>
 * @return {sap.ui.vbm.LegendItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setImage = function(sImage) { return new sap.ui.vbm.LegendItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.vbm.LegendItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setText = function(sText) { return new sap.ui.vbm.LegendItem(); };


// ---- sap.ui.vbm.Pie --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Pie.
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
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getScale scale} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.PieItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Pie#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Pie#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Pie#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Pie container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Pie = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pie.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pie.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pie.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.PieItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.addItem = function(oItem) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Pie</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pie</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pie</code>.<br/> itself.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Pie</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pie</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pie</code>.<br/> itself.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Pie</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pie</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pie</code>.<br/> itself.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.destroyItems = function() { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Pie</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Pie</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Pie</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Pie with name <code>sClassName</code> 
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
sap.ui.vbm.Pie.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pie.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pie.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pie.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * PieItem object aggregation. A PieItem holds the data for one slice in a Pie.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Pie.
 * @return {sap.ui.vbm.PieItem[]}
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the Pie.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scaling of the Pie. The scale must be a vector, currently only the x scaling is applied to the Pie.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getScale = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.PieItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.PieItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.PieItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Pie.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the pie at its position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Pie.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.PieItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.PieItem} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.PieItem} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.removeItem = function(vItem) { return new sap.ui.vbm.PieItem(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Pie(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.ui.vbm.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.setScale = function(sScale) { return new sap.ui.vbm.Pie(); };


// ---- sap.ui.vbm.PieItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new PieItem.
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
 * <li>{@link #getName name} : string (default: '')</li>
 * <li>{@link #getValue value} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.PieItem#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Pie
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.PieItem = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a pie item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.PieItem.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.PieItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.PieItem</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a pie item.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.PieItem</code>.<br/> itself.
 * @return {sap.ui.vbm.PieItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.PieItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.PieItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.PieItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.PieItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.PieItem with name <code>sClassName</code> 
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
sap.ui.vbm.PieItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.PieItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.PieItem.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.PieItem(); };

/**
 * 
 * Getter for property <code>name</code>.
 * The name of the Pie item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The value of the Pie item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.vbm.PieItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.setName = function(sName) { return new sap.ui.vbm.PieItem(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.vbm.PieItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.setValue = function(sValue) { return new sap.ui.vbm.PieItem(); };


// ---- sap.ui.vbm.Pies --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Pies.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Pie[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Pies#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Pies#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Pies#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Pies aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Pies = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pies.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pies.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Pie.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Pies.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Pie}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.addItem = function(oItem) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Pies</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pies</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pies</code>.<br/> itself.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Pies</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pies</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pies</code>.<br/> itself.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Pies</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Pies</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Pie.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Pies</code>.<br/> itself.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.destroyItems = function() { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Pies</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Pies</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Pies</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Pies with name <code>sClassName</code> 
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
sap.ui.vbm.Pies.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pies.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pies.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Pies.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Pie object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Pies.
 * @return {sap.ui.vbm.Pie[]}
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Pie</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Pie}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Pie}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Pies} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Pies(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Pie[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Pie} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Pie} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Pie(); };


// ---- sap.ui.vbm.Region --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Region.
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
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getCode code} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Region#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Region#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Region properties.
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Region = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 */
sap.ui.vbm.Region.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 */
sap.ui.vbm.Region.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Region</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Region</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code>.<br/> itself.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Region</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Region</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code>.<br/> itself.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Region</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Region</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Region with name <code>sClassName</code> 
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
sap.ui.vbm.Region.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The region code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The region code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Getter for property <code>code</code>.
 * The region code.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>code</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getCode = function() { return ""; };

/**
 * 
 * Getter for property <code>color</code>.
 * The color, this must be provided in the rgba(r,g,b,a) format.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Setter for property <code>code</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCode  new value for property <code>code</code>
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setCode = function(sCode) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setColor = function(sColor) { return new sap.ui.vbm.Region(); };


// ---- sap.ui.vbm.Resource --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Resource.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getSrc src} : string (default: "")</li>
 * <li>{@link #getName name} : string</li></ul>
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
 * A resource is usually a bas64 representation of an image that can be referenced in a spot. When images are specified as a string resource it is guaranteed that the control can access the bits in the image. A resource is referenced by its name.
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Resource = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Resource with name <code>sClassName</code> 
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
sap.ui.vbm.Resource.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>name</code>.
 * Name of the resource. The name should be always
 * used when a resource is referenced.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>src</code>.
 * URL to an image. It is important that the image data is readable fom the visual business control. Therefore e.g. images coming from a local drive or cross domains are not allowed. The preferred way is to use the base 64 encoded data provided using the value property.
 * </p><p>
 * Default value is <code>""</code>
 * @return {string} the value of property <code>src</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getSrc = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * Value of the resource.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.vbm.Resource} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setName = function(sName) { return new sap.ui.vbm.Resource(); };

/**
 * 
 * Setter for property <code>src</code>.
 * </p><p>
 * Default value is <code>""</code> 
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ui.vbm.Resource} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setSrc = function(sSrc) { return new sap.ui.vbm.Resource(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.vbm.Resource} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setValue = function(sValue) { return new sap.ui.vbm.Resource(); };


// ---- sap.ui.vbm.Route --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Route.
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
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getColor color} : string (default: 'RGB(0;0;0)')</li>
 * <li>{@link #getStart start} : string (default: '0')</li>
 * <li>{@link #getEnd end} : string (default: '0')</li>
 * <li>{@link #getLinewidth linewidth} : string (default: '5')</li>
 * <li>{@link #getDotcolor dotcolor} : string (default: 'RGB(0;0;0)')</li>
 * <li>{@link #getDotbordercolor dotbordercolor} : string (default: 'RGB(0;0;0)')</li>
 * <li>{@link #getDotwidth dotwidth} : string (default: '0')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Route#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Route#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Route#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Route container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Route = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Route.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Route.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Route.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some dragSource <code>oDragSource</code> 
 * to the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Adds some dropTarget <code>oDropTarget</code> 
 * to the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Route</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Route</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Route</code>.<br/> itself.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Route</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Route</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Route</code>.<br/> itself.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Route</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Route</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Route</code>.<br/> itself.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Destroys all the dragSource in the aggregation 
 * named <code>dragSource</code>.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.destroyDragSource = function() { return new sap.ui.vbm.Route(); };

/**
 * 
 * Destroys all the dropTarget in the aggregation 
 * named <code>dropTarget</code>.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Route(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Route</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Route</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Route</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Route with name <code>sClassName</code> 
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
sap.ui.vbm.Route.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Route.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Route.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Route.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the route.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>dotbordercolor</code>.
 * The border color of the line dots of a route.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code>
 * @return {string} the value of property <code>dotbordercolor</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotbordercolor = function() { return ""; };

/**
 * 
 * Getter for property <code>dotcolor</code>.
 * The color for the line dots of a route.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code>
 * @return {string} the value of property <code>dotcolor</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotcolor = function() { return ""; };

/**
 * 
 * Getter for property <code>dotwidth</code>.
 * The diameter of a dot in a route.
 * </p><p>
 * Default value is <code>0</code>
 * @return {string} the value of property <code>dotwidth</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotwidth = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>dragSource</code>.<br/>
 * DragSource aggregation
 * @return {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDragSource = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>dropTarget</code>.<br/>
 * DropTarget aggregation
 * @return {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDropTarget = function() { return new Array(); };

/**
 * 
 * Getter for property <code>end</code>.
 * The end point type of the route. 0: no endpoint 1: arrow as endpoint
 * </p><p>
 * Default value is <code>0</code>
 * @return {string} the value of property <code>end</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getEnd = function() { return ""; };

/**
 * 
 * Getter for property <code>linewidth</code>.
 * The width of the route line.
 * </p><p>
 * Default value is <code>5</code>
 * @return {string} the value of property <code>linewidth</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getLinewidth = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position array of the route.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>start</code>.
 * The start point type of the route. 0: no startpoint 1: arrow as startpoint
 * </p><p>
 * Default value is <code>0</code>
 * @return {string} the value of property <code>start</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getStart = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation named <code>dragSource</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation named <code>dropTarget</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * 
 * Inserts a dragSource into the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *          oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dragSource should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dragSource is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Inserts a dropTarget into the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *          oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dropTarget should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dropTarget is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Route(); };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Route.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window attached to the positions of the route
 * @param {string} sCaption
 *         detail window caption
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Route.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>dragSource</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DragSource[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dropTarget</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DropTarget[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * 
 * Removes an dragSource from the aggregation named <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource the dragSource to remove or its index or id
 * @return {sap.ui.vbm.DragSource} the removed dragSource or null
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * 
 * Removes an dropTarget from the aggregation named <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget the dropTarget to remove or its index or id
 * @return {sap.ui.vbm.DropTarget} the removed dropTarget or null
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setColor = function(sColor) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>dotbordercolor</code>.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code> 
 * @param {string} sDotbordercolor  new value for property <code>dotbordercolor</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotbordercolor = function(sDotbordercolor) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>dotcolor</code>.
 * </p><p>
 * Default value is <code>RGB(0;0;0)</code> 
 * @param {string} sDotcolor  new value for property <code>dotcolor</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotcolor = function(sDotcolor) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>dotwidth</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {string} sDotwidth  new value for property <code>dotwidth</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotwidth = function(sDotwidth) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>end</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {string} sEnd  new value for property <code>end</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setEnd = function(sEnd) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>linewidth</code>.
 * </p><p>
 * Default value is <code>5</code> 
 * @param {string} sLinewidth  new value for property <code>linewidth</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setLinewidth = function(sLinewidth) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Route(); };

/**
 * 
 * Setter for property <code>start</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {string} sStart  new value for property <code>start</code>
 * @return {sap.ui.vbm.Route} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setStart = function(sStart) { return new sap.ui.vbm.Route(); };


// ---- sap.ui.vbm.Routes --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Routes.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Route[]</li>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Routes#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Routes#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Routes#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Routes aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Routes = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Routes.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Routes.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Routes.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some dragSource <code>oDragSource</code> 
 * to the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Adds some dropTarget <code>oDropTarget</code> 
 * to the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Route}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addItem = function(oItem) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Routes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Routes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code>.<br/> itself.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Routes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Routes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code>.<br/> itself.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Routes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Routes</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Route.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code>.<br/> itself.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Destroys all the dragSource in the aggregation 
 * named <code>dragSource</code>.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyDragSource = function() { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Destroys all the dropTarget in the aggregation 
 * named <code>dropTarget</code>.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyItems = function() { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Routes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Routes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Routes</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Routes with name <code>sClassName</code> 
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
sap.ui.vbm.Routes.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Getter for aggregation <code>dragSource</code>.<br/>
 * DragSource aggregation
 * @return {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getDragSource = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>dropTarget</code>.<br/>
 * DropTarget aggregation
 * @return {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getDropTarget = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * route object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Routes.
 * @return {sap.ui.vbm.Route[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation named <code>dragSource</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation named <code>dropTarget</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Route</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Route}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a dragSource into the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *          oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dragSource should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dragSource is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Inserts a dropTarget into the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *          oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dropTarget should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dropTarget is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Route}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Routes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dragSource</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DragSource[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dropTarget</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DropTarget[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Route[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an dragSource from the aggregation named <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource the dragSource to remove or its index or id
 * @return {sap.ui.vbm.DragSource} the removed dragSource or null
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * 
 * Removes an dropTarget from the aggregation named <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget the dropTarget to remove or its index or id
 * @return {sap.ui.vbm.DropTarget} the removed dropTarget or null
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Route} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Route} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Route(); };


// ---- sap.ui.vbm.Spot --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Spot.
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
 * <li>{@link #getPosition position} : string (default: '0;0;0')</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getImage image} : string</li>
 * <li>{@link #getAlignment alignment} : string (default: '5')</li>
 * <li>{@link #getScale scale} : string (default: '1;1;1')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Spot#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Spot#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Spot#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Spot container
 * @extends sap.ui.vbm.VoBase
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spot = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spot.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spot.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spot.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some dragSource <code>oDragSource</code> 
 * to the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Adds some dropTarget <code>oDropTarget</code> 
 * to the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Spot</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spot</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spot</code>.<br/> itself.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Spot</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spot</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spot</code>.<br/> itself.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Spot</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spot</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spot</code>.<br/> itself.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Destroys all the dragSource in the aggregation 
 * named <code>dragSource</code>.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.destroyDragSource = function() { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Destroys all the dropTarget in the aggregation 
 * named <code>dropTarget</code>.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Spot</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Spot</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Spot</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Spot with name <code>sClassName</code> 
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
sap.ui.vbm.Spot.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spot.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spot.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spot.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Getter for property <code>alignment</code>.
 * Alignment of the element to its Position:
 * 0: center
 * 1: top center
 * 2: top right
 * 3: center right
 * 4: bottom right
 * 5: bottom center
 * 6: bottom left
 * 7: center left
 * 8: top left
 * </p><p>
 * Default value is <code>5</code>
 * @return {string} the value of property <code>alignment</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getAlignment = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>dragSource</code>.<br/>
 * DragSource aggregation
 * @return {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getDragSource = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>dropTarget</code>.<br/>
 * DropTarget aggregation
 * @return {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getDropTarget = function() { return new Array(); };

/**
 * 
 * Getter for property <code>image</code>.
 * The image for the spot. This must be a reference to a resource.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>image</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getImage = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the spot.
 * </p><p>
 * Default value is <code>0;0;0</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getPosition = function() { return ""; };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scale of the spot.
 * </p><p>
 * Default value is <code>1;1;1</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getScale = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text that is displayed in the spot. The text should not exceed a few characters.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getText = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation named <code>dragSource</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation named <code>dropTarget</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * 
 * Inserts a dragSource into the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *          oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dragSource should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dragSource is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Inserts a dropTarget into the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *          oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dropTarget should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dropTarget is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * open the context menu
 * @param {object} oMenu
 *         the context menu to be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spot.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * 
 * open a Detail Window for the spot at spot position
 * @param {string} sCaption
 *         caption of detail window
 * @param {string} sOffsetX
 *         position offset in x-direction from the anchor point
 * @param {string} sOffsetY
 *         position offset in y-direction from the anchor point
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spot.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>dragSource</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DragSource[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dropTarget</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DropTarget[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * 
 * Removes an dragSource from the aggregation named <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource the dragSource to remove or its index or id
 * @return {sap.ui.vbm.DragSource} the removed dragSource or null
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * 
 * Removes an dropTarget from the aggregation named <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget the dropTarget to remove or its index or id
 * @return {sap.ui.vbm.DropTarget} the removed dropTarget or null
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * 
 * Setter for property <code>alignment</code>.
 * </p><p>
 * Default value is <code>5</code> 
 * @param {string} sAlignment  new value for property <code>alignment</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setAlignment = function(sAlignment) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Setter for property <code>image</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sImage  new value for property <code>image</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setImage = function(sImage) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>0;0;0</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is <code>1;1;1</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setScale = function(sScale) { return new sap.ui.vbm.Spot(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setText = function(sText) { return new sap.ui.vbm.Spot(); };


// ---- sap.ui.vbm.Spots --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Spots.
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
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.vbm.Spot[]</li>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Spots#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Spots#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Spots#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Spots aggregation container
 * @extends sap.ui.vbm.VoAggregation
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spots = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spots.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spots.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when something is dropped on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.Spots.prototype.drop = function(oControlEvent) { return null; };

/**
 * 
 * Adds some dragSource <code>oDragSource</code> 
 * to the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Adds some dropTarget <code>oDropTarget</code> 
 * to the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Spot}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addItem = function(oItem) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Spots</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spots</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spots</code>.<br/> itself.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Spots</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spots</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spots</code>.<br/> itself.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ui.vbm.Spots</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Spots</code>.<br/> itself. 
 * </p><p>
 * The event is raised when something is dropped on a Spot.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Spots</code>.<br/> itself.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Destroys all the dragSource in the aggregation 
 * named <code>dragSource</code>.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyDragSource = function() { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Destroys all the dropTarget in the aggregation 
 * named <code>dropTarget</code>.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyItems = function() { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Spots</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Spots</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ui.vbm.Spots</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Spots with name <code>sClassName</code> 
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
sap.ui.vbm.Spots.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spots.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spots.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Fire event drop to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Spots.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Getter for aggregation <code>dragSource</code>.<br/>
 * DragSource aggregation
 * @return {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getDragSource = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>dropTarget</code>.<br/>
 * DropTarget aggregation
 * @return {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getDropTarget = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * spot object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Spots.
 * @return {sap.ui.vbm.Spot[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation named <code>dragSource</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation named <code>dropTarget</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Spot</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Spot}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a dragSource into the aggregation named <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *          oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dragSource should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dragSource is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Inserts a dropTarget into the aggregation named <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *          oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dropTarget should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dropTarget is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.vbm.Spot}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dragSource</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DragSource[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dropTarget</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.DropTarget[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Spot[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an dragSource from the aggregation named <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource the dragSource to remove or its index or id
 * @return {sap.ui.vbm.DragSource} the removed dragSource or null
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * 
 * Removes an dropTarget from the aggregation named <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget the dropTarget to remove or its index or id
 * @return {sap.ui.vbm.DropTarget} the removed dropTarget or null
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.vbm.Spot} vItem the item to remove or its index or id
 * @return {sap.ui.vbm.Spot} the removed item or null
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Spot(); };


// ---- sap.ui.vbm.VBI --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VBI.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '800px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '600px')</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VBI#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:openWindow openWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:closeWindow closeWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The VBI control.
 * @extends sap.ui.core.Control
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI = function(sId,mSettings) {};
/**
 * 
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder for content.
 * @param {string} oControlEvent.getParameters.id ID of the window that is closed.
 * @public
 */
sap.ui.vbm.VBI.prototype.closeWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 */
sap.ui.vbm.VBI.prototype.move = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder to render into.
 * @param {string} oControlEvent.getParameters.id ID of the window that is opened.
 * @public
 */
sap.ui.vbm.VBI.prototype.openWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 */
sap.ui.vbm.VBI.prototype.render = function(oControlEvent) { return null; };

/**
 * 
 * High level API. Submit event is raised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.data Json or xml string describing the delta state of visual business and the information about the event.
 * @public
 */
sap.ui.vbm.VBI.prototype.submit = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.zoom = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachCloseWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachMove = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachOpenWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachRender = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * High level API. Submit event is raised.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachZoom = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachCloseWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachMove = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachOpenWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachRender = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachZoom = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code> 
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
sap.ui.vbm.VBI.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event closeWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder for content.</li>
 * <li>'id' of type <code>string</code> ID of the window that is closed.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireCloseWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event move to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireMove = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event openWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder to render into.</li>
 * <li>'id' of type <code>string</code> ID of the window that is opened.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireOpenWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event render to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into. </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireRender = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event submit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'data' of type <code>string</code> Json or xml string describing the delta state of visual business and the information about the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireSubmit = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event zoom to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireZoom = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Getter for property <code>config</code>.
 * This is the model configuration. Usually the Visual Business application is provided by this property. Nevertheless the property can be used for data binding to the inner Visual Business data model.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>config</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getConfig = function() { return new Object(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Set the height of the control.
 * </p><p>
 * Default value is <code>600px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>plugin</code>.
 * When true, the plugin version of Visual Business should be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>plugin</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getPlugin = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Set the width of the control.
 * </p><p>
 * Default value is <code>800px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * High level load function. The function accepts a json string or an already parsed json object. This can be a Visual Business application, any delta operations on the application or other hierachical data that can be mapped by the Visual Business data provider to the inner Visual Business data context.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI.prototype.load = function() { return null; };

/**
 * 
 * Setter for property <code>config</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oConfig  new value for property <code>config</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setConfig = function(oConfig) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>600px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setHeight = function(sHeight) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>plugin</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPlugin  new value for property <code>plugin</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setPlugin = function(bPlugin) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>800px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setWidth = function(sWidth) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Zoom to one or multiple geo positions.
 * </p><p>
 * This function works only for the main geo scene in the Visual Business control.
 * @param {float} fLon
 *         Longitude in degrees. This can be an array of longitude values.
 * @param {float} fLat
 *         Latitude in degrees. This can be an array of latitude values.
 * @param {int} iLod
 *         Level of detail, usually between 0 and 20. This will be limited by the map provider capabilities.
 * @type sap.ui.core.CSSSizeShortHand
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function(fLon,fLat,iLod) { return new sap.ui.core.CSSSizeShortHand(); };


// ---- sap.ui.vbm.VoAggregation --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VoAggregation.
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
 * <ul>
 * <li>{@link sap.ui.vbm.VoAggregation#event:handleMoved handleMoved} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoAggregation#event:handleContextMenu handleContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoAggregation#event:handleClick handleClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Abstract VO aggregation container
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VoAggregation = function(sId,mSettings) {};
/**
 * 
 * This event is raised when the design handle of a changable Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoAggregation.prototype.handleClick = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the design handle of a changable Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoAggregation.prototype.handleContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the design handle of a changable Area is moved.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoAggregation.prototype.handleMoved = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleClick' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleContextMenu' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is right clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleMoved' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is moved.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code>.<br/> itself.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleMoved = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleClick' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleContextMenu' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleMoved' event of this <code>sap.ui.vbm.VoAggregation</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleMoved = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VoAggregation with name <code>sClassName</code> 
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
sap.ui.vbm.VoAggregation.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event handleClick to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleClick = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Fire event handleContextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleContextMenu = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * 
 * Fire event handleMoved to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoAggregation} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleMoved = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };


// ---- sap.ui.vbm.VoBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VoBase.
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
 * <li>{@link #getHotScale hotScale} : string (default: '1.1;1.1;1.0')</li>
 * <li>{@link #getHotDeltaColor hotDeltaColor} : string (default: 'RHLSA(0;1.0;1.0;1.0)')</li>
 * <li>{@link #getSelectColor selectColor} : string (default: 'RHLSA(0.0;1.0;1.0;1.0)')</li>
 * <li>{@link #getFxsize fxsize} : string (default: 'true')</li>
 * <li>{@link #getFxdir fxdir} : string (default: 'true')</li>
 * <li>{@link #getEntity entity} : string</li>
 * <li>{@link #getLabelText labelText} : string</li>
 * <li>{@link #getLabelBgColor labelBgColor} : string (default: 'RGB(255;255;255)')</li>
 * <li>{@link #getLabelPos labelPos} : string</li>
 * <li>{@link #getChangeable changeable} : boolean (default: false)</li>
 * <li>{@link #getDragData dragData} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VoBase#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoBase#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoBase#event:handleMoved handleMoved} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoBase#event:handleContextMenu handleContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VoBase#event:handleClick handleClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Aggregation element for the Spot container
 * @extends sap.ui.core.Element
 * @version 1.28.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VoBase = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a visual object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoBase.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a visual object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoBase.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the design handle of a changable Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoBase.prototype.handleClick = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the design handle of a changable Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoBase.prototype.handleContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * This event is raised when the design handle of a changable Area is moved.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.vbm.VoBase.prototype.handleMoved = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.VoBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoBase</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a visual object.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code>.<br/> itself.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.VoBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoBase</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a visual object.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code>.<br/> itself.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleClick' event of this <code>sap.ui.vbm.VoBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoBase</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code>.<br/> itself.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleContextMenu' event of this <code>sap.ui.vbm.VoBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoBase</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is right clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code>.<br/> itself.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'handleMoved' event of this <code>sap.ui.vbm.VoBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VoBase</code>.<br/> itself. 
 * </p><p>
 * This event is raised when the design handle of a changable Area is moved.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code>.<br/> itself.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleMoved = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.VoBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.VoBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleClick' event of this <code>sap.ui.vbm.VoBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleContextMenu' event of this <code>sap.ui.vbm.VoBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'handleMoved' event of this <code>sap.ui.vbm.VoBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleMoved = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VoBase with name <code>sClassName</code> 
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
sap.ui.vbm.VoBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Fire event handleClick to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleClick = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Fire event handleContextMenu to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleContextMenu = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Fire event handleMoved to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleMoved = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Getter for property <code>changeable</code>.
 * Set to true if vo is changeable.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>changeable</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getChangeable = function() { return false; };

/**
 * 
 * Getter for property <code>dragData</code>.
 * Data to be dragged.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>dragData</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getDragData = function() { return ""; };

/**
 * 
 * Getter for property <code>entity</code>.
 * The visual object builds an entity with other vos when it is hovered. The property is not supported when the PlugIn is used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>entity</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getEntity = function() { return ""; };

/**
 * 
 * Getter for property <code>fxdir</code>.
 * The visual object is not rotated when the map is rotated. The property is only required when the PlugIn is used.
 * </p><p>
 * Default value is <code>true</code>
 * @return {string} the value of property <code>fxdir</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getFxdir = function() { return ""; };

/**
 * 
 * Getter for property <code>fxsize</code>.
 * The visual object should keep its size when the map is zoomed. Default value is 'true'
 * </p><p>
 * Default value is <code>true</code>
 * @return {string} the value of property <code>fxsize</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getFxsize = function() { return ""; };

/**
 * 
 * Getter for property <code>hotDeltaColor</code>.
 * Color shift when visual object is hovered.
 * </p><p>
 * Default value is <code>RHLSA(0;1.0;1.0;1.0)</code>
 * @return {string} the value of property <code>hotDeltaColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getHotDeltaColor = function() { return ""; };

/**
 * 
 * Getter for property <code>hotScale</code>.
 * Scaling factor when visual object is hovered.
 * </p><p>
 * Default value is <code>1.1;1.1;1.0</code>
 * @return {string} the value of property <code>hotScale</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getHotScale = function() { return ""; };

/**
 * 
 * Getter for property <code>labelBgColor</code>.
 * The visual objects label background color. The default value is white.
 * </p><p>
 * Default value is <code>RGB(255;255;255)</code>
 * @return {string} the value of property <code>labelBgColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelBgColor = function() { return ""; };

/**
 * 
 * Getter for property <code>labelPos</code>.
 * The visual objects label position.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>labelPos</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelPos = function() { return ""; };

/**
 * 
 * Getter for property <code>labelText</code>.
 * The visual objects label text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>labelText</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelText = function() { return ""; };

/**
 * 
 * Getter for property <code>selectColor</code>.
 * Color when visual object is selected. This can be explicit or a relative one.
 * </p><p>
 * Default value is <code>RHLSA(0.0;1.0;1.0;1.0)</code>
 * @return {string} the value of property <code>selectColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getSelectColor = function() { return ""; };

/**
 * 
 * Setter for property <code>changeable</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bChangeable  new value for property <code>changeable</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setChangeable = function(bChangeable) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>dragData</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDragData  new value for property <code>dragData</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setDragData = function(sDragData) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>entity</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sEntity  new value for property <code>entity</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setEntity = function(sEntity) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>fxdir</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {string} sFxdir  new value for property <code>fxdir</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setFxdir = function(sFxdir) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>fxsize</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {string} sFxsize  new value for property <code>fxsize</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setFxsize = function(sFxsize) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>hotDeltaColor</code>.
 * </p><p>
 * Default value is <code>RHLSA(0;1.0;1.0;1.0)</code> 
 * @param {string} sHotDeltaColor  new value for property <code>hotDeltaColor</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setHotDeltaColor = function(sHotDeltaColor) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>hotScale</code>.
 * </p><p>
 * Default value is <code>1.1;1.1;1.0</code> 
 * @param {string} sHotScale  new value for property <code>hotScale</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setHotScale = function(sHotScale) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>labelBgColor</code>.
 * </p><p>
 * Default value is <code>RGB(255;255;255)</code> 
 * @param {string} sLabelBgColor  new value for property <code>labelBgColor</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelBgColor = function(sLabelBgColor) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>labelPos</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabelPos  new value for property <code>labelPos</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelPos = function(sLabelPos) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>labelText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabelText  new value for property <code>labelText</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelText = function(sLabelText) { return new sap.ui.vbm.VoBase(); };

/**
 * 
 * Setter for property <code>selectColor</code>.
 * </p><p>
 * Default value is <code>RHLSA(0.0;1.0;1.0;1.0)</code> 
 * @param {string} sSelectColor  new value for property <code>selectColor</code>
 * @return {sap.ui.vbm.VoBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setSelectColor = function(sSelectColor) { return new sap.ui.vbm.VoBase(); };

// ---- static fields of namespaces ---------------------------------------------------------------------
