
// ---- sap.ui.comp --------------------------------------------------------------------------


// ---- sap.ui.comp.filterbar.FilterBar --------------------------------------------------------------------------

/**
 * Constructor for a new filterbar/FilterBar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getAdvancedMode advancedMode} : boolean (default: false)</li>
 * <li>{@link #getExpandAdvancedArea expandAdvancedArea} : boolean (default: false)</li>
 * <li>{@link #getSearchEnabled searchEnabled} : boolean (default: true)</li>
 * <li>{@link #getFilterBarExpanded filterBarExpanded} : boolean (default: true)</li>
 * <li>{@link #getConsiderGroupTitle considerGroupTitle} : boolean (default: false)</li>
 * <li>{@link #getShowClearButton showClearButton} : boolean (default: false)</li>
 * <li>{@link #getShowRestoreButton showRestoreButton} : boolean (default: true)</li>
 * <li>{@link #getShowGoOnFB showGoOnFB} : boolean (default: true)</li>
 * <li>{@link #getShowRestoreOnFB showRestoreOnFB} : boolean (default: false)</li>
 * <li>{@link #getShowClearOnFB showClearOnFB} : boolean (default: false)</li>
 * <li>{@link #getShowGoButton showGoButton} : boolean</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.comp.filterbar.FilterItem[]</li>
 * <li>{@link #getFilterGroupItems filterGroupItems} : sap.ui.comp.filterbar.FilterGroupItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:reset reset} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeVariantSave beforeVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantLoad afterVariantLoad} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:clear clear} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.Grid#constructor sap.ui.layout.Grid}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The FilterBar control displays filters in a user-friendly manner to populate values for a query. The FilterBar consists of a row containing the variant management control, the related buttons, and an area underneath displaying the filters.
 * The filters are arranged in a logical row that is divided depending on the space available and the width of the filters.
 * The area containing the filters can be hidden or shown using the HideFilterBar/ShowFilterBar button. The 'Go' button triggers the search event, and the 'Filters' button shows the filter dialog. In this dialog, the user has full control over the filter bar. The filters in this dialog are displayed in one column and organized in groups. The filter items of the filterItems aggregation are grouped in the 'Basic' group . Each filter can be marked as visible in the filter bar by selecting 'Add to Filter Bar'. In addition, the items in the 'filterGroupItems' aggregation can be marked as a part of the current variant.
 * The variant management control will be displayed above the filters.
 * The FilterBar also supports a different UI layout when used inside a value help dialog. In this case the FilterBar consists of two logical areas, one containing the general search button and in the s.c. 'Advanced Search' area.
 * The 'Advanced Search' is a collapsible area displaying the advanced filters in two columns.
 * @extends sap.ui.layout.Grid
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.filterbar.FilterBar = function(sId,mSettings) {};
/**
 * Fired after a variant was loaded and applied to the SmartFilterBar. The event could be used to adapt custom control with data from the variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.afterVariantLoad = function(oControlEvent) {  };

/**
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * Fired before a variant is saved. This event can be used to adapt the model of the smart filter bar, which will be saved as variant later on.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.beforeVariantSave = function(oControlEvent) {  };

/**
 * this event is fired if the button 'Cancel' is executed and the variant is marked as dirty
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.cancel = function(oControlEvent) {  };

/**
 * Event fired if the Clear button is executed. The intention is to clear every filter.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.clear = function(oControlEvent) {  };

/**
 * Event fired when the filter criteria has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.filterChange = function(oControlEvent) {  };

/**
 * Event fired when the filter bar is initialized and its controls are created and the variants are obtained
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.initialise = function(oControlEvent) {  };

/**
 * this event is fired if the button 'Restore' is executed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.reset = function(oControlEvent) {  };

/**
 * this event is fired if the button 'Search' is executed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.search = function(oControlEvent) {  };

/**
 * add an FilterItem element to the advanced area
 * @public
 * @param {sap.ui.comp.filterbar.FilterGroupItem} oFilterGroupItem group filter item
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterGroupItem = function(oFilterGroupItem) {  };

/**
 * add an FilterItem element to the basic area
 * @public
 * @param {sap.ui.comp.filterbar.FilterItem} oFilterItem filter item
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterItem = function(oFilterItem) {  };

/**
 * Will be called from the smart variant control, as a request to apply the variant
 * @param {string} oVariant json object
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.applyVariant = function(oVariant) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterVariantLoad' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Fired after a variant was loaded and applied to the SmartFilterBar. The event could be used to adapt custom control with data from the variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachAfterVariantLoad = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforeVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Fired before a variant is saved. This event can be used to adapt the model of the smart filter bar, which will be saved as variant later on.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachBeforeVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * this event is fired if the button 'Cancel' is executed and the variant is marked as dirty
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'clear' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Event fired if the Clear button is executed. The intention is to clear every filter.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachClear = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Event fired when the filter criteria has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * Event fired when the filter bar is initialized and its controls are created and the variants are obtained
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'reset' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * this event is fired if the button 'Restore' is executed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachReset = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br> itself.
 * 
 * this event is fired if the button 'Search' is executed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * When the filterBar is started via navigation, we need to inform the variant management to reset an eventual previous selection
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.clearVariantSelection = function() {  };

/**
 * destroys the current control and all inner controls
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroy = function() {  };

/**
 * Destroys all the filterGroupItems in the aggregation
 * named <code>filterGroupItems</code>.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterGroupItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Destroys all the filterItems in the aggregation
 * named <code>filterItems</code>.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterVariantLoad' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachAfterVariantLoad = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachBeforeVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'clear' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachClear = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'reset' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachReset = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * retrieve the control based on the filteBarItem
 * @public
 * @param {sap.ui.comp.filterbar.Filter.FilterItem} oFilterItem from the aggregations
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned.
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByFilterItem = function(oFilterItem) { return new sap.ui.core.Control(); };

/**
 * retrieve the control based on the name and group name
 * @public
 * @param {string} sName the control's name
 * @param {string} sGroupName is null for basic area
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned. For filters in the advanced area the
 *          visibleInAdvancedArea flag is considered
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByName = function(sName,sGroupName) { return new sap.ui.core.Control(); };

/**
 * retrieve the mandatory filters
 * @public
 * @returns {array} of visible mandatory filters
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineMandatoryFilterItems = function() { return null; };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.Grid.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Will be called from the smart variant control, as a request to determine the content of
 * @param {boolean} bConsiderInvisibleFilters indicates if invisible filters should be considered
 * @returns {object} json object
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fetchVariant = function(bConsiderInvisibleFilters) { return new Object(); };

/**
 * Fire event afterVariantSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fire event clear to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireClear = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * read the personalization, apply eventual variants and inform all registered parties about the initialization finish. In case a default variant
 * exists, trigger search
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireInitialise = function() {  };

/**
 * Fire event reset to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireReset = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fire event search to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireSearch = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Getter for property <code>advancedMode</code>.
 * The advance mode overwrites the standard behavior such that:
 * - the text 'Dynamic Selection' is replaced by 'Advanced Search'
 * - all filter fields are added to the advanced area
 * - the Restore button is hidden
 * - the advanced area is expanded
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>advancedMode</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAdvancedMode = function() { return false; };

/**
 * determine all known controls, regardless of their visibility
 * @public
 * @param {boolean} bConsiderOnlyVisibleFields based on this flag either all or just the visible/partOfCurrentVariant items are returned
 * @returns {array} array of all/only visible/partOfCurrentVariant items
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAllFilterItems = function(bConsiderOnlyVisibleFields) { return null; };

/**
 * Getter for property <code>considerGroupTitle</code>.
 * If this property is set, then the label for filters with a filter group title will be enhanced with the group title.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>considerGroupTitle</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getConsiderGroupTitle = function() { return false; };

/**
 * retrieves the current variant id
 * @public
 * @since 1.28.0
 * @returns {string} id of the current variant
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getCurrentVariantId = function() { return ""; };

/**
 * retrieves the current variant in a suite format
 * @public
 * @since 1.28.0
 * @param {boolean} bConsiderAllFilters indicates, if hidden filters should be considered
 * @returns {string} JSON string representing the 'new' format; null otherwise
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getDataSuiteFormat = function(bConsiderAllFilters) { return ""; };

/**
 * describes whether the advanced area is currently displayed as collapsed or expanded
 * @public
 * @returns {boolean} return the current state of the expand area
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getExpandAdvancedArea = function() { return false; };

/**
 * Getter for property <code>filterBarExpanded</code>.
 * allow to display the FilterBar in expanded /collapsed mode
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>filterBarExpanded</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterBarExpanded = function() { return false; };

/**
 * Getter for aggregation <code>filterGroupItems</code>.<br/>
 * is used for the population of the advanced area with filter fields
 * @return {sap.ui.comp.filterbar.FilterGroupItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterGroupItems = function() { return new Array(); };

/**
 * Getter for aggregation <code>filterItems</code>.<br/>
 * is used to populate the basic area with selection fields
 * @return {sap.ui.comp.filterbar.FilterItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterBar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>persistencyKey</code>.
 * The persistencyKey represents the key for storing the variant values and the fields belonging to the variants
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getPersistencyKey = function() { return ""; };

/**
 * Getter for property <code>searchEnabled</code>.
 * enables/disables the search button
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>searchEnabled</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getSearchEnabled = function() { return false; };

/**
 * Getter for property <code>showClearButton</code>.
 * indicates if the 'Clear' button should be shown.
 * Has to be set during filter bar initialization.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showClearButton</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowClearButton = function() { return false; };

/**
 * Getter for property <code>showClearOnFB</code>.
 * indicates if the 'Clear' button should be shown in the filter bar.
 * Has to be set during FilterBar initialization.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showClearOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowClearOnFB = function() { return false; };

/**
 * get the visibility for the go button on filterbar. This Property is deprecated. Please use instead the property 'showGoOnFB'.
 * @public
 * @since 1.26.1
 * @returns {boolean} bFlag state of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowGoButton = function() { return false; };

/**
 * Getter for property <code>showGoOnFB</code>.
 * indicates if the 'Go' button should be shown in the filter bar.
 * Has to be set during FilterBar initialization.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGoOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowGoOnFB = function() { return false; };

/**
 * Getter for property <code>showRestoreButton</code>.
 * indicates if the 'Restore' button should be shown.
 * Has to be set during filter bar initialization.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRestoreButton</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowRestoreButton = function() { return false; };

/**
 * Getter for property <code>showRestoreOnFB</code>.
 * indicates if the 'Restore' button should be shown in the filter bar.
 * Has to be set during FilterBar initialization.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showRestoreOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowRestoreOnFB = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterGroupItem</code> in the aggregation named <code>filterGroupItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *           oFilterGroupItem the filterGroupItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterGroupItem = function(oFilterGroupItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterItem</code> in the aggregation named <code>filterItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *           oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterItem = function(oFilterItem) { return 0; };

/**
 * Inserts a filterGroupItem into the aggregation named <code>filterGroupItems</code>.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *            oFilterGroupItem the filterGroupItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterGroupItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterGroupItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterGroupItem is inserted at
 *              the last position
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterGroupItem = function(oFilterGroupItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *            oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterItem is inserted at
 *              the last position
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterItem = function(oFilterItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * fCallBack for being able to participate in variant handling. This fCallBack will be executed, when ever a variant has to be applied. The fCallBack
 * will receive the corresponding data set, in Json notation, containing all relevant data as initially provided by the fCallBack for fetchData
 * @public
 * @param {function} fCallBack to be called, when a variant has to be applied
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerApplyData = function(fCallBack) {  };

/**
 * fCallBack for being able to participate in variant save handling. This fCallBack will be executed, whenever the variant save is triggered and has
 * to provide, in Json notation, all relevant fields and values. This data blob will be saved along with the current variant
 * @public
 * @param {function} fCallBack to be called, when a variant has to be applied
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerFetchData = function(fCallBack) {  };

/**
 * fCallBack for being able to participate in variant save handling. This fCallBack will be executed, whenever the variant save is triggered and has
 * to provide, in Json notation, all relevant fields and values. This data blob will be saved along with the current variant
 * @public
 * @since 1.26.1
 * @param {function} fCallBack to be called, when a variant has to be applied
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerGetFiltersWithValues = function(fCallBack) {  };

/**
 * removes all entries in the aggregation GroupFilterItems
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterGroupItems = function() {  };

/**
 * removes all entries in the aggregation FilterItems
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterItems = function() {  };

/**
 * Removes an filterGroupItem from the aggregation named <code>filterGroupItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterGroupItem} vFilterGroupItem the filterGroupItemto remove or its index or id
 * @return {sap.ui.comp.filterbar.FilterGroupItem} the removed filterGroupItem or null
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterGroupItem = function(vFilterGroupItem) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterItem} vFilterItem the filterItemto remove or its index or id
 * @return {sap.ui.comp.filterbar.FilterItem} the removed filterItem or null
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterItem = function(vFilterItem) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * adapt the visibility for all filter containers according to their property settings
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.rerenderFilters = function() {  };

/**
 * In advanced mode the text 'Dynamic Selection' is replaced by 'Advanced Search' all filter fields are added to the advanced area and the add/remove
 * filter button and the variant management buttons are hidden
 * @public
 * @param {boolean} bFlag - true or false / set-reset advanced mode
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setAdvancedMode = function(bFlag) {  };

/**
 * Setter for property <code>considerGroupTitle</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bConsiderGroupTitle new value for property <code>considerGroupTitle</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setConsiderGroupTitle = function(bConsiderGroupTitle) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * set the current variant id
 * @public
 * @since 1.28.0
 * @param {string} sVariantId id of the variant
 * @param {boolean} bDoNotApplyVariant if set to true the applyVariant method will not be executed yet. Use-full if used during navigation, where the
 *        pers-controller sets the variant id, but the initialise - sequence triggers the applyVariant method
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setCurrentVariantId = function(sVariantId,bDoNotApplyVariant) {  };

/**
 * retrieves the current variant in a suite format
 * @public
 * @since 1.28.0
 * @param {string} sSuiteData representing the suite data
 * @param {boolean} bReplace indicates a clean-up before appliance
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setDataSuiteFormat = function(sSuiteData,bReplace) {  };

/**
 * describes whether the advanced area should be displayed collapsed or expanded
 * @public
 * @param {boolean} bFlag sets/resets the advanced area to expanded/collapsed
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setExpandAdvancedArea = function(bFlag) {  };

/**
 * set the persistency key for
 * @public
 * @param {string} sPersistenceKey id for persistency
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setPersistencyKey = function(sPersistenceKey) {  };

/**
 * sets the type of the Search-button to Emphasize. The state of the Search button will always be reset, once the event search is executed
 * @public
 * @param {boolean} bSetEmphasize sets the Emphasized or Default - type
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchButtonEmphType = function(bSetEmphasize) {  };

/**
 * enables/disables the search button
 * @public
 * @param {boolean} bValue sets/resets the enable state of the search button
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchEnabled = function(bValue) {  };

/**
 * Setter for property <code>showClearButton</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowClearButton new value for property <code>showClearButton</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowClearButton = function(bShowClearButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * set the visibility for the clear button on filterbar. Not supported on phone devices.
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag state of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowClearOnFB = function(bFlag) {  };

/**
 * set the visibility for the go button on filterbar. This Property is deprecated. Please use instead the property 'showGoOnFB'.
 * @public
 * @since 1.26.1
 * @param {boolean} bFlag state of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowGoButton = function(bFlag) {  };

/**
 * set the visibility for the go button on filterbar
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag state of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowGoOnFB = function(bFlag) {  };

/**
 * Setter for property <code>showRestoreButton</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRestoreButton new value for property <code>showRestoreButton</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowRestoreButton = function(bShowRestoreButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * set the visibility for the restore button on filterbar. Not supported on phone devices.
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag state of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowRestoreOnFB = function(bFlag) {  };


// ---- sap.ui.comp.filterbar.FilterGroupItem --------------------------------------------------------------------------

/**
 * Constructor for a new filterbar/FilterGroupItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGroupTitle groupTitle} : string</li>
 * <li>{@link #getGroupName groupName} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterItem#constructor sap.ui.comp.filterbar.FilterItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * representation for a filter field in the advanced area. Has the same semantical meaning as the new visible in filter bar property.
 * @extends sap.ui.comp.filterbar.FilterItem
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem = function(sId,mSettings) {};
/**
 * destroys this element
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.destroy = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterGroupItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.filterbar.FilterItem.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>groupName</code>.
 * the name of the group
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>groupName</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupName = function() { return ""; };

/**
 * Getter for property <code>groupTitle</code>.
 * the title of the group
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>groupTitle</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupTitle = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterGroupItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * getter for controlling the filters visibility in the filter bar. This property is deprecated, please use 'visibleInFilterBar' The successor of this property
 * is 'visibleInFilterBar'.
 * @public
 * @returns {boolean} bValue property
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getVisibleInAdvancedArea = function() { return false; };

/**
 * Setter for property <code>groupName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sGroupName new value for property <code>groupName</code>
 * @return {sap.ui.comp.filterbar.FilterGroupItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupName = function(sGroupName) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * setter for group title
 * @public
 * @param {string}
 *            sValue property
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupTitle = function(sValue) {  };

/**
 * setter for controlling the filters visibility in the filter bar. This property is deprecated, please use 'visibleInFilterBar' The successor of this property
 * is 'visibleInFilterBar'.
 * @public
 * @param {boolean}
 *            bValue property
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setVisibleInAdvancedArea = function(bValue) {  };


// ---- sap.ui.comp.filterbar.FilterItem --------------------------------------------------------------------------

/**
 * Constructor for a new filterbar/FilterItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMandatory mandatory} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getLabelTooltip labelTooltip} : string</li>
 * <li>{@link #getPartOfCurrentVariant partOfCurrentVariant} : boolean (default: false)</li>
 * <li>{@link #getVisibleInFilterBar visibleInFilterBar} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControl control} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * FilterItem represents a selection filed in the basic area of the FilterBar control
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.filterbar.FilterItem = function(sId,mSettings) {};
/**
 * Fired when the value of a property, for example vVisible, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.change = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterItem</code>.<br> itself.
 * 
 * Fired when the value of a property, for example vVisible, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * destroys this element
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroy = function() {  };

/**
 * Destroys the control in the aggregation
 * named <code>control</code>.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroyControl = function() { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.fireChange = function(mArguments) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Getter for aggregation <code>control</code>.<br/>
 * the control which will be placed into te basic area
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>label</code>.
 * the label of the control
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabel = function() { return ""; };

/**
 * retrieves the label control. Needed because of an eventual binding to the label
 * @public
 * @returns {sap.m.Label} the label control
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabelControl = function() { return new sap.m.Label(); };

/**
 * Getter for property <code>labelTooltip</code>.
 * provide a tooltip for the item. The Tooltip will be assigned to the label.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>labelTooltip</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabelTooltip = function() { return ""; };

/**
 * Getter for property <code>mandatory</code>.
 * mandatory flag
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getMandatory = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * the name of the field
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>partOfCurrentVariant</code>.
 * Determines if a filter is part of the currently selected variant. This property is ONLY used internally and must not be used by the filter bar consumers.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>partOfCurrentVariant</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getPartOfCurrentVariant = function() { return false; };

/**
 * Getter for property <code>visible</code>.
 * visibility state of the FilterItem
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisible = function() { return false; };

/**
 * Getter for property <code>visibleInFilterBar</code>.
 * Controls the visibility of a filter item in the FilterBar
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleInFilterBar</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisibleInFilterBar = function() { return false; };

/**
 * initialize the filter item
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.init = function() {  };

/**
 * Setter for the aggregated <code>control</code>.
 * @param {sap.ui.core.Control} oControl the control to set
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setControl = function(oControl) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * setter for label
 * @public
 * @param {string} sValue property
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabel = function(sValue) {  };

/**
 * setter for tooltip
 * @public
 * @param {string} sText property
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabelTooltip = function(sText) {  };

/**
 * setter for mandatory flag
 * @public
 * @param {string} bValue property
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setMandatory = function(bValue) {  };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setName = function(sName) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Setter for property <code>partOfCurrentVariant</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPartOfCurrentVariant new value for property <code>partOfCurrentVariant</code>
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setPartOfCurrentVariant = function(bPartOfCurrentVariant) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * setter for visible
 * @public
 * @param {boolean} bIsVisible property
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisible = function(bIsVisible) {  };

/**
 * setter for visible in filter bar
 * @public
 * @since 1.26.1
 * @param {boolean} bIsVisible property
 * @param {boolean} bTriggerWithoutChangeNotification if set, the change notification will not be fired
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisibleInFilterBar = function(bIsVisible,bTriggerWithoutChangeNotification) {  };


// ---- sap.ui.comp.navpopover.LinkData --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/LinkData.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getHref href} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Stores display text together with a navigation target hyperlink.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.LinkData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.navpopover.LinkData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.LinkData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>href</code>.
 * Destination link for a navigation operation.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>href</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.getHref = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.LinkData.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.LinkData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>text</code>.
 * Text which can be displayed on the UI
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.getText = function() { return ""; };

/**
 * Setter for property <code>href</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sHref new value for property <code>href</code>
 * @return {sap.ui.comp.navpopover.LinkData} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.setHref = function(sHref) { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.comp.navpopover.LinkData} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.setText = function(sText) { return new sap.ui.comp.navpopover.LinkData(); };


// ---- sap.ui.comp.navpopover.NavigationPopover --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/NavigationPopover.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSemanticObjectName semanticObjectName} : string</li>
 * <li>{@link #getSemanticAttributes semanticAttributes} : object</li>
 * <li>{@link #getAppStateKey appStateKey} : string</li>
 * <li>{@link #getMainNavigationId mainNavigationId} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAvailableActions availableActions} : sap.ui.comp.navpopover.LinkData[]</li>
 * <li>{@link #getMainNavigation mainNavigation} : sap.ui.comp.navpopover.LinkData</li>
 * <li>{@link #getOwnNavigation ownNavigation} : sap.ui.comp.navpopover.LinkData</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:targetsObtained targetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Popover#constructor sap.m.Popover}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The NavigationPopover allows navigating to different destinations by providing links on a popover
 * @extends sap.m.Popover
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.NavigationPopover = function(sId,mSettings) {};
/**
 * Event is triggerd when a link is pressed.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.navigate = function(oControlEvent) {  };

/**
 * the navigation targets were obtained
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.targetsObtained = function(oControlEvent) {  };

/**
 * Adds some availableAction into the aggregation named <code>availableActions</code>.
 * @param {sap.ui.comp.navpopover.LinkData}
 *            oAvailableAction the availableAction to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.addAvailableAction = function(oAvailableAction) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br> itself.
 * 
 * Event is triggerd when a link is pressed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'targetsObtained' event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br> itself.
 * 
 * the navigation targets were obtained
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.attachTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys all the availableActions in the aggregation
 * named <code>availableActions</code>.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyAvailableActions = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys the mainNavigation in the aggregation
 * named <code>mainNavigation</code>.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyMainNavigation = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys the ownNavigation in the aggregation
 * named <code>ownNavigation</code>.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyOwnNavigation = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'targetsObtained' event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.detachTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.NavigationPopover with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Popover.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event navigate to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.fireNavigate = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Fire event targetsObtained to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.fireTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Getter for property <code>appStateKey</code>.
 * The application state key passed to retrieve the navigation targets.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>appStateKey</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getAppStateKey = function() { return ""; };

/**
 * Getter for aggregation <code>availableActions</code>.<br/>
 * A list of available actions shown to the user. An action entry contains a text string and a href string.
 * @return {sap.ui.comp.navpopover.LinkData[]}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getAvailableActions = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>component</code> association, or null
 * 
 * The parent component.
 * @return {sap.ui.core.Element}
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getComponent = function() { return new sap.ui.core.Element(); };

/**
 * Id of the element which is the current target of the <code>extraContent</code> association, or null
 * 
 * ExtraContent is displayed between the main navigation and the additional available links.
 * @return {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getExtraContent = function() { return new sap.ui.core.Control(); };

/**
 * Getter for aggregation <code>mainNavigation</code>.<br/>
 * The main navigation displayed first on the popover.
 * @return {sap.ui.comp.navpopover.LinkData}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getMainNavigation = function() { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Getter for property <code>mainNavigationId</code>.
 * Sets the visible text for the main navigation. If empty, the navigationPopover will try to get the Id from the given sourceObject.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>mainNavigationId</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getMainNavigationId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.NavigationPopover.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>ownNavigation</code>.<br/>
 * The navigation target leading to the current application.
 * @return {sap.ui.comp.navpopover.LinkData}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getOwnNavigation = function() { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Getter for property <code>semanticAttributes</code>.
 * describes the semantic attributes. The attribute has to be a map
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>semanticAttributes</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSemanticAttributes = function() { return new Object(); };

/**
 * Getter for property <code>semanticObjectName</code>.
 * the name of the semantic object
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>semanticObjectName</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSemanticObjectName = function() { return ""; };

/**
 * Id of the element which is the current target of the <code>source</code> association, or null
 * 
 * source control for which the popup should be displayed
 * @return {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSource = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>title</code>.
 * popover title
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.navpopover.LinkData</code> in the aggregation named <code>availableActions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.navpopover.LinkData}
 *           oAvailableAction the availableAction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.indexOfAvailableAction = function(oAvailableAction) { return 0; };

/**
 * Inserts a availableAction into the aggregation named <code>availableActions</code>.
 * @param {sap.ui.comp.navpopover.LinkData}
 *            oAvailableAction the availableAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the availableAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the availableAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the availableAction is inserted at
 *              the last position
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.insertAvailableAction = function(oAvailableAction,iIndex) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Removes all the controls in the aggregation named <code>availableActions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.navpopover.LinkData[]} an array of the removed elements (might be empty)
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.removeAllAvailableActions = function() { return new Array(); };

/**
 * Removes an availableAction from the aggregation named <code>availableActions</code>.
 * @param {int | string | sap.ui.comp.navpopover.LinkData} vAvailableAction the availableActionto remove or its index or id
 * @return {sap.ui.comp.navpopover.LinkData} the removed availableAction or null
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.removeAvailableAction = function(vAvailableAction) { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * determines the potential navigation targets for the semantical object and visualize the popover
 * @public
 * @param {string}
 *            sSemanticalObject name of the semantical object
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.retrieveNavTargets = function(sSemanticalObject) {  };

/**
 * Setter for property <code>appStateKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAppStateKey new value for property <code>appStateKey</code>
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setAppStateKey = function(sAppStateKey) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for the associated <code>component</code>.
 * @param {sap.ui.core.Element} oComponent Id of an element which becomes the new target of this component association. Alternatively, an element instance may be given.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setComponent = function(oComponent) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for the associated <code>extraContent</code>.
 * @param {sap.ui.core.Control} oExtraContent Id of an element which becomes the new target of this extraContent association. Alternatively, an element instance may be given.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setExtraContent = function(oExtraContent) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for the aggregated <code>mainNavigation</code>.
 * @param {sap.ui.comp.navpopover.LinkData} oMainNavigation the mainNavigation to set
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setMainNavigation = function(oMainNavigation) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for property <code>mainNavigationId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sMainNavigationId new value for property <code>mainNavigationId</code>
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setMainNavigationId = function(sMainNavigationId) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for the aggregated <code>ownNavigation</code>.
 * @param {sap.ui.comp.navpopover.LinkData} oOwnNavigation the ownNavigation to set
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setOwnNavigation = function(oOwnNavigation) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for property <code>semanticAttributes</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oSemanticAttributes new value for property <code>semanticAttributes</code>
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSemanticAttributes = function(oSemanticAttributes) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for property <code>semanticObjectName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSemanticObjectName new value for property <code>semanticObjectName</code>
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSemanticObjectName = function(sSemanticObjectName) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for the associated <code>source</code>.
 * @param {sap.ui.core.Control} oSource Id of an element which becomes the new target of this source association. Alternatively, an element instance may be given.
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSource = function(oSource) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>
 * @return {sap.ui.comp.navpopover.NavigationPopover} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setTitle = function(sTitle) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * displays the popover. This method should be called, once all navigation targets are adapted by the application
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.show = function() {  };


// ---- sap.ui.comp.navpopover.SemanticObjectController --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/SemanticObjectController.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getPrefetchNavigationTargets prefetchNavigationTargets} : boolean (default: false)</li>
 * <li>{@link #getFieldSemanticObjectMap fieldSemanticObjectMap} : object</li>
 * <li>{@link #getEntitySet entitySet} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:navigationTargetsObtained navigationTargetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforePopoverOpens beforePopoverOpens} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:prefetchDone prefetchDone} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The SemanticObjectController allows the user to register against semantic object navigation events as well as define semantic objects which should be ignored.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController = function(sId,mSettings) {};
/**
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be used to set the required business attributes.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets must be retrieved.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation targets.
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fired this event.
 * @param {function} oControlEvent.getParameters.setSemanticAttributes This callback function enables you to define a changed semantic attributes map. 
 *  Signatures:
 *  <code>setSemanticAttributes(oSemanticAttributesMap)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 *  </ul>
 * @param {function} oControlEvent.getParameters.setAppStateKey This callback function sets an application state key that is used over the cross-application navigation. 
 *  Signatures:
 *  <code>setAppStateKey(sAppStateKey)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{string} sAppStateKey - The application state key.</li>
 *  </ul>
 * @param {function} oControlEvent.getParameters.open This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 *  Signatures:
 *  <code>open()</code>
 *  If the beforePopoverOpens event has been registered, the 'open' function has to be called in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.beforePopoverOpens = function(oControlEvent) {  };

/**
 * This event is fired after a navigation link on the navigation popover has been clicked.
 * This event is only fired, if the user left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The UI text shown in the clicked link.
 * @param {string} oControlEvent.getParameters.href The navigation target of the clicked link.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object used to retrieve this target.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes used to retrieve this target.
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fired this event.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.navigate = function(oControlEvent) {  };

/**
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation targets.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.navpopover.LinkData[]} oControlEvent.getParameters.actions Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.mainNavigation The main navigation, containing a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.ownNavigation The navigation object for the current application, containing a 'text' and 'href' property.
 *  This navigation option is by default not visible on the popover.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets have been retrieved.
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fired this event.
 * @param {function} oControlEvent.getParameters.show This callback function shows the actual navigation popover. 
 *  Signatures:
 *  <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  Parameters:
 *  <ul>
 *  	<li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get the ID from the given sourceObject.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href' property.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 *   <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 *  </ul>					      
 *  If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.navigationTargetsObtained = function(oControlEvent) {  };

/**
 * Event is fired if the prefechtNavigationTargets property of the SemanticObjectController is set to true and the navigation targets have been fetched successfully.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.semanticObjects A map containing all semantic objects keys for which at least one navigation target was found. The value for each semantic object key is an array containing the available actions found for this semantic object.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.prefetchDone = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforePopoverOpens' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br> itself.
 * 
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be used to set the required business attributes.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachBeforePopoverOpens = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br> itself.
 * 
 * This event is fired after a navigation link on the navigation popover has been clicked.
 * This event is only fired, if the user left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'navigationTargetsObtained' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br> itself.
 * 
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation targets.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachNavigationTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'prefetchDone' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br> itself.
 * 
 * Event is fired if the prefechtNavigationTargets property of the SemanticObjectController is set to true and the navigation targets have been fetched successfully.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachPrefetchDone = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforePopoverOpens' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachBeforePopoverOpens = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'navigationTargetsObtained' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachNavigationTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'prefetchDone' event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachPrefetchDone = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.SemanticObjectController with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event beforePopoverOpens to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'semanticObject' of type <code>string</code>The semantic object for which the navigation targets must be retrieved.</li>
 * <li>'semanticAttributes' of type <code>object</code>Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation targets.</li>
 * <li>'originalId' of type <code>string</code>The ID of the control that fired this event.</li>
 * <li>'setSemanticAttributes' of type <code>function</code>This callback function enables you to define a changed semantic attributes map. 
 *  Signatures:
 *  <code>setSemanticAttributes(oSemanticAttributesMap)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 *  </ul></li>
 * <li>'setAppStateKey' of type <code>function</code>This callback function sets an application state key that is used over the cross-application navigation. 
 *  Signatures:
 *  <code>setAppStateKey(sAppStateKey)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{string} sAppStateKey - The application state key.</li>
 *  </ul></li>
 * <li>'open' of type <code>function</code>This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 *  Signatures:
 *  <code>open()</code>
 *  If the beforePopoverOpens event has been registered, the 'open' function has to be called in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireBeforePopoverOpens = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fire event navigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code>The UI text shown in the clicked link.</li>
 * <li>'href' of type <code>string</code>The navigation target of the clicked link.</li>
 * <li>'semanticObject' of type <code>string</code>The semantic object used to retrieve this target.</li>
 * <li>'semanticAttributes' of type <code>object</code>Map containing the semantic attributes used to retrieve this target.</li>
 * <li>'originalId' of type <code>string</code>The ID of the control that fired this event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireNavigate = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fire event navigationTargetsObtained to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'actions' of type <code>sap.ui.comp.navpopover.LinkData[]</code>Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.</li>
 * <li>'mainNavigation' of type <code>sap.ui.comp.navpopover.LinkData</code>The main navigation, containing a 'text' and 'href' property.</li>
 * <li>'ownNavigation' of type <code>sap.ui.comp.navpopover.LinkData</code>The navigation object for the current application, containing a 'text' and 'href' property.
 *  This navigation option is by default not visible on the popover.</li>
 * <li>'semanticObject' of type <code>string</code>The semantic object for which the navigation targets have been retrieved.</li>
 * <li>'originalId' of type <code>string</code>The ID of the control that fired this event.</li>
 * <li>'show' of type <code>function</code>This callback function shows the actual navigation popover. 
 *  Signatures:
 *  <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  Parameters:
 *  <ul>
 *  	<li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get the ID from the given sourceObject.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href' property.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 *   <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 *  </ul>					      
 *  If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireNavigationTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fire event prefetchDone to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'semanticObjects' of type <code>object</code>A map containing all semantic objects keys for which at least one navigation target was found. The value for each semantic object key is an array containing the available actions found for this semantic object.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.firePrefetchDone = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Getter for property <code>entitySet</code>.
 * The entity set name. If this name is not defined, the SemanticObjectController tries to retrieve the name from a parent.
 * 
 * Note that this is not a dynamic UI5 property
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>entitySet</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getEntitySet = function() { return ""; };

/**
 * Getter for property <code>fieldSemanticObjectMap</code>.
 * Maps the field names to the related semantic objects. When accessing this property for the first time, the mapping will be calculated from the metadata within the provided model.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>fieldSemanticObjectMap</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getFieldSemanticObjectMap = function() { return new Object(); };

/**
 * Getter for property <code>ignoredFields</code>.
 * Comma-separated list of field names that must not be displayed as links.
 * 
 * Note that no validation will be done. Please ensure that you do not add any spaces or special characters.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ignoredFields</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getIgnoredFields = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.SemanticObjectController.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>prefetchNavigationTargets</code>.
 * If set to 'true', the SemanticObjectController will retrieve all navigation targets once in order to initially deactivate links for which no targets exist.
 * Setting this value to 'true' will trigger an additional roundtrip.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>prefetchNavigationTargets</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getPrefetchNavigationTargets = function() { return false; };

/**
 * Adds the given control from the SemanticObjectControler and registers all relevant events
 * @param {sap.ui.comp.navpopover.SmartLink} oSemanticSmartControl the SmartLink which should be added.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.registerControl = function(oSemanticSmartControl) {  };

/**
 * Setter for property <code>entitySet</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sEntitySet new value for property <code>entitySet</code>
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setEntitySet = function(sEntitySet) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Setter for property <code>fieldSemanticObjectMap</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oFieldSemanticObjectMap new value for property <code>fieldSemanticObjectMap</code>
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setFieldSemanticObjectMap = function(oFieldSemanticObjectMap) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Setter for property <code>ignoredFields</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sIgnoredFields new value for property <code>ignoredFields</code>
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Checks if the given SmartLink should be enabled or disabled and sets the state
 * @param {sap.ui.comp.navpopover.SmartLink} oSmartLink the SmartLink which should be enabled or disabled.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setIgnoredState = function(oSmartLink) {  };

/**
 * Setter for property <code>prefetchNavigationTargets</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPrefetchNavigationTargets new value for property <code>prefetchNavigationTargets</code>
 * @return {sap.ui.comp.navpopover.SemanticObjectController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setPrefetchNavigationTargets = function(bPrefetchNavigationTargets) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Removes the given control from the SemanticObjectControler and unregisters all relevant events
 * @param {sap.ui.comp.navpopover.SmartLink} oSemanticSmartControl the SmartLink which should be removed.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.unregisterControl = function(oSemanticSmartControl) {  };


// ---- sap.ui.comp.navpopover.SmartLink --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/SmartLink.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSemanticObject semanticObject} : string</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : any</li>
 * <li>{@link #getFieldName fieldName} : string</li>
 * <li>{@link #getSemanticObjectLabel semanticObjectLabel} : string</li>
 * <li>{@link #getCreateControlCallback createControlCallback} : object</li>
 * <li>{@link #getMapFieldToSemanticObject mapFieldToSemanticObject} : boolean (default: true)</li>
 * <li>{@link #getIgnoreLinkRendering ignoreLinkRendering} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getInnerControl innerControl} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:beforePopoverOpens beforePopoverOpens} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigationTargetsObtained navigationTargetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:innerNavigate innerNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Link#constructor sap.m.Link}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The SmartLink control uses a semantic object to display a Navigation Popover for further navigation steps.
 * @extends sap.m.Link
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.SmartLink = function(sId,mSettings) {};
/**
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be used to set the required business attributes.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets must be retrieved.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation targets.
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @param {function} oControlEvent.getParameters.setSemanticAttributes This callback function enables you to define a changed semantic attributes map. 
 *  Signatures:
 *  <code>setSemanticAttributes(oSemanticAttributesMap)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 *  </ul>
 * @param {function} oControlEvent.getParameters.setAppStateKey This callback function sets an application state key that is used over the cross-application navigation. 
 *  Signatures:
 *  <code>setAppStateKey(sAppStateKey)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{string} sAppStateKey - The application state key.</li>
 *  </ul>
 * @param {function} oControlEvent.getParameters.open This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 *  Signatures:
 *  <code>open()</code>
 *  If the beforePopoverOpens event has been registered, the 'open' function has to be called in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.beforePopoverOpens = function(oControlEvent) {  };

/**
 * This event is fired after a navigation link on the navigation popover has been clicked.
 * This event is only fired, if the user left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The UI text shown in the clicked link.
 * @param {string} oControlEvent.getParameters.href The navigation target of the clicked link.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object used to retrieve this target.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes used to retrieve this target.
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.innerNavigate = function(oControlEvent) {  };

/**
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation targets.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.navpopover.LinkData[]} oControlEvent.getParameters.actions Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.mainNavigation The main navigation, containing a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.ownNavigation The navigation object for the current application, containing a 'text' and 'href' property.
 *  This navigation option is by default not visible on the popover.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets have been retrieved.
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @param {function} oControlEvent.getParameters.show This callback function shows the actual navigation popover. 
 *  Signatures:
 *  <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  Parameters:
 *  <ul>
 *  	<li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get the ID from the given sourceObject.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href' property.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 *   <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 *  </ul>					      
 *  If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.navigationTargetsObtained = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforePopoverOpens' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br> itself.
 * 
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be used to set the required business attributes.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachBeforePopoverOpens = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'innerNavigate' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br> itself.
 * 
 * This event is fired after a navigation link on the navigation popover has been clicked.
 * This event is only fired, if the user left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachInnerNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'navigationTargetsObtained' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br> itself.
 * 
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation targets.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/> itself.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachNavigationTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Destroys the innerControl in the aggregation
 * named <code>innerControl</code>.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.destroyInnerControl = function() { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforePopoverOpens' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachBeforePopoverOpens = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'innerNavigate' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachInnerNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'navigationTargetsObtained' event of this <code>sap.ui.comp.navpopover.SmartLink</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachNavigationTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.SmartLink with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Link.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SmartLink.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event beforePopoverOpens to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'semanticObject' of type <code>string</code>The semantic object for which the navigation targets must be retrieved.</li>
 * <li>'semanticAttributes' of type <code>object</code>Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation targets.</li>
 * <li>'originalId' of type <code>string</code>The ID of the SmartLink.</li>
 * <li>'setSemanticAttributes' of type <code>function</code>This callback function enables you to define a changed semantic attributes map. 
 *  Signatures:
 *  <code>setSemanticAttributes(oSemanticAttributesMap)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 *  </ul></li>
 * <li>'setAppStateKey' of type <code>function</code>This callback function sets an application state key that is used over the cross-application navigation. 
 *  Signatures:
 *  <code>setAppStateKey(sAppStateKey)</code>
 *  Parameter:
 *  <ul>
 *  	<li>{string} sAppStateKey - The application state key.</li>
 *  </ul></li>
 * <li>'open' of type <code>function</code>This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 *  Signatures:
 *  <code>open()</code>
 *  If the beforePopoverOpens event has been registered, the 'open' function has to be called in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireBeforePopoverOpens = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Fire event innerNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code>The UI text shown in the clicked link.</li>
 * <li>'href' of type <code>string</code>The navigation target of the clicked link.</li>
 * <li>'semanticObject' of type <code>string</code>The semantic object used to retrieve this target.</li>
 * <li>'semanticAttributes' of type <code>object</code>Map containing the semantic attributes used to retrieve this target.</li>
 * <li>'originalId' of type <code>string</code>The ID of the SmartLink.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireInnerNavigate = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Fire event navigationTargetsObtained to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'actions' of type <code>sap.ui.comp.navpopover.LinkData[]</code>Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.</li>
 * <li>'mainNavigation' of type <code>sap.ui.comp.navpopover.LinkData</code>The main navigation, containing a 'text' and 'href' property.</li>
 * <li>'ownNavigation' of type <code>sap.ui.comp.navpopover.LinkData</code>The navigation object for the current application, containing a 'text' and 'href' property.
 *  This navigation option is by default not visible on the popover.</li>
 * <li>'semanticObject' of type <code>string</code>The semantic object for which the navigation targets have been retrieved.</li>
 * <li>'originalId' of type <code>string</code>The ID of the SmartLink.</li>
 * <li>'show' of type <code>function</code>This callback function shows the actual navigation popover. 
 *  Signatures:
 *  <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  Parameters:
 *  <ul>
 *  	<li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get the ID from the given sourceObject.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href' property.</li>
 *  	<li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 *   <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 *  </ul>					      
 *  If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireNavigationTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Getter for property <code>createControlCallback</code>.
 * Function that enables the SmartLink to create an alternative control, which is displayed if no navigation targets are available. The function has no parameters and has to return an instance of sap.ui.core.Control.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>createControlCallback</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getCreateControlCallback = function() { return new Object(); };

/**
 * Getter for property <code>fieldName</code>.
 * The metadata fieldname for this SmartLink.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>fieldName</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getFieldName = function() { return ""; };

/**
 * Getter for property <code>ignoreLinkRendering</code>.
 * If this property is set to 'true', the link itself will not be rendered, instead the control provided via the innerControl aggregation or the createControlCallback property will be rendered.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>ignoreLinkRendering</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getIgnoreLinkRendering = function() { return false; };

/**
 * Getter for aggregation <code>innerControl</code>.<br/>
 * Inner control that is created if the SmartLink is disabled (eg. no navigation targets are available)
 * @return {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getInnerControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets the inner control's value
 * @returns {object} the value
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getInnerControlValue = function() { return new Object(); };

/**
 * Getter for property <code>mapFieldToSemanticObject</code>.
 * If set to 'false', the SmartLink will not replace its field name with the according semantic object name during the calculation of the semantic attributes. This enables the usage of several SmartLinks on the same semantic object.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>mapFieldToSemanticObject</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getMapFieldToSemanticObject = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.SmartLink.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SmartLink.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the semantic object calculated at the last Link press event
 * @returns {object} Map containing the copy of the available binding context.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticAttributes = function() { return new Object(); };

/**
 * Getter for property <code>semanticObject</code>.
 * The semantic object which is used to fill the navigation popover.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>semanticObject</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObject = function() { return ""; };

/**
 * Getter for property <code>semanticObjectController</code>.
 * The semantic object controller controls events for several smartlinks. If the controller is not manually set, the SmartLink tries to find a SemanticObjectController in the parent hierarchy.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>semanticObjectController</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectController = function() { return null; };

/**
 * Getter for property <code>semanticObjectLabel</code>.
 * The semantic objects's display name.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>semanticObjectLabel</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectLabel = function() { return ""; };

/**
 * Gets the current value assigned to the field with the SmartLink's semantic object name.
 * @returns {object} The semantic object's value.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectValue = function() { return new Object(); };

/**
 * Setter for property <code>createControlCallback</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oCreateControlCallback new value for property <code>createControlCallback</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setCreateControlCallback = function(oCreateControlCallback) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>fieldName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sFieldName new value for property <code>fieldName</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setFieldName = function(sFieldName) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>ignoreLinkRendering</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIgnoreLinkRendering new value for property <code>ignoreLinkRendering</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setIgnoreLinkRendering = function(bIgnoreLinkRendering) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for the aggregated <code>innerControl</code>.
 * @param {sap.ui.core.Control} oInnerControl the innerControl to set
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setInnerControl = function(oInnerControl) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>mapFieldToSemanticObject</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMapFieldToSemanticObject new value for property <code>mapFieldToSemanticObject</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setMapFieldToSemanticObject = function(bMapFieldToSemanticObject) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>semanticObject</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSemanticObject new value for property <code>semanticObject</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObject = function(sSemanticObject) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>semanticObjectController</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oSemanticObjectController new value for property <code>semanticObjectController</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Setter for property <code>semanticObjectLabel</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSemanticObjectLabel new value for property <code>semanticObjectLabel</code>
 * @return {sap.ui.comp.navpopover.SmartLink} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObjectLabel = function(sSemanticObjectLabel) { return new sap.ui.comp.navpopover.SmartLink(); };


// ---- sap.ui.comp.odata.FieldSelector --------------------------------------------------------------------------

/**
 * Constructor for a new odata/FieldSelector.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowSearchBar showSearchBar} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:fieldSelectionChanged fieldSelectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Reuse control which displays the properties of OData entity sets.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.odata.FieldSelector = function(sId,mSettings) {};
/**
 * User selected a different field.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.fieldSelectionChanged = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'fieldSelectionChanged' event of this <code>sap.ui.comp.odata.FieldSelector</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.odata.FieldSelector</code>.<br> itself.
 * 
 * User selected a different field.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.odata.FieldSelector</code>.<br/> itself.
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.attachFieldSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Destroys the inner references
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.destroy = function() {  };

/**
 * Destroys the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.destroyContent = function() { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'fieldSelectionChanged' event of this <code>sap.ui.comp.odata.FieldSelector</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.detachFieldSelectionChanged = function(fnFunction,oListener) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Cleans up the control
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.odata.FieldSelector with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.odata.FieldSelector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event fieldSelectionChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.fireFieldSelectionChanged = function(mArguments) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content of the control itself
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.odata.FieldSelector.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.odata.FieldSelector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a map with the name of the entity set and the key of the selected field.
 * @public
 * @returns {object} map of the name of the entity set having the selected field as kex
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getSelectedField = function() { return new Object(); };

/**
 * Getter for property <code>showSearchBar</code>.
 * Indicates to show a search bar for property names inside a selected entity set.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSearchBar</code>
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getShowSearchBar = function() { return false; };

/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent the content to set
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setContent = function(oContent) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Set the model for the entity and fields of an odata service
 * @param {sap.ui.model.odata.ODataModel} oModel - odata model
 * @param {string} sEntityTypes - entity type name(s) separated by comma character or array
 * @param {boolean} bShowExtFieldButton - indicates if the create new field button will be displayed or not
 * @param {Array} aIgnoredFields - List of fields which should be ignored.
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setModel = function(oModel,sEntityTypes,bShowExtFieldButton,aIgnoredFields) {  };

/**
 * Setter for property <code>showSearchBar</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearchBar new value for property <code>showSearchBar</code>
 * @return {sap.ui.comp.odata.FieldSelector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setShowSearchBar = function(bShowSearchBar) { return new sap.ui.comp.odata.FieldSelector(); };


// ---- sap.ui.comp.personalization.BaseController --------------------------------------------------------------------------

/**
 * The BaseController is a base class for personalization Controller like e.g. FilterController, SortController etc. *
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getModel model} : sap.ui.model.json.JSONModel</li>
 * <li>{@link #getPersistentDataRestore persistentDataRestore} : object</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:beforePotentialTableChange beforePotentialTableChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterPotentialTableChange afterPotentialTableChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class An abstract class for personalization Controllers.
 * @extends sap.ui.base.ManagedObject
 * @version 1.25.0-SNAPSHOT *
 * @constructor
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.personalization.BaseController = function(sId,mSettings) {};
/**
 * Event is raised after potential change on table has be applied
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.afterPotentialTableChange = function(oControlEvent) {  };

/**
 * Event is raised before potential change on table will be applied
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.beforePotentialTableChange = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterPotentialTableChange' event of this <code>sap.ui.comp.personalization.BaseController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.personalization.BaseController</code>.<br> itself.
 * 
 * Event is raised after potential change on table has be applied
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.personalization.BaseController</code>.<br/> itself.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.attachAfterPotentialTableChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforePotentialTableChange' event of this <code>sap.ui.comp.personalization.BaseController</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.personalization.BaseController</code>.<br> itself.
 * 
 * Event is raised before potential change on table will be applied
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.personalization.BaseController</code>.<br/> itself.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.attachBeforePotentialTableChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Creates persistent object
 * @param {array} aItems is a list of items that will be placed in the new created persistent structure
 * @returns {object} JSON object
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.createPersistentStructure = function(aItems) { return new Object(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterPotentialTableChange' event of this <code>sap.ui.comp.personalization.BaseController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.detachAfterPotentialTableChange = function(fnFunction,oListener) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforePotentialTableChange' event of this <code>sap.ui.comp.personalization.BaseController</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.detachBeforePotentialTableChange = function(fnFunction,oListener) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Creates a new subclass of class sap.ui.comp.personalization.BaseController with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.personalization.BaseController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event afterPotentialTableChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.fireAfterPotentialTableChange = function(mArguments) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Fire event beforePotentialTableChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.fireBeforePotentialTableChange = function(mArguments) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Returns a metadata object for class sap.ui.comp.personalization.BaseController.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.personalization.BaseController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>model</code>.
 * Controller model. Each controller has its own name space as part of the entire model.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.model.json.JSONModel} the value of property <code>model</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getModel = function() { return new sap.ui.model.json.JSONModel(); };

/**
 * Getter of persistent data object
 * @returns {object} JSON object
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getPersistentData = function() { return new Object(); };

/**
 * Getter of persistent items data object
 * @returns {object} JSON object
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getPersistentDataItems = function() { return new Object(); };

/**
 * Getter for association <code>table</code>
 * @returns {object} that represents sap.m.Table || sap.ui.table.Table
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getTable = function() { return new Object(); };

/**
 * Getter of transient data object
 * @returns {object} JSON object
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getTransientData = function() { return new Object(); };

/**
 * Getter for property <code>type</code>.
 * Controller type for generic use. Due to extensibility reason the type of "type" property should be "string". So it is feasible to
 * add a custom controller without expanding the type.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.getType = function() { return ""; };

/**
 * Initialization of model
 * @param {object} oModel of type sap.ui.model.json.JSONModel that will be used for initialization
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.initializeModel = function(oModel) {  };

/**
 * Setter for property <code>model</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.model.json.JSONModel} sModel new value for property <code>model</code>
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setModel = function(sModel) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Load data - used for lazy loading
 * @protected
 * @returns {function} to set the model data
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setModelFunction = function() { return function() {}; };

/**
 * Setter of persistent data object *
 * @param {object} oDataNew contains the new data that will be set into model persistentData
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setPersistentData = function(oDataNew) {  };

/**
 * Setter of persistent items data object
 * @param {array} aItems is an array that contains the new items that will be set into model persistentData
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setPersistentDataItems = function(aItems) {  };

/**
 * Setter for the associated <code>table</code>.
 * @param {sap.ui.core.Control} oTable Id of an element which becomes the new target of this table association. Alternatively, an element instance may be given.
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setTable = function(oTable) { return new sap.ui.comp.personalization.BaseController(); };

/**
 * Setter of transient data object
 * @param {object} oDataNew contains the new data that will be set into model transientData
 * @protected
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setTransientData = function(oDataNew) {  };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sType new value for property <code>type</code>
 * @return {sap.ui.comp.personalization.BaseController} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.personalization.BaseController.prototype.setType = function(sType) { return new sap.ui.comp.personalization.BaseController(); };


// ---- sap.ui.comp.personalization.ChangeType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.personalization.ChangeType.toString = function() { return ""; };

// ---- sap.ui.comp.personalization.ResetType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.personalization.ResetType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.Configuration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/Configuration.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getControlType controlType} : sap.ui.comp.smartfield.ControlType</li>
 * <li>{@link #getDisplayBehaviour displayBehaviour} : sap.ui.comp.smartfield.DisplayBehaviour</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The configuration allows to further define the behaviour of a SmartField.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.Configuration = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfield.Configuration with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.Configuration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>controlType</code>.
 * By default the SmartField chooses the controls it hosts on either OData meta data or JSON meta data. This property allows to overwrite the default behaviour.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.comp.smartfield.ControlType} the value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.getControlType = function() { return new sap.ui.comp.smartfield.ControlType(); };

/**
 * Getter for property <code>displayBehaviour</code>.
 * The property specifies how availble values are presented.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.comp.smartfield.DisplayBehaviour} the value of property <code>displayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.getDisplayBehaviour = function() { return new sap.ui.comp.smartfield.DisplayBehaviour(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.Configuration.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.Configuration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>controlType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.comp.smartfield.ControlType} sControlType new value for property <code>controlType</code>
 * @return {sap.ui.comp.smartfield.Configuration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfield.Configuration(); };

/**
 * Setter for property <code>displayBehaviour</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.comp.smartfield.DisplayBehaviour} sDisplayBehaviour new value for property <code>displayBehaviour</code>
 * @return {sap.ui.comp.smartfield.Configuration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.setDisplayBehaviour = function(sDisplayBehaviour) { return new sap.ui.comp.smartfield.Configuration(); };


// ---- sap.ui.comp.smartfield.ControlType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.ControlType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.DisplayBehaviour --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.DisplayBehaviour.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.JSONType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.JSONType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.SmartField --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/SmartField.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getShowValueStateMessage showValueStateMessage} : boolean (default: true)</li>
 * <li>{@link #getJsontype jsontype} : sap.ui.comp.smartfield.JSONType</li>
 * <li>{@link #getMandatory mandatory} : boolean (default: false)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getShowSuggestion showSuggestion} : boolean (default: true)</li>
 * <li>{@link #getShowValueHelp showValueHelp} : boolean (default: true)</li>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getTextLabel textLabel} : string</li>
 * <li>{@link #getTooltipLabel tooltipLabel} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getConfiguration configuration} : sap.ui.comp.smartfield.Configuration</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:entitySetFound entitySetFound} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:visibleChanged visibleChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartField Control is a wrapper for other controls. It interprets OData meta data to determine the control that has to be
 *        instantiated. The OData entity is deduced from the control's binding context. The OData entity's property that is changed or
 *        displayed with the control is deduced from the control's value property. The control's value property can also be bound to a
 *        property of a JSON model. In this case the SmartField uses its jsontype property to determine the control to be created.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.SmartField = function(sId,mSettings) {};
/**
 * Event is fired when the text in the field has changed and the focus leaves the TextField or the Enter key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.change = function(oControlEvent) {  };

/**
 * The OData entity set is either deduced from the control's binding context or from control's entity set property, if a
 * value for it is specified. In both cases this event is raised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.entitySetFound = function(oControlEvent) {  };

/**
 * Event fired when the smart field is initialized and the metadata obtained
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.initialise = function(oControlEvent) {  };

/**
 * The event is fired, if the visibility of the control has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.visibleChanged = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfield.SmartField</code>.<br> itself.
 * 
 * Event is fired when the text in the field has changed and the focus leaves the TextField or the Enter key is pressed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code>.<br/> itself.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'entitySetFound' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfield.SmartField</code>.<br> itself.
 * 
 * The OData entity set is either deduced from the control's binding context or from control's entity set property, if a
 * value for it is specified. In both cases this event is raised.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code>.<br/> itself.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachEntitySetFound = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfield.SmartField</code>.<br> itself.
 * 
 * Event fired when the smart field is initialized and the metadata obtained
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code>.<br/> itself.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'visibleChanged' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfield.SmartField</code>.<br> itself.
 * 
 * The event is fired, if the visibility of the control has changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code>.<br/> itself.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachVisibleChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Returns <code>true</code>, if a client error is detected, <code>false</code> otherwise. Additionally the error message is shown, if
 * this is not the case already.
 * @returns {boolean} <code>true</code>, if a client error has been detected, <code>false</code> otherwise.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.checkClientError = function() { return false; };

/**
 * Destroys the configuration in the aggregation
 * named <code>configuration</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.destroyConfiguration = function() { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'entitySetFound' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachEntitySetFound = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'visibleChanged' event of this <code>sap.ui.comp.smartfield.SmartField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachVisibleChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Cleans up the resources associated with this element and all its children.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartfield.SmartField with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fire event entitySetFound to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireEntitySetFound = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fire event visibleChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireVisibleChanged = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Getter for aggregation <code>configuration</code>.<br/>
 * Optional configuration for SmartField.
 * @return {sap.ui.comp.smartfield.Configuration}
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getConfiguration = function() { return new sap.ui.comp.smartfield.Configuration(); };

/**
 * Returns the property of the oData.
 * @returns {object} the oData property.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getDataProperty = function() { return new Object(); };

/**
 * Returns the EDM data type of either the OData property to which the value property of the control is bound or the data type of the attribute in the
 * JSON model used. If no model is available null is returned.
 * @returns {string} the data type to which the value property is bound.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getDataType = function() { return ""; };

/**
 * Getter for property <code>editable</code>.
 * Sets the control into an editable mode or a display mode.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Enabled Property
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>entitySet</code>.
 * The name of entity set for which the control manages values. This is an optional property.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEntitySet = function() { return ""; };

/**
 * Resolves the controls hosted currently by this <code>Smart Field</code>.
 * @returns {array} the controls hosted currently by this <code>Smart Field</code>.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getInnerControls = function() { return null; };

/**
 * Getter for property <code>jsontype</code>.
 * Data types to be used, if the SmartField is working with a JSON model. ; so if the value property of the control is
 * bound to a property of an OData entity set, this property is not considered.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.comp.smartfield.JSONType} the value of property <code>jsontype</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getJsontype = function() { return new sap.ui.comp.smartfield.JSONType(); };

/**
 * Getter for property <code>mandatory</code>.
 * Mandatory property.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getMandatory = function() { return false; };

/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getMaxLength = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.SmartField.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartField.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * To be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>placeholder</code>.
 * Text shown when no value available.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getPlaceholder = function() { return ""; };

/**
 * Getter for property <code>showLabel</code>.
 * If set to false the label is not displayed.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowLabel = function() { return false; };

/**
 * Getter for property <code>showSuggestion</code>.
 * If this is set to true, the suggestion feature for a hosted control is enabled, if the hosted control supports it.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSuggestion</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowSuggestion = function() { return false; };

/**
 * Getter for property <code>showValueHelp</code>.
 * If set to true, a value help indicator will be displayed inside the hosted control, if the hosted control supports this.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValueHelp</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowValueHelp = function() { return false; };

/**
 * Getter for property <code>showValueStateMessage</code>.
 * The text which is shown in the value state message popup.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValueStateMessage</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowValueStateMessage = function() { return false; };

/**
 * Getter for property <code>textAlign</code>.
 * Horizontal alignment of the text.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>textLabel</code>.
 * This property allows to handle the text of an associated smart label.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>textLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTextLabel = function() { return ""; };

/**
 * Getter for property <code>tooltipLabel</code>.
 * This property allows to handle the tool tip of the associated smart label.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>tooltipLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTooltipLabel = function() { return ""; };

/**
 * If the OData property the control's value property is bound to semantically represents a unit of measure, the value of the current unit of measure
 * is returned; otherwise <code>null</code> is returned.
 * @returns {any} the current unit of measure is returned, which can be <code>null</code.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUnitOfMeasure = function() { return null; };

/**
 * Returns the value for the <code>value</code> property .
 * @return {any} the value of the property
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValue = function() { return null; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>valueStateText</code>.
 * The text which is shown in the value state message popup.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>valueStateText</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValueStateText = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * The width can be set to an absolute value.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter method to mark the smart field as having a client error.
 * @param {boolean} bError if set to <code>true</code> the field is marked as having an error.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setComplexClientErrorFirstOperand = function(bError) {  };

/**
 * Setter method to mark the smart field as having a client error.
 * @param {boolean} bError if set to <code>true</code> the field is marked as having an error.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setComplexClientErrorSecondOperand = function(bError) {  };

/**
 * Setter for the aggregated <code>configuration</code>.
 * @param {sap.ui.comp.smartfield.Configuration} oConfiguration the configuration to set
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setConfiguration = function(oConfiguration) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>editable</code>. Default value is <code>false</code>.
 * @param {boolean} bValue new value for property <code>editable</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEditable = function(bValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>enabled</code>. Default value is <code>true</code>.
 * @param {boolean} bValue new value for property <code>enabled</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEnabled = function(bValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>entitySet</code>. Default value is <code>undefined</code>.
 * @param {string} sValue new value for property <code>entitySet</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEntitySet = function(sValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>jsontype</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.comp.smartfield.JSONType} sJsontype new value for property <code>jsontype</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setJsontype = function(sJsontype) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>mandatory</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMandatory new value for property <code>mandatory</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setMandatory = function(bMandatory) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>maxLength</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxLength new value for property <code>maxLength</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setMaxLength = function(iMaxLength) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setName = function(sName) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>placeholder</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sPlaceholder new value for property <code>placeholder</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>showLabel</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLabel new value for property <code>showLabel</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowLabel = function(bShowLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>showSuggestion</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSuggestion new value for property <code>showSuggestion</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowSuggestion = function(bShowSuggestion) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>showValueHelp</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValueHelp new value for property <code>showValueHelp</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowValueHelp = function(bShowValueHelp) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>showValueStateMessage</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValueStateMessage new value for property <code>showValueStateMessage</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowValueStateMessage = function(bShowValueStateMessage) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter method to mark the smart field as having a client error.
 * @param {boolean} bError if set to <code>true</code> the field is marked as having an error.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setSimpleClientError = function(bError) {  };

/**
 * Setter for property <code>textAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign new value for property <code>textAlign</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>textLabel</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTextLabel new value for property <code>textLabel</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTextLabel = function(sTextLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>tooltipLabel</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTooltipLabel new value for property <code>tooltipLabel</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTooltipLabel = function(sTooltipLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * If the OData property the control's value property is bound to semantically represents a unit of measure the value of the current unit of measure
 * can be changed.
 * @param {string} sUnit the new unit of measure to be set.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUnitOfMeasure = function(sUnit) {  };

/**
 * Setter for property <code>value</code>. Default value is <code>true</code>.
 * @param {object} oValue new value for property <code>value</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValue = function(oValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValueState = function(sValueState) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>valueStateText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sValueStateText new value for property <code>valueStateText</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValueStateText = function(sValueStateText) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>visible</code>. Default value is <code>true</code>.
 * @param {boolean} bValue new value for property <code>editable</code>.
 * @param {boolean} bSuppressInvalidate if <code>true</code>, the managed object is not marked as changed
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setVisible = function(bValue,bSuppressInvalidate) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setWidth = function(sWidth) { return new sap.ui.comp.smartfield.SmartField(); };


// ---- sap.ui.comp.smartfield.SmartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/SmartLabel.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * is a wrapper for the sap.m.Label and used with the SmartField-Control
 * @extends sap.m.Label
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.SmartLabel = function(sId,mSettings) {};
/**
 * Cleans up the resources associated with this element and all its children. After an element has been destroyed, it can no longer be used in the UI!
 * Applications should call this method, if they don't need the element any longer.
 * @param {boolean} bSuppressInvalidate if <code>true</code>, the UI element is not marked for redraw.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartLabel.prototype.destroy = function(bSuppressInvalidate) {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartfield.SmartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Label.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * apply odata meta data for the label
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartLabel.prototype.getLabelInfo = function() {  };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.SmartLabel.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * assign the label to a control.
 * @param {sap.ui.comp.SmartField} oSmartField is the smart control
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartLabel.prototype.setLabelFor = function(oSmartField) {  };


// ---- sap.ui.comp.smartfield.type.AbapBool --------------------------------------------------------------------------

/**
 * Constructor for an ABAP Boolean type.
 * @public
 * @class 
 * @classdesc
 * ABAP Boolean data type.
 * @version 1.28.9
 * @since 1.28.0
 * @extends sap.ui.model.type.SimpleType
 * 
 */
sap.ui.comp.smartfield.type.AbapBool = function() {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfield.type.AbapBool with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.model.type.SimpleType.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.type.AbapBool.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Formats the given boolean value to the given target type.
 * @param {boolean} bValue the value to be formatted
 * @param {string} sTargetType the target type; may be "any" or "boolean".
 * @returns {boolean} the formatted output value in the target type; <code>undefined</code> or <code>null</code> are formatted to
 *          <code>null</code>
 * @throws {sap.ui.model.FormatException} if <code>sTargetType</code> is unsupported.
 * @public
 * 
 */
sap.ui.comp.smartfield.type.AbapBool.prototype.formatValue = function(bValue,sTargetType) { return new sap.ui.model.FormatException(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.type.AbapBool.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.type.AbapBool.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Parses the given value from the given type to a boolean.
 * @param {boolean} oValue the value to be parsed.
 * @param {string} sSourceType the source type, may be "boolean".
 * @returns {boolean} the parsed value.
 * @throws {sap.ui.model.ParseException} if <code>sSourceType</code> is unsupported or if the given string is neither "X" nor "".
 * @public
 * 
 */
sap.ui.comp.smartfield.type.AbapBool.prototype.parseValue = function(oValue,sSourceType) { return new sap.ui.model.ParseException(); };

/**
 * Validates whether the given value in model representation is valid and meets the given constraints.
 * @param {boolean} sValue the value to be validated.
 * @throws {sap.ui.model.ValidateException} if the value is not valid
 * @public
 * 
 */
sap.ui.comp.smartfield.type.AbapBool.prototype.validateValue = function(sValue) { return new sap.ui.model.ValidateException(); };


// ---- sap.ui.comp.smartfilterbar.ControlConfiguration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/ControlConfiguration.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHasValueHelpDialog hasValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getControlType controlType} : string (default: auto)</li>
 * <li>{@link #getFilterType filterType} : string (default: auto)</li>
 * <li>{@link #getIndex index} : any</li>
 * <li>{@link #getHasTypeAhead hasTypeAhead} : boolean (default: true)</li>
 * <li>{@link #getMandatory mandatory} : string (default: auto)</li>
 * <li>{@link #getWidth width} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li>
 * <li>{@link #getPreventInitialDataFetchInValueHelpDialog preventInitialDataFetchInValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getDisplayBehaviour displayBehaviour} : string (default: auto)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDefaultFilterValues defaultFilterValues} : sap.ui.comp.smartfilterbar.SelectOption[]</li>
 * <li>{@link #getCustomControl customControl} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A ControlConfiguration can be used to add additional configuration for filter fields in the SmartFilterBar, in order to overwrite the default settings from the OData metadata. For instance it is possible to change the label, index or control type of a filter field.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration = function(sId,mSettings) {};
/**
 * Fired when the value of a property, for example isVisible, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.change = function(oControlEvent) {  };

/**
 * Adds some defaultFilterValue into the aggregation named <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.addDefaultFilterValue = function(oDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br> itself.
 * 
 * Fired when the value of a property, for example isVisible, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/> itself.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Destroys the customControl in the aggregation
 * named <code>customControl</code>.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyCustomControl = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Destroys all the defaultFilterValues in the aggregation
 * named <code>defaultFilterValues</code>.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyDefaultFilterValues = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.ControlConfiguration with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Getter for property <code>controlType</code>.
 * The SmartFilterBar calculates which kind of control will be used for a filter fields based on multiple OData Attributes and annotations. Using this property it is possible to overwrite the OData metadat. Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.CONTROLTYPE
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getControlType = function() { return ""; };

/**
 * Getter for aggregation <code>customControl</code>.<br/>
 * If a custom control is specified, the Smart Filter Bar will not create a control but use the custom control. Additional services like TypeAhead have to implemented manually.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getCustomControl = function() { return new sap.ui.core.Control(); };

/**
 * Getter for aggregation <code>defaultFilterValues</code>.<br/>
 * Default value for a filter field.
 * @return {sap.ui.comp.smartfilterbar.SelectOption[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDefaultFilterValues = function() { return new Array(); };

/**
 * Getter for property <code>displayBehaviour</code>.
 * The displayBehaviour specifies how the content should be displayed on certain controls.
 * Ex: DescriptionOnly for Combobox (DropDown text) , Description and ID for MultiInput (token text)
 * 
 * Possible values can be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>displayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDisplayBehaviour = function() { return ""; };

/**
 * Getter for property <code>filterType</code>.
 * The filter type specifies whether the filter fields is e.g. type single value, multi-value,or interval.
 * The filter type is being calculated by the martFilterBar based on the OData metadata. Using this property the filter type can be configured manually.
 * Possible value scan be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.FILTERTYPE
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>filterType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getFilterType = function() { return ""; };

/**
 * Getter for property <code>groupId</code>.
 * The groupId can be used to move a field from one group to another. The groupId corresponds to the EntityName from the OData metadata. It is also possible to move a field from the advanced area to the basic area by specifying the groupId _BASIC.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>groupId</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getGroupId = function() { return ""; };

/**
 * Getter for property <code>hasTypeAhead</code>.
 * Property can be used to enable the TypeAhead service. TypeAhead does not work with all controls, e.g it does not work for DrodDownListbox
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>hasTypeAhead</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasTypeAhead = function() { return false; };

/**
 * Getter for property <code>hasValueHelpDialog</code>.
 * Specifies whether a value help dialog is available or not.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>hasValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasValueHelpDialog = function() { return false; };

/**
 * Getter for property <code>index</code>.
 * The zero based index can be used to specify the order of fields.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getIndex = function() { return null; };

/**
 * Getter for property <code>key</code>.
 * The key property shall correspond to the field name from the OData service $metadata document.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getKey = function() { return ""; };

/**
 * Getter for property <code>label</code>.
 * Using this property it is possible to overwrite the label of a filter field in the SmartFilterBar.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getLabel = function() { return ""; };

/**
 * Getter for property <code>mandatory</code>.
 * Property can be used to overwrite the mandatory state of a filter field.
 * Possible values: sap.ui.comp.smartfilterbar.ControlConfiguration.MANDATORY
 * Property can only be set during initialisation. Changes at runtime will be ignored.
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getMandatory = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.ControlConfiguration.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * In case there are value help annotations for this filter field, it is possible to specify whether the table in the value help dialog for this field will be filled initially. The default value is flase, which menas the table will be filled as the data fetch is not being prevented.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getPreventInitialDataFetchInValueHelpDialog = function() { return false; };

/**
 * Getter for property <code>visible</code>.
 * Using this flag it is possible to hide fields from the OData metadata.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisible = function() { return false; };

/**
 * Getter for property <code>visibleInAdvancedArea</code>.
 * If set to true this field will be added to the advanced area (aka. Dynamic Selection) by default.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>visibleInAdvancedArea</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisibleInAdvancedArea = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * The width of the filter field in a CSS compatible format.
 * The width can be set only once during initialisation. Changes at runtime will not be reflected.
 * The width will not be applied to custom controls.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getWidth = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.SelectOption</code> in the aggregation named <code>defaultFilterValues</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *           oDefaultFilterValue the defaultFilterValue whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.indexOfDefaultFilterValue = function(oDefaultFilterValue) { return 0; };

/**
 * Inserts a defaultFilterValue into the aggregation named <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the defaultFilterValue should be inserted at; for
 *              a negative value of <code>iIndex</code>, the defaultFilterValue is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the defaultFilterValue is inserted at
 *              the last position
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.insertDefaultFilterValue = function(oDefaultFilterValue,iIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Removes all the controls in the aggregation named <code>defaultFilterValues</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.SelectOption[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeAllDefaultFilterValues = function() { return new Array(); };

/**
 * Removes an defaultFilterValue from the aggregation named <code>defaultFilterValues</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.SelectOption} vDefaultFilterValue the defaultFilterValueto remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.SelectOption} the removed defaultFilterValue or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeDefaultFilterValue = function(vDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Setter for property <code>controlType</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sControlType new value for property <code>controlType</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for the aggregated <code>customControl</code>.
 * @param {sap.ui.core.Control} oCustomControl the customControl to set
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setCustomControl = function(oCustomControl) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>displayBehaviour</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sDisplayBehaviour new value for property <code>displayBehaviour</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setDisplayBehaviour = function(sDisplayBehaviour) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>filterType</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sFilterType new value for property <code>filterType</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setFilterType = function(sFilterType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>groupId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sGroupId new value for property <code>groupId</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setGroupId = function(sGroupId) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>hasTypeAhead</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHasTypeAhead new value for property <code>hasTypeAhead</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasTypeAhead = function(bHasTypeAhead) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>hasValueHelpDialog</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHasValueHelpDialog new value for property <code>hasValueHelpDialog</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasValueHelpDialog = function(bHasValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>index</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oIndex new value for property <code>index</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabel new value for property <code>label</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>mandatory</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sMandatory new value for property <code>mandatory</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setMandatory = function(sMandatory) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPreventInitialDataFetchInValueHelpDialog new value for property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setPreventInitialDataFetchInValueHelpDialog = function(bPreventInitialDataFetchInValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisible = function(bVisible) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>visibleInAdvancedArea</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bVisibleInAdvancedArea new value for property <code>visibleInAdvancedArea</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisibleInAdvancedArea = function(bVisibleInAdvancedArea) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sWidth new value for property <code>width</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setWidth = function(sWidth) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.GroupConfiguration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/GroupConfiguration.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getIndex index} : any</li>
 * <li>{@link #getLabel label} : any</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A GroupConfiguration can be used to add additional configurations for groups in the SmartFilterBar. A group in the SmartFilterBar is a group of filter fields in the advanced search.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration = function(sId,mSettings) {};
/**
 * Fired when the value of a property, for example label, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.change = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br> itself.
 * 
 * Fired when the value of a property, for example label, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/> itself.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.GroupConfiguration with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Getter for property <code>index</code>.
 * Zero based integer index.
 * The index can be used to specify the order of groups. If no index is specified, the order like in the OData metadata will be used.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getIndex = function() { return null; };

/**
 * Getter for property <code>key</code>.
 * The key property shall correspond to the name EntityTypeName from the OData service $metadata document.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getKey = function() { return ""; };

/**
 * Getter for property <code>label</code>.
 * Using this property it is possible to overwrite the label of a group in the advanced area of the SmartFilterBar.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getLabel = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.GroupConfiguration.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>index</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oIndex new value for property <code>index</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oLabel new value for property <code>label</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setLabel = function(oLabel) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.SelectOption --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/SelectOption.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSign sign} : string (default: I)</li>
 * <li>{@link #getOperator operator} : string (default: EQ)</li>
 * <li>{@link #getLow low} : string</li>
 * <li>{@link #getHigh high} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A Select Option can be used to specify default filter values for a control configuration of the SmartFilterBar.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SelectOption with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>high</code>.
 * The high value for a select option. The high value is only required for a few operators, e.g. BT (between).
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>high</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getHigh = function() { return ""; };

/**
 * Getter for property <code>low</code>.
 * The low value for a select option.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>low</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getLow = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.SelectOption.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>operator</code>.
 * The operator for a select option. The default value is EQ "for equals". Possible values can be found here: sap.ui.comp.smartfilterbar.SelectOption.OPERATOR.
 * 
 * Default value is <code>EQ</code>
 * @return {string} the value of property <code>operator</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getOperator = function() { return ""; };

/**
 * Getter for property <code>sign</code>.
 * The sign for a Select Option. Possible values are I for include or E for exclude. Constants can be found here: sap.ui.comp.smartfilterbar.SelectOption.SIGN
 * 
 * Default value is <code>I</code>
 * @return {string} the value of property <code>sign</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getSign = function() { return ""; };

/**
 * Setter for property <code>high</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sHigh new value for property <code>high</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setHigh = function(sHigh) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Setter for property <code>low</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLow new value for property <code>low</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setLow = function(sLow) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Setter for property <code>operator</code>.
 * 
 * Default value is <code>EQ</code>.
 * @param {string} sOperator new value for property <code>operator</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setOperator = function(sOperator) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Setter for property <code>sign</code>.
 * 
 * Default value is <code>I</code>.
 * @param {string} sSign new value for property <code>sign</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setSign = function(sSign) { return new sap.ui.comp.smartfilterbar.SelectOption(); };


// ---- sap.ui.comp.smartfilterbar.SmartFilterBar --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/SmartFilterBar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEntityType entityType} : string</li>
 * <li>{@link #getResourceUri resourceUri} : string</li>
 * <li>{@link #getBasicSearchFieldName basicSearchFieldName} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControlConfiguration controlConfiguration} : sap.ui.comp.smartfilterbar.ControlConfiguration[]</li>
 * <li>{@link #getGroupConfiguration groupConfiguration} : sap.ui.comp.smartfilterbar.GroupConfiguration[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterBar#constructor sap.ui.comp.filterbar.FilterBar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartFilterBar uses the OData metadata of an entity type in order to create a FilterBar. It is automatically determined which fields
 *        will be used for the filter bar, if the fields support TypeAhead etc. Using control configurations and group configurations it is
 *        possible to configure the filter bar and adapt it according to your needs.
 * @extends sap.ui.comp.filterbar.FilterBar
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar = function(sId,mSettings) {};
/**
 * Adds some controlConfiguration into the aggregation named <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addControlConfiguration = function(oControlConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Search for the filter field having the specified OData key and adds this filter field to the advanced area. If there is no corresponding field
 * in the OData metadata, this method has no effect.
 * @param {string} sKey - the key like specified in the OData metadata
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addFieldToAdvancedArea = function(sKey) {  };

/**
 * Adds some groupConfiguration into the aggregation named <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addGroupConfiguration = function(oGroupConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Applies the current variant as opposed to fetchVariant. The variant is retrieved via the flex layer.
 * @param {object} oOVariant The variant that must be applied. oVariant must contain a valid JSON object.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.applyVariant = function(oOVariant) { return null; };

/**
 * Destroys the control
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroy = function() {  };

/**
 * Destroys all the controlConfiguration in the aggregation
 * named <code>controlConfiguration</code>.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyControlConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Destroys all the groupConfiguration in the aggregation
 * named <code>groupConfiguration</code>.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyGroupConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SmartFilterBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.filterbar.FilterBar.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Retrieves the currently visible filters and the values for storing them as variants. The result will be passed on as a JSON object to the
 * callee smart variant control.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.fetchVariant = function() { return new Object(); };

/**
 * returns an JS Object containing all information from the additional configuration (controlConfiguration, groupConfiguration)
 * @returns {object}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getAdditionalConfiguration = function() { return new Object(); };

/**
 * Returns an instance of the control for the basic search.
 * @returns {object} basic search control
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchControl = function() { return new Object(); };

/**
 * Getter for property <code>basicSearchFieldName</code>.
 * Name of the field used for the basic search. The OData value list annotation should contain sap:searchable="true" to enable basic
 * search.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>basicSearchFieldName</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchFieldName = function() { return ""; };

/**
 * Returns the control (if any) with the specified key. (Property name in OData entity)
 * @param {string} sKey - the key as present in the OData property name/control configuration. Use just the property name as the key when getting
 *        a control from the basic area. Ex: "CompanyCode" & Use "EntityName/GroupName.FieldName" format to get controls from groups.
 *        Ex:"Account.CompanyCode"
 * @returns {object|sap.ui.Control} the control in the filter bar, if any
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlByKey = function(sKey) { return new Object(); };

/**
 * Getter for aggregation <code>controlConfiguration</code>.<br/>
 * Using control configurations you can add additional configuration to filter fields, for example set custom labels, change the order
 * of fields, or change the filter field control type. Note: Changing the values here after the SmartFilter is initialised (initialise
 * event was fired) shall have no effect.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlConfiguration = function() { return new Array(); };

/**
 * Getter for property <code>entityType</code>.
 * The OData entity type whose metadata shall be used to create the SmartFilterBar. Note: Changing this value after the SmartFilter is
 * initialised (initialise event was fired) shall have no effect.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>entityType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getEntityType = function() { return ""; };

/**
 * Get the filterable fields
 * @returns {Array}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterBarViewMetadata = function() { return null; };

/**
 * Returns the data currently set in the filter data model
 * @param {boolean} bAllFilterData - Also include empty/invisible fields filter data
 * @returns {object} the json data in the filter bar
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterData = function(bAllFilterData) { return new Object(); };

/**
 * Returns the data currently set in the filter data model as string
 * @param {boolean} bAllFilterData - Also include empty/invisible fields filter data
 * @returns {string} the string json data in the filter bar
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterDataAsString = function(bAllFilterData) { return ""; };

/**
 * Returns an array of filters that can be used to restrict the query result from OData - Returns the results for visible fields only
 * @returns {Array} array of filters
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilters = function() { return null; };

/**
 * Getter for aggregation <code>groupConfiguration</code>.<br/>
 * Provides the possibility to add additional configuration to groups. Groups are used to show fields in the advanced area of the
 * SmartFilterBar. With additional configuration, you can for example set custom labels or change the order of groups. Note: Changing
 * the values here after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getGroupConfiguration = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.SmartFilterBar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a parameter object that can be used to restrict the query result from OData in case of basic search
 * @returns {object} parameter object containing OData query parameters
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getParameters = function() { return new Object(); };

/**
 * Getter for property <code>resourceUri</code>.
 * Optional. The OData service URL. If it is not specified, the service URL from the OData model (this.getModel()) will be used. Note:
 * Changing this value after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>resourceUri</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getResourceUri = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code> in the aggregation named <code>controlConfiguration</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *           oControlConfiguration the controlConfiguration whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfControlConfiguration = function(oControlConfiguration) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code> in the aggregation named <code>groupConfiguration</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *           oGroupConfiguration the groupConfiguration whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfGroupConfiguration = function(oGroupConfiguration) { return 0; };

/**
 * Inserts a controlConfiguration into the aggregation named <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the controlConfiguration should be inserted at; for
 *              a negative value of <code>iIndex</code>, the controlConfiguration is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the controlConfiguration is inserted at
 *              the last position
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertControlConfiguration = function(oControlConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Inserts a groupConfiguration into the aggregation named <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the groupConfiguration should be inserted at; for
 *              a negative value of <code>iIndex</code>, the groupConfiguration is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the groupConfiguration is inserted at
 *              the last position
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertGroupConfiguration = function(oGroupConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Removes all the controls in the aggregation named <code>controlConfiguration</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllControlConfiguration = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>groupConfiguration</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllGroupConfiguration = function() { return new Array(); };

/**
 * Removes an controlConfiguration from the aggregation named <code>controlConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.ControlConfiguration} vControlConfiguration the controlConfigurationto remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} the removed controlConfiguration or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeControlConfiguration = function(vControlConfiguration) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Removes an groupConfiguration from the aggregation named <code>groupConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.GroupConfiguration} vGroupConfiguration the groupConfigurationto remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} the removed groupConfiguration or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeGroupConfiguration = function(vGroupConfiguration) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Setter for property <code>basicSearchFieldName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sBasicSearchFieldName new value for property <code>basicSearchFieldName</code>
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setBasicSearchFieldName = function(sBasicSearchFieldName) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * The entity type name from OData metadata, for which the filter bar shall be created
 * @param {string} sEntityTypeName
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setEntityType = function(sEntityTypeName) {  };

/**
 * Sets the data in the filter data model
 * @param {object} oJson - the json data in the filter bar *
 * @param {boolean} bReplace - Replace existing filter data
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterData = function(oJson,bReplace) {  };

/**
 * Sets the data in the filter data model as string
 * @param {string} sJson - the json data in the filter bar *
 * @param {boolean} bReplace - Replace existing filter data
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterDataAsString = function(sJson,bReplace) {  };

/**
 * Uses the provided resource URI to fetch the OData metadata instead of using the default ODataModel (getModel()). You should only set this if
 * you intend to get the metadata for the filter bar from elsewhere!
 * @param {string} sResourceUri - The URI of the oData service from which the metadata would be read
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setResourceUri = function(sResourceUri) {  };


// ---- sap.ui.comp.smartform.flexibility.DialogContent --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/DialogContent.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The content of the personalization dialog of the SmartForm
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.comp.smartform.flexibility.DialogContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.destroyContent = function() { return new sap.ui.comp.smartform.flexibility.DialogContent(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.DialogContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content of the control itself
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.DialogContent.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Initialisation
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.init = function() {  };

/**
 * Returns Ids of the assigned changes of the component (correctly sorted)
 * @param {sap.ui.model.odata.ODataModel} oODataModel The list of fields will be extracetd from the models metadata
 * @param {string} sEntityType The entity type whose fields could be selected
 * @param {string} sComponentName The name of the SAPUI5 component
 * @param {array} aIgnoredFields List of fields which should be ignored.
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.initialiseODataFieldSelector = function(oODataModel,sEntityType,sComponentName,aIgnoredFields) {  };

/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent the content to set
 * @return {sap.ui.comp.smartform.flexibility.DialogContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.setContent = function(oContent) { return new sap.ui.comp.smartform.flexibility.DialogContent(); };

/**
 * Sets the first part of new control ids for the view context
 * @param {string} sId	Control Id
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.setViewId = function(sId) {  };


// ---- sap.ui.comp.smartform.flexibility.FieldList --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/FieldList.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.ui.comp.smartform.flexibility.FieldListNode[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains list of forms, groups and fields which can could be modified by the SAPUI5 flexibility services
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList = function(sId,mSettings) {};
/**
 * Event is fired when the selected node has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.<br> itself.
 * 
 * Event is fired when the selected node has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.<br/> itself.
 * @return {sap.ui.comp.smartform.flexibility.FieldList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartform.flexibility.FieldList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.FieldList with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event selectionChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartform.flexibility.FieldList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.fireSelectionChanged = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.FieldList.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * Nodes representing either a Form, a Group or a field
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode[]}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.getNodes = function() { return new Array(); };

/**
 * Returns the currently selected field list node
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} node
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.getSelectedNode = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> in the aggregation named <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *           oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * init
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.init = function() {  };

/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @return {sap.ui.comp.smartform.flexibility.FieldList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.removeAllNodes = function() { return new Array(); };


// ---- sap.ui.comp.smartform.flexibility.FieldListNode --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/FieldListNode.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getIsVisible isVisible} : boolean</li>
 * <li>{@link #getIsSelected isSelected} : boolean</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.ui.comp.smartform.flexibility.FieldListNode[]</li>
 * <li>{@link #getLayout layout} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A node within the field list control
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode = function(sId,mSettings) {};
/**
 * node was selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode} oControlEvent.getParameters.target The inner node which was clicked
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.selected = function(oControlEvent) {  };

/**
 * Event handler - called when the user changes the label
 * @param {object} oEvent Event
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype._onLabelChanged = function(oEvent) {  };

/**
 * Event handler - called when the user has selected the label using the keyboard
 * @param {object} oEvent Event
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype._onLabelSelectedByKeyboard = function(oEvent) {  };

/**
 * Adds some node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.addNode = function(oNode) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.<br> itself.
 * 
 * node was selected
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.<br/> itself.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.attachSelected = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Destroys the layout in the aggregation
 * named <code>layout</code>.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Destroys all the nodes in the aggregation
 * named <code>nodes</code>.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.destroyNodes = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.detachSelected = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.FieldListNode with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event selected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'target' of type <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>The inner node which was clicked</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.fireSelected = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Getter for property <code>isSelected</code>.
 * is node selected
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>isSelected</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getIsSelected = function() { return false; };

/**
 * Getter for property <code>isVisible</code>.
 * is visible flag
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>isVisible</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getIsVisible = function() { return false; };

/**
 * Getter for property <code>label</code>.
 * The label
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getLabel = function() { return ""; };

/**
 * Getter for aggregation <code>layout</code>.<br/>
 * private aggregation
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getLayout = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.FieldListNode.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * Nodes representing either a Form, a Group or a field
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode[]}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getNodes = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> in the aggregation named <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *           oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.removeAllNodes = function() { return new Array(); };

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 * @param {int | string | sap.ui.comp.smartform.flexibility.FieldListNode} vNode the nodeto remove or its index or id
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} the removed node or null
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.removeNode = function(vNode) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Overwritten - Sets the isSelected property
 * @param {boolean} bIsSelected field list node selected
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setIsSelected = function(bIsSelected) {  };

/**
 * Setter for the aggregated <code>layout</code>.
 * @param {sap.ui.core.Control} oLayout the layout to set
 * @return {sap.ui.comp.smartform.flexibility.FieldListNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };


// ---- sap.ui.comp.smartform.flexibility.Input --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/Input.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectedByKeyboard selectedByKeyboard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Input#constructor sap.m.Input}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Input field with special focus handling
 * @extends sap.m.Input
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.Input = function(sId,mSettings) {};
/**
 * Fired when the field is readonly, focused and user pressed Space
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.selectedByKeyboard = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'selectedByKeyboard' event of this <code>sap.ui.comp.smartform.flexibility.Input</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartform.flexibility.Input</code>.<br> itself.
 * 
 * Fired when the field is readonly, focused and user pressed Space
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.Input</code>.<br/> itself.
 * @return {sap.ui.comp.smartform.flexibility.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.attachSelectedByKeyboard = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selectedByKeyboard' event of this <code>sap.ui.comp.smartform.flexibility.Input</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartform.flexibility.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.detachSelectedByKeyboard = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.Input with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Input.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.Input.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event selectedByKeyboard to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartform.flexibility.Input} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.fireSelectedByKeyboard = function(mArguments) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.Input.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.Input.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.comp.smartform.Group --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/Group.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGroupElements groupElements} : sap.ui.comp.smartform.GroupElement[]</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.GridData</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Groups are used to group group elements.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.Group = function(sId,mSettings) {};
/**
 * Adds some entity to the given aggregation.
 * @param {string}
 *          sAggregationName the strung identifying the aggregation that oObject should be added to.
 * @param {sap.ui.base.ManagedObject}
 *          oObject the object to add.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addAggregation = function(sAggregationName,oObject) { return new sap.ui.comp.smartform.Group(); };

/**
 * Adds some CustomeData into the aggregation <code>customData</code>. Additionally the customData is also added to
 * the SmartFields in the children hierarchy
 * @param {sap.ui.core.CustomData}
 *          oCustomData the customData to add.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addCustomData = function(oCustomData) { return new sap.ui.comp.smartform.Group(); };

/**
 * Adds some GroupElement into the aggregation <code>groupElements</code>
 * @param {sap.ui.comp.smartform.GroupElement}
 *          oGroupElement group element to add to aggregation named groupElements.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addGroupElement = function(oGroupElement) { return new sap.ui.comp.smartform.Group(); };

/**
 * Destroys all the group elements in the aggregation <code>groupElements</code>
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.destroyGroupElements = function() { return new sap.ui.comp.smartform.Group(); };

/**
 * Destroys the layout in the aggregation
 * named <code>layout</code>.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.Group(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.Group with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Group.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>expandable</code>.
 * Specifies whether the group shall be expandable.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getExpandable = function() { return false; };

/**
 * Gets the form container.
 * @return {sap.ui.layout.FormContainer} the form container
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getFormContainer = function() { return new sap.ui.layout.FormContainer(); };

/**
 * Getter for aggregation <code>groupElements</code>.<br/>
 * A GroupElement is a combination of one label and different controls associated to this label.
 * @return {sap.ui.comp.smartform.GroupElement[]}
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getGroupElements = function() { return new Array(); };

/**
 * Getter for property <code>label</code>.
 * Label for the group.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getLabel = function() { return ""; };

/**
 * Getter for aggregation <code>layout</code>.<br/>
 * Layout to specify how the group shall be rendered (e.g. span and line-break)
 * @return {sap.ui.layout.GridData}
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getLayout = function() { return new sap.ui.layout.GridData(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.Group.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Group.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.GroupElement</code> in the aggregation named <code>groupElements</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.GroupElement}
 *           oGroupElement the groupElement whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.indexOfGroupElement = function(oGroupElement) { return 0; };

/**
 * Inserts a GroupElement into the aggregation <code>groupElements</code>
 * @param {sap.ui.comp.smartform.GroupElement}
 *          oGroupElement group element to insert into aggregation named groupElements.
 * @param {int}
 *          iIndex the 0-based index the GroupElement should be inserted at.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.insertGroupElement = function(oGroupElement,iIndex) { return new sap.ui.comp.smartform.Group(); };

/**
 * Removes all group elements from the aggregation <code>groupElements</code>
 * @param {int|string|sap.ui.comp.smartform.GroupElement}
 *          the GroupElement to remove or its index or id.
 * @return {sap.ui.comp.smartform.GroupElement[]} an array of the removed elements.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.removeAllGroupElements = function(the) { return new Array(); };

/**
 * Removes a GroupElement from the aggregation <code>groupElements</code>
 * @param {int|string|sap.ui.comp.smartform.GroupElement}
 *          vGroupElement the GroupElement to remove or its index or id.
 * @return {sap.ui.comp.smartform.GroupElement} the removed GroupElement or null.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.removeGroupElement = function(vGroupElement) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets a new object in the named 0..1 aggregation.
 * @param {string}
 *          sAggregationName name of an 0..1 aggregation.
 * @param {sap.ui.base.ManagedObject}
 *          oObject the managed object that is set as aggregated object.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setAggregation = function(sAggregationName,oObject) { return new sap.ui.comp.smartform.Group(); };

/**
 * Setter for property editable of all smart fields in children hierarchy.
 * @param {boolean}
 *          bEditMode new value for editable property of smart fields.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setEditMode = function(bEditMode) { return new sap.ui.comp.smartform.Group(); };

/**
 * Setter for property <code>expandable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable new value for property <code>expandable</code>
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setExpandable = function(bExpandable) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets the form container.
 * @param {sap.ui.layout.FormContainer}
 *          oFormContainer form container to set
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setFormContainer = function(oFormContainer) {  };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabel new value for property <code>label</code>
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartform.Group(); };

/**
 * Setter for the aggregated <code>layout</code>.
 * @param {sap.ui.layout.GridData} oLayout the layout to set
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets the given value for the given property.
 * @param {string} sPropertyName the property to set the value for
 * @param {any}
 *          oValue value to set the property to.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setProperty = function(sPropertyName,oValue) { return new sap.ui.comp.smartform.Group(); };


// ---- sap.ui.comp.smartform.GroupElement --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/GroupElement.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getElementForLabel elementForLabel} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getElements elements} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class A GroupElement is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.GroupElement = function(sId,mSettings) {};
/**
 * Adds some CustomeData into the aggregation <code>customData</code>. Additionally the customData is also added to the SmartFields in the
 * children hierarchy
 * @param {sap.ui.core.CustomData} oCustomData the customData to add.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.addCustomData = function(oCustomData) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Adds some control into the aggregation <code>elements</code>
 * @param {sap.ui.core.Control} oElement the control to add.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.addElement = function(oElement) {  };

/**
 * Destroys all the controls in the aggregation <code>elements</code>
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.destroyElements = function() { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.GroupElement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.GroupElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the aggregated object(s) for the named aggregation.
 * @param {string} sAggregationName the name of the aggregation
 * @return {sap.ui.base.ManagedObject[]} the aggregation object
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getAggregation = function(sAggregationName) { return new Array(); };

/**
 * Getter for property <code>elementForLabel</code>.
 * Index of element to be used for label determination
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>elementForLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getElementForLabel = function() { return 0; };

/**
 * Getter for aggregation <code>elements</code>
 * @return {sap.ui.core.Controls[]} an array of the removed controls.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getElements = function() { return new Array(); };

/**
 * Returns the from element.
 * @return {sap.ui.layout.form.FormElement} the form element.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getFormElement = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Getter for property <code>label</code>.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getLabel = function() { return new sap.ui.comp.smartform.Group(); };

/**
 * Returns the text of the label.
 * @return {string} text of the label.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getLabelText = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.GroupElement.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.GroupElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Determines the visibility of a group element based on elements
 * @returns {boolean} Returns true, in case one element of the group element is visible
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getVisibleBasedOnElements = function() { return false; };

/**
 * Checks for the provided control in the aggregation named <code>elements</code> and returns its index if found or -1 otehrwise.
 * @param {sap.ui.core.Control} oElement the control whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.indexOfElement = function(oElement) { return 0; };

/**
 * Inserts a control into the aggregation <code>elements</code>
 * @param {sap.ui.core.Control} oElement the control to insert into aggregation named elements.
 * @param {int} iIndex the 0-based index the control should be inserted at.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.insertElement = function(oElement,iIndex) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Removes all controls from the aggregation <code>elements</code>
 * @return {sap.ui.core.Controls[]} an array of the removed controls.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.removeAllElements = function() { return new Array(); };

/**
 * Removes a control from the aggregation <code>elements</code>
 * @param {int|string|sap.ui.comp.smartform.GroupElement} vElement the GroupElement to remove or its index or id.
 * @return {sap.ui.core.Control} the removed control or null.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.removeElement = function(vElement) { return new sap.ui.core.Control(); };

/**
 * Setter for property editable of all smart fields in children hierarchy.
 * @param {boolean} bEditMode new value for editable property of smart fields.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setEditMode = function(bEditMode) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Setter for property <code>elementForLabel</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iElementForLabel new value for property <code>elementForLabel</code>
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setElementForLabel = function(iElementForLabel) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabel new value for property <code>label</code>
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets the given value for the given property
 * @param {string} sPropertyName name of the property to set
 * @param {any} oValue value to set the property to
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setProperty = function(sPropertyName,oValue) { return new sap.ui.comp.smartform.GroupElement(); };


// ---- sap.ui.comp.smartform.Layout --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/Layout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabelSpanL labelSpanL} : int</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int</li>
 * <li>{@link #getColumnsL columnsL} : int</li>
 * <li>{@link #getColumnsM columnsM} : int</li>
 * <li>{@link #getBreakpointL breakpointL} : int</li>
 * <li>{@link #getBreakpointM breakpointM} : int</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Layout settings to adjust ResponsiveGridLayout.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.Layout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartform.Layout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Layout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>breakpointL</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>breakpointL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getBreakpointL = function() { return 0; };

/**
 * Getter for property <code>breakpointM</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>breakpointM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getBreakpointM = function() { return 0; };

/**
 * Getter for property <code>columnsL</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>columnsL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getColumnsL = function() { return 0; };

/**
 * Getter for property <code>columnsM</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>columnsM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getColumnsM = function() { return 0; };

/**
 * Getter for property <code>emptySpanL</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>emptySpanL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanL = function() { return 0; };

/**
 * Getter for property <code>emptySpanM</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>emptySpanM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanM = function() { return 0; };

/**
 * Getter for property <code>emptySpanS</code>.
 * test
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>emptySpanS</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanS = function() { return 0; };

/**
 * Getter for property <code>labelSpanL</code>.
 * Default span for labels in large size. This span is only used if more than 1 container is in one line, if only 1 container is in the line the labelSpanM value is used.
 * Default value is
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>labelSpanL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanL = function() { return 0; };

/**
 * Getter for property <code>labelSpanM</code>.
 * Default span for labels in medium size. This property is used for full size containers. if more than one Container is in one line, labelSpanL is used.
 * Default value is
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>labelSpanM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanM = function() { return 0; };

/**
 * Getter for property <code>labelSpanS</code>.
 * Default span for labels in small size.
 * Default value is
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>labelSpanS</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanS = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.Layout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Layout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>breakpointL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iBreakpointL new value for property <code>breakpointL</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>breakpointM</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iBreakpointM new value for property <code>breakpointM</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>columnsL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iColumnsL new value for property <code>columnsL</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>columnsM</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iColumnsM new value for property <code>columnsM</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>emptySpanL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iEmptySpanL new value for property <code>emptySpanL</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>emptySpanM</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iEmptySpanM new value for property <code>emptySpanM</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>emptySpanS</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iEmptySpanS new value for property <code>emptySpanS</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>labelSpanL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iLabelSpanL new value for property <code>labelSpanL</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>labelSpanM</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iLabelSpanM new value for property <code>labelSpanM</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Setter for property <code>labelSpanS</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iLabelSpanS new value for property <code>labelSpanS</code>
 * @return {sap.ui.comp.smartform.Layout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.comp.smartform.Layout(); };


// ---- sap.ui.comp.smartform.SmartForm --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/SmartForm.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getUseHorizontalLayout useHorizontalLayout} : boolean</li>
 * <li>{@link #getCheckButton checkButton} : boolean (default: false)</li>
 * <li>{@link #getEntityType entityType} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getExpanded expanded} : boolean</li>
 * <li>{@link #getEditTogglable editTogglable} : boolean (default: false)</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGroups groups} : sap.ui.comp.smartform.Group[]</li>
 * <li>{@link #getLayout layout} : sap.ui.comp.smartform.Layout</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : sap.ui.comp.navpopover.SemanticObjectController</li>
 * <li>{@link #getCustomToolbar customToolbar} : sap.m.Toolbar</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:editToggled editToggled} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:checked checked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartForm renders a form (sap.ui.layout.form.Form) and makes use of OData metadata annotations. If the controls to be displayed
 *        inside the form are bound to an OData model the label is taken from the metadata annotation (sap:label) if not specified in the XML
 *        view.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.SmartForm = function(sId,mSettings) {};
/**
 * Event is fired after check was performed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.checked = function(oControlEvent) {  };

/**
 * Event is fired when the editable property is toggled.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.editToggled = function(oControlEvent) {  };

/**
 * Adds some group into the aggregation named <code>groups</code>.
 * @param {sap.ui.comp.smartform.Group}
 *            oGroup the group to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.addGroup = function(oGroup) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'checked' event of this <code>sap.ui.comp.smartform.SmartForm</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartform.SmartForm</code>.<br> itself.
 * 
 * Event is fired after check was performed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.SmartForm</code>.<br/> itself.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.attachChecked = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'editToggled' event of this <code>sap.ui.comp.smartform.SmartForm</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartform.SmartForm</code>.<br> itself.
 * 
 * Event is fired when the editable property is toggled.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.SmartForm</code>.<br/> itself.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.attachEditToggled = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Checks the object.
 * @returns {string[]} an array of fields with errors
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.check = function() { return new Array(); };

/**
 * Destroys the customToolbar in the aggregation
 * named <code>customToolbar</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyCustomToolbar = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys all the groups in the aggregation
 * named <code>groups</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyGroups = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys the layout in the aggregation
 * named <code>layout</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys the semanticObjectController in the aggregation
 * named <code>semanticObjectController</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroySemanticObjectController = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'checked' event of this <code>sap.ui.comp.smartform.SmartForm</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.detachChecked = function(fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'editToggled' event of this <code>sap.ui.comp.smartform.SmartForm</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.detachEditToggled = function(fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Cleans up the resources associated with this element and all its children.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.SmartForm with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.SmartForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event checked to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.fireChecked = function(mArguments) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Fire event editToggled to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.fireEditToggled = function(mArguments) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Getter for property <code>checkButton</code>.
 * Specifies whether a check button shall be added to the toolbar.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>checkButton</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getCheckButton = function() { return false; };

/**
 * Getter for aggregation <code>customToolbar</code>.
 * @return {sap.m.Toolbar} the custom toolbar
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getCustomToolbar = function() { return new sap.m.Toolbar(); };

/**
 * Getter for property <code>editable</code>.
 * Specifies whether the form is editable.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>editTogglable</code>.
 * Specified whether the property editable shall be togglable via button.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>editTogglable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEditTogglable = function() { return false; };

/**
 * Getter for property <code>entityType</code>.
 * EntiyType used for the SmartForm.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>entityType</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEntityType = function() { return ""; };

/**
 * Getter for property <code>expandable</code>.
 * Specifies whether the control is expandable. Per default the control is not rendered as expanded.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getExpandable = function() { return false; };

/**
 * Getter for property <code>expanded</code>.
 * If expandable, this property indicates whether the state is expanded or not. If expanded, then infoToolbar (if available) and
 * content is rendered; if expanded is false, then only the headerText/headerToolbar is rendered.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getExpanded = function() { return false; };

/**
 * Getter for aggregation <code>groups</code>.<br/>
 * Groups are used to group form elements.
 * @return {sap.ui.comp.smartform.Group[]}
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getGroups = function() { return new Array(); };

/**
 * Getter for property <code>ignoredFields</code>.
 * CSV of fields that must be ignored in the OData metadata, by the SmartForm Note that No validation will be done here, please ensure
 * you do not add spaces or special characters here!
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getIgnoredFields = function() { return ""; };

/**
 * Getter for aggregation <code>layout</code>.<br/>
 * Layout settings to adjust ResponsiveGridLayout
 * @return {sap.ui.comp.smartform.Layout}
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getLayout = function() { return new sap.ui.comp.smartform.Layout(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.SmartForm.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.SmartForm.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>semanticObjectController</code>.<br/>
 * The Semantic Object Controller allows to specify and overwrite several semantic object navigation functionalities.
 * @return {sap.ui.comp.navpopover.SemanticObjectController}
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getSemanticObjectController = function() { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Get all the smart fields of the form.
 * @return {sap.ui.comp.smartfield.SmartField[]} an array of smart fields (might be empty).
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getSmartFields = function() { return new Array(); };

/**
 * Getter for property <code>title</code>.
 * Title of the form.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getTitle = function() { return ""; };

/**
 * Getter for property <code>useHorizontalLayout</code>.
 * Specifies whether the groups shall be rendered in a ResponsiveLayout with label on top of the group element. Each group will be
 * rendered in a new line.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>useHorizontalLayout</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getUseHorizontalLayout = function() { return false; };

/**
 * Returns the array of properties currently visible on the UI.
 * @return {string[]} the properties currently visible
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getVisibleProperties = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.Group</code> in the aggregation named <code>groups</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.Group}
 *           oGroup the group whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.indexOfGroup = function(oGroup) { return 0; };

/**
 * Inserts a <code>group</code> into the aggregation named groups.
 * @param {sap.ui.comp.smartform.Group} oGroup the group to insert
 * @param {int} iIndex the 0-based index the group should be inserted at
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.insertGroup = function(oGroup,iIndex) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Removes all the groups in the aggregation named groups.
 * @return {sap.ui.comp.smartform.Group[]} an array of the removed groups (might be empty).
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.removeAllGroups = function() { return new Array(); };

/**
 * Removes an group from the aggregation named <code>groups</code>.
 * @param {int | string | sap.ui.comp.smartform.Group} vGroup the groupto remove or its index or id
 * @return {sap.ui.comp.smartform.Group} the removed group or null
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.removeGroup = function(vGroup) { return new sap.ui.comp.smartform.Group(); };

/**
 * Setter for property <code>checkButton</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCheckButton new value for property <code>checkButton</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setCheckButton = function(bCheckButton) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for aggregation <code>customToolbar</code>. Default value is <code>undefined</code>.
 * @param {sap.m.Toolbar} oCustomToolbar new value for aggregation <code>customToolbar</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setCustomToolbar = function(oCustomToolbar) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>editable</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEditable = function(bEditable) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>editTogglable</code>. Default value is <code>undefined</code>.
 * @param {boolean} bTogglable new value for property <code>editTogglable</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEditTogglable = function(bTogglable) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>entityType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sEntityType new value for property <code>entityType</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEntityType = function(sEntityType) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>expandable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable new value for property <code>expandable</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setExpandable = function(bExpandable) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>expanded</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bExpanded new value for property <code>expanded</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setExpanded = function(bExpanded) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>ignoredFields</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sIgnoredFields new value for property <code>ignoredFields</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for the aggregated <code>layout</code>.
 * @param {sap.ui.comp.smartform.Layout} oLayout the layout to set
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for the aggregated <code>semanticObjectController</code>.
 * @param {sap.ui.comp.navpopover.SemanticObjectController} oSemanticObjectController the semanticObjectController to set
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>title</code>. Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setTitle = function(sTitle) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>useHorizontalLayout</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bUseHorizontalLayout new value for property <code>useHorizontalLayout</code>
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setUseHorizontalLayout = function(bUseHorizontalLayout) { return new sap.ui.comp.smartform.SmartForm(); };


// ---- sap.ui.comp.smarttable.SmartTable --------------------------------------------------------------------------

/**
 * Constructor for a new smarttable/SmartTable.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getTableType tableType} : sap.ui.comp.smarttable.TableType</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseExportToExcel useExportToExcel} : boolean (default: true)</li>
 * <li>{@link #getUseTablePersonalisation useTablePersonalisation} : boolean (default: true)</li>
 * <li>{@link #getShowRowCount showRowCount} : boolean (default: true)</li>
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getToolbarStyleClass toolbarStyleClass} : string</li>
 * <li>{@link #getEnableCustomFilter enableCustomFilter} : boolean (default: true)</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getUseOnlyOneSolidToolbar useOnlyOneSolidToolbar} : boolean (default: false)</li>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getEnableAutoBinding enableAutoBinding} : boolean (default: false)</li>
 * <li>{@link #getTableBindingPath tableBindingPath} : string</li>
 * <li>{@link #getEditTogglable editTogglable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomToolbar customToolbar} : sap.m.Toolbar</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : sap.ui.comp.navpopover.SemanticObjectController</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeRebindTable beforeRebindTable} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editToggled editToggled} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:dataReceived dataReceived} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantInitialise afterVariantInitialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantApply afterVariantApply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.VBox#constructor sap.m.VBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartTable control creates a table based on OData metadata and the configuration specified. The entitySet attribute must be
 *        specified to use the control. This attribute is used to fetch fields from OData metadata, from which columns will be generated. <br>
 *        Note that this attribute is not dynamic and cannot be changed once the control has been initialized! It can also be used to fetch the
 *        actual table data based on the tableType attribute. This control will render a standard, analytical, or responsive table.
 * @extends sap.m.VBox
 * @constructor
 * @public
 * @experimental Since version 1.25. The SmartTable will be productised soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smarttable.SmartTable = function(sId,mSettings) {};
/**
 * Event fired after a variant has been applied.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantApply = function(oControlEvent) {  };

/**
 * Event fired after variant management in the SmartTable has been initialized.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantInitialise = function(oControlEvent) {  };

/**
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * Event fired just before the binding is being done.
 * @event
 * @since 1.26.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.beforeRebindTable = function(oControlEvent) {  };

/**
 * Event fired when data is received after binding. The event is fired if the binding for the table is done by the SmartTable itself.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.dataReceived = function(oControlEvent) {  };

/**
 * Event fired when display/edit button is clicked.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.editToggled = function(oControlEvent) {  };

/**
 * Event fired once the control has been initialized.
 * @event
 * @since 1.26.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.initialise = function(oControlEvent) {  };

/**
 * Interface function for SmartVariantManagment control, sets the current variant
 * @param {Object} oVariantJSON - the variants json
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.applyVariant = function(oVariantJSON) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterVariantApply' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired after a variant has been applied.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantApply = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterVariantInitialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired after variant management in the SmartTable has been initialized.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterVariantSave' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforeRebindTable' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired just before the binding is being done.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachBeforeRebindTable = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'dataReceived' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired when data is received after binding. The event is fired if the binding for the table is done by the SmartTable itself.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachDataReceived = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'editToggled' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired when display/edit button is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachEditToggled = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br> itself.
 * 
 * Event fired once the control has been initialized.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Destroys the customToolbar in the aggregation
 * named <code>customToolbar</code>.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroyCustomToolbar = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Destroys the semanticObjectController in the aggregation
 * named <code>semanticObjectController</code>.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroySemanticObjectController = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterVariantApply' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantApply = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterVariantInitialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterVariantSave' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeRebindTable' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachBeforeRebindTable = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'dataReceived' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachDataReceived = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'editToggled' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachEditToggled = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Cleans up the control
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smarttable.SmartTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.VBox.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smarttable.SmartTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Interface function for SmartVariantManagment control, returns the current used variant data
 * @public
 * @returns {json} The currently set variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fetchVariant = function() { return null; };

/**
 * Fire event afterVariantApply to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantApply = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event afterVariantInitialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantInitialise = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event afterVariantSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event beforeRebindTable to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireBeforeRebindTable = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event dataReceived to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireDataReceived = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event editToggled to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireEditToggled = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * returns the id of the currently selected variant.
 * @public
 * @returns {string} id of the currently selected variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Getter for aggregation <code>customToolbar</code>.<br/>
 * An additional toolbar that can be added by the users, which can contain further custom buttons, controls, etc.
 * @return {sap.m.Toolbar}
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getCustomToolbar = function() { return new sap.m.Toolbar(); };

/**
 * Getter for property <code>editable</code>.
 * this attribute can be used to specify if the controls created by the SmartTable are editable.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>editable</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>editTogglable</code>.
 * Specifies whether the editable property can be toggled via a button on the toolbar. (The automatic toggle of controls works only
 * for the SmartField scenario)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>editTogglable</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEditTogglable = function() { return false; };

/**
 * Getter for property <code>enableAutoBinding</code>.
 * When set to true, this enables automatic binding of the Table using the bindingPath (if it exists) or entitySet attribute. This
 * happens just after the 'initialise' event is fired.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableAutoBinding</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEnableAutoBinding = function() { return false; };

/**
 * Getter for property <code>enableCustomFilter</code>.
 * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for
 * which' press event (customFilter) you can register an event handler.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableCustomFilter</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEnableCustomFilter = function() { return false; };

/**
 * Getter for property <code>entitySet</code>.
 * The entity set name from which to fetch data and generate the columns. Note that this is not a dynamic UI5 property
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>entitySet</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEntitySet = function() { return ""; };

/**
 * Getter for property <code>header</code>.
 * Specifies header text that is shown in table
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>header</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getHeader = function() { return ""; };

/**
 * Getter for property <code>ignoredFields</code>.
 * CSV of fields that must be ignored in the OData metadata by the SmartTable. Note that no validation will be done. Please ensure
 * that you do not add spaces or special characters.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ignoredFields</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getIgnoredFields = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smarttable.SmartTable.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smarttable.SmartTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>persistencyKey</code>.
 * Key used to save personalization data.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>persistencyKey</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getPersistencyKey = function() { return ""; };

/**
 * Getter for aggregation <code>semanticObjectController</code>.<br/>
 * The Semantic Object Controller allows the user to specify and overwrite functionality for semantic object navigation.
 * @return {sap.ui.comp.navpopover.SemanticObjectController}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getSemanticObjectController = function() { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Getter for property <code>showRowCount</code>.
 * If the showRowCount attribute is set to true number of rows is shown along with the header text.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRowCount</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getShowRowCount = function() { return false; };

/**
 * Getter for property <code>smartFilterId</code>.
 * ID of the corresponding SmartFilter control; When specified, the SmartTable searches for the SmartFilter (also in the closest
 * parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>smartFilterId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getSmartFilterId = function() { return ""; };

/**
 * returns the internally used table object
 * @public
 * @returns {object} the table
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTable = function() { return new Object(); };

/**
 * Getter for property <code>tableBindingPath</code>.
 * This attribute can be used to specify the path that is used during the binding of the table. If not specified, the entitySet
 * attribute is used instead. (used only if binding is established internally/automatically - See enableAutoBinding)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>tableBindingPath</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTableBindingPath = function() { return ""; };

/**
 * Getter for property <code>tableType</code>.
 * tableType attribute can be used to specify the type of table to create in the SmartFilter. For available options, see type. Note
 * that if you add a table to the content of the SmartTable in the view; this property has no effect!
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.comp.smarttable.TableType} the value of property <code>tableType</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTableType = function() { return new sap.ui.comp.smarttable.TableType(); };

/**
 * Getter for property <code>toolbarStyleClass</code>.
 * a style class which is defined for the toolbar of the table
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>toolbarStyleClass</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getToolbarStyleClass = function() { return ""; };

/**
 * Getter for property <code>useExportToExcel</code>.
 * The useExportToExcel attribute can be set to true or false depending on whether you want to export data to MS Excel®.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useExportToExcel</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseExportToExcel = function() { return false; };

/**
 * Getter for property <code>useOnlyOneSolidToolbar</code>.
 * if true, items of standard toolbar and custom toolbar will be merged into one toolbar. The combined toolbar will have a solid
 * style.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>useOnlyOneSolidToolbar</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseOnlyOneSolidToolbar = function() { return false; };

/**
 * Getter for property <code>useTablePersonalisation</code>.
 * The useTablePersonalisation attribute can be set to true or false depending on whether you want to define personalized table
 * settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useTablePersonalisation</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseTablePersonalisation = function() { return false; };

/**
 * Getter for property <code>useVariantManagement</code>.
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useVariantManagement</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseVariantManagement = function() { return false; };

/**
 * This can be used to trigger binding on the table used in the SmartTable
 * @protected
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.rebindTable = function() {  };

/**
 * Set the current variant according to the sVariantId. In case an empty string or null or undefined was passed the STANDARD will be set. STANDARD
 * will also be set, in case the passed sVariantId could not be found. In case neither a flexibility variant, nor the content for the standard
 * variant could not be obtained, nor the personalisable control obtained nothing will be executed/changed
 * @public
 * @params {string} sVariantId id of the currently selected variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setCurrentVariantId = function() {  };

/**
 * Setter for the aggregated <code>customToolbar</code>.
 * @param {sap.m.Toolbar} oCustomToolbar the customToolbar to set
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setCustomToolbar = function(oCustomToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEditable = function(bEditable) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>editTogglable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditTogglable new value for property <code>editTogglable</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEditTogglable = function(bEditTogglable) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>enableAutoBinding</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableAutoBinding new value for property <code>enableAutoBinding</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEnableAutoBinding = function(bEnableAutoBinding) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>enableCustomFilter</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableCustomFilter new value for property <code>enableCustomFilter</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEnableCustomFilter = function(bEnableCustomFilter) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * The entity set name from OData metadata, with which the table should be bound to
 * @param {string} sEntitySetName The entity set
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEntitySet = function(sEntitySetName) {  };

/**
 * Setter for property <code>header</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sHeader new value for property <code>header</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setHeader = function(sHeader) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>ignoredFields</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sIgnoredFields new value for property <code>ignoredFields</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>persistencyKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sPersistencyKey new value for property <code>persistencyKey</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for the aggregated <code>semanticObjectController</code>.
 * @param {sap.ui.comp.navpopover.SemanticObjectController} oSemanticObjectController the semanticObjectController to set
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>showRowCount</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRowCount new value for property <code>showRowCount</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setShowRowCount = function(bShowRowCount) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>smartFilterId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSmartFilterId new value for property <code>smartFilterId</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>tableBindingPath</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTableBindingPath new value for property <code>tableBindingPath</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setTableBindingPath = function(sTableBindingPath) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>tableType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.comp.smarttable.TableType} sTableType new value for property <code>tableType</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setTableType = function(sTableType) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>toolbarStyleClass</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sToolbarStyleClass new value for property <code>toolbarStyleClass</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setToolbarStyleClass = function(sToolbarStyleClass) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>useExportToExcel</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseExportToExcel new value for property <code>useExportToExcel</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseExportToExcel = function(bUseExportToExcel) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>useOnlyOneSolidToolbar</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseOnlyOneSolidToolbar new value for property <code>useOnlyOneSolidToolbar</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseOnlyOneSolidToolbar = function(bUseOnlyOneSolidToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>useTablePersonalisation</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseTablePersonalisation new value for property <code>useTablePersonalisation</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseTablePersonalisation = function(bUseTablePersonalisation) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Setter for property <code>useVariantManagement</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseVariantManagement new value for property <code>useVariantManagement</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * This can be called once data is received to update table header (count) and toolbar buttons(e.g. Excel Export) enabled state
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.updateTableHeaderState = function() {  };


// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smarttable.TableType.toString = function() { return ""; };

// ---- sap.ui.comp.smartvariants.PersonalizableInfo --------------------------------------------------------------------------

/**
 * Constructor for a new smartvariants/PersonalizableInfo.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getDataSource dataSource} : string</li>
 * <li>{@link #getKeyName keyName} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Describes the control associated with the smart variant control.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.PersonalizableInfo with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Id of the element which is the current target of the <code>control</code> association, or null
 * 
 * Contains the control that can be personalized.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>dataSource</code>.
 * Name of the data service
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>dataSource</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getDataSource = function() { return ""; };

/**
 * Getter for property <code>keyName</code>.
 * Defines the property name of the controller containing the stableId.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>keyName</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getKeyName = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.PersonalizableInfo.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>type</code>.
 * Describes the type of variant management.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getType = function() { return ""; };

/**
 * Setter for the associated <code>control</code>.
 * @param {sap.ui.core.Control} oControl Id of an element which becomes the new target of this control association. Alternatively, an element instance may be given.
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setControl = function(oControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Setter for property <code>dataSource</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDataSource new value for property <code>dataSource</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setDataSource = function(sDataSource) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Setter for property <code>keyName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKeyName new value for property <code>keyName</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setKeyName = function(sKeyName) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sType new value for property <code>type</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setType = function(sType) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };


// ---- sap.ui.comp.smartvariants.SmartVariantManagement --------------------------------------------------------------------------

/**
 * Constructor for a new smartvariants/SmartVariantManagement.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPersonalizableControls personalizableControls} : sap.ui.comp.smartvariants.PersonalizableInfo[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterSave afterSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.variants.VariantManagement#constructor sap.ui.comp.variants.VariantManagement}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * SmartVariantManagement is a specialization of the VariantManagementControl and communicates with the flexibility layer to manage the variants.
 * @extends sap.ui.comp.variants.VariantManagement
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement = function(sId,mSettings) {};
/**
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.afterSave = function(oControlEvent) {  };

/**
 * Once the the SmartVariantControl has been initialized, and especially after retrieving the variants from the backend system, the registered consumers receive the information that this phase has been completed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function(oControlEvent) {  };

/**
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.comp/smartvariants/PersonalizableInfo} oCurrentControlInfo control providing the required aggregation for flex-layer
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.addPersonalizableControl = function(oCurrentControlInfo) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterSave' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br> itself.
 * 
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.attachAfterSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br> itself.
 * 
 * Once the the SmartVariantControl has been initialized, and especially after retrieving the variants from the backend system, the registered consumers receive the information that this phase has been completed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Destroys all the personalizableControls in the aggregation
 * named <code>personalizableControls</code>.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.destroyPersonalizableControls = function() { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterSave' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.detachAfterSave = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Destroys the control
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.SmartVariantManagement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.variants.VariantManagement.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event afterSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireAfterSave = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * is called by the variant management control, when managing the variants
 * @public
 * @param {object} oVariantInfo describes the variants, which will be deleted/renamed
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireManage = function(oVariantInfo) {  };

/**
 * is called by the variant management control, when saving a variant
 * @public
 * @param {object} oVariantInfo describes the variant to be saved
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSave = function(oVariantInfo) {  };

/**
 * is called by the variant management control, when a variant was selected
 * @public
 * @param {object} oVariantInfo describes the selected variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSelect = function(oVariantInfo) {  };

/**
 * returns the id of the currently selected variant. In case STANDARD is set, an empty string will be returned. An empty string will also be returned,
 * when the initialize was not yet called.
 * @public
 * @since 1.28.1
 * @returns {string} id of the currently selected variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.SmartVariantManagement.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>personalizableControls</code>.<br/>
 * All controls that are interested and rely on variant handling have to be registered by this aggregation
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo[]}
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getPersonalizableControls = function() { return new Array(); };

/**
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.core.Control} oControl current control
 * @param {string} sKey the variant key
 * @returns {object} json object representing the content of the variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getVariantContent = function(oControl,sKey) { return new Object(); };

/**
 * retrieve the list of known variants via access to VM
 * @public
 * @param {Function} fCallBack will be called once the promise is full filled
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getVariantsInfo = function(fCallBack) {  };

/**
 * Checks for the provided <code>sap.ui.comp.smartvariants.PersonalizableInfo</code> in the aggregation named <code>personalizableControls</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *           oPersonalizableControl the personalizableControl whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.indexOfPersonalizableControl = function(oPersonalizableControl) { return 0; };

/**
 * control initialization
 * @public
 * @since 1.26.1
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.init = function() {  };

/**
 * first function to be called. will initialize the flex layer, by retrieving the list of variants Once the initialization is completed the control
 * for personalization will be informed via the event "initialise"
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function() {  };

/**
 * Inserts a personalizableControl into the aggregation named <code>personalizableControls</code>.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *            oPersonalizableControl the personalizableControl to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the personalizableControl should be inserted at; for
 *              a negative value of <code>iIndex</code>, the personalizableControl is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the personalizableControl is inserted at
 *              the last position
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.insertPersonalizableControl = function(oPersonalizableControl,iIndex) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Removes all the controls in the aggregation named <code>personalizableControls</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removeAllPersonalizableControls = function() { return new Array(); };

/**
 * Removes an personalizableControl from the aggregation named <code>personalizableControls</code>.
 * @param {int | string | sap.ui.comp.smartvariants.PersonalizableInfo} vPersonalizableControl the personalizableControlto remove or its index or id
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} the removed personalizableControl or null
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removePersonalizableControl = function(vPersonalizableControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Set the current variant according to the sVariantId. In case an empty string or null or undefined was passed the STANDARD will be set. STANDARD
 * will also be set, in case the passed sVariantId could not be found. In case neither a flexibility variant, nor the content for the standard variant
 * could not be obtained, nor the personalizable control obtained nothing will be executed/changed
 * @public
 * @since 1.28.1
 * @param {string} sVariantId id of the currently selected variant
 * @param {boolean} bDoNotApplyVariant if set to true the applyVariant method will not be executed yet. Use-full if used during navigation, where the
 *        pers-controller sets the variant id, but the initialise - sequence triggers the applyVariant method
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.setCurrentVariantId = function(sVariantId,bDoNotApplyVariant) {  };


// ---- sap.ui.comp.smartvariants.SmartVariantManagementUi2 --------------------------------------------------------------------------

/**
 * Constructor for a new smartvariants/SmartVariantManagementUi2.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPersonalizableControl personalizableControl} : sap.ui.comp.smartvariants.PersonalizableInfo</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterSave afterSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.variants.VariantManagement#constructor sap.ui.comp.variants.VariantManagement}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * SmartVariantManagement is a specialization of the VariantManagementControl and communicates with the Ui2 personalization layer to manage the variants.
 * @extends sap.ui.comp.variants.VariantManagement
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2 = function(sId,mSettings) {};
/**
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.afterSave = function(oControlEvent) {  };

/**
 * Once the the SmartVariant control has been initialized, and especially after retrieving the variants via the UI2 personalization service, the registered consumer will be notified that this phase has completed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.initialise = function(oControlEvent) {  };

/**
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.comp/smartvariants/PersonalizableInfo} oCurrentControlInfo control providing the required aggregation for flex-layer
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.addPersonalizableControl = function(oCurrentControlInfo) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'afterSave' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br> itself.
 * 
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/> itself.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.attachAfterSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br> itself.
 * 
 * Once the the SmartVariant control has been initialized, and especially after retrieving the variants via the UI2 personalization service, the registered consumer will be notified that this phase has completed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/> itself.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Destroys the personalizableControl in the aggregation
 * named <code>personalizableControl</code>.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.destroyPersonalizableControl = function() { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'afterSave' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.detachAfterSave = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Destroys the control
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.SmartVariantManagementUi2 with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.variants.VariantManagement.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event afterSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.fireAfterSave = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * returns the id of the currently selected variant. In case STANDARD is set, an empty string will be returned. An empty string will also be returned,
 * when the initialize was not yet called.
 * @public
 * @returns {string} id of the currently selected variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.SmartVariantManagementUi2.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>personalizableControl</code>.<br/>
 * The control that is interested and rely on variant handling have to be registered by this aggregation. Only currently known consumer is the FilterBar control.
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo}
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getPersonalizableControl = function() { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.core.Control} oControl current control
 * @param {string} sKey the variant key
 * @returns {object} json object representing the content of the variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getVariantContent = function(oControl,sKey) { return new Object(); };

/**
 * control initialization
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.init = function() {  };

/**
 * Set the current variant according to the sVariantId. In case an empty string or null or undefined was passed the STANDARD will be set. STANDARD
 * will also be set, in case the passed sVariantId could not be found. In case neither a flexibility variant, nor the content for the standard variant
 * could not be obtained, nor the personalisable control obtained nothing will be executed/changed
 * @public
 * @param {string} sVariantId id of the currently selected variant
 * @param {boolean} bDoNotApplyVariant if set to true the applyVariant method will not be executed yet. Use-full if used during navigation, where the
 *        pers-controller sets the variant id, but the initialise - sequence triggers the applyVariant method
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.setCurrentVariantId = function(sVariantId,bDoNotApplyVariant) {  };

/**
 * Setter for the aggregated <code>personalizableControl</code>.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo} oPersonalizableControl the personalizableControl to set
 * @return {sap.ui.comp.smartvariants.SmartVariantManagementUi2} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.setPersonalizableControl = function(oPersonalizableControl) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };


// ---- sap.ui.comp.transport.TransportDialog --------------------------------------------------------------------------

/**
 * Constructor for a new transport/TransportDialog.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPkg pkg} : string</li>
 * <li>{@link #getTransports transports} : any</li>
 * <li>{@link #getLrepObject lrepObject} : any</li>
 * <li>{@link #getHidePackage hidePackage} : boolean</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.
 * @extends sap.m.Dialog
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.transport.TransportDialog = function(sId,mSettings) {};
/**
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.ok = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.transport.TransportDialog</code>.<br> itself.
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'ok' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.transport.TransportDialog</code>.<br> itself.
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'ok' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Creates a new subclass of class sap.ui.comp.transport.TransportDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.transport.TransportDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Fire event ok to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Getter for property <code>hidePackage</code>.
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>hidePackage</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getHidePackage = function() { return false; };

/**
 * Getter for property <code>lrepObject</code>.
 * The LREP object for which as transport request has to be selected
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>lrepObject</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getLrepObject = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.comp.transport.TransportDialog.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.transport.TransportDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>pkg</code>.
 * An ABAP package that can be used as default for the ABAP package selection.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>pkg</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getPkg = function() { return ""; };

/**
 * Getter for property <code>transports</code>.
 * The set of ABAP transport requests that can be selected by a user.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>transports</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getTransports = function() { return null; };

/**
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * @param {boolean}
 *            bHide if set to <code>true</code>, the package selection is hidden.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setHidePackage = function(bHide) {  };

/**
 * The LREP object for which as transport request has to be selected. 
 * The property can only be set once and afterwards it cannot be changed.
 * @param {object}
 *            oObject an LREP object for which as transport request has to be selected. The object has the attributes name, namespace and type.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setLrepObject = function(oObject) {  };

/**
 * An ABAP package that can be used as default for the ABAP package selection.
 * The property can only be set once and afterwards it cannot be changed.
 * @param {string}
 *            sPackage an ABAP package that can be used as default for the ABAP package selection.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setPkg = function(sPackage) {  };

/**
 * The set of ABAP transport requests that can be selected by a user.
 * @param {array}
 *            aSelection the set of ABAP transport requests that can be selected by a user.
 * @public          
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setTransports = function(aSelection) {  };


// ---- sap.ui.comp.valuehelpdialog.ValueHelpDialog --------------------------------------------------------------------------

/**
 * Constructor for a new valuehelpdialog/ValueHelpDialog.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getBasicSearchText basicSearchText} : string</li>
 * <li>{@link #getSupportMultiselect supportMultiselect} : boolean (default: true)</li>
 * <li>{@link #getSupportRanges supportRanges} : boolean (default: false)</li>
 * <li>{@link #getDescriptionKey descriptionKey} : string</li>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getSupportRangesOnly supportRangesOnly} : boolean (default: false)</li>
 * <li>{@link #getMaxIncludeRanges maxIncludeRanges} : string (default: -1)</li>
 * <li>{@link #getMaxExcludeRanges maxExcludeRanges} : string (default: -1)</li>
 * <li>{@link #getDisplayFormat displayFormat} : string</li>
 * <li>{@link #getTokenDisplayBehaviour tokenDisplayBehaviour} : string</li>
 * <li>{@link #getFilterMode filterMode} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterBar filterBar} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ValueHelpDialog Control can be used to implement an F4 value help for a multi-input field.
 * @extends sap.m.Dialog
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog = function(sId,mSettings) {};
/**
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * @since 1.24
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * @since 1.24
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.ok = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br> itself.
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'ok' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br> itself.
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Destroys the filterBar in the aggregation
 * named <code>filterBar</code>.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.destroyFilterBar = function() { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'ok' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Creates a new subclass of class sap.ui.comp.valuehelpdialog.ValueHelpDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @protected
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Fire event ok to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @protected
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Getter for property <code>basicSearchText</code>.
 * This property defines the value for the basic search field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>basicSearchText</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getBasicSearchText = function() { return ""; };

/**
 * Getter for property <code>descriptionKey</code>.
 * This property defines the column/key name used for the token text.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>descriptionKey</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDescriptionKey = function() { return ""; };

/**
 * Getter for property <code>displayFormat</code>.
 * This represents the displayFormat of the Range Values. With the value "UpperCase" the entered value of the Range will be converted to upperCase.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>displayFormat</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDisplayFormat = function() { return ""; };

/**
 * return current FilterBar of Value Help dialog.
 * @public
 * @since 1.24
 * @returns {FilterBar/SmartFilterBar} the current FilterBar instance
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterBar = function() { return null; };

/**
 * Getter for property <code>filterMode</code>.
 * set the dialog into a FilterDialog mode, which only shows ranges and hide the tokens.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>filterMode</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterMode = function() { return false; };

/**
 * Getter for property <code>key</code>.
 * This is the key property of the OData service for handling in the table and tokens
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getKey = function() { return ""; };

/**
 * Getter for property <code>maxExcludeRanges</code>.
 * defines the max number of exclude ranges
 * 
 * Default value is <code>-1</code>
 * @return {string} the value of property <code>maxExcludeRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxExcludeRanges = function() { return ""; };

/**
 * Getter for property <code>maxIncludeRanges</code>.
 * defines the max number of include ranges.
 * 
 * Default value is <code>-1</code>
 * @return {string} the value of property <code>maxIncludeRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxIncludeRanges = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.valuehelpdialog.ValueHelpDialog.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>supportMultiselect</code>.
 * This property enables multi-selection in a table.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>supportMultiselect</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportMultiselect = function() { return false; };

/**
 * Getter for property <code>supportRanges</code>.
 * This property enables the Ranges button on the dialog.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>supportRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRanges = function() { return false; };

/**
 * Getter for property <code>supportRangesOnly</code>.
 * When this property is set to true, the value help dialog only shows range tokens.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>supportRangesOnly</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRangesOnly = function() { return false; };

/**
 * gives access to the internal table instance
 * @public
 * @since 1.28
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getTable = function() {  };

/**
 * Getter for property <code>tokenDisplayBehaviour</code>.
 * This represents how the item token text should be displayed on the ValueHelpDialog.
 * Use one of the valid sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR const values.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>tokenDisplayBehaviour</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getTokenDisplayBehaviour = function() { return ""; };

/**
 * Initialize the control
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.init = function() {  };

/**
 * opens the dialog when SupportRangesOnly is set to True we directly show the Ranges part
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.open = function() {  };

/**
 * Reset the table binding and change the table NoDataText to "Please press Search Button"
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.resetTableState = function() {  };

/**
 * sets the Basic search text. The value will be set into the basic search field of the Filterbar
 * @public
 * @since 1.24
 * @param {string} sText the text for the basic search field
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setBasicSearchText = function(sText) {  };

/**
 * Setter for property <code>descriptionKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDescriptionKey new value for property <code>descriptionKey</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDescriptionKey = function(sDescriptionKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Setter for property <code>displayFormat</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDisplayFormat new value for property <code>displayFormat</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDisplayFormat = function(sDisplayFormat) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * setter for the supported Exclude range operations array
 * @public
 * @since 1.24
 * @param {array} array of Range operations [sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT,
 *        sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EQ]
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setExcludeRangeOperations = function(array) {  };

/**
 * sets the FilterBar into the Value Help dialog.
 * @public
 * @since 1.24
 * @param {FilterBar/SmartFilterBar} oControl
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterBar = function(oControl) {  };

/**
 * Setter for property <code>filterMode</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFilterMode new value for property <code>filterMode</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterMode = function(bFilterMode) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * setter for the supported Include range operations array
 * @public
 * @since 1.24
 * @param {array} array of Range operations [sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT,
 *        sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EQ]
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setIncludeRangeOperations = function(array) {  };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKey = function(sKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * setter for a keys array
 * @public
 * @since 1.24
 * @param {array} array of strings with the keys
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKeys = function(array) {  };

/**
 * Setter for property <code>maxExcludeRanges</code>.
 * 
 * Default value is <code>-1</code>.
 * @param {string} sMaxExcludeRanges new value for property <code>maxExcludeRanges</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxExcludeRanges = function(sMaxExcludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Setter for property <code>maxIncludeRanges</code>.
 * 
 * Default value is <code>-1</code>.
 * @param {string} sMaxIncludeRanges new value for property <code>maxIncludeRanges</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxIncludeRanges = function(sMaxIncludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * setter for a RangeKeyFields array
 * @public
 * @since 1.24
 * @param {array} array of Range KeyFields [{key: "CompanyCode", label: "ID"}, {key:"CompanyName", label : "Name"}]
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setRangeKeyFields = function(array) {  };

/**
 * sets the support for multiselection.
 * @public
 * @since 1.24
 * @param {boolean} bEnabled enabled or disabled multiselection
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportMultiselect = function(bEnabled) {  };

/**
 * sets the support for ranges. When you disable ranges the dialog does not provide a "Define Condition" link in the header which opens the ranges UI
 * in the value help dialog.
 * @public
 * @since 1.24
 * @param {boolean} bEnabled enabled or disabled ranges support
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRanges = function(bEnabled) {  };

/**
 * Setter for property <code>supportRangesOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSupportRangesOnly new value for property <code>supportRangesOnly</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRangesOnly = function(bSupportRangesOnly) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * sets the Title of the dialog. The value will be used for the different titles which we display on the dialog. The dialog title changes depending on
 * the content. Select: {sTitle} Define Conditions: {sTitle} Selected Items: {sTitle}
 * @public
 * @since 1.24
 * @param {string} sTitle
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTitle = function(sTitle) {  };

/**
 * Setter for property <code>tokenDisplayBehaviour</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTokenDisplayBehaviour new value for property <code>tokenDisplayBehaviour</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokenDisplayBehaviour = function(sTokenDisplayBehaviour) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * sets the array of tokens. The sap.mTokens will be added into the Dialog Tokenizer "Selected Items" or "Excluded Items". normal Tokens will added
 * into the Selected Items Tokenizer and selected in the table new sap.m.Token({key: "0001", text:"SAP A.G. (0001)"}); Tokens with the extra data
 * "range" will be handled as Range tokens or exclude Range tokens. new sap.m.Token({key: "i1", text: "ID: a..z"}).data("range", { "exclude": false,
 * "operation": sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT, "keyField": "CompanyCode", "value1": "a", "value2": "z"}); You the the
 * Selected or Range tokens back via the Ok event in the parameters
 * @public
 * @since 1.24
 * @param {array} aTokens the complete list of tokens
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokens = function(aTokens) {  };

/**
 * Change the table NoDataText to "No Data found!"
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.TableStateDataFilled = function() {  };

/**
 * Change the table NoDataText to "Searching..."
 * @public
 * @since 1.28
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.TableStateDataSearching = function() {  };

/**
 * Change the table NoDataText to "Please press Search Button"
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.TableStateSearchData = function() {  };

/**
 * updates the selection of rows in the table. should be called after a binding update of the table.
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.update = function() {  };


// ---- sap.ui.comp.variants.EditableVariantItem --------------------------------------------------------------------------

/**
 * Constructor for a new variants/EditableVariantItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li>
 * <li>{@link #getLabelReadOnly labelReadOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ColumnListItem#constructor sap.m.ColumnListItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Editable Variant List item for the Management Popup
 * @extends sap.m.ColumnListItem
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.EditableVariantItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.variants.EditableVariantItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ColumnListItem.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.EditableVariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>accessOptions</code>.
 * Flags for a variant to indicate why it might be read-only
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>accessOptions</code>
 * @since 1.26.0
 * @deprecated Since version 1.28. 
 * AccessOptions have been replaced by labelReadOnly
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * Getter for property <code>global</code>.
 * Indicator if a variant is visible for all users.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>global</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getGlobal = function() { return false; };

/**
 * Getter for property <code>key</code>.
 * Key of the List Item
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getKey = function() { return ""; };

/**
 * Getter for property <code>labelReadOnly</code>.
 * Indicates if the variant label can be changed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>labelReadOnly</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLabelReadOnly = function() { return false; };

/**
 * Getter for property <code>lifecyclePackage</code>.
 * ABAP Package the variant is assigned. Used for transport functionality
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>lifecyclePackage</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * Getter for property <code>lifecycleTransportId</code>.
 * Identifier of the transport object the variant is assigned to.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>lifecycleTransportId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.EditableVariantItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.EditableVariantItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>namespace</code>.
 * Variant namespace
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>namespace</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getNamespace = function() { return ""; };

/**
 * Getter for property <code>readOnly</code>.
 * Indication if variant can be changed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>readOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getReadOnly = function() { return false; };

/**
 * Setter for property <code>accessOptions</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAccessOptions new value for property <code>accessOptions</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @deprecated Since version 1.28. 
 * AccessOptions have been replaced by labelReadOnly
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>global</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bGlobal new value for property <code>global</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setKey = function(sKey) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>labelReadOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLabelReadOnly new value for property <code>labelReadOnly</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLabelReadOnly = function(bLabelReadOnly) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>lifecyclePackage</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLifecyclePackage new value for property <code>lifecyclePackage</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>lifecycleTransportId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLifecycleTransportId new value for property <code>lifecycleTransportId</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>namespace</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sNamespace new value for property <code>namespace</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Setter for property <code>readOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bReadOnly new value for property <code>readOnly</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.EditableVariantItem(); };


// ---- sap.ui.comp.variants.VariantItem --------------------------------------------------------------------------

/**
 * Constructor for a new variants/VariantItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExecuteOnSelection executeOnSelection} : boolean (default: false)</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li>
 * <li>{@link #getLabelReadOnly labelReadOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * VariantItem for VariantManagement item collection
 * @extends sap.ui.core.Item
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.variants.VariantItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>accessOptions</code>.
 * Flags for a variant to indicate why it might be read-only
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>accessOptions</code>
 * @since 1.26.0
 * @deprecated Since version 1.28. 
 * AccessOptions have been replaced by labelReadOnly
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * Getter for property <code>executeOnSelection</code>.
 * Attribute for usage in Smart Filter Bar
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>executeOnSelection</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getExecuteOnSelection = function() { return false; };

/**
 * Getter for property <code>global</code>.
 * Indicator if a variant is visible for all users.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>global</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getGlobal = function() { return false; };

/**
 * Getter for property <code>labelReadOnly</code>.
 * Indicates if the variant label can be changed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>labelReadOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLabelReadOnly = function() { return false; };

/**
 * Getter for property <code>lifecyclePackage</code>.
 * ABAP Package the variant is assigned. Used for transport functionality.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>lifecyclePackage</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * Getter for property <code>lifecycleTransportId</code>.
 * Identifier of the transport object the variant is assigned to.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>lifecycleTransportId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.VariantItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>namespace</code>.
 * Variant namespace
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>namespace</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getNamespace = function() { return ""; };

/**
 * Getter for property <code>readOnly</code>.
 * Is the user allowed to change the item's data
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>readOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getReadOnly = function() { return false; };

/**
 * Setter for property <code>accessOptions</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAccessOptions new value for property <code>accessOptions</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @deprecated Since version 1.28. 
 * AccessOptions have been replaced by labelReadOnly
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>executeOnSelection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExecuteOnSelection new value for property <code>executeOnSelection</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setExecuteOnSelection = function(bExecuteOnSelection) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>global</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bGlobal new value for property <code>global</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>labelReadOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLabelReadOnly new value for property <code>labelReadOnly</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLabelReadOnly = function(bLabelReadOnly) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>lifecyclePackage</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLifecyclePackage new value for property <code>lifecyclePackage</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>lifecycleTransportId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLifecycleTransportId new value for property <code>lifecycleTransportId</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>namespace</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sNamespace new value for property <code>namespace</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>readOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bReadOnly new value for property <code>readOnly</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.VariantItem(); };


// ---- sap.ui.comp.variants.VariantManagement --------------------------------------------------------------------------

/**
 * Constructor for a new variants/VariantManagement.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getInitialSelectionKey initialSelectionKey} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getDefaultVariantKey defaultVariantKey} : string</li>
 * <li>{@link #getSelectionKey selectionKey} : string</li>
 * <li>{@link #getShowCreateTile showCreateTile} : boolean (default: false)</li>
 * <li>{@link #getShowExecuteOnSelection showExecuteOnSelection} : boolean (default: false)</li>
 * <li>{@link #getShowShare showShare} : boolean (default: false)</li>
 * <li>{@link #getLifecycleSupport lifecycleSupport} : boolean (default: false)</li>
 * <li>{@link #getStandardItemText standardItemText} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li>
 * <li>{@link #getVariantItems variantItems} : sap.ui.comp.variants.VariantItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:manage manage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The variant management control can be used to manage variants, such as filter bar variants or table variants.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantManagement = function(sId,mSettings) {};
/**
 * Event fired if users apply changes to variants in the manage variants dialog.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.manage = function(oControlEvent) {  };

/**
 * Event fired if the save variant dialog is closed with ok for a variant.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.save = function(oControlEvent) {  };

/**
 * Event fired if a new variant is selected.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.select = function(oControlEvent) {  };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addItem = function(oItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Adds some variantItem into the aggregation named <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem to add; to add; if empty, nothing is inserted
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addVariantItem = function(oVariantItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'manage' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br> itself.
 * 
 * Event fired if users apply changes to variants in the manage variants dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachManage = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'save' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br> itself.
 * 
 * Event fired if the save variant dialog is closed with ok for a variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br> itself.
 * 
 * Event fired if a new variant is selected.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Removes the current variant selection and resets to default value.
 * @public
 * @since 1.22.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.clearVariantSelection = function() {  };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Destroys all the variantItems in the aggregation
 * named <code>variantItems</code>.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyVariantItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'manage' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachManage = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'save' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSave = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Creates a new subclass of class sap.ui.comp.variants.VariantManagement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event manage to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireManage = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Fire event save to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSave = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSelect = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Getter for property <code>defaultVariantKey</code>.
 * Provides a string value to set the default variant. Used for the save dialog. Has no effect on the selected variant.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>defaultVariantKey</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getDefaultVariantKey = function() { return ""; };

/**
 * Getter for property <code>enabled</code>.
 * Enables or disables the control.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>initialSelectionKey</code>.
 * Provides a string value to set the initially selected variant.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>initialSelectionKey</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getInitialSelectionKey = function() { return ""; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation for items displayed by the variant management control.
 * @return {sap.ui.core.Item[]}
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getItems = function() { return new Array(); };

/**
 * Getter for property <code>lifecycleSupport</code>.
 * Enables the lifecycle support for VariantItems.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>lifecycleSupport</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getLifecycleSupport = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.VariantManagement.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantManagement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selectionKey</code>.
 * The key of the currently selected item. Returns null if the default item ist selected.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>selectionKey</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getSelectionKey = function() { return ""; };

/**
 * Getter for property <code>showCreateTile</code>.
 * Indicates that a Create Tile is visible in the Create dialog.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showCreateTile</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowCreateTile = function() { return false; };

/**
 * Getter for property <code>showExecuteOnSelection</code>.
 * Indicates that Execute on Selection is visible in the Create and in the Management Dialog
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showExecuteOnSelection</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowExecuteOnSelection = function() { return false; };

/**
 * Getter for property <code>showShare</code>.
 * Indicates that a share function is available in Variant Management
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showShare</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowShare = function() { return false; };

/**
 * Getter for property <code>standardItemText</code>.
 * Alternative text for the "Standard" item.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>standardItemText</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getStandardItemText = function() { return ""; };

/**
 * Getter for aggregation <code>variantItems</code>.<br/>
 * Main aggregation for variant items displayed by the Variant Management control
 * @return {sap.ui.comp.variants.VariantItem[]}
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getVariantItems = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.variants.VariantItem</code> in the aggregation named <code>variantItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.variants.VariantItem}
 *           oVariantItem the variantItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfVariantItem = function(oVariantItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Inserts a variantItem into the aggregation named <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the variantItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the variantItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the variantItem is inserted at
 *              the last position
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertVariantItem = function(oVariantItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>variantItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.variants.VariantItem[]} an array of the removed elements (might be empty)
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllVariantItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the itemto remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @since 1.22.0
 * @deprecated Since version 1.26.0. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * Removes an variantItem from the aggregation named <code>variantItems</code>.
 * @param {int | string | sap.ui.comp.variants.VariantItem} vVariantItem the variantItemto remove or its index or id
 * @return {sap.ui.comp.variants.VariantItem} the removed variantItem or null
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeVariantItem = function(vVariantItem) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Setter for property <code>defaultVariantKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDefaultVariantKey new value for property <code>defaultVariantKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setDefaultVariantKey = function(sDefaultVariantKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setEnabled = function(bEnabled) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>initialSelectionKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sInitialSelectionKey new value for property <code>initialSelectionKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setInitialSelectionKey = function(sInitialSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>lifecycleSupport</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLifecycleSupport new value for property <code>lifecycleSupport</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setLifecycleSupport = function(bLifecycleSupport) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>selectionKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSelectionKey new value for property <code>selectionKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setSelectionKey = function(sSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>showCreateTile</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowCreateTile new value for property <code>showCreateTile</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowCreateTile = function(bShowCreateTile) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>showExecuteOnSelection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowExecuteOnSelection new value for property <code>showExecuteOnSelection</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowExecuteOnSelection = function(bShowExecuteOnSelection) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>showShare</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowShare new value for property <code>showShare</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowShare = function(bShowShare) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Setter for property <code>standardItemText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sStandardItemText new value for property <code>standardItemText</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setStandardItemText = function(sStandardItemText) { return new sap.ui.comp.variants.VariantManagement(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.comp.personalization.ChangeType --------------------------------------------------------------------------

/**
 * Change is applied to model but not applied to table 
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.ModelChanged = "";

/**
 * Change is applied to model and to table 
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.TableChanged = "";

/**
 * Not changed 
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.Unchanged = "";


// ---- sap.ui.comp.personalization.ResetType --------------------------------------------------------------------------

/**
 * Reset back to Restore (i.e. the version of the table with which the controller was instantiated or via setter
 * updated) was triggered (either via API or via reset button) 
 * @public
 * 
 */
sap.ui.comp.personalization.ResetType.ResetFull = "";

/**
 * Reset back to the CurrentVariant was triggered
 * @public
 * 
 */
sap.ui.comp.personalization.ResetType.ResetPartial = "";


// ---- sap.ui.comp.smartfield.ControlType --------------------------------------------------------------------------

/**
 * The SmartField chooses the control.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.auto = "";

/**
 * The SmartField displays a check box.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.checkBox = "";

/**
 * The SmartField displays a date picker.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.datePicker = "";

/**
 * The SmartField uses a drop down list box.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.dropDownList = "";

/**
 * The SmartField displays an input field.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.input = "";


// ---- sap.ui.comp.smartfield.DisplayBehaviour --------------------------------------------------------------------------

/**
 * The SmartField chooses the display behavior.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.auto = "";

/**
 * Description and ID are displayed for available values.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.descriptionAndId = "";

/**
 * Only the description is displayed for available values.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.descriptionOnly = "";

/**
 * ID and description are displayed for available values.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.idAndDescription = "";

/**
 * Shows the ID only.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.idOnly = "";


// ---- sap.ui.comp.smartfield.JSONType --------------------------------------------------------------------------

/**
 * Boolean Type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Boolean = "";

/**
 * The JavaScript Date Object
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Date = "";

/**
 * Date Time Type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.DateTime = "";

/**
 * Float type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Float = "";

/**
 * Integer type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Integer = "";

/**
 * The JavaScript primary type String
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.String = "";


// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

/**
 * An analytical table (sap.ui.table.AnalyticalTable) control shall be created as the content of the SmartTable, if no table already exists
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.AnalyticalTable = "";

/**
 * A responsive table (sap.m.Table) control that can be used on mobile devices shall be created as the content of the SmartTable, if no table already exists
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.ResponsiveTable = "";

/**
 * A table (sap.ui.table.Table) control shall be created as the content of the SmartTable, if no table already exists (default)
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.Table = "";

/**
 * A tree table (sap.ui.table.TreeTable) control shall be created as the content of the SmartTable, if no table already exists (TODO)
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.TreeTable = "";

