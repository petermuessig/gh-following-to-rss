/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/base/ManagedObjectObserver","sap/m/library","sap/ui/core/library","sap/m/Button","sap/m/OverflowToolbarLayoutData","sap/ui/core/IconPool","sap/m/OverflowToolbarButton","sap/base/Log"],function(t,e,o,n,i,r,s,u,a){"use strict";var h=o.OverflowToolbarPriority;var _=n.aria.HasPopup;var f=t.extend("sap.m.semantic.ShareMenu",{constructor:function(t){if(!t){a.error("missing argumment: constructor expects an actionsheet reference",this);return}this._oActionSheet=t;this._oContentObserver=new e(this._updateShareBtnVisibility.bind(this));this._setMode(f._Mode.initial)},getInterface:function(){return this}});f._Mode={initial:"initial",button:"button",actionSheet:"actionSheet"};f.prototype.getBaseButton=function(){return this._oBaseButton};f.prototype.getAggregation=function(t){if(t==="content"){return this.getContent()}};f.prototype.addAggregation=function(t,e,o){if(t==="content"){return this.addContent(e,o)}};f.prototype.insertAggregation=function(t,e,o,n){if(t==="content"){return this.insertContent(e,o,n)}};f.prototype.indexOfAggregation=function(t,e){if(t==="content"){return this.indexOfContent(e)}};f.prototype.removeAggregation=function(t,e,o){if(t==="content"){return this.removeContent(e,o)}};f.prototype.removeAllAggregation=function(t,e){if(t==="content"){return this.removeAllContent(e)}};f.prototype.getContent=function(){var t=this._getMode();if(t===f._Mode.initial){return[]}else if(t===f._Mode.button){return[this._oBaseButton]}else{return this._oActionSheet.getAggregation("buttons")||[]}};f.prototype.addContent=function(t,e){var o=this._getMode();this._observeButton(t);if(o===f._Mode.initial){this._setMode(f._Mode.button,e,t);return this}if(o===f._Mode.button){this._setMode(f._Mode.actionSheet,e)}this._preProcessOverflowToolbarButton(t);this._oActionSheet.addButton(t,e);this._updateShareBtnVisibility();return this};f.prototype.insertContent=function(t,e,o){var n=this._getMode();this._observeButton(t);if(n===f._Mode.initial){this._setMode(f._Mode.button,o,t);return this}if(n===f._Mode.button){this._setMode(f._Mode.actionSheet,o)}this._preProcessOverflowToolbarButton(t);this._oActionSheet.insertButton(t,e,o);this._updateShareBtnVisibility();return this};f.prototype.indexOfContent=function(t){if(this._getMode()===f._Mode.button&&t===this._oBaseButton){return 0}if(this._getMode()===f._Mode.actionSheet){return this._oActionSheet.indexOfAggregation("buttons",t)}return-1};f.prototype.removeContent=function(t,e){var o,n=this._getMode();if(n===f._Mode.actionSheet){o=this._oActionSheet.removeButton(t,e);this._postProcessOverflowToolbarButton(t);this._unobserveButton(t);if(o){if(this._oActionSheet.getAggregation("buttons").length===1){this._setMode(f._Mode.button,e)}}this._updateShareBtnVisibility();return o}if(n===f._Mode.button){var i=this._oBaseButton;this._setMode(f._Mode.initial,e);return i}return o};f.prototype.removeAllContent=function(t){var e;if(this._getMode()===f._Mode.actionSheet){e=this._oActionSheet.removeAllButtons(t);e.forEach(function(t){this._postProcessOverflowToolbarButton(t);this._unobserveButton(t)},this);this._updateShareBtnVisibility()}else if(this._getMode()===f._Mode.button){e=[this._oBaseButton]}this._setMode(f._Mode.initial,t);return e};f.prototype.destroy=function(t){this._oActionSheet.destroy(t);if(this._oShareMenuBtn){this._oShareMenuBtn.destroy(t);this._oShareMenuBtn=null}if(this._oContentObserver){this._oContentObserver.disconnect();this._oContentObserver=null}};f.prototype._setBaseButton=function(t,e){if(this._oBaseButton===t){return this}var o=this._oBaseButton;this._oBaseButton=t;if(o){var n=o.getParent(),i=o.sParentAggregationName;if(n){n.removeAggregation(i,o,e);n.addAggregation(i,this._oBaseButton,e)}}return this};f.prototype._getMode=function(){return this._mode};f.prototype._setMode=function(t,e,o){if(!f._Mode[t]){a.error("unknown shareMenu mode "+t,this);return this}if(this._mode===t){return this}if(f._Mode.initial===t){this._setBaseButton(this._getShareMenuButton().applySettings({visible:false}));this._mode=f._Mode.initial;return this}if(t===f._Mode.button){if(this._mode===f._Mode.initial){this._setBaseButton(o)}else if(this._mode===f._Mode.actionSheet){var n=this._oActionSheet.getAggregation("buttons")[0];this._oActionSheet.removeButton(n,e);this._postProcessOverflowToolbarButton(n);this._setBaseButton(n)}this._mode=f._Mode.button;return this}if(t===f._Mode.actionSheet){var i=this._oBaseButton;this._setBaseButton(this._getShareMenuButton().applySettings({visible:true}));if(i){this._preProcessOverflowToolbarButton(i);this._oActionSheet.addButton(i,e)}this._mode=f._Mode.actionSheet}return this};f.prototype._getShareMenuButton=function(){if(!this._oShareMenuBtn){var t=this;this._oShareMenuBtn=new i(this._oActionSheet.getParent().getId()+"-shareButton",{ariaHasPopup:_.Menu,icon:s.getIconURI("action"),tooltip:sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("SEMANTIC_CONTROL_ACTION_SHARE"),layoutData:new r({priority:h.NeverOverflow}),press:function(){t._oActionSheet.openBy(t._oShareMenuBtn)}})}return this._oShareMenuBtn};f.prototype._getVisibleContent=function(){return this.getContent().filter(function(t){return t.getVisible()})};f.prototype._updateShareBtnVisibility=function(){var t=this._getVisibleContent(),e=t.length>0;this._getShareMenuButton().setVisible(e)};f.prototype._preProcessOverflowToolbarButton=function(t){if(t instanceof u){t._bInOverflow=true}};f.prototype._postProcessOverflowToolbarButton=function(t){if(t instanceof u){delete t._bInOverflow}};f.prototype._observeButton=function(t){this._oContentObserver.observe(t,{properties:["visible"]})};f.prototype._unobserveButton=function(t){this._oContentObserver.unobserve(t,{properties:["visible"]})};return f});