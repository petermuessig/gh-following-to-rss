/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./StandardDynamicDateOption","sap/base/Log","./library"],function(e,T,E){"use strict";var A=["DATE","TODAY","YESTERDAY","TOMORROW","FIRSTDAYWEEK","LASTDAYWEEK","FIRSTDAYMONTH","LASTDAYMONTH","FIRSTDAYQUARTER","LASTDAYQUARTER","FIRSTDAYYEAR","LASTDAYYEAR","DATETIMERANGE","FROMDATETIME","TODATETIME","DATERANGE","FROM","TO","YEARTODATE","DATETOYEAR","LASTDAYS","LASTWEEKS","LASTMONTHS","LASTQUARTERS","LASTYEARS","NEXTDAYS","NEXTWEEKS","NEXTMONTHS","NEXTQUARTERS","NEXTYEARS","TODAYFROMTO","THISWEEK","LASTWEEK","NEXTWEEK","SPECIFICMONTH","THISMONTH","LASTMONTH","NEXTMONTH","THISQUARTER","LASTQUARTER","NEXTQUARTER","QUARTER1","QUARTER2","QUARTER3","QUARTER4","THISYEAR","LASTYEAR","NEXTYEAR"];var R={_options:{TODAY:new e({key:"TODAY",valueTypes:[]}),YESTERDAY:new e({key:"YESTERDAY",valueTypes:[]}),TOMORROW:new e({key:"TOMORROW",valueTypes:[]}),FIRSTDAYWEEK:new e({key:"FIRSTDAYWEEK",valueTypes:[]}),LASTDAYWEEK:new e({key:"LASTDAYWEEK",valueTypes:[]}),FIRSTDAYMONTH:new e({key:"FIRSTDAYMONTH",valueTypes:[]}),LASTDAYMONTH:new e({key:"LASTDAYMONTH",valueTypes:[]}),FIRSTDAYQUARTER:new e({key:"FIRSTDAYQUARTER",valueTypes:[]}),LASTDAYQUARTER:new e({key:"LASTDAYQUARTER",valueTypes:[]}),FIRSTDAYYEAR:new e({key:"FIRSTDAYYEAR",valueTypes:[]}),LASTDAYYEAR:new e({key:"LASTDAYYEAR",valueTypes:[]}),THISWEEK:new e({key:"THISWEEK",valueTypes:[]}),THISMONTH:new e({key:"THISMONTH",valueTypes:[]}),THISQUARTER:new e({key:"THISQUARTER",valueTypes:[]}),THISYEAR:new e({key:"THISYEAR",valueTypes:[]}),LASTWEEK:new e({key:"LASTWEEK",valueTypes:[]}),LASTMONTH:new e({key:"LASTMONTH",valueTypes:[]}),LASTQUARTER:new e({key:"LASTQUARTER",valueTypes:[]}),LASTYEAR:new e({key:"LASTYEAR",valueTypes:[]}),NEXTWEEK:new e({key:"NEXTWEEK",valueTypes:[]}),NEXTMONTH:new e({key:"NEXTMONTH",valueTypes:[]}),NEXTQUARTER:new e({key:"NEXTQUARTER",valueTypes:[]}),NEXTYEAR:new e({key:"NEXTYEAR",valueTypes:[]}),LASTDAYS:new e({key:"LASTDAYS",valueTypes:["int"]}),LASTWEEKS:new e({key:"LASTWEEKS",valueTypes:["int"]}),LASTMONTHS:new e({key:"LASTMONTHS",valueTypes:["int"]}),LASTQUARTERS:new e({key:"LASTQUARTERS",valueTypes:["int"]}),LASTYEARS:new e({key:"LASTYEARS",valueTypes:["int"]}),NEXTDAYS:new e({key:"NEXTDAYS",valueTypes:["int"]}),NEXTWEEKS:new e({key:"NEXTWEEKS",valueTypes:["int"]}),NEXTMONTHS:new e({key:"NEXTMONTHS",valueTypes:["int"]}),NEXTQUARTERS:new e({key:"NEXTQUARTERS",valueTypes:["int"]}),NEXTYEARS:new e({key:"NEXTYEARS",valueTypes:["int"]}),FROM:new e({key:"FROM",valueTypes:["date"]}),TO:new e({key:"TO",valueTypes:["date"]}),FROMDATETIME:new e({key:"FROMDATETIME",valueTypes:["datetime"]}),TODATETIME:new e({key:"TODATETIME",valueTypes:["datetime"]}),YEARTODATE:new e({key:"YEARTODATE",valueTypes:[]}),DATETOYEAR:new e({key:"DATETOYEAR",valueTypes:[]}),TODAYFROMTO:new e({key:"TODAYFROMTO",valueTypes:["int","int"]}),QUARTER1:new e({key:"QUARTER1",valueTypes:[]}),QUARTER2:new e({key:"QUARTER2",valueTypes:[]}),QUARTER3:new e({key:"QUARTER3",valueTypes:[]}),QUARTER4:new e({key:"QUARTER4",valueTypes:[]}),SPECIFICMONTH:new e({key:"SPECIFICMONTH",valueTypes:["int"]}),SPECIFICMONTHINYEAR:new e({key:"SPECIFICMONTHINYEAR",valueTypes:["int","int"]}),DATERANGE:new e({key:"DATERANGE",valueTypes:["date","date"]}),DATE:new e({key:"DATE",valueTypes:["date"]}),DATETIME:new e({key:"DATETIME",valueTypes:["datetime"]}),DATETIMERANGE:new e({key:"DATETIMERANGE",valueTypes:["datetime","datetime"]})},_allKeys:A.slice(0)};R.addOption=function(e){if(!e||!e.getKey()){return}var T=e.getKey();R._options[T]=e;if(R._allKeys.indexOf(T)===-1){R._allKeys.push(T)}};R.getAllOptionKeys=function(){return R._allKeys.slice(0)};R.getOption=function(e){return R._options[e]};R.getStandardKeys=function(){return A.slice(0)};R.parse=function(e,E,A){if(typeof e!=="string"){T.error("DynamicDateFormat can only parse a String.");return[]}var n=[],y,S=R.getStandardKeys();A=A||Object.keys(R._options);var a=A.sort(function(e,T){return S.indexOf(e)-S.indexOf(T)}).map(function(e){return R._options[e]});for(var t=0;t<a.length;t++){y=a[t]&&a[t].parse(e.trim(),E);if(y){y.operator=a[t].getKey();n.push(y)}}return n};R.toDates=function(e){var T=e.operator;return R._options[T].toDates(e)};return R},true);