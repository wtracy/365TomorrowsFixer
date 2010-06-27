// ==UserScript==
// @name           365Tomorrows Fixer
// @namespace      helloworld
// @include        http://www.365tomorrows.com/*
// ==/UserScript==



function addAnchorStyle() {
	try {
		var elmHead, elmStyle;
		elmHead = document.getElementsByTagName('a');
		for (var i = 0; i < elmHead.length; ++i) {
                        elmHead[i].style.textDecoration = 'underline';
		}
	} catch (e) {
		alert('Something went wrong!');
		if (!document.styleSheets.length) {
			document.createStyleSheet();
		}
		document.styleSheets[0].cssText += css;
	}
}


addAnchorStyle();


elm = document.getElementsByTagName('p');
for (var i = 0; i < elm.length; ++i) {
	var str = '';
	for (var j = 0; j < elm[i].childNodes.length; ++j) {
		var childNode = elm[i].childNodes[j];
		var nodeType = childNode.nodeType;
		if (nodeType == 3) {
			str = childNode.nodeValue.replace(/â€™/g, "'");
			str = str.replace(/â€˜/g, "'");
			str = str.replace(/â€œ/g, '“');
			str = str.replace(/â€/g, '”');
			str = str.replace(/Ã©/g, 'é');
			str = str.replace(/â€”/g, '—');
			str = str.replace(/â€¦/g, '...');
			str = str.replace(/â„¢/g, '©');
			str = str.replace(//g, ''); // no clue what this was supposed to be
			var elmNewContent = document.createTextNode(str);
			childNode.parentNode.replaceChild(elmNewContent, childNode);
		}
	}
}
