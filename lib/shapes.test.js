const Shapes = require (".shapes.js");

// This example test should pass
const shape = new Triangle();
shape.setColor("blue");


// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('shape', () => {
      it('should create a blue triangle with vertices at (150,18) (244,182) (56,182)', () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
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