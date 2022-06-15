/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/core/library","./library","sap/ui/core/Core"],function(e,t,n,a){"use strict";var r=t.ValueState;var s=t.TextDirection;var i="sapMObjectNumberStatus";var p=n.EmptyIndicatorMode;var o=a.getLibraryResourceBundle("sap.m");var d={apiVersion:2};d.render=function(t,n){var a=n.getTooltip_AsString(),r=n.getTextDirection(),o=n.getTextAlign(),d={roledescription:sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("OBJECTNUMBER_NAME")};t.openStart("div",n);t.class("sapMObjectNumber");if(n._isActive()){t.class("sapMObjectNumberActive");t.attr("tabindex","0");d.role="button"}t.class(i+n.getState());if(n.getEmphasized()){t.class("sapMObjectNumberEmph")}if(n.getInverted()){t.class("sapMObjectNumberInverted")}if(a){t.attr("title",a)}if(r!==s.Inherit){t.attr("dir",r.toLowerCase())}o=e.getTextAlign(o,r);if(o){t.style("text-align",o)}if(n._hasExternalLabelling()){d["labelledby"]={value:n._generateSelfLabellingIds(),append:true}}t.accessibilityState(n,d);t.openEnd();t.openStart("span",n.getId()+"-inner");t.class("sapMObjectNumberInner");t.openEnd();if(n.getEmptyIndicatorMode()!==p.Off&&!n.getNumber()){this.renderEmptyIndicator(t,n)}else{this.renderText(t,n);this.renderUnit(t,n)}t.close("span");this.renderEmphasizedInfoElement(t,n);this.renderHiddenARIAElement(t,n);t.close("div")};d.renderText=function(e,t){var n=t.getUnit()||t.getNumberUnit();e.openStart("span",t.getId()+"-number");e.class("sapMObjectNumberText");e.openEnd();e.text(t.getNumber());if(n!==""){e.text(" ")}e.close("span")};d.renderUnit=function(e,t){var n=t.getUnit()||t.getNumberUnit();if(n!==""){e.openStart("span",t.getId()+"-unit");e.class("sapMObjectNumberUnit");e.openEnd();e.text(n);e.close("span")}};d.renderEmphasizedInfoElement=function(e,t){if(!t.getEmphasized()||!t.getNumber()){return}e.openStart("span",t.getId()+"-emphasized");e.class("sapUiPseudoInvisibleText");e.openEnd();e.text(sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("OBJECTNUMBER_EMPHASIZED"));e.close("span")};d.renderHiddenARIAElement=function(e,t){if(t.getState()==r.None){return}e.openStart("span",t.getId()+"-state");e.class("sapUiPseudoInvisibleText");e.openEnd();e.text(t._getStateText());e.close("span")};d.renderEmptyIndicator=function(e,t){e.openStart("span");e.class("sapMEmptyIndicator");if(t.getEmptyIndicatorMode()===p.Auto){e.class("sapMEmptyIndicatorAuto")}e.openEnd();e.openStart("span");e.attr("aria-hidden",true);e.openEnd();e.text(o.getText("EMPTY_INDICATOR"));e.close("span");e.openStart("span");e.class("sapUiPseudoInvisibleText");e.openEnd();e.text(o.getText("EMPTY_INDICATOR_TEXT"));e.close("span");e.close("span")};return d},true);