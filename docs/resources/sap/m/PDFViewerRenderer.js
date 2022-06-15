/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/base/Log","sap/base/security/URLListValidator"],function(e,r,t){"use strict";function i(e){return(!!e.getTitle()||e._isDisplayDownloadButton())&&!e._bIsPopupOpen}var n=Object.freeze(["application/pdf","application/x-google-chrome-pdf"]);var o={apiVersion:2};o._isSupportedMimeType=function(e){var r=n.indexOf(e);return r>-1};o._isPdfPluginEnabled=function(){var r=true;if(e.browser.firefox){return r}if(typeof navigator.pdfViewerEnabled!=="undefined"){if(navigator.pdfViewerEnabled||/HeadlessChrome/.test(window.navigator.userAgent)){return r}else{r=false}}else{var t=navigator.mimeTypes;r=n.some(function(e){var r=t.namedItem(e);return r!==null})}return r};o.render=function(e,r){e.openStart("div",r);e.style("width",r._getRenderWidth());e.style("height",r._getRenderHeight());this._writeAccessibilityTags(e,r);e.openEnd();if(i(r)){e.renderControl(r._objectsRegister.getOverflowToolbarControl())}if(r._isEmbeddedModeAllowed()&&this._isPdfPluginEnabled()){this.renderPdfContent(e,r)}e.close("div")};o._writeAccessibilityTags=function(e,r){e.attr("role","document");e.attr("aria-label",r._getLibraryResourceBundle().getText("PDF_VIEWER_ACCESSIBILITY_LABEL"))};o.renderPdfContent=function(n,a){if(a._shouldRenderPdfContent()&&!/HeadlessChrome/.test(window.navigator.userAgent)){n.openStart("iframe",a.getId()+"-iframe");var s=a.getSource();var d=a.getSource().indexOf("#");if(d>-1){s=s.substr(0,d)}if(!(e.browser.safari&&s.startsWith("blob:"))){s+="#view=FitH"}if(!t.validate(s)){s=encodeURI(s)}if(t.validate(s)){n.attr("src",s)}else{a._fireErrorEvent()}n.class("sapMPDFViewerContent");n.class("sapMPDFViewerLoading");if(i(a)){n.class("sapMPDFViewerReducedContent")}n.openEnd();n.close("iframe")}else{this.renderErrorContent(n,a);if(!o._isPdfPluginEnabled()){r.warning("The PDF plug-in is not available on this device.");a.fireEvent("error",{},true)}}};o.renderErrorContent=function(e,r){var t=r.getErrorPlaceholder()?r.getErrorPlaceholder():r._objectsRegister.getPlaceholderMessagePageControl();e.openStart("div");e.class("sapMPDFViewerError");if(!r._bIsPopupOpen){e.class("sapMPDFViewerEmbeddedContent")}e.openEnd();e.renderControl(t);e.close("div")};return o},true);