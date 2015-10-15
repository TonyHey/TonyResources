
// ---- sap.ui.unified --------------------------------------------------------------------------


// ---- sap.ui.unified.Calendar --------------------------------------------------------------------------

/**
 * Constructor for a new Calendar.
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
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getMonths months} : int (default: 1)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Basic Calendar.
 * This calendar is used for DatePickers
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar = function(sId,mSettings) {};
/**
 * Date selection was cancelled
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.cancel = function(oControlEvent) {  };

/**
 * Date selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.Calendar(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.Calendar(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.Calendar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.Calendar</code>.<br> itself.
 * 
 * Date selection was cancelled
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code>.<br/> itself.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.Calendar</code>.<br> itself.
 * 
 * Date selection changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code>.<br/> itself.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.destroySelectedDates = function() { return new sap.ui.unified.Calendar(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.destroySpecialDates = function() { return new sap.ui.unified.Calendar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Displays a date in the calendar but don't set the focus.
 * @param {object} oDate
 *         JavaScript date object for focused date.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar.prototype.displayDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Creates a new subclass of class sap.ui.unified.Calendar with name <code>sClassName</code>
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
sap.ui.unified.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Calendar.prototype.fireCancel = function(mArguments) { return new sap.ui.unified.Calendar(); };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Calendar.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.Calendar(); };

/**
 * Sets the focused date of the calendar.
 * @param {object} oDate
 *         JavaScript date object for focused date.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar.prototype.focusDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>intervalSelection</code>.
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.Calendar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.Calendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>months</code>.
 * number of months displayed
 * on phones always only one month is displayed
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>months</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getMonths = function() { return 0; };

/**
 * Getter for aggregation <code>selectedDates</code>.<br/>
 * Date Ranges for selected dates of the DatePicker
 * @return {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Getter for property <code>singleSelection</code>.
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSingleSelection = function() { return false; };

/**
 * Getter for aggregation <code>specialDates</code>.<br/>
 * Date Range with type to visualize special days in the Calendar.
 * If one day is assigned to more than one Type, only the first one will be used.
 * @return {sap.ui.unified.DateTypeRange[]}
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate the selectedDate whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate the specialDate whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.Calendar(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.Calendar(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.DateRange[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.DateTypeRange[]} an array of the removed elements (might be empty)
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate the selectedDateto remove or its index or id
 * @return {sap.ui.unified.DateRange} the removed selectedDate or null
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes an specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate the specialDateto remove or its index or id
 * @return {sap.ui.unified.DateTypeRange} the removed specialDate or null
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Setter for property <code>intervalSelection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection new value for property <code>intervalSelection</code>
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.Calendar(); };

/**
 * Setter for property <code>months</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iMonths new value for property <code>months</code>
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setMonths = function(iMonths) { return new sap.ui.unified.Calendar(); };

/**
 * Setter for property <code>singleSelection</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection new value for property <code>singleSelection</code>
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.Calendar(); };


// ---- sap.ui.unified.calendar --------------------------------------------------------------------------


// ---- sap.ui.unified.calendar.Header --------------------------------------------------------------------------

/**
 * Constructor for a new MonthPicker.
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
 * <li>{@link #getTextButton1 textButton1} : string</li>
 * <li>{@link #getAriaLabelButton1 ariaLabelButton1} : string</li>
 * <li>{@link #getTextButton2 textButton2} : string</li>
 * <li>{@link #getAriaLabelButton2 ariaLabelButton2} : string</li>
 * <li>{@link #getEnabledPrevious enabledPrevious} : boolean (default: true)</li>
 * <li>{@link #getEnabledNext enabledNext} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:pressPrevious pressPrevious} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressNext pressNext} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressButton1 pressButton1} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressButton2 pressButton2} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a calendar header
 * This is used inside the calendar. Not for stand alone usage
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Header = function(sId,mSettings) {};
/**
 * first button pressed (normally month)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressButton1 = function(oControlEvent) {  };

/**
 * second button pressed (normally year)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressButton2 = function(oControlEvent) {  };

/**
 * next button pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressNext = function(oControlEvent) {  };

/**
 * previous button pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressPrevious = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'pressButton1' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Header</code>.<br> itself.
 * 
 * first button pressed (normally month)
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressButton1 = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'pressButton2' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Header</code>.<br> itself.
 * 
 * second button pressed (normally year)
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressButton2 = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'pressNext' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Header</code>.<br> itself.
 * 
 * next button pressed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressNext = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'pressPrevious' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Header</code>.<br> itself.
 * 
 * previous button pressed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressPrevious = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pressButton1' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressButton1 = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pressButton2' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressButton2 = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pressNext' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressNext = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pressPrevious' event of this <code>sap.ui.unified.calendar.Header</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressPrevious = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.Header with name <code>sClassName</code>
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
sap.ui.unified.calendar.Header.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event pressButton1 to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressButton1 = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fire event pressButton2 to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressButton2 = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fire event pressNext to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressNext = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fire event pressPrevious to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressPrevious = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Getter for property <code>ariaLabelButton1</code>.
 * aria-label of the first button (normally month)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ariaLabelButton1</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getAriaLabelButton1 = function() { return ""; };

/**
 * Getter for property <code>ariaLabelButton2</code>.
 * aria-label of the second button (normally year)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ariaLabelButton2</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getAriaLabelButton2 = function() { return ""; };

/**
 * Getter for property <code>enabledNext</code>.
 * enables the Next button
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabledNext</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getEnabledNext = function() { return false; };

/**
 * Getter for property <code>enabledPrevious</code>.
 * enables the previous button
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabledPrevious</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getEnabledPrevious = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.Header.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Header.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>textButton1</code>.
 * Text of the first button (normally month)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>textButton1</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getTextButton1 = function() { return ""; };

/**
 * Getter for property <code>textButton2</code>.
 * Text of the second button (normally year)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>textButton2</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getTextButton2 = function() { return ""; };

/**
 * Setter for property <code>ariaLabelButton1</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAriaLabelButton1 new value for property <code>ariaLabelButton1</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setAriaLabelButton1 = function(sAriaLabelButton1) { return new sap.ui.unified.calendar.Header(); };

/**
 * Setter for property <code>ariaLabelButton2</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAriaLabelButton2 new value for property <code>ariaLabelButton2</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setAriaLabelButton2 = function(sAriaLabelButton2) { return new sap.ui.unified.calendar.Header(); };

/**
 * Setter for property <code>enabledNext</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabledNext new value for property <code>enabledNext</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setEnabledNext = function(bEnabledNext) { return new sap.ui.unified.calendar.Header(); };

/**
 * Setter for property <code>enabledPrevious</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabledPrevious new value for property <code>enabledPrevious</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setEnabledPrevious = function(bEnabledPrevious) { return new sap.ui.unified.calendar.Header(); };

/**
 * Setter for property <code>textButton1</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTextButton1 new value for property <code>textButton1</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setTextButton1 = function(sTextButton1) { return new sap.ui.unified.calendar.Header(); };

/**
 * Setter for property <code>textButton2</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTextButton2 new value for property <code>textButton2</code>
 * @return {sap.ui.unified.calendar.Header} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setTextButton2 = function(sTextButton2) { return new sap.ui.unified.calendar.Header(); };


// ---- sap.ui.unified.calendar.Month --------------------------------------------------------------------------

/**
 * Constructor for a new calendar/Month.
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
 * <li>{@link #getDate date} : object</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a month with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * If used inside the calendar the properties and aggregation are directly taken from the parent
 * (To not duplicate and sync DateRanges and so on...)
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month = function(sId,mSettings) {};
/**
 * Date focus changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.date focused date
 * @param {boolean} oControlEvent.getParameters.otherMonth focused date is in an other month that the displayed one
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.focus = function(oControlEvent) {  };

/**
 * Date selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.calendar.Month(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ui.unified.calendar.Month</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Month</code>.<br> itself.
 * 
 * Date focus changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.Month</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.Month</code>.<br> itself.
 * 
 * Date selection changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * checks if a date is focusable in the current rendered output.
 * So if not rendered or in other month it is not focusable.
 * @param {object} oDate JavaScript date object for focused date.
 * @returns {boolean} flag if focusable
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month.prototype.checkDateFocusable = function(oDate) { return false; };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.destroySelectedDates = function() { return new sap.ui.unified.calendar.Month(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.destroySpecialDates = function() { return new sap.ui.unified.calendar.Month(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ui.unified.calendar.Month</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.Month</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * displays the month of a given date without setting the focus
 * @param {object} oDate JavaScript date object for focused date.
 * @returns {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month.prototype.displayDate = function(oDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.Month with name <code>sClassName</code>
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
sap.ui.unified.calendar.Month.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event focus to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'date' of type <code>object</code>focused date</li>
 * <li>'otherMonth' of type <code>boolean</code>focused date is in an other month that the displayed one</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Month.prototype.fireFocus = function(mArguments) { return new sap.ui.unified.calendar.Month(); };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Month.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.Month(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>date</code>.
 * the month including this date is rendered and this date is initial focused (if no other focus set)
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>date</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getDate = function() { return new Object(); };

/**
 * Getter for property <code>intervalSelection</code>.
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.Month.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Month.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>selectedDates</code>.<br/>
 * Date Ranges for selected dates of the DatePicker
 * @return {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Getter for property <code>showHeader</code>.
 * If set, a header with the month name is shown
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getShowHeader = function() { return false; };

/**
 * Getter for property <code>singleSelection</code>.
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSingleSelection = function() { return false; };

/**
 * Getter for aggregation <code>specialDates</code>.<br/>
 * Date Range with type to visualize special days in the Calendar.
 * If one day is assigned to more than one Type, only the first one will be used.
 * @return {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate the selectedDate whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate the specialDate whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.calendar.Month(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.calendar.Month(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.DateRange[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.DateTypeRange[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate the selectedDateto remove or its index or id
 * @return {sap.ui.unified.DateRange} the removed selectedDate or null
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes an specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate the specialDateto remove or its index or id
 * @return {sap.ui.unified.DateTypeRange} the removed specialDate or null
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Setter for property <code>date</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oDate new value for property <code>date</code>
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setDate = function(oDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Setter for property <code>intervalSelection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection new value for property <code>intervalSelection</code>
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.calendar.Month(); };

/**
 * Setter for property <code>showHeader</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHeader new value for property <code>showHeader</code>
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.unified.calendar.Month(); };

/**
 * Setter for property <code>singleSelection</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection new value for property <code>singleSelection</code>
 * @return {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.calendar.Month(); };


// ---- sap.ui.unified.calendar.MonthPicker --------------------------------------------------------------------------

/**
 * Constructor for a new MonthPicker.
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
 * <li>{@link #getMonth month} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
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
 * renders a MonthPicker with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthPicker = function(sId,mSettings) {};
/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.select = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.MonthPicker</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.MonthPicker</code>.<br> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthPicker</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.MonthPicker</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.MonthPicker with name <code>sClassName</code>
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
sap.ui.unified.calendar.MonthPicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.MonthPicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>month</code>.
 * The month is initial focused and selected
 * The value must be between 0 and 11
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>month</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.getMonth = function() { return 0; };

/**
 * Setter for property <code>month</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMonth new value for property <code>month</code>
 * @return {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.setMonth = function(iMonth) { return new sap.ui.unified.calendar.MonthPicker(); };


// ---- sap.ui.unified.calendar.YearPicker --------------------------------------------------------------------------

/**
 * Constructor for a new YearPicker.
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
 * <li>{@link #getYear year} : int (default: 2000)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
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
 * renders a YearPicker with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker = function(sId,mSettings) {};
/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.select = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.YearPicker</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.calendar.YearPicker</code>.<br> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.YearPicker</code>.<br/> itself.
 * @return {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.YearPicker</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.YearPicker with name <code>sClassName</code>
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
sap.ui.unified.calendar.YearPicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.YearPicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>year</code>.
 * The year is initial focused and selected
 * The value must be between 0 and 9999
 * 
 * Default value is <code>2000</code>
 * @return {int} the value of property <code>year</code>
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.getYear = function() { return 0; };

/**
 * displays the next page
 * @returns {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.nextPage = function() { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * displays the previous page
 * @returns {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.previousPage = function() { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Setter for property <code>year</code>.
 * 
 * Default value is <code>2000</code>.
 * @param {int} iYear new value for property <code>year</code>
 * @return {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.setYear = function(iYear) { return new sap.ui.unified.calendar.YearPicker(); };


// ---- sap.ui.unified.CalendarDayType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.unified.CalendarDayType.toString = function() { return ""; };

// ---- sap.ui.unified.CalendarLegend --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarLegend.
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
 * <li>{@link #getColumnWidth columnWidth} : sap.ui.core.CSSSize (default: 120px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.CalendarLegendItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A legend for the Calendar Control. Displays special dates colors with their corresponding description. The aggregation specialDates can be set herefor.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarLegend = function(sId,mSettings) {};
/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.CalendarLegendItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.addItem = function(oItem) { return new sap.ui.unified.CalendarLegend(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.unified.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.destroyItems = function() { return new sap.ui.unified.CalendarLegend(); };

/**
 * Creates a new subclass of class sap.ui.unified.CalendarLegend with name <code>sClassName</code>
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
sap.ui.unified.CalendarLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>columnWidth</code>.
 * Width of the columns created in which the items are arranged.
 * 
 * Default value is <code>120px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>columnWidth</code>
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.getColumnWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items to be displayed.
 * @return {sap.ui.unified.CalendarLegendItem[]}
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarLegend.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.unified.CalendarLegendItem</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.CalendarLegendItem}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.CalendarLegendItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.unified.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.CalendarLegend(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.CalendarLegendItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.CalendarLegendItem} vItem the itemto remove or its index or id
 * @return {sap.ui.unified.CalendarLegendItem} the removed item or null
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.removeItem = function(vItem) { return new sap.ui.unified.CalendarLegendItem(); };

/**
 * Setter for property <code>columnWidth</code>.
 * 
 * Default value is <code>120px</code>.
 * @param {sap.ui.core.CSSSize} sColumnWidth new value for property <code>columnWidth</code>
 * @return {sap.ui.unified.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.setColumnWidth = function(sColumnWidth) { return new sap.ui.unified.CalendarLegend(); };


// ---- sap.ui.unified.CalendarLegendItem --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarLegendItem.
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
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Item to be displayed in a CalendarLegend.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarLegendItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.CalendarLegendItem with name <code>sClassName</code>
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
sap.ui.unified.CalendarLegendItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegendItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>text</code>.
 * Text to be displayed for the item.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.getText = function() { return ""; };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.unified.CalendarLegendItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.setText = function(sText) { return new sap.ui.unified.CalendarLegendItem(); };


// ---- sap.ui.unified.ContentSwitcher --------------------------------------------------------------------------

/**
 * Constructor for a new ContentSwitcher.
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
 * <li>{@link #getAnimation animation} : string (default: None)</li>
 * <li>{@link #getActiveContent activeContent} : int (default: 1)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent1 content1} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent2 content2} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Switches between two control areas and animates it via CSS transitions
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.16.0
 * @experimental Since version 1.16.0. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ContentSwitcher = function(sId,mSettings) {};
/**
 * Adds some content1 into the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent1 = function(oContent1) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Adds some content2 into the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent2 = function(oContent2) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Destroys all the content1 in the aggregation
 * named <code>content1</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent1 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Destroys all the content2 in the aggregation
 * named <code>content2</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent2 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name <code>sClassName</code>
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
sap.ui.unified.ContentSwitcher.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>activeContent</code>.
 * The number of the currently active content (1 or 2).
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>activeContent</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getActiveContent = function() { return 0; };

/**
 * Getter for property <code>animation</code>.
 * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class.
 * See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
 * 
 * Default value is <code>None</code>
 * @return {string} the value of property <code>animation</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getAnimation = function() { return ""; };

/**
 * Getter for aggregation <code>content1</code>.<br/>
 * The controls that should be shown in the first content
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent1 = function() { return new Array(); };

/**
 * Getter for aggregation <code>content2</code>.<br/>
 * The controls that should be shown in the second content
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent2 = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.ContentSwitcher.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content1</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent1 the content1 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent1 = function(oContent1) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content2</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent2 the content2 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent2 = function(oContent2) { return 0; };

/**
 * Inserts a content1 into the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content1 should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content1 is inserted at
 *              the last position
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent1 = function(oContent1,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Inserts a content2 into the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content2 should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content2 is inserted at
 *              the last position
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent2 = function(oContent2,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Removes all the controls in the aggregation named <code>content1</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent1 = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content2</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent2 = function() { return new Array(); };

/**
 * Removes an content1 from the aggregation named <code>content1</code>.
 * @param {int | string | sap.ui.core.Control} vContent1 the content1to remove or its index or id
 * @return {sap.ui.core.Control} the removed content1 or null
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent1 = function(vContent1) { return new sap.ui.core.Control(); };

/**
 * Removes an content2 from the aggregation named <code>content2</code>.
 * @param {int | string | sap.ui.core.Control} vContent2 the content2to remove or its index or id
 * @return {sap.ui.core.Control} the removed content2 or null
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent2 = function(vContent2) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>activeContent</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iActiveContent new value for property <code>activeContent</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setActiveContent = function(iActiveContent) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Setter for property <code>animation</code>.
 * 
 * Default value is <code>None</code>.
 * @param {string} sAnimation new value for property <code>animation</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setAnimation = function(sAnimation) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Changes the currently active content to the other one. If content 1 is active, content 2 will
 * be activated and the other way around.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.switchContent = function() {  };


// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.unified.ContentSwitcherAnimation.toString = function() { return ""; };

// ---- sap.ui.unified.Currency --------------------------------------------------------------------------

/**
 * Constructor for a new Currency.
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
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getCurrency currency} : string</li>
 * <li>{@link #getMaxPrecision maxPrecision} : int (default: 3)</li>
 * <li>{@link #getUseSymbol useSymbol} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A text view which displays currency values and aligns them at the separator
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.21.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.Currency with name <code>sClassName</code>
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
sap.ui.unified.Currency.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>currency</code>.
 * The ISO 4217 currency code
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>currency</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getCurrency = function() { return ""; };

/**
 * Get symbol of the currency, if available
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency.prototype.getCurrencySymbol = function() { return ""; };

/**
 * The formatted value
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency.prototype.getFormattedValue = function() { return ""; };

/**
 * Getter for property <code>maxPrecision</code>.
 * Defines the space that is available for the precision of the various currencies.
 * 
 * Default value is <code>3</code>
 * @return {int} the value of property <code>maxPrecision</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getMaxPrecision = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.Currency.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.Currency.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>useSymbol</code>.
 * Show the currency symbol instead of the ISO currency code
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useSymbol</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getUseSymbol = function() { return false; };

/**
 * Getter for property <code>value</code>.
 * The currency value
 * 
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getValue = function() { return 0.0; };

/**
 * Setter for property <code>currency</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sCurrency new value for property <code>currency</code>
 * @return {sap.ui.unified.Currency} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setCurrency = function(sCurrency) { return new sap.ui.unified.Currency(); };

/**
 * Setter for property <code>maxPrecision</code>.
 * 
 * Default value is <code>3</code>.
 * @param {int} iMaxPrecision new value for property <code>maxPrecision</code>
 * @return {sap.ui.unified.Currency} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setMaxPrecision = function(iMaxPrecision) { return new sap.ui.unified.Currency(); };

/**
 * Setter for property <code>useSymbol</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseSymbol new value for property <code>useSymbol</code>
 * @return {sap.ui.unified.Currency} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setUseSymbol = function(bUseSymbol) { return new sap.ui.unified.Currency(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue new value for property <code>value</code>
 * @return {sap.ui.unified.Currency} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setValue = function(fValue) { return new sap.ui.unified.Currency(); };


// ---- sap.ui.unified.DateRange --------------------------------------------------------------------------

/**
 * Constructor for a new DateRange.
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
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getEndDate endDate} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Date range for use in DatePicker
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.DateRange = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.DateRange with name <code>sClassName</code>
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
sap.ui.unified.DateRange.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>endDate</code>.
 * Start date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>endDate</code>
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.getEndDate = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ui.unified.DateRange.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.DateRange.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>startDate</code>.
 * Start date for a date range. This must be a JavaScript date object.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.getStartDate = function() { return new Object(); };

/**
 * Setter for property <code>endDate</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oEndDate new value for property <code>endDate</code>
 * @return {sap.ui.unified.DateRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.setEndDate = function(oEndDate) { return new sap.ui.unified.DateRange(); };

/**
 * Setter for property <code>startDate</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oStartDate new value for property <code>startDate</code>
 * @return {sap.ui.unified.DateRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.DateRange(); };


// ---- sap.ui.unified.DateTypeRange --------------------------------------------------------------------------

/**
 * Constructor for a new DateTypeRange.
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
 * <li>{@link #getType type} : sap.ui.unified.CalendarDayType</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.DateRange#constructor sap.ui.unified.DateRange}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Date range with calendar day type information. Used to visualize special days in the Calendar.
 * @extends sap.ui.unified.DateRange
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.24.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.DateTypeRange = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.DateTypeRange with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.DateTypeRange.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.DateTypeRange.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.DateTypeRange.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>type</code>.
 * Type of the dayte range.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.unified.CalendarDayType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.unified.DateTypeRange.prototype.getType = function() { return new sap.ui.unified.CalendarDayType(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.unified.CalendarDayType} sType new value for property <code>type</code>
 * @return {sap.ui.unified.DateTypeRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateTypeRange.prototype.setType = function(sType) { return new sap.ui.unified.DateTypeRange(); };


// ---- sap.ui.unified.FileUploader --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploader.
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
 * <li>{@link #getValue value} : string (default: )</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getUploadUrl uploadUrl} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getUploadOnChange uploadOnChange} : boolean (default: false)</li>
 * <li>{@link #getAdditionalData additionalData} : string</li>
 * <li>{@link #getSameFilenameAllowed sameFilenameAllowed} : boolean (default: false)</li>
 * <li>{@link #getButtonText buttonText} : string</li>
 * <li>{@link #getFileType fileType} : string[]</li>
 * <li>{@link #getMultiple multiple} : boolean (default: false)</li>
 * <li>{@link #getMaximumFileSize maximumFileSize} : float</li>
 * <li>{@link #getMimeType mimeType} : string[]</li>
 * <li>{@link #getSendXHR sendXHR} : boolean (default: false)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getStyle style} : string</li>
 * <li>{@link #getButtonOnly buttonOnly} : boolean (default: false)</li>
 * <li>{@link #getUseMultipart useMultipart} : boolean (default: true)</li>
 * <li>{@link #getMaximumFilenameLength maximumFilenameLength} : int</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getIconOnly iconOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getParameters parameters} : sap.ui.unified.FileUploaderParameter[]</li>
 * <li>{@link #getHeaderParameters headerParameters} : sap.ui.unified.FileUploaderParameter[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadComplete uploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:typeMissmatch typeMissmatch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:fileSizeExceed fileSizeExceed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:fileAllowed fileAllowed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadProgress uploadProgress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadAborted uploadAborted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filenameLengthExceed filenameLengthExceed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader = function(sId,mSettings) {};
/**
 * Event is fired when the value of the file path has been changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue New file path value.
 * @param {object[]} oControlEvent.getParameters.files Files.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.change = function(oControlEvent) {  };

/**
 * Event is fired when the file is allowed for upload on client side.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.fileAllowed = function(oControlEvent) {  };

/**
 * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The filename, which is longer than specified by the value of the property maximumFilenameLength.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.filenameLengthExceed = function(oControlEvent) {  };

/**
 * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported by Internet Explorer 8 and 9 (same restriction as for the property maximumFileSize).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileSize The size in MB of a file to be uploaded.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.fileSizeExceed = function(oControlEvent) {  };

/**
 * Event is fired when the type of a file does not match the mimeType or fileType property.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileType The file ending of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.mimeType The MIME type of a file to be uploaded.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.typeMissmatch = function(oControlEvent) {  };

/**
 * Event is fired after the current upload has been aborted.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 8 or 9.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadAborted = function(oControlEvent) {  };

/**
 * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx.
 * The uploads actual progress can be retrieved via the 'uploadProgress' Event.
 * However this covers only the client side of the Upload process and does not give any success status from the server.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.response Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} oControlEvent.getParameters.readyStateXHR ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.
 * @param {string} oControlEvent.getParameters.status Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.
 * @param {string} oControlEvent.getParameters.responseRaw Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.
 * @param {object} oControlEvent.getParameters.headers Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadComplete = function(oControlEvent) {  };

/**
 * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload. Depending on file size, band width and used browser the event is fired once or multiple times.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 8 or 9.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.lengthComputable Indicates whether or not the relative upload progress can be calculated out of loaded and total.
 * @param {float} oControlEvent.getParameters.loaded The number of bytes of the file which have been uploaded by to the time the event was fired.
 * @param {float} oControlEvent.getParameters.total The total size of the file to be uploaded in byte.
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadProgress = function(oControlEvent) {  };

/**
 * Aborts the currently running upload.
 * @type void
 * @public
 * @since 1.24.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.abort = function() { return null; };

/**
 * Adds some headerParameter into the aggregation named <code>headerParameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.addHeaderParameter = function(oHeaderParameter) { return new sap.ui.unified.FileUploader(); };

/**
 * Adds some parameter into the aggregation named <code>parameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.addParameter = function(oParameter) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired when the value of the file path has been changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired when the file is allowed for upload on client side.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFileAllowed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'filenameLengthExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFilenameLengthExceed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported by Internet Explorer 8 and 9 (same restriction as for the property maximumFileSize).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFileSizeExceed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired when the type of a file does not match the mimeType or fileType property.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachTypeMissmatch = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'uploadAborted' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired after the current upload has been aborted.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 8 or 9.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadAborted = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx.
 * The uploads actual progress can be retrieved via the 'uploadProgress' Event.
 * However this covers only the client side of the Upload process and does not give any success status from the server.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadComplete = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'uploadProgress' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br> itself.
 * 
 * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload. Depending on file size, band width and used browser the event is fired once or multiple times.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 8 or 9.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadProgress = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Clears the content of the FileUploader. The attached additional data however is retained.
 * @type void
 * @public
 * @since 1.25.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.clear = function() { return null; };

/**
 * Destroys all the headerParameters in the aggregation
 * named <code>headerParameters</code>.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.destroyHeaderParameters = function() { return new sap.ui.unified.FileUploader(); };

/**
 * Destroys all the parameters in the aggregation
 * named <code>parameters</code>.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.destroyParameters = function() { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFileAllowed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'filenameLengthExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFilenameLengthExceed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFileSizeExceed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachTypeMissmatch = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadAborted' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadAborted = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadComplete = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadProgress' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadProgress = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Creates a new subclass of class sap.ui.unified.FileUploader with name <code>sClassName</code>
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
sap.ui.unified.FileUploader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code>New file path value.</li>
 * <li>'files' of type <code>object[]</code>Files.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireChange = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event fileAllowed to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFileAllowed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event filenameLengthExceed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The filename, which is longer than specified by the value of the property maximumFilenameLength.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFilenameLengthExceed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event fileSizeExceed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'fileSize' of type <code>string</code>The size in MB of a file to be uploaded.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFileSizeExceed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event typeMissmatch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'fileType' of type <code>string</code>The file ending of a file to be uploaded.</li>
 * <li>'mimeType' of type <code>string</code>The MIME type of a file to be uploaded.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireTypeMissmatch = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event uploadAborted to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadAborted = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event uploadComplete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'response' of type <code>string</code>Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * <li>'readyStateXHR' of type <code>string</code>ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.</li>
 * <li>'status' of type <code>string</code>Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.</li>
 * <li>'responseRaw' of type <code>string</code>Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.</li>
 * <li>'headers' of type <code>object</code>Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadComplete = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fire event uploadProgress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'lengthComputable' of type <code>boolean</code>Indicates whether or not the relative upload progress can be calculated out of loaded and total.</li>
 * <li>'loaded' of type <code>float</code>The number of bytes of the file which have been uploaded by to the time the event was fired.</li>
 * <li>'total' of type <code>float</code>The total size of the file to be uploaded in byte.</li>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 8 and 9.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadProgress = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Getter for property <code>additionalData</code>.
 * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>additionalData</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getAdditionalData = function() { return ""; };

/**
 * Getter for property <code>buttonOnly</code>.
 * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>buttonOnly</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getButtonOnly = function() { return false; };

/**
 * Getter for property <code>buttonText</code>.
 * The Button text can be overwritten using this property.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>buttonText</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getButtonText = function() { return ""; };

/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have different colors, depending on customer settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>fileType</code>.
 * The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented.
 * Example: ["jpg", "png", "bmp"].
 * 
 * Default value is <code>undefined</code>
 * @return {string[]} the value of property <code>fileType</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getFileType = function() { return new Array(); };

/**
 * Getter for aggregation <code>headerParameters</code>.<br/>
 * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer 8 and 9.
 * @return {sap.ui.unified.FileUploaderParameter[]}
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getHeaderParameters = function() { return new Array(); };

/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the button.
 * This can be an URI to an image or an icon font URI.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconFirst</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconFirst = function() { return false; };

/**
 * Getter for property <code>iconHovered</code>.
 * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconOnly</code>.
 * If set to true, the button is displayed without any text.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>iconOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconOnly = function() { return false; };

/**
 * Getter for property <code>iconSelected</code>.
 * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>maximumFilenameLength</code>.
 * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>maximumFilenameLength</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMaximumFilenameLength = function() { return 0; };

/**
 * Getter for property <code>maximumFileSize</code>.
 * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 8 and 9.
 * 
 * Default value is <code>undefined</code>
 * @return {float} the value of property <code>maximumFileSize</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMaximumFileSize = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ui.unified.FileUploader.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>mimeType</code>.
 * The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 8 and 9.
 * Example: mimeType ["image/png", "image/jpeg"].
 * 
 * Default value is <code>undefined</code>
 * @return {string[]} the value of property <code>mimeType</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMimeType = function() { return new Array(); };

/**
 * Getter for property <code>multiple</code>.
 * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 8 and 9.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>multiple</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMultiple = function() { return false; };

/**
 * Getter for property <code>name</code>.
 * Unique control name for identification on the server side after sending data to the server.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getName = function() { return ""; };

/**
 * Getter for aggregation <code>parameters</code>.<br/>
 * The parameters for the FileUploader which are rendered as a hidden inputfield.
 * @return {sap.ui.unified.FileUploaderParameter[]}
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getParameters = function() { return new Array(); };

/**
 * Getter for property <code>placeholder</code>.
 * Placeholder for the text field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getPlaceholder = function() { return ""; };

/**
 * Getter for property <code>sameFilenameAllowed</code>.
 * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sameFilenameAllowed</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getSameFilenameAllowed = function() { return false; };

/**
 * Getter for property <code>sendXHR</code>.
 * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 8 and 9.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sendXHR</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getSendXHR = function() { return false; };

/**
 * Getter for property <code>style</code>.
 * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>style</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getStyle = function() { return ""; };

/**
 * Getter for property <code>uploadOnChange</code>.
 * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>uploadOnChange</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUploadOnChange = function() { return false; };

/**
 * Getter for property <code>uploadUrl</code>.
 * Used when URL address is on a remote server.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>uploadUrl</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUploadUrl = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>useMultipart</code>.
 * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useMultipart</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUseMultipart = function() { return false; };

/**
 * Getter for property <code>value</code>.
 * Value of the path for file upload.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getValue = function() { return ""; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * Specifies the displayed control width.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>headerParameters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.FileUploaderParameter}
 *           oHeaderParameter the headerParameter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.indexOfHeaderParameter = function(oHeaderParameter) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>parameters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.FileUploaderParameter}
 *           oParameter the parameter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.indexOfParameter = function(oParameter) { return 0; };

/**
 * Inserts a headerParameter into the aggregation named <code>headerParameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerParameter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerParameter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerParameter is inserted at
 *              the last position
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.insertHeaderParameter = function(oHeaderParameter,iIndex) { return new sap.ui.unified.FileUploader(); };

/**
 * Inserts a parameter into the aggregation named <code>parameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the parameter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the parameter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the parameter is inserted at
 *              the last position
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.insertParameter = function(oParameter,iIndex) { return new sap.ui.unified.FileUploader(); };

/**
 * Removes all the controls in the aggregation named <code>headerParameters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.FileUploaderParameter[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeAllHeaderParameters = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>parameters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.FileUploaderParameter[]} an array of the removed elements (might be empty)
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeAllParameters = function() { return new Array(); };

/**
 * Removes an headerParameter from the aggregation named <code>headerParameters</code>.
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vHeaderParameter the headerParameterto remove or its index or id
 * @return {sap.ui.unified.FileUploaderParameter} the removed headerParameter or null
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeHeaderParameter = function(vHeaderParameter) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Removes an parameter from the aggregation named <code>parameters</code>.
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vParameter the parameterto remove or its index or id
 * @return {sap.ui.unified.FileUploaderParameter} the removed parameter or null
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeParameter = function(vParameter) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Setter for property <code>additionalData</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAdditionalData new value for property <code>additionalData</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setAdditionalData = function(sAdditionalData) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>buttonOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bButtonOnly new value for property <code>buttonOnly</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setButtonOnly = function(bButtonOnly) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>buttonText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sButtonText new value for property <code>buttonText</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setButtonText = function(sButtonText) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>fileType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string[]} sFileType new value for property <code>fileType</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setFileType = function(sFileType) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIcon = function(sIcon) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>iconFirst</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIconFirst new value for property <code>iconFirst</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconFirst = function(bIconFirst) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>iconHovered</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconHovered new value for property <code>iconHovered</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>iconOnly</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIconOnly new value for property <code>iconOnly</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconOnly = function(bIconOnly) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>iconSelected</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconSelected new value for property <code>iconSelected</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>maximumFilenameLength</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iMaximumFilenameLength new value for property <code>maximumFilenameLength</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMaximumFilenameLength = function(iMaximumFilenameLength) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>maximumFileSize</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {float} fMaximumFileSize new value for property <code>maximumFileSize</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMaximumFileSize = function(fMaximumFileSize) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>mimeType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string[]} sMimeType new value for property <code>mimeType</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMimeType = function(sMimeType) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>multiple</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMultiple new value for property <code>multiple</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMultiple = function(bMultiple) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setName = function(sName) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>placeholder</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sPlaceholder new value for property <code>placeholder</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>sameFilenameAllowed</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSameFilenameAllowed new value for property <code>sameFilenameAllowed</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setSameFilenameAllowed = function(bSameFilenameAllowed) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>sendXHR</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSendXHR new value for property <code>sendXHR</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setSendXHR = function(bSendXHR) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>style</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sStyle new value for property <code>style</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setStyle = function(sStyle) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>uploadOnChange</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUploadOnChange new value for property <code>uploadOnChange</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUploadOnChange = function(bUploadOnChange) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>uploadUrl</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sUploadUrl new value for property <code>uploadUrl</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUploadUrl = function(sUploadUrl) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>useMultipart</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseMultipart new value for property <code>useMultipart</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUseMultipart = function(bUseMultipart) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setValue = function(sValue) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setValueState = function(sValueState) { return new sap.ui.unified.FileUploader(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setWidth = function(sWidth) { return new sap.ui.unified.FileUploader(); };

/**
 * Starts the upload (as defined by uploadUrl)
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.upload = function() { return null; };


// ---- sap.ui.unified.FileUploaderParameter --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploaderParameter.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploaderParameter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.FileUploaderParameter with name <code>sClassName</code>
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
sap.ui.unified.FileUploaderParameter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.FileUploaderParameter.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploaderParameter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * The name of the hidden inputfield.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>value</code>.
 * The value of the hidden inputfield.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.getValue = function() { return ""; };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.unified.FileUploaderParameter} <code>this</code> to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.setName = function(sName) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.unified.FileUploaderParameter} <code>this</code> to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.setValue = function(sValue) { return new sap.ui.unified.FileUploaderParameter(); };


// ---- sap.ui.unified.Menu --------------------------------------------------------------------------

/**
 * Constructor for a new Menu.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getAriaDescription ariaDescription} : string</li>
 * <li>{@link #getMaxVisibleItems maxVisibleItems} : int (default: 0)</li>
 * <li>{@link #getPageSize pageSize} : int (default: 5)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.MenuItemBase[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A container for menu items. When the space in the browser is not large enough to display all defined items, a scroll bar is provided.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Menu = function(sId,mSettings) {};
/**
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.itemSelect = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.Menu(); };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItemBase}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.addItem = function(oItem) { return new sap.ui.unified.Menu(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.unified.Menu</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.Menu</code>.<br> itself.
 * 
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Menu</code>.<br/> itself.
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.Menu(); };

/**
 * Closes the menu
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Menu.prototype.close = function() { return null; };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.destroyItems = function() { return new sap.ui.unified.Menu(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.unified.Menu</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.ui.unified.Menu(); };

/**
 * Creates a new subclass of class sap.ui.unified.Menu with name <code>sClassName</code>
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
sap.ui.unified.Menu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event itemSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.unified.MenuItemBase</code>The selected item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Menu.prototype.fireItemSelect = function(mArguments) { return new sap.ui.unified.Menu(); };

/**
 * Getter for property <code>ariaDescription</code>.
 * The label/description provided for screen readers
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>ariaDescription</code>
 * @deprecated Since version 1.27.0
 * Please use association ariaLabelledBy instead.
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getAriaDescription = function() { return ""; };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * Disabled menus have other colors than enabled ones, depending on customer settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getEnabled = function() { return false; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items
 * @return {sap.ui.unified.MenuItemBase[]}
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getItems = function() { return new Array(); };

/**
 * Getter for property <code>maxVisibleItems</code>.
 * Max. number of items to be displayed before an overflow mechanimn appears. Values smaller than 1 mean infinite number of visible items.
 * The menu can not become larger than the screen height.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxVisibleItems</code>
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getMaxVisibleItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.Menu.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.Menu.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>pageSize</code>.
 * The number of items to be shifted up or down upon Page-up or Page-up key navigation. Values smaller than 1 mean infinite number of page items.
 * 
 * Default value is <code>5</code>
 * @return {int} the value of property <code>pageSize</code>
 * @since 1.25.0
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getPageSize = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.MenuItemBase</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.MenuItemBase}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItemBase}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.Menu(); };

/**
 * Opens the menu
 * @param {boolean} bWithKeyboard
 * 
 * An indicator whether the first item shall be highlighted, or not. It is highlighted in the case that the menu is opened via keyboard.
 * @param {object} oOpenerRef
 * 
 * DOMNode or sap.ui.core.Element that opens the menu; the DOMNode or sap.ui.core.Element will be focused again after the menu is closed. This parameter is optional.
 * @param {sap.ui.core.Dock} sMy
 * 
 * The popup content's reference position for docking.
 *         See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * @param {sap.ui.core.Dock} sAt
 * 
 * The 'of' element's reference point for docking to.
 *         See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * @param {object} oOf
 * 
 * The DOM element or sap.ui.core.Element to dock to.
 *         See also sap.ui.core.Popup.open.
 * @param {string} sOffset
 * 
 * The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the popup 10 pixels to the right).
 *         See also sap.ui.core.Popup.open.
 * @param {sap.ui.core.Collision} sCollision
 * 
 * The collision defines how the position of an element should be adjusted in case it overflows the window in some direction.
 *         See also sap.ui.core.Popup.open.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Menu.prototype.open = function(bWithKeyboard,oOpenerRef,sMy,sAt,oOf,sOffset,sCollision) { return null; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.MenuItemBase[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.MenuItemBase} vItem the itemto remove or its index or id
 * @return {sap.ui.unified.MenuItemBase} the removed item or null
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeItem = function(vItem) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Setter for property <code>ariaDescription</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAriaDescription new value for property <code>ariaDescription</code>
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @deprecated Since version 1.27.0
 * Please use association ariaLabelledBy instead.
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setAriaDescription = function(sAriaDescription) { return new sap.ui.unified.Menu(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.Menu(); };

/**
 * Setter for property <code>maxVisibleItems</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxVisibleItems new value for property <code>maxVisibleItems</code>
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setMaxVisibleItems = function(iMaxVisibleItems) { return new sap.ui.unified.Menu(); };

/**
 * Setter for property <code>pageSize</code>.
 * 
 * Default value is <code>5</code>.
 * @param {int} iPageSize new value for property <code>pageSize</code>
 * @return {sap.ui.unified.Menu} <code>this</code> to allow method chaining
 * @since 1.25.0
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setPageSize = function(iPageSize) { return new sap.ui.unified.Menu(); };


// ---- sap.ui.unified.MenuItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuItem.
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
 * <li>{@link #getText text} : string (default: )</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.MenuItemBase#constructor sap.ui.unified.MenuItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Smallest unit in the menu hierarchy. An item can be a direct part of a menu bar, of a menu, or of a sub menu.
 * @extends sap.ui.unified.MenuItemBase
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.MenuItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.MenuItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.MenuItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>text</code>.
 * Item text
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.getText = function() { return ""; };

/**
 * @protected
 * 
 */
sap.ui.unified.MenuItem.prototype.hover = function() {  };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.unified.MenuItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.MenuItem(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.unified.MenuItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.setText = function(sText) { return new sap.ui.unified.MenuItem(); };


// ---- sap.ui.unified.MenuItemBase --------------------------------------------------------------------------

/**
 * Constructor for a new MenuItemBase.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubmenu submenu} : sap.ui.unified.Menu</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides the standard properties for menu items.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.MenuItemBase = function(sId,mSettings) {};
/**
 * Event is fired when an item is selected. The event is also available for items having a sub menu.
 * A mouse click or space bar click on a sub menu item fires the event.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item Represents the current item
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.select = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.MenuItemBase</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.MenuItemBase</code>.<br> itself.
 * 
 * Event is fired when an item is selected. The event is also available for items having a sub menu.
 * A mouse click or space bar click on a sub menu item fires the event.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.MenuItemBase</code>.<br/> itself.
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Destroys the submenu in the aggregation
 * named <code>submenu</code>.
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.destroySubmenu = function() { return new sap.ui.unified.MenuItemBase(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.MenuItemBase</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Creates a new subclass of class sap.ui.unified.MenuItemBase with name <code>sClassName</code>
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
sap.ui.unified.MenuItemBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.unified.MenuItemBase</code>Represents the current item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Getter for property <code>enabled</code>.
 * Disabled items have different colors, depending on customer settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.MenuItemBase.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItemBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>startsSection</code>.
 * If set to true, a divider is displayed before the item
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>startsSection</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getStartsSection = function() { return false; };

/**
 * Getter for aggregation <code>submenu</code>.<br/>
 * Aggregation of a menu item's sub menu.
 * @return {sap.ui.unified.Menu}
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getSubmenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getVisible = function() { return false; };

/**
 * @param {boolean} bHovered
 * @param {object} oMenu
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.hover = function(bHovered,oMenu) {  };

/**
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.onAfterRendering = function() {  };

/**
 * @param {boolean} bOpened
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.onSubmenuToggle = function(bOpened) {  };

/**
 * @param {object} oRenderManager
 * @param {object} oItem
 * @param {object} oMenu
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.render = function(oRenderManager,oItem,oMenu) {  };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Setter for property <code>startsSection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bStartsSection new value for property <code>startsSection</code>
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Setter for the aggregated <code>submenu</code>.
 * @param {sap.ui.unified.Menu} oSubmenu the submenu to set
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setSubmenu = function(oSubmenu) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.unified.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setVisible = function(bVisible) { return new sap.ui.unified.MenuItemBase(); };


// ---- sap.ui.unified.MenuTextFieldItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuTextFieldItem.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.MenuItemBase#constructor sap.ui.unified.MenuItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Menu item which contains an text field. This menu item is e.g. helpful for filters.
 * The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @extends sap.ui.unified.MenuItemBase
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.MenuTextFieldItem = function(sId,mSettings) {};
/**
 * Destroys the submenu in the aggregation 
 * named <code>submenu</code>.
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.destroySubmenu = function() { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.MenuTextFieldItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuTextFieldItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>label</code>.
 * The label of the contained text field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuTextFieldItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>submenu</code>.<br/>
 * Aggregation of a menu item's sub menu.
 * @return {sap.ui.unified.Menu}
 * @public
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getSubmenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Getter for property <code>value</code>.
 * Value of the contained text field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getValue = function() { return ""; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabel new value for property <code>label</code>
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setLabel = function(sLabel) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Setter for the aggregated <code>submenu</code>.
 * @param {sap.ui.unified.Menu} oSubmenu
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setSubmenu = function(oSubmenu) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setValue = function(sValue) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setValueState = function(sValueState) { return new sap.ui.unified.MenuTextFieldItem(); };


// ---- sap.ui.unified.Shell --------------------------------------------------------------------------

/**
 * Constructor for a new Shell.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getShowCurtain showCurtain} : boolean</li>
 * <li>{@link #getShowCurtainPane showCurtainPane} : boolean</li>
 * <li>{@link #getSearchVisible searchVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCurtainContent curtainContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainPaneContent curtainPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeadItems headItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getHeadEndItems headEndItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li>
 * <li>{@link #getUser user} : sap.ui.unified.ShellHeadUserItem</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellLayout#constructor sap.ui.unified.ShellLayout}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The shell control is meant as root control (full-screen) of an application.
 * It was build as root control of the Fiori Launchpad application and provides the basic capabilities
 * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
 * do not use it for other scenarios than the root control usecase.
 * @extends sap.ui.unified.ShellLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.15.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Shell = function(sId,mSettings) {};
/**
 * Adds some curtainContent into the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainContent = function(oCurtainContent) { return new sap.ui.unified.Shell(); };

/**
 * Adds some curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainPaneContent = function(oCurtainPaneContent) { return new sap.ui.unified.Shell(); };

/**
 * Adds some headEndItem into the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadEndItem = function(oHeadEndItem) { return new sap.ui.unified.Shell(); };

/**
 * Adds some headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadItem = function(oHeadItem) { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the curtainContent in the aggregation
 * named <code>curtainContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainContent = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the curtainPaneContent in the aggregation
 * named <code>curtainPaneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainPaneContent = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the headEndItems in the aggregation
 * named <code>headEndItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadEndItems = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the header in the aggregation named <code>header</code>, but only if a custom header is set.
 * The default header can not be destroyed.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeader = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the headItems in the aggregation
 * named <code>headItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadItems = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the search in the aggregation
 * named <code>search</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroySearch = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the user in the aggregation
 * named <code>user</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyUser = function() { return new sap.ui.unified.Shell(); };

/**
 * Creates a new subclass of class sap.ui.unified.Shell with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.ShellLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>curtainContent</code>.<br/>
 * The content to appear in the curtain area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainContent = function() { return new Array(); };

/**
 * Getter for aggregation <code>curtainPaneContent</code>.<br/>
 * The content to appear in the pane area of the curtain.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainPaneContent = function() { return new Array(); };

/**
 * Getter for aggregation <code>headEndItems</code>.<br/>
 * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadEndItems = function() { return new Array(); };

/**
 * Getter for aggregation <code>headItems</code>.<br/>
 * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported. If a custom header is set this aggregation has no effect.
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadItems = function() { return new Array(); };

/**
 * Getter for property <code>icon</code>.
 * The application icon. If a custom header is set this property has no effect.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.Shell.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.Shell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the shell header. If a custom header is set this aggregation has no effect.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>searchVisible</code>.
 * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>searchVisible</code>
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearchVisible = function() { return false; };

/**
 * Getter for property <code>showCurtain</code>.
 * Shows / Hides the curtain.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>showCurtain</code>
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtain = function() { return false; };

/**
 * Getter for property <code>showCurtainPane</code>.
 * Shows / Hides the side pane on the curtain.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>showCurtainPane</code>
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtainPane = function() { return false; };

/**
 * Getter for aggregation <code>user</code>.<br/>
 * The user item which is rendered in the shell header beside the items. If a custom header is set this aggregation has no effect.
 * @return {sap.ui.unified.ShellHeadUserItem}
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getUser = function() { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCurtainContent the curtainContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainContent = function(oCurtainContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainPaneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCurtainPaneContent the curtainPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainPaneContent = function(oCurtainPaneContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headEndItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *           oHeadEndItem the headEndItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadEndItem = function(oHeadEndItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *           oHeadItem the headItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadItem = function(oHeadItem) { return 0; };

/**
 * Inserts a curtainContent into the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the curtainContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the curtainContent is inserted at
 *              the last position
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainContent = function(oCurtainContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the curtainPaneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the curtainPaneContent is inserted at
 *              the last position
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainPaneContent = function(oCurtainPaneContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a headEndItem into the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headEndItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headEndItem is inserted at
 *              the last position
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadEndItem = function(oHeadEndItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headItem is inserted at
 *              the last position
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadItem = function(oHeadItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Removes all the controls in the aggregation named <code>curtainContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>curtainPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainPaneContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>headEndItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadEndItems = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>headItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadItems = function() { return new Array(); };

/**
 * Removes an curtainContent from the aggregation named <code>curtainContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainContent the curtainContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainContent = function(vCurtainContent) { return new sap.ui.core.Control(); };

/**
 * Removes an curtainPaneContent from the aggregation named <code>curtainPaneContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainPaneContent the curtainPaneContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainPaneContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainPaneContent = function(vCurtainPaneContent) { return new sap.ui.core.Control(); };

/**
 * Removes an headEndItem from the aggregation named <code>headEndItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadEndItem the headEndItemto remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headEndItem or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadEndItem = function(vHeadEndItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Removes an headItem from the aggregation named <code>headItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadItem the headItemto remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headItem or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadItem = function(vHeadItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for the aggregated <code>header</code>.
 * @param {sap.ui.core.Control} oHeader The Control which should be rendered within the Shell header or <code>null</code> to render the default Shell header.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setHeader = function(oHeader) { return new sap.ui.unified.Shell(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setIcon = function(sIcon) { return new sap.ui.unified.Shell(); };

/**
 * Setter for the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch the search to set
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearch = function(oSearch) { return new sap.ui.unified.Shell(); };

/**
 * Setter for property <code>searchVisible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSearchVisible new value for property <code>searchVisible</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearchVisible = function(bSearchVisible) { return new sap.ui.unified.Shell(); };

/**
 * Setter for property <code>showCurtain</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bShowCurtain new value for property <code>showCurtain</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtain = function(bShowCurtain) { return new sap.ui.unified.Shell(); };

/**
 * Setter for property <code>showCurtainPane</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bShowCurtainPane new value for property <code>showCurtainPane</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtainPane = function(bShowCurtainPane) { return new sap.ui.unified.Shell(); };

/**
 * Setter for the aggregated <code>user</code>.
 * @param {sap.ui.unified.ShellHeadUserItem} oUser the user to set
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setUser = function(oUser) { return new sap.ui.unified.Shell(); };


// ---- sap.ui.unified.ShellHeadItem --------------------------------------------------------------------------

/**
 * Constructor for a new ShellHeadItem.
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
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * <li>{@link #getShowSeparator showSeparator} : boolean (default: true)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getShowMarker showMarker} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Header Action item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.15.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellHeadItem = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.ShellHeadItem</code>.<br> itself.
 * 
 * Event is fired when the user presses the item.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name <code>sClassName</code>
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
sap.ui.unified.ShellHeadItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>icon</code>.
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selected</code>.
 * If set to true, the item gets a special design.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getSelected = function() { return false; };

/**
 * Getter for property <code>showMarker</code>.
 * If set to true, a theme dependent marker is shown on the item.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showMarker</code>
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getShowMarker = function() { return false; };

/**
 * Getter for property <code>showSeparator</code>.
 * If set to true, a separator is displayed after the item.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSeparator</code>
 * @since 1.22.5
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getShowSeparator = function() { return false; };

/**
 * Getter for property <code>startsSection</code>.
 * If set to true, a divider is displayed before the item.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>startsSection</code>
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getStartsSection = function() { return false; };

/**
 * Getter for property <code>visible</code>.
 * Invisible items are not shown on the UI.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getVisible = function() { return false; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for property <code>selected</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected new value for property <code>selected</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setSelected = function(bSelected) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for property <code>showMarker</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowMarker new value for property <code>showMarker</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setShowMarker = function(bShowMarker) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for property <code>showSeparator</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSeparator new value for property <code>showSeparator</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @since 1.22.5
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setShowSeparator = function(bShowSeparator) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for property <code>startsSection</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bStartsSection new value for property <code>startsSection</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setVisible = function(bVisible) { return new sap.ui.unified.ShellHeadItem(); };


// ---- sap.ui.unified.ShellHeadUserItem --------------------------------------------------------------------------

/**
 * Constructor for a new ShellHeadUserItem.
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
 * <li>{@link #getUsername username} : string (default: )</li>
 * <li>{@link #getShowPopupIndicator showPopupIndicator} : boolean (default: true)</li>
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * User Header Action Item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellHeadUserItem = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadUserItem</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.ShellHeadUserItem</code>.<br> itself.
 * 
 * Event is fired when the user presses the button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadUserItem</code>.<br/> itself.
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadUserItem</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellHeadUserItem with name <code>sClassName</code>
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
sap.ui.unified.ShellHeadUserItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>image</code>.
 * An image of the user, normally an URI to a image but also an icon from the sap.ui.core.IconPool is possible.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>image</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadUserItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>showPopupIndicator</code>.
 * The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog.
 * If this property is set to true an indicator for such a popup mechanismn is shown in the item.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showPopupIndicator</code>
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getShowPopupIndicator = function() { return false; };

/**
 * Getter for property <code>username</code>.
 * The name of the user.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>username</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getUsername = function() { return ""; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>image</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sImage new value for property <code>image</code>
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setImage = function(sImage) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Setter for property <code>showPopupIndicator</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPopupIndicator new value for property <code>showPopupIndicator</code>
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setShowPopupIndicator = function(bShowPopupIndicator) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Setter for property <code>username</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sUsername new value for property <code>username</code>
 * @return {sap.ui.unified.ShellHeadUserItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setUsername = function(sUsername) { return new sap.ui.unified.ShellHeadUserItem(); };


// ---- sap.ui.unified.ShellLayout --------------------------------------------------------------------------

/**
 * Constructor for a new ShellLayout.
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
 * <li>{@link #getShowPane showPane} : boolean (default: false)</li>
 * <li>{@link #getHeaderHiding headerHiding} : boolean (default: false)</li>
 * <li>{@link #getHeaderVisible headerVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeader header} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The shell layout is the base for the shell control which is meant as root control (full-screen) of an application.
 * It was build as root control of the Fiori Launchpad application and provides the basic capabilities
 * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
 * do not use it for other scenarios than the root control usecase.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.25.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellLayout = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.addContent = function(oContent) { return new sap.ui.unified.ShellLayout(); };

/**
 * Adds some paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyContent = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys the header in the aggregation
 * named <code>header</code>.
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyHeader = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys all the paneContent in the aggregation
 * named <code>paneContent</code>.
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyPaneContent = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellLayout with name <code>sClassName</code>
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
sap.ui.unified.ShellLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getContent = function() { return new Array(); };

/**
 * Getter for aggregation <code>header</code>.<br/>
 * The control to appear in the header area.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeader = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>headerHiding</code>.
 * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>headerHiding</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeaderHiding = function() { return false; };

/**
 * Getter for property <code>headerVisible</code>.
 * If set to false, no header (and no items, search, ...) is shown.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>headerVisible</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeaderVisible = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.ShellLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the pane area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getPaneContent = function() { return new Array(); };

/**
 * Getter for property <code>showPane</code>.
 * Shows / Hides the side pane.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showPane</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getShowPane = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oPaneContent the paneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.ShellLayout(); };

/**
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the paneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the paneContent is inserted at
 *              the last position
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.unified.ShellLayout(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * Setter for the aggregated <code>header</code>.
 * @param {sap.ui.core.Control} oHeader the header to set
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeader = function(oHeader) { return new sap.ui.unified.ShellLayout(); };

/**
 * Setter for property <code>headerHiding</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHeaderHiding new value for property <code>headerHiding</code>
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeaderHiding = function(bHeaderHiding) { return new sap.ui.unified.ShellLayout(); };

/**
 * Setter for property <code>headerVisible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderVisible new value for property <code>headerVisible</code>
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeaderVisible = function(bHeaderVisible) { return new sap.ui.unified.ShellLayout(); };

/**
 * Setter for property <code>showPane</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPane new value for property <code>showPane</code>
 * @return {sap.ui.unified.ShellLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setShowPane = function(bShowPane) { return new sap.ui.unified.ShellLayout(); };


// ---- sap.ui.unified.ShellOverlay --------------------------------------------------------------------------

/**
 * Constructor for a new ShellOverlay.
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
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ShellOverlay to be opened in front of a sap.ui.unified.Shell
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.16.3
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellOverlay = function(sId,mSettings) {};
/**
 * Fired when the overlay was closed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.closed = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.addContent = function(oContent) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.unified.ShellOverlay</code>.<br> itself.
 * 
 * Fired when the overlay was closed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellOverlay</code>.<br/> itself.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Closes the ShellOverlay.
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.close = function() {  };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.destroyContent = function() { return new sap.ui.unified.ShellOverlay(); };

/**
 * Destroys the search in the aggregation
 * named <code>search</code>.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.destroySearch = function() { return new sap.ui.unified.ShellOverlay(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellOverlay with name <code>sClassName</code>
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
sap.ui.unified.ShellOverlay.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event closed to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellOverlay.prototype.fireClosed = function(mArguments) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the overlay.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellOverlay.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellOverlay.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the overlay header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * Id of the element which is the current target of the <code>shell</code> association, or null
 * 
 * Reference to the sap.ui.unified.Shell or sap.ui.unified.ShellLayout control.
 * @return {sap.ui.unified.ShellLayout}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getShell = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Opens the ShellOverlay.
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.open = function() {  };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch the search to set
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.setSearch = function(oSearch) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Setter for the associated <code>shell</code>.
 * @param {sap.ui.unified.ShellLayout} oShell Id of an element which becomes the new target of this shell association. Alternatively, an element instance may be given.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.setShell = function(oShell) { return new sap.ui.unified.ShellOverlay(); };


// ---- sap.ui.unified.SplitContainer --------------------------------------------------------------------------

/**
 * Constructor for a new SplitContainer.
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
 * <li>{@link #getShowSecondaryContent showSecondaryContent} : boolean</li>
 * <li>{@link #getSecondaryContentSize secondaryContentSize} : sap.ui.core.CSSSize (default: 250px)</li>
 * <li>{@link #getSecondaryContentWidth secondaryContentWidth} : sap.ui.core.CSSSize (default: 250px)</li>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getSecondaryContent secondaryContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides a main content and a secondary content area
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.15.0
 * @experimental Since version 1.15.0. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.SplitContainer = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addContent = function(oContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * Adds some secondaryContent into the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addSecondaryContent = function(oSecondaryContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroyContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * Destroys all the secondaryContent in the aggregation
 * named <code>secondaryContent</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroySecondaryContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * Creates a new subclass of class sap.ui.unified.SplitContainer with name <code>sClassName</code>
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
sap.ui.unified.SplitContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.SplitContainer.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.unified.SplitContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>orientation</code>.
 * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Orientation} the value of property <code>orientation</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Getter for aggregation <code>secondaryContent</code>.<br/>
 * The content to appear in the secondary area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContent = function() { return new Array(); };

/**
 * Getter for property <code>secondaryContentSize</code>.
 * The width if the secondary content. The height is always 100%.
 * 
 * Default value is <code>250px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>secondaryContentSize</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContentSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>secondaryContentWidth</code>.
 * Do not use. Use secondaryContentSize instead.
 * 
 * Default value is <code>250px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>secondaryContentWidth</code>
 * @deprecated Since version 1.22. 
 * 
 * Only available for backwards compatibility.
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContentWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>showSecondaryContent</code>.
 * Shows / Hides the secondary area.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>showSecondaryContent</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getShowSecondaryContent = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondaryContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSecondaryContent the secondaryContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.indexOfSecondaryContent = function(oSecondaryContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * Inserts a secondaryContent into the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the secondaryContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the secondaryContent is inserted at
 *              the last position
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertSecondaryContent = function(oSecondaryContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>secondaryContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllSecondaryContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes an secondaryContent from the aggregation named <code>secondaryContent</code>.
 * @param {int | string | sap.ui.core.Control} vSecondaryContent the secondaryContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed secondaryContent or null
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeSecondaryContent = function(vSecondaryContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>orientation</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Orientation} sOrientation new value for property <code>orientation</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setOrientation = function(sOrientation) { return new sap.ui.unified.SplitContainer(); };

/**
 * Setter for property <code>secondaryContentSize</code>.
 * 
 * Default value is <code>250px</code>.
 * @param {sap.ui.core.CSSSize} sSecondaryContentSize new value for property <code>secondaryContentSize</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setSecondaryContentSize = function(sSecondaryContentSize) { return new sap.ui.unified.SplitContainer(); };

/**
 * Setter for property <code>secondaryContentWidth</code>.
 * 
 * Default value is <code>250px</code>.
 * @param {sap.ui.core.CSSSize} sSecondaryContentWidth new value for property <code>secondaryContentWidth</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @deprecated Since version 1.22. 
 * 
 * Only available for backwards compatibility.
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setSecondaryContentWidth = function(sSecondaryContentWidth) { return new sap.ui.unified.SplitContainer(); };

/**
 * Setter for property <code>showSecondaryContent</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bShowSecondaryContent new value for property <code>showSecondaryContent</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setShowSecondaryContent = function(bShowSecondaryContent) { return new sap.ui.unified.SplitContainer(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.unified.CalendarDayType --------------------------------------------------------------------------

/**
 * Type 01: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type01 = "";

/**
 * Type 02: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type02 = "";

/**
 * Type 03: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type03 = "";

/**
 * Type 04: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type04 = "";

/**
 * Type 05: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type05 = "";

/**
 * Type 06: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type06 = "";

/**
 * Type 07: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type07 = "";

/**
 * Type 08: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type08 = "";

/**
 * Type 09: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type09 = "";

/**
 * Type 10: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type10 = "";


// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

/**
 * Content is faded (opacity change).
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.Fade = "";

/**
 * No animation. Content is switched instantly.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.None = "";

/**
 * The new content rotates in. (Just like one of those old newspaper-animations.)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.Rotate = "";

/**
 * The new content slides in from the left while the old content slides out to the left at the same time.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.SlideOver = "";

/**
 * The new slides in from the left (to the right).
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.SlideRight = "";

/**
 * The new content is "zoomed in" from the center and grows to fill the full content area.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomIn = "";

/**
 * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomOut = "";

