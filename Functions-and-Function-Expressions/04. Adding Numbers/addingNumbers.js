function add(firstNumber) {
    var sum = function (secondNumber) {
        return add(firstNumber + secondNumber);
    };
    
    sum.valueOf = sum.toString = function () {
        return firstNumber;
    };
    
    return sum;
}

var addTwo = +add(2);
console.log(addTwo);

console.log(+add(1)(0)(-1)(-1));

var addTwo = add(2);
console.log(+addTwo(3)(5));
