String.prototype.startsWith = function (substring){
    return this.substring(0, substring.length) === substring;
};

String.prototype.endsWith = function (substring){
    return this.substring(this.length - substring.length, this.length) === substring;
};

String.prototype.left = function (count){
    return this.substring(0, count);
};

String.prototype.right = function (count){
    return this.substring(this.length - count, this.length);
};

String.prototype.padLeft = function (){
    var count = arguments[0] - this.length + 1;
    if (count < 0) {
        count = 0;
    }

    var character = arguments.length == 2 ? arguments[1] : ' ';
    character = new Array(count).join(character);

    return character + this;
};

String.prototype.padRight = function (){
    var count = arguments[0] - this.length + 1;
    if (count < 0) {
        count = 0;
    }

    var character = arguments.length == 2 ? arguments[1] : ' ';
    character = new Array(count).join(character);

    return this + character;
};

String.prototype.repeat = function (count){
    return new Array(count + 1).join(this);
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

var example2 = "abcdefgh";
console.log(example2.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));