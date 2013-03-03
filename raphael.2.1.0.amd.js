// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ "Raphaël 2.1.0" - JavaScript Vector Library                         │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\

// This module combines the core raphael module with the svg and vml modules
// to return a complete raphael object. Apps that want to use Raphaël as an
// AMD module should reference this file.
//
// Apps that want to load a plain old script that exports window.raphael
// should use the combined raphael.js file.

define([
	'/js/libs/raphael/raphael.2.1.0.core.js', 
	'/js/libs/raphael/raphael.2.1.0.svg.js', 
	'/js/libs/raphael/raphael.2.1.0.vml.js'
], function (R) {
    return R.ninja();
});
