/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if(!window.QUnit||!window.QUnit.test){jQuery.sap.require("sap.ui.thirdparty.qunit")}sap.ui.define(["jquery.sap.global","sap/ui/test/gherkin/GherkinTestGenerator","sap/ui/test/gherkin/StepDefinitions","sap/ui/qunit/qunit-css","sap/ui/qunit/qunit-junit","sap/ui/qunit/qunit-coverage"],function(t,e){"use strict";var n={test:function(n){if(!n||typeof n!=="object"){throw new Error("qUnitTestHarness.test: input all arguments via a single object")}if(typeof n.featurePath!=="string"&&!(n.featurePath instanceof String)){throw new Error("qUnitTestHarness.test: parameter 'featurePath' must be a valid string")}if(typeof n.steps!=="function"||!(new n.steps)._generateTestStep){throw new Error("qUnitTestHarness.test: parameter 'steps' must be a valid StepDefinitions constructor")}var i=new e(n.featurePath,n.steps);var s=i.generate();QUnit.module(s.name,{beforeEach:function(){i.setUp()},afterEach:function(){i.tearDown()}});t.sap.log.info("[GHERKIN] Running feature: '"+s.name+"'");s.testScenarios.forEach(function(e){var n=!s.skip&&!e.skip?QUnit.test:QUnit.skip;n(e.name,function(n){t.sap.log.info("[GHERKIN] Running scenario: '"+e.name+"'");e.testSteps.forEach(function(e){t.sap.log.info("[GHERKIN] Running step: text='"+e.text+"' regex='"+e.regex+"'");n.ok(e.isMatch,e.text);if(e.isMatch){QUnit.config.current.assertions.pop()}i.execute(e,n)})})})}};return n},true);