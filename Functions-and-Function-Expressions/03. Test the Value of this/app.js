function testContext() {
    console.log(this);
};

(function showDetails() {
    console.log("From another function:");
    testContext();
    //Inside a function, the value of this depends on how the function is called
})();

//console.log("\nFrom global scope:");
//testContext();
//In the global context, this refers to the global object.

//var tester = new testContext();