'use strict';

Array.prototype.flatten = function (){
    var outputArray = [];
    getArrayValues(this);

    function getArrayValues (array) {
        for (var i = 0; i < array.length; i++) {
            var currentElement = array[i];
            if (typeof currentElement != "object") {
                outputArray.push(currentElement);
            } else {
                getArrayValues(currentElement);
            }
        }
    }

    return outputArray;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log();

var array2 = [1, 2, [3, 4], [5, 6]];
console.log(array2.flatten());
console.log(array2); // Not changed
console.log();

var array3 = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array3.flatten());
