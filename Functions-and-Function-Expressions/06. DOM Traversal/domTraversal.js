'use strict';

var selector = '.birds';
var element = document.querySelector(selector);
traverse(element);

function traverse(element) {
    traverseNode(element, '');
    
    function traverseNode(element, spacing) {
        //spacing = spacing || '  ';
        var elementNodeName = element.nodeName.toLocaleLowerCase();
        var elementId = element.id ? "id= " + element.id + "\" " : "";
        var elementClass = element.className ? "class=\"" + element.className + "\"" : "";
        console.log(spacing + elementNodeName + ": " + elementId + elementClass);
        for (var i = 0, len = element.childNodes.length; i < len; i++) {
            var child = element.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}

