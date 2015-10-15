
// ---- _global_ --------------------------------------------------------------------------


// ---- Function --------------------------------------------------------------------------


// ---- module --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ushell --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.toString = function() { return ""; };
/**
 * 
 * Initializes the Unified Shell container for the given platform. This method must be called
 * exactly once in the very beginning by platform-specific code in order to bootstrap the
 * container. As soon as the returned promise has been resolved, the container will be available
 * as a singleton object <code>sap.ushell.Container</code>.
 * <p>
 * For convenience, platform-specific bootstrap code is available and can be easily included
 * (<b>before</b> the SAPUI5 bootstrap) by a corporate shell as follows:
 * <pre>
 * &lt;script src="/sap/public/bc/ui5_ui5/resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * This bootstrap code will automatically defer the initialization of SAPUI5 until the
 * container is available. This is the preferred way of bootstrapping the Unified Shell.
 * <p>
 * Note: For SAPUI5 application projects the recommended way is to add a dependency to the
 * "sap.ushell_abap" library (<code>&lt;groupId&gt;com.sap.ushell&lt;/groupId&gt;
 * &lt;artifactId&gt;ushell_abap&lt;/artifactId&gt;</code>) and load the bootstrap code via the
 * application's resources folder:
 * <pre>
 * &lt;script src=".../resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * <p>
 * Since 1.15.0 you can provide the function
 * <code>window['sap.ushell.bootstrap.callback']</code> for calling back from this method
 * asynchronously. SAPUI5's bootstrap is ongoing then. The same restrictions apply
 * as for the function <code>window['sap-ui-config']['xx-bootTask']</code>) when the Unified
 * Shell container has not yet finished its bootstrap. You cannot delay the bootstrap of SAPUI5
 * or the Unified Shell container; any errors are ignored. This callback is useful for
 * sending asynchronous back-end requests at the earliest opportunity without delaying
 * the core bootstrap of SAPUI5 and the Unified Shell container.
 * @param {string} sPlatform
 *     the target platform, such as "abap" or "local" (Note: there is no fixed enumeration of
 *     possible platforms)
 * @param {map<string, string>} [mAdapterPackagesByPlatform={}]
 *     the map with platform specific package names for the service adapters.
 *     You only need to specify these package names, if they differ from the standard name
 *     <code>"sap.ushell.adapters." + sPlatform</code>.
 * @returns {jQuery.Promise}
 *     a promise that is resolved once the container is available
 * @since 1.15.0
 * @see sap.ushell.Container
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.bootstrap = function(sPlatform,mAdapterPackagesByPlatform) { return new jQuery.Promise(); };

/**
 * 
 * Disable feature
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.disable = function() { return null; };

/**
 * 
 * Enable feature
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.enable = function() { return null; };


// ---- sap.ushell.adapters --------------------------------------------------------------------------


// ---- sap.ushell.components --------------------------------------------------------------------------


// ---- sap.ushell.components.container --------------------------------------------------------------------------


// ---- sap.ushell.components.factsheet --------------------------------------------------------------------------


// ---- sap.ushell.components.factsheet.controls --------------------------------------------------------------------------


// ---- sap.ushell.components.factsheet.controls.PictureTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new components/factsheet/controls/PictureTile.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '32px')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '32px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTileContent tileContent} : string | sap.ushell.components.factsheet.controls.PictureViewerItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.components.factsheet.controls.PictureTile#event:pictureDelete pictureDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.CustomTile#constructor sap.m.CustomTile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Tile control embedding an image and allowing custom sizing
 * @extends sap.m.CustomTile
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.components.factsheet.controls.PictureTile = function(sId,mSettings) {};
/**
 * 
 * Fired when the user deletes a picture
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.pictureDelete = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pictureDelete' event of this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.<br/> itself. 
 * </p><p>
 * Fired when the user deletes a picture
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.<br/> itself.
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.attachPictureDelete = function(oData,fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pictureDelete' event of this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.detachPictureDelete = function(fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureTile with name <code>sClassName</code> 
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
sap.ushell.components.factsheet.controls.PictureTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event pictureDelete to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.firePictureDelete = function(mArguments) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * 
 * Getter for property <code>height</code>.
 * height (in pixels) of the picture viewer control.
 * </p><p>
 * Default value is <code>32px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Reference to one PictureViewerItem coming from the PictureViewer.
 * @return {string} Id of the element which is the current target of the <code>tileContent</code> association, or null
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getTileContent = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * width (in pixels) of the picture viewer control.
 * </p><p>
 * Default value is <code>32px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>32px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setHeight = function(sHeight) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * 
 * Reference to one PictureViewerItem coming from the PictureViewer.
 * @override
 * @param {string | sap.ushell.components.factsheet.controls.PictureViewerItem} vTileContent
 *    Id of an element which becomes the new target of this <code>tileContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setTileContent = function(vTileContent) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>32px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setWidth = function(sWidth) { return new sap.ushell.components.factsheet.controls.PictureTile(); };


// ---- sap.ushell.components.factsheet.controls.PictureViewer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new components/factsheet/controls/PictureViewer.
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
 * <li>{@link #getTileScaling tileScaling} : float (default: 0.95)</li>
 * <li>{@link #getRemovable removable} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ushell.components.factsheet.controls.PictureViewerItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.components.factsheet.controls.PictureViewer#event:pictureDeleted pictureDeleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.TileContainer#constructor sap.m.TileContainer}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Picture viewer control relying on the TileContainer control
 * @extends sap.m.TileContainer
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.components.factsheet.controls.PictureViewer = function(sId,mSettings) {};
/**
 * 
 * Thrown when user delete an image
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.pictureDeleted = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code>
 * to the aggregation named <code>items</code>.
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @deprecated Use aggregation "tiles"
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.addItem = function(oItem) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pictureDeleted' event of this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.<br/> itself. 
 * </p><p>
 * Thrown when user delete an image
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.<br/> itself.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.attachPictureDeleted = function(oData,fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Removes the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          iIndex the index of the picture to delete; if empty, the current picture is deleted
 * @param {int}
 *             iIndex the <code>0</code>-based index of the picture collection to delete;
 *             if <code>iIndex</code> is out of range or empty, the current image will be deleted.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.deletePicture = function(iIndex,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.destroyItems = function() { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pictureDeleted' event of this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.detachPictureDeleted = function(fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureViewer with name <code>sClassName</code> 
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
sap.ushell.components.factsheet.controls.PictureViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event pictureDeleted to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.firePictureDeleted = function(mArguments) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Gets the current picture index.
 * @override
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} the current picture index
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getCurrentPictureIndex = function() { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image control.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for components/factsheet/controls/PictureViewer.
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem[]}
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>removable</code>.
 * Defines whether or not you can remove a picture
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getRemovable = function() { return false; };

/**
 * 
 * Getter for property <code>tileScaling</code>.
 * Percentage of the space occupied by the image in the picture viewer control. Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * </p><p>
 * Default value is <code>0.95</code>
 * @return {float} the value of property <code>tileScaling</code>
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getTileScaling = function() { return 0.0; };

/**
 * 
 * Checks for the provided <code>sap.ushell.components.factsheet.controls.PictureViewerItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * When adding a new item to the aggregation, a sap.ca.ui.PictureTile is actually created
 * with its own ID and added to the internal TileContainer.
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the item is inserted at
 *             the last position
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @deprecated Use aggregation "tiles"
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.insertItem = function(oItem,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ushell.components.factsheet.controls.PictureViewerItem} vItem the item to remove or its index or id
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem} the removed item or null
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.removeItem = function(vItem) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * 
 * Select the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          iIndex the index of the picture to select; if empty, the first picture is selected
 * @param {int}
 *             iIndex the <code>0</code>-based index of the aggregation to select; for
 *             a negative value of <code>iIndex</code>, the picture at position 0 is selected; for a value
 *             greater than the current size of the aggregation, the selected picture at the last position is selected
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.selectPicture = function(iIndex,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * 
 * Specify whether or not you can delete a picture.
 * If FALSE the delete button will never be visible. Default value is TRUE
 * @override
 * @public
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.setRemovable = function(bValue) { return null; };

/**
 * 
 * Set the percentage of the space occupied by the image in the picture viewer control.
 * Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * @override
 * @public
 * @param fTileScale
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.setTileScaling = function(fTileScale) { return null; };


// ---- sap.ushell.components.factsheet.controls.PictureViewerItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new components/factsheet/controls/PictureViewerItem.
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
 * <li>{@link #getSrc src} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getImage image} : sap.m.Image</li></ul>
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
 * Picture viewer control relying on the TileContainer control
 * @extends sap.ui.core.Control
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.components.factsheet.controls.PictureViewerItem = function(sId,mSettings) {};
/**
 * 
 * Destroys the image in the aggregation 
 * named <code>image</code>.
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.destroyImage = function() { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureViewerItem with name <code>sClassName</code> 
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
sap.ushell.components.factsheet.controls.PictureViewerItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>image</code>.<br/>
 * Pass in an existing Image control to be used inside the PictureViewer
 * @return {sap.m.Image}
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.getImage = function() { return new sap.m.Image(); };

/**
 * 
 * Getter for property <code>src</code>.
 * Image source url.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>src</code>
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.getSrc = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>image</code>.
 * @param {sap.m.Image} oImage
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.setImage = function(oImage) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * 
 * Setter for property <code>src</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.setSrc = function(sSrc) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };


// ---- sap.ushell.components.tiles --------------------------------------------------------------------------


// ---- sap.ushell.components.tiles.indicatorTileUtils --------------------------------------------------------------------------


// ---- sap.ushell.components.tiles.indicatorTileUtils.odata4analytics --------------------------------------------------------------------------


// ---- sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder.toString = function() { return ""; };

// ---- sap.ushell.Container.DirtyState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.Container.DirtyState.toString = function() { return ""; };

// ---- sap.ushell.renderers --------------------------------------------------------------------------


// ---- sap.ushell.renderers.fiori2.Renderer --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.createRenderer("fiori2")</code>.
 * @class The SAPUI5 component of SAP's Fiori Wave 2 renderer for the Unified Shell.
 * @extends sap.ui.core.UIComponent
 * @see sap.ushell.services.Container#createRenderer
 * @since 1.15.0
 * @public
 */
sap.ushell.renderers.fiori2.Renderer = function() {};

// ---- sap.ushell.services --------------------------------------------------------------------------


// ---- sap.ushell.services.Bookmark --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("Bookmark")</code>.
 * Constructs a new instance of the bookmark service.
 * @class The unified shell's bookmark service, which allows you to create shortcuts on the
 * user's home page.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Bookmark = function() {};
/**
 * 
 * Adds a bookmark to the user's home page.
 * @param {object} oParameters
 *   Bookmark parameters. In addition to title and URL, a bookmark might allow additional
 *   settings, such as an icon or a subtitle. Which settings are supported depends
 *   on the environment in which the application is running. Unsupported parameters will be
 *   ignored.
 * @param {string} oParameters.title
 *   The title of the bookmark.
 * @param {string} oParameters.url
 *   The URL of the bookmark. If the target application shall run in the Shell the URL has
 *   to be in the format <code>"#SO-Action~Context?P1=a&P2=x&/route?RPV=1"</code>
 * @param {string} [oParameters.icon]
 *   The icon URL of the bookmark (e.g. <code>"sap-icon://home"</code>).
 * @param {string} [oParameters.info]
 *   The information text of the bookmark.
 * @param {string} [oParameters.subtitle]
 *   The subtitle of the bookmark.
 * @param {string} [oParameters.serviceUrl]
 *   The URL (a string or a JS function) to a REST or OData service that provides some dynamic information for the
 *   bookmark.
 * @param {string} [oParameters.serviceRefreshInterval]
 *   The refresh interval for the <code>serviceUrl</code> in seconds.
 * @param {string} [oParameters.numberUnit]
 *   The unit for the number retrieved from <code>serviceUrl</code>.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or failure
 *   of this asynchronous operation. In case of success, no further details are passed.
 *   In case of failure, an error message is passed.
 * @see sap.ushell.services.URLParsing#getShellHash
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Bookmark.prototype.addBookmark = function(oParameters) { return new Object(); };

/**
 * 
 * Adds the catalog tile with the given ID to given group. The catalog tile is looked up in
 * the legacy SAP HANA catalog unless data to look up a remote catalog is provided.
 * @param {string} sCatalogTileId
 *   The ID of the tile within the catalog
 * @param {string} [sGroupId]
 *   The id of the group. If not given, the tile is added to the default group
 * @param {object} [oCatalogData]
 *   The data to identify the catalog containing the tile with the given ID
 * @param {string} oCatalogData.baseUrl
 *   The remote catalog's base URL such as
 *   "/sap/hba/apps/kpi/s/odata/hana_chip_catalog.xsodata/"
 * @param {string} oCatalogData.remoteId
 *   The remote catalog's id on the remote system such as "HANA_CATALOG"
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or failure
 *   of this asynchronous operation. In case of success, no further details are passed.
 *   In case of failure, an error message is passed.
 * @since 1.21.2
 * @public
 */
sap.ushell.services.Bookmark.prototype.addCatalogTileToGroup = function(sCatalogTileId,sGroupId,oCatalogData) { return new Object(); };

/**
 * 
 * Counts <b>all</b> bookmarks pointing to the given URL from all of the user's pages. You
 * can use this method to check if a bookmark already exists.
 * <p>
 * This is a potentially asynchronous operation in case the user's pages have not yet been
 * loaded completely!
 * @param {string} sUrl
 *   The URL of the bookmarks to be counted, exactly as specified to {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or failure
 *   of this asynchronous operation. In case of success, the count of existing bookmarks
 *   is provided (which might be zero). In case of failure, an error message is passed.
 * @see #addBookmark
 * @since 1.17.1
 * @public
 */
sap.ushell.services.Bookmark.prototype.countBookmarks = function(sUrl) { return new Object(); };

/**
 * 
 * Deletes <b>all</b> bookmarks pointing to the given URL from all of the user's pages.
 * @param {string} sUrl
 *   The URL of the bookmarks to be deleted, exactly as specified to {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or
 *   failure of this asynchronous operation. In case of success, the number of deleted
 *   bookmarks is provided (which might be zero). In case of failure, an error message is
 *   passed.
 * @see #addBookmark
 * @see #countBookmarks
 * @since 1.17.1
 * @public
 */
sap.ushell.services.Bookmark.prototype.deleteBookmarks = function(sUrl) { return new Object(); };

/**
 * 
 * Updates <b>all</b> bookmarks pointing to the given URL on all of the user's pages
 * with the given new parameters. Parameters which are omitted are not changed in the
 * existing bookmarks.
 * @param {string} sUrl
 *   The URL of the bookmarks to be updated, exactly as specified to {@link #addBookmark}.
 *   In case you need to update the URL itself, pass the old one here and the new one as
 *   <code>oParameters.url</code>!
 * @param {object} oParameters
 *   The bookmark parameters as documented in {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or
 *   failure of this asynchronous operation.  In case of success, the number of updated
 *   bookmarks is provided (which might be zero). In case of failure, an error message is
 *   passed.
 * @see #addBookmark
 * @see #countBookmarks
 * @see #deleteBookmarks
 * @since 1.17.1
 * @public
 */
sap.ushell.services.Bookmark.prototype.updateBookmarks = function(sUrl,oParameters) { return new Object(); };


// ---- sap.ushell.services.Container --------------------------------------------------------------------------

/**
 * 
 * @class The Unified Shell's container which manages renderers, services, and adapters.
 * @see sap.ushell.bootstrap
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container = function() {};
/**
 * 
 * Adds a system to the list of remote systems currently in use. On logout
 * this list is processed and performs a logout for each system via the ContainerAdapter
 * specific for its platform.
 * @param  {sap.ushell.System} oRemoteSystem
 *         Remote system to be added.
 * @memberOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.addRemoteSystem = function(oRemoteSystem) { return null; };

/**
 * 
 * Attaches a listener to the logout event.
 * @param  {function} fnFunction
 *     Event handler to be attached.
 * @memberOf sap.ushell.services.Container#
 * @since 1.19.1
 * @public
 */
sap.ushell.services.Container.prototype.attachLogoutEvent = function(fnFunction) { return null; };

/**
 * 
 * Cancels the logon procedure in the current frame, if any. This MUST be used by the
 * logon frame provider in case the user wants to close the logon frame for good.
 * It will report "Authentication cancelled" and let all pending requests for the current
 * realm fail. As a side-effect, it also calls <code>destroy</code> on the logon frame
 * provider.
 * @memberOf sap.ushell.services.Container#
 * @since 1.21.2
 * @public
 * @see sap.ushell.services.Container#setLogonFrameProvider
 */
sap.ushell.services.Container.prototype.cancelLogon = function() { return null; };

/**
 * 
 * Creates a new renderer instance for the given renderer name.
 * <p>
 * Names without a dot are interpreted as package names within the default naming convention
 * and will be expanded to
 * <code>"sap.ushell.renderers." + sRendererName + ".Renderer"</code>.
 * Names containing a dot are used "as is".
 * <p>
 * The resulting name must point to a SAPUI5 object which is first required and then
 * created (constructor call without arguments).
 * The object must be either a control (i.e. extend <code>sap.ui.core.Control</code>) or a
 * UI component (i.e. extend <code>sap.ui.core.UIComponent</code>), which is then
 * automatically wrapped into a <code>sap.ui.core.ComponentContainer</code> control by this
 * method. This <code>sap.ui.core.ComponentContainer</code> is created with
 * <code>height</code> and <code>width</code> set to "100%" to accommodate the complete
 * available space.
 * <p>
 * The returned renderer is supposed to be added to a direct child (for example
 * <code>DIV</code>) of the <code>BODY</code> of the page and there should be no other
 * parts of the page consuming space outside the renderer.
 * Use CSS class <code>sapUShellFullHeight</code> at <code>HTML</code>, <code>BODY</code>
 * and at the element to which the renderer is added to allow the renderer to use 100%
 * height.
 * @param {string} [sRendererName]
 *     The renderer name, such as "standard" or "acme.foo.bar.MyRenderer"; it is taken from
 *     the configuration property <code>defaultRenderer</code> if not given here.
 * @returns {sap.ui.core.Control}
 *     the renderer
 * @memberOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.createRenderer = function(sRendererName) { return new sap.ui.core.Control(); };

/**
 * 
 * Detaches a listener from the logout event.
 * @param  {function} fnFunction
 *     Event handler to be detached.
 * @memberOf sap.ushell.services.Container#
 * @since 1.19.1
 * @public
 */
sap.ushell.services.Container.prototype.detachLogoutEvent = function(fnFunction) { return null; };

/**
 * 
 * Returns the isDirty flag value.
 * @returns {isDirty}
 *      The value of the dirty flag.
 * @memberOf sap.ushell.services.Container#
 * @since 1.27.0
 * @public
 */
sap.ushell.services.Container.prototype.getDirtyFlag = function() { return null; };

/**
 * 
 * Returns the global dirty state.
 * </p><p>
 * All open UShell browser windows for the same origin are asked about their global dirty
 * state.
 * @returns {jQuery.Deferred}
 *     A <code>jQuery.Deferred</code> object's promise receiving the dirty state
 *     (see {@link sap.ushell.Container.DirtyState}).
 * @throws  Raises an exception, if called again before promise is resolved.
 * @memberOf sap.ushell.services.Container#
 * @since 1.21.1
 * @public
 */
sap.ushell.services.Container.prototype.getGlobalDirty = function() { return new jQuery.Deferred(); };

/**
 * 
 * Returns a service with the given name, creating it if necessary.
 * Services are singleton objects identified by their (resulting) name.
 * <p>
 * Names without a dot are interpreted as service names within the default naming convention
 * and will be expanded to <code>"sap.ushell.services." + sServiceName</code>.
 * Names containing a dot are not yet supported. This name may be overridden via
 * configuration. See example 2 below.
 * <p>
 * The resulting name must point to a constructor function which is first required as a
 * SAPUI5 module and then called to create a service instance.
 * The service will be passed to a corresponding service adapter for the current logon system, as well as a callback
 * interface (of virtual type <code>sap.ushell.services.ContainerInterface</code>) to the
 * container providing a method <code>createAdapter(oSystem)</code> to create further
 * adapters for the same service but connected to remote systems.
 * The third parameter will be <code>sParameter</code> as passed to this function.
 * The fourth parameter will be an
 * object with the property <code>config</code> supplied by the configuration. See
 * example 2 below.
 * <p>
 * The adapter for the logon system will be created before the service. Its constructor
 * gets three parameters. The first parameter is the logon system, the second parameter is
 * <code>sParameter</code> and the third parameter is an object with the property
 * <code>config</code> supplied by the configuration.
 * <p>
 * The service may declare itself adapterless by setting the property
 * <code>hasNoAdapter = true</code> at the constructor function. In this case no adapter
 * will be created and passed to the constructor and all other parameters will be shifted.
 * <p>
 * <b>Example 1:</b> The service <code>sap.ushell.services.UserInfo</code> is
 * parameterless. It indicates this by setting
 * <code>sap.ushell.services.UserInfo.hasNoAdapter = true;</code>.
 * <p>
 * <b>Example 2:</b> (Configuration)
 * <pre>
 * window["sap-ushell-config"] = {
 *     services: {
 *         Foo: {
 *             module: "my.own.Foo"
 *             config: {header: "hidden"},
 *             adapter: {
 *                 module: "my.own.FooAdapter",
 *                 config: {foo: "bar"}
 *             }
 *         }
 *     }
 * }
 * oService = sap.ushell.Container.getService("Foo", "runtimeConfig");
 * </pre>
 * Now <code>oService</code> is an instance of <code>my.own.Foo</code>. The third parameter
 * of the constructor will be "runtimeConfig", the fourth parameter
 * <code>{config: {header: "hidden"}}</code>. Its adapter is an instance of
 * <code>my.own.FooAdapter</code> constructed with the parameters logon system,
 * "runtimeConfig" and <code>{config: {foo: "bar"}}</code>.
 * @param {string} sServiceName
 *     The service name, such as "Menu"
 * @param {string} [sParameter]
 *     A parameter which is passed to the service constructor and every adapter
 *     constructor. (since 1.15.0)
 * @returns {object}
 *     the service
 * @memberOf sap.ushell.services.Container#
 * @see sap.ushell.services.ContainerInterface
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.getService = function(sServiceName,sParameter) { return new Object(); };

/**
 * 
 * Logs out the current user from all relevant back-end systems, including the logon system
 * itself.
 * @returns {jQuery.Deferred}
 *          A <code>jQuery.promise</code> to be resolved when logout is finished, even when it fails.
 * @memberOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.logout = function() { return new jQuery.Deferred(); };

/**
 * 
 * Setter for the isDirty flag value.
 * </p><p>
 * Default value is false
 * @param {boolean} [bIsDirty] The value of the dirty flag.
 * @memberOf sap.ushell.services.Container#
 * @default false
 * @since 1.27.0
 * @public
 */
sap.ushell.services.Container.prototype.setDirtyFlag = function(bIsDirty) { return null; };

/**
 * 
 * Determines the current logon frame provider for the entire Unified Shell. Initially,
 * a rudimentary default provider is active and should be replaced as soon as possible
 * by the current renderer.
 * <p>
 * A logon frame provider is used to facilitate user authentication even for requests sent
 * via <code>XMLHttpRequest</code>. It is called back in order to create a hidden
 * <code>IFRAME</code>, to show it to the user, then to hide and destroy it. The frame
 * must be treated as a black box by the provider; especially with respect to the source of
 * the frame which is managed by the Unified Shell framework. Showing the frame might
 * require user interaction and some decoration around the frame. The frame should be
 * destroyed, not reused, to be on the safe side. Note that in typical cases with SAML2,
 * authentication happens automatically and the frame can stay hidden.
 * <p>
 * The following order of method calls is guaranteed:
 * <ol>
 *   <li> The <code>create</code> method is called first.
 *   <li> The <code>show</code> method may be called next (if there is HTML code to
 *   display).
 *   <li> The <code>destroy</code> method is called last.
 *   <li> A new cycle may start for a new logon process.
 * </ol>
 * @param {object} oLogonFrameProvider
 *   The new logon frame provider which needs to implement at least the methods documented
 *   here.
 * @param {function} oLogonFrameProvider.create
 *   A function taking no arguments and returning a DOM reference to an empty
 *   <code>IFRAME</code> which is initially hidden.
 *   The frame must not be moved around in the DOM later on. Make sure to add all necessary
 *   parent objects immediately, to render SAPUI5 controls as needed, and to return the DOM
 *   reference synchronously.
 * @param {function} oLogonFrameProvider.destroy
 *   A function taking no arguments which hides and destroys the current frame.
 * @param {function} oLogonFrameProvider.show
 *   A function taking no arguments which is called to indicate that the current frame
 *   probably needs to be shown to the user because interaction is required. Note that
 *   there may be false positives here. It is up to the provider how and when the frame
 *   is shown exactly; make sure to provide a good user interaction design here.
 * @memberOf sap.ushell.services.Container#
 * @since 1.21.2
 * @public
 * @see sap.ushell.services.Container#cancelLogon
 */
sap.ushell.services.Container.prototype.setLogonFrameProvider = function(oLogonFrameProvider) { return null; };


// ---- sap.ushell.services.ContainerInterface --------------------------------------------------------------------------

/**
 * 
 * @class This is a virtual type for the callback interface passed by
 * {@link sap.ui.Container.getService()} to any newly created service.
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.ContainerInterface = function() {};
/**
 * 
 * For the given remote system, creates a new adapter that corresponds to the service
 * to which this container interface was passed at construction time.
 * @param {sap.ushell.System} oSystem
 *     information about the remote system to which the resulting adapter should
 *     connect
 * @returns {jQuery.Deferred}
 *     A <code>jQuery.Deferred</code> object's promise receiving the remote adapter.
 * @memberOf sap.ushell.services.ContainerInterface#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.ContainerInterface.prototype.createAdapter = function(oSystem) { return new jQuery.Deferred(); };


// ---- sap.ushell.services.CrossApplicationNavigation --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("CrossApplicationNavigation")</code>.
 * Constructs a new instance of the CrossApplicationNavigation service.
 * @class The Unified Shell's CrossApplicationNavigation service, which allows to
 *        navigate to external targets or create links to external targets
 * </p><p>
 * CrossApplicationNavigation currently provides platform independent functionality.
 * </p><p>
 * This interface is for usage by applications or shell renderers/containers.
 * </p><p>
 * Usage:
 * </p><p>
 * example: see demoapps/AppNavSample/MainXML.controller.js
 * </p><p>
 * <code>
 *   var xnavservice =  sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;<br/>
 *      && sap.ushell.Container.getService("CrossApplicationNavigation");<br/>
 *   var href = ( xnavservice && xnavservice.hrefForExternal({<br/>
 *          target : { semanticObject : "Product", action : "display" },<br/>
 *          params : { "ProductID" : "102343333" }<br/>
 *          })) || "";<br/>
 * </code>
 * </p><p>
 * </p><p>
 * Parameter names and values are case sensitive.
 * </p><p>
 * Note that the usage of multi-valued parameters (specifying an array with more than one member as parameter value, e.g.
 * <code>  params : { A : ["a1", "a2"] } </code> )
 * is possible with this API but <b>strongly discouraged</b>. Especially the navigation target matching performed at the back-end
 * is not supported for multi-value parameters. Furthermore, it is not guaranteed that additional parameter values specified in the
 * back-end configuration are merged with parameter values passed in this method.
 * </p><p>
 * Note that the application parameter length (including SemanticObject/Action) shall not exceed 512 bytes when serialized as UTF-8
 * </p><p>
 * Note that when receiving the values as startup parameters (as part of the component data object) single values
 * are represented as an array of size 1. Above example is returned as
 * <code> deepEqual(getComponentData().startupParameters ,  { "ProductID" : [ "102343333" ] } ) </code>
 * </p><p>
 * Make sure not to store security critical data within an URL
 * URLs may appear in a server log, be persisted inside and outside the system.
 * </p><p>
 * Note: When constructing large URLs, the URLs may be shortened and persisted on a database server
 * for prolonged time, the actual data is persisted under a key accessible to any User (guessing the key).
 * </p><p>
 * The same restrictions apply for the Application state
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation = function() {};
/**
 * 
 * using the browser history, this invocation attempts to navigate back to the previous application
 * This functionality simply performs a browser back today.
 * Its behaviour is subject to change.
 * It may not yield the expected result esp. on mobile devices where "back" is the previous
 * inner app state iff these are put into the history!
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.backToPreviousApp = function() { return null; };

/**
 * 
 * Creates an empty app state object which act as a parameter container for
 * cross app navigation.
 * @param {object} oAppComponent - a UI5 component used as context for the app state
 * @return {object} App state Container
 * @since 1.28
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.createEmptyAppState = function(oAppComponent) { return new Object(); };

/**
 * 
 * if sHashFragment is a compacted hash (sap-intent-param is present),
 * in a hash, this function replaces it into a long url wiht all parameters
 * expanded
 * @param {string} sHashFragment
 *   an (internal format) shell hash
 * @returns {object} promise
 *           the success handler of the resolve promise get ans expanded shell hash
 *           as first argument
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.expandCompactHash = function(sHashFragment) { return new Object(); };

/**
 * 
 * Get an app state object given a key
 * A lookup for a cross user app state will be performed.
 * @param {object} oAppComponent - UI5 component, key will be extracted from component data
 * @param {object} sAppStateKey - the application state key
 * @return {object} promise object returning the app state object
 *    Note that this is an unmodifiable container and must be copied into a writable container!
 * @since 1.28
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getAppState = function(oAppComponent,sAppStateKey) { return new Object(); };

/**
 * 
 * Resolves a given semantic object and business parameters to a list of links,
 * taking into account the form factor of the current device.
 * @param {string} sSemanticObject
 *   the semantic object such as <code>"AnObject"</code>
 * @param {object} [mParameters]
 *   the map of business parameters with values, for instance
 *   <pre>
 *   {
 *     A: "B",
 *     c: "e"
 *   }
 *   </pre>
 * @param {boolean} [bIgnoreFormFactor=false]
 *   when set to <code>true</code> the form factor of the current device is ignored
 * @param {Object} [oComponent]
 *    SAP UI5 Component invoking the service
 * @param {string} [sAppStateKey]
 *    application state key to add to the generated links
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with an array of
 *   link objects containing (at least) the following properties:
 * <pre>
 * {
 *   intent: "#AnObject-Action?A=B&C=e",
 *   text: "Perform action"
 * }
 * 
 * </pre>
 * Note: the intent returned is in *internal* format and can not be directly put into a link tag.
 * example: Let the string "C&A != H&M" be a parameter value,
 * Intent will be encoded as<code>#AnObject-Action?text=C%26A%20!%3D%20H%26M<code>.
 * Note that the intent is in *internal* format, before putting it into a link tag, you must invoke:
 * <code>externalHash = oCrossApplicationNavigationService.hrefForExternal({ target : { shellHash :  aLink.intent} }, that.oComponent);</code>
 * @since 1.19.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getSemanticObjectLinks = function(sSemanticObject,mParameters,bIgnoreFormFactor,oComponent,sAppStateKey) { return new Object(); };

/**
 * 
 * Get the app state object that was used for the current cross application navigation
 * @param {object} oAppComponent - UI5 component, key will be extracted from component data
 * @return {object} promise object returning the app state object
 * @since 1.28
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getStartupAppState = function(oAppComponent) { return new Object(); };

/**
 * 
 * performs window.history.back() if supported by the underlying
 * platform.
 * May be a noop if the url is the first url in the browser.
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.historyBack = function() { return null; };

/**
 * 
 * Returns a string which can be put into the DOM (e.g. in a link tag)
 * given an application specific hash suffix
 * </p><p>
 * Example: <code>hrefForAppSpecificHash("View1/details/0/")</code> returns
 * <code>#SemanticObject-Action&/View1/details/0/</code> if the current application
 * runs in the shell and was started using "SemanticObject-Action" as
 * shell navigation hash
 * @param {string} sAppHash
 *   the app specific router, obtained e.g. via router.getURL(...)
 * @returns {string}
 * A string which can be put into the link tag,
 *          containing the current shell navigation target and the
 *          specified application specific hash suffix
 * </p><p>
 * Note that sAppHash shall not exceed 512 bytes when serialized as UTF-8
 * @since 1.15.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.hrefForAppSpecificHash = function(sAppHash) { return ""; };

/**
 * 
 * Returns a string which can be put into the DOM (e.g. in a link tag)
 * @param {object} oArgs
 *     object encoding a semantic object and action
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "Action" },<br/>
 *         params : { A : "B" } }</code>
 *  or
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "Action", context  : "AB7F3C" },<br/>
 *         params : { A : "B", c : "e" } }</code>
 *  or
 *      <code>{ target : { shellHash : "SO-36&jumper=postman" },
 *      }</code>
 * @param {object} [oComponent]
 *   An optional SAP UI5 component
 * @returns {string}
 *     the href for the specified parameters; always starting with a hash character; all parameters are URL-encoded (via encodeURIComponent)
 * </p><p>
 * Note that the application parameter length (including SemanticObject/Action) shall not exceed 512 bytes when serialized as utf-8
 * </p><p>
 * the function can be used to convert an shell hash internal format commonly encountered into the URL format to use in link tags:
 * <code>externalHash = oCrossApplicationNavigationService.hrefForExternal({ target : { shellHash :  aLink.intent} }, that.oComponent);</code>
 * @param {Object} oComponent
 *    a SAP UI5 Component
 * @param {bool} bAsync
 *    if set to true, a promise will be returned instead of the direct argument. 
 *    the promise will only succeed after all compactation requests have been sent
 * @since 1.15.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.hrefForExternal = function(oArgs,oComponent,oComponent,bAsync) { return ""; };

/**
 * 
 * Tells whether the given intent(s) are supported, taking into account the form factor of
 * the current device. "Supported" means that navigation to the intent is possible.
 * @param {string[]} aIntents
 *   the intents (such as <code>"#AnObject-Action?A=B&c=e"</code>) to be checked
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with a map
 *   containing the intents from <code>aIntents</code> as keys. The map values are
 *   objects with a property <code>supported</code> of type <code>boolean</code>.<br/>
 *   Example:
 * <pre>
 * {
 *   "#AnObject-Action?A=B&c=e": { supported: false },
 *   "#AnotherObject-Action2": { supported: true }
 * }
 * </pre>
 * @since 1.19.1
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.isIntentSupported = function(aIntents) { return new Object(); };

/**
 * 
 * </p><p>
 * Navigate to an external target
 * @param {Object} oArgs
 * configuration object describing the target
 * </p><p>
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "Action" },<br/>
 *         params : { A : "B" } }</code>
 *    constructs sth. like   <code>#AnObject-Action?A=B&C=e&C=j</code>;
 *  or
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "Action", context  : "AB7F3C" },<br/>
 *         params : { A : "B", c : "e" } }</code>
 *  or
 *      <code>{ target : { shellHash : "SO-36&jumper=postman" },
 *      }</code>
 * </p><p>
 * and navigate to it via changing the hash
 * </p><p>
 * The actual navigation may occur deferred!
 * </p><p>
 * Note that the application parameter length (including SemanticObject/Action) shall not exceed 512 bytes when serialized as utf-8
 * @param {object} [oComponent]
 *    an optional SAP UI5 Component,
 * @since 1.15.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.toExternal = function(oArgs,oComponent) { return null; };


// ---- sap.ushell.services.EndUserFeedback --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("EndUserFeedback")</code>.
 * Constructs a new instance of the support ticket service.
 * @param {object}
 *            oAdapter the service adapter for the end user feedback service,
 *            as already provided by the container
 * @param {object}
 *            oContainerInterface the interface provided by the container
 * @param {string}
 *            sParameters the runtime configuration specified in the
 *            <code>sap.ushell.Container.getService()</code> call (not
 *            evaluated yet)
 * @param {object}
 *            oServiceConfiguration the service configuration defined in the
 *            bootstrap configuration; the boolean property
 *            <code>enabled</code> controls the service enablement
 * </p><p>
 * This service is disabled by default. It can be enabled explicitly in the
 * bootstrap configuration of the start page:
 * <pre>
 * window[&quot;sap-ushell-config&quot;] = {
 *     services: {
 *         EndUserFeedback: {
 *             config: {
 *                 enabled: true
 *             }
 *         }
 *     }
 * }
 * 
 * Platform implementations can also enable it dynamically by modification of the
 * bootstrap configuration during boot time.
 * @class The Unified Shell's end user feedback service
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.25.1
 * 
 *      
 */
sap.ushell.services.EndUserFeedback = function(oAdapter,oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * 
 * Receives the legal text for the feedback dialog box
 * @param
 * @public
 * @since 1.25.1
 */
sap.ushell.services.EndUserFeedback.prototype.getLegalText = function() { return null; };

/**
 * 
 * Checks if the service is enabled.
 * <p>
 * The service enablement depends on the configuration in the back-end system and the bootstrap configuration.
 * @return {Object} Promise, done = if the service is enabled;
 * @public
 * @since 1.25.1
 */
sap.ushell.services.EndUserFeedback.prototype.isEnabled = function() { return null; };

/**
 * 
 * Sends a feedback. Forwards the given data (JSON object) to the associated adapter.
 * @param {JSON} JSON object containing the input fields required for the support ticket.
 * @public
 * @since 1.25.1
 */
sap.ushell.services.EndUserFeedback.prototype.sendFeedback = function(JSON) { return null; };


// ---- sap.ushell.services.LaunchPage --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("LaunchPage")</code>.
 * Constructs a new instance of the page builder service.
 * @class A service for handling groups, tiles and catalogs.
 * The functions that return the main objects are getGroups, getGroupTitle, getCatalogs and getCatalogTiles.
 * Since the implementation (i.e. adapter) is platform specific, do not call or access properties and functions of returned objects.
 * Instead, use other functions of the LaunchPage service with the relevant object as the input parameter.
 * @param {object} oAdapter
 *     the page builder adapter for the logon system
 * @param {object} oContainerInterface
 *     the interface provided by the container
 * @class The Unified Shell's page builder service.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.LaunchPage = function(oAdapter,oContainerInterface) {};
/**
 * 
 * Adds a new group.
 * </p><p>
 * In case of success, the <code>done</code> function gets the new added group object.
 * Intention: the page builder adds this group to the end of the home screen.
 * </p><p>
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * @param {string} sTitle
 *     The title of the new group
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.addGroup = function(sTitle) { return new Object(); };

/**
 * 
 * Adds a new group at a specific location.
 * </p><p>
 * In case of success, the <code>done</code> function gets the new added group object.
 * Intention: the page builder adds this group to the end of the home screen.
 * </p><p>
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * @param {string} sTitle
 *     The title of the new group
 * @param {intiger} iIndex
 *     the location of the new group
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.addGroupAt = function(sTitle,iIndex) { return new Object(); };

/**
 * 
 * Adds a tile to a group.
 * </p><p>
 * If no group is provided then the tile is added to the default group.
 * </p><p>
 * In case of success, the <code>done</code> function returns the new tile.
 * Intention: the page builder by default puts this tile at the end of the default group.
 * In case of failure, the <code>fail</code> function should return the consistent (i.e. persisted) backend state of the default group.
 * @param {object} oCatalogTile
 *     An 'anonymous' tile from the tile catalog
 * @param {object} [oGroup]
 *     The target group
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.addTile = function(oCatalogTile,oGroup) { return new Object(); };

/**
 * 
 * Returns catalog's technical data.
 * @param {object} oCatalog
 *     the catalog
 * @returns {object}
 *     An object that includes the following properties (the list may include additional properties):
 *     <ul>
 *     <li><code>id</code>: the catalog ID
 *     <li><code>systemId</code>: [remote catalogs] the ID of the remote system
 *     <li><code>remoteId</code>: [remote catalogs] the ID of the catalog in the
 *       remote system
 *     <li><code>baseUrl</code>: [remote catalogs] the base URL of the catalog in the
 *       remote system
 *     </ul>
 * @since 1.21.2
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogData = function(oCatalog) { return new Object(); };

/**
 * 
 * Returns the catalog's technical error message in case it could not be loaded from the
 * backend.
 * <p>
 * <b>Beware:</b> The technical error message is not translated!
 * @param {object} oCatalog
 *     the catalog
 * @returns {string}
 *     The technical error message or <code>undefined</code> if the catalog was loaded
 *     properly
 * @since 1.17.1
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogError = function(oCatalog) { return ""; };

/**
 * 
 * Returns the catalog's unique identifier
 * @param {object} oCatalog
 *     The catalog
 * @returns {string}
 *  Catalog id
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogId = function(oCatalog) { return ""; };

/**
 * 
 * Returns the catalogs of the user.
 * </p><p>
 * <p>
 * Only severe failures make the overall operation fail. If loading of a remote catalog fails,
 * this is handled gracefully by providing a "dummy" empty catalog (with ID instead of title).
 * Use {@link getCatalogError} to check if a (remote) catalog could not be loaded from the backend.
 * <p>
 * Progress notifications are sent for each single catalog, i.e. attaching a <code>progress</code> handler gives you the same
 * possibilities as attaching a <code>done</code> handler, but with the advantage of
 * improved responsiveness.
 * @example
 *   sap.ushell.Container.getService("LaunchPage").getCatalogs()
 *   .fail(function (sErrorMessage) { // string
 *     // handle error situation
 *   })
 *   .progress(function (oCatalog) { // object
 *     // do s.th. with single catalog
 *   })
 *   .done(function (aCatalogs) { // object[]
 *     aCatalogs.forEach(function (oCatalog) {
 *       // do s.th. with single catalog
 *     });
 *   });
 * @returns {object}
 *  <code>jQuery.Deferred</code> object's promise
 *   In case of success, an array of black-box catalog objects is provided (which might be empty).
 *   In case of failure, an error message is passed.
 *   Progress notifications are sent for each single catalog, providing a single black-box catalog object each time.
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogs = function() { return new Object(); };

/**
 * 
 * Returns catalog tile's unique identifier.
 * This function may be called for a catalog tile or (since 1.21.0) for a group tile.
 * In the latter case, the function returns the unique identifier of the catalog tile on which the group tile is based.
 * @param {object} oTile
 *     The tile or the catalog tile
 * @returns {string}
 *  Tile id
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileId = function(oTile) { return ""; };

/**
 * 
 * Returns the keywords associated with a catalog tile which can be used to find the
 * catalog tile in a search.
 * @param {object} oCatalogTile
 *      The catalog tile
 * @returns string[]
 *      The keywords associated with this catalog tile
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileKeywords = function(oCatalogTile) { return null; };

/**
 * 
 * Returns preview icon for a catalog tile.
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {string}
 *     Preview icon as URL/URI for the catalog tile's underlying application as provided via the "preview" contract
 * @since 1.16.3
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTilePreviewIcon = function(oCatalogTile) { return ""; };

/**
 * 
 * Returns preview title for a catalog tile.
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {string}
 *     Preview title for the catalog tile's underlying application as provided via the
 *     "preview" contract
 * @since 1.16.3
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTilePreviewTitle = function(oCatalogTile) { return ""; };

/**
 * 
 * Returns the tiles of a catalog.
 * In case of success, the <code>done</code> function of the returned promise object gets an array of 'anonymous' tiles of the catalog.
 * @param {object} oCatalog
 *     The catalog
 * @returns {object}
 *  jQuery.promise object.
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTiles = function(oCatalog) { return new Object(); };

/**
 * 
 * Returns the size of a catalog tile as a string. For example: "1x1", "1x2"
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {string}
 *  Tile size in units in 1x1 or 1x2 format
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileSize = function(oCatalogTile) { return ""; };

/**
 * 
 * Returns the tags associated with a catalog tile which can be used to find the
 * catalog tile in a tag filter.
 * @param {object} oCatalogTile
 *      The catalog tile
 * @returns string[]
 *      The tags associated with this catalog tile
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTags = function(oCatalogTile) { return null; };

/**
 * 
 * Returns the navigation target URL of a catalog tile.
 * If the catalog tile does not exist, this function implicitly instantiates it using {@link #getCatalogTileView(oCatalogTile)}.
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {string}
 *     The target URL for the catalog tile's underlying application as provided via the
 *     "preview" contract
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTargetURL = function(oCatalogTile) { return ""; };

/**
 * 
 * Returns the catalog tile's title
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {string}
 *  Tile title
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTitle = function(oCatalogTile) { return ""; };

/**
 * 
 * Returns the UI5 view or control  of a catalog tile
 * @param {object} oCatalogTile
 *     The catalog tile
 * @returns {object}
 *  UI5 view or control
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileView = function(oCatalogTile) { return new Object(); };

/**
 * 
 * Returns the catalog's title
 * @param {object} oCatalog
 *     The catalog
 * @returns {string}
 *  Catalog title
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTitle = function(oCatalog) { return ""; };

/**
 * 
 * Returns the default group of the user.
 * In case of success, the <code>done</code> function gets an 'anonymous' object representing the default group.
 * @returns {object}
 *  jQuery.promise object.
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getDefaultGroup = function() { return new Object(); };

/**
 * 
 * Returns the unique identifier of the given group
 * @param {object} oGroup
 *     The group whose id is returned
 * @returns {string}
 *  Group id
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getGroupId = function(oGroup) { return ""; };

/**
 * 
 * Returns the groups of the user.
 * In case of success, the <code>done</code> function gets an array of 'anonymous' groups.
 * The order of the array is the order in which the groups will be displayed to the user.
 * @returns {object}
 *  jQuery.promise object.
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getGroups = function() { return new Object(); };

/**
 * 
 * Returns an array of 'anonymous' tiles of a group.
 * The order of the array is the order of tiles that will be displayed to the user.
 * @param {object} oGroup
 *     The group whose tiles are returned
 * @returns {Array}
 *  The group tiles array
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getGroupTiles = function(oGroup) { return null; };

/**
 * 
 * Returns the title of the given group.
 * @param {object} oGroup
 *     The group whose title is returned
 * @returns {string}
 *  group title
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getGroupTitle = function(oGroup) { return ""; };

/**
 * 
 * Returns the tile's unique identifier
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *     Tile id
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getTileId = function(oTile) { return ""; };

/**
 * 
 * Returns the tile size in the format of 1x1 or 1x2 string
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *  tile size in units in 1x1 format
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getTileSize = function(oTile) { return ""; };

/**
 * 
 * Returns the tile's navigation target.
 * </p><p>
 * The navigation target string is used (when assigned to <code>location.hash</code>) for performing a navigation action
 *  that eventually opens the application represented by the tile.
 * @param {object} oTile
 *     the tile
 * @returns {string}
 *  the tile target
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getTileTarget = function(oTile) { return ""; };

/**
 * 
 * Returns the tile's title.
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *     The title
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getTileTitle = function(oTile) { return ""; };

/**
 * 
 * Returns UI5 view or control of the tile.
 * In case of success the <code>done</code> function should return UI5 view or control of the tile.
 * In case of failure the <code>fail</code> function should return nothing.
 * @param {object} oTile
 *     The tile
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.getTileView = function(oTile) { return new Object(); };

/**
 * 
 * Returns whether the catalogs collection previously returned by <code>getCatalogs()</code> is still valid.
 * </p><p>
 * Initially the result is <code>false</code> until <code>getCatalogs()</code> has been called.
 * Later, the result might be <code>false</code> again in case one of the catalogs has been invalidated,
 * e.g. due to adding a tile to a catalog ("Add to catalog" scenario).
 * @returns {boolean} <code>true</code> in case the catalogs are still valid; <code>false</code> if not
 * @since 1.16.4
 * @see #getCatalogs
 * @public
 */
sap.ushell.services.LaunchPage.prototype.isCatalogsValid = function() { return false; };

/**
 * 
 * Checks if a group was marked as locked (meaning the group and its tiles will lack several capabilities such as Rename, Drag&Drop...).
 * </p><p>
 * Returns <code>true</code> if the group is locked
 * and <code>false</code> if not.
 * @param {object} oGroup
 *     The group to be checked
 * @returns {boolean}
 *  <code>true</code> if locked; <code>false</code> if not (or as default in case the function was not implemented in the proper adapter).
 * @public
 */
sap.ushell.services.LaunchPage.prototype.isGroupLocked = function(oGroup) { return false; };

/**
 * 
 * Checks if a group can be removed.
 * </p><p>
 * Returns <code>true</code> if the group can be removed (i.e. if the given group was created by the user)
 * and <code>false</code> if the group can only be reset.
 * @param {object} oGroup
 *     The group to be checked
 * @returns {boolean}
 *  <code>true</code> if removable; <code>false</code> if resettable
 * @public
 */
sap.ushell.services.LaunchPage.prototype.isGroupRemovable = function(oGroup) { return false; };

/**
 * 
 * Moves a group to a new index (i.e. location).
 * </p><p>
 * In case of success, the <code>done</code> function is called without any value.
 * Intention: the page builder already moved the page (visible to the user) and if successful - nothing needs to be done.
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * @param {object} oGroup
 *     The group to be moved
 * @param {integer} iNewIndex
 *     The new index for the group
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.moveGroup = function(oGroup,iNewIndex) { return new Object(); };

/**
 * 
 * Moves a tile within a group or between different groups.
 * </p><p>
 * In case of success, the <code>done</code> function returns nothing.
 * Intention: the page builder already moved the tile.
 * </p><p>
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of the source group and the target group.
 * The result is in the following format {source:[{},{}], target:[{},{}]}.
 * </p><p>
 * The source and the target groups tiles are in the form of the @see sap.ushell.services.LaunchPage.getGroupTiles
 * @param {object} oTile
 *     a tile instance to be moved
 *     The same object type as the one returned by <code>sap.ushell.services.LaunchPage.getGroupTiles</code>
 * @param {integer} iSourceIndex
 *     the index in the source group
 * @param {integer} iTargetIndex
 * the target group index, in case this parameter is not supplied we assume the move tile is within the source group using iSourceIndex
 * @param {object} oSourceGroup
 *     the source group the tile came from
 * @param {object} [oTargetGroup]
 *    The same object type as the one returned by <code>sap.ushell.services.LaunchPage.getGroups</code>
 *    the target group the tile will be placed in, in case this
 *     parameter is not supplied we assume the move tile is within the source group
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.moveTile = function(oTile,iSourceIndex,iTargetIndex,oSourceGroup,oTargetGroup) { return new Object(); };

/**
 * 
 * Triggers a refresh action of a tile.
 * Typically this action is related to the value presented in dynamic tiles
 * @param {object} oTile
 *      The tile
 * @public
 */
sap.ushell.services.LaunchPage.prototype.refreshTile = function(oTile) { return null; };

/**
 * 
 * Removes a group.
 * </p><p>
 * In case of success, the <code>done</code> function is called without any value (i.e. input data).
 * Intention: the page builder already removed the page (or hid it from the user) and if successful - nothing needs to be done.
 * </p><p>
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * @param {object} oGroup
 *     The group to be removed
 * @param {integer} iIndex
 *     The index of the group to be removed
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.removeGroup = function(oGroup,iIndex) { return new Object(); };

/**
 * 
 * Removes a tile from a group.
 * </p><p>
 * In case of success, the <code>done</code> function returns the new tile.
 * Intention: the page builder has already 'hidden' (or removed) the tile.
 * </p><p>
 * In case of failure, the <code>fail</code> function should return the consistent (i.e. persisted) backend state of the group.
 * @param {object} oTile
 *     The tile instance to remove
 * @param {object} oGroup
 *     The group from which to remove the tile instance
 * @param {integer} iIndex
 *     The tile index
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.removeTile = function(oTile,oGroup,iIndex) { return new Object(); };

/**
 * 
 * Resets a group.
 * </p><p>
 * The reset action is relevant for a group that was assigned to the user by an administrator.
 * The reset action means that the group is set back to the state defined by the administrator,
 * and changes made by the end user (e.g. adding tiles) are removed.
 * A group can be reset multiple times.
 * </p><p>
 * In case of success, the <code>done</code> function gets the reset group object.
 * </p><p>
 * In case of failure, or when the given group was created by the user (i.e. can't be reset)- <code>fail</code> handler is called,
 * returning the consistent (i.e. persisted) backend state of all groups.
 * The returned group object is the same as the one returned by @see sap.ushell.services.LaunchPage.getGroups
 * @param {object} oGroup
 *     The group to be reset
 * @param {integer} iIndex
 *     The index of the group to be reset
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.resetGroup = function(oGroup,iIndex) { return new Object(); };

/**
 * 
 * Sets the title of an existing group.
 * </p><p>
 * In case of success, the <code>done</code> function returns nothing.
 * Intention: the page builder knows the new title, and if successful nothing needs to be done,
 *  as the title is already visible to the user.
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state
 *  of the group title, in most cases the old title.
 * @param {string} sTitle
 *     The new title of the group
 * @param {object} oGroup
 *     The group whose title is set
 * @returns {object}
 *  jQuery.promise object
 * @public
 */
sap.ushell.services.LaunchPage.prototype.setGroupTitle = function(sTitle,oGroup) { return new Object(); };

/**
 * 
 * Sets the tile's visibility state and notifies the tile about the change.
 * @param {object} oTile
 *     The tile
 * @param {boolean} bNewVisible
 *   The tile's required visibility state.
 * @public
 */
sap.ushell.services.LaunchPage.prototype.setTileVisible = function(oTile,bNewVisible) { return null; };


// ---- sap.ushell.services.Message --------------------------------------------------------------------------

/**
 * 
 * Message service.
 * @constructor
 * @since 1.16.0
 * @public
 */
sap.ushell.services.Message = function() {};
/**
 * 
 * Shows an confirmation dialog on the screen.
 * </p><p>
 * The callback is called with the following signature: <code>function(oAction)</code>
 * where oAction is the button that the user has tapped. For example, when the user has pressed the close button, a sap.m.MessageBox.Action.Close is returned.
 * </p><p>
 * If no actions are provided, OK and Cancel will be shown. In this case oAction is set by one of the following three values:
 * 1. sap.m.MessageBox.Action.OK: OK (confirmed) button is tapped.
 * 2. sap.m.MessageBox.Action.Cancel: Cancel (unconfirmed) button is tapped.
 * 3. null: Confirm dialog is closed by Calling sap.m.InstanceManager.closeAllDialogs()
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {function} fnCallback
 *      callback function
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * @param {sap.m.MessageBox.Action|sap.m.MessageBox.Action[]|string|string[]} [vActions]
 *       Either a single action, or an array of two actions. If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter. If more than two actions are given, only the first two actions are taken. Custom action string(s) can be provided, and then the translation of custom action string(s) needs to be done by the application.
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.confirm = function(sMessage,fnCallback,sTitle,vActions) { return null; };

/**
 * 
 * Shows an error message on the screen.
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.error = function(sMessage,sTitle) { return null; };

/**
 * 
 * Shows an info message on the screen.
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {int} [iDuration=3000]
 *      display duration in ms (optional)
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.info = function(sMessage,iDuration) { return null; };


// ---- sap.ushell.services.NavTargetResolution --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("NavTargetResolution")</code>.
 * Constructs a new instance of the navigation target resolution service.
 * @class The Unified Shell's internal navigation target resolution service
 * </p><p>
 * Methods in this class deal with *internal* representations of the shell hash.
 * </p><p>
 * configurations:
 * <code>config : { allowTestUrlComponentConfig  : true }</code>
 * allow to redefine the Test-url, Test-local1, Test-local2 applications via url parameters
 * (sap-ushell-test-local1-url=  / sap-ushell-test-local1-additionalInformation=  ... )
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @param {oServiceConfiguration} a Service configuration
 * @public
 */
sap.ushell.services.NavTargetResolution = function(a,oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * 
 * expands a URL hash fragment
 * </p><p>
 * This function gets the hash part of the URL and expands a sap-intent-param if present
 * and retrievable
 * </p><p>
 * This is an asynchronous operation.
 * @param {string} sHashFragment
 *     The formatted URL hash fragment in internal format(as obtained by the SAPUI5 hasher service,
 *     not as given in <code>location.hash</code>)
 * @returns {object}
 *     A jQuery.Promise. Its <code>done()</code> function gets an expanded shell hash
 *     (in internal format)
 * @public
 */
sap.ushell.services.NavTargetResolution.prototype.expandCompactHash = function(sHashFragment) { return new Object(); };

/**
 * 
 * Resolves the URL hash fragment.
 * </p><p>
 * This function should be used by a custom renderer in order to implement custom navigation.
 * Do not use this function for developing Fiori applications.
 * </p><p>
 * This function gets the hash part of the URL and returns data of the target application.
 * Example of the returned data:
 *    {"additionalInformation": "SAPUI5.Component=sap.ushell.renderers.fiori2.search.container",
 *    "applicationType": "URL",
 *    "url": "/sap/bc/ui5_ui5/ui2/ushell/resources/sap/ushell/renderers/fiori2/search/container"}
 * </p><p>
 * This is an asynchronous operation.
 * @param {string} sHashFragment
 *     The formatted URL hash fragment in internal format (as obtained by the SAPUI5 hasher service)
 *     not as given in <code>location.hash</code>)!
 * @returns {object}
 *     A jQuery.Promise. Its <code>done()</code> function gets an object that you can use
 *     to create a {@link sap.ushell.components.container.ApplicationContainer}
 *     or <code>undefined</code> in case the hash fragment was empty.
 * @public
 */
sap.ushell.services.NavTargetResolution.prototype.resolveHashFragment = function(sHashFragment) { return new Object(); };


// ---- sap.ushell.services.Personalization --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("Personalization")</code>.
 * Constructs a new instance of the personalization service.
 * @param {object} oAdapter
 *            the service adapter for the personalization service,
 *            as already provided by the container
 * @class The Unified Shell's personalization service, which provides a
 *        personalizer object that handles all personalization operations.
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 */
sap.ushell.services.Personalization = function(oAdapter,oContainerInterface,sParameter,oConfig) {};
/**
 * 
 * Factory method to obtain an empty Data Context object.
 * When data present in a prior context is not relevant
 * (e.g. when using a "uniquely" generated key and planning to
 * overwrite any colliding front-end server data).
 * </p><p>
 * The call always returns an cleared container().
 * </p><p>
 * Note that an existing container at the front-end server is not actually deleted or overwritten
 * unless a save operation is executed.
 * </p><p>
 * </p><p>
 * An initial object is returned.
 * @param {string}
 *            sContainerKey - identifies the container
 *            The string length is restricted to 40 characters
 * @param {Object} oScope - scope object
 *            currently the validity property of the scope object is relevant:
 *            E.g. <code> { validity : 30}</code> indicates a validity of the data for 30 minutes.<br/>
 *            oScope.validity : validity of the container persistence in minutes
 *              valid values include 0 ( per FLP Window),
 *                           Infinity, undefined  ( Backend persistence per user ) [Default]
 *                           nn Minutes ( Backend persistence per user, ignored if older than nn minutes)
 * @param {sap.ui.component} oComponent
 *           Since 1.27.0.
 *           SAPUI5 component which uses the container. This allows to associate the stored
 *           data with the application.
 * @returns {object} Promise object whose done function returns a
 *            {@link sap.ushell.services.Personalization.ContextContainer} object
 *            as parameter. The personalization container provides two different
 *            interfaces to synchronously operate on personalization data.
 *            In the item mode the container contains items as name value pairs for
 *            personalization data.
 *            In the variant mode the container contains variant sets which contain
 *            variants containing items.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.prototype.createEmptyContainer = function(sContainerKey,oScope,oComponent) { return new Object(); };

/**
 * 
 * Asynchronously starts a deletion request for the given container identified by
 * sContainerKey. Can be called without having ever called getContainer with the corresponding key
 * </p><p>
 * Note: After invoking this operation, the state of other Containers
 * obtained for the same key is undefined!
 * If you want to use the container after deletion, it is strongly recommended to obtain
 * a new instance of a container for the given key *after* the promise has returned.
 * </p><p>
 * Note: Invoking this operation while another save or load operation is under way may result in failure.
 * @param {string} sContainerKey
 *           identifies the container
 * @returns {object}
 *          promise for the deletion operation
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.prototype.delContainer = function(sContainerKey,oScope) { return new Object(); };

/**
 * 
 * @deprecated Please use getContainer / delContainer
 * Asynchronously starts a deletion request for the given container identified by
 * sContainerKey. Can be called without having ever created a personalization container.
 * </p><p>
 * Note: After invoking this operation, the state of other PersonalizationContainers
 * obtained for the same key is undefined!
 * If you want to use the container after deletion, it is strongly recommended to obtain
 * a new instance of PersonalizationContainer for the given key *after* the promise has returned.
 * </p><p>
 * Note: Invoking this operation while another save or load operation is under way may result in failure.
 * @param {string} sContainerKey
 *           identifies the container
 * @returns {object}
 *          promise for the deletion operation
 * @deprecated
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.prototype.delPersonalizationContainer = function(sContainerKey) { return new Object(); };

/**
 * 
 * Factory method to obtain a Data Context object,
 * which is a local copy of the persistence layer data.
 * The Container data is asynchronously read on creation if present,
 * otherwise an initial object is created.
 * The Container data can then be *synchronously* modified (getItemValue, setItemValue).
 * Only on invoking  the save()/saveDeferred() method the data is transferred to the persistence.
 * This allows the application to perform multiple local modifications and
 * delay the save operation.
 * </p><p>
 * Every getContainer operation returns a new local copy, containing the full data at the point of creation.
 * </p><p>
 * Executing load() on the container reloads the data from the persistence, discarding local changes.
 * </p><p>
 * Note that the container allows the application to
 * control the round trips to the front-end server persistence. The factory method
 * getContainer is asynchronous and loads the container via
 * the connected adapter from the front-end server. All operations (but for the
 * save operation) are executed synchronously, operating on the local data.
 * This allows the application to control the round trips to the front-end server
 * persistence.
 * </p><p>
 * A container can contain a set of items, identified by a key.
 * </p><p>
 * You can wrap a container in a VariantSetAdapter to read and write
 * a more complex structure (with multiple keys (variantSet,variant,item)).
 * </p><p>
 * Do not mix up the usage of a personalizer and a container
 * for one containerKey.
 * Do not use a PersonalizationContainer and a Container for the same key except for migration scenarios.
 * </p><p>
 * scope / validity parameter (@since 1.22.0):
 *   An unspecified (undefined validity) or infinite (Infinity) validity indicates that data is persisted in the
 *   Personalization data of the front-end server. A round trip is executed on an initial get and at least every save operation.
 *   Data is stored per user and retained indefinitely at the front-end server.
 * </p><p>
 *   The validity parameter allows a designated storage validity for the created container.
 *   A 0 validity indicates the data is only persisted within the Fiori Launchpad window.
 *   No round trips to the front-end server are executed. Data is lost if the Fiori Launchpad window state is lost
 *   (e.g. by navigating to a different page, pressing F5 (reload page) or duplicating the window).
 * </p><p>
 *   For versions > 1.24 it may happen that for cross-app navigation a reload of the Fiori Launchpad is triggered.
 *   In this case a storage of the personalization data in the Fiori lauchpad window would lead to data loss.
 *   To overcome this a validity 0 is automatically changed to a validity 1440 (24h; storage on the front-end server).
 *   This is only done if a relaod of the Fiori Launchpad is triggered for a cross-app navigation.
 * </p><p>
 * Security: It is the responsibility of the application to not persist information relevant to auditing or security
 * using the PersonalizationService with inappropriate validity models. No mechanisms exist
 * to destroy or selectively destroy application-specific data in the front-end server persistence (especially for validity Infinity).
 * </p><p>
 * For non-zero validity scopes, data will be transmitted and persisted in the front-end server system.
 * </p><p>
 * For limited validity, actual deletion of data on the front-end server is subject to explicit cleanup execution of front-end server jobs
 * and not guaranteed. The data may still be persisted and retrievable. The interface only assures that expired data is no longer
 * exposed to the application code in the Fiori Launchpad.
 * </p><p>
 * The ContainerKey uniquely defines the Container, validity is not part of the key (there are no separate
 * namespaces per validity).
 * </p><p>
 * In general, mixing different validity models for a given container key is not supported.
 * Fast chaining of different methods may source arbitrary persistence layers.
 * The validity of the resulting object in the done function of a promise is the last get validity.
 * </p><p>
 * The validity associated with the last getContainer or createEmptyContainer determines
 * the current validity of the container and the validity used during the next save operation.
 * </p><p>
 * Naturally, if a delete or get with validity 0 is issued, it will *not* delete or retrieve a front-end server persistent
 * storage
 * Thus a sequence  delete( [validity 0])/wait for promise, getContainer(sKey,{ validity : Infinity}) may return a valid dataset.
 * @param {string}
 *            sContainerKey - identifies the container
 *            The string length is restricted to 40 characters
 * @param {Object} oScope - scope object<br/>
 *            currently the validity property of the scope object is relevant:
 *            E.g. <code> { validity : 30}</code> indicates a validity of the data for 30 minutes.<br/>
 *            oScope.validity : validity of the container persistence in minutes<br/>
 *              valid values include 0 ( per FLP Window), <br/>
 *                           Infinity, undefined  (front-end server persistence per user ) [Default] <br/>
 *                           nn Minutes (front-end server persistence per user, ignored if older than nn minutes)
 * @param {sap.ui.component} oComponent
 *           Since 1.27.0.
 *           SAPUI5 component which uses the container. This allows to associate the stored
 *           data with the application.
 * @returns {object} Promise object whose done function returns a
 *            {@link sap.ushell.services.Personalization.ContextContainer} object
 *            as parameter. The container provides setItemValue / getItemValue methods
 *            to synchronously operate on personalization data.
 *            By wrapping it in a VariantSetAdapter, an alternate interface to maintain variants can be obtained.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.prototype.getContainer = function(sContainerKey,oScope,oComponent) { return new Object(); };

/**
 * 
 * Returns a generated key
 * @returns {string}
 *            40 character string consisting of A-Z and 0-9 which can be used as a generated key for personalization
 *            container. Every invocation returns a new key.
 *            NOTE: Don't use substrings of this key as random keys
 * @public
 * @since 1.28.0
 */
sap.ushell.services.Personalization.prototype.getGeneratedKey = function() { return ""; };

/**
 * 
 * This interface is deprecated since 1.22,
 * please use getContainer / delContainer.
 * </p><p>
 * Note: the underlying storage model for Objects stored with getContainer / getPersonalizationContainer
 * is identical.<br/>
 * Thus you can safely migrate your client implementation from the deprecated getContainer to
 * getPersonalizationContainer without loss of data.
 * One may even run mixed set of applications on the same container keys.
 * The sole differences are w.r.t. client side handling of the Context data within one session.
 * </p><p>
 * If you want to use the variant interface, use the following pattern
 * <code>
 *  getContainer(sContainerKey).done(function(oContainer) {
 *     var variantSetAdapter = new sap.ushell.services.Personalization.VariantSetAdapter(oContainer);
 * }
 * </code>
 * </p><p>
 * </p><p>
 * Factory method to obtain a personalization container
 * object which is a client-local buffer for personalization data.
 * The Container data is asynchronously read on creation (if present,
 * otherwise an initial object is created).
 * The Container data can then be *synchronously* modified (read/write/delete).
 * Only on invoking  the save() method the data is persisted at the front-end server.
 * This allows the application to perform multiple local modifications and
 * delay the save operation.
 * Note that the personalization container allows the application to
 * control the round trips to the front-end server persistence. The factory method
 * getPersonalizationContainer is asynchronous and loads the container via
 * the connected adapter from the front-end server. All operations (but for the
 * save operation) are executed synchronously, operating on the local data.
 * This allows the application to control the round trips to the front-end server
 * persistence.
 * </p><p>
 * A personalization container can contain items as well as variant sets.
 * Variant sets have the following structure:
 * variantSet.variant.item
 * A variant set is enclosing several variants of the same data.
 * </p><p>
 * Example: An application has two types of variants.
 * Variant type 1 contains filter values for a query, which are stored in item 1 of
 * the variant, and personalization data for a table, which are stored in item 2
 * of the variant.
 * Variant type 2 contains a setting (item 3) that is independent of
 * the filtering and the table settings. It might be used for a different
 * screen than the variants of type 1.
 * In this example you would have 2 variant sets, one for each variant type.
 * </p><p>
 * Do not mix up the usage of a personalizer and a personalization container
 * for one containerKey.
 * @param {string}
 *            sContainerKey - identifies the container
 * @returns {object} Promise object whose done function returns a
 *            {@link sap.ushell.services.PersonalizationContainer} object
 *            as parameter. The personalization container provides two different
 *            interfaces to synchronously operate on personalization data.
 *            In the item mode the container contains items as name-value pairs for
 *            personalization data.
 *            In the variant mode the container contains variant sets which contain
 *            variants containing items.
 * @deprecated use getContainer()
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.prototype.getPersonalizationContainer = function(sContainerKey) { return new Object(); };

/**
 * 
 * Returns a personalizer object which handles personalization by
 * asynchronous operations storing the personalization data immediately via
 * the connected adapter. For each operation a round trip is executed.
 * </p><p>
 * Do not mix the usage of a personalizer and a personalization container
 * for one containerKey.
 * @param {object} oPersId
 *            JSON object consisting of the following parts:
 *            container - Identifies the set of personalization data that is
 *            loaded/saved as one bundle from the front-end server. item - The
 *            name of the object the personalization is applied to.
 * @param {object} oScope - scope object<br/>
 *            currently the validity property of the scope object is relevant:
 *            oScope.validity : validity of the container persistence in minutes<br/>
 *            oScope.keyCategory : Type or category of key<br/>
 *            oScope.writeFrequency : Expected frequency how often users will use this container to store data inside<br/>
 *            oScope.clientStorageAllowed : Defines if storage on client side should be allowed or not<br/>
 *            E.g. <code> { validity : 30}</code> indicates a validity of the data for 30 minutes.
 * @param {sap.ui.component} oComponent
 *           Since 1.27.0.
 *           SAPUI5 component which uses the personalizer. This allows to associate the stored
 *           data with the application.
 * @returns {object}
 *            {@link sap.ushell.services.Personalizer} which provides generic read and
 *            write access to the currently logged on user's personalization
 *            settings.
 * @public
 * @since 1.15.0
 */
sap.ushell.services.Personalization.prototype.getPersonalizer = function(oPersId,oScope,oComponent) { return new Object(); };

/**
 * 
 * Returns a transient personalizer object which handles personalization by
 * asynchronous operations storing the personalization data transiently as
 * an object property. Primary usage of the transient personalizer is a
 * personalization scenario with variants where the transient personalizer
 * is used as a buffer for table personalization data.
 * @returns {object}
 *            {@link sap.ushell.services.TransientPersonalizer} which
 *            provides asynchronous read and write access to a transient personalization data storage.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.prototype.getTransientPersonalizer = function() { return new Object(); };


// ---- sap.ushell.services.Personalization.ContextContainer --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization service getContainer method.
 * @class The container is the anchor object of the unified shell
 *        personalization in container mode.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer = function(oService,oAdapter,sContainerKey,oScope,oComponent) {};
/**
 * 
 * Returns an array with all internal  keys of direct items in the container.
 * @returns {array}
 *             item keys
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype._getInternalKeys = function() { return null; };

/**
 * 
 * clears the local copy data of this container
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.clear = function() { return null; };

/**
 * 
 * Checks if a specific direct item is contained in the container.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a direct item with the key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.containsItem = function(sItemKey) { return false; };

/**
 * 
 * Deletes a direct item from the container.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.delItem = function(sItemKey) { return null; };

/**
 * 
 * flush all pending request;
 * The result of the promise may reflect the last pending operation in the queue
 * @returns {object} promise
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.flush = function() { return new Object(); };

/**
 * 
 * Returns an array with the keys of direct items in the container.
 * @returns {array}
 *             item keys
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getItemKeys = function() { return null; };

/**
 * 
 * Returns the value for a direct item from the container.
 * (Value semantics, new copy is returned)
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the container does not contain a direct item with this key
 * <code>undefined</code> is returned.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * 
 * return the container key as a string variable
 * @returns {string} the container key
 * @public
 * @since 1.28.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getKey = function() { return ""; };

/**
 * 
 * Return an instance unmodifiable container instance. There is one instance of this wrapper
 * per container. It will permit all read accesses to the container, but block all
 * modifying accesses.
 * @returns {object}
 *      unmodifiable wrapper instance
 * @public
 * @since 1.28.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getUnmodifiableContainer = function() { return new Object(); };

/**
 * 
 * return the validity of this container
 * @deprecated only for testing!
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getValidity = function() { return null; };

/**
 * 
 * (Re)loads the current container data from the underlying storage asynchronously.
 * The current local data is discarded.
 * </p><p>
 * Returns a promise for the load operation.
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * </p><p>
 * Synchronous read and write operations before the load is done have undefined
 * effects.
 * @returns {object}
 *          Promise object
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.load = function() { return new Object(); };

/**
 * 
 * Attempts to save the current container data at the underlying storage asynchronously.
 * The current state is serialized.
 * @returns {object}
 *             Promise object
 * </p><p>
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.save = function() { return new Object(); };

/**
 * 
 * Save the current container data at the underlying storage asynchronously at the earlies
 * nDelayInMilliseconds seconds before.
 * The current state is serialized.
 * @returns {object}
 *             Promise object
 * </p><p>
 * The operation may wait for completion of another pending operation.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.saveDeferred = function(nDelayInMilliseconds) { return new Object(); };

/**
 * 
 * Sets the value of a direct item in the container.
 * In case the item is already existing its value is overwritten. In case it is not
 * existing a new item with this key and value is created.
 * The value is serialized during set
 * @param {string} sItemKey
 *            item key
 *            The string length is restricted to 40 characters
 * @param {object} sItemValue
 *            item value (JSON object)
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.ContextContainer.prototype.setItemValue = function(sItemKey,sItemValue) { return null; };


// ---- sap.ushell.services.Personalization.Variant --------------------------------------------------------------------------

/**
 * 
 * To be instantiated via Personalization.VariantSet  add / get Variant only
 * @class The personalization variant contains personalization data.
 *        It is used in the personalization container mode.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.Variant = function(oVariantSet,sVariantKey,sVariantName) {};
/**
 * 
 * Checks if a specific item is contained in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the variant contains an item with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.Variant.prototype.containsItem = function(sItemKey) { return false; };

/**
 * 
 * Deletes an item from this variant.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.Variant.prototype.delItem = function(sItemKey) { return null; };

/**
 * 
 * Returns an array with the keys of all items in this variant.
 * @returns {array}
 *            item keys
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.Variant.prototype.getItemKeys = function() { return null; };

/**
 * 
 * Returns the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the variant does not contain an item with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.Variant.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * 
 * Returns the key of this variant.
 * @returns {string}
 *             variant key.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.Variant.prototype.getVariantKey = function() { return ""; };

/**
 * 
 * Returns the name of this variant.
 * @returns {string}
 *             variant name.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.Variant.prototype.getVariantName = function() { return ""; };

/**
 * 
 * Sets the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @param {object}
 *            item value (JSON object)
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.Variant.prototype.setItemValue = function(sItemKey,item) { return null; };

/**
 * 
 * Sets the name of the variant.
 * </p><p>
 * In case a variant with <code>sVariantName</code> is already existing in the corresponding variant set an exception is thrown.
 * @param {string} sVariantName
 *          variant name
 * @public
 * @since 1.24.0
 */
sap.ushell.services.Personalization.Variant.prototype.setVariantName = function(sVariantName) { return null; };


// ---- sap.ushell.services.Personalization.VariantSet --------------------------------------------------------------------------

/**
 * 
 * A VariantSet is a class representing a collection of
 * Variants (identified by a key and name)
 * and a member variable indicating the
 * "current variable"
 * </p><p>
 * When manipulating the underlying data, additional constraints are enforced.
 * </p><p>
 * To be called by the personalization container.
 * @class The personalization variant set contains variants of personalization data.
 *        It is used in the personalization container mode.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet = function(sVariantSetKey,oContextContainer) {};
/**
 * 
 * Creates a new variant in the variant set.
 * In case a variant with this name is already existing an exception is thrown.
 * @param {string} sVariantSetName
 *            variant set name
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.addVariant = function(sVariantSetName) { return new Object(); };

/**
 * 
 * Checks if a specific variant is contained in the variant set.
 * @param {string} sVariantKey
 *            variant key
 * @returns {boolean}
 *            <tt>true</tt> if the variant set contains a variant with the key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.containsVariant = function(sVariantKey) { return false; };

/**
 * 
 * Deletes a variant from the variant set.
 * In case the variant does not exist nothing happens.
 * @param {string} sVariantKey
 *            variant key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.delVariant = function(sVariantKey) { return null; };

/**
 * 
 * Returns the current variant key.
 * @returns {string}
 *             current variant key. In case the current variant was never set <code>null</code> is returned.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.getCurrentVariantKey = function() { return ""; };

/**
 * 
 * Returns a variant object.
 * @param {string} sVariantKey
 *            variant key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}.
 *            In case the variant set does not contain a variant with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariant = function(sVariantKey) { return new Object(); };

/**
 * 
 * Returns the variant key corresponding to a variant name.
 * @param {string} sVariantName
 *            variant name
 * @returns {string}
 *            variant key. In case the variant set does not contain a variant with this name
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariantKeyByName = function(sVariantName) { return ""; };

/**
 * 
 * Returns an array with the keys of the variants in the variant set.
 * @returns {array}
 *             variant keys
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariantKeys = function() { return null; };

/**
 * 
 * Sets the current variant key.
 * @param {string} sVariantKey
 *            There is no validity check for the variant key.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSet.prototype.setCurrentVariantKey = function(sVariantKey) { return null; };


// ---- sap.ushell.services.Personalization.VariantSetAdapter --------------------------------------------------------------------------

/**
 * 
 * VariantSetAdapter
 * amends ContextContainer with functionality to
 * </p><p>
 * Example: An application has two types of variants.
 * Variant type 1 contains filter values for a query, which are stored in item 1 of
 * the variant, and personalization data for a table, which are stored in item 2
 * of the variant.
 * Variant type 2 contains a setting (item 3) that is independent of
 * the filtering and the table settings. It might be used for a different
 * screen than the variants of type 1.
 * In this example you would have 2 variant sets, one for each variant type.
 * @class Wrapper object to expose a variant interface on a
 *        ContextContainer object obtained from the Peronalization service:
 *        <code>
 *        getContainer(...).done( function(oContainer) {
 *           that.oVariantSetContainer = new sap.ushell.services.Personalization.VariantSetAdapater(oContainer);
 *           });
 *        </code>
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.VariantSetAdapter = function(oContextContainer) {};
/**
 * 
 * Creates a new variant set in the container.
 * In case a variant set with this key is already existing an exception is thrown.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariantSet}
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.addVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * 
 * Checks if a specific variant set is contained in the container.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a variant set with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.containsVariantSet = function(sVariantSetKey) { return false; };

/**
 * 
 * Deletes a variant set from the container.
 * In case the variant set does not exist nothing happens.
 * @param {string} sVariantSetKey
 *            variant set key
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.delVariantSet = function(sVariantSetKey) { return null; };

/**
 * 
 * Returns the variant set object from the container.
 * @param {string} sVariantSetKey
 *            variant set key
 *            The string length is restricted to 40 characters
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariantSet}.
 *            In case the container does not contain a variant set with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.22.0
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.getVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * 
 * Returns an array with the keys of the variant sets in the container.
 * @returns {array}
 *             variant set keys
 * @public
 * @since 1.18.0
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.getVariantSetKeys = function() { return null; };


// ---- sap.ushell.services.PersonalizationContainer --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization service getPersonalizationContainer method.
 * @class The personalization container is the anchor object of the unified shell
 *        personalization in container mode.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer = function(oAdapter,sContainerKey) {};
/**
 * 
 * Creates a new variant set in the container.
 * In case a variant set with this key is already existing an exception is thrown.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariantSet}
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.addVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * 
 * Checks if a specific direct item is contained in the container.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a direct item with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.containsItem = function(sItemKey) { return false; };

/**
 * 
 * Checks if a specific variant set is contained in the container.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a variant set with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.containsVariantSet = function(sVariantSetKey) { return false; };

/**
 * 
 * Deletes a direct item from the container.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.delItem = function(sItemKey) { return null; };

/**
 * 
 * Deletes a variant set from the container.
 * In case the variant set does not exist nothing happens.
 * @param {string} sVariantSetKey
 *            variant set key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.delVariantSet = function(sVariantSetKey) { return null; };

/**
 * 
 * Returns an array with the keys of direct items in the container.
 * @returns {array}
 *             item keys
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.getItemKeys = function() { return null; };

/**
 * 
 * Returns the value for a direct item from the container.
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the container does not contain a direct item with this key
 * <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * 
 * Returns the variant set object from the container.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariantSet}.
 *            In case the container does not contain a variant set with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.getVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * 
 * Returns an array with the keys of the variant sets in the container.
 * @returns {array}
 *             variant set keys
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.getVariantSetKeys = function() { return null; };

/**
 * 
 * (Re)loads the current container data from the underlying storage asynchronously.
 * The current local data is discarded.
 * </p><p>
 * Returns a promise for the load operation.
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * </p><p>
 * Synchronous read and write operations before the load is done have undefined
 * effects.
 * @returns {object}
 *          Promise object
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.load = function() { return new Object(); };

/**
 * 
 * Attempts to save the current container data at the underlying storage asynchronously.
 * The current state is serialized.
 * @returns {object}
 *             Promise object
 * </p><p>
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.save = function() { return new Object(); };

/**
 * 
 * Sets the value of a direct item in the container.
 * In case the item is already existing its value is overwritten. In case it is not
 * existing a new item with this key and value is created.
 * @param {string} sItemKey
 *            item key
 * @param {object} sItemValue
 *            item value (JSON object)
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainer.prototype.setItemValue = function(sItemKey,sItemValue) { return null; };


// ---- sap.ushell.services.PersonalizationContainerVariant --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization variant set.
 * @class The personalization variant contains personalization data.
 *        It is used in the personalization container mode.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant = function(sVariantKey,sVariantName,oVariantData) {};
/**
 * 
 * Checks if a specific item is contained in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the variant contains an item with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.containsItem = function(sItemKey) { return false; };

/**
 * 
 * Deletes an item from this variant.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.delItem = function(sItemKey) { return null; };

/**
 * 
 * Returns an array with the keys of all items in this variant.
 * @returns {array}
 *            item keys
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getItemKeys = function() { return null; };

/**
 * 
 * Returns the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the variant does not contain an item with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * 
 * Returns the key of this variant.
 * @returns {string}
 *             variant key.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getVariantKey = function() { return ""; };

/**
 * 
 * Returns the name of this variant.
 * @returns {string}
 *             variant name.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getVariantName = function() { return ""; };

/**
 * 
 * Sets the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @param {object}
 *            item value (JSON object)
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.setItemValue = function(sItemKey,item) { return null; };


// ---- sap.ushell.services.PersonalizationContainerVariantSet --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization container.
 * @class The personalization variant set contains variants of personalization data.
 *        It is used in the personalization container mode.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet = function(sVariantSetKey,oAdapterContainer) {};
/**
 * 
 * Creates a new variant in the variant set.
 * In case a variant with this name is already existing an exception is thrown.
 * @param {string} sVariantSetName
 *            variant set name
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.addVariant = function(sVariantSetName) { return new Object(); };

/**
 * 
 * Checks if a specific variant is contained in the variant set.
 * @param {string} sVariantKey
 *            variant key
 * @returns {boolean}
 *            <tt>true</tt> if the variant set contains a variant with the key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.containsVariant = function(sVariantKey) { return false; };

/**
 * 
 * Deletes a variant from the variant set.
 * In case the variant does not exist nothing happens.
 * @param {string} sVariantKey
 *            variant key
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.delVariant = function(sVariantKey) { return null; };

/**
 * 
 * Returns the current variant key.
 * @returns {string}
 *             current variant key. In case the current variant was never set <code>null</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getCurrentVariantKey = function() { return ""; };

/**
 * 
 * Returns a variant object.
 * @param {string} sVariantKey
 *            variant key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}.
 *            In case the variant set does not contain a variant with this key
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariant = function(sVariantKey) { return new Object(); };

/**
 * 
 * Returns the variant key corresponding to a variant name.
 * @param {string} sVariantName
 *            variant name
 * @returns {object}
 *            variant key. In case the variant set does not contain a variant with this name
 *            <code>undefined</code> is returned.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariantKeyByName = function(sVariantName) { return new Object(); };

/**
 * 
 * Returns an array with the keys of the variants in the variant set.
 * @returns {array}
 *             variant keys
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariantKeys = function() { return null; };

/**
 * 
 * Sets the current variant key.
 * @param {string} sVariantKey
 *            There is no validity check for the variant key.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.setCurrentVariantKey = function(sVariantKey) { return null; };


// ---- sap.ushell.services.Personalizer --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization service getPersonalizer method.
 * @class The Unified Shell personalizer providing set get delete
 *        methods to access the persisted personalization data in direct mode.
 * @public
 * @since 1.15.0
 */
sap.ushell.services.Personalizer = function(oService,oAdapter,oPersId,oScope,oComponent) {};
/**
 * 
 * Deletes a personalization data value.
 * @returns {object}
 *          Promise object which returns if the deletion was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise object fail function: param {string} sMessage
 *          Error message.
 * @public
 * @since 1.15.0
 */
sap.ushell.services.Personalizer.prototype.delPersData = function() { return new Object(); };

/**
 * 
 * Gets a personalization data value.
 * @returns {object}
 *          Promise object which provides the personalization value.
 *          Promise object done function: param {object} oValue JSON
 *          object containing the personalization value. If there is no
 *          personalization data for the item, undefined is returned. Promise
 *          object fail function: param {string} sMessage Error message.
 * @public
 * @since 1.15.0
 */
sap.ushell.services.Personalizer.prototype.getPersData = function() { return new Object(); };

/**
 * 
 * Sets a personalization data value.
 * @param {object} oValue
 *          JSON object containing the personalization value.
 * @returns {object}
 *          Promise object which returns if the saving was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise object fail function: param {string} sMessage
 *          Error message
 * @public
 * @since 1.15.0
 */
sap.ushell.services.Personalizer.prototype.setPersData = function(oValue) { return new Object(); };


// ---- sap.ushell.services.SupportTicket --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("SupportTicket")</code>.
 * Constructs a new instance of the support ticket service.
 * @param {object}
 *            oAdapter the service adapter for the support ticket service,
 *            as already provided by the container
 * @param {object}
 *            oContainerInterface the interface provided by the container
 * @param {string}
 *            sParameters the runtime configuration specified in the
 *            <code>sap.ushell.Container.getService()</code> call (not
 *            evaluated yet)
 * @param {object}
 *            oServiceConfiguration the service configuration defined in the
 *            bootstrap configuration; the boolean property
 *            <code>enabled</code> controls the service enablement
 * </p><p>
 * This service is disabled by default. It can be enabled explicitly in the
 * bootstrap configuration of the start page:
 * <pre>
 * window[&quot;sap-ushell-config&quot;] = {
 *     services: {
 *         SupportTicket: {
 *             config: {
 *                 enabled: true
 *             }
 *         }
 *     }
 * }
 * 
 * Platform implementations can also enable it dynamically by modification of the
 * bootstrap configuration during boot time.
 * @class The Unified Shell's Support Ticket service
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.19.1
 * 
 *      
 */
sap.ushell.services.SupportTicket = function(oAdapter,oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * 
 * Creates a Support Ticket. Forwards the given data (JSON object) to the associated adapter.
 * @param {JSON} JSON object containing the input fields required for the support ticket.
 * @public
 * @since 1.20.0
 */
sap.ushell.services.SupportTicket.prototype.createTicket = function(JSON) { return null; };

/**
 * 
 * Checks if the service is enabled.
 * <p>
 * The service enablement depends on the configuration in the back-end system and the bootstrap configuration. 
 * @return {boolean} <code>true</code> if the service is enabled; <code>false</code> otherwise
 * @public
 * @since 1.20.0
 */
sap.ushell.services.SupportTicket.prototype.isEnabled = function() { return false; };


// ---- sap.ushell.services.TransientPersonalizer --------------------------------------------------------------------------

/**
 * 
 * To be called by the personalization service getTransientPersonalizer method.
 * @class The transient personalizer shall be used
 *        in container mode for table personalization.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer = function() {};
/**
 * 
 * Deletes a personalization data value.
 * @returns {object}
 *          Promise object which returns if the deletion was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise object fail function ins never triggered.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer.prototype.delPersData = function() { return new Object(); };

/**
 * 
 * Gets a personalization data value.
 * @returns {object}
 *          Promise object which provides the personalization
 *          value. Promise object done function: param {object} oValue JSON
 *          object containing the personalization value. If there is no
 *          personalization data for the item, undefined is returned.
 *          Promise object fail function ins never triggered.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer.prototype.getPersData = function() { return new Object(); };

/**
 * 
 * Synchronously gets a personalization data value.
 * @returns {object}
 *            JSON object containing the personalization value.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer.prototype.getValue = function() { return new Object(); };

/**
 * 
 * Sets a personalization data value.
 * @param {object} oValue
 *          JSON object containing the personalization value.
 * @returns {object}
 *          Promise object which returns if the saving was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise fail function ins never triggered.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer.prototype.setPersData = function(oValue) { return new Object(); };

/**
 * 
 * Synchronously sets a personalization data value.
 * @param {object} oValue
 *            JSON object containing the personalization value.
 * @public
 * @since 1.18.0
 */
sap.ushell.services.TransientPersonalizer.prototype.setValue = function(oValue) { return null; };


// ---- sap.ushell.services.URLParsing --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("URLParsing")</code>.
 * Constructs a new instance of the URL parsing service.
 * @class The Unified Shell's internal URL parsing service (platform independent)
 * </p><p>
 * Methods in this class allow to break down a shell compliant hash into it's respective parts
 * (SemanticObject,Action,Context, Parameters, appSpecificHash) or (ShellPart,appSpecificHash) respectively
 * or construct a hash from its constituents.
 * </p><p>
 * All methods deal with the *internal* shellHash format.
 * </p><p>
 * Most of the parse methods are robust w.r.t. a leading "#".
 * </p><p>
 * Note: The functions were designed with a "truthy" behaviour for not present values,
 * Thus a client should not rely on the difference between null, "undefined", "" when testing for the
 * result of a parse action.
 * </p><p>
 * The parsing functions are deliberately restrictive and fragile,
 * only shell compliant hashes are parsed correctly,
 * behaviour for non-compliant hashes is undefined and subject to change,
 * notably we do not aim do "degrade" nicefully or support partial parsing of corrupted urls.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.URLParsing = function() {};
/**
 * 
 * Makes the given server-relative service URL point to the system given as parameter
 * <code>sSystem</code> or to the system of the current application if <code>sSystem</code>
 * is empty.
 * <em>Server-relative URL</em> means a URL starting with exactly one "/" (also known as
 * absolute-path URL). <em>System of the current application</em> is the value of the
 * business parameter <code>sap-system</code> with which the application is started.
 * <p>
 * Applications must call this API for any service URL with empty parameter
 * <code>sSystem</code> to create service URLs which respect the system of the current
 * application. They may call this API with non-empty parameter <code>sSystem</code> if
 * application specific logic is to determine the target system for service calls.
 * <p>
 * With service URLs converted using this API, administrators can redirect service
 * calls to servers other than the Unified Shell frontend server via SAP Web
 * Dispatcher or SAP Gateway configuration.
 * <p>
 * The system is added via segment parameter <code>o</code> to the last URL segment of the
 * service URL. It is also possible to make this function put the system to a different
 * URL path segment of the service URL by specifying the empty segment parameter
 * <code>o</code>, e.g. <code>/sap/opu/odata/MyService;o=/MyEntities/$count?p1=v1</code>.
 * If both <code>sSystem</code> is empty and the current application has
 * no system, no system is added and the empty segment parameter <code>o</code> is removed.
 * <br/>
 * <b>Example 1:</b> <code>/sap/opu/odata/MyService/?p1=v1</code> is converted to
 * <code>/sap/opu/odata/MyService;o=SYS/?p1=v1</code> if the current application's system
 * is &quot;SYS&quot;.
 * However it remains unchanged if the both the current application's system <em>and</em>
 * the parameter <code>sSystem</code> are empty.<br/>
 * <b>Example 2:</b> <code>/sap/opu/odata/MyService;o=/MyEntities/$count?p1=v1</code> is
 * converted to
 * <code>/sap/opu/odata/MyService;o=sid(SYS.123)/MyEntities/$count?p1=v1</code> if
 * parameter <code>sSystem</code> is set to &quot;sid(SYS.123)&quot;</code>.
 * <p>
 * The URL is in no way normalized.
 * @param {string} sServiceUrl
 *   a server-relative URL without system alias information
 * @param {string} [sSystem]
 *   a system specification like &quot;SYS&quot; or &quot;sid(SYS.123)&quot;; if empty the
 *   system of the current application is used
 * @returns {string}
 *   the service URL pointing to the system specified in parameter <code>sSystem</code> or
 *   to the system of the current application
 * @public
 * @since 1.19.1
 * @throws Error if the URL is not server-relative (e.g. <code>./something</code>,
 *   <code>http://foo.bar/something</code>, ...)
 */
sap.ushell.services.URLParsing.prototype.addSystemToServiceUrl = function(sServiceUrl,sSystem) { return ""; };

/**
 * 
 * compose a shell Hash from it's respective parts
 * Note that it also may append an app specific route !
 * @returns {string}
 *  the hash part of an URL, e.g. <code>"Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH</code>
 *  returns "" for an undefined object
 * @param {object} oShellHash
 *   <code>undefined </code> if not a parseable hash
 *   <code> { target : { semanticObject : string,<br/>
 *                       action : string,<br/>
 *                       contextRaw : string<br/>
 *                     },<br/>
 *            params :  MapObject<String,Array[String]>,<br/>
 *            appSpecificRoute : string<br/>
 *          }<br/>
 *    </code>
 *    xor
 *   <code> { target : { shellHash }<br/>
 *          }
 *    </code>
 * @since 1.16.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.constructShellHash = function(oShellHash) { return ""; };

/**
 * 
 * Extract a hash part from an URL, including an app-specific part
 * @param {String} sURL
 *   any value
 * @returns {String}
 *   <code>extracted string</code> if and only if a hash is present, undefined otherwise
 * @since 1.16.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.getHash = function(sURL) { return null; };

/**
 * 
 * combine members of a javascript object into a
 * parameter string,
 * note that parameters are ordered in an arbitrary manner
 * which is subject to change
 * @param {Object} oParams
 *   any value { ABC : [1,"1 2"], DEF : ["4"]}
 * @returns {String}
 *   <code>ABC=1&ABC=1%202DEF=4</code>
 *   Note that the result is *not* prefixed with a "?",
 *   parameter values are encodeURIComponent encoded.
 * @since 1.20.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.paramsToString = function(oParams) { return null; };

/**
 * 
 * parse parameters from a uri query string (starting with ?)
 * into a parameter object
 * @params {String} sParams
 *   Parameter string, e.g. <code>?ABC=1&ABC=1%202DEF=4</code>
 * @returns {Object} oParams
 *   any value { ABC : ["1","1 2"], DEF : ["4"]}
 * @since 1.20.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.parseParameters = function(sParams) { return null; };

/**
 * 
 * Decompose a shell hash into the respective parts
 * @param {String} sHash
 *  Hash part of a shell compliant URL
 *  <code>#SO-Action~Context?P1=a&P2=x&/route?RPV=1</code>
 *  the hash part of an URL, <br/> e.g. <code>"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH</code>
 * </p><p>
 *  Note that params always has an Array for each parameter value!
 * @returns {object}
 *   <code>undefined </code> if not a parseable hash <br/>
 *   <code> { semanticObject : string, <br/>
 *            action : string, <br/>
 *            contextRaw : string, <br/>
 *            params :  MapObject<String,Array[String]>, <br/>
 *            appSpecificRoute : string <br/>
 *          }
 *  </code>
 * @since 1.16.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.parseShellHash = function(sHash) { return new Object(); };

/**
 * 
 * split a Unified Shell compliant hash into an Object containing a shell specific part and an app specific parts</br>
 * for non compliant hash strings, the empty object {} is returned.
 * an optional leading # is stripped
 * @param {String} sHash
 *  Hash part of a shell conformant URL
 *  {code}#SO-Action~Context?P1=a&P2=x&/route?RPV=1{code}
 *  the hash part of an URL, e.g. {code}"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH{code}
 * </p><p>
 *  Note that params always has an Array for each parameter value!
 * @returns {object}
 *   <code>{}</code>(empty object) if not a parseable hash
 *   <code>{ shellPart : "Object-name~AFE2==?PV1=PV2&PV4=V5",<br/>
 *            appSpecificRoute : "display/detail/7?UU=HH"<br/>
 *         }</br>
 *    </code> otherwise
 * @since 1.16.0
 * @public
 */
sap.ushell.services.URLParsing.prototype.splitHash = function(sHash) { return new Object(); };


// ---- sap.ushell.services.UserInfo --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("UserInfo")</code>.
 * Constructs a new instance of the user information service.
 * @class The Unified Shell's user information service, which allows you to retrieve
 *     information about the logged-in user.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.16.3
 * @public
 */
sap.ushell.services.UserInfo = function(oAdapter,oContainerInterface) {};
/**
 * 
 * Returns the id of the user.
 * @returns {string}
 *   The user id.
 * @since 1.16.3
 * @public
 */
sap.ushell.services.UserInfo.prototype.getId = function() { return ""; };


// ---- sap.ushell.System --------------------------------------------------------------------------

/**
 * 
 * Constructs a new system object representing a system used in the Unified Shell.
 * @param {object} oData
 *     An object containing the system data
 * @param {string} oData.alias
 *     The unique system alias such as <code>'ENTERPRISE_SEARCH'</code>.
 * @param {string} oData.baseUrl
 *     The server relative base URL of this system such as <code>'/ENTERPRISE_SEARCH'</code>.
 *     <b>Note:</b> This has to correspond to an SAP Web Dispatcher routing rule.
 * @param {string} oData.platform
 *         The system platform such as <code>'abap'</code> or <code>'hana'</code>.
 * @class A representation of a system
 * @constructor
 * @since 1.15.0
 * @public
 */
sap.ushell.System = function(oData) {};

// ---- sap.ushell.ui --------------------------------------------------------------------------


// ---- sap.ushell.ui.footerbar --------------------------------------------------------------------------


// ---- sap.ushell.ui.footerbar.AddBookmarkButton --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/footerbar/AddBookmarkButton.
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
 * <li>{@link #getBeforePressHandler beforePressHandler} : any</li>
 * <li>{@link #getAfterPressHandler afterPressHandler} : any</li>
 * <li>{@link #getAppData appData} : object</li></ul>
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
 * A button to be displayed in the foot-bar of the application. Saves the app state, so that you can launch the app in this state directly from the Launchpad.
 * @extends sap.m.Button
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.footerbar.AddBookmarkButton = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.footerbar.AddBookmarkButton with name <code>sClassName</code> 
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
sap.ushell.ui.footerbar.AddBookmarkButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>afterPressHandler</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>afterPressHandler</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getAfterPressHandler = function() { return null; };

/**
 * 
 * Getter for property <code>appData</code>.
 * </p><p>
 * appData is an object which contains the application information for the tile-saving dialog via the following properties:
 * beforePressHandler, afterPressHandler, title, subtitle, info, tileIcon, numberUnit, keywords, customUrl, serviceUrl, serviceRefreshInterval, showGroupSelection.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>appData</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getAppData = function() { return new Object(); };

/**
 * 
 * Getter for property <code>beforePressHandler</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>beforePressHandler</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getBeforePressHandler = function() { return null; };

/**
 * 
 * Setter for property <code>afterPressHandler</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oAfterPressHandler  new value for property <code>afterPressHandler</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setAfterPressHandler = function(oAfterPressHandler) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * 
 * Setter for property <code>appData</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oAppData  new value for property <code>appData</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setAppData = function(oAppData) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * 
 * Setter for property <code>beforePressHandler</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oBeforePressHandler  new value for property <code>beforePressHandler</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setBeforePressHandler = function(oBeforePressHandler) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };


// ---- sap.ushell.ui.footerbar.EndUserFeedback --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/footerbar/EndUserFeedback.
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
 * <li>{@link #getShowAnonymous showAnonymous} : boolean (default: true)</li>
 * <li>{@link #getShowLegalAgreement showLegalAgreement} : boolean (default: true)</li>
 * <li>{@link #getShowCustomUIContent showCustomUIContent} : boolean (default: true)</li>
 * <li>{@link #getFeedbackDialogTitle feedbackDialogTitle} : string</li>
 * <li>{@link #getTextAreaPlaceholder textAreaPlaceholder} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomUIContent customUIContent} : sap.ui.core.Control[]</li></ul>
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
 * Add your documentation for the newui/footerbar/EndUserFeedback
 * @extends sap.m.Button
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.footerbar.EndUserFeedback = function(sId,mSettings) {};
/**
 * 
 * Adds some customUIContent <code>oCustomUIContent</code> 
 * to the aggregation named <code>customUIContent</code>.
 * @param {sap.ui.core.Control}
 *            oCustomUIContent the customUIContent to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.addCustomUIContent = function(oCustomUIContent) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Destroys all the customUIContent in the aggregation 
 * named <code>customUIContent</code>.
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.destroyCustomUIContent = function() { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.footerbar.EndUserFeedback with name <code>sClassName</code> 
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
sap.ushell.ui.footerbar.EndUserFeedback.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>customUIContent</code>.<br/>
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getCustomUIContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>feedbackDialogTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>feedbackDialogTitle</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getFeedbackDialogTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>showAnonymous</code>.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showAnonymous</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getShowAnonymous = function() { return false; };

/**
 * 
 * Getter for property <code>showCustomUIContent</code>.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCustomUIContent</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getShowCustomUIContent = function() { return false; };

/**
 * 
 * Getter for property <code>showLegalAgreement</code>.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegalAgreement</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getShowLegalAgreement = function() { return false; };

/**
 * 
 * Getter for property <code>textAreaPlaceholder</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>textAreaPlaceholder</code>
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.getTextAreaPlaceholder = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>customUIContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCustomUIContent the customUIContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.indexOfCustomUIContent = function(oCustomUIContent) { return 0; };

/**
 * 
 * Inserts a customUIContent into the aggregation named <code>customUIContent</code>.
 * @param {sap.ui.core.Control}
 *          oCustomUIContent the customUIContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customUIContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the customUIContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the customUIContent is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.insertCustomUIContent = function(oCustomUIContent,iIndex) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>customUIContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.removeAllCustomUIContent = function() { return new Array(); };

/**
 * 
 * Removes an customUIContent from the aggregation named <code>customUIContent</code>.
 * @param {int | string | sap.ui.core.Control} vCustomUIContent the customUIContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed customUIContent or null
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.removeCustomUIContent = function(vCustomUIContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>feedbackDialogTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFeedbackDialogTitle  new value for property <code>feedbackDialogTitle</code>
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.setFeedbackDialogTitle = function(sFeedbackDialogTitle) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Setter for property <code>showAnonymous</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowAnonymous  new value for property <code>showAnonymous</code>
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.setShowAnonymous = function(bShowAnonymous) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Setter for property <code>showCustomUIContent</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowCustomUIContent  new value for property <code>showCustomUIContent</code>
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.setShowCustomUIContent = function(bShowCustomUIContent) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Setter for property <code>showLegalAgreement</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegalAgreement  new value for property <code>showLegalAgreement</code>
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.setShowLegalAgreement = function(bShowLegalAgreement) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };

/**
 * 
 * Setter for property <code>textAreaPlaceholder</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTextAreaPlaceholder  new value for property <code>textAreaPlaceholder</code>
 * @return {sap.ushell.ui.footerbar.EndUserFeedback} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.footerbar.EndUserFeedback.prototype.setTextAreaPlaceholder = function(sTextAreaPlaceholder) { return new sap.ushell.ui.footerbar.EndUserFeedback(); };


// ---- sap.ushell.ui.launchpad --------------------------------------------------------------------------


// ---- sap.ushell.ui.launchpad.GroupHeaderActions --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/GroupHeaderActions.
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
 * <li>{@link #getIsOverflow isOverflow} : boolean (default: false)</li>
 * <li>{@link #getTileActionModeActive tileActionModeActive} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getOverflowCtrl overflowCtrl} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.GroupHeaderActions#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/GroupHeaderActions
 * @extends sap.ui.core.Control
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.GroupHeaderActions = function(sId,mSettings) {};
/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.afterRendering = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.addContent = function(oContent) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Adds some overflowCtrl <code>oOverflowCtrl</code> 
 * to the aggregation named <code>overflowCtrl</code>.
 * @param {sap.ui.core.Control}
 *            oOverflowCtrl the overflowCtrl to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.addOverflowCtrl = function(oOverflowCtrl) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.GroupHeaderActions</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupHeaderActions</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupHeaderActions</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.attachAfterRendering = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.destroyContent = function() { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Destroys all the overflowCtrl in the aggregation 
 * named <code>overflowCtrl</code>.
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.destroyOverflowCtrl = function() { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.GroupHeaderActions</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.detachAfterRendering = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.GroupHeaderActions with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.GroupHeaderActions.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterRendering to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.fireAfterRendering = function(mArguments) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>isOverflow</code>.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isOverflow</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.getIsOverflow = function() { return false; };

/**
 * 
 * Getter for aggregation <code>overflowCtrl</code>.<br/>
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.getOverflowCtrl = function() { return new Array(); };

/**
 * 
 * Getter for property <code>tileActionModeActive</code>.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>tileActionModeActive</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.getTileActionModeActive = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>overflowCtrl</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oOverflowCtrl the overflowCtrl whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.indexOfOverflowCtrl = function(oOverflowCtrl) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.insertContent = function(oContent,iIndex) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Inserts a overflowCtrl into the aggregation named <code>overflowCtrl</code>.
 * @param {sap.ui.core.Control}
 *          oOverflowCtrl the overflowCtrl to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the overflowCtrl should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the overflowCtrl is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the overflowCtrl is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.insertOverflowCtrl = function(oOverflowCtrl,iIndex) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>overflowCtrl</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.removeAllOverflowCtrl = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an overflowCtrl from the aggregation named <code>overflowCtrl</code>.
 * @param {int | string | sap.ui.core.Control} vOverflowCtrl the overflowCtrl to remove or its index or id
 * @return {sap.ui.core.Control} the removed overflowCtrl or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.removeOverflowCtrl = function(vOverflowCtrl) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>isOverflow</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsOverflow  new value for property <code>isOverflow</code>
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.setIsOverflow = function(bIsOverflow) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };

/**
 * 
 * Setter for property <code>tileActionModeActive</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bTileActionModeActive  new value for property <code>tileActionModeActive</code>
 * @return {sap.ushell.ui.launchpad.GroupHeaderActions} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.GroupHeaderActions.prototype.setTileActionModeActive = function(bTileActionModeActive) { return new sap.ushell.ui.launchpad.GroupHeaderActions(); };


// ---- sap.ushell.ui.launchpad.LoadingDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/LoadingDialog.
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
 * <li>{@link #getIconUri iconUri} : sap.ui.core.URI</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.BusyDialog#constructor sap.m.BusyDialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays a loading dialog with an indicator that an app is loading
 * @extends sap.m.BusyDialog
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.LoadingDialog = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.LoadingDialog with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.LoadingDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>iconUri</code>.
 * the sap-icon://-style URI of an icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconUri</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.LoadingDialog.prototype.getIconUri = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for property <code>iconUri</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconUri  new value for property <code>iconUri</code>
 * @return {sap.ushell.ui.launchpad.LoadingDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.LoadingDialog.prototype.setIconUri = function(sIconUri) { return new sap.ushell.ui.launchpad.LoadingDialog(); };


// ---- sap.ushell.ui.launchpad.SearchResultAppItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchResultAppItem.
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
 * <li>{@link #getSearchTerm searchTerm} : string</li>
 * <li>{@link #getTargetUrl targetUrl} : sap.ui.core.URI</li></ul>
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
 * Add your documentation for the newui/launchpad/SearchResultAppItem
 * @extends sap.m.Button
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.SearchResultAppItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultAppItem with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchResultAppItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>searchTerm</code>.
 * the search term used for searching apps. Occurrences of this search term in the app title are highlighted
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>searchTerm</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.getSearchTerm = function() { return ""; };

/**
 * 
 * Getter for property <code>targetUrl</code>.
 * The app's target URL for navigating to the app
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>targetUrl</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.getTargetUrl = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for property <code>searchTerm</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSearchTerm  new value for property <code>searchTerm</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.setSearchTerm = function(sSearchTerm) { return new sap.ushell.ui.launchpad.SearchResultAppItem(); };

/**
 * 
 * Setter for property <code>targetUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sTargetUrl  new value for property <code>targetUrl</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.setTargetUrl = function(sTargetUrl) { return new sap.ushell.ui.launchpad.SearchResultAppItem(); };


// ---- sap.ushell.ui.launchpad.SearchResultApps --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchResultApps.
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
 * <li>{@link #getShowGrowingTrigger showGrowingTrigger} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getResults results} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Table#constructor sap.m.Table}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A list containing all app search results
 * @extends sap.m.Table
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.SearchResultApps = function(sId,mSettings) {};
/**
 * 
 * Adds some result <code>oResult</code> 
 * to the aggregation named <code>results</code>.
 * @param {sap.ui.core.Control}
 *            oResult the result to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.addResult = function(oResult) { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Destroys all the results in the aggregation 
 * named <code>results</code>.
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.destroyResults = function() { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultApps with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchResultApps.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>results</code>.<br/>
 * all found Applications
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.getResults = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showGrowingTrigger</code>.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGrowingTrigger</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.getShowGrowingTrigger = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>results</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oResult the result whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.indexOfResult = function(oResult) { return 0; };

/**
 * 
 * Inserts a result into the aggregation named <code>results</code>.
 * @param {sap.ui.core.Control}
 *          oResult the result to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the result should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the result is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the result is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.insertResult = function(oResult,iIndex) { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>results</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.removeAllResults = function() { return new Array(); };

/**
 * 
 * Removes an result from the aggregation named <code>results</code>.
 * @param {int | string | sap.ui.core.Control} vResult the result to remove or its index or id
 * @return {sap.ui.core.Control} the removed result or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.removeResult = function(vResult) { return new sap.ui.core.Control(); };

/**
 * 
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.resetGrowing = function() { return null; };

/**
 * 
 * Setter for property <code>showGrowingTrigger</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGrowingTrigger  new value for property <code>showGrowingTrigger</code>
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.setShowGrowingTrigger = function(bShowGrowingTrigger) { return new sap.ushell.ui.launchpad.SearchResultApps(); };


// ---- sap.ushell.ui.launchpad.SearchSuggestionList --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchSuggestionList.
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
 * <li>{@link #getDisableKeyboardNavigation disableKeyboardNavigation} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressEsc pressEsc} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressUpFirstItem pressUpFirstItem} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionList
 * @extends sap.m.List
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.SearchSuggestionList = function(sId,mSettings) {};
/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.pressEsc = function(oControlEvent) { return null; };

/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.pressUpFirstItem = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.attachPressEsc = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.attachPressUpFirstItem = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.detachPressEsc = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.detachPressUpFirstItem = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionList with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchSuggestionList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event pressEsc to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.firePressEsc = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Fire event pressUpFirstItem to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.firePressUpFirstItem = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Getter for property <code>disableKeyboardNavigation</code>.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>disableKeyboardNavigation</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.getDisableKeyboardNavigation = function() { return false; };

/**
 * 
 * Setter for property <code>disableKeyboardNavigation</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisableKeyboardNavigation  new value for property <code>disableKeyboardNavigation</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.setDisableKeyboardNavigation = function(bDisableKeyboardNavigation) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };


// ---- sap.ushell.ui.launchpad.SearchSuggestionListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchSuggestionListItem.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIsGroupFooter isGroupFooter} : boolean (default: false)</li>
 * <li>{@link #getCategorySeperator categorySeperator} : string (default: '/')</li>
 * <li>{@link #getCategoryFirstSeperator categoryFirstSeperator} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getMaxCategories maxCategories} : int (default: 2)</li>
 * <li>{@link #getIsGroupHeader isGroupHeader} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategories categories} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionListItem
 * @extends sap.m.ListItemBase
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem = function(sId,mSettings) {};
/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.focus = function(oControlEvent) { return null; };

/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some category <code>oCategory</code> 
 * to the aggregation named <code>categories</code>.
 * @param {sap.ui.core.Control}
 *            oCategory the category to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.addCategory = function(oCategory) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Destroys all the categories in the aggregation 
 * named <code>categories</code>.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.destroyCategories = function() { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionListItem with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchSuggestionListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event focus to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.fireFocus = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.firePress = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Getter for aggregation <code>categories</code>.<br/>
 * Category Control
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategories = function() { return new Array(); };

/**
 * 
 * Getter for property <code>categoryFirstSeperator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>categoryFirstSeperator</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategoryFirstSeperator = function() { return ""; };

/**
 * 
 * Getter for property <code>categorySeperator</code>.
 * </p><p>
 * Default value is <code>/</code>
 * @return {string} the value of property <code>categorySeperator</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategorySeperator = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>isGroupFooter</code>.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isGroupFooter</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIsGroupFooter = function() { return false; };

/**
 * 
 * Getter for property <code>isGroupHeader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>isGroupHeader</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIsGroupHeader = function() { return false; };

/**
 * 
 * Getter for property <code>maxCategories</code>.
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>maxCategories</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getMaxCategories = function() { return 0; };

/**
 * 
 * Getter for property <code>text</code>.
 * Suggestion text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getText = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>categories</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCategory the category whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.indexOfCategory = function(oCategory) { return 0; };

/**
 * 
 * Inserts a category into the aggregation named <code>categories</code>.
 * @param {sap.ui.core.Control}
 *          oCategory the category to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the category should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the category is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the category is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.insertCategory = function(oCategory,iIndex) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>categories</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.removeAllCategories = function() { return new Array(); };

/**
 * 
 * Removes an category from the aggregation named <code>categories</code>.
 * @param {int | string | sap.ui.core.Control} vCategory the category to remove or its index or id
 * @return {sap.ui.core.Control} the removed category or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.removeCategory = function(vCategory) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>categoryFirstSeperator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCategoryFirstSeperator  new value for property <code>categoryFirstSeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setCategoryFirstSeperator = function(sCategoryFirstSeperator) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>categorySeperator</code>.
 * </p><p>
 * Default value is <code>/</code> 
 * @param {string} sCategorySeperator  new value for property <code>categorySeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setCategorySeperator = function(sCategorySeperator) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIcon = function(sIcon) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>isGroupFooter</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsGroupFooter  new value for property <code>isGroupFooter</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIsGroupFooter = function(bIsGroupFooter) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>isGroupHeader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bIsGroupHeader  new value for property <code>isGroupHeader</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIsGroupHeader = function(bIsGroupHeader) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>maxCategories</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iMaxCategories  new value for property <code>maxCategories</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setMaxCategories = function(iMaxCategories) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setText = function(sText) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };


// ---- sap.ushell.ui.launchpad.TileState --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/TileState.
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
 * <li>{@link #getState state} : string (default: 'Loaded')</li></ul>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The tile state control that displays loading indicator, while tile view is loading and failed status in case tile view is not available.
 * @extends sap.ui.core.Control
 * @version 1.28.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ushell.ui.launchpad.TileState = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.TileState with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.TileState.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>state</code>.
 * The load status.
 * </p><p>
 * Default value is <code>Loaded</code>
 * @return {string} the value of property <code>state</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.TileState.prototype.getState = function() { return ""; };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>Loaded</code> 
 * @param {string} sState  new value for property <code>state</code>
 * @return {sap.ushell.ui.launchpad.TileState} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.TileState.prototype.setState = function(sState) { return new sap.ushell.ui.launchpad.TileState(); };


// ---- sap.ushell.ui.shell --------------------------------------------------------------------------


// ---- sap.ushell.utils --------------------------------------------------------------------------

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ushell --------------------------------------------------------------------------

/**
 * 
 * The Unified Shell container as a singleton object. This object will only be
 * available after <code>sap.ushell.bootstrap()</code> has finished.
 * @since 1.15.0
 * @type sap.ushell.services.Container
 * @see sap.ushell.bootstrap
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.Container = new sap.ushell.services.Container();


// ---- sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder --------------------------------------------------------------------------

/**
 * 
 * Sort Order: ascending.
 * @public
 * @memberOf sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder
 */
sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder.Ascending = null;

/**
 * 
 * Sort Order: descending.
 * @public
 * @memberOf sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder
 */
sap.ushell.components.tiles.indicatorTileUtils.odata4analytics.SortOrder.Descending = null;


// ---- sap.ushell.Container.DirtyState --------------------------------------------------------------------------

/**
 * 
 * The embedded application is clean, there is no unsaved data.
 * @public
 * @constant
 * @default "CLEAN"
 * @since 1.21.1
 * @type string
 * @memberOf sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.CLEAN = "";

/**
 * 
 * The embedded application is dirty, the user has entered data
 * that is not yet saved.
 * @public
 * @constant
 * @default "DIRTY"
 * @since 1.21.1
 * @type string
 * @memberOf sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.DIRTY = "";

/**
 * 
 * The embedded application container's dirty state cannot be determined because
 * of technical reasons.
 * @public
 * @constant
 * @default "MAYBE_DIRTY"
 * @since 1.21.1
 * @type string
 * @memberOf sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.MAYBE_DIRTY = "";

