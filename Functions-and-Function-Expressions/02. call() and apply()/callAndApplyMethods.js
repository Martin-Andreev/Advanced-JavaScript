'use strict';

function printArgsInfo() {
    console.log("Number of arguments: " + arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " (" + typeof arguments[i] + ")");
    }
}


printArgsInfo.apply(null, [10, "Champion", 1]);
console.log();
printArgsInfo.apply();

console.log();
printArgsInfo.call(null, 1, 2, "SoftUni");
console.log();
printArgsInfo.call();