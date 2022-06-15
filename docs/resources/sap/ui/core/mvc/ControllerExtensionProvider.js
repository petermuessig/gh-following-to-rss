/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Component"],function(r,e){"use strict";var n={};var o={};o._sExtensionProvider=null;o.registerExtensionProvider=function(r){o._sExtensionProvider=r};o.getControllerExtensions=function(n,s,l,u){var a={customizingControllerNames:[],providerControllers:[]};var v=e.get(s);if(v&&v.getLocalId){l=v.getLocalId(l)||l}var f=t(n,v,l);a.customizingControllerNames=f;if(u){if(o._sExtensionProvider){return i(u).then(function(r){return r.getControllerExtensions(n,s,u,l)}).then(function(r){a.providerControllers=r||[];return a})}else{return Promise.resolve(a)}}else{if(o._sExtensionProvider){var c=i();if(c){var d=c.getControllerExtensions(n,s,u,l);if(d&&Array.isArray(d)){a.providerControllers=d}else{r.error("Controller Extension Provider: Error in ExtensionProvider.getControllerExtensions: "+o._sExtensionProvider+" - no valid extensions returned. Return value must be an array of ControllerExtensions.")}}}return a}};function t(r,n,o){var t=[];var i=e.getCustomizing(n,{type:"sap.ui.controllerExtensions",name:r+"#"+o});var s=[];if(i){s.push(i)}else{var l=e.getCustomizing(n,{type:"sap.ui.controllerExtensions",name:r});if(l){s.push(l)}}for(var u=0;u<s.length;u++){var a=s[u];if(a){var v=typeof a==="string"?a:a.controllerName;t=t.concat(a.controllerNames||[]);if(v){t.unshift(v)}}}return t}function i(r){var e=o._sExtensionProvider.replace(/\./g,"/"),t=n[e];if(t){return r?Promise.resolve(t):t}if(e){if(r){return new Promise(function(r,o){sap.ui.require([e],function(o){t=new o;n[e]=t;r(t)},o)})}else{var i=sap.ui.requireSync(e);t=new i;n[e]=t;return t}}else{return r?Promise.resolve():undefined}}return o});