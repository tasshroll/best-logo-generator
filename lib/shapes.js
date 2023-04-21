// Shape Class that is the super class
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor (color) {
        console.log (`Setting color to ${color}`);
    }
}

// Rectangle Class
class Triangle extends Shape {
    constructor(height, base) {
        this.height = height;
        this.base = base;
    }
    render() {
        console.log (`Rendering`);
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
