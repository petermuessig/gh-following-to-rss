/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS"],function(e,o){"use strict";var t=e.GenericTileMode;var a=e.LoadState;var n=e.FrameType;var r=e.ValueColor;var s=sap.ui.getCore().getLibraryResourceBundle("sap.m");var i={apiVersion:2};i.render=function(e,i){var l=i._getTooltipText();var d=i._getAriaText();var c=i.getHeaderImage();var p=i.hasListeners("press");var f=i.getState();var g=o("sapMGTState"+f);var v;var T=i.getFrameType();var h=i.getAriaRoleDescription();var S=i.getAriaRole();var I=T===n.OneByHalf||T===n.TwoByHalf;var M=i.getUrl()&&(!i._isInActionScope()||i.getMode()===t.IconMode)&&f!==a.Disabled&&!i._isNavigateActionEnabled()&&!i._isActionMode();if(i._isInActionScope()){v=o("sapMGTScopeActions")}else{v=o("sapMGTScopeDisplay")}if(M){e.openStart("a",i);e.attr("href",i.getUrl());e.attr("rel","noopener noreferrer");e.attr("draggable","false")}else{e.openStart("div",i)}if(l&&f!==a.Loading){e.attr("title",l)}e.class("sapMGT");e.class(g);e.class(v);if(!i._isInActionScope()&&i._bShowActionsView){e.class("sapMGTScopeActions")}if(i._isIconMode()){if(T===n.OneByOne){var u="sapMGTOneByOne"}else if(T===n.TwoByHalf){var u="TwoByHalf"}}e.class(i._isIconMode()?u:T);var m=i.getMode()===t.ArticleMode,y=i.getMode()===t.ActionMode;if(y){e.class("sapMGTActionMode")}if(m){e.class("sapMGTArticleMode")}if(i._isIconMode()){e.class("sapMGTIconMode");if(this._isThemeHighContrast()){e.class("HighContrastTile")}}if(!m&&!y&&T!==n.OneByHalf&&(i.getSystemInfo()||i.getAppShortcut())){e.class("tileWithAppInfo")}if(i._isIconMode()){if(T===n.TwoByHalf){e.class("sapMGTTwoByHalf")}else if(T===n.OneByOne){if(!this._isThemeHighContrast()){e.style("background-color",i.getBackgroundColor())}else{e.style("border-color",i.getBackgroundColor());e.style("box-shadow","0 0 0 1px"+i.getBackgroundColor())}}}if(S){e.attr("role",S)}else if(!M){e.attr("role",p?"button":"presentation")}else{e.attr("role","link")}if(f===a.Loaded){e.attr("aria-label",d)}if(h){e.attr("aria-roledescription",h)}else{e.attr("aria-roledescription",s.getText("GENERIC_TILE_ROLE_DESCRIPTION"))}if(f!==a.Disabled){if(!i.isInActionRemoveScope()&&i.getPressEnabled()){e.class("sapMPointer")}if(!i.getPressEnabled()){e.class("sapMAutoPointer")}e.attr("tabindex","0")}if(i.getWidth()){e.style("width",i.getWidth())}if(i.getBackgroundImage()){e.style("background-image","url('"+o(i.getBackgroundImage())+"')");e.class("sapMGTBackgroundImage")}if(i.getMode()===t.HeaderMode){e.class("sapMGTHeaderMode")}e.openEnd();var C=i.getTileContent();var _=C.length;var G=false;var B=false;function O(e,o){if(T===n.OneByOne){e.openStart("div").class("sapMGTContentShimmerPlaceholderItemOneByOne");e.class("sapMGTContentShimmerPlaceholderWithDescriptionOneByOne");e.openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderRowsOneByOne").openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderIconOneByOne").class("sapMGTLoadingShimmer").openEnd().close("div");if(o){e.openStart("div").class("sapMGTContentShimmerPlaceholderItemTextOneByOne").class("sapMGTLoadingShimmer").openEnd().close("div")}}else{e.openStart("div").class("sapMGTContentShimmerPlaceholderItemTwoByHalf");e.class("sapMGTContentShimmerPlaceholderWithDescriptionTwoByHalf");if(!i.getIconLoaded()&&!o){e.class("sapMGTContentShimmerPlaceholderWithDescriptionTwoByHalfIconLoaded")}e.openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderRowsTwoByHalf").openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderIconTwoByHalf").class("sapMGTLoadingShimmer").openEnd().close("div");if(o){e.openStart("div").class("sapMGTContentShimmerPlaceholderItemTextTwoByHalf").class("sapMGTLoadingShimmer").openEnd().close("div")}}e.close("div");e.close("div")}if(f===a.Loading){if(i._isIconMode()){O(e,true)}else{e.openStart("div").class("sapMGTContentShimmerPlaceholderItem");e.class("sapMGTContentShimmerPlaceholderWithDescription");e.openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderRows").openEnd();e.openStart("div").class("sapMGTContentShimmerPlaceholderItemHeader").class("sapMGTLoadingShimmer").openEnd().close("div");e.openStart("div").class("sapMGTContentShimmerPlaceholderItemText").class("sapMGTLoadingShimmer").openEnd().close("div");if(!I){for(var H=0;H<_;H++){e.renderControl(C[H])}}e.close("div");e.close("div")}}else{if(!y&&this._isValueColorValid(i.getValueColor())){e.openStart("div");e.class("sapMGTCriticalBorder");e.class(i.getValueColor());e.openEnd();e.close("div")}if(i._isIconMode()){if(!i.getIconLoaded()){O(e,false)}else{e.openStart("div");if(T===n.OneByOne){e.class("sapMGTOneByOneIcon")}else{e.class("sapMGTTwoByHalfIcon");if(!this._isThemeHighContrast()){e.style("background-color",i.getBackgroundColor())}else{e.class("HighContrastTile");e.style("border-color",i.getBackgroundColor());e.style("box-shadow","0 0 0 1px"+i.getBackgroundColor())}}e.openEnd();if(i.getTileIcon()){var E=i._generateIconAggregation(i.getTileIcon());if(E){e.renderControl(i.getAggregation(E))}}e.close("div")}}if(this._shouldRenderInfoContainer(i)&&T===n.TwoByHalf){e.openStart("div",i.getId()+"-wrapper").class("sapMGTWrapper").openEnd();e.openStart("div",i.getId()+"-wrapper-content").class("sapMGTWrapperCnt").openEnd()}e.openStart("div");e.class("sapMGTHdrContent");if(i._isIconMode()){if(T===n.OneByOne){var u="sapMGTOneByOne";if(!i.getIconLoaded()){u=u.concat(" sapMGTOneByOneIconLoaded")}}else if(T===n.TwoByHalf){var u="TwoByHalf"}}e.class(i._isIconMode()?u:T);if(l){e.attr("title",l)}if(y&&i.getFrameType()===n.TwoByOne&&c){e.class("sapMGTHdrImage")}e.openEnd();if(c){i._oImage.removeStyleClass(r.None);if(this._sPreviousStyleClass){i._oImage.removeStyleClass(this._sPreviousStyleClass)}this._sPreviousStyleClass=this._isValueColorValid(i.getValueColor())?i.getValueColor():r.None;i._oImage.addStyleClass(this._sPreviousStyleClass);e.renderControl(i._oImage)}this._renderHeader(e,i);for(var H=0;H<_;H++){G=i._checkFooter(C[H],i)&&(C[H].getFooter()||C[H].getUnit());var A=C[H].getContent();if(A){if(T===n.OneByHalf&&A.getMetadata().getElementName()==="sap.m.ImageContent"){B=false}else{B=true;break}}}if(!(I&&B)){if(i.getSubheader()){if(!(i._isIconMode()&&i.getFrameType()==n.OneByOne)){this._renderSubheader(e,i)}}}e.close("div");if(!i._isIconMode()){e.openStart("div",i.getId()+"-content");e.class("sapMGTContent");if(i.getSystemInfo()||i.getAppShortcut()){if(C.length===0){e.class("appInfoWithoutTileCnt")}if(G&&T!==n.OneByHalf){e.class("appInfoWithFooter")}else{e.class("appInfoWithoutFooter")}}e.openEnd();for(var H=0;H<_;H++){e.renderControl(C[H])}if(this._shouldRenderInfoContainer(i)&&T!==n.TwoByHalf){this._renderInfoContainer(e,i)}e.close("div")}if(this._shouldRenderInfoContainer(i)&&T===n.TwoByHalf){e.close("div");this._renderInfoContainer(e,i);e.close("div")}}if(f!==a.Loaded&&f!==a.Loading){this._renderStateOverlay(e,i,l)}if(f!==a.Disabled){this._renderHoverOverlay(e,i);this._renderFocusDiv(e,i)}if(i._isInActionScope()){this._renderActionsScope(e,i)}if(M){e.close("a")}else{e.close("div")}};i._shouldRenderInfoContainer=function(e){var o=e.getFrameType(),a=e.getMode()===t.ArticleMode,r=e.getMode()===t.ActionMode,s=e.getMode()===t.IconMode;if(o===n.OneByOne&&s){return true}return!a&&!r&&!s&&o!==n.OneByHalf&&(e.getSystemInfo()||e.getAppShortcut())};i._renderInfoContainer=function(e,o){e.openStart("div",o.getId()+"-tInfo");e.class("sapMGTTInfoContainer");e.openEnd();e.openStart("div",o.getId()+"-tInfo-content");e.class("sapMGTTInfo");e.openEnd();if(o.getAppShortcut()){e.openStart("div",o.getId()+"-appShortcutWrapper");e.class("sapMGTAppShortcutText").openEnd();e.renderControl(o._oAppShortcut);e.close("div")}if(o.getSystemInfo()){e.openStart("div",o.getId()+"-sytemInfoWrapper");if(o.getAppShortcut()&&o.getSystemInfo()){e.class("sapMGTMarginTop4px")}e.class("sapMGTSystemInfoText").openEnd();e.renderControl(o._oSystemInfo);e.close("div")}e.close("div");e.close("div")};i._renderFocusDiv=function(e,o){e.openStart("div",o.getId()+"-focus");e.class("sapMGTFocusDiv");e.openEnd();e.close("div")};i._renderStateOverlay=function(e,o,t){var n=o.getState();e.openStart("div",o.getId()+"-overlay");e.class("sapMGTOverlay");if(t){e.attr("title",t)}e.openEnd();switch(n){case a.Loading:o._oBusy.setBusy(n==a.Loading);e.renderControl(o._oBusy);break;case a.Failed:e.openStart("div",o.getId()+"-failed-ftr");e.class("sapMGenericTileFtrFld");e.openEnd();e.openStart("div",o.getId()+"-failed-icon");e.class("sapMGenericTileFtrFldIcn");e.openEnd();e.renderControl(o._oWarningIcon);e.close("div");if(!o._isInActionScope()&&!o._bShowActionsView){e.openStart("div",o.getId()+"-failed-text");e.class("sapMGenericTileFtrFldTxt");e.openEnd();e.renderControl(o.getAggregation("_failedMessageText"));e.close("div")}e.close("div");break;default:}e.close("div")};i._renderActionsScope=function(e,o){if(o.getState()!==a.Disabled){e.renderControl(o._oRemoveButton);e.renderControl(o._oMoreIcon)}};i._renderHoverOverlay=function(e,o){e.openStart("div",o.getId()+"-hover-overlay");if(o.getBackgroundImage()){e.class("sapMGTWithImageHoverOverlay")}else{e.class("sapMGTWithoutImageHoverOverlay");if(o._isIconMode()){if(o.getFrameType()===n.OneByOne){e.style("border-radius","1rem")}else{e.style("border-radius","0.75rem")}}}e.openEnd();e.close("div")};i._renderHeader=function(e,o){e.openStart("div",o.getId()+"-hdr-text");e.class("sapMGTHdrTxt");if(o._isActionMode()&&this._isValueColorValid(o.getValueColor())){e.class("sapMGTCriticalHdrTxt");e.class(o.getValueColor())}e.openEnd();e.renderControl(o._oTitle);e.close("div")};i._renderSubheader=function(e,o){e.openStart("div",o.getId()+"-subHdr-text");e.class("sapMGTSubHdrTxt");e.openEnd();e.renderControl(o._oSubTitle);e.close("div")};i._isValueColorValid=function(e){if(e==r.Good||e==r.Error||e==r.Neutral||e==r.Critical){return true}return false};i._isThemeHighContrast=function(){return/(hcw|hcb)/g.test(sap.ui.getCore().getConfiguration().getTheme())};return i},true);