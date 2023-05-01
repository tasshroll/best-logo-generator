const { Triangle, Circle, Square } = require('./shapes.js');


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


function generate(data) {
    console.log("DDDData is: ", data);
    const { shp, color, text, textColor } = data;

    // Instantiate new object based on user shape input
    switch (shp) {
        case 'triangle':
            // code for triangle
            const shape = new Triangle();
            shape.setColor(color);
            // Set Color for Shape
            var code = shape.render();
            shape.setText(text, textColor);
            // Add Text and Text Color
            var textCode = shape.renderText();

            // Write SVG
            return (generateSVG(code, textCode));
        // return (generateSVG(shape.render(), shape.renderText()));

        case 'square':
            // code for square
            const squareShape = new Square();
            squareShape.setColor(color);
            // Set Color for Shape
            var code = squareShape.render();
            squareShape.setText(text, textColor);
            // Add Text and Text Color
            var textCode = squareShape.renderText();

            // Write SVG
            return (generateSVG(code, textCode));
        case 'circle':
            // code for circle
            const cirShape = new Circle;
            cirShape.setColor(color);
            var code = cirShape.render();
            cirShape.setText(text, textColor);
            var textCode = cirShape.renderText();
            return (generateSVG(code, textCode));
        default:
        // code to execute if shape doesn't match any of the cases
    }
}
//  generate({
//     "shp": "square",
//     "color": "orange",
//     "text": "lol",
//     "textColor": "purple"
//    });

module.exports = { generate };

