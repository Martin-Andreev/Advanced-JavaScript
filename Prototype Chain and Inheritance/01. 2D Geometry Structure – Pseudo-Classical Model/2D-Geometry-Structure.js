'use strict'

Function.prototype.extends = function (parent) {
    if (!Object.create) {
        Object.prototype.create = function (proto) {
            function F() {
            }

            F.prototype = proto;
            return new F();
        };
    }

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Shapes = (function () {
    var self;
    var shape = (function () {
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype.toString = function () {
            return "Color: #" + this._color + ". Point: (x: " + this._x + ", y: " + this._y + ")";
        };

        return Shape;
    })();

    var circle = (function () {
        function Circle(x, y, color, radius) {
            shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.extends(shape);

        Circle.prototype.toString = function () {
            return "Shape: Circle. " + shape.prototype.toString.call(this) + ". Radius: " + this._radius;
        };

        return Circle;
    })();

    var rectangle = (function () {
        function Rectangle(x, y, width, height, color) {
            shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(shape);

        Rectangle.prototype.toString = function () {
            return "Shape: Rectangle. " + shape.prototype.toString.call(this) + ". Width: " + this._width + ". Height: " + this._height;
        };

        return Rectangle;
    })();

    var triangle = (function () {
        function Triangle (ax, ay, bx, by, cx, cy, color) {
            shape.call(this, ax, ay, color);
            this._bx = bx;
            this._by = by;
            this._cx = cx;
            this._cy = cy;
        }

        Triangle.extends(shape);

        Triangle.prototype.toString = function () {
            return "Shape: Triangle. " + shape.prototype.toString.call(this) +
                ", Point: (x: " + this._bx + ", y: " + this._by + ")" +
                ", Point: (x: " + this._cx + ", y: " + this._cy + ")";
        };

        return Triangle;
    })();

    var line = (function () {
        function Line (ax, ay, bx, by, color) {
            shape.call(this, ax, ay, color);
            this._bx = bx;
            this._by = by;
        }

        Line.extends(shape);

        Line.prototype.toString = function () {
            return "Shape: Line. " + shape.prototype.toString.call(this) + ", Point: (x: " + this._bx + ", y: " + this._by + ")";
        };

        return Line;
    })();

    var segment = (function () {
        function Segment(ax, ay, bx, by, color) {
            shape.call(this, ax, ay, color);
            this._bx = bx;
            this._by = by;
        }

        Segment.extends(shape);

        Segment.prototype.toString = function () {
            return "Shape: Segment. " + shape.prototype.toString.call(this) + ", Point: (x: " + this._x + ", y: " + this._y + ")";
        };

        return Segment;
    }());

    self = {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    };

    return self;
})();

var circle = new Shapes.circle(50, 50, 'FF00FF', 5);
console.log(circle.toString());

var rectangle = new Shapes.rectangle(5, 10, 15, 10, '00A1FF');
console.log(rectangle.toString());

var triangle = new Shapes.triangle(30, 20, 10, 10, 15, 40, '6P01HH');
console.log(triangle.toString());

var line = new Shapes.line(15, 16, 10, 5, '12OOF0');
console.log(line.toString());

var segment = new Shapes.segment(4, 20, 10, 10, '00GGIA');
console.log(segment.toString());
