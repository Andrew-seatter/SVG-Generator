const {
    Shape,
    Circle,
    Triangle,
    Square
  } = require('./shapes');

 describe('render', () => {

    it('should return circle cx="150" cy="100" r="80" fill="red"', () => {
        const circle = new Circle();
        circle.shapeColor = ('red');
        expect(circle.render()).toEqual('circle cx="150" cy="100" r="80" fill="red"');
    });

    it('should return polygon points="100 30, 200 200, 0 200" cx="150" cy="100" r="80" fill="green"', () => {
        const triangle = new Triangle();
        triangle.shapeColor = ('green');
        expect(triangle.render()).toEqual(`polygon points="100 30, 200 200, 0 200" cx="150" cy="100" r="80" fill="green"`);

    });

    it('should return rect x="50" y="20" width="150" height="150" fill="yellow"', () => {
        const square = new Square();
        square.shapeColor = ('yellow');
        expect(square.render()).toEqual(`rect x="50" y="20" width="150" height="150" fill="yellow"`);

    });
 });