Object.prototype.extends = function (properties) {
    function f() {
    }

    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    }

    f.prototype._super = this;
    return new f();
};

var Shapes = (function () {
    var shape = {
        constructor: function constructor(x, y, color) {
            Object.defineProperty(this, "x", {
                get: function () {
                    return x;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("The shape must have assigned x point.");
                    }

                    x = value;
                }
            });

            Object.defineProperty(this, "y", {
                get: function () {
                    return y;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("The shape must have assigned y point.");
                    }

                    y = value;
                }
            });

            Object.defineProperty(this, "color", {
                get: function () {
                    return color;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("The shape must have assigned color.");
                    }

                    color = value;
                }
            });

            this.x = x;
            this.y = y;
            this.color = color;

            return this;
        },

        toString: function toString() {
            return "Color: #" + this.color + ". Point: (x: " + this.x + ", y: " + this.y + ")";
        }
    };

    var circle = shape.extends({
        constructor: function constructor(x, y, color, radius) {
            shape.constructor.call(this, x, y, color);
            Object.defineProperty(this, "radius", {
                get: function () {
                    return radius;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Circle must have assigned radius.");
                    }

                    if (value < 0) {
                        throw new RangeError("Circle radius cannot be negative number.")
                    }

                    radius = value;
                }
            });

            this.radius = radius;

            return this;
        },

        toString: function toString() {
            return "Shape: Circle. " + shape.toString.call(this) + ". Radius: " + this.radius;
        }
    });

    var rectangle = shape.extends({
        constructor: function constructor(x, y, width, height, color) {
            shape.constructor.call(this, x, y, color);
            Object.defineProperty(this, "width", {
                get: function () {
                    return width;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Rectangle must have assigned width.");
                    }

                    if (value < 0) {
                        throw new RangeError("Rectangle width cannot be negative number.")
                    }

                    width = value;
                }
            });

            Object.defineProperty(this, "height", {
                get: function () {
                    return height;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Rectangle must have assigned height.");
                    }

                    if (value < 0) {
                        throw new RangeError("Rectangle height cannot be negative number.")
                    }

                    height = value;
                }
            });

            this.width = width;
            this.height = height;

            return this;
        },

        toString: function toString() {
            return "Shape: Rectangle. " + shape.toString.call(this) + ". Width: " + this.width + ". Height: " + this.height;
        }
    });

    var triangle = shape.extends({
        constructor: function constructor(ax, ay, bx, by, cx, cy, color) {
            shape.constructor.call(this, ax, ay, color);
            Object.defineProperty(this, "bx", {
                get: function () {
                    return bx;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Triangle must have assigned Bx point.");
                    }

                    bx = value;
                }
            });

            Object.defineProperty(this, "by", {
                get: function () {
                    return by;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Triangle must have assigned By point.");
                    }

                    by = value;
                }
            });

            Object.defineProperty(this, "cx", {
                get: function () {
                    return cx;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Triangle must have assigned Cx point.");
                    }

                    cx = value;
                }
            });

            Object.defineProperty(this, "cy", {
                get: function () {
                    return cy;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Triangle must have assigned Cy point.");
                    }

                    cy = value;
                }
            });

            this.bx = bx;
            this.by = by;
            this.cx = cx;
            this.cy = cy;

            return this;
        },

        toString: function toString() {
            return "Shape: Triangle. " + shape.toString.call(this) +
                ", Point: (x: " + this.bx + ", y: " + this.by + ")" +
                ", Point: (x: " + this.cx + ", y: " + this.cy + ")";
        }
    });

    var line = shape.extends({
        constructor: function constructor(ax, ay, bx, by, color) {
            shape.constructor.call(this, ax, ay, color);
            Object.defineProperty(this, "bx", {
                get: function () {
                    return bx;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Line must have assigned Bx point.");
                    }

                    bx = value;
                }
            });

            Object.defineProperty(this, "by", {
                get: function () {
                    return by;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Line must have assigned By point.");
                    }

                    by = value;
                }
            });

            this.bx = bx;
            this.by = by;

            return this;
        },

        toString: function toString() {
            return "Shape: Line. " + shape.toString.call(this) + ", Point: (x: " + this.bx + ", y: " + this.by + ")";
        }
    });

    var segment = shape.extends({
        constructor: function constructor(ax, ay, bx, by, color) {
            shape.constructor.call(this, ax, ay, color);
            Object.defineProperty(this, "bx", {
                get: function () {
                    return bx;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Segment must have assigned Bx point.");
                    }

                    bx = value;
                }
            });

            Object.defineProperty(this, "by", {
                get: function () {
                    return by;
                },
                set: function (value) {
                    if (!value) {
                        throw new Error("Segment must have assigned By point.");
                    }

                    by = value;
                }
            });

            this.bx = bx;
            this.by = by;

            return this;
        },

        toString: function toString() {
            return "Shape: Segment. " + shape.toString.call(this) + ", Point: (x: " + this.bx + ", y: " + this.by + ")";
        }
    });

    return {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    }
})();

var circle = Object.create(Shapes.circle).constructor(10, 10, 'FF0000', 8);
console.log(circle.toString());

var rectangle = Object.create(Shapes.rectangle).constructor(5, 10, 15, 10, '00A1FF');
console.log(rectangle.toString());

var triangle = Object.create(Shapes.triangle).constructor(30, 20, 10, 10, 15, 40, '6P01HH');
console.log(triangle.toString());

var line = Object.create(Shapes.line).constructor(15, 16, 10, 5, '12OOF0');
console.log(line.toString());

var segment = Object.create(Shapes.segment).constructor(4, 20, 10, 10, '00GGIA');
console.log(segment.toString());