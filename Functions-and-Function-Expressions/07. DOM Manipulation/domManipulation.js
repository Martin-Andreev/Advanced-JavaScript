var domModule = (function () {
    var appendChild = function (element, selector) {
        var parent = document.querySelector(selector);
        parent.appendChild(element);
    }
    
    var removeChild = function (selector, child) {
        var parent = document.querySelector(selector);
        var node = document.querySelector(child);
        parent.removeChild(node);
    }
    
    var addHandler = function (element, event, functionToPerform) {
        element = document.querySelector(element);
        element.addEventListener(event, functionToPerform);
    }
    
    var retrieveElements = function (selector) {
        return document.querySelector(selector);

    }
    
    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }

})();

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild(liElement, ".birds-list");

// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list", "li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function () { alert("I'm a bird!") });

// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
