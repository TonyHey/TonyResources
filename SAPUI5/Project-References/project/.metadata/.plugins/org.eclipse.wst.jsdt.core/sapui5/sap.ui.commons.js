
// ---- sap.ui.commons --------------------------------------------------------------------------


// ---- sap.ui.commons.Accordion --------------------------------------------------------------------------

/**
 * Constructor for a new Accordion.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 200px)</li>
 * <li>{@link #getOpenedSectionsId openedSectionsId} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} : sap.ui.commons.AccordionSection[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:sectionOpen sectionOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:sectionClose sectionClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:sectionsReorder sectionsReorder} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains N sections which act as containers for any library controls
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Accordion = function(sId,mSettings) {};
/**
 * Event is triggered when the user closes a section.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.closeSectionId ID of the closed section
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.sectionClose = function(oControlEvent) {  };

/**
 * Event is triggered when the user opens a section.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.openSectionId ID of the opened section
 * @param {string[]} oControlEvent.getParameters.closeSectionIds IDs of the sections that shall be closed. Can be initial in the case of no previously opened section.
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.sectionOpen = function(oControlEvent) {  };

/**
 * Triggered when the user changes the position of a section.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.movedSectionId ID of the moved section.
 * @param {int} oControlEvent.getParameters.newIndex New index of the moved section.
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.sectionsReorder = function(oControlEvent) {  };

/**
 * Adds some section into the aggregation named <code>sections</code>.
 * @param {sap.ui.commons.AccordionSection}
 *            oSection the section to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.addSection = function(oSection) { return new sap.ui.commons.Accordion(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'sectionClose' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br> itself.
 * 
 * Event is triggered when the user closes a section.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.attachSectionClose = function(oData,fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'sectionOpen' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br> itself.
 * 
 * Event is triggered when the user opens a section.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.attachSectionOpen = function(oData,fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'sectionsReorder' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br> itself.
 * 
 * Triggered when the user changes the position of a section.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.attachSectionsReorder = function(oData,fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Closes a section, and opens the default one
 * @param {string} sSectionId
 *         Id of the section that shall be closed
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Accordion.prototype.closeSection = function(sSectionId) { return null; };

/**
 * Destroys all the sections in the aggregation
 * named <code>sections</code>.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.destroySections = function() { return new sap.ui.commons.Accordion(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionClose' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.detachSectionClose = function(fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionOpen' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.detachSectionOpen = function(fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionsReorder' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.detachSectionsReorder = function(fnFunction,oListener) { return new sap.ui.commons.Accordion(); };

/**
 * Creates a new subclass of class sap.ui.commons.Accordion with name <code>sClassName</code>
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
sap.ui.commons.Accordion.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event sectionClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'closeSectionId' of type <code>string</code>ID of the closed section</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Accordion.prototype.fireSectionClose = function(mArguments) { return new sap.ui.commons.Accordion(); };

/**
 * Fire event sectionOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openSectionId' of type <code>string</code>ID of the opened section</li>
 * <li>'closeSectionIds' of type <code>string[]</code>IDs of the sections that shall be closed. Can be initial in the case of no previously opened section.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Accordion.prototype.fireSectionOpen = function(mArguments) { return new sap.ui.commons.Accordion(); };

/**
 * Fire event sectionsReorder to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'movedSectionId' of type <code>string</code>ID of the moved section.</li>
 * <li>'newIndex' of type <code>int</code>New index of the moved section.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Accordion.prototype.fireSectionsReorder = function(mArguments) { return new sap.ui.commons.Accordion(); };

/**
 * Returns a metadata object for class sap.ui.commons.Accordion.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Accordion.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>openedSectionsId</code>.
 * Section IDs that shall be opened by default at application start.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>openedSectionsId</code>
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.getOpenedSectionsId = function() { return ""; };

/**
 * Getter for aggregation <code>sections</code>.<br/>
 * Empty container used to display any library controls.
 * @return {sap.ui.commons.AccordionSection[]}
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.getSections = function() { return new Array(); };

/**
 * Getter for property <code>width</code>.
 * When the width specified is smaller than a section content, a horizontal scroll bar is provided.
 * 
 * Default value is <code>200px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.AccordionSection</code> in the aggregation named <code>sections</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.AccordionSection}
 *           oSection the section whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.indexOfSection = function(oSection) { return 0; };

/**
 * Inserts a section into the aggregation named <code>sections</code>.
 * @param {sap.ui.commons.AccordionSection}
 *            oSection the section to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the section should be inserted at; for
 *              a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the section is inserted at
 *              the last position
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.insertSection = function(oSection,iIndex) { return new sap.ui.commons.Accordion(); };

/**
 * Opens a section.
 * @param {string} sSectionId
 *         Id of the section that shall be opened
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Accordion.prototype.openSection = function(sSectionId) { return null; };

/**
 * Removes all the controls in the aggregation named <code>sections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.AccordionSection[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.removeAllSections = function() { return new Array(); };

/**
 * Removes an section from the aggregation named <code>sections</code>.
 * @param {int | string | sap.ui.commons.AccordionSection} vSection the sectionto remove or its index or id
 * @return {sap.ui.commons.AccordionSection} the removed section or null
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.removeSection = function(vSection) { return new sap.ui.commons.AccordionSection(); };

/**
 * Redefinition of the method to add additional handling
 * @param {string} sOpenedSectionsId  New value for property openedSectionsId
 * @return {sap.ui.commons.Accordion} 'this' to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.setOpenedSectionsId = function(sOpenedSectionsId) { return new sap.ui.commons.Accordion(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>200px</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Accordion.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Accordion(); };


// ---- sap.ui.commons.AccordionSection --------------------------------------------------------------------------

/**
 * Constructor for a new AccordionSection.
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
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getCollapsed collapsed} : boolean (default: false)</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:scroll scroll} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a panel which is a container for other controls. The container does not have any layout function.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.AccordionSection = function(sId,mSettings) {};
/**
 * Event is fired when the user scrolls the panel.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.left Horizontal scroll position.
 * @param {int} oControlEvent.getParameters.top Vertical scroll position.
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.scroll = function(oControlEvent) {  };

/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.addContent = function(oContent) { return new sap.ui.commons.AccordionSection(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.AccordionSection</code>.<br> itself.
 * 
 * Event is fired when the user scrolls the panel.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.AccordionSection</code>.<br/> itself.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.attachScroll = function(oData,fnFunction,oListener) { return new sap.ui.commons.AccordionSection(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.destroyContent = function() { return new sap.ui.commons.AccordionSection(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.detachScroll = function(fnFunction,oListener) { return new sap.ui.commons.AccordionSection(); };

/**
 * Creates a new subclass of class sap.ui.commons.AccordionSection with name <code>sClassName</code>
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
sap.ui.commons.AccordionSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event scroll to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'left' of type <code>int</code>Horizontal scroll position.</li>
 * <li>'top' of type <code>int</code>Vertical scroll position.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.AccordionSection.prototype.fireScroll = function(mArguments) { return new sap.ui.commons.AccordionSection(); };

/**
 * Getter for property <code>collapsed</code>.
 * It is recommended to make some settings for the width when the section is set to 'collapsed'.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getCollapsed = function() { return false; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the panel. Control layouting is browser-dependent. For a stable content layout, use a layout control as direct single child.
 * When the panel dimensions are set, the child control may have width and height of 100%;
 * when the panel dimensions are not set, the child defines the panel size.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * Requirement is that the used theme supports the control.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>maxHeight</code>.
 * When the section content exceeds maxHeight, a vertical scroll bar appears.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getMaxHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.AccordionSection.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.AccordionSection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>title</code>.
 * Text for the section header
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.AccordionSection(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Property setter for the "collapsed" state
 * @param {boolean} bCollapsed Whether the AccordionSection should be collapsed, or not
 * @return {sap.ui.commons.AccordionSection} 'this' to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.setCollapsed = function(bCollapsed) { return new sap.ui.commons.AccordionSection(); };

/**
 * Property setter for the "enabled" state
 * @param {boolean} bEnabled Whether the AccordionSection should be enabled, or not
 * @return {sap.ui.commons.AccordionSection} 'this' to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.AccordionSection(); };

/**
 * Setter for property <code>maxHeight</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMaxHeight new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.setMaxHeight = function(sMaxHeight) { return new sap.ui.commons.AccordionSection(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.setTitle = function(sTitle) { return new sap.ui.commons.AccordionSection(); };


// ---- sap.ui.commons.ApplicationHeader --------------------------------------------------------------------------

/**
 * Constructor for a new ApplicationHeader.
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
 * <li>{@link #getLogoSrc logoSrc} : sap.ui.core.URI</li>
 * <li>{@link #getLogoText logoText} : string</li>
 * <li>{@link #getDisplayLogoff displayLogoff} : boolean (default: true)</li>
 * <li>{@link #getUserName userName} : string</li>
 * <li>{@link #getDisplayWelcome displayWelcome} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:logoff logoff} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The application header control stands on the top of any application page. It consists basically of 4 areas. Logo area/Function area provided by application/Search area/Logout area
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ApplicationHeader = function(sId,mSettings) {};
/**
 * Fires an event to log off the user from the application.
 * No parameters.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.logoff = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ApplicationHeader</code>.<br> itself.
 * 
 * Fires an event to log off the user from the application.
 * No parameters.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ApplicationHeader</code>.<br/> itself.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.attachLogoff = function(oData,fnFunction,oListener) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.detachLogoff = function(fnFunction,oListener) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Creates a new subclass of class sap.ui.commons.ApplicationHeader with name <code>sClassName</code>
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
sap.ui.commons.ApplicationHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event logoff to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.fireLogoff = function(mArguments) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Getter for property <code>displayLogoff</code>.
 * If set to true, the logoff area will be displayed at the right hand side of the application header.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>displayLogoff</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getDisplayLogoff = function() { return false; };

/**
 * Getter for property <code>displayWelcome</code>.
 * By default, set to true and dislpays the welcome text
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>displayWelcome</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getDisplayWelcome = function() { return false; };

/**
 * Getter for property <code>logoSrc</code>.
 * Path (src) to the logo icon to be displayed in the application header.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>logoSrc</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getLogoSrc = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>logoText</code>.
 * The text that will be displayed beside the logo in the application header. This property is optional.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>logoText</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getLogoText = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.ApplicationHeader.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ApplicationHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>userName</code>.
 * User name that will be displayed beside the welcome text
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>userName</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getUserName = function() { return ""; };

/**
 * Setter for property <code>displayLogoff</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDisplayLogoff new value for property <code>displayLogoff</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.setDisplayLogoff = function(bDisplayLogoff) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Setter for property <code>displayWelcome</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDisplayWelcome new value for property <code>displayWelcome</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.setDisplayWelcome = function(bDisplayWelcome) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Setter for property <code>logoSrc</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sLogoSrc new value for property <code>logoSrc</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.setLogoSrc = function(sLogoSrc) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Setter for property <code>logoText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLogoText new value for property <code>logoText</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.setLogoText = function(sLogoText) { return new sap.ui.commons.ApplicationHeader(); };

/**
 * Setter for property <code>userName</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sUserName new value for property <code>userName</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.setUserName = function(sUserName) { return new sap.ui.commons.ApplicationHeader(); };


// ---- sap.ui.commons.Area --------------------------------------------------------------------------

/**
 * Constructor for a new Area.
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
 * <li>{@link #getShape shape} : string</li>
 * <li>{@link #getCoords coords} : string</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * <li>{@link #getAlt alt} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Used for defining areas in an image map. At runtime, the user can trigger an action, or start a URL, from the single image areas.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Area = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.Area with name <code>sClassName</code>
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
sap.ui.commons.Area.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>alt</code>.
 * Alternative text that is displayed in the case the image is not available
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>alt</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getAlt = function() { return ""; };

/**
 * Getter for property <code>coords</code>.
 * Coordinates of the area
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>coords</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getCoords = function() { return ""; };

/**
 * Getter for property <code>href</code>.
 * Hyper link that is executed when the area is clicked
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getHref = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.commons.Area.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Area.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>shape</code>.
 * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>shape</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getShape = function() { return ""; };

/**
 * Setter for property <code>alt</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAlt new value for property <code>alt</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Area.prototype.setAlt = function(sAlt) { return new sap.ui.commons.Area(); };

/**
 * Setter for property <code>coords</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sCoords new value for property <code>coords</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Area.prototype.setCoords = function(sCoords) { return new sap.ui.commons.Area(); };

/**
 * Setter for property <code>href</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sHref new value for property <code>href</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Area.prototype.setHref = function(sHref) { return new sap.ui.commons.Area(); };

/**
 * Setter for property <code>shape</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sShape new value for property <code>shape</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Area.prototype.setShape = function(sShape) { return new sap.ui.commons.Area(); };


// ---- sap.ui.commons.AutoComplete --------------------------------------------------------------------------

/**
 * Constructor for a new AutoComplete.
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
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.ComboBox#constructor sap.ui.commons.ComboBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Textfield with list based text completion.
 * @extends sap.ui.commons.ComboBox
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.10.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.AutoComplete = function(sId,mSettings) {};
/**
 * Fired when the user has changed the value and a suggestion list update should occur.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.suggestValue The current value which was typed in.
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.suggest = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'suggest' event of this <code>sap.ui.commons.AutoComplete</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.AutoComplete</code>.<br> itself.
 * 
 * Fired when the user has changed the value and a suggestion list update should occur.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.AutoComplete</code>.<br/> itself.
 * @return {sap.ui.commons.AutoComplete} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.attachSuggest = function(oData,fnFunction,oListener) { return new sap.ui.commons.AutoComplete(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'suggest' event of this <code>sap.ui.commons.AutoComplete</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.AutoComplete} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.detachSuggest = function(fnFunction,oListener) { return new sap.ui.commons.AutoComplete(); };

/**
 * Creates a new subclass of class sap.ui.commons.AutoComplete with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.AutoComplete.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event suggest to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'suggestValue' of type <code>string</code>The current value which was typed in.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.AutoComplete} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.AutoComplete.prototype.fireSuggest = function(mArguments) { return new sap.ui.commons.AutoComplete(); };

/**
 * Getter for property <code>enableScrolling</code>.
 * Whether scrolling should be enabled when the number of items is higher than maxPopupItems.
 * If set to false only the first n items (n=maxPopupItems) are shown.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.getEnableScrolling = function() { return false; };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.getListBox = function() {  };

/**
 * Returns a metadata object for class sap.ui.commons.AutoComplete.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.AutoComplete.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.getSelectedItemId = function() {  };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.getSelectedKey = function() {  };

/**
 * Setter for property <code>enableScrolling</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableScrolling new value for property <code>enableScrolling</code>
 * @return {sap.ui.commons.AutoComplete} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.setEnableScrolling = function(bEnableScrolling) { return new sap.ui.commons.AutoComplete(); };

/**
 * Sets a custom filter function for items. Default is to check whether the item text begins with the typed value.
 * 
 * Example:
 * <code>
 * function(sValue, oItem){
 * 	  return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
 * }
 * </code>
 * @param {function} [fFilter] The filter function. If not set the default filter function will be used.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.AutoComplete.prototype.setFilterFunction = function(fFilter) {  };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.setListBox = function() {  };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.setSelectedItemId = function() {  };

/**
 * @deprecated NOT SUPPORTED
 * @public
 * 
 */
sap.ui.commons.AutoComplete.prototype.setSelectedKey = function() {  };


// ---- sap.ui.commons.Button --------------------------------------------------------------------------

/**
 * Constructor for a new Button.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHelpId helpId} : string (default: )</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getStyled styled} : boolean (default: true)</li>
 * <li>{@link #getLite lite} : boolean (default: false)</li>
 * <li>{@link #getStyle style} : sap.ui.commons.ButtonStyle</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Enables users to trigger actions such as save or print. For the button UI, you can define some text or an icon, or both.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Button = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.Button.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.Button(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.Button(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Button</code>.<br> itself.
 * 
 * Event is fired when the user presses the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Button</code>.<br/> itself.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.commons.Button(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.commons.Button(); };

/**
 * Creates a new subclass of class sap.ui.commons.Button with name <code>sClassName</code>
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
sap.ui.commons.Button.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Button.prototype.firePress = function(mArguments) { return new sap.ui.commons.Button(); };

/**
 * Puts the focus to the button.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Button.prototype.focus = function() { return null; };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>height</code>.
 * Specifies the button height. If this property is set, the height which is specified by the underlying theme is not used any longer.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help service
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getHelpId = function() { return ""; };

/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the button.
 * This can be an URI to an image or an icon font URI.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text .
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIconFirst = function() { return false; };

/**
 * Getter for property <code>iconHovered</code>.
 * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconSelected</code>.
 * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>lite</code>.
 * The button is rendered as lite button.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>lite</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getLite = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.Button.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Button.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>style</code>.
 * Style of the button.
 * (e.g. emphasized)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.ButtonStyle} the value of property <code>style</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getStyle = function() { return new sap.ui.commons.ButtonStyle(); };

/**
 * Getter for property <code>styled</code>.
 * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>styled</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getStyled = function() { return false; };

/**
 * Getter for property <code>text</code>.
 * Button text displayed at runtime.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Button.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Button.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.Button.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.Button.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>helpId</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sHelpId new value for property <code>helpId</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setHelpId = function(sHelpId) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setIcon = function(sIcon) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>iconFirst</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIconFirst new value for property <code>iconFirst</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setIconFirst = function(bIconFirst) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>iconHovered</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconHovered new value for property <code>iconHovered</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>iconSelected</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconSelected new value for property <code>iconSelected</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>lite</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLite new value for property <code>lite</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setLite = function(bLite) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>style</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.ButtonStyle} sStyle new value for property <code>style</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setStyle = function(sStyle) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>styled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bStyled new value for property <code>styled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setStyled = function(bStyled) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setText = function(sText) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Button.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Button(); };


// ---- sap.ui.commons.ButtonStyle --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.ButtonStyle.toString = function() { return ""; };

// ---- sap.ui.commons.Callout --------------------------------------------------------------------------

/**
 * Constructor for a new Callout.
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
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.CalloutBase#constructor sap.ui.commons.CalloutBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Callout is a small popup with some useful information and links that is shown when a mouse is hovered over a specific view element.
 * @extends sap.ui.commons.CalloutBase
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Callout = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Callout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.addContent = function(oContent) { return new sap.ui.commons.Callout(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.Callout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.destroyContent = function() { return new sap.ui.commons.Callout(); };

/**
 * Creates a new subclass of class sap.ui.commons.Callout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.Callout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content of the Callout
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.commons.Callout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Callout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.Callout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.Callout(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.Callout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };


// ---- sap.ui.commons.CalloutBase --------------------------------------------------------------------------

/**
 * Constructor for a new CalloutBase.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Events
 * <ul>
 * <li>{@link #event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:opened opened} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.TooltipBase#constructor sap.ui.core.TooltipBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * CalloutBase is a building block for Callout. Do not use it directly. Use the Callout control instead
 * @extends sap.ui.core.TooltipBase
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CalloutBase = function(sId,mSettings) {};
/**
 * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.parent Parent control that has this Callout as a tooltip
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.beforeOpen = function(oControlEvent) {  };

/**
 * Event is fired when the Callout window is closed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.close = function(oControlEvent) {  };

/**
 * The event is fired when the popup is opened.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.parent Parent control that has this Callout as a tooltip
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.open = function(oControlEvent) {  };

/**
 * Is fired when the Callout has been opened
 * @event
 * @since 1.11.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.opened = function(oControlEvent) {  };

/**
 * Adjust position of the already opened Callout window.
 * Call this method each time when the size of the opened
 * Callout window may be changed due to new or changed
 * contents.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CalloutBase.prototype.adjustPosition = function() { return null; };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br> itself.
 * 
 * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.attachBeforeOpen = function(oData,fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br> itself.
 * 
 * Event is fired when the Callout window is closed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br> itself.
 * 
 * The event is fired when the popup is opened.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.attachOpen = function(oData,fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'opened' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br> itself.
 * 
 * Is fired when the Callout has been opened
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * 
 */
sap.ui.commons.CalloutBase.prototype.attachOpened = function(oData,fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Closes Callout
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CalloutBase.prototype.close = function() { return null; };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.detachBeforeOpen = function(fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'opened' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @since 1.11.0
 * @public
 * 
 */
sap.ui.commons.CalloutBase.prototype.detachOpened = function(fnFunction,oListener) { return new sap.ui.commons.CalloutBase(); };

/**
 * Creates a new subclass of class sap.ui.commons.CalloutBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.CalloutBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event beforeOpen to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'parent' of type <code>sap.ui.core.Control</code>Parent control that has this Callout as a tooltip</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.commons.CalloutBase.prototype.fireBeforeOpen = function(mArguments) { return false; };

/**
 * Fire event close to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.CalloutBase.prototype.fireClose = function(mArguments) { return new sap.ui.commons.CalloutBase(); };

/**
 * Fire event open to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'parent' of type <code>sap.ui.core.Control</code>Parent control that has this Callout as a tooltip</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.CalloutBase.prototype.fireOpen = function(mArguments) { return new sap.ui.commons.CalloutBase(); };

/**
 * Fire event opened to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @since 1.11.0
 * 
 */
sap.ui.commons.CalloutBase.prototype.fireOpened = function(mArguments) { return new sap.ui.commons.CalloutBase(); };

/**
 * Returns a metadata object for class sap.ui.commons.CalloutBase.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.CalloutBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Set position of the Callout window relative to the parent control.
 * This function automatically calculates and sets the correct offset,
 * use it instead of <code>setMyPosition/setAtPosition</code>.
 * @param {sap.ui.core.Dock} myPosition docking position of the Callout
 * @param {sap.ui.core.Dock} atPosition docking position of the parent control
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CalloutBase.prototype.setPosition = function(myPosition,atPosition) { return new sap.ui.commons.CalloutBase(); };


// ---- sap.ui.commons.Carousel --------------------------------------------------------------------------

/**
 * Constructor for a new Carousel.
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
 * <li>{@link #getOrientation orientation} : sap.ui.commons.enums.Orientation</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDefaultItemHeight defaultItemHeight} : int (default: 150)</li>
 * <li>{@link #getDefaultItemWidth defaultItemWidth} : int (default: 150)</li>
 * <li>{@link #getAnimationDuration animationDuration} : int (default: 500)</li>
 * <li>{@link #getVisibleItems visibleItems} : int</li>
 * <li>{@link #getHandleSize handleSize} : int (default: 22)</li>
 * <li>{@link #getFirstVisibleIndex firstVisibleIndex} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Carousel holds multiple controls and displays them vertical or horizontal next to each other. You can define how many content items should be displayed at once or let the carousel determine that for you. Navigation is done through buttons or keys.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.8.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Carousel = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.addContent = function(oContent) { return new sap.ui.commons.Carousel(); };

/**
 * Binder for aggregation <code>content</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.bindContent = function(oBindingInfo) { return new sap.ui.commons.Carousel(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.destroyContent = function() { return new sap.ui.commons.Carousel(); };

/**
 * Creates a new subclass of class sap.ui.commons.Carousel with name <code>sClassName</code>
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
sap.ui.commons.Carousel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>animationDuration</code>.
 * Duration for animation when navigating through children
 * 
 * Default value is <code>500</code>
 * @return {int} the value of property <code>animationDuration</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getAnimationDuration = function() { return 0; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls which are displayed inside the carousel
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>defaultItemHeight</code>.
 * Default height of item in carousel if no height can be determined
 * 
 * Default value is <code>150</code>
 * @return {int} the value of property <code>defaultItemHeight</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getDefaultItemHeight = function() { return 0; };

/**
 * Getter for property <code>defaultItemWidth</code>.
 * Default width of item in carousel if no height can be determined
 * 
 * Default value is <code>150</code>
 * @return {int} the value of property <code>defaultItemWidth</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getDefaultItemWidth = function() { return 0; };

/**
 * Getter for property <code>firstVisibleIndex</code>.
 * The index of the element in the content aggreation which is displayed first on rendering
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>firstVisibleIndex</code>
 * @since 1.11.0
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getFirstVisibleIndex = function() { return 0; };

/**
 * Getter for property <code>handleSize</code>.
 * Size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
 * 
 * Default value is <code>22</code>
 * @return {int} the value of property <code>handleSize</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getHandleSize = function() { return 0; };

/**
 * Getter for property <code>height</code>.
 * Height of carousel
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Carousel.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Carousel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>orientation</code>.
 * Can be either "horizontal" or "vertical"
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.enums.Orientation} the value of property <code>orientation</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getOrientation = function() { return new sap.ui.commons.enums.Orientation(); };

/**
 * Getter for property <code>visibleItems</code>.
 * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getVisibleItems = function() { return 0; };

/**
 * Getter for property <code>width</code>.
 * Width of carousel
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.Carousel(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>animationDuration</code>.
 * 
 * Default value is <code>500</code>.
 * @param {int} iAnimationDuration new value for property <code>animationDuration</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setAnimationDuration = function(iAnimationDuration) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>defaultItemHeight</code>.
 * 
 * Default value is <code>150</code>.
 * @param {int} iDefaultItemHeight new value for property <code>defaultItemHeight</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setDefaultItemHeight = function(iDefaultItemHeight) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>defaultItemWidth</code>.
 * 
 * Default value is <code>150</code>.
 * @param {int} iDefaultItemWidth new value for property <code>defaultItemWidth</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setDefaultItemWidth = function(iDefaultItemWidth) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>firstVisibleIndex</code>.
 * 
 * Default value is <code>0</code>
 * @param {int} iFirstVisibleIndex  new value for property <code>firstVisibleIndex</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * 
 */
sap.ui.commons.Carousel.prototype.setFirstVisibleIndex = function(iFirstVisibleIndex) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>handleSize</code>.
 * 
 * Default value is <code>22</code>.
 * @param {int} iHandleSize new value for property <code>handleSize</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setHandleSize = function(iHandleSize) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>orientation</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.enums.Orientation} sOrientation new value for property <code>orientation</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setOrientation = function(sOrientation) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>visibleItems</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iVisibleItems new value for property <code>visibleItems</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setVisibleItems = function(iVisibleItems) { return new sap.ui.commons.Carousel(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Carousel(); };

/**
 * Shows the element with id specified. This can be only used after the component is rendered.
 * @param {string} sElementId Id of the element to slide to.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Carousel.prototype.showElementWithId = function(sElementId) { return null; };

/**
 * Shows next item in carousel. This can be only used after the component is rendered.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Carousel.prototype.showNext = function() { return null; };

/**
 * Shows previous item in carousel. This can be only used after the component is rendered.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Carousel.prototype.showPrevious = function() { return null; };

/**
 * Unbinder for aggregation <code>content</code>.
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Carousel.prototype.unbindContent = function() { return new sap.ui.commons.Carousel(); };


// ---- sap.ui.commons.CheckBox --------------------------------------------------------------------------

/**
 * Constructor for a new CheckBox.
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
 * <li>{@link #getChecked checked} : boolean (default: false)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * <li>{@link #getName name} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Provides a box which can be flagged, the box has a label. A check box can either stand alone, or in a group with other check boxes. As an option, the boxes can initially be set to status 'Not Editable'.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CheckBox = function(sId,mSettings) {};
/**
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.checked Checks whether the box is flagged or not flagged.
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.change = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.CheckBox(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.CheckBox(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.CheckBox</code>.<br> itself.
 * 
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CheckBox</code>.<br/> itself.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.CheckBox(); };

/**
 * Binder for property <code>checked</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.bindChecked = function(oBindingInfo) { return new sap.ui.commons.CheckBox(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.CheckBox(); };

/**
 * Creates a new subclass of class sap.ui.commons.CheckBox with name <code>sClassName</code>
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
sap.ui.commons.CheckBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'checked' of type <code>boolean</code>Checks whether the box is flagged or not flagged.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.CheckBox.prototype.fireChange = function(mArguments) { return new sap.ui.commons.CheckBox(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>checked</code>.
 * Contains the state of the control whether it is flagged with a check mark, or not
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>checked</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getChecked = function() { return false; };

/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user shall be allowed to select the check box.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Using this property, the control could be disabled, if required.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.CheckBox.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.CheckBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the check box
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>textDirection</code>.
 * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>valueState</code>.
 * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * The width can be set to an absolute value. If no value is set, the control width results from the text length.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>checked</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bChecked new value for property <code>checked</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setChecked = function(bChecked) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setEditable = function(bEditable) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setName = function(sName) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setText = function(sText) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setValueState = function(sValueState) { return new sap.ui.commons.CheckBox(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.setWidth = function(sWidth) { return new sap.ui.commons.CheckBox(); };

/**
 * 
 * Inverts the current value of the control.
 * @type sap.ui.commons.CheckBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.CheckBox.prototype.toggle = function() { return new sap.ui.commons.CheckBox(); };

/**
 * Unbinder for property <code>checked</code>.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.unbindChecked = function() { return new sap.ui.commons.CheckBox(); };


// ---- sap.ui.commons.ColorPicker --------------------------------------------------------------------------

/**
 * Constructor for a new ColorPicker.
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
 * <li>{@link #getColorString colorString} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control gives the user the opportunity to choose a color. The color can be defined using HEX-, RGB- or HSV-values or a CSS colorname.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ColorPicker = function(sId,mSettings) {};
/**
 * Value was changed. This event is fired if the value has changed by an user action.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.r Parameter containing the RED value (0-255)
 * @param {int} oControlEvent.getParameters.g Parameter containing the GREEN value (0-255)
 * @param {int} oControlEvent.getParameters.b Parameter containing the BLUE value (0-255)
 * @param {int} oControlEvent.getParameters.h Parameter containing the HUE value (0-360)
 * @param {int} oControlEvent.getParameters.s Parameter containing the SATURATION value (0-100)
 * @param {int} oControlEvent.getParameters.v Parameter containing the VALUE value (0-100)
 * @param {string} oControlEvent.getParameters.hex Parameter containing the Hexadecimal string (#FFFFFF)
 * @param {string} oControlEvent.getParameters.alpha Parameter containing the alpha value (transparency)
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.change = function(oControlEvent) {  };

/**
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.r Parameter containing the RED value (0-255)
 * @param {int} oControlEvent.getParameters.g Parameter containing the GREEN value (0-255)
 * @param {int} oControlEvent.getParameters.b Parameter containing the BLUE value (0-255)
 * @param {int} oControlEvent.getParameters.h Parameter containing the HUE value (0-360)
 * @param {int} oControlEvent.getParameters.s Parameter containing the SATURATION value (0-100)
 * @param {int} oControlEvent.getParameters.v Parameter containing the VALUE value (0-100)
 * @param {string} oControlEvent.getParameters.hex Parameter containing the Hexadecimal string (#FFFFFF)
 * @param {string} oControlEvent.getParameters.alpha Parameter containing the alpha value (transparency)
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.liveChange = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ColorPicker</code>.<br> itself.
 * 
 * Value was changed. This event is fired if the value has changed by an user action.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.ColorPicker(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ColorPicker</code>.<br> itself.
 * 
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.ColorPicker(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.ColorPicker(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.ui.commons.ColorPicker(); };

/**
 * Creates a new subclass of class sap.ui.commons.ColorPicker with name <code>sClassName</code>
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
sap.ui.commons.ColorPicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'r' of type <code>int</code>Parameter containing the RED value (0-255)</li>
 * <li>'g' of type <code>int</code>Parameter containing the GREEN value (0-255)</li>
 * <li>'b' of type <code>int</code>Parameter containing the BLUE value (0-255)</li>
 * <li>'h' of type <code>int</code>Parameter containing the HUE value (0-360)</li>
 * <li>'s' of type <code>int</code>Parameter containing the SATURATION value (0-100)</li>
 * <li>'v' of type <code>int</code>Parameter containing the VALUE value (0-100)</li>
 * <li>'hex' of type <code>string</code>Parameter containing the Hexadecimal string (#FFFFFF)</li>
 * <li>'alpha' of type <code>string</code>Parameter containing the alpha value (transparency)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ColorPicker.prototype.fireChange = function(mArguments) { return new sap.ui.commons.ColorPicker(); };

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'r' of type <code>int</code>Parameter containing the RED value (0-255)</li>
 * <li>'g' of type <code>int</code>Parameter containing the GREEN value (0-255)</li>
 * <li>'b' of type <code>int</code>Parameter containing the BLUE value (0-255)</li>
 * <li>'h' of type <code>int</code>Parameter containing the HUE value (0-360)</li>
 * <li>'s' of type <code>int</code>Parameter containing the SATURATION value (0-100)</li>
 * <li>'v' of type <code>int</code>Parameter containing the VALUE value (0-100)</li>
 * <li>'hex' of type <code>string</code>Parameter containing the Hexadecimal string (#FFFFFF)</li>
 * <li>'alpha' of type <code>string</code>Parameter containing the alpha value (transparency)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ColorPicker.prototype.fireLiveChange = function(mArguments) { return new sap.ui.commons.ColorPicker(); };

/**
 * Getter for property <code>colorString</code>.
 * This is the import-parameter of the ColorPicker.
 * As input-parameter, it can be a Hexadecimal string (#FFFFFF), a RGB-string rgb(255,255,255), a HSV-string hsv(360,100,100) or a CSS-colorname 'red'.
 * As output-parameter it is a RGB-string containing the current color.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>colorString</code>
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.getColorString = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.ColorPicker.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ColorPicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Deliver current RGB-values.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ColorPicker.prototype.getRGB = function() { return new Object(); };

/**
 * Setter for property <code>colorString</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sColorString new value for property <code>colorString</code>
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ColorPicker.prototype.setColorString = function(sColorString) { return new sap.ui.commons.ColorPicker(); };


// ---- sap.ui.commons.ComboBox --------------------------------------------------------------------------

/**
 * Constructor for a new ComboBox.
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
 * <li>{@link #getMaxPopupItems maxPopupItems} : int (default: 10)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.ListItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * The control provides a field that allows end users to either enter some text, or to choose an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes, single listbox items, or text strings defined for the current application.
 * @extends sap.ui.commons.TextField
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ComboBox = function(sId,mSettings) {};
/**
 * Event is fired when the text in the field has changed AND the focus leaves the ComboBox or the Enter key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the ComboBox.
 * @param {sap.ui.core.ListItem} oControlEvent.getParameters.selectedItem The new / changed item of the ComboBox.
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.change = function(oControlEvent) {  };

/**
 * Compares the previous value with the current value and fires the "Change" event
 * if the ComboBox is editable and the value has changed or whether the value has been changed
 * e.g. via up/down or auto-complete feature
 * @param {jQuery.Event} oEvent The event object.
 * @param {boolean} [bImmediate] indicate whether the check should happen immediately or delayed (e.g. to avoid focusout / click double event processing)
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype._checkChange = function(oEvent,bImmediate) {  };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.addItem = function(oItem) { return new sap.ui.commons.ComboBox(); };

/**
 * Binder for aggregation <code>items</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.bindItems = function(oBindingInfo) { return new sap.ui.commons.ComboBox(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.destroyItems = function() { return new sap.ui.commons.ComboBox(); };

/**
 * Creates a new subclass of class sap.ui.commons.ComboBox with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.ComboBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the textfield.</li>
 * <li>'selectedItem' of type <code>sap.ui.core.ListItem</code> selected item </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.fireChange = function(mArguments) { return new sap.ui.commons.ComboBox(); };

/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Indicates whether the "additionalText" property that is available for sap.ui.core.ListItem shall be displayed in the list.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getDisplaySecondaryValues = function() { return false; };

/**
 * Returns the DomRef which represents the icon for value help.
 * Could be overwritten in child-classes
 * @return {Element} The F4-element's DOM reference or null
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.getF4ButtonDomRef = function() { return null; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Getter for aggregation items. Allows setting ListItems (see sap.ui.core.ListBox) that shall be displayed in the list.
 * @return {sap.ui.core.ListItem[]}
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getItems = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>listBox</code> association, or null
 * 
 * Using this method, you provide a listbox control. This allows reuse of item lists in different controls. Either a control id can be used as new target, or a control instance.
 * The ListBox must not be rendered somewhere in the UI. But if you want to bind the ListBox Items to a model it must be in the control tree. So we suggest to add it as dependent somewhere (e.g. to the view or the first used ComboBox). If it is not set as child or dependant to an other control it will be automatically set as dependent to the first ComboBox where it is assigned.
 * @return {sap.ui.commons.ListBox}
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getListBox = function() { return new sap.ui.commons.ListBox(); };

/**
 * Getter for property <code>maxPopupItems</code>.
 * Defines the number of items that shall be displayed at once. If the overall number of list items is higher than the setting, a scrollbar is provided.
 * 
 * Default value is <code>10</code>
 * @return {int} the value of property <code>maxPopupItems</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getMaxPopupItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.ComboBox.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ComboBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selectedItemId</code>.
 * Id of Selected item. If the value has no corresponding item, the selected item id is empty.
 * If the selected item id is set to an not existing item, it will not be changed.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getSelectedItemId = function() { return ""; };

/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * If the value has no corresponding item the key is empty.
 * If duplicate keys exists the first item matching the key is used.
 * If the key is set to a not existing value it will not be changed.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getSelectedKey = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.ListItem}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.ListItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.commons.ComboBox(); };

/**
 * Handle sapenter pseudo events on the control
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.onsapenter = function(oEvent) {  };

/**
 * Handle sapescape pseudo events on the control
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.onsapescape = function(oEvent) {  };

/**
 * Handle saphide pseudo events on the control
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.onsaphide = function(oEvent) {  };

/**
 * Handle sapnextmodifiers pseudo events on the control
 * if in toolbar prevent item navigation if popup is opened.
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.onsapnextmodifiers = function(oEvent) {  };

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.ComboBox.prototype.onsapshow = function(oEvent) {  };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.ListItem} vItem the itemto remove or its index or id
 * @return {sap.ui.core.ListItem} the removed item or null
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.removeItem = function(vItem) { return new sap.ui.core.ListItem(); };

/**
 * Setter for property <code>displaySecondaryValues</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisplaySecondaryValues new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) { return new sap.ui.commons.ComboBox(); };

/**
 * Setter for the associated <code>listBox</code>.
 * @param {sap.ui.commons.ListBox} oListBox Id of an element which becomes the new target of this listBox association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.setListBox = function(oListBox) { return new sap.ui.commons.ComboBox(); };

/**
 * Setter for property <code>maxPopupItems</code>.
 * 
 * Default value is <code>10</code>.
 * @param {int} iMaxPopupItems new value for property <code>maxPopupItems</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.setMaxPopupItems = function(iMaxPopupItems) { return new sap.ui.commons.ComboBox(); };

/**
 * Setter for property <code>selectedItemId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSelectedItemId new value for property <code>selectedItemId</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.setSelectedItemId = function(sSelectedItemId) { return new sap.ui.commons.ComboBox(); };

/**
 * Setter for property <code>selectedKey</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSelectedKey new value for property <code>selectedKey</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.setSelectedKey = function(sSelectedKey) { return new sap.ui.commons.ComboBox(); };

/**
 * Unbinder for aggregation <code>items</code>.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.unbindItems = function() { return new sap.ui.commons.ComboBox(); };


// ---- sap.ui.commons.DatePicker --------------------------------------------------------------------------

/**
 * Constructor for a new DatePicker.
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
 * <li>{@link #getLocale locale} : string</li>
 * <li>{@link #getYyyymmdd yyyymmdd} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows end users to interact with dates.
 * Entries can directly be written in, or selected from a calendar pad.
 * Note: Dates can always be manually entered in the fix YYYYMMDD format, on top of the flexible "locale" format.
 * If the value is provided via data binding, using a Date.type the formatter of the Date.type is used.
 * Since version 1.22 the unified.Calendar is used inside the datePicker. So applications using the DatePicker should load the unified library. Otherwise it will be loaded the first time a DatePicker is opened.
 * @extends sap.ui.commons.TextField
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.DatePicker = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.DatePicker with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.DatePicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Provides the following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the DatePicker.</li>
 * <li>'newYyyymmdd' of type <code>string</code> The new / changed Yyyymmdd of the DatePicker. </li>
 * <li>'invalidValue' of type <code>boolean</code> The new / changed value of the DatePicker is not a valid date. </li>
 * </ul>
 * @param {boolean} bInvalidValue true is value is invalid
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.DatePicker.prototype.fireChange = function(bInvalidValue) { return new sap.ui.commons.DatePicker(); };

/**
 * Getter for property <code>locale</code>.
 * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should be used to render the DatePicker.If the value property is bound to a model using a Date type the locale will be ignored, because the locale information of the model are used.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>locale</code>
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.getLocale = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.DatePicker.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.DatePicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>yyyymmdd</code>.
 * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value" attribute uses the date format as configured via the locale.
 * The date is interpreted as gregorian date
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>yyyymmdd</code>
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.getYyyymmdd = function() { return ""; };

/**
 * Setter for property <code>locale</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLocale new value for property <code>locale</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.setLocale = function(sLocale) { return new sap.ui.commons.DatePicker(); };

/**
 * Setter for property <code>yyyymmdd</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sYyyymmdd new value for property <code>yyyymmdd</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.setYyyymmdd = function(sYyyymmdd) { return new sap.ui.commons.DatePicker(); };


// ---- sap.ui.commons.Dialog --------------------------------------------------------------------------

/**
 * Constructor for a new Dialog.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScrollLeft scrollLeft} : int (default: 0)</li>
 * <li>{@link #getScrollTop scrollTop} : int (default: 0)</li>
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getShowCloseButton showCloseButton} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinHeight minHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentBorderDesign contentBorderDesign} : sap.ui.commons.enums.BorderDesign</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole</li>
 * <li>{@link #getKeepInWindow keepInWindow} : boolean (default: false)</li>
 * <li>{@link #getAutoClose autoClose} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
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
 * An interactive window appearing on request displaying information to the user. The API supports features such as popups with fixed sizes, popups with unlimited width, scrolling bars for large windows, and control nesting (for example, a drop-down list can be included in the window).
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Dialog = function(sId,mSettings) {};
/**
 * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide information about last position and last size.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.width the width of the dialog when closed
 * @param {int} oControlEvent.getParameters.height the height of the dialog when closed
 * @param {int} oControlEvent.getParameters.top the top position of the dialog when closed
 * @param {int} oControlEvent.getParameters.left the left position of the dialog when closed
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.closed = function(oControlEvent) {  };

/**
 * Adds some button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.core.Control}
 *            oButton the button to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.addButton = function(oButton) { return new sap.ui.commons.Dialog(); };

/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.addContent = function(oContent) { return new sap.ui.commons.Dialog(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Dialog</code>.<br> itself.
 * 
 * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide information about last position and last size.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Dialog</code>.<br/> itself.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.commons.Dialog(); };

/**
 * Closes the dialog control instance.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Dialog.prototype.close = function() { return null; };

/**
 * Destroys all the buttons in the aggregation
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.destroyButtons = function() { return new sap.ui.commons.Dialog(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.destroyContent = function() { return new sap.ui.commons.Dialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.commons.Dialog(); };

/**
 * Creates a new subclass of class sap.ui.commons.Dialog with name <code>sClassName</code>
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
sap.ui.commons.Dialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event closed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'width' of type <code>int</code>the width of the dialog when closed</li>
 * <li>'height' of type <code>int</code>the height of the dialog when closed</li>
 * <li>'top' of type <code>int</code>the top position of the dialog when closed</li>
 * <li>'left' of type <code>int</code>the left position of the dialog when closed</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Dialog.prototype.fireClosed = function(mArguments) { return new sap.ui.commons.Dialog(); };

/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getAccessibleRole = function() { return new sap.ui.core.AccessibleRole(); };

/**
 * Getter for property <code>applyContentPadding</code>.
 * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getApplyContentPadding = function() { return false; };

/**
 * Getter for property <code>autoClose</code>.
 * If this property is set to true the Dialog will close if the Dialog loses its focus
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>autoClose</code>
 * @since 1.10
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getAutoClose = function() { return false; };

/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Aggregating the buttons to display at the bottom of the dialog, for example OK and Cancel. Association defaultButton can be used for one of the defined buttons.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getButtons = function() { return new Array(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregating the content of the dialog (one or more controls).
 * 
 * Caveat: when content is added with width given as a percentage, the Dialog itself should have a width set.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>contentBorderDesign</code>.
 * Border design is theme-dependent.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>contentBorderDesign</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getContentBorderDesign = function() { return new sap.ui.commons.enums.BorderDesign(); };

/**
 * Id of the element which is the current target of the <code>defaultButton</code> association, or null
 * 
 * Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.
 * @return {sap.ui.commons.Button}
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getDefaultButton = function() { return new sap.ui.commons.Button(); };

/**
 * Whether the dialog is currently enabled or not.
 * 
 * Applications can't control the enabled state via a property. A dialog is implicitly
 * enabled depending on its <code>openState</code>. Descendant controls that honor the
 * enabled state of their ancestors will appear disabled after the dialog is closed.
 * @experimental Whether a dialog is regarded as "enabled" during the state transitions
 * (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase
 * and disabled during the CLOSING phase. The only potential change would be to treat the
 * OPENING phase as disabled as well. Applications should be prepared to receive events from
 * "enabled" controls after they called open() on the dialog until close() is called on it.
 * If the mentioned potential change should happen, the dialog will become enabled only
 * after the transition to OPEN. Events from "enabled" children then can still only arrive
 * between open() and close(), so applications that obey the previous rule should continue
 * to work. Only end users or code  that explicitly triggers pseudo user events will notice
 * a difference. <br>
 * A second aspect that might change is the visual behavior of the content: during the CLOSING
 * phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws
 * for content that becomes hidden soon. Should this show to be confusing for end users, it might
 * be changed.
 * @return {boolean} whether the dialog is currently enabled or not.
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>height</code>.
 * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight), the window size is automatically adapted to the content.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * 
 * Defines the control that shall get the focus when the dialog is opened.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getInitialFocus = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>keepInWindow</code>.
 * Whether Dialog movement should be restricted to the visible area of the window. This only affects drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the window.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>keepInWindow</code>
 * @since 1.9.0
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getKeepInWindow = function() { return false; };

/**
 * Getter for property <code>maxHeight</code>.
 * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMaxHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>maxWidth</code>.
 * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMaxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Dialog.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Dialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minHeight</code>.
 * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minHeight</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMinHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>minWidth</code>.
 * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>modal</code>.
 * Specify whether the dialog should be modal, or not. In case of <code>true</code> the focus is kept inside the dialog.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getModal = function() { return false; };

/**
 * Returns whether the Dialog is currently open, closed, or transitioning between these states.
 * @type sap.ui.core.OpenState
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Dialog.prototype.getOpenState = function() { return new sap.ui.core.OpenState(); };

/**
 * Getter for property <code>resizable</code>.
 * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual symbol.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getResizable = function() { return false; };

/**
 * Getter for property <code>scrollLeft</code>.
 * Scroll position from left to right. "0" means leftmost position.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>scrollLeft</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getScrollLeft = function() { return 0; };

/**
 * Getter for property <code>scrollTop</code>.
 * Scroll position from top to buttom. "0" means topmost position.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getScrollTop = function() { return 0; };

/**
 * Getter for property <code>showCloseButton</code>.
 * Displays a close button in the title bar.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCloseButton</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getShowCloseButton = function() { return false; };

/**
 * Getter for property <code>title</code>.
 * Dialog title displayed in the header.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getTitle = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth), the window size is automatically adapted to the content.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.indexOfButton = function(oButton) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.core.Control}
 *            oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the button should be inserted at; for
 *              a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the button is inserted at
 *              the last position
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.insertButton = function(oButton,iIndex) { return new sap.ui.commons.Dialog(); };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.Dialog(); };

/**
 * Returns whether the Dialog is open (this includes opening and closing animations). For more detailed information about the current state check Dialog.getOpenState().
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Dialog.prototype.isOpen = function() { return false; };

/**
 * Opens the dialog control instance.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Dialog.prototype.open = function() { return null; };

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.removeAllButtons = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.ui.core.Control} vButton the buttonto remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.removeButton = function(vButton) { return new sap.ui.core.Control(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>accessibleRole</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.AccessibleRole} sAccessibleRole new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setAccessibleRole = function(sAccessibleRole) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>applyContentPadding</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bApplyContentPadding new value for property <code>applyContentPadding</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setApplyContentPadding = function(bApplyContentPadding) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>autoClose</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoClose new value for property <code>autoClose</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @since 1.10
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setAutoClose = function(bAutoClose) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>contentBorderDesign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.enums.BorderDesign} sContentBorderDesign new value for property <code>contentBorderDesign</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setContentBorderDesign = function(sContentBorderDesign) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for the associated <code>defaultButton</code>.
 * @param {sap.ui.commons.Button} oDefaultButton Id of an element which becomes the new target of this defaultButton association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setDefaultButton = function(oDefaultButton) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for the associated <code>initialFocus</code>.
 * @param {sap.ui.core.Control} oInitialFocus Id of an element which becomes the new target of this initialFocus association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setInitialFocus = function(oInitialFocus) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>keepInWindow</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bKeepInWindow new value for property <code>keepInWindow</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @since 1.9.0
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setKeepInWindow = function(bKeepInWindow) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>maxHeight</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMaxHeight new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setMaxHeight = function(sMaxHeight) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>maxWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMaxWidth new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setMaxWidth = function(sMaxWidth) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>minHeight</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMinHeight new value for property <code>minHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setMinHeight = function(sMinHeight) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>minWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMinWidth new value for property <code>minWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setMinWidth = function(sMinWidth) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>modal</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bModal new value for property <code>modal</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setModal = function(bModal) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>resizable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizable new value for property <code>resizable</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setResizable = function(bResizable) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>scrollLeft</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iScrollLeft new value for property <code>scrollLeft</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setScrollLeft = function(iScrollLeft) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>scrollTop</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iScrollTop new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setScrollTop = function(iScrollTop) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>showCloseButton</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCloseButton new value for property <code>showCloseButton</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setShowCloseButton = function(bShowCloseButton) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sTitle new value for property <code>title</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setTitle = function(sTitle) { return new sap.ui.commons.Dialog(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Dialog(); };


// ---- sap.ui.commons.DropdownBox --------------------------------------------------------------------------

/**
 * Constructor for a new DropdownBox.
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
 * <li>{@link #getSearchHelpEnabled searchHelpEnabled} : boolean (default: false)</li>
 * <li>{@link #getSearchHelpText searchHelpText} : string</li>
 * <li>{@link #getSearchHelpAdditionalText searchHelpAdditionalText} : string</li>
 * <li>{@link #getSearchHelpIcon searchHelpIcon} : sap.ui.core.URI</li>
 * <li>{@link #getMaxHistoryItems maxHistoryItems} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:searchHelp searchHelp} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.ComboBox#constructor sap.ui.commons.ComboBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The control provides a field that allows end users to an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes or single list items.
 * Binding (see DataBinding) is also supported for list items.
 * @extends sap.ui.commons.ComboBox
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.DropdownBox = function(sId,mSettings) {};
/**
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value The current value of the DropdownBox.
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.searchHelp = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.DropdownBox</code>.<br> itself.
 * 
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.DropdownBox</code>.<br/> itself.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.attachSearchHelp = function(oData,fnFunction,oListener) { return new sap.ui.commons.DropdownBox(); };

/**
 * Using this method the history of the DropdownBox can be cleared.
 * This might be necessary if the items of the DropdownBox have changed. Otherwise invalid items may appear in the history.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.DropdownBox.prototype.clearHistory = function() {  };

/**
 * Detach event handler <code>fnFunction</code> from the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.detachSearchHelp = function(fnFunction,oListener) { return new sap.ui.commons.DropdownBox(); };

/**
 * Creates a new subclass of class sap.ui.commons.DropdownBox with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.DropdownBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event searchHelp to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code>The current value of the DropdownBox.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.fireSearchHelp = function(mArguments) { return new sap.ui.commons.DropdownBox(); };

/**
 * Getter for property <code>maxHistoryItems</code>.
 * Maximum number of history items in the list.
 * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxHistoryItems</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getMaxHistoryItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.DropdownBox.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.DropdownBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>searchHelpAdditionalText</code>.
 * (optional) The additional Text to use for the search help entry.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>searchHelpAdditionalText</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpAdditionalText = function() { return ""; };

/**
 * Getter for property <code>searchHelpEnabled</code>.
 * Whether the DropdownBox's search help should be enabled.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>searchHelpEnabled</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpEnabled = function() { return false; };

/**
 * Getter for property <code>searchHelpIcon</code>.
 * (optional) The src of the icon to use for the search help entry.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>searchHelpIcon</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>searchHelpText</code>.
 * (optional) The text to use for the search help entry.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>searchHelpText</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpText = function() { return ""; };

/**
 * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access (if needed)
 * @return {string} string tooltip or undefined
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getTooltip_AsString = function() { return ""; };

/**
 * Ensure that handed in ListBoxes are taken from the visible UI immediately.
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onAfterRendering = function(oEvent) {  };

/**
 * Handle the click event happening in the DropdownBox
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onclick = function(oEvent) {  };

/**
 * Handle focusin event
 * Ensures the text gets selected when focus gets into the field
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onfocusin = function(oEvent) {  };

/**
 * Handle keydown event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onkeydown = function(oEvent) {  };

/**
 * Handle keypress event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onkeypress = function(oEvent) {  };

/**
 * Handle keyup event
 * This must only be considered if it is from Backspace-key in IE or after paste.
 * In case there is a keyup with a tab this results from being entered via tabbing and can be ignored, too.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onkeyup = function(oEvent) {  };

/**
 * Handle paste event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onpaste = function(oEvent) {  };

/**
 * Handle pseudo event onsapdelete.
 * If triggered with open dropdown and current item provided by history feature,
 * removes the selected item from this instance's history.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onsapdelete = function(oEvent) {  };

/**
 * Handle pseudo event onsaphome
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onsaphome = function(oEvent) {  };

/**
 * Move the cursor one step to the left (and adapt selection)
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onsapleft = function(oEvent) {  };

/**
 * Move the cursor one step to the right (and adapt selection)
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onsapright = function(oEvent) {  };

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onsapshow = function(oEvent) {  };

/**
 * Handle the select event happening in the DropdownBox
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.DropdownBox.prototype.onselect = function(oEvent) {  };

/**
 * Setter for property <code>maxHistoryItems</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxHistoryItems new value for property <code>maxHistoryItems</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.setMaxHistoryItems = function(iMaxHistoryItems) { return new sap.ui.commons.DropdownBox(); };

/**
 * Overwrite of Setter for property <code>searchHelpAdditionalText</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * @param {string} sSearchHelpAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpAdditionalText = function(sSearchHelpAdditionalText) { return new sap.ui.commons.DropdownBox(); };

/**
 * Overwrite of Setter for property <code>searchHelpEnabled</code>.
 * This method accepts additional parameter to be compatiple with the
 * previous functionality
 * 
 * Default value is <code>false</code>
 * @param {boolean} bEnabled new value for property <code>searchHelpEnabled</code>
 * @param {string} sText new value for property <code>searchHelpText</code>
 * @param {string} sAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @param {string} sIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpEnabled = function(bEnabled,sText,sAdditionalText,sIcon) { return new sap.ui.commons.DropdownBox(); };

/**
 * Overwrite of Setter for property <code>searchHelpIcon</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * @param {sap.ui.core.URI} sSearchHelpIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpIcon = function(sSearchHelpIcon) { return new sap.ui.commons.DropdownBox(); };

/**
 * Overwrite of Setter for property <code>searchHelpText</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * @param {string} sSearchHelpText new value for property <code>searchHelpText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpText = function(sSearchHelpText) { return new sap.ui.commons.DropdownBox(); };


// ---- sap.ui.commons.enums.AreaDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.enums.AreaDesign.toString = function() { return ""; };

// ---- sap.ui.commons.enums.BorderDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.enums.BorderDesign.toString = function() { return ""; };

// ---- sap.ui.commons.enums.Orientation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.enums.Orientation.toString = function() { return ""; };

// ---- sap.ui.commons.FileUploader --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploader.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.
 * @extends sap.ui.unified.FileUploader
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the control sap.ui.unified.FileUploader of the library sap.ui.unified instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.FileUploader = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.FileUploader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.FileUploader.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.FileUploader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.FileUploader.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.FileUploader.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.FileUploaderParameter --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploaderParameter.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
 * @extends sap.ui.unified.FileUploaderParameter
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the element sap.ui.unified.FileUploaderParameter of the library sap.ui.unified instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.FileUploaderParameter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.FileUploaderParameter with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.FileUploaderParameter.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.FileUploaderParameter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.FileUploaderParameter.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.FileUploaderParameter.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.Form --------------------------------------------------------------------------

/**
 * Constructor for a new form/Form.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Form control.
 * Holder for form control to be rendered in a specific form layout.
 * A Form supports VariantLayoutData for it's conent to allow a simple switching of Layouts.
 * @extends sap.ui.layout.form.Form
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.Form = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.Form with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.Form.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.Form.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.Form.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.Form.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible Forms are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.Form.prototype.getVisible = function() { return false; };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.Form.prototype.setVisible = function(bVisible) { return new sap.ui.commons.form.Form(); };


// ---- sap.ui.commons.form.FormContainer --------------------------------------------------------------------------

/**
 * Constructor for a new form/FormContainer.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Used to group form elements.
 * @extends sap.ui.layout.form.FormContainer
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0.
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.FormContainer = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.FormContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormContainer.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.FormContainer.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible FormContainers are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.FormContainer.prototype.getVisible = function() { return false; };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.FormContainer.prototype.setVisible = function(bVisible) { return new sap.ui.commons.form.FormContainer(); };


// ---- sap.ui.commons.form.FormElement --------------------------------------------------------------------------

/**
 * Constructor for a new form/FormElement.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A form element is a combination of one label and different controls associated to this label.
 * @extends sap.ui.layout.form.FormElement
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.FormElement = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.FormElement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormElement.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.FormElement.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible FormElements are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.FormElement.prototype.getVisible = function() { return false; };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.commons.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.commons.form.FormElement.prototype.setVisible = function(bVisible) { return new sap.ui.commons.form.FormElement(); };


// ---- sap.ui.commons.form.FormLayout --------------------------------------------------------------------------

/**
 * Constructor for a new form/FormLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Base layout for Forms.
 * Other Layouts must inherit from this one.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.FormLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.FormLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.FormLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.FormLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.GridContainerData --------------------------------------------------------------------------

/**
 * Constructor for a new form/GridContainerData.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Grid layout specific properties for FormContainers.
 * The width and height properties of the elements are ignored since the witdh and heights are defined by the grid cells.
 * @extends sap.ui.layout.form.GridContainerData
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.GridContainerData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.GridContainerData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.GridContainerData.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridContainerData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.GridContainerData.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridContainerData.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.GridElementData --------------------------------------------------------------------------

/**
 * Constructor for a new form/GridElementData.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The grid specific layout data for FormElement fields.
 * The width property of the elements is ignored since the width is defined by grid cells.
 * @extends sap.ui.layout.form.GridElementData
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.GridElementData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.GridElementData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.GridElementData.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridElementData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.GridElementData.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridElementData.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.GridLayout --------------------------------------------------------------------------

/**
 * Constructor for a new form/GridLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This Layout implements a guideline 2.0 grid. This can be a 16 column grid or an 8 column grid.
 * 
 * To adjust the content inside the GridLayout GridContainerData and GridElementData could be used.
 * @extends sap.ui.layout.form.GridLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.GridLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.GridLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.GridLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.GridLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.GridLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.ResponsiveLayout --------------------------------------------------------------------------

/**
 * Constructor for a new form/ResponsiveLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Renders a form with responsive layout. Internally the ResponsiveFlowLayout is used.
 * @extends sap.ui.layout.form.ResponsiveLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.10.0
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.ResponsiveLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.ResponsiveLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.ResponsiveLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.ResponsiveLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.form.ResponsiveLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.ResponsiveLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.form.SimpleForm --------------------------------------------------------------------------

/**
 * Constructor for a new form/SimpleForm.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Use the SimpleForm to create a form based on title, label and fields that are stacked in the content aggregation. Add Title to start a new FormContainer(Group). Add Label to start a new row in the container. Add Input/Display controls as needed. Use LayoutData to influence the layout for special cases in the Input/Display controls.
 * @extends sap.ui.layout.form.SimpleForm
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.12
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.form.SimpleForm = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.form.SimpleForm with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.SimpleForm.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.form.SimpleForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>layout</code>.
 * The FormLayout that is used to render the SimpleForm
 * 
 * Default value is <code>ResponsiveLayout</code>
 * @return {sap.ui.commons.form.SimpleFormLayout} the value of property <code>layout</code>
 * @public
 * @since 1.14
 * 
 */
sap.ui.commons.form.SimpleForm.prototype.getLayout = function() { return new sap.ui.commons.form.SimpleFormLayout(); };

/**
 * Returns a metadata object for class sap.ui.commons.form.SimpleForm.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.form.SimpleForm.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>layout</code>.
 * 
 * Default value is <code>ResponsiveLayout</code>
 * @param {sap.ui.commons.form.SimpleFormLayout} oLayout new value for property <code>layout</code>
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.14
 * 
 */
sap.ui.commons.form.SimpleForm.prototype.setLayout = function(oLayout) { return new sap.ui.commons.form.SimpleForm(); };


// ---- sap.ui.commons.FormattedTextView --------------------------------------------------------------------------

/**
 * Constructor for a new FormattedTextView.
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
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole</li>
 * <li>{@link #getHtmlText htmlText} : string (default: )</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControls controls} : sap.ui.commons.FormattedTextViewControl[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows to use a limited set of HTML tags for display
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.FormattedTextView = function(sId,mSettings) {};
/**
 * Adds some control into the aggregation named <code>controls</code>.
 * @param {sap.ui.commons.FormattedTextViewControl}
 *            oControl the control to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.addControl = function(oControl) { return new sap.ui.commons.FormattedTextView(); };

/**
 * Destroys all the controls in the aggregation
 * named <code>controls</code>.
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.destroyControls = function() { return new sap.ui.commons.FormattedTextView(); };

/**
 * Creates a new subclass of class sap.ui.commons.FormattedTextView with name <code>sClassName</code>
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
sap.ui.commons.FormattedTextView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.getAccessibleRole = function() { return new sap.ui.core.AccessibleRole(); };

/**
 * Getter for aggregation <code>controls</code>.<br/>
 * Array of controls that should be replaced within htmlText
 * @return {sap.ui.commons.FormattedTextViewControl[]}
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.getControls = function() { return new Array(); };

/**
 * Getter for property <code>htmlText</code>.
 * Text with placeholders
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>htmlText</code>
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.getHtmlText = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.FormattedTextView.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.FormattedTextView.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.commons.FormattedTextViewControl</code> in the aggregation named <code>controls</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.FormattedTextViewControl}
 *           oControl the control whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.indexOfControl = function(oControl) { return 0; };

/**
 * Inserts a control into the aggregation named <code>controls</code>.
 * @param {sap.ui.commons.FormattedTextViewControl}
 *            oControl the control to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the control should be inserted at; for
 *              a negative value of <code>iIndex</code>, the control is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the control is inserted at
 *              the last position
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.insertControl = function(oControl,iIndex) { return new sap.ui.commons.FormattedTextView(); };

/**
 * Removes all the controls in the aggregation named <code>controls</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.FormattedTextViewControl[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.removeAllControls = function() { return new Array(); };

/**
 * Removes an control from the aggregation named <code>controls</code>.
 * @param {int | string | sap.ui.commons.FormattedTextViewControl} vControl the controlto remove or its index or id
 * @return {sap.ui.commons.FormattedTextViewControl} the removed control or null
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.removeControl = function(vControl) { return new sap.ui.commons.FormattedTextViewControl(); };

/**
 * Setter for property <code>accessibleRole</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.AccessibleRole} sAccessibleRole new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.setAccessibleRole = function(sAccessibleRole) { return new sap.ui.commons.FormattedTextView(); };

/**
 * Sets text with placeholders and given array of controls
 * @param {string} sHtmlText
 *         Contains the corresponding HTML-text
 * @param {sap.ui.commons.FormattedTextViewControl} oControls
 *         Array of controls that should be used within given HTML-text
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.FormattedTextView.prototype.setContent = function(sHtmlText,oControls) { return null; };

/**
 * Setter for property <code>htmlText</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sHtmlText new value for property <code>htmlText</code>
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.FormattedTextView.prototype.setHtmlText = function(sHtmlText) { return new sap.ui.commons.FormattedTextView(); };


// ---- sap.ui.commons.FormattedTextViewControl --------------------------------------------------------------------------


// ---- sap.ui.commons.HorizontalDivider --------------------------------------------------------------------------

/**
 * Constructor for a new HorizontalDivider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getType type} : sap.ui.commons.HorizontalDividerType</li>
 * <li>{@link #getHeight height} : sap.ui.commons.HorizontalDividerHeight</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Divides the screen in visual areas.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.HorizontalDivider = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.HorizontalDivider with name <code>sClassName</code>
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
sap.ui.commons.HorizontalDivider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>height</code>.
 * Defines the height of the divider.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.HorizontalDividerHeight} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getHeight = function() { return new sap.ui.commons.HorizontalDividerHeight(); };

/**
 * Returns a metadata object for class sap.ui.commons.HorizontalDivider.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.HorizontalDivider.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>type</code>.
 * Defines the type of the divider.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.HorizontalDividerType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getType = function() { return new sap.ui.commons.HorizontalDividerType(); };

/**
 * Getter for property <code>width</code>.
 * Defines the width of the divider.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.HorizontalDividerHeight} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.setHeight = function(sHeight) { return new sap.ui.commons.HorizontalDivider(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.HorizontalDividerType} sType new value for property <code>type</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.setType = function(sType) { return new sap.ui.commons.HorizontalDivider(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.setWidth = function(sWidth) { return new sap.ui.commons.HorizontalDivider(); };


// ---- sap.ui.commons.HorizontalDividerHeight --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.HorizontalDividerHeight.toString = function() { return ""; };

// ---- sap.ui.commons.HorizontalDividerType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.HorizontalDividerType.toString = function() { return ""; };

// ---- sap.ui.commons.Image --------------------------------------------------------------------------

/**
 * Constructor for a new Image.
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
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDecorative decorative} : boolean (default: true)</li>
 * <li>{@link #getAlt alt} : string</li>
 * <li>{@link #getUseMap useMap} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A wrapper around the IMG tag. The image can be loaded from a remote or local server.
 * There are various size setting options available, and the images can be combined with actions.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem,sap.ui.commons.FormattedTextViewControl
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Image = function(sId,mSettings) {};
/**
 * Event is fired when the user clicks on the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.Image.prototype.press = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Image</code>.<br> itself.
 * 
 * Event is fired when the user clicks on the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Image</code>.<br/> itself.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.commons.Image(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.commons.Image(); };

/**
 * Creates a new subclass of class sap.ui.commons.Image with name <code>sClassName</code>
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
sap.ui.commons.Image.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Image.prototype.firePress = function(mArguments) { return new sap.ui.commons.Image(); };

/**
 * Getter for property <code>alt</code>.
 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
 * If the image is set to decorative this property is ignored.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>alt</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getAlt = function() { return ""; };

/**
 * Getter for property <code>decorative</code>.
 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
 * A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>decorative</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getDecorative = function() { return false; };

/**
 * Getter for property <code>height</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Image.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Image.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>src</code>.
 * Relative or absolute path to URL where the image file is stored.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>src</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getSrc = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>useMap</code>.
 * The name of the image map that defines the clickable areas
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>useMap</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getUseMap = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>alt</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAlt new value for property <code>alt</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setAlt = function(sAlt) { return new sap.ui.commons.Image(); };

/**
 * Setter for property <code>decorative</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDecorative new value for property <code>decorative</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setDecorative = function(bDecorative) { return new sap.ui.commons.Image(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Image(); };

/**
 * Setter for property <code>src</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sSrc new value for property <code>src</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setSrc = function(sSrc) { return new sap.ui.commons.Image(); };

/**
 * Setter for property <code>useMap</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sUseMap new value for property <code>useMap</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setUseMap = function(sUseMap) { return new sap.ui.commons.Image(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Image.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Image(); };


// ---- sap.ui.commons.ImageMap --------------------------------------------------------------------------

/**
 * Constructor for a new ImageMap.
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
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAreas areas} : sap.ui.commons.Area[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Combination of image areas where at runtime these areas are starting points for hyperlinks or actions
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ImageMap = function(sId,mSettings) {};
/**
 * Event for the areas that can be clicked in an ImageMap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.areaId Id of clicked Area.
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.press = function(oControlEvent) {  };

/**
 * Adds some area into the aggregation named <code>areas</code>.
 * @param {sap.ui.commons.Area}
 *            oArea the area to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.addArea = function(oArea) { return new sap.ui.commons.ImageMap(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ImageMap</code>.<br> itself.
 * 
 * Event for the areas that can be clicked in an ImageMap
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ImageMap</code>.<br/> itself.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.commons.ImageMap(); };

/**
 * Adds areas to the Image Map. 
 * 
 * Each argument must be either a JSon object or a list of objects or the area element or elements.
 * @param {any} content Area content to add 
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ImageMap.prototype.createArea = function(content) { return new sap.ui.commons.ImageMap(); };

/**
 * Destroys all the areas in the aggregation
 * named <code>areas</code>.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.destroyAreas = function() { return new sap.ui.commons.ImageMap(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.commons.ImageMap(); };

/**
 * Creates a new subclass of class sap.ui.commons.ImageMap with name <code>sClassName</code>
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
sap.ui.commons.ImageMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'areaId' of type <code>string</code>Id of clicked Area.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ImageMap.prototype.firePress = function(mArguments) { return new sap.ui.commons.ImageMap(); };

/**
 * Getter for aggregation <code>areas</code>.<br/>
 * Area representing the reference to the target location
 * @return {sap.ui.commons.Area[]}
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.getAreas = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.commons.ImageMap.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ImageMap.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * Name for the image that serves as reference
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.getName = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.commons.Area</code> in the aggregation named <code>areas</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Area}
 *           oArea the area whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.indexOfArea = function(oArea) { return 0; };

/**
 * Inserts a area into the aggregation named <code>areas</code>.
 * @param {sap.ui.commons.Area}
 *            oArea the area to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the area should be inserted at; for
 *              a negative value of <code>iIndex</code>, the area is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the area is inserted at
 *              the last position
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.insertArea = function(oArea,iIndex) { return new sap.ui.commons.ImageMap(); };

/**
 * Removes all the controls in the aggregation named <code>areas</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Area[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.removeAllAreas = function() { return new Array(); };

/**
 * Removes an area from the aggregation named <code>areas</code>.
 * @param {int | string | sap.ui.commons.Area} vArea the areato remove or its index or id
 * @return {sap.ui.commons.Area} the removed area or null
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.removeArea = function(vArea) { return new sap.ui.commons.Area(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.setName = function(sName) { return new sap.ui.commons.ImageMap(); };


// ---- sap.ui.commons.InPlaceEdit --------------------------------------------------------------------------

/**
 * Constructor for a new InPlaceEdit.
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
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getUndoEnabled undoEnabled} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.TextViewDesign</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The InPlaceEdit is a functionality to have text in display mode that can be changed in place.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.8.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.InPlaceEdit = function(sId,mSettings) {};
/**
 * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the InPlaceEdit.
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.change = function(oControlEvent) {  };

/**
 * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
 * @event
 * @since 1.16.5
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.liveValue Current value of the Textfield.
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.liveChange = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.InPlaceEdit</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.InPlaceEdit</code>.<br> itself.
 * 
 * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.InPlaceEdit</code>.<br/> itself.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.InPlaceEdit</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.InPlaceEdit</code>.<br> itself.
 * 
 * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.InPlaceEdit</code>.<br/> itself.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.5
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Clear the old text after a change to disable the undo functionality. If undoEnabled is false this has no effect.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.clearOldText = function() {  };

/**
 * Destroys the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.destroyContent = function() { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.InPlaceEdit</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.InPlaceEdit</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @since 1.16.5
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Creates a new subclass of class sap.ui.commons.InPlaceEdit with name <code>sClassName</code>
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
sap.ui.commons.InPlaceEdit.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code>The new / changed value of the InPlaceEdit.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.fireChange = function(mArguments) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'liveValue' of type <code>string</code>Current value of the Textfield.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @protected
 * @since 1.16.5
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.fireLiveChange = function(mArguments) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content control of the InPlaceEdit.
 * The following controls are allowed:
 * TextField, ComboBox, DropdownBox and Link
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>design</code>.
 * Defines the visual appearance of the control.
 * Currently this is not supported for Labels.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.TextViewDesign} the value of property <code>design</code>
 * @since 1.9.0
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.getDesign = function() { return new sap.ui.commons.TextViewDesign(); };

/**
 * Returns a metadata object for class sap.ui.commons.InPlaceEdit.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.InPlaceEdit.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the tooltip for this InPlaceEdit if any or an undefined value.
 * The tooltip can either be a simple string or a subclass of
 * {@link sap.ui.core.TooltipBase}.
 * 
 * Callers that are only interested in tooltips of type string (e.g. to render
 * them as a <code>title</code> attribute), should call the convenience method
 * {@link #getTooltip_AsString} instead. If they want to get a tooltip text no
 * matter where it comes from (be it a string tooltip or the text from a TooltipBase
 * instance) then they could call {@link #getTooltip_Text} instead.
 * 
 * If a content control is assigned to the InPlaceEdit the tooltip of this control
 * is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
 * @return {string|sap.ui.core.TooltipBase} The tooltip for this Element.
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.getTooltip = function() { return ""; };

/**
 * Getter for property <code>undoEnabled</code>.
 * If undo is enabled after changing the text an undo button appears.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>undoEnabled</code>
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.getUndoEnabled = function() { return false; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success.
 * If the content control has a own valueState property this will be used.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent the content to set
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.setContent = function(oContent) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.TextViewDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @since 1.9.0
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.setDesign = function(sDesign) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Sets a new tooltip for this InPlaceEdit. The tooltip can either be a simple string
 * (which in most cases will be rendered as the <code>title</code> attribute of this
 * Element) or an instance of {@link sap.ui.core.TooltipBase}.
 * 
 * If a new tooltip is set, any previously set tooltip is deactivated.
 * 
 * If a content control is assigned to the InPlaceEdit the tooltip of this control
 * is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
 * @param {string|sap.ui.core.TooltipBase} oTooltip Tooltip as string or RichTooltip.
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.setTooltip = function(oTooltip) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Setter for property <code>undoEnabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUndoEnabled new value for property <code>undoEnabled</code>
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.setUndoEnabled = function(bUndoEnabled) { return new sap.ui.commons.InPlaceEdit(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.InPlaceEdit.prototype.setValueState = function(sValueState) { return new sap.ui.commons.InPlaceEdit(); };


// ---- sap.ui.commons.Label --------------------------------------------------------------------------

/**
 * Constructor for a new Label.
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
 * <li>{@link #getDesign design} : sap.ui.commons.LabelDesign</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getText text} : string (default: )</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getRequiredAtBegin requiredAtBegin} : boolean</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Is used for labeling other controls. The API provides formatting options, for example for bold display or alignment. A label can have an icon.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem,sap.ui.core.Label
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Label = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.Label with name <code>sClassName</code>
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
sap.ui.commons.Label.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>design</code>.
 * Labels can have bold format.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.LabelDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getDesign = function() { return new sap.ui.commons.LabelDesign(); };

/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed in the control.
 * This can be an URI to an image or an icon font URI.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Id of the element which is the current target of the <code>labelFor</code> association, or null
 * 
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getLabelFor = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.commons.Label.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Label.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>required</code>.
 * Allows to enforce the required indicator even when the associated control doesn't have a getRequired method (a required property) or when the flag is not set.
 * If the associated control has a required property, the values of both required flags are combined with the OR operator, so a Label can't override a required=true value.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>required</code>
 * @since 1.11.0
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getRequired = function() { return false; };

/**
 * Getter for property <code>requiredAtBegin</code>.
 * If set the required indicator is at the begin of the label, if not set at the end.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>requiredAtBegin</code>
 * @since 1.14.0
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getRequiredAtBegin = function() { return false; };

/**
 * Getter for property <code>text</code>.
 * Text to be displayed.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>textAlign</code>.
 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>wrapping</code>.
 * Specifies whether a line wrapping shall be displayed when the text value is longer than the width
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getWrapping = function() { return false; };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.LabelDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setDesign = function(sDesign) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setIcon = function(sIcon) { return new sap.ui.commons.Label(); };

/**
 * Setter for the associated <code>labelFor</code>.
 * @param {sap.ui.core.Control} oLabelFor Id of an element which becomes the new target of this labelFor association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setLabelFor = function(oLabelFor) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>required</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bRequired new value for property <code>required</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @since 1.11.0
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setRequired = function(bRequired) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>requiredAtBegin</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bRequiredAtBegin new value for property <code>requiredAtBegin</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @since 1.14.0
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setRequiredAtBegin = function(bRequiredAtBegin) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setText = function(sText) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>textAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign new value for property <code>textAlign</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Label(); };

/**
 * Setter for property <code>wrapping</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bWrapping new value for property <code>wrapping</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Label.prototype.setWrapping = function(bWrapping) { return new sap.ui.commons.Label(); };


// ---- sap.ui.commons.LabelDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.LabelDesign.toString = function() { return ""; };

// ---- sap.ui.commons.layout.AbsoluteLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/AbsoluteLayout.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getVerticalScrolling verticalScrolling} : sap.ui.core.Scrolling</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : sap.ui.core.Scrolling</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPositions positions} : sap.ui.commons.layout.PositionContainer[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * The Absolute Layout positions its child controls absolutely
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout = function(sId,mSettings) {};
/**
 * Adds the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
 * @param {sap.ui.core.Control} oContent
 *         The content to add; if empty, nothing is inserted.
 * @param {object} oPos
 *         JSON-like object which defines the position of the child control in the layout. The object is expected to have one or more from the attribute set
 *         top, bottom, left, right; each with a value of type sap.ui.core.CSSSize. If no object is given, the default is left=0px,right=0px
 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.addContent = function(oContent,oPos) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Adds some position into the aggregation named <code>positions</code>.
 * @param {sap.ui.commons.layout.PositionContainer}
 *            oPosition the position to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.addPosition = function(oPosition) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Destroys all aggregated position containers and their child controls. Returns 'this' to allow method chaining.
 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.destroyContent = function() { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Destroys all the positions in the aggregation
 * named <code>positions</code>.
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.destroyPositions = function() { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.AbsoluteLayout with name <code>sClassName</code>
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
sap.ui.commons.layout.AbsoluteLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns an array of the controls contained in the aggregated position containers (might be empty).
 * @type sap.ui.core.Control[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>height</code>.
 * The overall height of the control. When not set, 100% is automatically set.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>horizontalScrolling</code>.
 * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Scrolling} the value of property <code>horizontalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getHorizontalScrolling = function() { return new sap.ui.core.Scrolling(); };

/**
 * Returns a metadata object for class sap.ui.commons.layout.AbsoluteLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>positions</code>.<br/>
 * Positioned child controls within the layout
 * @return {sap.ui.commons.layout.PositionContainer[]}
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getPositions = function() { return new Array(); };

/**
 * Getter for property <code>verticalScrolling</code>.
 * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Scrolling} the value of property <code>verticalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getVerticalScrolling = function() { return new sap.ui.core.Scrolling(); };

/**
 * Getter for property <code>width</code>.
 * The overall width of the control. When not set, 100% is automatically set.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided sap.ui.core.Control in the aggregated position containers, and returns the index of the container in the positions aggregation
 * if found, or '-1' otherwise.
 * @param {sap.ui.core.Control} oContent
 *         The content of which the index is looked for
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.commons.layout.PositionContainer</code> in the aggregation named <code>positions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.layout.PositionContainer}
 *           oPosition the position whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.indexOfPosition = function(oPosition) { return 0; };

/**
 * Inserts the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
 * @param {sap.ui.core.Control} oContent
 *         The content to insert; if empty, nothing is inserted
 * @param {int} iIndex
 *         The '0'-based index where the content shall be inserted at. For a negative value of iIndex, the content is inserted at position '0';
 *         for a value greater than the current size of the aggregation, the content is inserted at the last position.
 * @param {object} oPos
 *         JSON-like object which defines the position of the child control within the layout. The object is expected to have one or more
 *         from the attribute set top, bottom, left, right; each with a value of type sap.ui.core.CSSSize. If no object is given, the default is left=0px,right=0px.
 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.insertContent = function(oContent,iIndex,oPos) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Inserts a position into the aggregation named <code>positions</code>.
 * @param {sap.ui.commons.layout.PositionContainer}
 *            oPosition the position to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the position should be inserted at; for
 *              a negative value of <code>iIndex</code>, the position is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the position is inserted at
 *              the last position
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.insertPosition = function(oPosition,iIndex) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Removes all aggregated position containers. Returns an array of the controls contained in the removed position containers (might be empty).
 * @type sap.ui.core.Control[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>positions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.PositionContainer[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.removeAllPositions = function() { return new Array(); };

/**
 * Removes the given control and its corresponding position container from the aggregation named 'positions'.
 * @param {object} oContent
 *         The content control to remove, its ID, or the index of the corresponding position container in the 'positions' aggregation.
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.removeContent = function(oContent) { return new sap.ui.core.Control(); };

/**
 * Removes an position from the aggregation named <code>positions</code>.
 * @param {int | string | sap.ui.commons.layout.PositionContainer} vPosition the positionto remove or its index or id
 * @return {sap.ui.commons.layout.PositionContainer} the removed position or null
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.removePosition = function(vPosition) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.setHeight = function(sHeight) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Setter for property <code>horizontalScrolling</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Scrolling} sHorizontalScrolling new value for property <code>horizontalScrolling</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.setHorizontalScrolling = function(sHorizontalScrolling) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Allows to set or change the position information of the given child control
 * @param {sap.ui.core.Control} oControl
 *         The child control for which to change the position information; if empty or not aggregated, nothing is changed
 * @param {object} oPos
 *         JSON-like object which defines the position of the child control. The object is expected to have one or more from the attribute set
 *         top, bottom, left, right; each with a value of type sap.ui.core.CSSSize.
 *         If no object is given, the default is used which is left=0px,right=0px.
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.setPositionOfChild = function(oControl,oPos) { return false; };

/**
 * Setter for property <code>verticalScrolling</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Scrolling} sVerticalScrolling new value for property <code>verticalScrolling</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.setVerticalScrolling = function(sVerticalScrolling) { return new sap.ui.commons.layout.AbsoluteLayout(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.setWidth = function(sWidth) { return new sap.ui.commons.layout.AbsoluteLayout(); };


// ---- sap.ui.commons.layout.BackgroundDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.BackgroundDesign.toString = function() { return ""; };

// ---- sap.ui.commons.layout.BorderLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/BorderLayout.
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
 * <li>{@link #getRtl rtl} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTop top} : sap.ui.commons.layout.BorderLayoutArea</li>
 * <li>{@link #getBegin begin} : sap.ui.commons.layout.BorderLayoutArea</li>
 * <li>{@link #getCenter center} : sap.ui.commons.layout.BorderLayoutArea</li>
 * <li>{@link #getEnd end} : sap.ui.commons.layout.BorderLayoutArea</li>
 * <li>{@link #getBottom bottom} : sap.ui.commons.layout.BorderLayoutArea</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Based upon the border layout as it comes with the Java standard. Using this layout, you are able to divide your available UI space into five areas whose sizes can be defined. These areas are: Top: Header; Bottom: Footer; Begin: Left/right-hand side panel; Center: Content area
 * in the middle; End: Right/left-hand side panel.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout = function(sId,mSettings) {};
/**
 * Adds controls to the specified area
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area where controls will be added
 * @param {sap.ui.core.Control} oControls
 *         N controls can be submitted to be added. Each control is submitted as one argument.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.addContent = function(oAreaId,oControls) { return null; };

/**
 * Creates the specified area and adds the given controls to it. Returns the created area.
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies which area will be created. If the area is already available, the method call is ignored.
 * @param {sap.ui.core.Control} oControls
 *         Any number of controls can be submitted to be added to the newly created area; where each control is submitted as one argument.
 * @type sap.ui.commons.layout.BorderLayoutArea
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.createArea = function(oAreaId,oControls) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Destroys the begin in the aggregation
 * named <code>begin</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyBegin = function() { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Destroys the bottom in the aggregation
 * named <code>bottom</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyBottom = function() { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Destroys the center in the aggregation
 * named <code>center</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyCenter = function() { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Destroys the content of the specified area
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose content will be destroyed
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyContent = function(oAreaId) { return null; };

/**
 * Destroys the end in the aggregation
 * named <code>end</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyEnd = function() { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Destroys the top in the aggregation
 * named <code>top</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyTop = function() { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.BorderLayout with name <code>sClassName</code>
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
sap.ui.commons.layout.BorderLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the area of the given type. If the area does not exist, it will be created when create is set to true.
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 * @param {boolean} bCreate
 * @type sap.ui.commons.layout.BorderLayoutAreaTypes
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getArea = function(oAreaId,bCreate) { return new sap.ui.commons.layout.BorderLayoutAreaTypes(); };

/**
 * Returns the object of the specified area. If the area does not exist, the area will be created and returned.
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose object will be returned.
 * @type sap.ui.commons.layout.BorderLayoutArea
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getAreaById = function(oAreaId) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Returns a JSON-like object that contains all property values of the requested area
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose data will be returned
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getAreaData = function(oAreaId) { return new Object(); };

/**
 * Getter for aggregation <code>begin</code>.<br/>
 * Represents the Begin area
 * @return {sap.ui.commons.layout.BorderLayoutArea}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getBegin = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Getter for aggregation <code>bottom</code>.<br/>
 * Represents the Bottom area
 * @return {sap.ui.commons.layout.BorderLayoutArea}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getBottom = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Getter for aggregation <code>center</code>.<br/>
 * Represents the Center area
 * @return {sap.ui.commons.layout.BorderLayoutArea}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getCenter = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Returns all controls inside the specified area inside an array
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose content controls shall be returned.
 * @type sap.ui.core.Control[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getContent = function(oAreaId) { return new Array(); };

/**
 * Getter for aggregation <code>end</code>.<br/>
 * Represents the End area
 * @return {sap.ui.commons.layout.BorderLayoutArea}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getEnd = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Getter for property <code>height</code>.
 * Defines the overall height of the layout
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.layout.BorderLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.BorderLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>rtl</code>.
 * The RTL setting swaps the areas Begin and End. Since version 1.5.2, this property is deprecated and ignored as it conflicts with the central configuration for the page.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>rtl</code>
 * @deprecated Since version 1.5.2. 
 * RTL should not be configured on control level but is determined by a global configuration.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getRtl = function() { return false; };

/**
 * Getter for aggregation <code>top</code>.<br/>
 * Represents the Top area
 * @return {sap.ui.commons.layout.BorderLayoutArea}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getTop = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Getter for property <code>width</code>.
 * Defines the overall width of the layout
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Determines the index of a given content control
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area that will be searched
 * @param {sap.ui.core.Control} oContent
 *         Specifies the control whose index will be searched
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.indexOfContent = function(oAreaId,oContent) { return 0; };

/**
 * Inserts controls to an area at a given index.
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area where the controls shall be inserted.
 * @param {int} iIndex
 *         Specifies the index where the controls shall be added. For a negative value of iIndex, the content is inserted at
 *         position '0'; for a value greater than the current size of the aggregation, the content is inserted at the last position.
 * @param {sap.ui.core.Control} oControl
 *         N controls can be submitted to be added. Each control is submitted as one argument.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.insertContent = function(oAreaId,iIndex,oControl) { return null; };

/**
 * Removes all content from an area
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose content shall be removed
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.removeAllContent = function(oAreaId) { return null; };

/**
 * Removes the content with the given index from an area
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose content shall be removed
 * @param {int} iIndex
 *         Specifies the index of the control that shall be removed
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.removeContent = function(oAreaId,iIndex) { return null; };

/**
 * Sets the properties of the specified area with the given values
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId
 *         Specifies the area whose properties will be set
 * @param {object} oData
 *         JSON-like object that contains the values to be set
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setAreaData = function(oAreaId,oData) { return null; };

/**
 * Setter for the aggregated <code>begin</code>.
 * @param {sap.ui.commons.layout.BorderLayoutArea} oBegin the begin to set
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setBegin = function(oBegin) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for the aggregated <code>bottom</code>.
 * @param {sap.ui.commons.layout.BorderLayoutArea} oBottom the bottom to set
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setBottom = function(oBottom) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for the aggregated <code>center</code>.
 * @param {sap.ui.commons.layout.BorderLayoutArea} oCenter the center to set
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setCenter = function(oCenter) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for the aggregated <code>end</code>.
 * @param {sap.ui.commons.layout.BorderLayoutArea} oEnd the end to set
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setEnd = function(oEnd) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setHeight = function(sHeight) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for property <code>rtl</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bRtl new value for property <code>rtl</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @deprecated Since version 1.5.2. 
 * RTL should not be configured on control level but is determined by a global configuration.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setRtl = function(bRtl) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for the aggregated <code>top</code>.
 * @param {sap.ui.commons.layout.BorderLayoutArea} oTop the top to set
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setTop = function(oTop) { return new sap.ui.commons.layout.BorderLayout(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.setWidth = function(sWidth) { return new sap.ui.commons.layout.BorderLayout(); };


// ---- sap.ui.commons.layout.BorderLayoutArea --------------------------------------------------------------------------

/**
 * Constructor for a new layout/BorderLayoutArea.
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
 * <li>{@link #getAreaId areaId} : sap.ui.commons.layout.BorderLayoutAreaTypes</li>
 * <li>{@link #getOverflowX overflowX} : string (default: auto)</li>
 * <li>{@link #getOverflowY overflowY} : string (default: auto)</li>
 * <li>{@link #getContentAlign contentAlign} : string (default: left)</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize (default: 100px)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The BorderLayoutArea represents one area of a BorderLayout
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.BorderLayoutArea = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.addContent = function(oContent) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.destroyContent = function() { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.BorderLayoutArea with name <code>sClassName</code>
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
sap.ui.commons.layout.BorderLayoutArea.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>areaId</code>.
 * Defines which area the element represents: top, begin, center, end, bottom
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.layout.BorderLayoutAreaTypes} the value of property <code>areaId</code>
 * @deprecated Since version 1.3.3. 
 * Redundant to the aggregation by the parent border layout.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getAreaId = function() { return new sap.ui.commons.layout.BorderLayoutAreaTypes(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls within the area
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>contentAlign</code>.
 * The content alignment as CSS value
 * 
 * Default value is <code>left</code>
 * @return {string} the value of property <code>contentAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getContentAlign = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.BorderLayoutArea.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>overflowX</code>.
 * The overflow mode of the area in horizontal direction as CSS value
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>overflowX</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getOverflowX = function() { return ""; };

/**
 * Getter for property <code>overflowY</code>.
 * The overflow mode of the area in vertical direction as CSS value
 * 
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>overflowY</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getOverflowY = function() { return ""; };

/**
 * Getter for property <code>size</code>.
 * Defines the height or the width. Is not used when the area element is in Center.
 * 
 * Default value is <code>100px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>areaId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} sAreaId new value for property <code>areaId</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @deprecated Since version 1.3.3. 
 * Redundant to the aggregation by the parent border layout.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setAreaId = function(sAreaId) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Setter for property <code>contentAlign</code>.
 * 
 * Default value is <code>left</code>.
 * @param {string} sContentAlign new value for property <code>contentAlign</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setContentAlign = function(sContentAlign) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Setter for property <code>overflowX</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sOverflowX new value for property <code>overflowX</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setOverflowX = function(sOverflowX) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Setter for property <code>overflowY</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sOverflowY new value for property <code>overflowY</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setOverflowY = function(sOverflowY) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Setter for property <code>size</code>.
 * 
 * Default value is <code>100px</code>.
 * @param {sap.ui.core.CSSSize} sSize new value for property <code>size</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setSize = function(sSize) { return new sap.ui.commons.layout.BorderLayoutArea(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible = function(bVisible) { return new sap.ui.commons.layout.BorderLayoutArea(); };


// ---- sap.ui.commons.layout.BorderLayoutAreaTypes --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.BorderLayoutAreaTypes.toString = function() { return ""; };

// ---- sap.ui.commons.layout.HAlign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.HAlign.toString = function() { return ""; };

// ---- sap.ui.commons.layout.HorizontalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/HorizontalLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A layout that provides support for horizontal alignment of controls
 * @extends sap.ui.layout.HorizontalLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.HorizontalLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.layout.HorizontalLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.HorizontalLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.HorizontalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.HorizontalLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.HorizontalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.layout.MatrixLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/MatrixLayout.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getLayoutFixed layoutFixed} : boolean (default: true)</li>
 * <li>{@link #getColumns columns} : int</li>
 * <li>{@link #getWidths widths} : sap.ui.core.CSSSize[]</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.ui.commons.layout.MatrixLayoutRow[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * <p>
 * A matrix layout arranges controls in a grid structure, using rows which
 * need not have the same number of cells.
 * </p>
 * 
 * <p>
 * It uses predefined cell classes that guarantee appropriate distances
 * between cells in the grid. The cell's <code>vGutter</code> property lets
 * you specify additional horizontal distances easily. You can set these
 * additional distances (known as gutters) with or without separators.
 * The distance for each cell is specified by assigning a specific
 * enumeration value of the class <code>LayoutCellSeparator</code> of the
 * matrix data object.
 * </p>
 * 
 * <p>
 * You should <b>avoid nesting</b> matrix layouts. You should only use a
 * matrix layout if you need to align controls horizontally across rows.
 * </p>
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayout = function(sId,mSettings) {};
/**
 * Adds some row into the aggregation named <code>rows</code>.
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.addRow = function(oRow) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Creates a new matrix layout row and appends it to this matrix layout.
 * 
 * Each argument must be either a matrix layout cell, which is added to the row
 * "as is", or an arbitrary content control, which is wrapped with a new
 * (default) matrix layout cell first and then added to the row.
 * @param {sap.ui.core.Control|sap.ui.commons.layout.MatrixLayoutCell|string} rowContent to add
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.createRow = function(rowContent) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Destroys all the rows in the aggregation
 * named <code>rows</code>.
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.destroyRows = function() { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayout with name <code>sClassName</code>
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
sap.ui.commons.layout.MatrixLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>columns</code>.
 * Number of columns. If not specified, the number of columns will be determined from the given cells.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>columns</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getColumns = function() { return 0; };

/**
 * Getter for property <code>height</code>.
 * CSS height of the matrix layout.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>layoutFixed</code>.
 * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the content of the colums has priority.
 * The default is "fixed".
 * If the fixed layout is used a adequate width of the MatrixLayout should be provided. Otherwise the column width displayed could be different than the given ones because of browser dependend optimazations.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>layoutFixed</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getLayoutFixed = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.MatrixLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.MatrixLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>rows</code>.<br/>
 * The matrix layout's individual rows.
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]}
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getRows = function() { return new Array(); };

/**
 * Getter for property <code>width</code>.
 * CSS width of the matrix layout.
 * If the LayoutFixed = true a adequate width should be provided.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>widths</code>.
 * Widths of the columns. Use an array to define the widths of the columns.
 * If a column shall have an automatical sizing enter "auto" for this column width.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize[]} the value of property <code>widths</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getWidths = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutRow</code> in the aggregation named <code>rows</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *           oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Inserts a row into the aggregation named <code>rows</code>.
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the row should be inserted at; for
 *              a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the row is inserted at
 *              the last position
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.insertRow = function(oRow,iIndex) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.removeAllRows = function() { return new Array(); };

/**
 * Removes an row from the aggregation named <code>rows</code>.
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutRow} vRow the rowto remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutRow} the removed row or null
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.removeRow = function(vRow) { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * Setter for property <code>columns</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iColumns new value for property <code>columns</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.setColumns = function(iColumns) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.setHeight = function(sHeight) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Setter for property <code>layoutFixed</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLayoutFixed new value for property <code>layoutFixed</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.setLayoutFixed = function(bLayoutFixed) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidth = function(sWidth) { return new sap.ui.commons.layout.MatrixLayout(); };

/**
 * Setter for property <code>widths</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize[]} sWidths new value for property <code>widths</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidths = function(sWidths) { return new sap.ui.commons.layout.MatrixLayout(); };


// ---- sap.ui.commons.layout.MatrixLayoutCell --------------------------------------------------------------------------

/**
 * Constructor for a new layout/MatrixLayoutCell.
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
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.commons.layout.BackgroundDesign (default: Transparent)</li>
 * <li>{@link #getColSpan colSpan} : int (default: 1)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.commons.layout.HAlign (default: Begin)</li>
 * <li>{@link #getPadding padding} : sap.ui.commons.layout.Padding (default: End)</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getSeparation separation} : sap.ui.commons.layout.Separation (default: None)</li>
 * <li>{@link #getVAlign vAlign} : sap.ui.commons.layout.VAlign (default: Middle)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Non-control element used as part of a matrix layout's inner structure.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.addContent = function(oContent) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
 * 
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * 
 * <pre>
 * Example:
 * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 * .myRedTextButton {
 * color: red;
 * }
 * </pre>
 * 
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * 
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * 
 * Returns <code>this</code> to allow method chaining
 * @param {string} sStyleClass
 *         the CSS class name to be added
 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.addStyleClass = function(sStyleClass) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.destroyContent = function() { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutCell with name <code>sClassName</code>
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
sap.ui.commons.layout.MatrixLayoutCell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>backgroundDesign</code>.
 * Determines the matrix layout cell's background design.
 * 
 * Default value is <code>Transparent</code>
 * @return {sap.ui.commons.layout.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getBackgroundDesign = function() { return new sap.ui.commons.layout.BackgroundDesign(); };

/**
 * Getter for property <code>colSpan</code>.
 * Determines how many columns of the underlying grid structure are occupied
 * by this matrix layout cell.
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>colSpan</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getColSpan = function() { return 0; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * The matrix layout cell's content (arbitrary controls).
 * 
 * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of a cell should all use the same unit for its height property.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>hAlign</code>.
 * Determines the horizontal alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 * Default value is <code>Begin</code>
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getHAlign = function() { return new sap.ui.commons.layout.HAlign(); };

/**
 * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutCell.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>padding</code>.
 * Determines the padding of the matrix layout cell's content within the
 * cell's borders. The default value is appropriate for all cells in a
 * form-like layout. Consider to remove the padding on the outer layout in
 * case of nesting.
 * 
 * Default value is <code>End</code>
 * @return {sap.ui.commons.layout.Padding} the value of property <code>padding</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getPadding = function() { return new sap.ui.commons.layout.Padding(); };

/**
 * Getter for property <code>rowSpan</code>.
 * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell.
 * In case a row-height is used, all rows affected by the RowSpan must have the same unit.
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>rowSpan</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getRowSpan = function() { return 0; };

/**
 * Getter for property <code>separation</code>.
 * Determines how a matrix layout cell is separated from its predecessor,
 * via a vertical gutter of variable width, with or without a vertical line.
 * 
 * Default value is <code>None</code>
 * @return {sap.ui.commons.layout.Separation} the value of property <code>separation</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getSeparation = function() { return new sap.ui.commons.layout.Separation(); };

/**
 * Getter for property <code>vAlign</code>.
 * Determines the vertical alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 * Default value is <code>Middle</code>
 * @return {sap.ui.commons.layout.VAlign} the value of property <code>vAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getVAlign = function() { return new sap.ui.commons.layout.VAlign(); };

/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 * @param {string} sStyleClass
 *         the style to check for
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.hasStyleClass = function(sStyleClass) { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 * @param {string} sStyleClass
 *         the style to be removed
 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.removeStyleClass = function(sStyleClass) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>backgroundDesign</code>.
 * 
 * Default value is <code>Transparent</code>.
 * @param {sap.ui.commons.layout.BackgroundDesign} sBackgroundDesign new value for property <code>backgroundDesign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>colSpan</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColSpan new value for property <code>colSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setColSpan = function(iColSpan) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>hAlign</code>.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.ui.commons.layout.HAlign} sHAlign new value for property <code>hAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setHAlign = function(sHAlign) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>padding</code>.
 * 
 * Default value is <code>End</code>.
 * @param {sap.ui.commons.layout.Padding} sPadding new value for property <code>padding</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setPadding = function(sPadding) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>rowSpan</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iRowSpan new value for property <code>rowSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setRowSpan = function(iRowSpan) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>separation</code>.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.commons.layout.Separation} sSeparation new value for property <code>separation</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setSeparation = function(sSeparation) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Setter for property <code>vAlign</code>.
 * 
 * Default value is <code>Middle</code>.
 * @param {sap.ui.commons.layout.VAlign} sVAlign new value for property <code>vAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setVAlign = function(sVAlign) { return new sap.ui.commons.layout.MatrixLayoutCell(); };


// ---- sap.ui.commons.layout.MatrixLayoutRow --------------------------------------------------------------------------

/**
 * Constructor for a new layout/MatrixLayoutRow.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} : sap.ui.commons.layout.MatrixLayoutCell[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Non-control element used as part of a matrix layout's inner structure.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow = function(sId,mSettings) {};
/**
 * Adds some cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.addCell = function(oCell) { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
 * 
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * 
 * <pre>
 * Example:
 * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 * .myRedTextButton {
 * color: red;
 * }
 * </pre>
 * 
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * 
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * 
 * Returns <code>this</code> to allow method chaining
 * @param {string} sStyleClass
 *         the CSS class name to be added
 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.addStyleClass = function(sStyleClass) { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * Destroys all the cells in the aggregation
 * named <code>cells</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.destroyCells = function() { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutRow with name <code>sClassName</code>
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
sap.ui.commons.layout.MatrixLayoutRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>cells</code>.<br/>
 * The matrix layout row's individual cells.
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]}
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.getCells = function() { return new Array(); };

/**
 * Getter for property <code>height</code>.
 * Height of the row.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutRow.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 * @param {string} sStyleClass
 *         the style to check for
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.hasStyleClass = function(sStyleClass) { return false; };

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutCell</code> in the aggregation named <code>cells</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *           oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the cell should be inserted at; for
 *              a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the cell is inserted at
 *              the last position
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.insertCell = function(oCell,iIndex) { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.removeAllCells = function() { return new Array(); };

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutCell} vCell the cellto remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutCell} the removed cell or null
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.removeCell = function(vCell) { return new sap.ui.commons.layout.MatrixLayoutCell(); };

/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 * @param {string} sStyleClass
 *         the style to be removed
 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.removeStyleClass = function(sStyleClass) { return new sap.ui.commons.layout.MatrixLayoutRow(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.setHeight = function(sHeight) { return new sap.ui.commons.layout.MatrixLayoutRow(); };


// ---- sap.ui.commons.layout.Padding --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.Padding.toString = function() { return ""; };

// ---- sap.ui.commons.layout.PositionContainer --------------------------------------------------------------------------

/**
 * Constructor for a new layout/PositionContainer.
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
 * <li>{@link #getTop top} : sap.ui.core.CSSSize</li>
 * <li>{@link #getBottom bottom} : sap.ui.core.CSSSize</li>
 * <li>{@link #getLeft left} : sap.ui.core.CSSSize</li>
 * <li>{@link #getRight right} : sap.ui.core.CSSSize</li>
 * <li>{@link #getCenterHorizontally centerHorizontally} : boolean (default: false)</li>
 * <li>{@link #getCenterVertically centerVertically} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControl control} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to specify the position of a control in the AbsoluteLayout
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.PositionContainer = function(sId,mSettings) {};
/**
 * Destroys the control in the aggregation
 * named <code>control</code>.
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.destroyControl = function() { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Creates a new subclass of class sap.ui.commons.layout.PositionContainer with name <code>sClassName</code>
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
sap.ui.commons.layout.PositionContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>bottom</code>.
 * Defines the distance to the bottom of the layout (as specified in HTML)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>bottom</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getBottom = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>centerHorizontally</code>.
 * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area.
 * The values of the attributes left and right are ignored when this feature is activated.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>centerHorizontally</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getCenterHorizontally = function() { return false; };

/**
 * Getter for property <code>centerVertically</code>.
 * Indicates whether this container should be centered vertically within the AbsoluteLayout area.
 * The values of the attributes top and bottom are ignored when this feature is activated.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>centerVertically</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getCenterVertically = function() { return false; };

/**
 * Getter for aggregation <code>control</code>.<br/>
 * Child control of the position container
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>left</code>.
 * Defines the distance to the left of the layout (as specified in HTML)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>left</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getLeft = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.layout.PositionContainer.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.PositionContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>right</code>.
 * Defines the distance to the right of the layout (as specified in HTML)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>right</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getRight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>top</code>.
 * Defines the distance to the top of the layout (as specified in HTML)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>top</code>
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.getTop = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>bottom</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sBottom new value for property <code>bottom</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setBottom = function(sBottom) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>centerHorizontally</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCenterHorizontally new value for property <code>centerHorizontally</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setCenterHorizontally = function(bCenterHorizontally) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>centerVertically</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCenterVertically new value for property <code>centerVertically</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setCenterVertically = function(bCenterVertically) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for the aggregated <code>control</code>.
 * @param {sap.ui.core.Control} oControl the control to set
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setControl = function(oControl) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>left</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sLeft new value for property <code>left</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setLeft = function(sLeft) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>right</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sRight new value for property <code>right</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setRight = function(sRight) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Setter for property <code>top</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sTop new value for property <code>top</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.setTop = function(sTop) { return new sap.ui.commons.layout.PositionContainer(); };

/**
 * Updates the position properties of the container according to the given position in JSON style.
 * @param {object} oPos
 *         JSON-like object which defines the position of the child control in the absolute layout. The object is expected
 *         to have one or more out of the attributes top, bottom, left, right (each with a value of type sap.ui.core.CSSSize). If no object
 *         is given, nothing is updated.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.PositionContainer.prototype.updatePosition = function(oPos) { return null; };


// ---- sap.ui.commons.layout.ResponsiveFlowLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/ResponsiveFlowLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit a whole line. If the window resizes the controls are moved between the lines and resized again.
 * @extends sap.ui.layout.ResponsiveFlowLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.layout.ResponsiveFlowLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new layout/ResponsiveFlowLayoutData.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
 * @extends sap.ui.layout.ResponsiveFlowLayoutData
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayoutData.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>margin</code>.
 * This property prevents any margin of the element if set to false
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>margin</code>
 * @public
 * @since 1.11.0
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.prototype.getMargin = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayoutData.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>margin</code>.
 * 
 * Default value is <code>true</code>
 * @param {boolean} bMargin new value for property <code>margin</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * 
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.prototype.setMargin = function(bMargin) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };


// ---- sap.ui.commons.layout.Separation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.Separation.toString = function() { return ""; };

// ---- sap.ui.commons.layout.VAlign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.layout.VAlign.toString = function() { return ""; };

// ---- sap.ui.commons.layout.VerticalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new layout/VerticalLayout.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * In this layout the elemnts are orderd one below the other
 * @extends sap.ui.layout.VerticalLayout
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.16.0. 
 * Moved to sap.ui.layout library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.layout.VerticalLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.layout.VerticalLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.VerticalLayout.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.VerticalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.layout.VerticalLayout.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.layout.VerticalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.Link --------------------------------------------------------------------------

/**
 * Constructor for a new Link.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getHelpId helpId} : string (default: )</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * <li>{@link #getTarget target} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Provides an absolute or relative reference to an internal or external URL. The classical target parameters are supported.
 * Another usage scenario is triggering an action, for example to open a popup window. In both cases, the link is a hypertext link.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem,sap.ui.commons.FormattedTextViewControl
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Link = function(sId,mSettings) {};
/**
 * Event is fired when the user clicks the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.Link.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.Link(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.Link(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Link</code>.<br> itself.
 * 
 * Event is fired when the user clicks the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Link</code>.<br/> itself.
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.commons.Link(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.commons.Link(); };

/**
 * Creates a new subclass of class sap.ui.commons.Link with name <code>sClassName</code>
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
sap.ui.commons.Link.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event press to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.commons.Link.prototype.firePress = function(mArguments) { return false; };

/**
 * Puts the focus to the link.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Link.prototype.focus = function() { return null; };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * Whether the link can be triggered by the user.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help service.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getHelpId = function() { return ""; };

/**
 * Getter for property <code>href</code>.
 * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "press" event should be registered.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getHref = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.commons.Link.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Link.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>target</code>.
 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>target</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getTarget = function() { return ""; };

/**
 * Getter for property <code>text</code>.
 * Link text to be displayed.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text defines the size.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @since 1.8.0
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Link.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Link.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.Link.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.Link.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.Link(); };

/**
 * Setter for property <code>helpId</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sHelpId new value for property <code>helpId</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setHelpId = function(sHelpId) { return new sap.ui.commons.Link(); };

/**
 * Setter for property <code>href</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sHref new value for property <code>href</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setHref = function(sHref) { return new sap.ui.commons.Link(); };

/**
 * Setter for property <code>target</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTarget new value for property <code>target</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setTarget = function(sTarget) { return new sap.ui.commons.Link(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setText = function(sText) { return new sap.ui.commons.Link(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @since 1.8.0
 * @public
 * 
 */
sap.ui.commons.Link.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Link(); };


// ---- sap.ui.commons.ListBox --------------------------------------------------------------------------

/**
 * Constructor for a new ListBox.
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
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getAllowMultiSelect allowMultiSelect} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScrollTop scrollTop} : int</li>
 * <li>{@link #getDisplayIcons displayIcons} : boolean (default: false)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getValueTextAlign valueTextAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getSecondaryValueTextAlign secondaryValueTextAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisibleItems visibleItems} : int</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li>
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
 * Provides a list of items from which users can choose an item. For the design of the list box, features such as defining the list box height,
 * fixing the number of visible items, choosing one item to be the item that is marked by default when the list box is shown, or a scroll bar for large list boxes
 * are available.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox = function(sId,mSettings) {};
/**
 * Event is fired when selection is changed by user interaction.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id ID of the ListBox which triggered the event.
 * @param {int} oControlEvent.getParameters.selectedIndex The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change; to get all currently selected indices, use selectedIndices.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change.
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array containing the indices which are selected.
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.ListBox(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.ListBox(); };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.addItem = function(oItem) { return new sap.ui.commons.ListBox(); };

/**
 * Adds the given index to current selection. When multiple selection is disabled, this replaces the current selection. When the given index is invalid, the call is ignored.
 * @param {int} iIndex
 *         Index to add to selection.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.addSelectedIndex = function(iIndex) { return new sap.ui.commons.ListBox(); };

/**
 * Adds the given indices to selection. Any invalid indices are ignored.
 * @param {int[]} aIndices
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.addSelectedIndices = function(aIndices) { return new sap.ui.commons.ListBox(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ListBox</code>.<br> itself.
 * 
 * Event is fired when selection is changed by user interaction.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ListBox</code>.<br/> itself.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.ListBox(); };

/**
 * Removes complete selection.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.clearSelection = function() { return new sap.ui.commons.ListBox(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.destroyItems = function() { return new sap.ui.commons.ListBox(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.ListBox(); };

/**
 * Creates a new subclass of class sap.ui.commons.ListBox with name <code>sClassName</code>
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
sap.ui.commons.ListBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code>ID of the ListBox which triggered the event.</li>
 * <li>'selectedIndex' of type <code>int</code>The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change; to get all currently selected indices, use selectedIndices.</li>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code>The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change.</li>
 * <li>'selectedIndices' of type <code>int[]</code>Array containing the indices which are selected.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ListBox.prototype.fireSelect = function(mArguments) { return new sap.ui.commons.ListBox(); };

/**
 * Getter for property <code>allowMultiSelect</code>.
 * Specifies whether multiple selection is allowed.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>allowMultiSelect</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getAllowMultiSelect = function() { return false; };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>displayIcons</code>.
 * Defines whether the icons of the list items shall also be displayed. Enabling icons requires some space to be reserved for them. Displaying icons can also
 * influence the width and height of a single item, which affects the overall height of the ListBox when defined in number of items.
 * Note that the number of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the total ListBox height.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displayIcons</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getDisplayIcons = function() { return false; };

/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getDisplaySecondaryValues = function() { return false; };

/**
 * Getter for property <code>editable</code>.
 * Value "true" makes the list box interactive.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have another color display depending on custom settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>height</code>.
 * Control height as common CSS-size (px or % as unit, for example).
 * The setting overrides any definitions made for the setVisibleItems() method.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getItems = function() { return new Array(); };

/**
 * Getter for property <code>maxWidth</code>.
 * The maximum width of the ListBox. If not set, there is no maximum width.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getMaxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.ListBox.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ListBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minWidth</code>.
 * The minimum width of the ListBox. If not set, there is no minimum width.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns how many pixels the ListBox contents are currently scrolled down
 * @return {int} Vertical scroll position
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getScrollTop = function() { return 0; };

/**
 * Getter for property <code>secondaryValueTextAlign</code>.
 * The text alignment in the secondary ListBox text column (if available).
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>secondaryValueTextAlign</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getSecondaryValueTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Zero-based index of selected item. Index value for no selection is -1. When multiple selection is enabled and multiple items are selected, the method returns the first selected item.
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.getSelectedIndex = function() { return 0; };

/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * @type int[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
 * @type sap.ui.core.Item
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.getSelectedItem = function() { return new sap.ui.core.Item(); };

/**
 * Returns an array containing the selected items. In the case of no selection, an empty array is returned.
 * @type sap.ui.core.Item[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.getSelectedItems = function() { return new Array(); };

/**
 * Returns the keys of the selected items in an array. If a selected item does not have a key, the respective array entry will be undefined.
 * @type string[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.getSelectedKeys = function() { return new Array(); };

/**
 * Getter for property <code>valueTextAlign</code>.
 * The text alignment in the primary ListBox column.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>valueTextAlign</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getValueTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>visibleItems</code>.
 * The ListBox height in number of items that are initially displayed without scrolling. This setting overwrites height
 * settings in terms of CSS size that have been made. When the items have different heights, the height of the first item is used for all
 * other item height calculations. Note that if there are one or more separators between the visible ListBox items, the displayed items
 * might not relate 1:1 to the initially specified number of items. When the value is retrieved, it equals the previously set value if it was set;
 * otherwise, it will be the number of items completely fitting into the ListBox without scrolling in the case the control was already rendered.
 * Note that if the control was not rendered, the behavior will be undefined, it may return -1 or any other number.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getVisibleItems = function() { return 0; };

/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.commons.ListBox(); };

/**
 * Returns whether the given index is selected.
 * @param {int} iIndex
 *         Index which is checked for selection state.
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.isIndexSelected = function(iIndex) { return false; };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the itemto remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
 * @param {int} iIndex
 *         Index that shall be removed from selection.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.removeSelectedIndex = function(iIndex) { return new sap.ui.commons.ListBox(); };

/**
 * If the ListBox has a scroll bar because the number of items is larger than the number of visible items, this method scrolls to the item with the given index. If there are enough items, this item will then appear at the topmost visible position in the ListBox. If bLazy is true, it only scrolls as far as required to make the item visible.
 * Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
 * @param {int} iIndex
 *         The index to which the ListBox should scroll.
 * @param {boolean} bLazy
 *         If set to true, the ListBox only scrolls if the item is not completely visible, and it scrolls for exactly the space to make it fully visible. If set to false, the item is scrolled to the top position (if possible).
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.scrollToIndex = function(iIndex,bLazy) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>allowMultiSelect</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowMultiSelect new value for property <code>allowMultiSelect</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setAllowMultiSelect = function(bAllowMultiSelect) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>displayIcons</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisplayIcons new value for property <code>displayIcons</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setDisplayIcons = function(bDisplayIcons) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>displaySecondaryValues</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisplaySecondaryValues new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setEditable = function(bEditable) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.ListBox(); };

/**
 * Sets the height of this ListBox in CSS units
 * @param {sap.ui.core.CSSSize} sHeight
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setHeight = function(sHeight) { return new sap.ui.commons.ListBox(); };

/**
 * Allows setting the list items as array for this instance of ListBox.
 * @param {sap.ui.core.ListItem[]} aItems
 *         The items to set for this ListBox.
 * @param {boolean} bDestroyItems
 *         Optional boolean parameter to indicate that the formerly set items should be destroyed, instead of just removed.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.setItems = function(aItems,bDestroyItems) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>maxWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMaxWidth new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setMaxWidth = function(sMaxWidth) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>minWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMinWidth new value for property <code>minWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setMinWidth = function(sMinWidth) { return new sap.ui.commons.ListBox(); };

/**
 * Positions the ListBox contents that are scrolled-down by the given number of pixels
 * @param {int} iScrollTop Vertical scroll position in pixels
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setScrollTop = function(iScrollTop) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>secondaryValueTextAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sSecondaryValueTextAlign new value for property <code>secondaryValueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setSecondaryValueTextAlign = function(sSecondaryValueTextAlign) { return new sap.ui.commons.ListBox(); };

/**
 * Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 * @param {int} iIndex
 *         Index to be selected
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.setSelectedIndex = function(iIndex) { return new sap.ui.commons.ListBox(); };

/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * When multiple selection is disabled and multiple items are given, the selection is set to the index of the first valid index in the given array.
 * Any invalid indices are ignored.
 * The previous selection is in any case replaced.
 * @param {int[]} aIndices
 *         Indices of the items to be selected.
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.setSelectedIndices = function(aIndices) { return new sap.ui.commons.ListBox(); };

/**
 * Keys of the items to be selected, wrapped in an array. An empty array means no selection. When multiple selection is disabled,
 * and multiple keys are given, the selection is set to the item with the first valid key in the given array. Any invalid keys are ignored.
 * The previous selection is replaced in any case.
 * @param {string[]} aKeys
 *         The keys of the items to be selected
 * @type sap.ui.commons.ListBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ListBox.prototype.setSelectedKeys = function(aKeys) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property <code>valueTextAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sValueTextAlign new value for property <code>valueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setValueTextAlign = function(sValueTextAlign) { return new sap.ui.commons.ListBox(); };

/**
 * Makes the ListBox render with a height that allows it to display exactly the given number of items.
 * @param {int} iItemCount the number of items that should fit into the ListBox without scrolling
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setVisibleItems = function(iItemCount) { return new sap.ui.commons.ListBox(); };

/**
 * Setter for property width.
 * @param {sap.ui.core.CSSSize} sWidth
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ListBox.prototype.setWidth = function(sWidth) { return new sap.ui.commons.ListBox(); };


// ---- sap.ui.commons.Menu --------------------------------------------------------------------------

/**
 * Constructor for a new Menu.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A container for menu items. When the space in the browser is not large enough to display all defined items, a scroll bar is provided.
 * @extends sap.ui.unified.Menu
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the control sap.ui.unified.Menu of the library sap.ui.unified instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Menu = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.Menu with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.Menu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.Menu.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Menu.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.MenuBar --------------------------------------------------------------------------

/**
 * Constructor for a new MenuBar.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.MenuBarDesign</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.MenuItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a user interface area which is the entry point for menus with their menu items. MenuBar is useful for applications which shall offer a
 * set of actions that shall be provided in a structured way. The MenuBar contains the menu titles from where users navigate to the single items. The control supports
 * for example long menu item texts, automated scrolling for menu items when the browser space is not large enough to display all items, defining images for single
 * or all items in a menu, automated layouting of items with or w/o image, and active/non-active items.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MenuBar = function(sId,mSettings) {};
/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.addItem = function(oItem) { return new sap.ui.commons.MenuBar(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.destroyItems = function() { return new sap.ui.commons.MenuBar(); };

/**
 * Creates a new subclass of class sap.ui.commons.MenuBar with name <code>sClassName</code>
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
sap.ui.commons.MenuBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>design</code>.
 * Available design options are Header and Standard. Note that design settings are theme-dependent.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.MenuBarDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getDesign = function() { return new sap.ui.commons.MenuBarDesign(); };

/**
 * Getter for property <code>enabled</code>.
 * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getEnabled = function() { return false; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items.
 * @return {sap.ui.unified.MenuItem[]}
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.commons.MenuBar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>width</code>.
 * Specifies the width of the MenuBar
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.unified.MenuItem</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.MenuItem}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.commons.MenuBar(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.MenuItem} vItem the itemto remove or its index or id
 * @return {sap.ui.unified.MenuItem} the removed item or null
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.removeItem = function(vItem) { return new sap.ui.unified.MenuItem(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.MenuBarDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.setDesign = function(sDesign) { return new sap.ui.commons.MenuBar(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.MenuBar(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.setWidth = function(sWidth) { return new sap.ui.commons.MenuBar(); };


// ---- sap.ui.commons.MenuBarDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.MenuBarDesign.toString = function() { return ""; };

// ---- sap.ui.commons.MenuButton --------------------------------------------------------------------------

/**
 * Constructor for a new MenuButton.
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
 * <li>{@link #getDockButton dockButton} : string</li>
 * <li>{@link #getDockMenu dockMenu} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} : sap.ui.unified.Menu</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemSelected itemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Button#constructor sap.ui.commons.Button}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Common button control that opens a menu when clicked by the user. The control provides an API for configuring the docking position
 * of the menu.
 * @extends sap.ui.commons.Button
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MenuButton = function(sId,mSettings) {};
/**
 * Event that is fired when a menu item is selected by the user
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The ID of the selected item
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.itemSelected = function(oControlEvent) {  };

/**
 * Fired when an item from the menu was selected.
 * @see sap.ui.commons.MenuButton#itemSelected
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 * @event
 * 
 */
sap.ui.commons.MenuButton.prototype.press = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.MenuButton</code>.<br> itself.
 * 
 * Event that is fired when a menu item is selected by the user
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.MenuButton</code>.<br/> itself.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.attachItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.commons.MenuButton(); };

/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * 
 * Event is fired when an item from the menu was selected.
 * @see sap.ui.commons.MenuButton#attachItemSelected
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.commons.MenuButton(); };

/**
 * Destroys the menu in the aggregation
 * named <code>menu</code>.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.destroyMenu = function() { return new sap.ui.commons.MenuButton(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.detachItemSelected = function(fnFunction,oListener) { return new sap.ui.commons.MenuButton(); };

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * 
 * The passed function and listener object must match the ones previously used for event registration.
 * @see sap.ui.commons.MenuButton#detachItemSelected
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.commons.MenuButton(); };

/**
 * Creates a new subclass of class sap.ui.commons.MenuButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.Button.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event itemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code>The ID of the selected item</li>
 * <li>'item' of type <code>sap.ui.unified.MenuItemBase</code>The selected item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.MenuButton.prototype.fireItemSelected = function(mArguments) { return new sap.ui.commons.MenuButton(); };

/**
 * Fire event press to attached listeners.
 * @see sap.ui.commons.MenuButton#fireItemSelected
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.MenuButton.prototype.firePress = function(mArguments) { return new sap.ui.commons.MenuButton(); };

/**
 * Getter for property <code>dockButton</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin bottom'.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>dockButton</code>
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.getDockButton = function() { return ""; };

/**
 * Getter for property <code>dockMenu</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is 'begin top'.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>dockMenu</code>
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.getDockMenu = function() { return ""; };

/**
 * Getter for aggregation <code>menu</code>.<br/>
 * Menu that shall be opened when the button is clicked
 * @return {sap.ui.unified.Menu}
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.getMenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Returns a metadata object for class sap.ui.commons.MenuButton.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>dockButton</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDockButton new value for property <code>dockButton</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.setDockButton = function(sDockButton) { return new sap.ui.commons.MenuButton(); };

/**
 * Setter for property <code>dockMenu</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDockMenu new value for property <code>dockMenu</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.setDockMenu = function(sDockMenu) { return new sap.ui.commons.MenuButton(); };

/**
 * Setter for the aggregated <code>menu</code>.
 * @param {sap.ui.unified.Menu} oMenu
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.setMenu = function(oMenu) { return new sap.ui.commons.MenuButton(); };


// ---- sap.ui.commons.MenuItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuItem.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Smallest unit in the menu hierarchy. An item can be a direct part of a menu bar, of a menu, or of a sub menu.
 * @extends sap.ui.unified.MenuItem
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the control sap.ui.unified.MenuItem of the library sap.ui.unified instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MenuItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.MenuItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuItem.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.MenuItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuItem.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.MenuItemBase --------------------------------------------------------------------------

/**
 * @class Provides the standard properties for menu items.
 * @extends sap.ui.unified.MenuItemBase
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the control sap.ui.unified.MenuItemBase of the library sap.ui.unified instead.
 * 
 */
sap.ui.commons.MenuItemBase = function() {};

// ---- sap.ui.commons.MenuTextFieldItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuTextFieldItem.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Menu item which contains an text field. This menu item is e.g. helpful for filters.
 * The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @extends sap.ui.unified.MenuTextFieldItem
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.21.0. 
 * Please use the control sap.ui.unified.MenuTextFieldItem of the library sap.ui.unified instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MenuTextFieldItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.MenuTextFieldItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuTextFieldItem.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuTextFieldItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.MenuTextFieldItem.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MenuTextFieldItem.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.Message --------------------------------------------------------------------------

/**
 * Constructor for a new Message.
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
 * <li>{@link #getType type} : sap.ui.commons.MessageType</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getAssociatedElementId associatedElementId} : string</li>
 * <li>{@link #getDesign design} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Creates the "Message"s to be supplied to the "MessageBar" Control.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Message = function(sId,mSettings) {};
/**
 * Registers a callback function to be invoked if long text Details are to be made available. 
 * 
 * This callback function will be supplied the corresponding Message "id", and should 
 * return the (simple) HTML string to be displayed within the Message Details Dialog.
 * 
 * E.g.: myMessage.bindDetails(getDetails);
 * function getDetails(sId) {... return htmlString;}
 * @param {function} fnCallBack the callback function 
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @public
 * 
 */
sap.ui.commons.Message.prototype.bindDetails = function(fnCallBack) {  };

/**
 * Creates a new subclass of class sap.ui.commons.Message with name <code>sClassName</code>
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
sap.ui.commons.Message.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>associatedElementId</code>.
 * Associated UI element ID. (Optional)
 * For navigation to error field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>associatedElementId</code>
 * @public
 * 
 */
sap.ui.commons.Message.prototype.getAssociatedElementId = function() { return ""; };

/**
 * Getter for property <code>design</code>.
 * Internal attribute, used to force the display of the "short" or the "long" text only.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.Message.prototype.getDesign = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.Message.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Message.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>text</code>.
 * Message short text. (Mandatory)
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Message.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>type</code>.
 * "Success", or "Warning", or "Error" messages. (Mandatory)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.MessageType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.commons.Message.prototype.getType = function() { return new sap.ui.commons.MessageType(); };

/**
 * Setter for property <code>associatedElementId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAssociatedElementId new value for property <code>associatedElementId</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Message.prototype.setAssociatedElementId = function(sAssociatedElementId) { return new sap.ui.commons.Message(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Message.prototype.setDesign = function(sDesign) { return new sap.ui.commons.Message(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Message.prototype.setText = function(sText) { return new sap.ui.commons.Message(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.MessageType} sType new value for property <code>type</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Message.prototype.setType = function(sType) { return new sap.ui.commons.Message(); };


// ---- sap.ui.commons.MessageBar --------------------------------------------------------------------------

/**
 * Constructor for a new MessageBar.
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
 * <li>{@link #getAnchorID anchorID} : string (default: )</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMaxToasted maxToasted} : int (default: 3)</li>
 * <li>{@link #getMaxListed maxListed} : int (default: 7)</li>
 * <li>{@link #getAnchorSnapPoint anchorSnapPoint} : string (default: begin top)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Creates an instance of a "MessageBar" Control, for displaying "Message"s.
 * There is no imposed limit on the number of "MessageBar"s that can be created, but using only 1 makes sense, specially if accessing it (via Ctl-m) becomes a necessity.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageBar = function(sId,mSettings) {};
/**
 * This public API adds/updates a supplied list of messages.
 * The messageBar is to appear should at least one message exists.
 * @param {sap.ui.commons.Message[]} aAMessages Array of messages.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageBar.prototype.addMessages = function(aAMessages) { return null; };

/**
 * Deletes all messages.
 * @returns {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageBar.prototype.deleteAllMessages = function() { return new sap.ui.commons.MessageBar(); };

/**
 * This public API deletes a supplied list of messages.
 * The messageBar is to disappear should no message remains.
 * @param {string[]} aIds Messages IDs to be deleted.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageBar.prototype.deleteMessages = function(aIds) { return null; };

/**
 * Creates a new subclass of class sap.ui.commons.MessageBar with name <code>sClassName</code>
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
sap.ui.commons.MessageBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>anchorID</code>.
 * Element ID upon which the 'message bar' is to be initially positioned.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>anchorID</code>
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.getAnchorID = function() { return ""; };

/**
 * Getter for property <code>anchorSnapPoint</code>.
 * Type: sap.ui.core.Popup.Dock
 * SnapPoint of MessageBar over anchorId.
 * Note: Use "begin" or "end" for RTL support.
 * Note: "center" is not indicated, as positioning is only set once, either via the css "left" or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages come in.
 * 
 * Default value is <code>begin top</code>
 * @return {string} the value of property <code>anchorSnapPoint</code>
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.getAnchorSnapPoint = function() { return ""; };

/**
 * Getter for property <code>maxListed</code>.
 * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
 * 
 * Default value is <code>7</code>
 * @return {int} the value of property <code>maxListed</code>
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.getMaxListed = function() { return 0; };

/**
 * Getter for property <code>maxToasted</code>.
 * Maximum number of simultaneous messages being toasting-up in a row. Value '0' means this dynamic part of the feature is switched off.
 * 
 * Default value is <code>3</code>
 * @return {int} the value of property <code>maxToasted</code>
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.getMaxToasted = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.MessageBar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MessageBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.getVisible = function() { return false; };

/**
 * Setter for property <code>anchorID</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sAnchorID new value for property <code>anchorID</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.setAnchorID = function(sAnchorID) { return new sap.ui.commons.MessageBar(); };

/**
 * Setter for property <code>anchorSnapPoint</code>.
 * 
 * Default value is <code>begin top</code>.
 * @param {string} sAnchorSnapPoint new value for property <code>anchorSnapPoint</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.setAnchorSnapPoint = function(sAnchorSnapPoint) { return new sap.ui.commons.MessageBar(); };

/**
 * Setter for property <code>maxListed</code>.
 * 
 * Default value is <code>7</code>.
 * @param {int} iMaxListed new value for property <code>maxListed</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.setMaxListed = function(iMaxListed) { return new sap.ui.commons.MessageBar(); };

/**
 * Setter for property <code>maxToasted</code>.
 * 
 * Default value is <code>3</code>.
 * @param {int} iMaxToasted new value for property <code>maxToasted</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.setMaxToasted = function(iMaxToasted) { return new sap.ui.commons.MessageBar(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>
 * 
 * The default implementation of function "setVisible()" is enhanced 
 * in order to toggle the "visibility:hidden;" attribute over the control.
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageBar.prototype.setVisible = function(bVisible) { return new sap.ui.commons.MessageBar(); };


// ---- sap.ui.commons.MessageBox --------------------------------------------------------------------------

/**
 * Displays an alert box with the given message and an OK button (no icons).
 * If a callback is given, it is called after the alert box has been closed
 * by the user via the OK button or via the Close icon. The callback is called
 * with the following signature:
 * 
 * <pre>
 *   function ()
 * </pre>
 * 
 * The alert box opened by this method is modal and it is processed asynchronously.
 * Applications have to use the <code>fnCallback</code> to continue work after the
 * user closed the alert box.
 * @param {string | sap.ui.core.Control} vMessage Message to be displayed in the alert box
 * @param {function} [fnCallback] callback function to be called when the user closed the dialog
 * @param {string } [sTitle] Title to be displayed in the alert box
 * @param {string} [sDialogId] ID to be used for the alert box. Intended for test scenarios, not recommended for productive apps
 * @public
 * 
 * @memberof sap.ui.commons.MessageBox
 */
sap.ui.commons.MessageBox.alert = function(vMessage,fnCallback,sTitle,sDialogId) {  };

/**
 * Displays a confirmation dialog box with the given message, a question icon,
 * an OK button, and a Cancel button. If a callback is given, it is called after the
 * alert box has been closed by the user via one of the buttons or via the close icon.
 * The callback is called with the following signature
 * 
 * <pre>
 *   function(bConfirmed)
 * </pre>
 * 
 * where bConfirmed is set to true when the user has activated the OK button.
 * 
 * The confirmation dialog box opened by this method is modal and it is processed asynchronously.
 * Applications have to use the <code>fnCallback</code> to continue work after the
 * user closed the alert box.
 * @param {string | sap.ui.core.Control} vMessage Message to display
 * @param {function} [fnCallback] Callback to be called
 * @param {string} [sTitle] Title to display
 * @param {string} [sDialogId] ID to be used for the confirmation dialog. Intended for test scenarios, not recommended for productive apps
 * @public
 * 
 * @memberof sap.ui.commons.MessageBox
 */
sap.ui.commons.MessageBox.confirm = function(vMessage,fnCallback,sTitle,sDialogId) {  };

/**
 * Creates and displays a simple message box with the given text and buttons, and optionally other parts.
 * After the user has selected a button or closed the message box using the close icon, the <code>callback</code>
 * function is invoked when given.
 * 
 * The only mandatory parameter is <code>vMessage</code>. Either a string with the corresponding text or even
 * a layout control could be provided.
 * 
 * The created dialog box is executed asynchronously. When it has been created and registered for rendering,
 * this function returns without waiting for a user reaction.
 * 
 * When applications have to react on the users choice, they have to provide a callback function and
 * postpone any reaction on the user choice until that callback is triggered.
 * 
 * The signature of the callback is
 * 
 * function (oAction);
 * 
 * where <code>oAction</code> is the button that the user has pressed. When the user has pressed the close button,
 * a MessageBox.Action.Close is returned.
 * @param {string | sap.ui.core.Control} vMessage The message to be displayed.
 * @param {sap.ui.commons.MessageBox.Icon} [oIcon=None] The icon to be displayed.
 * @param {string} [sTitle=''] The title of the message box.
 * @param {sap.ui.commons.MessageBox.Action|sap.ui.commons.MessageBox.Action[]} [vActions] Either a single action, or an array of actions.
 *      If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter.
 * @param {function} [fnCallback] Function to be called when the user has pressed a button or has closed the message box.
 * @param {sap.ui.commons.MessageBox.Action} [oDefaultAction] Must be one of the actions provided in vActions.
 * @param {string} [sDialogId] ID to be used for the dialog. Intended for test scenarios, not recommended for productive apps
 * @public
 * 
 * @memberof sap.ui.commons.MessageBox
 */
sap.ui.commons.MessageBox.show = function(vMessage,oIcon,sTitle,vActions,fnCallback,oDefaultAction,sDialogId) {  };


// ---- sap.ui.commons.MessageBox.Action --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.MessageBox.Action.toString = function() { return ""; };

// ---- sap.ui.commons.MessageBox.Icon --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.MessageBox.Icon.toString = function() { return ""; };

// ---- sap.ui.commons.MessageList --------------------------------------------------------------------------

/**
 * Constructor for a new MessageList.
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
 * <li>{@link #getVisible visible} : boolean (default: false)</li>
 * <li>{@link #getAnchorId anchorId} : string</li>
 * <li>{@link #getMaxListed maxListed} : string (default: 7)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Instantiated by the "MessageBar" Control if the user ever requests to generate the corresponding "MessageList".
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageList = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.MessageList with name <code>sClassName</code>
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
sap.ui.commons.MessageList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>anchorId</code>.
 * Id of the anchor under which the MessageList is to render.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>anchorId</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getAnchorId = function() { return ""; };

/**
 * Getter for property <code>maxListed</code>.
 * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
 * 
 * Default value is <code>7</code>
 * @return {string} the value of property <code>maxListed</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getMaxListed = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.MessageList.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MessageList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>visible</code>.
 * To open or close the Control.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getVisible = function() { return false; };

/**
 * Setter for property <code>anchorId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAnchorId new value for property <code>anchorId</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.setAnchorId = function(sAnchorId) { return new sap.ui.commons.MessageList(); };

/**
 * Setter for property <code>maxListed</code>.
 * 
 * Default value is <code>7</code>.
 * @param {string} sMaxListed new value for property <code>maxListed</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.setMaxListed = function(sMaxListed) { return new sap.ui.commons.MessageList(); };

/**
 * Set the list of Messages to be displayed and re-render this Control if visible.
 * @param {sap.ui.commons.Message[]} aMessages Message list.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageList.prototype.setMessages = function(aMessages) { return null; };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>
 * 
 * The default implementation of function "setVisible()" is overwritten 
 * in order to invoke the open() and close() of the MessageList Popup.
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.setVisible = function(bVisible) { return new sap.ui.commons.MessageList(); };


// ---- sap.ui.commons.MessageToast --------------------------------------------------------------------------

/**
 * Constructor for a new MessageToast.
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
 * <li>{@link #getAnchorId anchorId} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:next next} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Responsible for displaying the new incoming messages, one at the time, on top of the MessageBar.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageToast = function(sId,mSettings) {};
/**
 * Fired once the "toast()" method is over, so that the MessageBar can toast() another message if needed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.MessageToast.prototype.next = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'next' event of this <code>sap.ui.commons.MessageToast</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.MessageToast</code>.<br> itself.
 * 
 * Fired once the "toast()" method is over, so that the MessageBar can toast() another message if needed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.MessageToast</code>.<br/> itself.
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageToast.prototype.attachNext = function(oData,fnFunction,oListener) { return new sap.ui.commons.MessageToast(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'next' event of this <code>sap.ui.commons.MessageToast</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageToast.prototype.detachNext = function(fnFunction,oListener) { return new sap.ui.commons.MessageToast(); };

/**
 * Creates a new subclass of class sap.ui.commons.MessageToast with name <code>sClassName</code>
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
sap.ui.commons.MessageToast.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event next to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.MessageToast.prototype.fireNext = function(mArguments) { return new sap.ui.commons.MessageToast(); };

/**
 * Getter for property <code>anchorId</code>.
 * Id of the anchor on top of which the MessageToast is to render.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>anchorId</code>
 * @public
 * 
 */
sap.ui.commons.MessageToast.prototype.getAnchorId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.MessageToast.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.MessageToast.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns true if no message is being toasted.
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageToast.prototype.isIdle = function() { return false; };

/**
 * Setter for property <code>anchorId</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sAnchorId new value for property <code>anchorId</code>
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.MessageToast.prototype.setAnchorId = function(sAnchorId) { return new sap.ui.commons.MessageToast(); };

/**
 * This public API receives the list of Messages to be displayed,
 * and re-render this Control if visible.
 * 
 * Triggers the toasting of a message, on top of the MessageBar.
 * If no message is supplied, displays the "Multiple new messages..." message.
 * @param {sap.ui.commons.Message} oMessage
 *         The Message to be toasted.
 * @param {string} sAnchorId
 *         DOM ID of the anchor against which the Toast Arrow should align for a given Toast.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.MessageToast.prototype.toast = function(oMessage,sAnchorId) { return null; };


// ---- sap.ui.commons.MessageType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.MessageType.toString = function() { return ""; };

// ---- sap.ui.commons.Paginator --------------------------------------------------------------------------

/**
 * Constructor for a new Paginator.
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
 * <li>{@link #getCurrentPage currentPage} : int (default: 1)</li>
 * <li>{@link #getNumberOfPages numberOfPages} : int</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:page page} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides navigation between pages within a list of numbered pages.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Paginator = function(sId,mSettings) {};
/**
 * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.srcPage The page which is the current one before the page event is fired (and another page is displayed)
 * @param {int} oControlEvent.getParameters.targetPage The page that shall be displayed next after the page event is fired.
 * 
 * The page number is 1-based: the first page has index 1, not 0, to match the number visible in the UI.
 * @param {sap.ui.commons.PaginatorEvent} oControlEvent.getParameters.type Provides the values 'First', 'Last', 'Next', 'Previous', 'Goto'. The event parameter informs the application
 * how the user navigated to the new page: Whether the 'Next' button was used, or another button, or whether the page was directly
 * selected
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.page = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'page' event of this <code>sap.ui.commons.Paginator</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Paginator</code>.<br> itself.
 * 
 * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Paginator</code>.<br/> itself.
 * @return {sap.ui.commons.Paginator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.attachPage = function(oData,fnFunction,oListener) { return new sap.ui.commons.Paginator(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'page' event of this <code>sap.ui.commons.Paginator</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Paginator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.detachPage = function(fnFunction,oListener) { return new sap.ui.commons.Paginator(); };

/**
 * Creates a new subclass of class sap.ui.commons.Paginator with name <code>sClassName</code>
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
sap.ui.commons.Paginator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event page to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'srcPage' of type <code>int</code>The page which is the current one before the page event is fired (and another page is displayed)</li>
 * <li>'targetPage' of type <code>int</code>The page that shall be displayed next after the page event is fired.
 * 
 * The page number is 1-based: the first page has index 1, not 0, to match the number visible in the UI.</li>
 * <li>'type' of type <code>sap.ui.commons.PaginatorEvent</code>Provides the values 'First', 'Last', 'Next', 'Previous', 'Goto'. The event parameter informs the application
 * how the user navigated to the new page: Whether the 'Next' button was used, or another button, or whether the page was directly
 * selected</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Paginator} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Paginator.prototype.firePage = function(mArguments) { return new sap.ui.commons.Paginator(); };

/**
 * Getter for property <code>currentPage</code>.
 * Represents the current page (first page has index 1, not 0, to match the visual number)
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>currentPage</code>
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.getCurrentPage = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.Paginator.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Paginator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>numberOfPages</code>.
 * Represents the overall number of pages that are embedded into the parent control
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>numberOfPages</code>
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.getNumberOfPages = function() { return 0; };

/**
 * Setter for property <code>currentPage</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iCurrentPage new value for property <code>currentPage</code>
 * @return {sap.ui.commons.Paginator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.setCurrentPage = function(iCurrentPage) { return new sap.ui.commons.Paginator(); };

/**
 * Setter for property <code>numberOfPages</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iNumberOfPages new value for property <code>numberOfPages</code>
 * @return {sap.ui.commons.Paginator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Paginator.prototype.setNumberOfPages = function(iNumberOfPages) { return new sap.ui.commons.Paginator(); };


// ---- sap.ui.commons.PaginatorEvent --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.PaginatorEvent.toString = function() { return ""; };

// ---- sap.ui.commons.Panel --------------------------------------------------------------------------

/**
 * Constructor for a new Panel.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getScrollLeft scrollLeft} : int (default: 0)</li>
 * <li>{@link #getScrollTop scrollTop} : int (default: 0)</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getCollapsed collapsed} : boolean (default: false)</li>
 * <li>{@link #getAreaDesign areaDesign} : sap.ui.commons.enums.AreaDesign</li>
 * <li>{@link #getBorderDesign borderDesign} : sap.ui.commons.enums.BorderDesign</li>
 * <li>{@link #getShowCollapseIcon showCollapseIcon} : boolean (default: true)</li>
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getButtons buttons} : sap.ui.commons.Button[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a container with scroll functionality, the control can be used for text and controls. The Panel does not layout the embedded controls.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Panel = function(sId,mSettings) {};
/**
 * Adds some button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.commons.Button}
 *            oButton the button to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.addButton = function(oButton) { return new sap.ui.commons.Panel(); };

/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.addContent = function(oContent) { return new sap.ui.commons.Panel(); };

/**
 * Destroys all the buttons in the aggregation
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.destroyButtons = function() { return new sap.ui.commons.Panel(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.destroyContent = function() { return new sap.ui.commons.Panel(); };

/**
 * Destroys the title in the aggregation
 * named <code>title</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.destroyTitle = function() { return new sap.ui.commons.Panel(); };

/**
 * Creates a new subclass of class sap.ui.commons.Panel with name <code>sClassName</code>
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
sap.ui.commons.Panel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>applyContentPadding</code>.
 * Padding is theme-dependent.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getApplyContentPadding = function() { return false; };

/**
 * Getter for property <code>areaDesign</code>.
 * Defines the background color. Note that color settings are theme-dependent.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.enums.AreaDesign} the value of property <code>areaDesign</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getAreaDesign = function() { return new sap.ui.commons.enums.AreaDesign(); };

/**
 * Getter for property <code>borderDesign</code>.
 * The Panel can have a box as border. Note that displaying borders is theme-dependent.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>borderDesign</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getBorderDesign = function() { return new sap.ui.commons.enums.BorderDesign(); };

/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons that shall be displayed in the Panel header
 * @return {sap.ui.commons.Button[]}
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getButtons = function() { return new Array(); };

/**
 * Getter for property <code>collapsed</code>.
 * A collapsed Panel consumes less space than a not collapsed one. When it is initially collapsed, the contents are not rendered.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getCollapsed = function() { return false; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the Panel. It is recommended to use a layout control as single direct child.
 * When the Panel dimensions are set, the child control may have width and height of 100%. When the dimensions are not set, the child defines
 * the Panel size.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * Represents the state of the of the Panel (enabled or disabled)
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getEnabled = function() { return false; };

/**
 * @protected
 * 
 */
sap.ui.commons.Panel.prototype.getFocusInfo = function() {  };

/**
 * Getter for property <code>height</code>.
 * Per default, the height for the Panel is automatically adjusted to the content. Dimension allows to explicitly specify the height.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Panel.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Panel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the scroll position of the panel in pixels from the left. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 * @return {int} the scroll position
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getScrollLeft = function() { return 0; };

/**
 * Returns the scroll position of the panel in pixels from the top. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 * @return {int} the scroll position
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getScrollTop = function() { return 0; };

/**
 * Getter for property <code>showCollapseIcon</code>.
 * Specifies whether the Panel shall have an icon for collapsing/expanding, or not.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCollapseIcon</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getShowCollapseIcon = function() { return false; };

/**
 * Getter for property <code>text</code>.
 * Can be used to create a simple title text for Panels that do not require an icon in the header.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getText = function() { return ""; };

/**
 * Getter for aggregation <code>title</code>.<br/>
 * Aggregates the title element of the Panel. For text titles only, you alternatively could use setText() which also creates a title in the background.
 * @return {sap.ui.core.Title}
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Getter for property <code>width</code>.
 * Panel width in CSS size
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.Button</code> in the aggregation named <code>buttons</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Button}
 *           oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.indexOfButton = function(oButton) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.commons.Button}
 *            oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the button should be inserted at; for
 *              a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the button is inserted at
 *              the last position
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.insertButton = function(oButton,iIndex) { return new sap.ui.commons.Panel(); };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.commons.Panel(); };

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Button[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.removeAllButtons = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.ui.commons.Button} vButton the buttonto remove or its index or id
 * @return {sap.ui.commons.Button} the removed button or null
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.removeButton = function(vButton) { return new sap.ui.commons.Button(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the contentto remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Property setter for the padding
 * @param {boolean} bPadding whether the Panel should have padding
 * @returns {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setApplyContentPadding = function(bPadding) { return new sap.ui.commons.Panel(); };

/**
 * Setter for property <code>areaDesign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.enums.AreaDesign} sAreaDesign new value for property <code>areaDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setAreaDesign = function(sAreaDesign) { return new sap.ui.commons.Panel(); };

/**
 * Setter for property <code>borderDesign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.enums.BorderDesign} sBorderDesign new value for property <code>borderDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setBorderDesign = function(sBorderDesign) { return new sap.ui.commons.Panel(); };

/**
 * Property setter for the "collapsed" state
 * @param {boolean} bCollapsed whether the Panel should be collapsed or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setCollapsed = function(bCollapsed) { return new sap.ui.commons.Panel(); };

/**
 * Sets the dimensions of the panel.
 * @param {sap.ui.core.CSSSize} sWidth the width of the panel as CSS size
 * @param {sap.ui.core.CSSSize} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Panel.prototype.setDimensions = function(sWidth,sHeight) { return new sap.ui.commons.Panel(); };

/**
 * Property setter for the "enabled" state
 * @param {boolean} bEnabled whether the Panel should be enabled or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.Panel(); };

/**
 * Sets the height of the panel.
 * @param {sap.ui.core.CSSSize} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Panel(); };

/**
 * Sets the scroll position of the panel in pixels from the left.
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setScrollLeft = function(iPosition) { return new sap.ui.commons.Panel(); };

/**
 * Sets the scrolls position of the panel in pixels from the top.
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setScrollTop = function(iPosition) { return new sap.ui.commons.Panel(); };

/**
 * Setter for property <code>showCollapseIcon</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCollapseIcon new value for property <code>showCollapseIcon</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setShowCollapseIcon = function(bShowCollapseIcon) { return new sap.ui.commons.Panel(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setText = function(sText) { return new sap.ui.commons.Panel(); };

/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle the title to set
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setTitle = function(oTitle) { return new sap.ui.commons.Panel(); };

/**
 * Sets the width of the panel.
 * @param {sap.ui.core.CSSSize} sWidth the width of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Panel(); };


// ---- sap.ui.commons.PasswordField --------------------------------------------------------------------------

/**
 * Constructor for a new PasswordField.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A text field with masked characters which borrows its properties and methods from TextField.
 * @extends sap.ui.commons.TextField
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.PasswordField = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.PasswordField with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.PasswordField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.PasswordField.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.PasswordField.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.ProgressIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new ProgressIndicator.
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
 * <li>{@link #getBarColor barColor} : sap.ui.core.BarColor</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: 0%)</li>
 * <li>{@link #getPercentValue percentValue} : int (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical values.
 * The filling can be displayed in color only, or additionally with the percentage rate. The indicator status can be interactive.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ProgressIndicator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.ProgressIndicator with name <code>sClassName</code>
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
sap.ui.commons.ProgressIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>barColor</code>.
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.BarColor} the value of property <code>barColor</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getBarColor = function() { return new sap.ui.core.BarColor(); };

/**
 * Getter for property <code>displayValue</code>.
 * The text value to be displayed in the bar.
 * 
 * Default value is <code>0%</code>
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getDisplayValue = function() { return ""; };

/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.ProgressIndicator.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ProgressIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>percentValue</code>.
 * The numerical value for the displayed length of the progress bar.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>percentValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getPercentValue = function() { return 0; };

/**
 * Getter for property <code>showValue</code>.
 * Specifies whether the current value shall be rendered inside the bar.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getShowValue = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * The width of the control.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>barColor</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.BarColor} sBarColor new value for property <code>barColor</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setBarColor = function(sBarColor) { return new sap.ui.commons.ProgressIndicator(); };

/**
 * Setter for property <code>displayValue</code>.
 * 
 * Default value is <code>0%</code>.
 * @param {string} sDisplayValue new value for property <code>displayValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) { return new sap.ui.commons.ProgressIndicator(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.ProgressIndicator(); };

/**
 * Property setter for the PercentValue
 * A new rendering is not necessary, only the bar has to be moved.
 * @param {int} iPercentValue
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) { return new sap.ui.commons.ProgressIndicator(); };

/**
 * Setter for property <code>showValue</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValue new value for property <code>showValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setShowValue = function(bShowValue) { return new sap.ui.commons.ProgressIndicator(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.setWidth = function(sWidth) { return new sap.ui.commons.ProgressIndicator(); };


// ---- sap.ui.commons.RadioButton --------------------------------------------------------------------------

/**
 * Constructor for a new RadioButton.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * <li>{@link #getGroupName groupName} : string (default: sapUiRbDefaultGroup)</li>
 * <li>{@link #getKey key} : string</li>
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
 * Consists of a round element and a descriptive text. Generally, you would create at least two radio button controls;
 * by this, you provide a limited choice for the user. Radio buttons can trigger events.
 * Available value states are "Error", "None", "Success", "Warning".
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RadioButton = function(sId,mSettings) {};
/**
 * Event is triggered when the user makes a change on the radio button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.RadioButton(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.RadioButton(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RadioButton</code>.<br> itself.
 * 
 * Event is triggered when the user makes a change on the radio button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RadioButton</code>.<br/> itself.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.RadioButton(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.RadioButton(); };

/**
 * Creates a new subclass of class sap.ui.commons.RadioButton with name <code>sClassName</code>
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
sap.ui.commons.RadioButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RadioButton.prototype.fireSelect = function(mArguments) { return new sap.ui.commons.RadioButton(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can select the radio button
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Disabled controls are displayed in another color, depending on the customer settings.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>groupName</code>.
 * Name of the radio button group the current radio button belongs to. You can define a new name for the group.
 * If no new name is specified, this radio button belongs to the sapUiRbDefaultGroup per default. Default behavior of a radio button
 * in a group is that when one of the radio buttons in a group is selected, all others are unselected.
 * 
 * Default value is <code>sapUiRbDefaultGroup</code>
 * @return {string} the value of property <code>groupName</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getGroupName = function() { return ""; };

/**
 * Getter for property <code>key</code>.
 * Can be used for subsequent actions
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.RadioButton.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RadioButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selected</code>.
 * Specifies the select state of the radio button
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getSelected = function() { return false; };

/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the radio button.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>textDirection</code>.
 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent container.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>valueState</code>.
 * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning, None
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * The control width depends on the text length. Alternatively, CSS-sizes in % or px can be set.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setEditable = function(bEditable) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>groupName</code>.
 * 
 * Default value is <code>sapUiRbDefaultGroup</code>.
 * @param {string} sGroupName new value for property <code>groupName</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setGroupName = function(sGroupName) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setKey = function(sKey) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>selected</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected new value for property <code>selected</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setSelected = function(bSelected) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setText = function(sText) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setValueState = function(sValueState) { return new sap.ui.commons.RadioButton(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.setWidth = function(sWidth) { return new sap.ui.commons.RadioButton(); };


// ---- sap.ui.commons.RadioButtonGroup --------------------------------------------------------------------------

/**
 * Constructor for a new RadioButtonGroup.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColumns columns} : int (default: 1)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: 0)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li>
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
 * a group of RadioButtons to hande as one UI element.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RadioButtonGroup = function(sId,mSettings) {};
/**
 * Event is fired when selection is changed by user interaction.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.selectedIndex Index of the selected RadioButton.
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.addItem = function(oItem) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RadioButtonGroup</code>.<br> itself.
 * 
 * Event is fired when selection is changed by user interaction.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RadioButtonGroup</code>.<br/> itself.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Binder for aggregation <code>items</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.bindItems = function(oBindingInfo) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.destroyItems = function() { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Creates a new subclass of class sap.ui.commons.RadioButtonGroup with name <code>sClassName</code>
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
sap.ui.commons.RadioButtonGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedIndex' of type <code>int</code>Index of the selected RadioButton.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.fireSelect = function(mArguments) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>columns</code>.
 * Number of RadioButtons displayed in one Line.
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>columns</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getColumns = function() { return 0; };

/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can choose a radio button.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * If set the RadioButtonGroup is enabled, if not it is disabled. If it is disabled all RadioButtons will be shown as disabled. The enabled property of the item will not be uses in this case. If the RadioButtonGroup is enabled the enabled property of the item will define if a RadioButton is enabled or not.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @since 1.10.3
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getEnabled = function() { return false; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * RadioButtons of this RadioButtonGroup
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.commons.RadioButtonGroup.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RadioButtonGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selectedIndex</code>.
 * Index of the selected/checked RadioButton.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getSelectedIndex = function() { return 0; };

/**
 * Returns selected item. When no item is selected, "null" is returned.
 * @returns {sap.ui.core.Item} selected item
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem = function() { return new sap.ui.core.Item(); };

/**
 * Getter for property <code>valueState</code>.
 * The value state to be displayed.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * Width of the RadioButtonGroup.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the itemto remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * Setter for property <code>columns</code>.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumns new value for property <code>columns</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setColumns = function(iColumns) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setEditable = function(bEditable) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @since 1.10.3
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Setter for property <code>selectedIndex</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iSelectedIndex new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setSelectedIndex = function(iSelectedIndex) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Sets the item as selected and removes the selection from the old one.
 * @param {sap.ui.core.Item} oSelectedItem Selected item
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem = function(oSelectedItem) {  };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setValueState = function(sValueState) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.setWidth = function(sWidth) { return new sap.ui.commons.RadioButtonGroup(); };

/**
 * Unbinder for aggregation <code>items</code>.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.unbindItems = function() { return new sap.ui.commons.RadioButtonGroup(); };


// ---- sap.ui.commons.RangeSlider --------------------------------------------------------------------------

/**
 * Constructor for a new RangeSlider.
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
 * <li>{@link #getValue2 value2} : float (default: 80)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Slider#constructor sap.ui.commons.Slider}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The interactive control is displayed either as a horizontal or a vertical line with two pointers and units of measurement.
 * Users can move the pointers along the line to change a range with graphical support.
 * @extends sap.ui.commons.Slider
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.8.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RangeSlider = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.RangeSlider with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.Slider.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.RangeSlider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.RangeSlider.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RangeSlider.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>value2</code>.
 * Current second value of the slider. (Position of the second grip.)
 * 
 * Default value is <code>80</code>
 * @return {float} the value of property <code>value2</code>
 * @public
 * 
 */
sap.ui.commons.RangeSlider.prototype.getValue2 = function() { return 0.0; };

/**
 * Setter for property <code>value2</code>.
 * 
 * Default value is <code>80</code>.
 * @param {float} fValue2 new value for property <code>value2</code>
 * @return {sap.ui.commons.RangeSlider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RangeSlider.prototype.setValue2 = function(fValue2) { return new sap.ui.commons.RangeSlider(); };


// ---- sap.ui.commons.RatingIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new RatingIndicator.
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
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 5)</li>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getAverageValue averageValue} : float (default: 0)</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getIconUnselected iconUnselected} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getVisualMode visualMode} : sap.ui.commons.RatingIndicatorVisualMode</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to let the user do some rating on a certain topic. The amount of rating symbols can be specified, as well as the URIs to the
 * image icons which shall be used as rating symbols. When the user performs a rating, an event is fired.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RatingIndicator = function(sId,mSettings) {};
/**
 * The event is fired when the user has done a rating.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.value The rated value
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.change = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RatingIndicator</code>.<br> itself.
 * 
 * The event is fired when the user has done a rating.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RatingIndicator</code>.<br/> itself.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Binder for property <code>value</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.bindValue = function(oBindingInfo) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Creates a new subclass of class sap.ui.commons.RatingIndicator with name <code>sClassName</code>
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
sap.ui.commons.RatingIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>int</code>The rated value</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RatingIndicator.prototype.fireChange = function(mArguments) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>averageValue</code>.
 * This value is shown if no value is set. This can be used to display an average Value before the user votes.
 * 
 * Default value is <code>0</code>
 * @return {float} the value of property <code>averageValue</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getAverageValue = function() { return 0.0; };

/**
 * Getter for property <code>editable</code>.
 * Value 'true' is required for changes on the rating symbols.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>iconHovered</code>.
 * The URI to the image which is displayed when the mouse hovers onto a rating symbol.
 * If used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconSelected</code>.
 * The URI to the image which shall be displayed for all selected rating symbols.
 * Note that when this attribute is used, also the other icon attributes need to be set.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconUnselected</code>.
 * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconUnselected</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconUnselected = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>maxValue</code>.
 * The number of displayed rating symbols
 * 
 * Default value is <code>5</code>
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getMaxValue = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.RatingIndicator.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RatingIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>value</code>.
 * The currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the averageValue is shown.
 * 
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getValue = function() { return 0.0; };

/**
 * Getter for property <code>visualMode</code>.
 * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.RatingIndicatorVisualMode} the value of property <code>visualMode</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getVisualMode = function() { return new sap.ui.commons.RatingIndicatorVisualMode(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>averageValue</code>.
 * 
 * Default value is <code>0</code>.
 * @param {float} fAverageValue new value for property <code>averageValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setAverageValue = function(fAverageValue) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setEditable = function(bEditable) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>iconHovered</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconHovered new value for property <code>iconHovered</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>iconSelected</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconSelected new value for property <code>iconSelected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>iconUnselected</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconUnselected new value for property <code>iconUnselected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setIconUnselected = function(sIconUnselected) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>maxValue</code>.
 * 
 * Default value is <code>5</code>
 * Minimum value is <code>1</code>
 * @param {int} iMaxValue new value for property <code>maxValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setMaxValue = function(iMaxValue) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue new value for property <code>value</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setValue = function(fValue) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Setter for property <code>visualMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.RatingIndicatorVisualMode} sVisualMode new value for property <code>visualMode</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.setVisualMode = function(sVisualMode) { return new sap.ui.commons.RatingIndicator(); };

/**
 * Unbinder for property <code>value</code>.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.unbindValue = function() { return new sap.ui.commons.RatingIndicator(); };


// ---- sap.ui.commons.RatingIndicatorVisualMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.RatingIndicatorVisualMode.toString = function() { return ""; };

// ---- sap.ui.commons.ResponsiveContainer --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveContainer.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRanges ranges} : sap.ui.commons.ResponsiveContainerRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:rangeSwitch rangeSwitch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to provide a container, which can show different content depending on its current width. It fires an event, whenever a new range is reached. In addition the content of the new range is automatically shown, if it is set.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ResponsiveContainer = function(sId,mSettings) {};
/**
 * The event is fired the width of the container reaches a new range.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.commons.ResponsiveContainerRange} oControlEvent.getParameters.currentRange The current range
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.rangeSwitch = function(oControlEvent) {  };

/**
 * Adds some range into the aggregation named <code>ranges</code>.
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *            oRange the range to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.addRange = function(oRange) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'rangeSwitch' event of this <code>sap.ui.commons.ResponsiveContainer</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ResponsiveContainer</code>.<br> itself.
 * 
 * The event is fired the width of the container reaches a new range.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ResponsiveContainer</code>.<br/> itself.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.attachRangeSwitch = function(oData,fnFunction,oListener) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Destroys all the ranges in the aggregation
 * named <code>ranges</code>.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.destroyRanges = function() { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'rangeSwitch' event of this <code>sap.ui.commons.ResponsiveContainer</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.detachRangeSwitch = function(fnFunction,oListener) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Creates a new subclass of class sap.ui.commons.ResponsiveContainer with name <code>sClassName</code>
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
sap.ui.commons.ResponsiveContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event rangeSwitch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'currentRange' of type <code>sap.ui.commons.ResponsiveContainerRange</code>The current range</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.fireRangeSwitch = function(mArguments) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Id of the element which is the current target of the <code>defaultContent</code> association, or null
 * 
 * The default content to show, in case the range does not provide content
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.getDefaultContent = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>height</code>.
 * The width of the responsive container.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.ResponsiveContainer.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ResponsiveContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>ranges</code>.<br/>
 * The ranges defined for this container
 * @return {sap.ui.commons.ResponsiveContainerRange[]}
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.getRanges = function() { return new Array(); };

/**
 * Getter for property <code>width</code>.
 * The width of the responsive container.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.ResponsiveContainerRange</code> in the aggregation named <code>ranges</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *           oRange the range whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.indexOfRange = function(oRange) { return 0; };

/**
 * Inserts a range into the aggregation named <code>ranges</code>.
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *            oRange the range to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the range should be inserted at; for
 *              a negative value of <code>iIndex</code>, the range is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the range is inserted at
 *              the last position
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.insertRange = function(oRange,iIndex) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Removes all the controls in the aggregation named <code>ranges</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ResponsiveContainerRange[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.removeAllRanges = function() { return new Array(); };

/**
 * Removes an range from the aggregation named <code>ranges</code>.
 * @param {int | string | sap.ui.commons.ResponsiveContainerRange} vRange the rangeto remove or its index or id
 * @return {sap.ui.commons.ResponsiveContainerRange} the removed range or null
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.removeRange = function(vRange) { return new sap.ui.commons.ResponsiveContainerRange(); };

/**
 * Setter for the associated <code>defaultContent</code>.
 * @param {sap.ui.core.Control} oDefaultContent Id of an element which becomes the new target of this defaultContent association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.setDefaultContent = function(oDefaultContent) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.setHeight = function(sHeight) { return new sap.ui.commons.ResponsiveContainer(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainer.prototype.setWidth = function(sWidth) { return new sap.ui.commons.ResponsiveContainer(); };


// ---- sap.ui.commons.ResponsiveContainerRange --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveContainerRange.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getKey key} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Defines a range for the ResponsiveContainer
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ResponsiveContainerRange = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.ResponsiveContainerRange with name <code>sClassName</code>
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
sap.ui.commons.ResponsiveContainerRange.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Id of the element which is the current target of the <code>content</code> association, or null
 * 
 * The content to show for this range (optional).
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>height</code>.
 * The minimal height for this range to be displayed.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>key</code>.
 * A key which can be used to identify the range (optional).
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.ResponsiveContainerRange.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ResponsiveContainerRange.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>width</code>.
 * The minimal width for this range to be displayed.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for the associated <code>content</code>.
 * @param {sap.ui.core.Control} oContent Id of an element which becomes the new target of this content association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.setContent = function(oContent) { return new sap.ui.commons.ResponsiveContainerRange(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.setHeight = function(sHeight) { return new sap.ui.commons.ResponsiveContainerRange(); };

/**
 * Setter for property <code>key</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sKey new value for property <code>key</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.setKey = function(sKey) { return new sap.ui.commons.ResponsiveContainerRange(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ResponsiveContainerRange.prototype.setWidth = function(sWidth) { return new sap.ui.commons.ResponsiveContainerRange(); };


// ---- sap.ui.commons.RichTooltip --------------------------------------------------------------------------

/**
 * Constructor for a new RichTooltip.
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
 * <li>{@link #getImageSrc imageSrc} : sap.ui.core.URI</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getImageAltText imageAltText} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.TooltipBase#constructor sap.ui.core.TooltipBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Is used to provide tool tips that can have long text, image and title. This tool tip extends the TooltipBase.
 * @extends sap.ui.core.TooltipBase
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RichTooltip = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.RichTooltip with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.RichTooltip.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>imageAltText</code>.
 * This is the alt text for the image
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>imageAltText</code>
 * @since 1.11.1
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getImageAltText = function() { return ""; };

/**
 * Getter for property <code>imageSrc</code>.
 * If RichTooltip contains an image, this property is used to define the source path.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>imageSrc</code>
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getImageSrc = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.commons.RichTooltip.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RichTooltip.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>title</code>.
 * Tool tip title to be displayed in the header.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getTitle = function() { return ""; };

/**
 * This returns the previously set text. Since a FormattedTextView is used for
 * rendering and stuff the corresponding property of the FormattedTextView is
 * being read and returned. If no text was set an empty string is being
 * returned.
 * @returns {string} the ValueState text that was previously set.
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getValueStateText = function() { return ""; };

/**
 * Calculates the height of the RichTooltip to set a proper min-height.
 * Additionally the ARIA attributes are set to the corresponding elements.
 * @protected
 * 
 */
sap.ui.commons.RichTooltip.prototype.onAfterRendering = function() {  };

/**
 * Setter for property <code>imageAltText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sImageAltText new value for property <code>imageAltText</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @since 1.11.1
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.setImageAltText = function(sImageAltText) { return new sap.ui.commons.RichTooltip(); };

/**
 * Setter for property <code>imageSrc</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sImageSrc new value for property <code>imageSrc</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.setImageSrc = function(sImageSrc) { return new sap.ui.commons.RichTooltip(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.setTitle = function(sTitle) { return new sap.ui.commons.RichTooltip(); };

/**
 * This sets an individual text for the ValueState of the parent element of the RichTooltip.
 * @param {string} sText the text that should be shown as individual ValueState text
 * @returns {sap.ui.commons.RichTooltip} Returns <code>this</code> to facilitate method chaining.
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.setValueStateText = function(sText) { return new sap.ui.commons.RichTooltip(); };


// ---- sap.ui.commons.RoadMap --------------------------------------------------------------------------

/**
 * Constructor for a new RoadMap.
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
 * <li>{@link #getNumberOfVisibleSteps numberOfVisibleSteps} : int</li>
 * <li>{@link #getFirstVisibleStep firstVisibleStep} : string</li>
 * <li>{@link #getSelectedStep selectedStep} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSteps steps} : sap.ui.commons.RoadMapStep[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:stepSelected stepSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:stepExpanded stepExpanded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to display step-by-step work flows of a clearly defined work process
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RoadMap = function(sId,mSettings) {};
/**
 * Event is fired when a given step is expanded or collapsed by user.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.stepId Id of the expanded/collapsed step
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.stepExpanded = function(oControlEvent) {  };

/**
 * Event is fired when the user selects a step; assumption is that this step was not selected with the previously done select action.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.stepId Id of the selected step
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.stepSelected = function(oControlEvent) {  };

/**
 * Adds some step into the aggregation named <code>steps</code>.
 * @param {sap.ui.commons.RoadMapStep}
 *            oStep the step to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.addStep = function(oStep) { return new sap.ui.commons.RoadMap(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'stepExpanded' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RoadMap</code>.<br> itself.
 * 
 * Event is fired when a given step is expanded or collapsed by user.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RoadMap</code>.<br/> itself.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.attachStepExpanded = function(oData,fnFunction,oListener) { return new sap.ui.commons.RoadMap(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'stepSelected' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RoadMap</code>.<br> itself.
 * 
 * Event is fired when the user selects a step; assumption is that this step was not selected with the previously done select action.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RoadMap</code>.<br/> itself.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.attachStepSelected = function(oData,fnFunction,oListener) { return new sap.ui.commons.RoadMap(); };

/**
 * Destroys all the steps in the aggregation
 * named <code>steps</code>.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.destroySteps = function() { return new sap.ui.commons.RoadMap(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'stepExpanded' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.detachStepExpanded = function(fnFunction,oListener) { return new sap.ui.commons.RoadMap(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'stepSelected' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.detachStepSelected = function(fnFunction,oListener) { return new sap.ui.commons.RoadMap(); };

/**
 * Creates a new subclass of class sap.ui.commons.RoadMap with name <code>sClassName</code>
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
sap.ui.commons.RoadMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event stepExpanded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'stepId' of type <code>string</code>Id of the expanded/collapsed step</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RoadMap.prototype.fireStepExpanded = function(mArguments) { return new sap.ui.commons.RoadMap(); };

/**
 * Fire event stepSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'stepId' of type <code>string</code>Id of the selected step</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RoadMap.prototype.fireStepSelected = function(mArguments) { return new sap.ui.commons.RoadMap(); };

/**
 * Getter for property <code>firstVisibleStep</code>.
 * Id of the first step to be displayed
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>firstVisibleStep</code>
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.getFirstVisibleStep = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.RoadMap.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RoadMap.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>numberOfVisibleSteps</code>.
 * Total number of steps to be displayed at once
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>numberOfVisibleSteps</code>
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.getNumberOfVisibleSteps = function() { return 0; };

/**
 * Getter for property <code>selectedStep</code>.
 * Id of the step which is currently selected
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>selectedStep</code>
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.getSelectedStep = function() { return ""; };

/**
 * Getter for aggregation <code>steps</code>.<br/>
 * Steps that are composing the RoadMap
 * @return {sap.ui.commons.RoadMapStep[]}
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.getSteps = function() { return new Array(); };

/**
 * Getter for property <code>width</code>.
 * Control width in CSS size
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.RoadMapStep</code> in the aggregation named <code>steps</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.RoadMapStep}
 *           oStep the step whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.indexOfStep = function(oStep) { return 0; };

/**
 * Inserts a step into the aggregation named <code>steps</code>.
 * @param {sap.ui.commons.RoadMapStep}
 *            oStep the step to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the step should be inserted at; for
 *              a negative value of <code>iIndex</code>, the step is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the step is inserted at
 *              the last position
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.insertStep = function(oStep,iIndex) { return new sap.ui.commons.RoadMap(); };

/**
 * Removes all the controls in the aggregation named <code>steps</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RoadMapStep[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.removeAllSteps = function() { return new Array(); };

/**
 * Removes an step from the aggregation named <code>steps</code>.
 * @param {int | string | sap.ui.commons.RoadMapStep} vStep the stepto remove or its index or id
 * @return {sap.ui.commons.RoadMapStep} the removed step or null
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.removeStep = function(vStep) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Setter for property <code>firstVisibleStep</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sFirstVisibleStep new value for property <code>firstVisibleStep</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.setFirstVisibleStep = function(sFirstVisibleStep) { return new sap.ui.commons.RoadMap(); };

/**
 * Setter for property <code>numberOfVisibleSteps</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iNumberOfVisibleSteps new value for property <code>numberOfVisibleSteps</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.setNumberOfVisibleSteps = function(iNumberOfVisibleSteps) { return new sap.ui.commons.RoadMap(); };

/**
 * Setter for property <code>selectedStep</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSelectedStep new value for property <code>selectedStep</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.setSelectedStep = function(sSelectedStep) { return new sap.ui.commons.RoadMap(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMap.prototype.setWidth = function(sWidth) { return new sap.ui.commons.RoadMap(); };


// ---- sap.ui.commons.RoadMapStep --------------------------------------------------------------------------

/**
 * Constructor for a new RoadMapStep.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSteps subSteps} : sap.ui.commons.RoadMapStep[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Step used within a RoadMap Control.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RoadMapStep = function(sId,mSettings) {};
/**
 * Adds some subStep into the aggregation named <code>subSteps</code>.
 * @param {sap.ui.commons.RoadMapStep}
 *            oSubStep the subStep to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.addSubStep = function(oSubStep) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Destroys all the subSteps in the aggregation
 * named <code>subSteps</code>.
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.destroySubSteps = function() { return new sap.ui.commons.RoadMapStep(); };

/**
 * Creates a new subclass of class sap.ui.commons.RoadMapStep with name <code>sClassName</code>
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
sap.ui.commons.RoadMapStep.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>enabled</code>.
 * Specifies whether the user shall be allowed to click a step, or not
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>expanded</code>.
 * This property is only relevant when using sub steps.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @deprecated Since version 1.10.5. 
 * Note that sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.getExpanded = function() { return false; };

/**
 * Getter for property <code>label</code>.
 * Label of the step
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.RoadMapStep.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RoadMapStep.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>subSteps</code>.<br/>
 * Sub steps for the current step. Will be displayed only in the case that the step is expanded. Otherwise, special arrows show the availability
 * of sub steps. One level of sub steps supported.
 * @return {sap.ui.commons.RoadMapStep[]}
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.getSubSteps = function() { return new Array(); };

/**
 * Getter for property <code>visible</code>.
 * Step is visible
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.commons.RoadMapStep</code> in the aggregation named <code>subSteps</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.RoadMapStep}
 *           oSubStep the subStep whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.indexOfSubStep = function(oSubStep) { return 0; };

/**
 * Inserts a subStep into the aggregation named <code>subSteps</code>.
 * @param {sap.ui.commons.RoadMapStep}
 *            oSubStep the subStep to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the subStep should be inserted at; for
 *              a negative value of <code>iIndex</code>, the subStep is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the subStep is inserted at
 *              the last position
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.insertSubStep = function(oSubStep,iIndex) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Removes all the controls in the aggregation named <code>subSteps</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RoadMapStep[]} an array of the removed elements (might be empty)
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.removeAllSubSteps = function() { return new Array(); };

/**
 * Removes an subStep from the aggregation named <code>subSteps</code>.
 * @param {int | string | sap.ui.commons.RoadMapStep} vSubStep the subStepto remove or its index or id
 * @return {sap.ui.commons.RoadMapStep} the removed subStep or null
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.removeSubStep = function(vSubStep) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Setter for property <code>expanded</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpanded new value for property <code>expanded</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @deprecated Since version 1.10.5. 
 * Note that sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.setExpanded = function(bExpanded) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabel new value for property <code>label</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.setLabel = function(sLabel) { return new sap.ui.commons.RoadMapStep(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RoadMapStep.prototype.setVisible = function(bVisible) { return new sap.ui.commons.RoadMapStep(); };


// ---- sap.ui.commons.RowRepeater --------------------------------------------------------------------------

/**
 * Constructor for a new RowRepeater.
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
 * <li>{@link #getNumberOfRows numberOfRows} : int (default: 5)</li>
 * <li>{@link #getCurrentPage currentPage} : int (default: 1)</li>
 * <li>{@link #getShowMoreSteps showMoreSteps} : int (default: 0)</li>
 * <li>{@link #getFixedRowHeight fixedRowHeight} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getDesign design} : sap.ui.commons.RowRepeaterDesign</li>
 * <li>{@link #getThreshold threshold} : int</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getFilters filters} : sap.ui.commons.RowRepeaterFilter[]</li>
 * <li>{@link #getSorters sorters} : sap.ui.commons.RowRepeaterSorter[]</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:page page} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays items in a stacked list format, allowing the user to page in order to see more items or to use the offered filtering and sorting capabilities in order to manipulate the displayed data.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater = function(sId,mSettings) {};
/**
 * This event is triggered when a filter is set.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filterId The ID of the filter that has just been applied.
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.filter = function(oControlEvent) {  };

/**
 * This event is triggered when paging was executed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.currentPage The value of the currentPage property after the change.
 * @param {int} oControlEvent.getParameters.previousPage The value of the currentPage property before the change.
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.page = function(oControlEvent) {  };

/**
 * This event is triggered when the number of rows was changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.numberOfRows The value of the numberOfRows property after the change.
 * @param {int} oControlEvent.getParameters.previousNumberOfRows The value of the numberOfRows property before the change.
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.resize = function(oControlEvent) {  };

/**
 * This event is triggered when a sorting is applied.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.sorterId The ID of the sorter that has just been applied.
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.sort = function(oControlEvent) {  };

/**
 * Adds some filter into the aggregation named <code>filters</code>.
 * @param {sap.ui.commons.RowRepeaterFilter}
 *            oFilter the filter to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.addFilter = function(oFilter) { return new sap.ui.commons.RowRepeater(); };

/**
 * Adds some row into the aggregation named <code>rows</code>.
 * @param {sap.ui.core.Control}
 *            oRow the row to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.addRow = function(oRow) { return new sap.ui.commons.RowRepeater(); };

/**
 * Adds some sorter into the aggregation named <code>sorters</code>.
 * @param {sap.ui.commons.RowRepeaterSorter}
 *            oSorter the sorter to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.addSorter = function(oSorter) { return new sap.ui.commons.RowRepeater(); };

/**
 * Applies a filter.
 * @param {string} sId
 *         The ID if the filter.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.applyFilter = function(sId) { return null; };

/**
 * Attach event handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RowRepeater</code>.<br> itself.
 * 
 * This event is triggered when a filter is set.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RowRepeater</code>.<br/> itself.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.attachFilter = function(oData,fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'page' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RowRepeater</code>.<br> itself.
 * 
 * This event is triggered when paging was executed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RowRepeater</code>.<br/> itself.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.attachPage = function(oData,fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'resize' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RowRepeater</code>.<br> itself.
 * 
 * This event is triggered when the number of rows was changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RowRepeater</code>.<br/> itself.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.attachResize = function(oData,fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.RowRepeater</code>.<br> itself.
 * 
 * This event is triggered when a sorting is applied.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RowRepeater</code>.<br/> itself.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.attachSort = function(oData,fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Binder for aggregation <code>rows</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.bindRows = function(oBindingInfo) { return new sap.ui.commons.RowRepeater(); };

/**
 * Destroys all the filters in the aggregation
 * named <code>filters</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.destroyFilters = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Destroys the noData in the aggregation
 * named <code>noData</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.destroyNoData = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Destroys all the rows in the aggregation
 * named <code>rows</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.destroyRows = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Destroys all the sorters in the aggregation
 * named <code>sorters</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.destroySorters = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Destroys the title in the aggregation
 * named <code>title</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.destroyTitle = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.detachFilter = function(fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'page' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.detachPage = function(fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'resize' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.detachResize = function(fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.commons.RowRepeater</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.detachSort = function(fnFunction,oListener) { return new sap.ui.commons.RowRepeater(); };

/**
 * Creates a new subclass of class sap.ui.commons.RowRepeater with name <code>sClassName</code>
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
sap.ui.commons.RowRepeater.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event filter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filterId' of type <code>string</code>The ID of the filter that has just been applied.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RowRepeater.prototype.fireFilter = function(mArguments) { return new sap.ui.commons.RowRepeater(); };

/**
 * Fire event page to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'currentPage' of type <code>int</code>The value of the currentPage property after the change.</li>
 * <li>'previousPage' of type <code>int</code>The value of the currentPage property before the change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RowRepeater.prototype.firePage = function(mArguments) { return new sap.ui.commons.RowRepeater(); };

/**
 * Fire event resize to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'numberOfRows' of type <code>int</code>The value of the numberOfRows property after the change.</li>
 * <li>'previousNumberOfRows' of type <code>int</code>The value of the numberOfRows property before the change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RowRepeater.prototype.fireResize = function(mArguments) { return new sap.ui.commons.RowRepeater(); };

/**
 * Fire event sort to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'sorterId' of type <code>string</code>The ID of the sorter that has just been applied.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.RowRepeater.prototype.fireSort = function(mArguments) { return new sap.ui.commons.RowRepeater(); };

/**
 * Switch to first page.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.firstPage = function() { return null; };

/**
 * Getter for property <code>currentPage</code>.
 * The index of the page currently displayed. The index starts at 1.
 * 
 * Default value is <code>1</code>
 * @return {int} the value of property <code>currentPage</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getCurrentPage = function() { return 0; };

/**
 * Getter for property <code>design</code>.
 * The visual design of the control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.RowRepeaterDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getDesign = function() { return new sap.ui.commons.RowRepeaterDesign(); };

/**
 * Getter for aggregation <code>filters</code>.<br/>
 * Filters to be provided in toolbar.
 * @return {sap.ui.commons.RowRepeaterFilter[]}
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getFilters = function() { return new Array(); };

/**
 * Getter for property <code>fixedRowHeight</code>.
 * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height and the overflow will be hidden.
 * 
 * Default value is <code></code>
 * @return {sap.ui.core.CSSSize} the value of property <code>fixedRowHeight</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getFixedRowHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.RowRepeater.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RowRepeater.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>noData</code>.<br/>
 * This control is shown, in case there is no data available to be displayed in the RowRepeater.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>numberOfRows</code>.
 * Number of rows displayed.
 * 
 * Default value is <code>5</code>
 * @return {int} the value of property <code>numberOfRows</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getNumberOfRows = function() { return 0; };

/**
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows to be repeated.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getRows = function() { return new Array(); };

/**
 * Getter for property <code>showMoreSteps</code>.
 * Step size used to increase the numberOfRows value. This feature is only active if value is greater than 0. This will deactivate the paging feature.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>showMoreSteps</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getShowMoreSteps = function() { return 0; };

/**
 * Getter for aggregation <code>sorters</code>.<br/>
 * Sorters to be provided in secondary toolbar.
 * @return {sap.ui.commons.RowRepeaterSorter[]}
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getSorters = function() { return new Array(); };

/**
 * Getter for property <code>threshold</code>.
 * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>threshold</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getThreshold = function() { return 0; };

/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title to be displayed in top left corner. Either text or icon.
 * @return {sap.ui.core.Title}
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Switch to specified page.
 * @param {int} iPageNumber
 *         The index of the page to go to.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.gotoPage = function(iPageNumber) { return null; };

/**
 * Checks for the provided <code>sap.ui.commons.RowRepeaterFilter</code> in the aggregation named <code>filters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.RowRepeaterFilter}
 *           oFilter the filter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.indexOfFilter = function(oFilter) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>rows</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Checks for the provided <code>sap.ui.commons.RowRepeaterSorter</code> in the aggregation named <code>sorters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.RowRepeaterSorter}
 *           oSorter the sorter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.indexOfSorter = function(oSorter) { return 0; };

/**
 * Inserts a filter into the aggregation named <code>filters</code>.
 * @param {sap.ui.commons.RowRepeaterFilter}
 *            oFilter the filter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filter is inserted at
 *              the last position
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.insertFilter = function(oFilter,iIndex) { return new sap.ui.commons.RowRepeater(); };

/**
 * Inserts a row into the aggregation named <code>rows</code>.
 * @param {sap.ui.core.Control}
 *            oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the row should be inserted at; for
 *              a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the row is inserted at
 *              the last position
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.insertRow = function(oRow,iIndex) { return new sap.ui.commons.RowRepeater(); };

/**
 * Inserts a sorter into the aggregation named <code>sorters</code>.
 * @param {sap.ui.commons.RowRepeaterSorter}
 *            oSorter the sorter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the sorter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the sorter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the sorter is inserted at
 *              the last position
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.insertSorter = function(oSorter,iIndex) { return new sap.ui.commons.RowRepeater(); };

/**
 * Switch to last page.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.lastPage = function() { return null; };

/**
 * Switch to next page.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.nextPage = function() { return null; };

/**
 * Switch to previous page.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.previousPage = function() { return null; };

/**
 * Removes all the controls in the aggregation named <code>filters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RowRepeaterFilter[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeAllFilters = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeAllRows = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>sorters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RowRepeaterSorter[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeAllSorters = function() { return new Array(); };

/**
 * Removes an filter from the aggregation named <code>filters</code>.
 * @param {int | string | sap.ui.commons.RowRepeaterFilter} vFilter the filterto remove or its index or id
 * @return {sap.ui.commons.RowRepeaterFilter} the removed filter or null
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeFilter = function(vFilter) { return new sap.ui.commons.RowRepeaterFilter(); };

/**
 * Removes an row from the aggregation named <code>rows</code>.
 * @param {int | string | sap.ui.core.Control} vRow the rowto remove or its index or id
 * @return {sap.ui.core.Control} the removed row or null
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeRow = function(vRow) { return new sap.ui.core.Control(); };

/**
 * Removes an sorter from the aggregation named <code>sorters</code>.
 * @param {int | string | sap.ui.commons.RowRepeaterSorter} vSorter the sorterto remove or its index or id
 * @return {sap.ui.commons.RowRepeaterSorter} the removed sorter or null
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.removeSorter = function(vSorter) { return new sap.ui.commons.RowRepeaterSorter(); };

/**
 * Resizes the row repeater by changing the number of displayed rows. This method will only resize the RowRepeater if the property showMoreSteps is set.
 * @param {int} iNumberOfRows
 *         The new value of number of rows displayed.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.resize = function(iNumberOfRows) { return null; };

/**
 * Setter for property <code>currentPage</code>.
 * @param {int} iCurrentPage  new value for property <code>currentPage</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setCurrentPage = function(iCurrentPage) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.RowRepeaterDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setDesign = function(sDesign) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for property <code>fixedRowHeight</code>.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sFixedRowHeight new value for property <code>fixedRowHeight</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setFixedRowHeight = function(sFixedRowHeight) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for the aggregated <code>noData</code>.
 * @param {sap.ui.core.Control} oNoData the noData to set
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setNoData = function(oNoData) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for property <code>numberOfRows</code>.
 * 
 * Default value is <code>5</code>
 * @param {int} iNumberOfRows  new value for property <code>numberOfRows</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setNumberOfRows = function(iNumberOfRows) { return new sap.ui.commons.RowRepeater(); };

/**
 * Override the default behavior of <code>setShowMoreSteps</code> to update the
 * paging mode flag. Any change to the paging mode flag will result in the current
 * page being set to the first page.
 * @param {int} iShowMoreSteps  new value for property <code>showMoreSteps</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setShowMoreSteps = function(iShowMoreSteps) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for property <code>threshold</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iThreshold new value for property <code>threshold</code>
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setThreshold = function(iThreshold) { return new sap.ui.commons.RowRepeater(); };

/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle the title to set
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.setTitle = function(oTitle) { return new sap.ui.commons.RowRepeater(); };

/**
 * The <code>triggerShowMore</code> function increments the number of rows by the
 * value of <code>showMoreSteps</code>.
 * 
 * This method will only trigger a showMore if the property showMoreSteps is set.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.triggerShowMore = function() { return new sap.ui.commons.RowRepeater(); };

/**
 * Sort the data.
 * @param {string} sId
 *         The ID of the sorter.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeater.prototype.triggerSort = function(sId) { return null; };

/**
 * Unbinder for aggregation <code>rows</code>.
 * @return {sap.ui.commons.RowRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeater.prototype.unbindRows = function() { return new sap.ui.commons.RowRepeater(); };


// ---- sap.ui.commons.RowRepeaterDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.RowRepeaterDesign.toString = function() { return ""; };

// ---- sap.ui.commons.RowRepeaterFilter --------------------------------------------------------------------------

/**
 * Constructor for a new RowRepeaterFilter.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getFilters filters} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element is used by the RowRepeater and allows to define a filter in this context along with the related data such as a text and an icon.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeaterFilter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.RowRepeaterFilter with name <code>sClassName</code>
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
sap.ui.commons.RowRepeaterFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>filters</code>.
 * The set of filter objects.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>filters</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getFilters = function() { return new Object(); };

/**
 * Getter for property <code>icon</code>.
 * The filter icon if needed for display.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getIcon = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.RowRepeaterFilter.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RowRepeaterFilter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>text</code>.
 * The filter title if needed for display.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getText = function() { return ""; };

/**
 * Setter for property <code>filters</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oFilters new value for property <code>filters</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.setFilters = function(oFilters) { return new sap.ui.commons.RowRepeaterFilter(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sIcon new value for property <code>icon</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.setIcon = function(sIcon) { return new sap.ui.commons.RowRepeaterFilter(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.setText = function(sText) { return new sap.ui.commons.RowRepeaterFilter(); };


// ---- sap.ui.commons.RowRepeaterSorter --------------------------------------------------------------------------

/**
 * Constructor for a new RowRepeaterSorter.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getSorter sorter} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element is used by the RowRepeater and allows to define a sorter in this context along with the related data such as a text and an icon.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.RowRepeaterSorter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.RowRepeaterSorter with name <code>sClassName</code>
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
sap.ui.commons.RowRepeaterSorter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>icon</code>.
 * The sorter icon if needed for display.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.getIcon = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.RowRepeaterSorter.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.RowRepeaterSorter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>sorter</code>.
 * The sorter object.
 * 
 * Default value is <code>undefined</code>
 * @return {object} the value of property <code>sorter</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.getSorter = function() { return new Object(); };

/**
 * Getter for property <code>text</code>.
 * The sorter title if needed for display.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.getText = function() { return ""; };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sIcon new value for property <code>icon</code>
 * @return {sap.ui.commons.RowRepeaterSorter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.setIcon = function(sIcon) { return new sap.ui.commons.RowRepeaterSorter(); };

/**
 * Setter for property <code>sorter</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {object} oSorter new value for property <code>sorter</code>
 * @return {sap.ui.commons.RowRepeaterSorter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.setSorter = function(oSorter) { return new sap.ui.commons.RowRepeaterSorter(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.RowRepeaterSorter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.RowRepeaterSorter.prototype.setText = function(sText) { return new sap.ui.commons.RowRepeaterSorter(); };


// ---- sap.ui.commons.SearchField --------------------------------------------------------------------------

/**
 * Constructor for a new SearchField.
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
 * <li>{@link #getEnableListSuggest enableListSuggest} : boolean (default: true)</li>
 * <li>{@link #getShowListExpander showListExpander} : boolean (default: true)</li>
 * <li>{@link #getEnableClear enableClear} : boolean (default: false)</li>
 * <li>{@link #getShowExternalButton showExternalButton} : boolean (default: false)</li>
 * <li>{@link #getEnableCache enableCache} : boolean (default: true)</li>
 * <li>{@link #getEnableFilterMode enableFilterMode} : boolean (default: false)</li>
 * <li>{@link #getValue value} : string (default: )</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getVisibleItemCount visibleItemCount} : int (default: 20)</li>
 * <li>{@link #getStartSuggestion startSuggestion} : int (default: 3)</li>
 * <li>{@link #getMaxSuggestionItems maxSuggestionItems} : int (default: 10)</li>
 * <li>{@link #getMaxHistoryItems maxHistoryItems} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSearchProvider searchProvider} : sap.ui.core.search.SearchProvider</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows the user to type search queries and to trigger the search. Optionally, suggestions can be added.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.SearchField = function(sId,mSettings) {};
/**
 * Event which is fired when the user triggers a search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.search = function(oControlEvent) {  };

/**
 * Event which is fired when new suggest values are required.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value The value for which suggestions are required.
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.suggest = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.SearchField(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.SearchField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.SearchField</code>.<br> itself.
 * 
 * Event which is fired when the user triggers a search
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SearchField</code>.<br/> itself.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.commons.SearchField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'suggest' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.SearchField</code>.<br> itself.
 * 
 * Event which is fired when new suggest values are required.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SearchField</code>.<br/> itself.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.attachSuggest = function(oData,fnFunction,oListener) { return new sap.ui.commons.SearchField(); };

/**
 * Clears the history of the control
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.SearchField.prototype.clearHistory = function() { return null; };

/**
 * Destroys the searchProvider in the aggregation
 * named <code>searchProvider</code>.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.destroySearchProvider = function() { return new sap.ui.commons.SearchField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.commons.SearchField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'suggest' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.detachSuggest = function(fnFunction,oListener) { return new sap.ui.commons.SearchField(); };

/**
 * Creates a new subclass of class sap.ui.commons.SearchField with name <code>sClassName</code>
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
sap.ui.commons.SearchField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code>The search query</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.SearchField.prototype.fireSearch = function(mArguments) { return new sap.ui.commons.SearchField(); };

/**
 * Fire event suggest to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code>The value for which suggestions are required.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.SearchField.prototype.fireSuggest = function(mArguments) { return new sap.ui.commons.SearchField(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>editable</code>.
 * Non-editable controls have different colors, depending on custom settings
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enableCache</code>.
 * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableCache</code>
 * @since 1.10.3
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEnableCache = function() { return false; };

/**
 * Getter for property <code>enableClear</code>.
 * Defines whether the clear functionality shall be active
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableClear</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEnableClear = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Disabled fields have different colors, and they can not be focused.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>enableFilterMode</code>.
 * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field) and when the clear button (if activated) is pressed.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableFilterMode</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEnableFilterMode = function() { return false; };

/**
 * Getter for property <code>enableListSuggest</code>.
 * Defines whether a pop up list shall be provided for suggestions
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableListSuggest</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getEnableListSuggest = function() { return false; };

/**
 * Getter for property <code>maxHistoryItems</code>.
 * Maximum number of history items in the suggestion list.
 * 0 displays and stores no history. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxHistoryItems</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getMaxHistoryItems = function() { return 0; };

/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getMaxLength = function() { return 0; };

/**
 * Getter for property <code>maxSuggestionItems</code>.
 * Maximum number of suggestion items in the suggestion list.
 * 
 * Default value is <code>10</code>
 * @return {int} the value of property <code>maxSuggestionItems</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getMaxSuggestionItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.SearchField.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.SearchField.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>searchProvider</code>.<br/>
 * Search provider instance which handles the suggestions for this SearchField (e.g. Open Search Protocol).
 * @return {sap.ui.core.search.SearchProvider}
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getSearchProvider = function() { return new sap.ui.core.search.SearchProvider(); };

/**
 * Getter for property <code>showExternalButton</code>.
 * Defines whether an additional search button shall be displayed
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showExternalButton</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getShowExternalButton = function() { return false; };

/**
 * Getter for property <code>showListExpander</code>.
 * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions. This feature is deactivated on mobile devices.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showListExpander</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getShowListExpander = function() { return false; };

/**
 * Getter for property <code>startSuggestion</code>.
 * Minimum length of the entered string triggering the suggestion list.
 * 
 * Default value is <code>3</code>
 * @return {int} the value of property <code>startSuggestion</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getStartSuggestion = function() { return 0; };

/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>value</code>.
 * Text that shall be displayed within the search field
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getValue = function() { return ""; };

/**
 * Getter for property <code>visibleItemCount</code>.
 * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number of list items is higher than the setting,
 * a scroll bar is provided.
 * 
 * Default value is <code>20</code>
 * @return {int} the value of property <code>visibleItemCount</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getVisibleItemCount = function() { return 0; };

/**
 * Getter for property <code>width</code>.
 * Control width in CSS-size
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEditable = function(bEditable) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>enableCache</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableCache new value for property <code>enableCache</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @since 1.10.3
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEnableCache = function(bEnableCache) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>enableClear</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableClear new value for property <code>enableClear</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEnableClear = function(bEnableClear) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>enableFilterMode</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableFilterMode new value for property <code>enableFilterMode</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEnableFilterMode = function(bEnableFilterMode) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>enableListSuggest</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableListSuggest new value for property <code>enableListSuggest</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setEnableListSuggest = function(bEnableListSuggest) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>maxHistoryItems</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxHistoryItems new value for property <code>maxHistoryItems</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setMaxHistoryItems = function(iMaxHistoryItems) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>maxLength</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxLength new value for property <code>maxLength</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setMaxLength = function(iMaxLength) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>maxSuggestionItems</code>.
 * 
 * Default value is <code>10</code>.
 * @param {int} iMaxSuggestionItems new value for property <code>maxSuggestionItems</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setMaxSuggestionItems = function(iMaxSuggestionItems) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for the aggregated <code>searchProvider</code>.
 * @param {sap.ui.core.search.SearchProvider} oSearchProvider the searchProvider to set
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setSearchProvider = function(oSearchProvider) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>showExternalButton</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowExternalButton new value for property <code>showExternalButton</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setShowExternalButton = function(bShowExternalButton) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>showListExpander</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowListExpander new value for property <code>showListExpander</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setShowListExpander = function(bShowListExpander) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>startSuggestion</code>.
 * 
 * Default value is <code>3</code>.
 * @param {int} iStartSuggestion new value for property <code>startSuggestion</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setStartSuggestion = function(iStartSuggestion) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>textAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign new value for property <code>textAlign</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setValue = function(sValue) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>visibleItemCount</code>.
 * 
 * Default value is <code>20</code>.
 * @param {int} iVisibleItemCount new value for property <code>visibleItemCount</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setVisibleItemCount = function(iVisibleItemCount) { return new sap.ui.commons.SearchField(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SearchField.prototype.setWidth = function(sWidth) { return new sap.ui.commons.SearchField(); };

/**
 * Callback function used to provide the suggest values in the handler of the suggest event (only in list suggestion mode)
 * @param {string} sSSuggestValue
 *         The value which was provided in the corresponding suggest event (parameter 'value')
 * @param {string[]} aASuggestions
 *         The list of suggestions belonging to the suggest value
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.SearchField.prototype.suggest = function(sSSuggestValue,aASuggestions) { return null; };


// ---- sap.ui.commons.SearchProvider --------------------------------------------------------------------------

/**
 * Constructor for a new SearchProvider.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A SearchProvider which can be attached to a Search Field.
 * @extends sap.ui.core.search.OpenSearchProvider
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.6.0. 
 * Replaced by sap.ui.core.search.OpenSearchProvider
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.SearchProvider = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.SearchProvider with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.search.OpenSearchProvider.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.SearchProvider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.SearchProvider.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.SearchProvider.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.commons.SegmentedButton --------------------------------------------------------------------------

/**
 * Constructor for a new SegmentedButton.
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
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.commons.Button[]</li>
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
 * The SegmentedButton provides a group of multiple buttons. Only one button can be active. The behaviour is more ore less like a radio button group.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.SegmentedButton = function(sId,mSettings) {};
/**
 * Event fired when button selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectedButtonId Id of selected ToggleButton
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.select = function(oControlEvent) {  };

/**
 * Rerendering of the Buttons
 * @protected
 * 
 */
sap.ui.commons.SegmentedButton.prototype._rerenderButtons = function() {  };

/**
 * Adds some button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.commons.Button}
 *            oButton the button to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.addButton = function(oButton) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.SegmentedButton</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.SegmentedButton</code>.<br> itself.
 * 
 * Event fired when button selected
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SegmentedButton</code>.<br/> itself.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Destroys all the buttons in the aggregation
 * named <code>buttons</code>.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.destroyButtons = function() { return new sap.ui.commons.SegmentedButton(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.SegmentedButton</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Creates a new subclass of class sap.ui.commons.SegmentedButton with name <code>sClassName</code>
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
sap.ui.commons.SegmentedButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedButtonId' of type <code>string</code>Id of selected ToggleButton</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.SegmentedButton.prototype.fireSelect = function(mArguments) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Buttons
 * @return {sap.ui.commons.Button[]}
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.getButtons = function() { return new Array(); };

/**
 * Getter for property <code>enabled</code>.
 * enabled
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.SegmentedButton.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.SegmentedButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * 
 * Selected Button
 * @return {sap.ui.commons.Button}
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.getSelectedButton = function() { return new sap.ui.commons.Button(); };

/**
 * Checks for the provided <code>sap.ui.commons.Button</code> in the aggregation named <code>buttons</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Button}
 *           oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.indexOfButton = function(oButton) { return 0; };

/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.commons.Button}
 *            oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the button should be inserted at; for
 *              a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the button is inserted at
 *              the last position
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.insertButton = function(oButton,iIndex) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Button[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.removeAllButtons = function() { return new Array(); };

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.ui.commons.Button} vButton the buttonto remove or its index or id
 * @return {sap.ui.commons.Button} the removed button or null
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.removeButton = function(vButton) { return new sap.ui.commons.Button(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.SegmentedButton(); };

/**
 * Setter for the associated <code>selectedButton</code>.
 * @param {sap.ui.commons.Button} oSelectedButton Id of an element which becomes the new target of this selectedButton association. Alternatively, an element instance may be given.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.SegmentedButton.prototype.setSelectedButton = function(oSelectedButton) { return new sap.ui.commons.SegmentedButton(); };


// ---- sap.ui.commons.Slider --------------------------------------------------------------------------

/**
 * Constructor for a new Slider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getValue value} : float (default: 50)</li>
 * <li>{@link #getSmallStepWidth smallStepWidth} : float</li>
 * <li>{@link #getTotalUnits totalUnits} : int</li>
 * <li>{@link #getStepLabels stepLabels} : boolean (default: false)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getLabels labels} : string[]</li>
 * <li>{@link #getVertical vertical} : boolean (default: false)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The interactive control is displayed as a horizontal line with a pointer and units of measurement.
 * Users can move the pointer along the line to change values with graphical support.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Slider = function(sId,mSettings) {};
/**
 * Value was changed. This event is fired if the value has changed by an user action.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change.
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.change = function(oControlEvent) {  };

/**
 * Value was changed. This event is fired during the mouse move. The normal change event is only fired by mouseup.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change.
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.liveChange = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.Slider(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.Slider(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br> itself.
 * 
 * Value was changed. This event is fired if the value has changed by an user action.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.Slider(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br> itself.
 * 
 * Value was changed. This event is fired during the mouse move. The normal change event is only fired by mouseup.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.Slider(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.Slider(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.ui.commons.Slider(); };

/**
 * Creates a new subclass of class sap.ui.commons.Slider with name <code>sClassName</code>
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
sap.ui.commons.Slider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code>Current value of the slider after a change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Slider.prototype.fireChange = function(mArguments) { return new sap.ui.commons.Slider(); };

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code>Current value of the slider after a change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Slider.prototype.fireLiveChange = function(mArguments) { return new sap.ui.commons.Slider(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>editable</code>.
 * Using the slider interactively requires value "true".
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>height</code>.
 * Height of the vertical slider.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @since 1.7.1
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>labels</code>.
 * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
 * 
 * Default value is <code>undefined</code>
 * @return {string[]} the value of property <code>labels</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getLabels = function() { return new Array(); };

/**
 * Getter for property <code>max</code>.
 * Maximal value of the slider
 * 
 * Default value is <code>100</code>
 * @return {float} the value of property <code>max</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getMax = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ui.commons.Slider.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Slider.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>min</code>.
 * Minimal value of the slider.
 * 
 * Default value is <code>0</code>
 * @return {float} the value of property <code>min</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getMin = function() { return 0.0; };

/**
 * Getter for property <code>smallStepWidth</code>.
 * The grip can only be moved in steps of this width.
 * 
 * Default value is <code>undefined</code>
 * @return {float} the value of property <code>smallStepWidth</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getSmallStepWidth = function() { return 0.0; };

/**
 * Getter for property <code>stepLabels</code>.
 * Display step numbers for the ticks on the slider.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>stepLabels</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getStepLabels = function() { return false; };

/**
 * Getter for property <code>totalUnits</code>.
 * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these units.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>totalUnits</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getTotalUnits = function() { return 0; };

/**
 * Getter for property <code>value</code>.
 * Current value of the slider. (Position of the grip.)
 * 
 * Default value is <code>50</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getValue = function() { return 0.0; };

/**
 * Getter for property <code>vertical</code>.
 * Orientation of slider
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>vertical</code>
 * @since 1.7.1
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getVertical = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * Width of the horizontal slider.
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setEditable = function(bEditable) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @since 1.7.1
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>labels</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string[]} sLabels new value for property <code>labels</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setLabels = function(sLabels) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>max</code>.
 * 
 * Default value is <code>100</code>.
 * @param {float} fMax new value for property <code>max</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setMax = function(fMax) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>min</code>.
 * 
 * Default value is <code>0</code>.
 * @param {float} fMin new value for property <code>min</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setMin = function(fMin) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>smallStepWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {float} fSmallStepWidth new value for property <code>smallStepWidth</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setSmallStepWidth = function(fSmallStepWidth) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>stepLabels</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bStepLabels new value for property <code>stepLabels</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setStepLabels = function(bStepLabels) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>totalUnits</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iTotalUnits new value for property <code>totalUnits</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setTotalUnits = function(iTotalUnits) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code>50</code>.
 * @param {float} fValue new value for property <code>value</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setValue = function(fValue) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>vertical</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bVertical new value for property <code>vertical</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @since 1.7.1
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setVertical = function(bVertical) { return new sap.ui.commons.Slider(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Slider.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Slider(); };


// ---- sap.ui.commons.Splitter --------------------------------------------------------------------------

/**
 * Constructor for a new Splitter.
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
 * <li>{@link #getSplitterOrientation splitterOrientation} : sap.ui.core.Orientation</li>
 * <li>{@link #getSplitterPosition splitterPosition} : sap.ui.core.Percentage (default: 50%)</li>
 * <li>{@link #getMinSizeFirstPane minSizeFirstPane} : sap.ui.core.Percentage (default: 0%)</li>
 * <li>{@link #getMinSizeSecondPane minSizeSecondPane} : sap.ui.core.Percentage (default: 0%)</li>
 * <li>{@link #getWidth width} : sap.ui.commons.SplitterSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.commons.SplitterSize (default: 100%)</li>
 * <li>{@link #getShowScrollBars showScrollBars} : boolean (default: true)</li>
 * <li>{@link #getSplitterBarVisible splitterBarVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFirstPaneContent firstPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getSecondPaneContent secondPaneContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows to split the screen into two areas. Make sure that the container for the splitter has an absolute height or set an absolute height for the splitter using the height property. Otherwise the height of the splitter is calculated by the height of its contents.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Splitter = function(sId,mSettings) {};
/**
 * Adds some firstPaneContent into the aggregation named <code>firstPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oFirstPaneContent the firstPaneContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.addFirstPaneContent = function(oFirstPaneContent) { return new sap.ui.commons.Splitter(); };

/**
 * Adds some secondPaneContent into the aggregation named <code>secondPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondPaneContent the secondPaneContent to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.addSecondPaneContent = function(oSecondPaneContent) { return new sap.ui.commons.Splitter(); };

/**
 * Destroys all the firstPaneContent in the aggregation
 * named <code>firstPaneContent</code>.
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.destroyFirstPaneContent = function() { return new sap.ui.commons.Splitter(); };

/**
 * Destroys all the secondPaneContent in the aggregation
 * named <code>secondPaneContent</code>.
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.destroySecondPaneContent = function() { return new sap.ui.commons.Splitter(); };

/**
 * Creates a new subclass of class sap.ui.commons.Splitter with name <code>sClassName</code>
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
sap.ui.commons.Splitter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>firstPaneContent</code>.<br/>
 * Controls inside the first pane. These are the left ones in case of defining a vertical splitter, and the top ones in case of using the horizontal splitter.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getFirstPaneContent = function() { return new Array(); };

/**
 * Getter for property <code>height</code>.
 * The height of the split area in px or in %
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.commons.SplitterSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getHeight = function() { return new sap.ui.commons.SplitterSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Splitter.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Splitter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minSizeFirstPane</code>.
 * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
 * 
 * Default value is <code>0%</code>
 * @return {sap.ui.core.Percentage} the value of property <code>minSizeFirstPane</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getMinSizeFirstPane = function() { return new sap.ui.core.Percentage(); };

/**
 * Getter for property <code>minSizeSecondPane</code>.
 * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
 * 
 * Default value is <code>0%</code>
 * @return {sap.ui.core.Percentage} the value of property <code>minSizeSecondPane</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getMinSizeSecondPane = function() { return new sap.ui.core.Percentage(); };

/**
 * Getter for aggregation <code>secondPaneContent</code>.<br/>
 * Controls inside the second pane. These are the right ones in case of defining a vertical splitter, and the bottom ones in case of using the horizontal splitter.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getSecondPaneContent = function() { return new Array(); };

/**
 * Getter for property <code>showScrollBars</code>.
 * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when the content does not fit into its pane.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showScrollBars</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getShowScrollBars = function() { return false; };

/**
 * Getter for property <code>splitterBarVisible</code>.
 * set the splitter bar to be visible or not.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>splitterBarVisible</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getSplitterBarVisible = function() { return false; };

/**
 * Getter for property <code>splitterOrientation</code>.
 * The splitter can have horizontal or vertical orientation.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Orientation} the value of property <code>splitterOrientation</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getSplitterOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Getter for property <code>splitterPosition</code>.
 * Position of splitter bar in percentage.
 * The default value means that the splitter is positioned in the middle of the area that is available for the splitter.
 * 
 * Default value is <code>50%</code>
 * @return {sap.ui.core.Percentage} the value of property <code>splitterPosition</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getSplitterPosition = function() { return new sap.ui.core.Percentage(); };

/**
 * Getter for property <code>width</code>.
 * The width of the split area in px or in %
 * 
 * Default value is <code>100%</code>
 * @return {sap.ui.commons.SplitterSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.getWidth = function() { return new sap.ui.commons.SplitterSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>firstPaneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oFirstPaneContent the firstPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.indexOfFirstPaneContent = function(oFirstPaneContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondPaneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSecondPaneContent the secondPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.indexOfSecondPaneContent = function(oSecondPaneContent) { return 0; };

/**
 * Inserts a firstPaneContent into the aggregation named <code>firstPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oFirstPaneContent the firstPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the firstPaneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the firstPaneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the firstPaneContent is inserted at
 *              the last position
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.insertFirstPaneContent = function(oFirstPaneContent,iIndex) { return new sap.ui.commons.Splitter(); };

/**
 * Inserts a secondPaneContent into the aggregation named <code>secondPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondPaneContent the secondPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the secondPaneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the secondPaneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the secondPaneContent is inserted at
 *              the last position
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.insertSecondPaneContent = function(oSecondPaneContent,iIndex) { return new sap.ui.commons.Splitter(); };

/**
 * Removes all the controls in the aggregation named <code>firstPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.removeAllFirstPaneContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>secondPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.removeAllSecondPaneContent = function() { return new Array(); };

/**
 * Removes an firstPaneContent from the aggregation named <code>firstPaneContent</code>.
 * @param {int | string | sap.ui.core.Control} vFirstPaneContent the firstPaneContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed firstPaneContent or null
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.removeFirstPaneContent = function(vFirstPaneContent) { return new sap.ui.core.Control(); };

/**
 * Removes an secondPaneContent from the aggregation named <code>secondPaneContent</code>.
 * @param {int | string | sap.ui.core.Control} vSecondPaneContent the secondPaneContentto remove or its index or id
 * @return {sap.ui.core.Control} the removed secondPaneContent or null
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.removeSecondPaneContent = function(vSecondPaneContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.commons.SplitterSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>minSizeFirstPane</code>.
 * 
 * Default value is <code>0%</code>.
 * @param {sap.ui.core.Percentage} sMinSizeFirstPane new value for property <code>minSizeFirstPane</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setMinSizeFirstPane = function(sMinSizeFirstPane) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>minSizeSecondPane</code>.
 * 
 * Default value is <code>0%</code>.
 * @param {sap.ui.core.Percentage} sMinSizeSecondPane new value for property <code>minSizeSecondPane</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setMinSizeSecondPane = function(sMinSizeSecondPane) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>showScrollBars</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowScrollBars new value for property <code>showScrollBars</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setShowScrollBars = function(bShowScrollBars) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>splitterBarVisible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSplitterBarVisible new value for property <code>splitterBarVisible</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setSplitterBarVisible = function(bSplitterBarVisible) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>splitterOrientation</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Orientation} sSplitterOrientation new value for property <code>splitterOrientation</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setSplitterOrientation = function(sSplitterOrientation) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>splitterPosition</code>.
 * 
 * Default value is <code>50%</code>.
 * @param {sap.ui.core.Percentage} sSplitterPosition new value for property <code>splitterPosition</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setSplitterPosition = function(sSplitterPosition) { return new sap.ui.commons.Splitter(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.commons.SplitterSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Splitter.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Splitter(); };


// ---- sap.ui.commons.SplitterSize --------------------------------------------------------------------------


// ---- sap.ui.commons.Tab --------------------------------------------------------------------------

/**
 * Constructor for a new Tab.
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
 * <li>{@link #getVerticalScrolling verticalScrolling} : sap.ui.core.Scrolling</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : sap.ui.core.Scrolling</li>
 * <li>{@link #getClosable closable} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Panel#constructor sap.ui.commons.Panel}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A single page in a TabStrip control.
 * @extends sap.ui.commons.Panel
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Tab = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.Tab with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.Panel.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.Tab.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>closable</code>.
 * Defines whether the tab contains a close button.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>closable</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getClosable = function() { return false; };

/**
 * Getter for property <code>horizontalScrolling</code>.
 * Set the width property.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Scrolling} the value of property <code>horizontalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getHorizontalScrolling = function() { return new sap.ui.core.Scrolling(); };

/**
 * Returns a metadata object for class sap.ui.commons.Tab.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Tab.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selected</code>.
 * Defines whether the tab is the active one.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getSelected = function() { return false; };

/**
 * Getter for property <code>verticalScrolling</code>.
 * Set the height property.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Scrolling} the value of property <code>verticalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getVerticalScrolling = function() { return new sap.ui.core.Scrolling(); };

/**
 * Setter for property <code>closable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bClosable new value for property <code>closable</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.setClosable = function(bClosable) { return new sap.ui.commons.Tab(); };

/**
 * Setter for property <code>horizontalScrolling</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Scrolling} sHorizontalScrolling new value for property <code>horizontalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.setHorizontalScrolling = function(sHorizontalScrolling) { return new sap.ui.commons.Tab(); };

/**
 * Setter for property <code>selected</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected new value for property <code>selected</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.setSelected = function(bSelected) { return new sap.ui.commons.Tab(); };

/**
 * Setter for property <code>verticalScrolling</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Scrolling} sVerticalScrolling new value for property <code>verticalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.setVerticalScrolling = function(sVerticalScrolling) { return new sap.ui.commons.Tab(); };


// ---- sap.ui.commons.TabStrip --------------------------------------------------------------------------

/**
 * Constructor for a new TabStrip.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTabs tabs} : sap.ui.commons.Tab[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * A container for tab controls which contain the content and generally other controls. The user switches between the tabs then to display the content.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TabStrip = function(sId,mSettings) {};
/**
 * Event is fired when the user closes a tab.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.index Index of the closed tab.
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.close = function(oControlEvent) {  };

/**
 * Event is fired when the user selects a tab.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.index Index of the selected tab.
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.select = function(oControlEvent) {  };

/**
 * Adds some tab into the aggregation named <code>tabs</code>.
 * @param {sap.ui.commons.Tab}
 *            oTab the tab to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.addTab = function(oTab) { return new sap.ui.commons.TabStrip(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TabStrip</code>.<br> itself.
 * 
 * Event is fired when the user closes a tab.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TabStrip</code>.<br/> itself.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.commons.TabStrip(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TabStrip</code>.<br> itself.
 * 
 * Event is fired when the user selects a tab.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TabStrip</code>.<br/> itself.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.TabStrip(); };

/**
 * Close a tab. If the tab is selected, the next one will be selected. (If it's the last the previous one will be selected).
 * 
 * This method should be called if the close event is fired. It can not be called automatically because the consumer might need to run some logic before the tab is closed.
 * @param {int} iIndex
 *         Index of the tab that should be closed.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TabStrip.prototype.closeTab = function(iIndex) { return null; };

/**
 * Convenient method to add a tab with a text as title and a root control as content.
 * @param {string} sText
 *         Defines the title text of the newly created tab.
 * @param {sap.ui.core.Control} oContent
 *         Defines the root control of the content area.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TabStrip.prototype.createTab = function(sText,oContent) { return null; };

/**
 * Destroys all the tabs in the aggregation
 * named <code>tabs</code>.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.destroyTabs = function() { return new sap.ui.commons.TabStrip(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.commons.TabStrip(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.TabStrip(); };

/**
 * Creates a new subclass of class sap.ui.commons.TabStrip with name <code>sClassName</code>
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
sap.ui.commons.TabStrip.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event close to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'index' of type <code>int</code>Index of the closed tab.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TabStrip.prototype.fireClose = function(mArguments) { return new sap.ui.commons.TabStrip(); };

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'index' of type <code>int</code>Index of the selected tab.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TabStrip.prototype.fireSelect = function(mArguments) { return new sap.ui.commons.TabStrip(); };

/**
 * Getter for property <code>height</code>.
 * Height includes tab bar and content area.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.TabStrip.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TabStrip.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selectedIndex</code>.
 * Index of the currently selected tab.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getSelectedIndex = function() { return 0; };

/**
 * Getter for aggregation <code>tabs</code>.<br/>
 * Aggregating tabs contained in the tab strip.
 * @return {sap.ui.commons.Tab[]}
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getTabs = function() { return new Array(); };

/**
 * Getter for property <code>width</code>.
 * Width includes tab bar and content area.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.Tab</code> in the aggregation named <code>tabs</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Tab}
 *           oTab the tab whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.indexOfTab = function(oTab) { return 0; };

/**
 * Inserts a tab into the aggregation named <code>tabs</code>.
 * @param {sap.ui.commons.Tab}
 *            oTab the tab to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the tab should be inserted at; for
 *              a negative value of <code>iIndex</code>, the tab is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the tab is inserted at
 *              the last position
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.insertTab = function(oTab,iIndex) { return new sap.ui.commons.TabStrip(); };

/**
 * Removes all the controls in the aggregation named <code>tabs</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Tab[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.removeAllTabs = function() { return new Array(); };

/**
 * Removes an tab from the aggregation named <code>tabs</code>.
 * @param {int | string | sap.ui.commons.Tab} vTab the tabto remove or its index or id
 * @return {sap.ui.commons.Tab} the removed tab or null
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.removeTab = function(vTab) { return new sap.ui.commons.Tab(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.setHeight = function(sHeight) { return new sap.ui.commons.TabStrip(); };

/**
 * Setter for property <code>selectedIndex</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iSelectedIndex new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.setSelectedIndex = function(iSelectedIndex) { return new sap.ui.commons.TabStrip(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.setWidth = function(sWidth) { return new sap.ui.commons.TabStrip(); };


// ---- sap.ui.commons.TextArea --------------------------------------------------------------------------

/**
 * Constructor for a new TextArea.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getCols cols} : int</li>
 * <li>{@link #getRows rows} : int</li>
 * <li>{@link #getWrapping wrapping} : sap.ui.core.Wrapping</li>
 * <li>{@link #getCursorPos cursorPos} : int</li>
 * <li>{@link #getExplanation explanation} : string</li>
 * <li>{@link #getLabeledBy labeledBy} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Control to enter or display multible row text.
 * @extends sap.ui.commons.TextField
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TextArea = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.TextArea with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.TextArea.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>cols</code>.
 * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not used.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>cols</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getCols = function() { return 0; };

/**
 * Getter for property <code>cursorPos</code>.
 * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>cursorPos</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getCursorPos = function() { return 0; };

/**
 * Getter for property <code>explanation</code>.
 * text which appears, in case quick-help is switched on
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>explanation</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getExplanation = function() { return ""; };

/**
 * Getter for property <code>height</code>.
 * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>labeledBy</code>.
 * ID of label control
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>labeledBy</code>
 * @deprecated Since version 1.5.2. 
 * Please use association AriaLabelledBy instead.
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getLabeledBy = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.TextArea.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TextArea.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>rows</code>.
 * Number of Rows. This proprty is only used if Height is not used.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>rows</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getRows = function() { return 0; };

/**
 * Getter for property <code>wrapping</code>.
 * Text wrapping. Possible values are: Soft, Hard, Off.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Wrapping} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getWrapping = function() { return new sap.ui.core.Wrapping(); };

/**
 * Setter for property <code>cols</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iCols new value for property <code>cols</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setCols = function(iCols) { return new sap.ui.commons.TextArea(); };

/**
 * Property setter for the cursor position
 * @param {int} iCursorPos cursor position
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setCursorPos = function(iCursorPos) { return new sap.ui.commons.TextArea(); };

/**
 * Setter for property <code>explanation</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sExplanation new value for property <code>explanation</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setExplanation = function(sExplanation) { return new sap.ui.commons.TextArea(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setHeight = function(sHeight) { return new sap.ui.commons.TextArea(); };

/**
 * Setter for property <code>labeledBy</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLabeledBy new value for property <code>labeledBy</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @deprecated Since version 1.5.2. 
 * Please use association AriaLabelledBy instead.
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setLabeledBy = function(sLabeledBy) { return new sap.ui.commons.TextArea(); };

/**
 * Property setter for MaxLength
 * @param {int} iMaxLength maximal length of text
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setMaxLength = function(iMaxLength) { return new sap.ui.commons.TextArea(); };

/**
 * Setter for property <code>rows</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iRows new value for property <code>rows</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setRows = function(iRows) { return new sap.ui.commons.TextArea(); };

/**
 * Setter for property <code>wrapping</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Wrapping} sWrapping new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.setWrapping = function(sWrapping) { return new sap.ui.commons.TextArea(); };


// ---- sap.ui.commons.TextField --------------------------------------------------------------------------

/**
 * Constructor for a new TextField.
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
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getImeMode imeMode} : sap.ui.core.ImeMode</li>
 * <li>{@link #getDesign design} : sap.ui.core.Design</li>
 * <li>{@link #getHelpId helpId} : string (default: )</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Control is used to enter text.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TextField = function(sId,mSettings) {};
/**
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the textfield.
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.change = function(oControlEvent) {  };

/**
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.liveValue Current value of the Textfield.
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.liveChange = function(oControlEvent) {  };

/**
 * Compares the previous value with the current value and fires the change event
 * if the TextField is editable and the value has changed.
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype._checkChange = function(oEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.TextField(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.TextField(); };

/**
 * Applies the focus info
 * overwrite of the Element method because in IE8 on rerendering focus is lost
 * @param {object} oFocusInfo Focus information
 * @return {object} reference to this
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.applyFocusInfo = function(oFocusInfo) { return new Object(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TextField</code>.<br> itself.
 * 
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TextField</code>.<br/> itself.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.TextField(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TextField</code>.<br> itself.
 * 
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TextField</code>.<br/> itself.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.TextField(); };

/**
 * Binder for property <code>value</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.bindValue = function(oBindingInfo) { return new sap.ui.commons.TextField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.TextField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.ui.commons.TextField(); };

/**
 * Creates a new subclass of class sap.ui.commons.TextField with name <code>sClassName</code>
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
sap.ui.commons.TextField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code>The new / changed value of the textfield.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.fireChange = function(mArguments) { return new sap.ui.commons.TextField(); };

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'liveValue' of type <code>string</code>Current value of the Textfield.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.fireLiveChange = function(mArguments) { return new sap.ui.commons.TextField(); };

/**
 * Getter for property <code>accessibleRole</code>.
 * Accessibility role for the text field.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getAccessibleRole = function() { return new sap.ui.core.AccessibleRole(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>design</code>.
 * Font type. Standard, Monospace
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.Design} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getDesign = function() { return new sap.ui.core.Design(); };

/**
 * Getter for property <code>editable</code>.
 * Switches edit state of the control. Read-only fields have different colors, depending on customer setting.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getEnabled = function() { return false; };

/**
 * Returns an object representing the serialized focus information
 * @return {object} an object representing the serialized focus information
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.getFocusInfo = function() { return new Object(); };

/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help service.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getHelpId = function() { return ""; };

/**
 * Getter for property <code>imeMode</code>.
 * State of the Input Method Editor (IME).
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ImeMode} the value of property <code>imeMode</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getImeMode = function() { return new sap.ui.core.ImeMode(); };

/**
 * Method for accessing the DOM Ref of the input element.
 * @return {object} DOM reference or null
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.getInputDomRef = function() { return new Object(); };

/**
 * Returns the current value of the TextField. In case of editing the TextField you can access the current value via this method. The validated value is accessible via the property value.
 * @return {string} live value
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TextField.prototype.getLiveValue = function() { return ""; };

/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getMaxLength = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.commons.TextField.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TextField.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>placeholder</code>.
 * Placeholder for the text field.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>placeholder</code>
 * @since 1.14.0
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getPlaceholder = function() { return ""; };

/**
 * Getter for property <code>required</code>.
 * Depending on theme the TextField is shown as required.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>required</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getRequired = function() { return false; };

/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>textDirection</code>.
 * Direction of the text. Possible values: rtl, ltr.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>value</code>.
 * Text inside the textfield
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getValue = function() { return ""; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text field length defines the width.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Event handler called when control is receiving the focus
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.onfocusin = function(oEvent) {  };

/**
 * Event handler for keyup.
 * fire the liveChange event
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.onkeyup = function(oEvent) {  };

/**
 * Event handler called when enter key is pressed.
 * @param {jQuery.Event} oEvent The event object.
 * @see sap.ui.commons.TextField#onfocusout
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.onsapenter = function(oEvent) {  };

/**
 * Event handler called when control is losing the focus
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.onsapfocusleave = function(oEvent) {  };

/**
 * Event handler called when text selection starts.
 * When the text field is disabled, the text should not be selectable, so cancel the event.
 * @param {jQuery.Event} oEvent The event object.
 * @protected
 * 
 */
sap.ui.commons.TextField.prototype.onselectstart = function(oEvent) {  };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>accessibleRole</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.AccessibleRole} sAccessibleRole new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setAccessibleRole = function(sAccessibleRole) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.Design} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setDesign = function(sDesign) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setEditable = function(bEditable) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>helpId</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sHelpId new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setHelpId = function(sHelpId) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>imeMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ImeMode} sImeMode new value for property <code>imeMode</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setImeMode = function(sImeMode) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>maxLength</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxLength new value for property <code>maxLength</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setMaxLength = function(iMaxLength) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setName = function(sName) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>placeholder</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sPlaceholder new value for property <code>placeholder</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @since 1.14.0
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>required</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bRequired new value for property <code>required</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setRequired = function(bRequired) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>textAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setValue = function(sValue) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setValueState = function(sValueState) { return new sap.ui.commons.TextField(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.setWidth = function(sWidth) { return new sap.ui.commons.TextField(); };

/**
 * Unbinder for property <code>value</code>.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.unbindValue = function() { return new sap.ui.commons.TextField(); };


// ---- sap.ui.commons.TextView --------------------------------------------------------------------------

/**
 * Constructor for a new TextView.
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
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getHelpId helpId} : string (default: )</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole</li>
 * <li>{@link #getDesign design} : sap.ui.commons.TextViewDesign</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getSemanticColor semanticColor} : sap.ui.commons.TextViewColor</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to display some continous text. The control can inherit the text direction from its parent control.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TextView = function(sId,mSettings) {};
/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.TextView(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.TextView(); };

/**
 * Binder for property <code>text</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.bindText = function(oBindingInfo) { return new sap.ui.commons.TextView(); };

/**
 * Creates a new subclass of class sap.ui.commons.TextView with name <code>sClassName</code>
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
sap.ui.commons.TextView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getAccessibleRole = function() { return new sap.ui.core.AccessibleRole(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>design</code>.
 * Defines the visual appearance of the control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.TextViewDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getDesign = function() { return new sap.ui.commons.TextViewDesign(); };

/**
 * Getter for property <code>enabled</code>.
 * When the control is disabled, it is greyed out and no longer focusable.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getEnabled = function() { return false; };

/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help services.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getHelpId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.commons.TextView.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TextView.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>semanticColor</code>.
 * Semantic color of the text View
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.TextViewColor} the value of property <code>semanticColor</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getSemanticColor = function() { return new sap.ui.commons.TextViewColor(); };

/**
 * Getter for property <code>text</code>.
 * Text to be displayed.
 * 
 * Default value is <code></code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for property <code>textDirection</code>.
 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>width</code>.
 * Width of the TextView
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>wrapping</code>.
 * Disabled automatic wrapping of the text.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getWrapping = function() { return false; };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>accessibleRole</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.AccessibleRole} sAccessibleRole new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setAccessibleRole = function(sAccessibleRole) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.TextViewDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setDesign = function(sDesign) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>helpId</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sHelpId new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setHelpId = function(sHelpId) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>semanticColor</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.TextViewColor} sSemanticColor new value for property <code>semanticColor</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setSemanticColor = function(sSemanticColor) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code></code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setText = function(sText) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>textAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setWidth = function(sWidth) { return new sap.ui.commons.TextView(); };

/**
 * Setter for property <code>wrapping</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bWrapping new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.setWrapping = function(bWrapping) { return new sap.ui.commons.TextView(); };

/**
 * Unbinder for property <code>text</code>.
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.unbindText = function() { return new sap.ui.commons.TextView(); };


// ---- sap.ui.commons.TextViewColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.TextViewColor.toString = function() { return ""; };

// ---- sap.ui.commons.TextViewDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.TextViewDesign.toString = function() { return ""; };

// ---- sap.ui.commons.Title --------------------------------------------------------------------------

/**
 * Constructor for a new Title.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a title element that can be used for aggregation with other controls
 * @extends sap.ui.core.Title
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.core library. Please use this one.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Title = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.Title with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Title.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.Title.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>level</code>.
 * Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
 * 
 * Currently not all controls using the Title.control supporting this property.
 * 
 * Default value is <code>Auto</code>
 * @return {sap.ui.commons.TitleLevel} the value of property <code>level</code>
 * @public
 * @since 1.9.1
 * 
 */
sap.ui.commons.Title.prototype.getLevel = function() { return new sap.ui.commons.TitleLevel(); };

/**
 * Returns a metadata object for class sap.ui.commons.Title.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Title.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>level</code>.
 * 
 * Default value is <code>Auto</code>
 * @param {sap.ui.commons.TitleLevel} oLevel new value for property <code>level</code>
 * @return {sap.ui.commons.Title} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * 
 */
sap.ui.commons.Title.prototype.setLevel = function(oLevel) { return new sap.ui.commons.Title(); };


// ---- sap.ui.commons.ToggleButton --------------------------------------------------------------------------

/**
 * Constructor for a new ToggleButton.
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
 * <li>{@link #getPressed pressed} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Button#constructor sap.ui.commons.Button}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ToggleButton Control is a Button that can be toggled between pressed and normal state
 * @extends sap.ui.commons.Button
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ToggleButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.ToggleButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.Button.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.ToggleButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.commons.ToggleButton.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ToggleButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>pressed</code>.
 * The property is “true” when the control is toggled. The default state of this property is "false".
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>pressed</code>
 * @public
 * 
 */
sap.ui.commons.ToggleButton.prototype.getPressed = function() { return false; };

/**
 * Setter for property <code>pressed</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPressed new value for property <code>pressed</code>
 * @return {sap.ui.commons.ToggleButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ToggleButton.prototype.setPressed = function(bPressed) { return new sap.ui.commons.ToggleButton(); };


// ---- sap.ui.commons.Toolbar --------------------------------------------------------------------------

/**
 * Constructor for a new Toolbar.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.ToolbarDesign</li>
 * <li>{@link #getStandalone standalone} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.commons.ToolbarItem[]</li>
 * <li>{@link #getRightItems rightItems} : sap.ui.commons.ToolbarItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A horizontal row of items where in many cases the single toolbar items are buttons containing icons. Note that all controls with the
 * sap.ui.commons.ToolbarItem interface can be used as item: Button, ComboBox, TextField.
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.Toolbar
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Toolbar = function(sId,mSettings) {};
/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.addItem = function(oItem) { return new sap.ui.commons.Toolbar(); };

/**
 * Adds some rightItem into the aggregation named <code>rightItems</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *            oRightItem the rightItem to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.addRightItem = function(oRightItem) { return new sap.ui.commons.Toolbar(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.destroyItems = function() { return new sap.ui.commons.Toolbar(); };

/**
 * Destroys all the rightItems in the aggregation
 * named <code>rightItems</code>.
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.destroyRightItems = function() { return new sap.ui.commons.Toolbar(); };

/**
 * Creates a new subclass of class sap.ui.commons.Toolbar with name <code>sClassName</code>
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
sap.ui.commons.Toolbar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>design</code>.
 * Design settings are theme-dependent.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.ToolbarDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.getDesign = function() { return new sap.ui.commons.ToolbarDesign(); };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregating the tool bar items.
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.commons.Toolbar.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Toolbar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>rightItems</code>.<br/>
 * Aggregating the right side tool bar items.
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.getRightItems = function() { return new Array(); };

/**
 * Getter for property <code>standalone</code>.
 * Per default, tool bars have the stand alone status.
 * Alternatively, they can be nested in other controls and then inherit the design from their parent control.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>standalone</code>
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.getStandalone = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing into a drop-down menu.
 * 
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.ToolbarItem}
 *           oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>rightItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.ToolbarItem}
 *           oRightItem the rightItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.indexOfRightItem = function(oRightItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.commons.Toolbar(); };

/**
 * Inserts a rightItem into the aggregation named <code>rightItems</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *            oRightItem the rightItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the rightItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the rightItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the rightItem is inserted at
 *              the last position
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.insertRightItem = function(oRightItem,iIndex) { return new sap.ui.commons.Toolbar(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>rightItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.removeAllRightItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.commons.ToolbarItem} vItem the itemto remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed item or null
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.removeItem = function(vItem) { return new sap.ui.commons.ToolbarItem(); };

/**
 * Removes an rightItem from the aggregation named <code>rightItems</code>.
 * @param {int | string | sap.ui.commons.ToolbarItem} vRightItem the rightItemto remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed rightItem or null
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.removeRightItem = function(vRightItem) { return new sap.ui.commons.ToolbarItem(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.ToolbarDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.setDesign = function(sDesign) { return new sap.ui.commons.Toolbar(); };

/**
 * Setter for property <code>standalone</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bStandalone new value for property <code>standalone</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.setStandalone = function(bStandalone) { return new sap.ui.commons.Toolbar(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Toolbar.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Toolbar(); };


// ---- sap.ui.commons.ToolbarDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.ToolbarDesign.toString = function() { return ""; };

// ---- sap.ui.commons.ToolbarItem --------------------------------------------------------------------------


// ---- sap.ui.commons.ToolbarSeparator --------------------------------------------------------------------------

/**
 * Constructor for a new ToolbarSeparator.
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
 * <li>{@link #getDisplayVisualSeparator displayVisualSeparator} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.ToolbarSeparatorDesign</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A small vertical line that is generally added to the tool bar between the items to visually separate them.
 * @extends sap.ui.core.Element
 * @implements sap.ui.commons.ToolbarItem
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ToolbarSeparator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.commons.ToolbarSeparator with name <code>sClassName</code>
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
sap.ui.commons.ToolbarSeparator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>design</code>.
 * Design of the Separator.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.ToolbarSeparatorDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparator.prototype.getDesign = function() { return new sap.ui.commons.ToolbarSeparatorDesign(); };

/**
 * Getter for property <code>displayVisualSeparator</code>.
 * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>displayVisualSeparator</code>
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparator.prototype.getDisplayVisualSeparator = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.ToolbarSeparator.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ToolbarSeparator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>design</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.ToolbarSeparatorDesign} sDesign new value for property <code>design</code>
 * @return {sap.ui.commons.ToolbarSeparator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparator.prototype.setDesign = function(sDesign) { return new sap.ui.commons.ToolbarSeparator(); };

/**
 * Setter for property <code>displayVisualSeparator</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDisplayVisualSeparator new value for property <code>displayVisualSeparator</code>
 * @return {sap.ui.commons.ToolbarSeparator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparator.prototype.setDisplayVisualSeparator = function(bDisplayVisualSeparator) { return new sap.ui.commons.ToolbarSeparator(); };


// ---- sap.ui.commons.ToolbarSeparatorDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.ToolbarSeparatorDesign.toString = function() { return ""; };

// ---- sap.ui.commons.Tree --------------------------------------------------------------------------

/**
 * Constructor for a new Tree.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getShowHeaderIcons showHeaderIcons} : boolean (default: true)</li>
 * <li>{@link #getShowHorizontalScrollbar showHorizontalScrollbar} : boolean (default: false)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.commons.TreeSelectionMode</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.ui.commons.TreeNode[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Simple tree to display item in a hierarchical way
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Tree = function(sId,mSettings) {};
/**
 * Event is fired when a tree node is selected.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.commons.TreeNode} oControlEvent.getParameters.node The node which has been selected.
 * @param {object} oControlEvent.getParameters.nodeContext The binding context of the selected node.
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.select = function(oControlEvent) {  };

/**
 * fired when the selection of the tree has been changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.commons.TreeNode[]} oControlEvent.getParameters.nodes The nodes which has been selected.
 * @param {object[]} oControlEvent.getParameters.nodeContexts The binding context of the selected nodes.
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.selectionChange = function(oControlEvent) {  };

/**
 * Adds some node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.addNode = function(oNode) { return new sap.ui.commons.Tree(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.Tree</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Tree</code>.<br> itself.
 * 
 * Event is fired when a tree node is selected.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Tree</code>.<br/> itself.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.commons.Tree(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChange' event of this <code>sap.ui.commons.Tree</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.Tree</code>.<br> itself.
 * 
 * fired when the selection of the tree has been changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Tree</code>.<br/> itself.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.attachSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.Tree(); };

/**
 * Binder for aggregation <code>nodes</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.bindNodes = function(oBindingInfo) { return new sap.ui.commons.Tree(); };

/**
 * Collapses all nodes in the tree
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Tree.prototype.collapseAll = function() { return null; };

/**
 * Destroys all the nodes in the aggregation
 * named <code>nodes</code>.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.destroyNodes = function() { return new sap.ui.commons.Tree(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.Tree</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.commons.Tree(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChange' event of this <code>sap.ui.commons.Tree</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.detachSelectionChange = function(fnFunction,oListener) { return new sap.ui.commons.Tree(); };

/**
 * Expands all nodes in the tree
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.Tree.prototype.expandAll = function() { return null; };

/**
 * Creates a new subclass of class sap.ui.commons.Tree with name <code>sClassName</code>
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
sap.ui.commons.Tree.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event select to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'node' of type <code>sap.ui.commons.TreeNode</code>The node which has been selected.</li>
 * <li>'nodeContext' of type <code>object</code>The binding context of the selected node.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.commons.Tree.prototype.fireSelect = function(mArguments) { return false; };

/**
 * Fire event selectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'nodes' of type <code>sap.ui.commons.TreeNode[]</code>The nodes which has been selected.</li>
 * <li>'nodeContexts' of type <code>object[]</code>The binding context of the selected nodes.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.Tree.prototype.fireSelectionChange = function(mArguments) { return new sap.ui.commons.Tree(); };

/**
 * Getter for property <code>height</code>.
 * Tree height
 * 
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.commons.Tree.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.Tree.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minWidth</code>.
 * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to avoid the tree to become too narrow when container is resize
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns the node with the given context, or null if no such node currently exists
 * @param {sap.ui.model.Context} oContext the context of the node to be retrieved
 * @public
 * @since 1.19
 * 
 */
sap.ui.commons.Tree.prototype.getNodeByContext = function(oContext) {  };

/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * First level nodes
 * @return {sap.ui.commons.TreeNode[]}
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getNodes = function() { return new Array(); };

/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Tree.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.TreeSelectionMode} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getSelectionMode = function() { return new sap.ui.commons.TreeSelectionMode(); };

/**
 * Getter for property <code>showHeader</code>.
 * Tree Header is display. If false, the tree will be in a transparent mode
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHeader = function() { return false; };

/**
 * Getter for property <code>showHeaderIcons</code>.
 * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeaderIcons</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHeaderIcons = function() { return false; };

/**
 * Getter for property <code>showHorizontalScrollbar</code>.
 * Display horizontal scrollbar. If false, the overflow content will be hidden
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showHorizontalScrollbar</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHorizontalScrollbar = function() { return false; };

/**
 * Getter for property <code>title</code>.
 * Tree title
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getTitle = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * Tree width
 * 
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.TreeNode</code> in the aggregation named <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.TreeNode}
 *           oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.commons.Tree(); };

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.TreeNode[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.removeAllNodes = function() { return new Array(); };

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 * @param {int | string | sap.ui.commons.TreeNode} vNode the nodeto remove or its index or id
 * @return {sap.ui.commons.TreeNode} the removed node or null
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.removeNode = function(vNode) { return new sap.ui.commons.TreeNode(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sHeight new value for property <code>height</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setHeight = function(sHeight) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>minWidth</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sMinWidth new value for property <code>minWidth</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setMinWidth = function(sMinWidth) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>selectionMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.TreeSelectionMode} sSelectionMode new value for property <code>selectionMode</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>showHeader</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeader new value for property <code>showHeader</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>showHeaderIcons</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeaderIcons new value for property <code>showHeaderIcons</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setShowHeaderIcons = function(bShowHeaderIcons) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>showHorizontalScrollbar</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHorizontalScrollbar new value for property <code>showHorizontalScrollbar</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setShowHorizontalScrollbar = function(bShowHorizontalScrollbar) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setTitle = function(sTitle) { return new sap.ui.commons.Tree(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.setWidth = function(sWidth) { return new sap.ui.commons.Tree(); };

/**
 * Unbinder for aggregation <code>nodes</code>.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.unbindNodes = function() { return new sap.ui.commons.Tree(); };


// ---- sap.ui.commons.TreeNode --------------------------------------------------------------------------

/**
 * Constructor for a new TreeNode.
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
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getHasExpander hasExpander} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIsSelected isSelected} : boolean (default: false)</li>
 * <li>{@link #getSelectable selectable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.ui.commons.TreeNode[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:toggleOpenState toggleOpenState} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Tree node element
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TreeNode = function(sId,mSettings) {};
/**
 * Node is selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.selected = function(oControlEvent) {  };

/**
 * Node state has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.opened Node has been opened if true
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.toggleOpenState = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association named <code>ariaDescribedBy</code>.
 * @param {string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.commons.TreeNode(); };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.commons.TreeNode(); };

/**
 * Adds some node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to add; to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.addNode = function(oNode) { return new sap.ui.commons.TreeNode(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TreeNode</code>.<br> itself.
 * 
 * Node is selected
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TreeNode</code>.<br/> itself.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.attachSelected = function(oData,fnFunction,oListener) { return new sap.ui.commons.TreeNode(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TreeNode</code>.<br> itself.
 * 
 * Node state has changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TreeNode</code>.<br/> itself.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.attachToggleOpenState = function(oData,fnFunction,oListener) { return new sap.ui.commons.TreeNode(); };

/**
 * Collapses the node
 * @param {boolean} bCollapseChildren
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TreeNode.prototype.collapse = function(bCollapseChildren) {  };

/**
 * Destroys all the nodes in the aggregation
 * named <code>nodes</code>.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.destroyNodes = function() { return new sap.ui.commons.TreeNode(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.detachSelected = function(fnFunction,oListener) { return new sap.ui.commons.TreeNode(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.detachToggleOpenState = function(fnFunction,oListener) { return new sap.ui.commons.TreeNode(); };

/**
 * Expands the node
 * @param {boolean} bExpandChildren
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TreeNode.prototype.expand = function(bExpandChildren) {  };

/**
 * Creates a new subclass of class sap.ui.commons.TreeNode with name <code>sClassName</code>
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
sap.ui.commons.TreeNode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event selected to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TreeNode.prototype.fireSelected = function(mArguments) { return new sap.ui.commons.TreeNode(); };

/**
 * Fire event toggleOpenState to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'opened' of type <code>boolean</code>Node has been opened if true</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TreeNode.prototype.fireToggleOpenState = function(mArguments) { return new sap.ui.commons.TreeNode(); };

/**
 * Id of the element which is the current target of the <code>ariaDescribedBy</code> association, or null
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Id of the element which is the current target of the <code>ariaLabelledBy</code> association, or null
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Getter for property <code>expanded</code>.
 * Node is expanded
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getExpanded = function() { return false; };

/**
 * Getter for property <code>hasExpander</code>.
 * Should the node has an expander.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hasExpander</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getHasExpander = function() { return false; };

/**
 * Getter for property <code>icon</code>.
 * Icon to display in front of the node
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>isSelected</code>.
 * Node is selected
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isSelected</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getIsSelected = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.TreeNode.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TreeNode.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * Subnodes for the current node
 * @return {sap.ui.commons.TreeNode[]}
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getNodes = function() { return new Array(); };

/**
 * Getter for property <code>selectable</code>.
 * The node is selectable. If true, clicking on the node text triggers "selected" event
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>selectable</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getSelectable = function() { return false; };

/**
 * Getter for property <code>text</code>.
 * Node text
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getText = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.commons.TreeNode</code> in the aggregation named <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.TreeNode}
 *           oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.commons.TreeNode(); };

/**
 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.TreeNode[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeAllNodes = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.Control(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledByto remove or its index or id
 * @return {sap.ui.core.Control} the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 * @param {int | string | sap.ui.commons.TreeNode} vNode the nodeto remove or its index or id
 * @return {sap.ui.commons.TreeNode} the removed node or null
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.removeNode = function(vNode) { return new sap.ui.commons.TreeNode(); };

/**
 * Select the node, and if any, deselects the previously selected node
 * @param {boolean} bSuppressEvent
 * @param {boolean} bDeselectOtherNodes
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TreeNode.prototype.select = function(bSuppressEvent,bDeselectOtherNodes) {  };

/**
 * Setter for property <code>expanded</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded new value for property <code>expanded</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setExpanded = function(bExpanded) { return new sap.ui.commons.TreeNode(); };

/**
 * Setter for property <code>hasExpander</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHasExpander new value for property <code>hasExpander</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setHasExpander = function(bHasExpander) { return new sap.ui.commons.TreeNode(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIcon new value for property <code>icon</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setIcon = function(sIcon) { return new sap.ui.commons.TreeNode(); };

/**
 * Redefinition of Setter for property <code>isSelected</code> for validation purpose
 * 
 * Default value is empty/<code>undefined</code>
 * @param {boolean} bIsSelected  new value for property <code>isSelected</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setIsSelected = function(bIsSelected) { return new sap.ui.commons.TreeNode(); };

/**
 * Redefinition of Setter for property <code>selectable</code> for validation purpose.
 * 
 * Default value is <code>true</code>
 * @param {boolean} bSelectable  new value for property <code>selectable</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setSelectable = function(bSelectable) { return new sap.ui.commons.TreeNode(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.setText = function(sText) { return new sap.ui.commons.TreeNode(); };


// ---- sap.ui.commons.TreeSelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.TreeSelectionMode.toString = function() { return ""; };

// ---- sap.ui.commons.TriStateCheckBox --------------------------------------------------------------------------

/**
 * Constructor for a new TriStateCheckBox.
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
 * <li>{@link #getSelectionState selectionState} : sap.ui.commons.TriStateCheckBoxState</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * TriStateCheckBox to reflect mixed state for checkboxes. The control can display three states, namely checked, unchecked and mixed. However, mixed state cannot be directly reached by user interaction on the particular control.
 * It can be only set by the control's public toggle function, to make a behaviour possible which is e.g. required in checkbox trees.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @since 1.7.2
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TriStateCheckBox = function(sId,mSettings) {};
/**
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectionState Checks whether the box is flagged or not flagged.
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.change = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.TriStateCheckBox</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.TriStateCheckBox</code>.<br> itself.
 * 
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TriStateCheckBox</code>.<br/> itself.
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.TriStateCheckBox</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Creates a new subclass of class sap.ui.commons.TriStateCheckBox with name <code>sClassName</code>
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
sap.ui.commons.TriStateCheckBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectionState' of type <code>string</code>Checks whether the box is flagged or not flagged.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.fireChange = function(mArguments) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user shall be allowed to flag the check box
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enabled</code>.
 * Using this property, the control could be disabled, if required.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.commons.TriStateCheckBox.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.TriStateCheckBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>selectionState</code>.
 * Defines the states of the checkbox
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.commons.TriStateCheckBoxState} the value of property <code>selectionState</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getSelectionState = function() { return new sap.ui.commons.TriStateCheckBoxState(); };

/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the check box
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>textDirection</code>.
 * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent control.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Getter for property <code>valueState</code>.
 * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>width</code>.
 * The width can be set to an absolute value. If no value is set, the control width results from the text length.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setEditable = function(bEditable) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>enabled</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled new value for property <code>enabled</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setEnabled = function(bEnabled) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>selectionState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.commons.TriStateCheckBoxState} sSelectionState new value for property <code>selectionState</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setSelectionState = function(sSelectionState) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>text</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sText new value for property <code>text</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setText = function(sText) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>textDirection</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.ValueState} sValueState new value for property <code>valueState</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setValueState = function(sValueState) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.setWidth = function(sWidth) { return new sap.ui.commons.TriStateCheckBox(); };

/**
 * Method called whenever a user clicks on a tri-state checkbox
 * @param {sap.ui.commons.TriStateCheckBoxState} destState 
 *         destined selection state of checkbox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.TriStateCheckBox.prototype.toggle = function(destState) {  };


// ---- sap.ui.commons.TriStateCheckBoxState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.commons.TriStateCheckBoxState.toString = function() { return ""; };

// ---- sap.ui.commons.ValueHelpField --------------------------------------------------------------------------

/**
 * Constructor for a new ValueHelpField.
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
 * <li>{@link #getIconURL iconURL} : sap.ui.core.URI</li>
 * <li>{@link #getIconHoverURL iconHoverURL} : sap.ui.core.URI</li>
 * <li>{@link #getIconDisabledURL iconDisabledURL} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:valueHelpRequest valueHelpRequest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A TextField with an attached icon which triggeres an event.
 * @extends sap.ui.commons.TextField
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.commons.ValueHelpField = function(sId,mSettings) {};
/**
 * Event which is fired when the ValueHelp is requested.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.valueHelpRequest = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'valueHelpRequest' event of this <code>sap.ui.commons.ValueHelpField</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.commons.ValueHelpField</code>.<br> itself.
 * 
 * Event which is fired when the ValueHelp is requested.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ValueHelpField</code>.<br/> itself.
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.attachValueHelpRequest = function(oData,fnFunction,oListener) { return new sap.ui.commons.ValueHelpField(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'valueHelpRequest' event of this <code>sap.ui.commons.ValueHelpField</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.detachValueHelpRequest = function(fnFunction,oListener) { return new sap.ui.commons.ValueHelpField(); };

/**
 * Creates a new subclass of class sap.ui.commons.ValueHelpField with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.commons.ValueHelpField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event valueHelpRequest to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.commons.ValueHelpField.prototype.fireValueHelpRequest = function(mArguments) { return new sap.ui.commons.ValueHelpField(); };

/**
 * Getter for property <code>iconDisabledURL</code>.
 * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image will be shown.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconDisabledURL</code>
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.getIconDisabledURL = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconHoverURL</code>.
 * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image will be shown.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHoverURL</code>
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.getIconHoverURL = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>iconURL</code>.
 * Url of the standard icon for the value help. If no parameter is supplied the default icon image will be shown.
 * This can be an URI to an image or an icon font URI.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconURL</code>
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.getIconURL = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.commons.ValueHelpField.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.commons.ValueHelpField.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Handle F4 event
 * @param {jQuery.Event} oEvent the occurring event
 * @protected
 * 
 */
sap.ui.commons.ValueHelpField.prototype.onsapshow = function(oEvent) {  };

/**
 * Setter for property <code>iconDisabledURL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconDisabledURL new value for property <code>iconDisabledURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.setIconDisabledURL = function(sIconDisabledURL) { return new sap.ui.commons.ValueHelpField(); };

/**
 * Setter for property <code>iconHoverURL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconHoverURL new value for property <code>iconHoverURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.setIconHoverURL = function(sIconHoverURL) { return new sap.ui.commons.ValueHelpField(); };

/**
 * Setter for property <code>iconURL</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.URI} sIconURL new value for property <code>iconURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.commons.ValueHelpField.prototype.setIconURL = function(sIconURL) { return new sap.ui.commons.ValueHelpField(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.commons.ButtonStyle --------------------------------------------------------------------------

/**
 * Accept button (normally green).
 * @public
 * 
 */
sap.ui.commons.ButtonStyle.Accept = "";

/**
 * default style (no special styling).
 * @public
 * 
 */
sap.ui.commons.ButtonStyle.Default = "";

/**
 * Button is emphasized.
 * @public
 * 
 */
sap.ui.commons.ButtonStyle.Emph = "";

/**
 * Reject button (normally red).
 * @public
 * 
 */
sap.ui.commons.ButtonStyle.Reject = "";


// ---- sap.ui.commons.enums.AreaDesign --------------------------------------------------------------------------

/**
 * Shows the label in a filled look
 * @public
 * 
 */
sap.ui.commons.enums.AreaDesign.Fill = "";

/**
 * Shows the area in a plain look
 * @public
 * 
 */
sap.ui.commons.enums.AreaDesign.Plain = "";

/**
 * Shows the background as transparent
 * @public
 * 
 */
sap.ui.commons.enums.AreaDesign.Transparent = "";


// ---- sap.ui.commons.enums.BorderDesign --------------------------------------------------------------------------

/**
 * Draws the border as a box around the area
 * @public
 * 
 */
sap.ui.commons.enums.BorderDesign.Box = "";

/**
 * Suppresses the border
 * @public
 * 
 */
sap.ui.commons.enums.BorderDesign.None = "";


// ---- sap.ui.commons.enums.Orientation --------------------------------------------------------------------------

/**
 * Horizontal orientation
 * @public
 * 
 */
sap.ui.commons.enums.Orientation.horizontal = "";

/**
 * Vertical orientation
 * @public
 * 
 */
sap.ui.commons.enums.Orientation.vertical = "";


// ---- sap.ui.commons.HorizontalDividerHeight --------------------------------------------------------------------------

/**
 * Divider gets a large top and bottom margin.
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerHeight.Large = "";

/**
 * Divider gets a medium top and bottom margin.
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerHeight.Medium = "";

/**
 * Divider gets no top and bottom margin.
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerHeight.Ruleheight = "";

/**
 * Divider gets a small top and bottom margin.
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerHeight.Small = "";


// ---- sap.ui.commons.HorizontalDividerType --------------------------------------------------------------------------

/**
 * Type Area
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerType.Area = "";

/**
 * Type Page
 * @public
 * 
 */
sap.ui.commons.HorizontalDividerType.Page = "";


// ---- sap.ui.commons.LabelDesign --------------------------------------------------------------------------

/**
 * Displays the label in bold.
 * @public
 * 
 */
sap.ui.commons.LabelDesign.Bold = "";

/**
 * Displays the label in normal mode.
 * @public
 * 
 */
sap.ui.commons.LabelDesign.Standard = "";


// ---- sap.ui.commons.layout.BackgroundDesign --------------------------------------------------------------------------

/**
 * 
 * A background design suitable for borders.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Border = "";

/**
 * 
 * An opaque background design that looks dark filled.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Fill1 = "";

/**
 * 
 * An opaque background design that looks medium filled.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Fill2 = "";

/**
 * 
 * An opaque background design that looks light filled.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Fill3 = "";

/**
 * 
 * A background design suitable for headers.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Header = "";

/**
 * 
 * A plain but opaque background design.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Plain = "";

/**
 * 
 * A transparent background.
 * @public
 * 
 */
sap.ui.commons.layout.BackgroundDesign.Transparent = "";


// ---- sap.ui.commons.layout.BorderLayoutAreaTypes --------------------------------------------------------------------------

/**
 * Value to identify the begin area.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutAreaTypes.begin = "";

/**
 * Value to identify the bottom area.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutAreaTypes.bottom = "";

/**
 * Value to identify the center area.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutAreaTypes.center = "";

/**
 * Value to identify the end area.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutAreaTypes.end = "";

/**
 * Value to identify the top area.
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutAreaTypes.top = "";


// ---- sap.ui.commons.layout.HAlign --------------------------------------------------------------------------

/**
 * 
 * Aligned towards the beginning of a line, in the current locale's writing direction.
 * @public
 * 
 */
sap.ui.commons.layout.HAlign.Begin = "";

/**
 * 
 * Horizontally centered.
 * @public
 * 
 */
sap.ui.commons.layout.HAlign.Center = "";

/**
 * 
 * Aligned towards the end of a line, in the current locale's writing direction.
 * @public
 * 
 */
sap.ui.commons.layout.HAlign.End = "";

/**
 * 
 * Left aligned, regardless of the current locale's writing direction.
 * @public
 * 
 */
sap.ui.commons.layout.HAlign.Left = "";

/**
 * 
 * Right aligned, regardless of the current locale's writing direction.
 * @public
 * 
 */
sap.ui.commons.layout.HAlign.Right = "";


// ---- sap.ui.commons.layout.Padding --------------------------------------------------------------------------

/**
 * 
 * Top and bottom padding of 2px.
 * Padding of 4px towards the beginning of a line, in the current locale's
 * writing direction, but none towards its end.
 * @public
 * 
 */
sap.ui.commons.layout.Padding.Begin = "";

/**
 * 
 * Top and bottom padding of 2px.
 * Padding of 4px towards both the beginning and end of a line.
 * @public
 * 
 */
sap.ui.commons.layout.Padding.Both = "";

/**
 * 
 * Top and bottom padding of 2px.
 * Padding of 4px towards the end of a line, in the current locale's
 * writing direction, but none towards its beginning.
 * @public
 * 
 */
sap.ui.commons.layout.Padding.End = "";

/**
 * 
 * Top and bottom padding of 2px.
 * No padding towards neither the beginning nor end of a line.
 * @public
 * 
 */
sap.ui.commons.layout.Padding.Neither = "";

/**
 * 
 * No padding at all.
 * @public
 * 
 */
sap.ui.commons.layout.Padding.None = "";


// ---- sap.ui.commons.layout.Separation --------------------------------------------------------------------------

/**
 * 
 * A large (63px) vertical gutter without a vertical line.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.Large = "";

/**
 * 
 * A large (63px) vertical gutter with a vertical line in its middle.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.LargeWithLine = "";

/**
 * 
 * A medium (31px) vertical gutter without a vertical line.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.Medium = "";

/**
 * 
 * A medium (31px) vertical gutter with a vertical line in its middle.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.MediumWithLine = "";

/**
 * 
 * No gutter at all (0px), and without a vertical line, of course.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.None = "";

/**
 * 
 * A small (17px) vertical gutter without a vertical line.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.Small = "";

/**
 * 
 * A small (17px) vertical gutter with a vertical line in its middle.
 * @public
 * 
 */
sap.ui.commons.layout.Separation.SmallWithLine = "";


// ---- sap.ui.commons.layout.VAlign --------------------------------------------------------------------------

/**
 * 
 * Aligned at the bottom.
 * @public
 * 
 */
sap.ui.commons.layout.VAlign.Bottom = "";

/**
 * 
 * Vertically centered.
 * @public
 * 
 */
sap.ui.commons.layout.VAlign.Middle = "";

/**
 * 
 * Aligned at the top.
 * @public
 * 
 */
sap.ui.commons.layout.VAlign.Top = "";


// ---- sap.ui.commons.MenuBarDesign --------------------------------------------------------------------------

/**
 * The MenuBar appears in header design.
 * @public
 * 
 */
sap.ui.commons.MenuBarDesign.Header = "";

/**
 * The MenuBar appears in standard design.
 * @public
 * 
 */
sap.ui.commons.MenuBarDesign.Standard = "";


// ---- sap.ui.commons.MessageBox.Action --------------------------------------------------------------------------

/**
 * Adds an "Abort" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.ABORT = undefined;

/**
 * Adds a "Cancel" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.CANCEL = undefined;

/**
 * Adds a "Close" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.CLOSE = undefined;

/**
 * Adds an "Ignore" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.IGNORE = undefined;

/**
 * Adds a "No" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.NO = undefined;

/**
 * Adds an "Ok" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.OK = undefined;

/**
 * Adds a "Retry" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.RETRY = undefined;

/**
 * Adds a "Yes" button to the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Action.YES = undefined;


// ---- sap.ui.commons.MessageBox.Icon --------------------------------------------------------------------------

/**
 * Shows the critical error icon in the message box.
 * @public
 * @deprecated since 1.9.1: The error icon is used instead
 * 
 */
sap.ui.commons.MessageBox.Icon.CRITICAL = undefined;

/**
 * Shows the error icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.ERROR = undefined;

/**
 * Shows the information icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.INFORMATION = undefined;

/**
 * Shows no icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.NONE = undefined;

/**
 * Shows the question icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.QUESTION = undefined;

/**
 * Shows the success icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.SUCCESS = undefined;

/**
 * Shows the warning icon in the message box.
 * @public
 * 
 */
sap.ui.commons.MessageBox.Icon.WARNING = undefined;


// ---- sap.ui.commons.MessageType --------------------------------------------------------------------------

/**
 * Error message
 * @public
 * 
 */
sap.ui.commons.MessageType.Error = "";

/**
 * Successful message
 * @public
 * 
 */
sap.ui.commons.MessageType.Success = "";

/**
 * Warning message
 * @public
 * 
 */
sap.ui.commons.MessageType.Warning = "";


// ---- sap.ui.commons.PaginatorEvent --------------------------------------------------------------------------

/**
 * First page event
 * @public
 * 
 */
sap.ui.commons.PaginatorEvent.First = "";

/**
 * Go to page event
 * @public
 * 
 */
sap.ui.commons.PaginatorEvent.Goto = "";

/**
 * Last page event
 * @public
 * 
 */
sap.ui.commons.PaginatorEvent.Last = "";

/**
 * Next page event
 * @public
 * 
 */
sap.ui.commons.PaginatorEvent.Next = "";

/**
 * Previous page event
 * @public
 * 
 */
sap.ui.commons.PaginatorEvent.Previous = "";


// ---- sap.ui.commons.RatingIndicatorVisualMode --------------------------------------------------------------------------

/**
 * Values are not rounded.
 * @public
 * 
 */
sap.ui.commons.RatingIndicatorVisualMode.Continuous = "";

/**
 * Values are rounded to the nearest integer value (e.g. 1.7 -> 2).
 * @public
 * 
 */
sap.ui.commons.RatingIndicatorVisualMode.Full = "";

/**
 * Values are rounded to the nearest half value (e.g. 1.7 -> 1.5).
 * @public
 * 
 */
sap.ui.commons.RatingIndicatorVisualMode.Half = "";


// ---- sap.ui.commons.RowRepeaterDesign --------------------------------------------------------------------------

/**
 * The RowRepeater will be displayed without header, toolbar or footer. Background will be transparent.
 * @public
 * 
 */
sap.ui.commons.RowRepeaterDesign.BareShell = "";

/**
 * The RowRepeater header and footer elements, as well as the row container background, appear solid.
 * @public
 * 
 */
sap.ui.commons.RowRepeaterDesign.Standard = "";

/**
 * The RowRepeater header and footer elements, as well as the row container background, appear transparent.
 * @public
 * 
 */
sap.ui.commons.RowRepeaterDesign.Transparent = "";


// ---- sap.ui.commons.TextViewColor --------------------------------------------------------------------------

/**
 * Critical color
 * @public
 * 
 */
sap.ui.commons.TextViewColor.Critical = "";

/**
 * Default color
 * @public
 * 
 */
sap.ui.commons.TextViewColor.Default = "";

/**
 * Negative color
 * @public
 * 
 */
sap.ui.commons.TextViewColor.Negative = "";

/**
 * Positive color
 * @public
 * 
 */
sap.ui.commons.TextViewColor.Positive = "";


// ---- sap.ui.commons.TextViewDesign --------------------------------------------------------------------------

/**
 * Displays the text in bold letters
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Bold = "";

/**
 * Displays the text in header 1 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H1 = "";

/**
 * Displays the text in header 2 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H2 = "";

/**
 * Displays the text in header 3 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H3 = "";

/**
 * Displays the text in header 4 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H4 = "";

/**
 * Displays the text in header 5 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H5 = "";

/**
 * Displays the text in header 6 letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.H6 = "";

/**
 * Displays the text in italic letters
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Italic = "";

/**
 * Displays the text in monospace letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Monospace = "";

/**
 * Displays the text in smaller letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Small = "";

/**
 * Displays the text in standard letters.
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Standard = "";

/**
 * underlined Text
 * @public
 * 
 */
sap.ui.commons.TextViewDesign.Underline = "";


// ---- sap.ui.commons.ToolbarDesign --------------------------------------------------------------------------

/**
 * The included controls have a very light appearance. The feature might be not supported by all themes.
 * @public
 * 
 */
sap.ui.commons.ToolbarDesign.Flat = "";

/**
 * The toolbar elements such as buttons for example have their normal visual design, and the toolbar appears solid.
 * The feature might be not supported by all themes.
 * @public
 * 
 */
sap.ui.commons.ToolbarDesign.Standard = "";

/**
 * The controls included in the toolbar have a normal visual design where the toolbar appears transparent.
 * The feature might be not supported by all themes.
 * @public
 * 
 */
sap.ui.commons.ToolbarDesign.Transparent = "";


// ---- sap.ui.commons.ToolbarSeparatorDesign --------------------------------------------------------------------------

/**
 * 100% height Separator before and after specific controls
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparatorDesign.FullHeight = "";

/**
 * Standard Separator between controls
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparatorDesign.Standard = "";


// ---- sap.ui.commons.TreeSelectionMode --------------------------------------------------------------------------

/**
 * Behavior of the former Tree. It is possible to select a plurality of nodes via the API.
 * @public
 * 
 */
sap.ui.commons.TreeSelectionMode.Legacy = "";

/**
 * Select multiple rows at a time.
 * @public
 * 
 */
sap.ui.commons.TreeSelectionMode.Multi = "";

/**
 * No rows can be selected.
 * @public
 * 
 */
sap.ui.commons.TreeSelectionMode.None = "";

/**
 * Select one row at a time.
 * @public
 * 
 */
sap.ui.commons.TreeSelectionMode.Single = "";


// ---- sap.ui.commons.TriStateCheckBoxState --------------------------------------------------------------------------

/**
 * checked value for tri-state checkbox
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBoxState.Checked = "";

/**
 * mixed state for tri-state checkbox
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBoxState.Mixed = "";

/**
 * unchecked, default value for tri-state checkbox
 * @public
 * 
 */
sap.ui.commons.TriStateCheckBoxState.Unchecked = "";

