(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loadCss = require('../index.js');
loadCss('//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css');

},{"../index.js":2}],2:[function(require,module,exports){
module.exports = function(attributes) {
	// setting default attributes
	if (typeof attributes === "string") {
		var href = attributes;
		attributes = {
			href: href
		};
	}
	if (!attributes.rel) {
		attributes.rel = "stylesheet"
	}
	// appending the stylesheet... just plain dom manipulations
	var styleSheet = document.createElement("link");
	for (var key in attributes) {
		styleSheet.setAttribute(key, attributes[key]);
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(styleSheet);
};

},{}]},{},[1]);
