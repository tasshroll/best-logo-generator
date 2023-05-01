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
    const { shp, color, text, textColor } = data;

    // Instantiate new object based on user shape input
    switch (shp) {
        case 'triangle':
            // instantiate new triangle object
            const triShape = new Triangle();
            triShape.setColor(color);
            // Render SVG code line for triangle shape
            var code = triShape.render();
            // Render SVG code line for triangle Text and Text Color
            triShape.setText(text, textColor);
            var textCode = triShape.renderText();

            // Write block of code for SVG logo
            return (generateSVG(code, textCode));
        // return (generateSVG(shape.render(), shape.renderText()));

        case 'square':
            // instantiate new square object
            const squareShape = new Square();
            squareShape.setColor(color);
            // Render SVG code line for square shape
            var code = squareShape.render();
            // Render SVG code line for triangle Text and Text Color
            squareShape.setText(text, textColor);
            var textCode = squareShape.renderText();

            // Write block of code for SVG logo
            return (generateSVG(code, textCode));
        case 'circle':
            // instantiate new circle object
            const cirShape = new Circle;
            // Render SVG code line for circle shape
            cirShape.setColor(color);
            var code = cirShape.render();
            // Render SVG code line for circle Text and Text Color
            cirShape.setText(text, textColor);
            var textCode = cirShape.renderText();
            // Write block of code for SVG logo
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

