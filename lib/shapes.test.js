const shapes = require ("./shapes.js");
const { Triangle } = require('./shapes.js');
const { Square } = require('./shapes.js');



// This example test should pass
// const testShape = new Triangle();
// testShape.setColor("blue");

// A testing suite for Shapes is created.
// describe('shapes', () => {
//     // A test is created to check that sum does in fact return the two numbers added together.
//     describe('shapes', () => {
//       it('should return polygon points of (150,18) (244,182) (56,182) and indicate fill = blue', () => {
//         const testShape = new Triangle();
//         testShape.setColor(color);
//         expect(testShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
//       });
//     });
//   });
// A testing suite for Triangles is created.

  describe('Triangle', () => {
    // A test is created to check that render returns a polygon with specific points and blue background
    describe('render()', () => {
      it('should return an SVG polygon element as a string with the correct fill color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        expect(triangle.render()).toEqual(expected);
      });
    });
  });

  describe('Triangle', () => {
    // A test is created to check that render returns a polygon with specific points and blue background
    describe('renderText()', () => {
      it('should return a SVG text element as a string with "LOL" and fill text color of purple.', () => {
        const triangle = new Triangle();
        triangle.setText('LOL', 'purple');
        const expected = '<text x="113" y="140" font-size="45" fill="purple">LOL</text>';
        expect(triangle.renderText()).toEqual(expected);
      });
    });
  });

  describe('Square', () => {
    // A test is created to check that render returns a polygon with specific points and blue background
    describe('render()', () => {
      it('should return an SVG polygon element as a string with the correct fill color', () => {
        const square = new Square();
        square.setColor('blue');
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        expect(square.render()).toEqual(expected);
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