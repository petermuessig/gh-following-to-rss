/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ValueStateSupport","./MenuItemBase","./library","sap/ui/core/library","sap/ui/Device","sap/base/Log","sap/ui/events/PseudoEvents","sap/ui/core/InvisibleText","sap/ui/core/Core","sap/ui/core/IconPool","sap/ui/dom/jquery/cursorPos"],function(t,e,i,n,o,s,a,r,u){"use strict";var p=n.ValueState;var l=e.extend("sap.ui.unified.MenuTextFieldItem",{metadata:{library:"sap.ui.unified",properties:{label:{type:"string",group:"Appearance",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},value:{type:"string",group:"Misc",defaultValue:null},valueState:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:p.None}}}});(function(){l.prototype.render=function(t,e,i,n){var o=t,s=i.checkEnabled(e),a=e.getId();o.openStart("li",e);o.class("sapUiMnuItm").class("sapUiMnuTfItm");if(n.iItemNo==1){o.class("sapUiMnuItmFirst")}else if(n.iItemNo==n.iTotalItems){o.class("sapUiMnuItmLast")}if(!i.checkEnabled(e)){o.class("sapUiMnuItmDsbl")}if(e.getStartsSection()){o.class("sapUiMnuItmSepBefore")}if(!s){o.attr("disabled","disabled")}if(n.bAccessible){o.attr("role","menuitem");o.attr("aria-posinset",n.iItemNo);o.attr("aria-setsize",n.iTotalItems)}o.openEnd();o.openStart("div").class("sapUiMnuItmL").openEnd().close("div");o.openStart("div").class("sapUiMnuItmIco").openEnd();if(e.getIcon()){o.icon(e.getIcon(),null,{title:null})}o.close("div");o.openStart("div",a+"-txt").class("sapUiMnuItmTxt").openEnd();o.openStart("label",a+"-lbl").class("sapUiMnuTfItemLbl").openEnd();o.text(e.getLabel());o.close("label");o.openStart("div",a+"-str").class("sapUiMnuTfItmStretch").openEnd().close("div");o.openStart("div").class("sapUiMnuTfItemWrppr").openEnd();o.voidStart("input",a+"-tf").attr("tabindex","-1");if(e.getValue()){o.attr("value",e.getValue())}o.class("sapUiMnuTfItemTf").class(s?"sapUiMnuTfItemTfEnbl":"sapUiMnuTfItemTfDsbl");if(!s){o.attr("disabled","disabled")}if(n.bAccessible){o.accessibilityState(e,{role:"textbox",disabled:null,multiline:false,autocomplete:"none",describedby:a+"-lbl "+e._fnInvisibleCountInformationFactory(n).getId()})}o.voidEnd().close("div").close("div");o.openStart("div").class("sapUiMnuItmR").openEnd().close("div");o.close("li")};l.prototype.exit=function(){if(this._invisibleCountInformation){this._fnInvisibleCountInformationFactory().destroy();this._invisibleCountInformation=null}};l.prototype.hover=function(t,e){this.$().toggleClass("sapUiMnuItmHov",t);if(t&&e.checkEnabled(this)){e.closeSubmenu(false,true)}};l.prototype.focus=function(t){if(this.getEnabled()&&this.getVisible()){this.$("tf").get(0).focus()}else{t.focus()}};l.prototype.onAfterRendering=function(){this._adaptSizes();this.setValueState(this.getValueState())};l.prototype.onsapup=function(t){this.getParent().onsapprevious(t)};l.prototype.onsapdown=function(t){this.getParent().onsapnext(t)};l.prototype.onsaphome=function(t){if(this._checkCursorPosForNav(false)){this.getParent().onsaphome(t)}};l.prototype.onsapend=function(t){if(this._checkCursorPosForNav(true)){this.getParent().onsapend(t)}};l.prototype.onsappageup=function(t){this.getParent().onsappageup(t)};l.prototype.onsappagedown=function(t){this.getParent().onsappagedown(t)};l.prototype.onsapescape=function(t){this.getParent().onsapescape(t)};l.prototype.onkeydown=function(t){t.stopPropagation()};l.prototype.onclick=function(t){this.getParent().closeSubmenu(false,true);if(!o.system.desktop&&this.getParent().checkEnabled(this)){this.focus()}t.stopPropagation()};l.prototype.onkeyup=function(t){if(!a.events.sapenter.fnCheck(t)&&t.key!=="Enter"){return}var e=this.$("tf").val();this.setValue(e);this.getParent().selectItem(this);t.preventDefault();t.stopPropagation()};l.prototype.setSubmenu=function(t){s.warning("The aggregation 'submenu' is not supported for this type of menu item.","","sap.ui.unified.MenuTextFieldItem");return this};l.prototype.setLabel=function(t){this.setProperty("label",t,true);this.$("lbl").text(t);this._adaptSizes();return this};l.prototype.setValue=function(t){this.setProperty("value",t,true);this.$("tf").val(t);return this};l.prototype.setValueState=function(e){this.setProperty("valueState",e,true);var i=this.$("tf");i.toggleClass("sapUiMnuTfItemTfErr",e==p.Error);i.toggleClass("sapUiMnuTfItemTfWarn",e==p.Warning);var n=t.enrichTooltip(this,this.getTooltip_AsString());if(n){this.$().attr("title",n)}return this};l.prototype.getFocusDomRef=function(){var t=this.$("tf");return t.length?t.get(0):null};l.prototype._adaptSizes=function(){var t=this.$("tf");var e=this.$("lbl");var i=e.length?e.get(0).offsetLeft:0;if(u.getConfiguration().getRTL()){t.parent().css({width:"auto",right:this.$().outerWidth(true)-i+(e.outerWidth(true)-e.outerWidth())+"px"})}else{t.parent().css({width:"auto",left:i+e.outerWidth(true)+"px"})}};l.prototype._checkCursorPosForNav=function(t){var e=sap.ui.getCore().getConfiguration().getRTL();var i=t?e:!e;var n=this.$("tf");var o=n.cursorPos();var s=n.val().length;if(e){o=s-o}if(!i&&o!=s||i&&o!=0){return false}return true};l.prototype._fnInvisibleCountInformationFactory=function(t){if(!this._invisibleCountInformation){this._invisibleCountInformation=new r({text:u.getLibraryResourceBundle("sap.ui.unified").getText("UNIFIED_MENU_ITEM_COUNT_TEXT",[t.iItemNo,t.iTotalItems])}).toStatic()}return this._invisibleCountInformation}})();return l});