// Shape Class that is the super class
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        console.log(`Setting color to ${color}`);
        this.color = color;
    }
}

// Triangle Class
class Triangle extends Shape {
    
    //shape.render(150, 18 244, 182 56, 182);
    render() {
        var userColor = this.color;
        console.log("Rendering using color of", this.color);
        //var htmlForShape = '<polygon points="${vertexString}" fill="${color}"/>';
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${userColor}" />`);
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return (.5 * this.base * this.height);
    }
}

// Circle Class
class Circle extends Shape {
    constructor(radius, color) {
        super(color);

        this.radius = radius;
    }
}
// Rectangle Class
class Square extends Shape {
    constructor(side, color) {
        super(color);

        this.side = side;
    }
}

function generateSVG(codeForShape) {
    // Generate SVG code - insert shape specific code and color
    var outputSVG =
        `<?xml version="1.0" standalone="no"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${codeForShape} />
          <text x="113" y="140" font-size="45" fill="white">TAS</text>
        </svg>`
    return (outputSVG);
};

function generateLogo(data) {
    console.log("DDDData is: ", data);
    const { color, shp, text } = data;

    // Instantiate new object based on user shape input
    switch (shp) {
        case 'triangle':
            // code for triangle
            const shape = new Triangle();
            shape.setColor(color);
            console.log ("Shape is ", shape.color);
            var code = shape.render();
            console.log ("SVG code for triangle is ", code);
            //render will set '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            return (generateSVG(code));
            break;
        case 'square':
            // code for square
            break;
        case 'circle':
            // code for circle
            break;
        default:
        // code to execute if shape doesn't match any of the cases
    }
    //shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
}

// generateLogo({
//     "color": "red",
//     "shp": "triangle",
//     "text": "ddd"
//    });
module.exports = { generateLogo };
module.exports = { Triangle };

