// Shape Class that is the super class
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor (color) {
        console.log (`Setting color to ${color}`);
    }
}

// Triangle Class
class Triangle extends Shape {
    constructor(height, base) {
        this.height = height;
        this.base = base;
    }
    // Function that accepts 3 vertices with x,y coordinates to make triangle
    render(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
        console.log (`Rendering`);
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return (.5*this.base *this.height);
    }
}

// Circle Class
class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
    }
}
// Rectangle Class
class Square extends Shape {
    constructor(side) {
        this.side = side;
    }
}

module.exports = Triangle, Circle, Square;