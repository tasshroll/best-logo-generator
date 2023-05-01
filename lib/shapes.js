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
        console.log(`Setting text to ${text}`);
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
        //The first pair 150, 18 represents the coordinates 
        // of the top vertex, the second pair 244, 182 represents the coordinates of the bottom-right vertex, 
        // and the third pair 56, 182 represents the coordinates of the bottom-left vertex. 
    }

    renderText() {
        var userText = this.text;
        var textColor = this.textColor;
        console.log("Rendering TEXT color of", this.textColor);
        console.log("Rendering using text of", this.text);
        //return (`<text x="113" y="140" font-size="45" text-anchor="middle" fill="${textColor}">${userText}</text>`);
        return (`<text x="150" y="140" font-size="58" text-anchor="middle" fill="${textColor}">${userText}</text>`);
    }
}
// Circle Class
class Circle extends Shape {
    render() {
        var userColor = this.color;
        console.log("Rendering circle color of", this.color);
        //var htmlForShape = '<polygon points="${vertexString}" fill="${color}"/>';  
        //return (`<circle cx="150" cy="118" r="80" fill="${userColor}"/>`);
        return (`<circle cx="150" cy="100" r="80" fill="${userColor}"/>`);
    }
    renderText() {
        var userText = this.text;
        var textColor = this.textColor;
        console.log("Rendering TEXT color of", this.textColor);
        console.log("Rendering using text of", this.text);
        //return (`<text x="113" y="138" font-size="45" fill="${textColor}">${userText}</text>`);
        return (`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${userText}</text>`);
    }
}
// Rectangle Class
class Square extends Shape {
    constructor(side, color) {
        super(color);
        this.side = side;
    }
    render() {
        var userColor = this.color;
        console.log("Rendering square color of", this.color);
        //var htmlForShape = '<polygon points="${vertexString}" fill="${color}"/>';  
        //return (`<circle cx="150" cy="118" r="80" fill="${userColor}"/>`);
        return (`<rect x="66" y="18" width="160" height="160" fill="${userColor}"/>`);
    }

    renderText() {
        var userText = this.text;
        var textColor = this.textColor;
        console.log("Rendering TEXT color of", this.textColor);
        console.log("Rendering using text of", this.text);
        //return (`<text x="113" y="138" font-size="45" fill="${textColor}">${userText}</text>`);
        return (`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${userText}</text>`);
    }
}

// function generateSVG(codeForShape, codeForText) {
//     // Generate SVG code - insert shape specific code and color
//     var outputSVG =
//         `<?xml version="1.0" standalone="no"?>
//         <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//           ${codeForShape}
//           ${codeForText} 
//         </svg>`
//     return (outputSVG);
// };

// function generateLogo(data) {
//     console.log("DDDData is: ", data);
//     const { shp, color, text, textColor } = data;

//     // Instantiate new object based on user shape input
//     switch (shp) {
//         case 'triangle':
//             // code for triangle
//             const shape = new Triangle();
//             shape.setColor(color);
//             // Set Color for Shape
//             var code = shape.render();
//             shape.setText(text, textColor);
//             // Add Text and Text Color
//             var textCode = shape.renderText();

//             // Write SVG
//             return (generateSVG(code, textCode));
//         // return (generateSVG(shape.render(), shape.renderText()));

//         case 'square':
//             // code for square
//             break;
//         case 'circle':
//             // code for circle
//             const cirShape = new Circle;
//             cirShape.setColor(color);
//             var code = cirShape.render();
//             cirShape.setText(text, textColor);
//             var textCode = cirShape.renderText();
//             return (generateSVG(code, textCode));
//         default:
//         // code to execute if shape doesn't match any of the cases
//     }
// }

//  generateLogo({
//     "shp": "circle",
//     "color": "orange",
//     "text": "lol",
//     "textColor": "purple"
//    });
// module.exports = { Triangle, Square, Circle, generateLogo };
module.exports = { Triangle, Square, Circle };

// module.exports = { Square };
// module.exports = { generateLogo };


