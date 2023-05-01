const shapes = require("./shapes.js");
const { Triangle } = require('./shapes.js');
const { Square } = require('./shapes.js');
const { Circle } = require('./shapes.js');

// This example test should pass
// const testShape = new Triangle();
// testShape.setColor("blue");

// A testing suite for Triangles is created.
describe('Triangle', () => {
  // A test is created to check that render returns a polygon with specific points and blue background
  describe('render ()', () => {
    it('should return a blue SVG triange element', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toEqual(expected);
    });
  });

  // A test is created to check that render returns a polygon with specific points and blue background
  describe('renderText()', () => {
    it('should return a purple SVG triangle with "DOM" as text.', () => {
      const triangle = new Triangle();
      triangle.setText('dom', 'purple');
      const expected = '<text x="150" y="140" font-size="58" text-anchor="middle" fill="purple">DOM</text>';

      expect(triangle.renderText()).toEqual(expected);
    });
  });
});

describe('Circle', () => {
  // A test is created to check that render returns a polygon with specific points and blue background
  describe('render()', () => {
    it('should return a blue SVG circle element', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const expected = '<circle cx="150" cy="100" r="80" fill="blue"/>';

      expect(circle.render()).toEqual(expected);
    });
  });

  // A test is created to check that render returns a polygon with specific points and blue background
  describe('renderText()', () => {
    it('should return a purple SVG circle with "LOL" as text', () => {
      const circle = new Circle();
      circle.setText('lol', 'purple');
      const expected = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">LOL</text>';

      expect(circle.renderText()).toEqual(expected);
    });
  });
});
// Write test for generateLogo
// describe('generateLogo'), () => {
//   it('should return SVG text'), () => {
//     const expected = `<?xml version="1.0" standalone="no"?>
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//   <polygon points="150, 18 244, 182 56, 182" fill="white" />
//   <text x="113" y="140" font-size="45" fill="green">QLL</text> 
// </svg>`;
//     expect(triangle.shapes.generateLogo({
//       "shp": "triangle",
//       "color": "orange",
//       "text": "lol",
//       "textColor": "purple"
//     })).toEqual(expected);
//   }
// }


describe('Square', () => {
  // A test is created to check that render returns a polygon with specific points and blue background
  describe('render()', () => {
    it('should return an orange SVG square element', () => {
      const square = new Square();
      square.setColor('orange');
      const expected = ('<rect x="66" y="18" width="160" height="160" fill="orange"/>');

      expect(square.render()).toEqual(expected);
    });
  });
// A test is created to check that render returns a polygon with specific points and blue background
describe('renderText()', () => {
  it('should return a SVG yellow square and text = "TAS"', () => {
    const square = new Square();
    circle.setText('tas', 'yellow');
    const expected = ('<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">TAS</text>');

    expect(square.renderText()).toEqual(expected);
  });
});

});


//   The '<polygon points="150, 18 244, 182 56, 182" fill="blue" />' 
//   string represents a polygon with three vertices, and the points specified in the 
//   points attribute (150, 18 244, 182 56, 182) form a triangle shape.
// Each pair of values in the points attribute specifies the x and y coordinates of a 
// vertex in the polygon, in the format x,y. The first pair 150, 18 represents the coordinates 
// of the top vertex, the second pair 244, 182 represents the coordinates of the bottom-right vertex, 
// and the third pair 56, 182 represents the coordinates of the bottom-left vertex. Together, these 
// three vertices form a triangle.