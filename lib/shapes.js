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

function generateHTML(htmlForShape) {
    var htmlForSVG =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <svg viewBox="0 0 300 200">
                ${htmlForShape}
            </svg>
    
    </body>
    
    </html>`;
    return (htmlForSVG);
    // points are (150,18) (244, 182) (56,182)
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
            var html = shape.render();
            console.log ("html for triangle is ", html);
            //render will set '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            return (generateHTML(html));
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

generateLogo({
    "color": "red",
    "shp": "triangle",
    "text": "ddd"
   });
//module.exports = { generateLogo };
