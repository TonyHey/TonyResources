
// ---- sap.ui.table --------------------------------------------------------------------------


// ---- sap.ui.table.AnalyticalColumn --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalColumn.
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
 * <li>{@link #getLeadingProperty leadingProperty} : string</li>
 * <li>{@link #getSummed summed} : boolean (default: false)</li>
 * <li>{@link #getInResult inResult} : boolean (default: false)</li>
 * <li>{@link #getShowIfGrouped showIfGrouped} : boolean (default: false)</li>
 * <li>{@link #getGroupHeaderFormatter groupHeaderFormatter} : any</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Column#constructor sap.ui.table.Column}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This column addes additional properties to the tabl ecolumn which are needed for the analytical binding and table
 * @extends sap.ui.table.Column
 * @version 1.28.9
 * @constructor
 * @public
 * @experimental Since version 1.21.
 * The AnalyticalColumn will be productized soon. Some attributes will be added to Column.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalColumn = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.AnalyticalColumn with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Column.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>groupHeaderFormatter</code>.
 * If the column is grouped, this formatter is used to format the value in the group header
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>groupHeaderFormatter</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getGroupHeaderFormatter = function() { return null; };

/**
 * Getter for property <code>inResult</code>.
 * Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>inResult</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getInResult = function() { return false; };

/**
 * Getter for property <code>leadingProperty</code>.
 * Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>leadingProperty</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getLeadingProperty = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalColumn.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>showIfGrouped</code>.
 * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showIfGrouped</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getShowIfGrouped = function() { return false; };

/**
 * Getter for property <code>summed</code>.
 * If defined a sum for this column is calculated
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>summed</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getSummed = function() { return false; };

/**
 * Setter for property <code>groupHeaderFormatter</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oGroupHeaderFormatter new value for property <code>groupHeaderFormatter</code>
 * @return {sap.ui.table.AnalyticalColumn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setGroupHeaderFormatter = function(oGroupHeaderFormatter) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Setter for property <code>inResult</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bInResult new value for property <code>inResult</code>
 * @return {sap.ui.table.AnalyticalColumn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setInResult = function(bInResult) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Setter for property <code>leadingProperty</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sLeadingProperty new value for property <code>leadingProperty</code>
 * @return {sap.ui.table.AnalyticalColumn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setLeadingProperty = function(sLeadingProperty) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Setter for property <code>showIfGrouped</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowIfGrouped new value for property <code>showIfGrouped</code>
 * @return {sap.ui.table.AnalyticalColumn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setShowIfGrouped = function(bShowIfGrouped) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Setter for property <code>summed</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSummed new value for property <code>summed</code>
 * @return {sap.ui.table.AnalyticalColumn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setSummed = function(bSummed) { return new sap.ui.table.AnalyticalColumn(); };


// ---- sap.ui.table.AnalyticalColumnMenu --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalColumnMenu.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A column menu which is used by the analytical column
 * @extends sap.ui.table.ColumnMenu
 * @version 1.28.9
 * @constructor
 * @public
 * @experimental Since version 1.21.
 * The AnalyticalColumnMenu will be productized soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalColumnMenu = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumnMenu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumnMenu.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.table.AnalyticalTable --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalTable.
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
 * <li>{@link #getSumOnTop sumOnTop} : boolean (default: false)</li>
 * <li>{@link #getNumberOfExpandedLevels numberOfExpandedLevels} : int (default: 0)</li>
 * <li>{@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter} : any</li>
 * <li>{@link #getDirty dirty} : boolean</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Table#constructor sap.ui.table.Table}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Table which handles analytical OData backends
 * @extends sap.ui.table.Table
 * @version 1.28.9
 * @constructor
 * @public
 * @experimental Since version 1.21.
 * The AnalyticalTable will be productized soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.AnalyticalTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>columnVisibilityMenuSorter</code>.
 * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>columnVisibilityMenuSorter</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getColumnVisibilityMenuSorter = function() { return null; };

/**
 * Getter for property <code>dirty</code>.
 * If dirty the content of the Table will be overlayed.
 * 
 * Default value is <code>undefined</code>
 * @return {boolean} the value of property <code>dirty</code>
 * @deprecated Since version 1.21.2.
 * Please use setShowOverlay instead.
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getDirty = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalTable.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>numberOfExpandedLevels</code>.
 * Number of levels, which should be opened initially (on first load of data).
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>numberOfExpandedLevels</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getNumberOfExpandedLevels = function() { return 0; };

/**
 * Getter for property <code>sumOnTop</code>.
 * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affact the total sum.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sumOnTop</code>
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getSumOnTop = function() { return false; };

/**
 * Returns the total size of the data entries.
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getTotalSize = function() { return 0; };

/**
 * Setter for property <code>columnVisibilityMenuSorter</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oColumnVisibilityMenuSorter new value for property <code>columnVisibilityMenuSorter</code>
 * @return {sap.ui.table.AnalyticalTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setColumnVisibilityMenuSorter = function(oColumnVisibilityMenuSorter) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Setter for property <code>dirty</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {boolean} bDirty new value for property <code>dirty</code>
 * @return {sap.ui.table.AnalyticalTable} <code>this</code> to allow method chaining
 * @deprecated Since version 1.21.2.
 * Please use setShowOverlay instead.
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setDirty = function(bDirty) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Setter for property <code>numberOfExpandedLevels</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iNumberOfExpandedLevels new value for property <code>numberOfExpandedLevels</code>
 * @return {sap.ui.table.AnalyticalTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setNumberOfExpandedLevels = function(iNumberOfExpandedLevels) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Setter for property <code>sumOnTop</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSumOnTop new value for property <code>sumOnTop</code>
 * @return {sap.ui.table.AnalyticalTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setSumOnTop = function(bSumOnTop) { return new sap.ui.table.AnalyticalTable(); };


// ---- sap.ui.table.Column --------------------------------------------------------------------------

/**
 * Constructor for a new Column.
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
 * <li>{@link #getFlexible flexible} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.core.HorizontalAlign</li>
 * <li>{@link #getSorted sorted} : boolean (default: false)</li>
 * <li>{@link #getSortOrder sortOrder} : sap.ui.table.SortOrder</li>
 * <li>{@link #getSortProperty sortProperty} : string</li>
 * <li>{@link #getFiltered filtered} : boolean (default: false)</li>
 * <li>{@link #getFilterProperty filterProperty} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getFilterOperator filterOperator} : string</li>
 * <li>{@link #getGrouped grouped} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getFilterType filterType} : any</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getShowFilterMenuEntry showFilterMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getShowSortMenuEntry showSortMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getHeaderSpan headerSpan} : any (default: 1)</li>
 * <li>{@link #getAutoResizable autoResizable} : boolean (default: false)</li>
 * <li>{@link #getDefaultFilterOperator defaultFilterOperator} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Control</li>
 * <li>{@link #getMultiLabels multiLabels} : sap.ui.core.Control[]</li>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getMenu menu} : sap.ui.unified.Menu</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The column allows to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column = function(sId,mSettings) {};
/**
 * Adds some multiLabel into the aggregation named <code>multiLabels</code>.
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel to add; to add; if empty, nothing is inserted
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.addMultiLabel = function(oMultiLabel) { return new sap.ui.table.Column(); };

/**
 * Destroys the label in the aggregation
 * named <code>label</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyLabel = function() { return new sap.ui.table.Column(); };

/**
 * Destroys the menu in the aggregation
 * named <code>menu</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyMenu = function() { return new sap.ui.table.Column(); };

/**
 * Destroys all the multiLabels in the aggregation
 * named <code>multiLabels</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyMultiLabels = function() { return new sap.ui.table.Column(); };

/**
 * Destroys the template in the aggregation
 * named <code>template</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyTemplate = function() { return new sap.ui.table.Column(); };

/**
 * Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code>
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
sap.ui.table.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>autoResizable</code>.
 * Enables auto-resizing of the column on doubleclicking the resizer. Currently only implemented to work with the following controls: sap.m.Text, sap.m.Label, sap.m.Link , sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>autoResizable</code>
 * @since 1.21.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.getAutoResizable = function() { return false; };

/**
 * Getter for property <code>defaultFilterOperator</code>.
 * If this property is set the default filter operator of the column is overwritten.
 * By default "Contains" is used for string and "EQ" for other types. A valid sap.ui.model.FilterOperator needs to be passed.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>defaultFilterOperator</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getDefaultFilterOperator = function() { return ""; };

/**
 * Getter for property <code>filtered</code>.
 * flag, if the column is filtered or not (displays the filter indicator, does not trigger the filter method!)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>filtered</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFiltered = function() { return false; };

/**
 * Getter for property <code>filterOperator</code>.
 * Filter operator to use when filtering this column.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>filterOperator</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterOperator = function() { return ""; };

/**
 * Getter for property <code>filterProperty</code>.
 * Specifies the binding property on which the column will filter.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>filterProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterProperty = function() { return ""; };

/**
 * Getter for property <code>filterType</code>.
 * Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the classname of the type, e.g.: sap.ui.model.type.Date or an expression similar to the binding syntax, e.g.: "\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: {} \}". Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is sap.ui.model.type.String.
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>filterType</code>
 * @since 1.9.2
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterType = function() { return null; };

/**
 * Getter for property <code>filterValue</code>.
 * Specifies the value of the filter as string (will be converted into the propert data type).
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterValue = function() { return ""; };

/**
 * Getter for property <code>flexible</code>.
 * Is the width of the column flexible (grows on resize)?
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>flexible</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFlexible = function() { return false; };

/**
 * Getter for property <code>grouped</code>.
 * flag, if the column is grouped or not (hides the column!)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>grouped</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getGrouped = function() { return false; };

/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.HorizontalAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHAlign = function() { return new sap.ui.core.HorizontalAlign(); };

/**
 * Getter for property <code>headerSpan</code>.
 * If this property is set a span is applied for the header. When moving columns all columns which are part of the header will be moved. This can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer this span is applied for all header rows, with multiple integers you can specify a seperate span for each header row.
 * 
 * Default value is <code>1</code>
 * @return {any} the value of property <code>headerSpan</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHeaderSpan = function() { return null; };

/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label (header renderer) of the column which is displayed in the column header. Define a control for each header row in the table. This aggregation is for the standard behaviour, if you only want to display one single row header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getLabel = function() { return new sap.ui.core.Control(); };

/**
 * Getter for aggregation <code>menu</code>.<br/>
 * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
 * @return {sap.ui.unified.Menu}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Returns a metadata object for class sap.ui.table.Column.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.Column.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>multiLabels</code>.<br/>
 * Labels (header renderer) of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation, if you want to use multiple headers per column.
 * @return {sap.ui.core.Control[]}
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMultiLabels = function() { return new Array(); };

/**
 * Getter for property <code>name</code>.
 * The name of the column which is used in the column visibility menu item as text. If not set as fallback the column menu tries to get the text from the nested Label.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @since 1.11.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>resizable</code>.
 * Is the column resizable or not?
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getResizable = function() { return false; };

/**
 * Getter for property <code>showFilterMenuEntry</code>.
 * Define if the filter menu entry is displayed
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFilterMenuEntry</code>
 * @since 1.13.0
 * @public
 * 
 */
sap.ui.table.Column.prototype.getShowFilterMenuEntry = function() { return false; };

/**
 * Getter for property <code>showSortMenuEntry</code>.
 * Define if the sort menu entries are displayed
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSortMenuEntry</code>
 * @since 1.13.0
 * @public
 * 
 */
sap.ui.table.Column.prototype.getShowSortMenuEntry = function() { return false; };

/**
 * Getter for property <code>sorted</code>.
 * flag, if the column is sorted or not (displays the sorting indicator, does not trigger the sort method!)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sorted</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSorted = function() { return false; };

/**
 * Getter for property <code>sortOrder</code>.
 * Sort order for this column.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.table.SortOrder} the value of property <code>sortOrder</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortOrder = function() { return new sap.ui.table.SortOrder(); };

/**
 * Getter for property <code>sortProperty</code>.
 * Specifies the binding property on which the column will sort.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>sortProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortProperty = function() { return ""; };

/**
 * Getter for aggregation <code>template</code>.<br/>
 * Template (cell renderer) of this column. A template is decoupled from the column which means after changing the templates' properties or aggregations an explicit invalidation of the column or table is required. The default is: sap.ui.commons.TextView.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getVisible = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * Width of the column.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>multiLabels</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMultiLabel the multiLabel whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.indexOfMultiLabel = function(oMultiLabel) { return 0; };

/**
 * Inserts a multiLabel into the aggregation named <code>multiLabels</code>.
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the multiLabel should be inserted at; for
 *              a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the multiLabel is inserted at
 *              the last position
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.insertMultiLabel = function(oMultiLabel,iIndex) { return new sap.ui.table.Column(); };

/**
 * Removes all the controls in the aggregation named <code>multiLabels</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.removeAllMultiLabels = function() { return new Array(); };

/**
 * Removes an multiLabel from the aggregation named <code>multiLabels</code>.
 * @param {int | string | sap.ui.core.Control} vMultiLabel the multiLabelto remove or its index or id
 * @return {sap.ui.core.Control} the removed multiLabel or null
 * @since 1.13.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.removeMultiLabel = function(vMultiLabel) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>autoResizable</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoResizable new value for property <code>autoResizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.21.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.setAutoResizable = function(bAutoResizable) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>defaultFilterOperator</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sDefaultFilterOperator new value for property <code>defaultFilterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setDefaultFilterOperator = function(sDefaultFilterOperator) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>filtered</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFiltered new value for property <code>filtered</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFiltered = function(bFiltered) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>filterOperator</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sFilterOperator new value for property <code>filterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterOperator = function(sFilterOperator) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>filterProperty</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sFilterProperty new value for property <code>filterProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterProperty = function(sFilterProperty) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>filterType</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oFilterType new value for property <code>filterType</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.9.2
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterType = function(oFilterType) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>filterValue</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sFilterValue new value for property <code>filterValue</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterValue = function(sFilterValue) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>flexible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFlexible new value for property <code>flexible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFlexible = function(bFlexible) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>grouped</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bGrouped new value for property <code>grouped</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setGrouped = function(bGrouped) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>hAlign</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.HorizontalAlign} sHAlign new value for property <code>hAlign</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setHAlign = function(sHAlign) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>headerSpan</code>.
 * 
 * Default value is <code>1</code>.
 * @param {any} oHeaderSpan new value for property <code>headerSpan</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setHeaderSpan = function(oHeaderSpan) { return new sap.ui.table.Column(); };

/**
 * Setter for the aggregated <code>label</code>.
 * @param {sap.ui.core.Control} oLabel the label to set
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setLabel = function(oLabel) { return new sap.ui.table.Column(); };

/**
 * Setter for the aggregated <code>menu</code>.
 * @param {sap.ui.unified.Menu} oMenu the menu to set
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setMenu = function(oMenu) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sName new value for property <code>name</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.11.1
 * @public
 * 
 */
sap.ui.table.Column.prototype.setName = function(sName) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>resizable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizable new value for property <code>resizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setResizable = function(bResizable) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>showFilterMenuEntry</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFilterMenuEntry new value for property <code>showFilterMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.13.0
 * @public
 * 
 */
sap.ui.table.Column.prototype.setShowFilterMenuEntry = function(bShowFilterMenuEntry) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>showSortMenuEntry</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSortMenuEntry new value for property <code>showSortMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @since 1.13.0
 * @public
 * 
 */
sap.ui.table.Column.prototype.setShowSortMenuEntry = function(bShowSortMenuEntry) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>sorted</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSorted new value for property <code>sorted</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSorted = function(bSorted) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>sortOrder</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.table.SortOrder} sSortOrder new value for property <code>sortOrder</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortOrder = function(sSortOrder) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>sortProperty</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sSortProperty new value for property <code>sortProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortProperty = function(sSortProperty) { return new sap.ui.table.Column(); };

/**
 * Setter for the aggregated <code>template</code>.
 * @param {sap.ui.core.Control} oTemplate the template to set
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setTemplate = function(oTemplate) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible new value for property <code>visible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setVisible = function(bVisible) { return new sap.ui.table.Column(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setWidth = function(sWidth) { return new sap.ui.table.Column(); };

/**
 * Returns whether the column should be rendered or not.
 * @return {boolean} true, if the column should be rendered
 * @protected
 * 
 */
sap.ui.table.Column.prototype.shouldRender = function() { return false; };

/**
 * sorts the current column ascending or descending
 * @param {boolean} bDescending
 *         sort order of the column (if undefined the default will be ascending)
 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1.
 * Please use the function "sap.ui.Table.prototype.sort".
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column.prototype.sort = function(bDescending) { return new sap.ui.table.Column(); };

/**
 * toggles the sort order of the column
 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1.
 * Please use the function "sap.ui.Table.prototype.sort".
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column.prototype.toggleSort = function() { return new sap.ui.table.Column(); };


// ---- sap.ui.table.ColumnMenu --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMenu.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The column menu provides all common actions that can be performed on a column.
 * @extends sap.ui.unified.Menu
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.ColumnMenu = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.ColumnMenu with name <code>sClassName</code>
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
sap.ui.table.ColumnMenu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.table.ColumnMenu.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.ColumnMenu.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.table.DataTable --------------------------------------------------------------------------

/**
 * Constructor for a new DataTable.
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
 * <li>{@link #getExpandedVisibleRowCount expandedVisibleRowCount} : int</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getHierarchical hierarchical} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:rowSelect rowSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.TreeTable#constructor sap.ui.table.TreeTable}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The DataTable control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows and a number for the displayed rows in the case the user expands the table. The first visible row can be explicitly set. For the selection of columns and rows, a Multi, a Single, a None, and an All mode are available. Setting the Editable property to true lets the user make changes on the table cell entries.
 * @extends sap.ui.table.TreeTable
 * @version 1.28.9
 * @constructor
 * @public
 * @deprecated Since version 1.5.1. 
 * The DataTable has been replaced via the Table/TreeTable control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.DataTable = function(sId,mSettings) {};
/**
 * fired when the row selection of the table has been changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex row index which row has been selected or deselected
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row index which row has been selected or deselected
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.rowSelect = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.DataTable</code>.<br> itself.
 * 
 * fired when the row selection of the table has been changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.DataTable</code>.<br/> itself.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.attachRowSelect = function(oData,fnFunction,oListener) { return new sap.ui.table.DataTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.detachRowSelect = function(fnFunction,oListener) { return new sap.ui.table.DataTable(); };

/**
 * Creates a new subclass of class sap.ui.table.DataTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.TreeTable.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.DataTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event rowSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code>row index which row has been selected or deselected</li>
 * <li>'rowContext' of type <code>object</code>binding context of the row index which row has been selected or deselected</li>
 * <li>'rowIndices' of type <code>int[]</code>array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.DataTable.prototype.fireRowSelect = function(mArguments) { return new sap.ui.table.DataTable(); };

/**
 * Getter for property <code>expanded</code>.
 * Flag whether the Table is expanded or not
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpanded = function() { return false; };

/**
 * Getter for property <code>expandedVisibleRowCount</code>.
 * Count of visible rows when expanded
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>expandedVisibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpandedVisibleRowCount = function() { return 0; };

/**
 * Getter for property <code>hierarchical</code>.
 * Flag, whether the table displays its content hierarchical or not (**experimental**!!)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hierarchical</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getHierarchical = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.table.DataTable.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.DataTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>expanded</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpanded new value for property <code>expanded</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setExpanded = function(bExpanded) { return new sap.ui.table.DataTable(); };

/**
 * Setter for property <code>expandedVisibleRowCount</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iExpandedVisibleRowCount new value for property <code>expandedVisibleRowCount</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setExpandedVisibleRowCount = function(iExpandedVisibleRowCount) { return new sap.ui.table.DataTable(); };

/**
 * Setter for property <code>hierarchical</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHierarchical new value for property <code>hierarchical</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setHierarchical = function(bHierarchical) { return new sap.ui.table.DataTable(); };


// ---- sap.ui.table.GroupEventType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.GroupEventType.toString = function() { return ""; };

// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.NavigationMode.toString = function() { return ""; };

// ---- sap.ui.table.Row --------------------------------------------------------------------------

/**
 * Constructor for a new Row.
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
 * <li>{@link #getCells cells} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The row.
 * @extends sap.ui.core.Element
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Row = function(sId,mSettings) {};
/**
 * Adds some cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; to add; if empty, nothing is inserted
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.addCell = function(oCell) { return new sap.ui.table.Row(); };

/**
 * Destroys all the cells in the aggregation
 * named <code>cells</code>.
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.destroyCells = function() { return new sap.ui.table.Row(); };

/**
 * Creates a new subclass of class sap.ui.table.Row with name <code>sClassName</code>
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
sap.ui.table.Row.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>cells</code>.<br/>
 * The controls for the cells.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.table.Row.prototype.getCells = function() { return new Array(); };

/**
 * Returns the index of the row in the table or -1 if not added to a table.
 * @return {int}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Row.prototype.getIndex = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.table.Row.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.Row.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Row.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *            oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the cell should be inserted at; for
 *              a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the cell is inserted at
 *              the last position
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.insertCell = function(oCell,iIndex) { return new sap.ui.table.Row(); };

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeAllCells = function() { return new Array(); };

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 * @param {int | string | sap.ui.core.Control} vCell the cellto remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeCell = function(vCell) { return new sap.ui.core.Control(); };


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionBehavior.toString = function() { return ""; };

// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionMode.toString = function() { return ""; };

// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SortOrder.toString = function() { return ""; };

// ---- sap.ui.table.Table --------------------------------------------------------------------------

/**
 * Constructor for a new Table.
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
 * <li>{@link #getRowHeight rowHeight} : int</li>
 * <li>{@link #getColumnHeaderHeight columnHeaderHeight} : int</li>
 * <li>{@link #getColumnHeaderVisible columnHeaderVisible} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCount visibleRowCount} : int (default: 10)</li>
 * <li>{@link #getFirstVisibleRow firstVisibleRow} : int (default: 0)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode</li>
 * <li>{@link #getSelectionBehavior selectionBehavior} : sap.ui.table.SelectionBehavior</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int</li>
 * <li>{@link #getAllowColumnReordering allowColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getNavigationMode navigationMode} : sap.ui.table.NavigationMode</li>
 * <li>{@link #getThreshold threshold} : int (default: 100)</li>
 * <li>{@link #getEnableColumnReordering enableColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEnableGrouping enableGrouping} : boolean (default: false)</li>
 * <li>{@link #getShowColumnVisibilityMenu showColumnVisibilityMenu} : boolean (default: false)</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCountMode visibleRowCountMode} : sap.ui.table.VisibleRowCountMode</li>
 * <li>{@link #getFixedColumnCount fixedColumnCount} : int (default: 0)</li>
 * <li>{@link #getFixedRowCount fixedRowCount} : int (default: 0)</li>
 * <li>{@link #getMinAutoRowCount minAutoRowCount} : int (default: 5)</li>
 * <li>{@link #getFixedBottomRowCount fixedBottomRowCount} : int (default: 0)</li>
 * <li>{@link #getEnableColumnFreeze enableColumnFreeze} : boolean (default: false)</li>
 * <li>{@link #getEnableCellFilter enableCellFilter} : boolean (default: false)</li>
 * <li>{@link #getNoDataText noDataText} : string</li>
 * <li>{@link #getShowOverlay showOverlay} : boolean (default: false)</li>
 * <li>{@link #getEnableSelectAll enableSelectAll} : boolean (default: true)</li>
 * <li>{@link #getEnableCustomFilter enableCustomFilter} : boolean (default: false)</li>
 * <li>{@link #getEnableBusyIndicator enableBusyIndicator} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * <li>{@link #getExtension extension} : sap.ui.core.Control[]</li>
 * <li>{@link #getColumns columns} : sap.ui.table.Column[]</li>
 * <li>{@link #getRows rows} : sap.ui.table.Row[]</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnSelect columnSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnResize columnResize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnMove columnMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:group group} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnVisibility columnVisibility} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cellClick cellClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cellContextmenu cellContextmenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnFreeze columnFreeze} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customFilter customFilter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Table control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows. The first visible row can be explicitly set. For the selection of rows, a Multi, a Single, and a None mode are available.
 * @extends sap.ui.core.Control
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table = function(sId,mSettings) {};
/**
 * fired when the user clicks a cell of the table (experimental!).
 * @event
 * @since 1.21.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.cellControl The control of the cell.
 * @param {int} oControlEvent.getParameters.rowIndex Row index of the selected cell.
 * @param {int} oControlEvent.getParameters.columnIndex Column index of the selected cell.
 * @public
 * 
 */
sap.ui.table.Table.prototype.cellClick = function(oControlEvent) {  };

/**
 * fired when the user clicks a cell of the table (experimental!).
 * @event
 * @since 1.21.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.cellControl The control of the cell.
 * @param {int} oControlEvent.getParameters.rowIndex Row index of the selected cell.
 * @param {int} oControlEvent.getParameters.columnIndex Column index of the selected cell.
 * @public
 * 
 */
sap.ui.table.Table.prototype.cellContextmenu = function(oControlEvent) {  };

/**
 * fired when a column of the table should be freezed
 * @event
 * @since 1.21.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the column to freeze
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnFreeze = function(oControlEvent) {  };

/**
 * fired when a table column is moved.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column moved column.
 * @param {int} oControlEvent.getParameters.newPos new position of the column.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnMove = function(oControlEvent) {  };

/**
 * fired when a table column is resized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column resized column.
 * @param {int} oControlEvent.getParameters.width new width of the table in pixel.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnResize = function(oControlEvent) {  };

/**
 * fired when a column of the table has been selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnSelect = function(oControlEvent) {  };

/**
 * fired when the visibility of a table column is changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column affected column.
 * @param {boolean} oControlEvent.getParameters.visible new value of the visible property.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnVisibility = function(oControlEvent) {  };

/**
 * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.
 * @event
 * @since 1.23.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.Table.prototype.customFilter = function(oControlEvent) {  };

/**
 * fired when the table is filtered.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column filtered column.
 * @param {string} oControlEvent.getParameters.value filter value.
 * @public
 * 
 */
sap.ui.table.Table.prototype.filter = function(oControlEvent) {  };

/**
 * fired when the table is grouped (experimental!).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column grouped column.
 * @public
 * 
 */
sap.ui.table.Table.prototype.group = function(oControlEvent) {  };

/**
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex row index which has been clicked so that the selection has been changed (either selected or deselected)
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row which has been clicked so that selection has been changed
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 * 
 */
sap.ui.table.Table.prototype.rowSelectionChange = function(oControlEvent) {  };

/**
 * fired when the table is sorted.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column sorted column.
 * @param {sap.ui.table.SortOrder} oControlEvent.getParameters.sortOrder Sort Order
 * @param {boolean} oControlEvent.getParameters.columnAdded If column was added to sorter this is true. If new sort is started this is set to false
 * @public
 * 
 */
sap.ui.table.Table.prototype.sort = function(oControlEvent) {  };

/**
 * Adds some column into the aggregation named <code>columns</code>.
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addColumn = function(oColumn) { return new sap.ui.table.Table(); };

/**
 * Adds some extension into the aggregation named <code>extension</code>.
 * @param {sap.ui.core.Control}
 *            oExtension the extension to add; to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addExtension = function(oExtension) { return new sap.ui.table.Table(); };

/**
 * Adds some row into the aggregation named <code>rows</code>.
 * @param {sap.ui.table.Row}
 *            oRow the row to add; to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addRow = function(oRow) { return new sap.ui.table.Table(); };

/**
 * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
 * @param {int} iIndexFrom
 *         Index from which .
 * @param {int} iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cellClick' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the user clicks a cell of the table (experimental!).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.attachCellClick = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cellContextmenu' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the user clicks a cell of the table (experimental!).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.attachCellContextmenu = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'columnFreeze' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when a column of the table should be freezed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.attachColumnFreeze = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when a table column is moved.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnMove = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when a table column is resized.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnResize = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when a column of the table has been selected
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnSelect = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the visibility of a table column is changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnVisibility = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'customFilter' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.23.0
 * 
 */
sap.ui.table.Table.prototype.attachCustomFilter = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the table is filtered.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachFilter = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'group' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the table is grouped (experimental!).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachGroup = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachRowSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br> itself.
 * 
 * fired when the table is sorted.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachSort = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * triggers automatic resizing of a column to the widest content.(experimental!)
 * @experimental Experimental! Presently implemented to only work with pure text-based controls,
 * the sap.ui.commons.Checkbox and sap.m.Image as well as sap.ui.commons.Image.
 * It will also work for most simple input fields (TextField, CheckBox, but not ComboBox)
 * @param {int} iColId column id
 * @public
 * 
 */
sap.ui.table.Table.prototype.autoResizeColumn = function(iColId) {  };

/**
 * Binder for aggregation <code>columns</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindColumns = function(oBindingInfo) { return new sap.ui.table.Table(); };

/**
 * Binder for aggregation <code>rows</code>.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo the binding information
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindRows = function(oBindingInfo) { return new sap.ui.table.Table(); };

/**
 * Removes complete selection.
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.clearSelection = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the columns in the aggregation
 * named <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyColumns = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the extension in the aggregation
 * named <code>extension</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyExtension = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the footer in the aggregation
 * named <code>footer</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyFooter = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the noData in the aggregation
 * named <code>noData</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyNoData = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the rows in the aggregation
 * named <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyRows = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the title in the aggregation
 * named <code>title</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyTitle = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the toolbar in the aggregation
 * named <code>toolbar</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyToolbar = function() { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cellClick' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCellClick = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cellContextmenu' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCellContextmenu = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'columnFreeze' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnFreeze = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnMove = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnResize = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnSelect = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnVisibility = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'customFilter' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.23.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCustomFilter = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachFilter = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'group' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachGroup = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachRowSelectionChange = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachSort = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table if not provided. For the cell content, the column's "sortProperty" will be used (experimental!)
 * 
 * <p><b>Please note: The return value was changed from jQuery Promises to standard ES6 Promises.
 * jQuery specific Promise methods ('done', 'fail', 'always', 'pipe' and 'state') are still available but should not be used.
 * Please use only the standard methods 'then' and 'catch'!</b></p>
 * @param {object} [mSettings] settings for the new Export, see {@link sap.ui.core.util.Export} <code>constructor</code>
 * @return {Promise} Promise object
 * @experimental Experimental because the property for the column/cell definitions (sortProperty) could change in future.
 * @public
 * 
 */
sap.ui.table.Table.prototype.exportData = function(mSettings) { return null; };

/**
 * Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code>
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
sap.ui.table.Table.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * filter the given column by the given value
 * @param {sap.ui.table.Column} oColumn
 *         column to be filtered
 * @param {string} sValue
 *         filter value as string (will be converted)
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.filter = function(oColumn,sValue) { return new sap.ui.table.Table(); };

/**
 * Fire event cellClick to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'cellControl' of type <code>sap.ui.core.Control</code>The control of the cell.</li>
 * <li>'rowIndex' of type <code>int</code>Row index of the selected cell.</li>
 * <li>'columnIndex' of type <code>int</code>Column index of the selected cell.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.fireCellClick = function(mArguments) { return false; };

/**
 * Fire event cellContextmenu to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'cellControl' of type <code>sap.ui.core.Control</code>The control of the cell.</li>
 * <li>'rowIndex' of type <code>int</code>Row index of the selected cell.</li>
 * <li>'columnIndex' of type <code>int</code>Column index of the selected cell.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.fireCellContextmenu = function(mArguments) { return false; };

/**
 * Fire event columnFreeze to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>reference to the column to freeze</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.fireColumnFreeze = function(mArguments) { return false; };

/**
 * Fire event columnMove to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>moved column.</li>
 * <li>'newPos' of type <code>int</code>new position of the column.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnMove = function(mArguments) { return false; };

/**
 * Fire event columnResize to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>resized column.</li>
 * <li>'width' of type <code>int</code>new width of the table in pixel.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnResize = function(mArguments) { return false; };

/**
 * Fire event columnSelect to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>reference to the selected column</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnSelect = function(mArguments) { return false; };

/**
 * Fire event columnVisibility to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>affected column.</li>
 * <li>'visible' of type <code>boolean</code>new value of the visible property.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnVisibility = function(mArguments) { return false; };

/**
 * Fire event customFilter to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * @since 1.23.0
 * 
 */
sap.ui.table.Table.prototype.fireCustomFilter = function(mArguments) { return new sap.ui.table.Table(); };

/**
 * Fire event filter to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>filtered column.</li>
 * <li>'value' of type <code>string</code>filter value.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireFilter = function(mArguments) { return false; };

/**
 * Fire event group to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>grouped column.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireGroup = function(mArguments) { return false; };

/**
 * Fire event rowSelectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code>row index which has been clicked so that the selection has been changed (either selected or deselected)</li>
 * <li>'rowContext' of type <code>object</code>binding context of the row which has been clicked so that selection has been changed</li>
 * <li>'rowIndices' of type <code>int[]</code>array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireRowSelectionChange = function(mArguments) { return new sap.ui.table.Table(); };

/**
 * Fire event sort to attached listeners.
 * 
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code>sorted column.</li>
 * <li>'sortOrder' of type <code>sap.ui.table.SortOrder</code>Sort Order</li>
 * <li>'columnAdded' of type <code>boolean</code>If column was added to sorter this is true. If new sort is started this is set to false</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireSort = function(mArguments) { return false; };

/**
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @deprecated Since version 1.5.2.
 * Use the property enableColumnReordering instead.
 * @public
 * 
 */
sap.ui.table.Table.prototype.getAllowColumnReordering = function() { return false; };

/**
 * Getter for property <code>columnHeaderHeight</code>.
 * Height of the column header of the Table in pixel.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>columnHeaderHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderHeight = function() { return 0; };

/**
 * Getter for property <code>columnHeaderVisible</code>.
 * Flag whether the column header is visible or not.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>columnHeaderVisible</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderVisible = function() { return false; };

/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * @return {sap.ui.table.Column[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumns = function() { return new Array(); };

/**
 * Returns the context of a row by its index.
 * @param {int} iIndex
 *         Index of the row to return the context from.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) { return new Object(); };

/**
 * Getter for property <code>editable</code>.
 * Flag whether the controls of the Table are editable or not (currently this only controls the background color!)
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>enableBusyIndicator</code>.
 * Set this parameter to true to make the table handle the busy indicator by its own. The table will switch to busy as soon as it scrolls into an unpaged area.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableBusyIndicator</code>
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableBusyIndicator = function() { return false; };

/**
 * Getter for property <code>enableCellFilter</code>.
 * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableCellFilter</code>
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableCellFilter = function() { return false; };

/**
 * Getter for property <code>enableColumnFreeze</code>.
 * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableColumnFreeze</code>
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableColumnFreeze = function() { return false; };

/**
 * Getter for property <code>enableColumnReordering</code>.
 * Flag to enable or disable column reordering
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableColumnReordering</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableColumnReordering = function() { return false; };

/**
 * Getter for property <code>enableCustomFilter</code>.
 * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableCustomFilter</code>
 * @since 1.23.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableCustomFilter = function() { return false; };

/**
 * Getter for property <code>enableGrouping</code>.
 * Flag to enable or disable column grouping. (experimental!)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableGrouping</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableGrouping = function() { return false; };

/**
 * Getter for property <code>enableSelectAll</code>.
 * Specifies if a select all button should be displayed in the top left corner.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableSelectAll</code>
 * @since 1.23.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableSelectAll = function() { return false; };

/**
 * Getter for aggregation <code>extension</code>.<br/>
 * Extension section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getExtension = function() { return new Array(); };

/**
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFirstVisibleRow = function() { return 0; };

/**
 * Getter for property <code>fixedBottomRowCount</code>.
 * Number of rows that are fix on the bottom. When you use a vertical scroll bar, only the rows which are not fixed, will scroll. (experimental!)
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>fixedBottomRowCount</code>
 * @since 1.18.7
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedBottomRowCount = function() { return 0; };

/**
 * Getter for property <code>fixedColumnCount</code>.
 * Number of columns that are fix on the left. When you use a horizontal scroll bar, only the columns which are not fixed, will scroll. Fixed columns need a defined width for the feature to work.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>fixedColumnCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedColumnCount = function() { return 0; };

/**
 * Getter for property <code>fixedRowCount</code>.
 * Number of rows that are fix on the top. When you use a vertical scroll bar, only the rows which are not fixed, will scroll.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>fixedRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedRowCount = function() { return 0; };

/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control or text of footer section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFooter = function() { return new sap.ui.core.Control(); };

/**
 * Id of the element which is the current target of the <code>groupBy</code> association, or null
 * 
 * Group By Column (experimental!)
 * @return {sap.ui.table.Column}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getGroupBy = function() { return new sap.ui.table.Column(); };

/**
 * Returns a metadata object for class sap.ui.table.Table.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.Table.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minAutoRowCount</code>.
 * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto. For any other visibleRowCountMode, it is ignored.
 * 
 * Default value is <code>5</code>
 * @return {int} the value of property <code>minAutoRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getMinAutoRowCount = function() { return 0; };

/**
 * Getter for property <code>navigationMode</code>.
 * Flag whether to use the scroll mode or paging mode. If the Paginator mode is used it will require the sap.ui.commons library!
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.table.NavigationMode} the value of property <code>navigationMode</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNavigationMode = function() { return new sap.ui.table.NavigationMode(); };

/**
 * Getter for aggregation <code>noData</code>.<br/>
 * The value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>noDataText</code>.
 * This text is shown, in case there is no data available to be displayed in the Table and no custom noData control is set.
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>noDataText</code>
 * @since 1.21.0
 * @deprecated Since version 1.22.1.
 * The aggregation noData also supports string values now. Use noData instead.
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNoDataText = function() { return ""; };

/**
 * Getter for property <code>rowHeight</code>.
 * Height of a row of the Table in pixel.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>rowHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowHeight = function() { return 0; };

/**
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows of the Table
 * @return {sap.ui.table.Row[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRows = function() { return new Array(); };

/**
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 * 
 * Default value is <code>undefined</code>
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() { return 0; };

/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * @type int[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Getter for property <code>selectionBehavior</code>.
 * Selection behavior of the Table.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.table.SelectionBehavior} the value of property <code>selectionBehavior</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionBehavior = function() { return new sap.ui.table.SelectionBehavior(); };

/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionMode = function() { return new sap.ui.table.SelectionMode(); };

/**
 * Getter for property <code>showColumnVisibilityMenu</code>.
 * Flag to show or hide the column visibility menu.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showColumnVisibilityMenu</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowColumnVisibilityMenu = function() { return false; };

/**
 * Getter for property <code>showNoData</code>.
 * Flag whether to show the no data overlay or not once the table is empty.
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowNoData = function() { return false; };

/**
 * Getter for property <code>showOverlay</code>.
 * Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showOverlay</code>
 * @since 1.21.2
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowOverlay = function() { return false; };

/**
 * Getter for property <code>threshold</code>.
 * Threshold to fetch the next chunk of data. The minimal threshold can be the visible row count of the Table. If the value is 0 then the thresholding is disabled.
 * 
 * Default value is <code>100</code>
 * @return {int} the value of property <code>threshold</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getThreshold = function() { return 0; };

/**
 * Getter for aggregation <code>title</code>.<br/>
 * Control or text of title section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getTitle = function() { return new sap.ui.core.Control(); };

/**
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Toolbar}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows (will overwrite the height property).
 * 
 * Default value is <code>10</code>
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCount = function() { return 0; };

/**
 * Getter for property <code>visibleRowCountMode</code>.
 * This defines how the table handles the visible rows in the table. The default behavior is, that a fixed row count is defined. If you change it to auto the visibleRowCount property is changed by the table automatically. It will then adjust its maximum row count to the space it is allowed to cover (limited by the surrounding container) and its minimum row count to the value of the property minAutoRowCount (default value : 5) In manual mode the user can change the visibleRowCount interactively.
 * 
 * Default value is <code>undefined</code>
 * @return {sap.ui.table.VisibleRowCountMode} the value of property <code>visibleRowCountMode</code>
 * @since 1.9.2
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCountMode = function() { return new sap.ui.table.VisibleRowCountMode(); };

/**
 * Getter for property <code>width</code>.
 * Width of the Table.
 * 
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Column}
 *           oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>extension</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oExtension the extension whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfExtension = function(oExtension) { return 0; };

/**
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation named <code>rows</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Row}
 *           oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.ui.table.Column}
 *            oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertColumn = function(oColumn,iIndex) { return new sap.ui.table.Table(); };

/**
 * Inserts a extension into the aggregation named <code>extension</code>.
 * @param {sap.ui.core.Control}
 *            oExtension the extension to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the extension should be inserted at; for
 *              a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the extension is inserted at
 *              the last position
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertExtension = function(oExtension,iIndex) { return new sap.ui.table.Table(); };

/**
 * Inserts a row into the aggregation named <code>rows</code>.
 * @param {sap.ui.table.Row}
 *            oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the row should be inserted at; for
 *              a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the row is inserted at
 *              the last position
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertRow = function(oRow,iIndex) { return new sap.ui.table.Table(); };

/**
 * Returns whether the given index is selected.
 * @param {int} iIndex
 *         Index which is checked for selection state.
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) { return false; };

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>extension</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllExtension = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Row[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllRows = function() { return new Array(); };

/**
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.ui.table.Column} vColumn the columnto remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeColumn = function(vColumn) { return new sap.ui.table.Column(); };

/**
 * Removes an extension from the aggregation named <code>extension</code>.
 * @param {int | string | sap.ui.core.Control} vExtension the extensionto remove or its index or id
 * @return {sap.ui.core.Control} the removed extension or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeExtension = function(vExtension) { return new sap.ui.core.Control(); };

/**
 * Removes an row from the aggregation named <code>rows</code>.
 * @param {int | string | sap.ui.table.Row} vRow the rowto remove or its index or id
 * @return {sap.ui.table.Row} the removed row or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeRow = function(vRow) { return new sap.ui.table.Row(); };

/**
 * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
 * @param {int} iIndexFrom
 *         Index from which .
 * @param {int} iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Add all rows to the selection.
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.selectAll = function() { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>allowColumnReordering</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAllowColumnReordering new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @deprecated Since version 1.5.2.
 * Use the property enableColumnReordering instead.
 * @public
 * 
 */
sap.ui.table.Table.prototype.setAllowColumnReordering = function(bAllowColumnReordering) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>columnHeaderHeight</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iColumnHeaderHeight new value for property <code>columnHeaderHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iColumnHeaderHeight) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>columnHeaderVisible</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bColumnHeaderVisible new value for property <code>columnHeaderVisible</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderVisible = function(bColumnHeaderVisible) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable new value for property <code>editable</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEditable = function(bEditable) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableBusyIndicator</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableBusyIndicator new value for property <code>enableBusyIndicator</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableBusyIndicator = function(bEnableBusyIndicator) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableCellFilter</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableCellFilter new value for property <code>enableCellFilter</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableCellFilter = function(bEnableCellFilter) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableColumnFreeze</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableColumnFreeze new value for property <code>enableColumnFreeze</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableColumnFreeze = function(bEnableColumnFreeze) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableColumnReordering</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableColumnReordering new value for property <code>enableColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableColumnReordering = function(bEnableColumnReordering) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableCustomFilter</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableCustomFilter new value for property <code>enableCustomFilter</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.23.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableCustomFilter = function(bEnableCustomFilter) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableGrouping</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableGrouping new value for property <code>enableGrouping</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableGrouping = function(bEnableGrouping) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>enableSelectAll</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableSelectAll new value for property <code>enableSelectAll</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.23.0
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableSelectAll = function(bEnableSelectAll) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>firstVisibleRow</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFirstVisibleRow new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iFirstVisibleRow) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>fixedBottomRowCount</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedBottomRowCount new value for property <code>fixedBottomRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.18.7
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedBottomRowCount = function(iFixedBottomRowCount) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>fixedColumnCount</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedColumnCount new value for property <code>fixedColumnCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedColumnCount = function(iFixedColumnCount) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>fixedRowCount</code>.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedRowCount new value for property <code>fixedRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedRowCount = function(iFixedRowCount) { return new sap.ui.table.Table(); };

/**
 * Setter for the aggregated <code>footer</code>.
 * @param {sap.ui.core.Control} oFooter the footer to set
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFooter = function(oFooter) { return new sap.ui.table.Table(); };

/**
 * Setter for the associated <code>groupBy</code>.
 * @param {sap.ui.table.Column} oGroupBy Id of an element which becomes the new target of this groupBy association. Alternatively, an element instance may be given.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setGroupBy = function(oGroupBy) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>minAutoRowCount</code>.
 * 
 * Default value is <code>5</code>.
 * @param {int} iMinAutoRowCount new value for property <code>minAutoRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setMinAutoRowCount = function(iMinAutoRowCount) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>navigationMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.table.NavigationMode} sNavigationMode new value for property <code>navigationMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNavigationMode = function(sNavigationMode) { return new sap.ui.table.Table(); };

/**
 * Setter for the aggregated <code>noData</code>.
 * @param {sap.ui.core.Control} oNoData the noData to set
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNoData = function(oNoData) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>noDataText</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sNoDataText new value for property <code>noDataText</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.0
 * @deprecated Since version 1.22.1.
 * The aggregation noData also supports string values now. Use noData instead.
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNoDataText = function(sNoDataText) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>rowHeight</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iRowHeight new value for property <code>rowHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowHeight = function(iRowHeight) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>selectedIndex</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {int} iSelectedIndex new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iSelectedIndex) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>selectionBehavior</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.table.SelectionBehavior} sSelectionBehavior new value for property <code>selectionBehavior</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionBehavior = function(sSelectionBehavior) { return new sap.ui.table.Table(); };

/**
 * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
 * @param {int} iIndexFrom
 *         Index from which .
 * @param {int} iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>selectionMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.table.SelectionMode} sSelectionMode new value for property <code>selectionMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>showColumnVisibilityMenu</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowColumnVisibilityMenu new value for property <code>showColumnVisibilityMenu</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowColumnVisibilityMenu = function(bShowColumnVisibilityMenu) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>showNoData</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowNoData new value for property <code>showNoData</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowNoData = function(bShowNoData) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>showOverlay</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowOverlay new value for property <code>showOverlay</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.21.2
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowOverlay = function(bShowOverlay) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>threshold</code>.
 * 
 * Default value is <code>100</code>.
 * @param {int} iThreshold new value for property <code>threshold</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setThreshold = function(iThreshold) { return new sap.ui.table.Table(); };

/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Control} oTitle the title to set
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setTitle = function(oTitle) { return new sap.ui.table.Table(); };

/**
 * Setter for the aggregated <code>toolbar</code>.
 * @param {sap.ui.core.Toolbar} oToolbar the toolbar to set
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setToolbar = function(oToolbar) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>visibleRowCount</code>.
 * 
 * Default value is <code>10</code>.
 * @param {int} iVisibleRowCount new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iVisibleRowCount) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>visibleRowCountMode</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {sap.ui.table.VisibleRowCountMode} sVisibleRowCountMode new value for property <code>visibleRowCountMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @since 1.9.2
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCountMode = function(sVisibleRowCountMode) { return new sap.ui.table.Table(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth new value for property <code>width</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setWidth = function(sWidth) { return new sap.ui.table.Table(); };

/**
 * sorts the given column ascending or descending
 * @param {sap.ui.table.Column} oColumn
 *         column to be sorted
 * @param {sap.ui.table.SortOrder} oSortOrder
 *         sort order of the column (if undefined the default will be ascending)
 * @type sap.ui.table.Table
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.sort = function(oColumn,oSortOrder) { return new sap.ui.table.Table(); };

/**
 * Unbinder for aggregation <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindColumns = function() { return new sap.ui.table.Table(); };

/**
 * Unbinder for aggregation <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindRows = function() { return new sap.ui.table.Table(); };


// ---- sap.ui.table.TablePersoController --------------------------------------------------------------------------

/**
 * Constructor for a new TablePersoController.
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
 * <li>{@link #getAutoSave autoSave} : boolean (default: true)</li>
 * <li>{@link #getPersoService persoService} : any</li>
 * <li>{@link #getCustomDataKey customDataKey} : string (default: persoKey)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The TablePersoController can be used to connect a table with a persistence service.
 * @extends sap.ui.base.ManagedObject
 * @version 1.28.9
 * @since 1.21.1
 * @constructor
 * @public
 * 
 */
sap.ui.table.TablePersoController = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.TablePersoController with name <code>sClassName</code>
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
sap.ui.table.TablePersoController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>autoSave</code>.
 * Auto save state
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>autoSave</code>
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getAutoSave = function() { return false; };

/**
 * Getter for property <code>customDataKey</code>.
 * By defining a custom data key the <code>TablePersoController</code>
 * will try to get the key for saving the perso data from the custom
 * data of the Table and Column instead of creating it by concatenating 
 * the ID of the Table and the Column. Basically this will be more stable 
 * than using the auto IDs.
 * 
 * Default value is <code>persoKey</code>
 * @return {string} the value of property <code>customDataKey</code>
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getCustomDataKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.TablePersoController.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.TablePersoController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>persoService</code>.
 * Personalization Service object. Needs to have the following methods:
 * <ul>
 * <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * </ul>
 * 
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>persoService</code>
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getPersoService = function() { return null; };

/**
 * Id of the element which is the current target of the <code>table</code> association, or null
 * 
 * The target table of this controller.
 * @return {sap.ui.table.Table}
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getTable = function() { return new sap.ui.table.Table(); };

/**
 * Opens the personalization dialog for the Table to modify the visibility and
 * the order of the columns.
 * 
 * <i>Using this functionality will require to load the sap.m library because the
 * personalization dialog is only available in this library for now.</i>
 * @param {object} mSettings
 * @public
 * @experimental since 1.21.2 - API might change / feature requires the sap.m library!
 * 
 */
sap.ui.table.TablePersoController.prototype.openDialog = function(mSettings) {  };

/**
 * Refresh the personalizations (reloads data from service).
 * @return {jQuery.Promise} <code>jQuery Promise</code> which is resolved once the refresh is finished
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.refresh = function() { return new jQuery.Promise(); };

/**
 * Saves the current personalization state.
 * @return {jQuery.Promise} <code>jQuery Promise</code> which is resolved once the save is finished
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.savePersonalizations = function() { return new jQuery.Promise(); };

/**
 * Setter for property <code>autoSave</code>.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAutoSave new value for property <code>autoSave</code>
 * @return {sap.ui.table.TablePersoController} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setAutoSave = function(bAutoSave) { return new sap.ui.table.TablePersoController(); };

/**
 * Setter for property <code>customDataKey</code>.
 * 
 * Default value is <code>persoKey</code>.
 * @param {string} sCustomDataKey new value for property <code>customDataKey</code>
 * @return {sap.ui.table.TablePersoController} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setCustomDataKey = function(sCustomDataKey) { return new sap.ui.table.TablePersoController(); };

/**
 * Setter for property <code>persoService</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oPersoService new value for property <code>persoService</code>
 * @return {sap.ui.table.TablePersoController} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setPersoService = function(oPersoService) { return new sap.ui.table.TablePersoController(); };

/**
 * Setter for the associated <code>table</code>.
 * @param {sap.ui.table.Table} oTable Id of an element which becomes the new target of this table association. Alternatively, an element instance may be given.
 * @return {sap.ui.table.TablePersoController} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setTable = function(oTable) { return new sap.ui.table.TablePersoController(); };


// ---- sap.ui.table.TreeAutoExpandMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.TreeAutoExpandMode.toString = function() { return ""; };

// ---- sap.ui.table.TreeTable --------------------------------------------------------------------------

/**
 * Constructor for a new TreeTable.
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
 * <li>{@link #getExpandFirstLevel expandFirstLevel} : boolean (default: false)</li>
 * <li>{@link #getUseGroupMode useGroupMode} : boolean (default: false)</li>
 * <li>{@link #getGroupHeaderProperty groupHeaderProperty} : string</li>
 * <li>{@link #getCollapseRecursive collapseRecursive} : boolean (default: true)</li>
 * <li>{@link #getRootLevel rootLevel} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:toggleOpenState toggleOpenState} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Table#constructor sap.ui.table.Table}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The TreeTable Control.
 * @extends sap.ui.table.Table
 * @version 1.28.9
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable = function(sId,mSettings) {};
/**
 * fired when a node has been expanded or collapsed (only available in hierachical mode)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex index of the expanded/collapsed row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the selected row
 * @param {boolean} oControlEvent.getParameters.expanded flag whether the node has been expanded or collapsed
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.toggleOpenState = function(oControlEvent) {  };

/**
 * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex.
 * The TreeNodes are referenced via their absolute row index.
 * Please be aware, that the absolute row index only applies to the the tree which is visualized by the TreeTable.
 * Invisible nodes (collapsed child nodes) will not be regarded.
 * 
 * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
 * To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
 * @param {int} iFromIndex The starting index of the range which will be selected.
 * @param {int} iToIndex The starting index of the range which will be selected.
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.addSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.table.TreeTable</code>.<br/>
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise to this <code>sap.ui.table.TreeTable</code>.<br> itself.
 * 
 * fired when a node has been expanded or collapsed (only available in hierachical mode)
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.TreeTable</code>.<br/> itself.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.attachToggleOpenState = function(oData,fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * Clears the complete selection (all tree table rows/nodes will lose their selection)
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.clearSelection = function() { return new sap.ui.table.TreeTable(); };

/**
 * collapses the row for the given row index
 * @param {int} iRowIndex
 *         index of the row to collapse
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.collapse = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Collapses all nodes (and lower if collapseRecursive is activated)
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.collapseAll = function() { return new sap.ui.table.TreeTable(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.table.TreeTable</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.detachToggleOpenState = function(fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * expands the row for the given row index
 * @param {int} iRowIndex
 *         index of the row to expand
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.expand = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Collapses all nodes on level 'iLevel' (and lower if collapseRecursive is activated)
 * If no parameter is given, all nodes will be collapsed to the topmost level.
 * 
 * Only supported with ODataModel v2.
 * @param {int} iLevel the level to which all nodes shall be collapsed
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.expandToLevel = function(iLevel) { return new sap.ui.table.TreeTable(); };

/**
 * Creates a new subclass of class sap.ui.table.TreeTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.TreeTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event toggleOpenState to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code>index of the expanded/collapsed row</li>
 * <li>'rowContext' of type <code>object</code>binding context of the selected row</li>
 * <li>'expanded' of type <code>boolean</code>flag whether the node has been expanded or collapsed</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.TreeTable.prototype.fireToggleOpenState = function(mArguments) { return new sap.ui.table.TreeTable(); };

/**
 * Getter for property <code>collapseRecursive</code>.
 * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel
 * 
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>collapseRecursive</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getCollapseRecursive = function() { return false; };

/**
 * Getter for property <code>expandFirstLevel</code>.
 * Flag to enable or disable expanding of first level.
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expandFirstLevel</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getExpandFirstLevel = function() { return false; };

/**
 * Getter for property <code>groupHeaderProperty</code>.
 * The property name of the rows data which will be displayed as a group header if the group mode is enabled
 * 
 * Default value is <code>undefined</code>
 * @return {string} the value of property <code>groupHeaderProperty</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getGroupHeaderProperty = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.TreeTable.
 * @return {sap.ui.base.Metadata} metadata object describing thi class
 * @public
 * @static
 * 
 */
sap.ui.table.TreeTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>rootLevel</code>.
 * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services.
 * This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel
 * The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.
 * 
 * Default value is <code>0</code>
 * @return {int} the value of property <code>rootLevel</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getRootLevel = function() { return 0; };

/**
 * Retrieves the lead selection index. The lead selection index is, among other things, used to determine the
 * start/end of a selection range, when using Shift-Click to select multiple entries at once. 
 * @return {int[]} an array containing all selected indices (ascending ordered integers)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.getSelectedIndex = function() { return new Array(); };

/**
 * Returns an array containing the row indices of all selected tree nodes (ordered ascending).
 * 
 * Please be aware of the following:
 * Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices
 * of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be
 * returned.
 * @return {int[]} an array containing all selected indices
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Getter for property <code>useGroupMode</code>.
 * If group mode is enable nodes with subitems are rendered as if they were group headers.
 * This can be used to do the grouping for an OData service on the backend and visualize this in a table.
 * This mode only makes sense if the tree has a depth of exacly 1 (group headers and entries)
 * 
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>useGroupMode</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getUseGroupMode = function() { return false; };

/**
 * Returns whether the row is expanded or collapsed.
 * @param {int} iRowIndex index of the row to check
 * @return {boolean} true if the node at "iRowIndex" is expanded, false otherwise (meaning it is collapsed)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.isExpanded = function(iRowIndex) { return false; };

/**
 * Checks if the row at the given index is selected.
 * @param {int} iRowIndex The row index for which the selection state should be retrieved
 * @return {boolean} true if the index is selected, false otherwise
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.isIndexSelected = function(iRowIndex) { return false; };

/**
 * All rows/tree nodes inside the range (including boundaries) will be deselected.
 * Tree nodes are referenced with theit absolute row index inside the tree- 
 * Please be aware, that the absolute row index only applies to the the tree which is visualized by the TreeTable.
 * Invisible nodes (collapsed child nodes) will not be regarded.
 * @param {int} iFromIndex The starting index of the range which will be deselected.
 * @param {int} iToIndex The starting index of the range which will be deselected.
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.removeSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Selects all available nodes/rows.
 * 
 * Explanation of the SelectAll function and what to expect from its behavior:
 * All rows/tree nodes locally stored on the client are selected.
 * In addition all subsequent rows/tree nodes, which will be paged into view are also immediatly selected.
 * However, due to obvious performance/network traffic reasons, the SelectAll function will NOT retrieve any data from the backend.
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.selectAll = function() { return new sap.ui.table.TreeTable(); };

/**
 * Setter for property <code>expandFirstLevel</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandFirstLevel new value for property <code>expandFirstLevel</code>
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setExpandFirstLevel = function(bExpandFirstLevel) { return new sap.ui.table.TreeTable(); };

/**
 * Setter for property <code>fixedRowCount</code>.
 * 
 * <b>This property is not supportd for the TreeTable and will be ignored!</b>
 * 
 * Default value is <code>0</code>
 * @param {int} iFixedRowCount  new value for property <code>fixedRowCount</code>
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setFixedRowCount = function(iFixedRowCount) { return new sap.ui.table.TreeTable(); };

/**
 * Setter for property <code>groupHeaderProperty</code>.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sGroupHeaderProperty new value for property <code>groupHeaderProperty</code>
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setGroupHeaderProperty = function(sGroupHeaderProperty) { return new sap.ui.table.TreeTable(); };

/**
 * Overriden from Table.js base class.
 * In a TreeTable you can only select indices, which correspond to the currently visualized tree.
 * Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because they do not
 * correspond to a TreeTable row.
 * @param {int} iRowIndex The row index which will be selected (if existing)
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.setSelectedIndex = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Sets the selection of the TreeTable to the given range (including boundaries).
 * Beware: The previous selection will be lost/overriden. If this is not wanted, please use "addSelectionInterval" and
 * "removeSelectionIntervall".
 * @param {int} iFromIndex the start index of the selection range
 * @param {int} iToIndex the end index of the selection range
 * @return {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.setSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Setter for property <code>useGroupMode</code>.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseGroupMode new value for property <code>useGroupMode</code>
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setUseGroupMode = function(bUseGroupMode) { return new sap.ui.table.TreeTable(); };


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.VisibleRowCountMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.table.GroupEventType --------------------------------------------------------------------------

/**
 * Group Column
 * @public
 * 
 */
sap.ui.table.GroupEventType.group = null;

/**
 * Show grouped column only as group header
 * @public
 * 
 */
sap.ui.table.GroupEventType.hideGroupedColumn = null;

/**
 * Change the group order of the columns. Move column one position down in the group sequence
 * @public
 * 
 */
sap.ui.table.GroupEventType.moveDown = null;

/**
 * Change the group order of the columns. Move column one position up in the group sequence
 * @public
 * 
 */
sap.ui.table.GroupEventType.moveUp = null;

/**
 * Show grouped column also as a column, not just as group header
 * @public
 * 
 */
sap.ui.table.GroupEventType.showGroupedColumn = null;

/**
 * Ungroup Column
 * @public
 * 
 */
sap.ui.table.GroupEventType.ungroup = null;

/**
 * Ungroup All Columns
 * @public
 * 
 */
sap.ui.table.GroupEventType.ungroupAll = null;


// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

/**
 * Uses the paginator control.
 * @public
 * 
 */
sap.ui.table.NavigationMode.Paginator = "";

/**
 * Uses the scrollbar control.
 * @public
 * 
 */
sap.ui.table.NavigationMode.Scrollbar = "";


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

/**
 * Rows can be selected on the complete row.
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.Row = "";

/**
 * Rows can only be selected on the row (and the selector is hidden).
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.RowOnly = "";

/**
 * Rows can only be selected on the row selector.
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.RowSelector = "";


// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

/**
 * Select multiple rows at a time.
 * @public
 * 
 */
sap.ui.table.SelectionMode.Multi = "";

/**
 * Select multiple rows at a time (toggle behavior).
 * @public
 * 
 */
sap.ui.table.SelectionMode.MultiToggle = "";

/**
 * No rows can be selected.
 * @public
 * 
 */
sap.ui.table.SelectionMode.None = "";

/**
 * Select one row at a time.
 * @public
 * 
 */
sap.ui.table.SelectionMode.Single = "";


// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

/**
 * Sort Order: ascending.
 * @public
 * 
 */
sap.ui.table.SortOrder.Ascending = "";

/**
 * Sort Order: descending.
 * @public
 * 
 */
sap.ui.table.SortOrder.Descending = "";


// ---- sap.ui.table.TreeAutoExpandMode --------------------------------------------------------------------------

/**
 * If supported by a backend provider with analytical capabilities, the requests needed for an automatic node expansion are bundled.
 * @public
 * 
 * @memberof sap.ui.table.TreeAutoExpandMode
 */
sap.ui.table.TreeAutoExpandMode.Bundled = undefined;

/**
 * Tree nodes will be expanded in sequence, level by level (Single requests are sent)
 * @public
 * 
 * @memberof sap.ui.table.TreeAutoExpandMode
 */
sap.ui.table.TreeAutoExpandMode.Sequential = undefined;


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

/**
 * The table automatically fills the height of the surrounding container. The visibleRowCount property is automatically changed accordingly. All rows need the same height, otherwise the auto mode doesn't always work as expected.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Auto = "";

/**
 * The table always has as many rows as defined in the visibleRowCount property.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Fixed = "";

/**
 * After rendering the table has as many rows as defined in visibleRowCount property. The user is able to change the visible rows by moving a grip with the mouse. The visibleRowCount property is changed accordingly.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Interactive = "";

