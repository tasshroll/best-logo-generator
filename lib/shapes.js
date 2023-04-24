// Shape Class that is the super class
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        console.log(`Setting color to ${color}`);
        this.color = color;
    }
    setText(text, textColor) {
        console.log(`Setting color to ${textColor}`);
        console.log (`Setting text to ${text}`);
        this.textColor = textColor;
        this.text = text.toUpperCase();
    }
}

// Triangle Class
class Triangle extends Shape {

    //shape.render(150, 18 244, 182 56, 182);
    render() {
        var userColor = this.color;
        console.log("Rendering shape color of", this.color);
        //var htmlForShape = '<polygon points="${vertexString}" fill="${color}"/>';
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${userColor}" />`);
    }

    renderText() {
        var userText = this.text;
        var textColor = this.textColor;
        console.log("Rendering TEXT color of", this.textColor);
        console.log("Rendering using text of", this.text);

        return (`<text x="113" y="140" font-size="45" fill="${textColor}">${userText}</text>`);

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

function generateSVG(codeForShape, codeForText) {
    // Generate SVG code - insert shape specific code and color
    var outputSVG =
        `<?xml version="1.0" standalone="no"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${codeForShape}
          ${codeForText} 
        </svg>`
    return (outputSVG);
};

function generateLogo(data) {
    console.log("DDDData is: ", data);
    const { shp, color, text, textColor } = data;

    // Instantiate new object based on user shape input
    switch (shp) {
        case 'triangle':
            // code for triangle
            const shape = new Triangle();
            shape.setColor(color);
            var code = shape.render();
            console.log("SVG code for triangle is ", code);
            //render will set '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            shape.setText(text, textColor);

            var textCode = shape.renderText();
            return (generateSVG(code, textCode));
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

//  generateLogo({
//     "shp": "triangle",
//     "color": "orange",
//     "text": "lol",
//     "textColor": "purple"
//    });
module.exports = { Triangle, Square, generateLogo };
// module.exports = { Square };
// module.exports = { generateLogo };


