/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS","sap/ui/thirdparty/jquery"],function(e,t,s){"use strict";var n=e.GenericTileScope;var a=e.LoadState;var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");var o={apiVersion:2};o.render=function(e,s){var o=s._getTooltipText(),i=s._isScreenLarge(),p=s._getAriaText(),c=s.getScope(),l,d=false,S=s.hasListeners("press"),f=s.getState(),g=s.getAriaRoleDescription(),h=s.getAriaRole();var T=s.getUrl()&&!s._isInActionScope()&&f!==a.Disabled;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();if(c===n.Actions){if(f!==a.Disabled){l=t("sapMGTScopeActions")}}else if(c===n.ActionMore||c===n.ActionRemove){d=true;if(f!==a.Disabled){l=t("sapMGTScopeSingleAction")}}else{l=t("sapMGTScopeDisplay")}if(T){e.openStart("a",s);e.attr("href",s.getUrl());e.attr("rel","noopener noreferrer")}else{e.openStart("span",s)}e.attr("aria-label",p);if(g){e.attr("aria-roledescription",g)}else{e.attr("aria-roledescription",r.getText("GENERIC_TILE_ROLE_DESCRIPTION"))}if(h){e.attr("role",h)}else if(!T){e.attr("role",S?"button":"presentation")}else{e.attr("role","link")}e.class("sapMGT");e.class(l);if(c===n.ActionMore){e.style("padding-right","2.25rem")}if(f!==a.Disabled&&c===n.ActionRemove){e.class("sapMGTAcionRemove")}e.class("sapMGTLineMode");if(s.getSystemInfo()||s.getAppShortcut()){e.class("sapMGTInfoRendered");if(!i){e.class("sapMGTLineModeSmall")}}this._writeDirection(e);if(o){e.attr("title",o)}if(f!==a.Disabled){if(!s.isInActionRemoveScope()){e.class("sapMPointer");e.style("pointer-events","auto")}e.attr("tabindex","0")}else{e.class("sapMGTDisabled")}if(f===a.Failed){e.class("sapMGTFailed")}e.openEnd();if(s.getState()!==a.Disabled){this._renderFocusDiv(e,s)}if(i){e.openStart("div",s.getId()+"-startMarker");e.class("sapMGTStartMarker");e.openEnd();e.close("div");this._renderFailedIcon(e,s);e.openStart("span",s.getId()+"-lineWrapper");e.class("sapMGTLineWrapper");e.openEnd();e.openStart("span",s.getId()+"-headerWrapper");e.class("sapMGTHeaderWrapper");e.openEnd();this._renderHeader(e,s);if(s.getSubheader()){this._renderSubheader(e,s)}e.close("span");if(s.getSystemInfo()||s.getAppShortcut()){this._renderInfoContainer(e,s)}e.close("span");e.openStart("div",s.getId()+"-endMarker");e.class("sapMGTEndMarker");e.openEnd();if(s._isInActionScope()){this._renderActionsScope(e,s,d)}e.close("div");e.openStart("div",s.getId()+"-styleHelper");e.class("sapMGTStyleHelper");e.openEnd();e.close("div")}else if(s.getSystemInfo()||s.getAppShortcut()){e.openStart("div",s.getId()+"-touchArea");e.class("sapMGTTouchArea");e.openEnd();this._renderFailedIcon(e,s);e.openStart("span",s.getId()+"-lineModeHelpContainer");e.class("sapMGTLineModeHelpContainer");e.openEnd();e.openStart("span",s.getId()+"-headerWrapper");e.class("sapMGTHeaderWrapper");e.openEnd();this._renderHeader(e,s);if(s.getSubheader()){this._renderSubheader(e,s)}e.close("span");if(s.getSystemInfo()||s.getAppShortcut()){this._renderInfoContainer(e,s)}e.close("span");if(s._isInActionScope()){this._renderActionsScope(e,s,d)}e.close("div")}else{e.openStart("div",s.getId()+"-touchArea");e.class("sapMGTTouchArea");e.openEnd();this._renderFailedIcon(e,s);e.openStart("span",s.getId()+"-lineModeHelpContainer");e.class("sapMGTLineModeHelpContainer");e.openEnd();this._renderHeader(e,s);if(s.getSubheader()){this._renderSubheader(e,s)}e.close("span");if(s._isInActionScope()){this._renderActionsScope(e,s,d)}e.close("div")}if(T){e.close("a")}else{e.close("span")}};o._renderInfoContainer=function(e,t){e.openStart("span",t.getId()+"-sapMGTTInfoWrapper");e.class("sapMGTTInfoWrapper").openEnd();e.openStart("span",t.getId()+"-sapMGTTInfo");e.class("sapMGTTInfo");if(!(t.getSystemInfo()&&t.getAppShortcut())){e.class("sapMGTInfoNotContainsSeperator")}e.openEnd();if(t.getAppShortcut()){e.openStart("span",t.getId()+"-appShortcut");e.class("sapMGTAppShortcutText").openEnd();e.renderControl(t._oAppShortcut);e.close("span")}if(t.getSystemInfo()){this._renderSystemInfo(e,t)}e.close("span");e.close("span")};o._writeDirection=function(e){if(this._bRTL){e.attr("dir","rtl")}};o._renderSystemInfo=function(e,t){e.openStart("span",t.getId()+"-systemInfoText");this._writeDirection(e);e.class("sapMGTSystemInfoText");if(t.getSystemInfo()&&t.getAppShortcut()){e.class("sapMGTSeperatorPresent")}e.openEnd();e.text(t._oSystemInfo.getText());e.close("span")};o._renderFailedIcon=function(e,t){if(t.getState()===a.Failed){if(t._isCompact()){t._oWarningIcon.setSize("1.25rem")}else{t._oWarningIcon.setSize("1.375rem")}e.renderControl(t._oWarningIcon.addStyleClass("sapMGTLineModeFailedIcon"))}};o._renderHeader=function(e,t){e.openStart("span",t.getId()+"-hdr-text");this._writeDirection(e);e.class("sapMGTHdrTxt");e.openEnd();e.text(t._oTitle.getText());e.close("span")};o._renderSubheader=function(e,t){e.openStart("span",t.getId()+"-subHdr-text");this._writeDirection(e);e.class("sapMGTSubHdrTxt");e.openEnd();e.text(t._oSubTitle.getText());e.close("span")};o._renderActionsScope=function(e,t,s){if(t.getState()!==a.Disabled){e.openStart("span",t.getId()+"-actions");e.class("sapMGTActionsContainer");if(s){e.class("sapMGTScopeSingleActionContainer")}e.openEnd();e.renderControl(t._oMoreIcon);e.renderControl(t._oRemoveButton);e.close("span")}};o._updateHoverStyle=function(){var e=this.$("styleHelper");e.empty();if(!this._oStyleData||this.$().is(":hidden")){return}if(this._oStyleData.rtl){e.css("right",-this._oStyleData.positionRight)}else{e.css("left",-this._oStyleData.positionLeft)}this._oStyleData.lines.forEach(function(t){var n=s("<div class='sapMGTLineStyleHelper'><div class='sapMGTLineStyleHelperInner'></div></div>");if(this._oStyleData.rtl){n.css("right",t.offset.x+"px")}else{n.css("left",t.offset.x+"px")}n.css({top:t.offset.y+"px",width:t.width+"px"});e.append(n)},this)};o._renderFocusDiv=function(e,t){e.openStart("div",t.getId()+"-focus");e.class("sapMGTFocusDiv");e.openEnd();e.close("div")};o._getCSSPixelValue=function(e,t){var n=e instanceof s?e:e.$(),a=(n.css(t)||"").match(/([^a-zA-Z\%]*)(.*)/),r=parseFloat(a[1]),o=a[2];return o==="px"?r:r*16};return o},true);