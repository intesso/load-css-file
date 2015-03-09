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
