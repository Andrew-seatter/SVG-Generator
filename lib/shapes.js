//module code for class structure for 3 different types of shape
//each shape pulls the shape choice from the answer and the desired color
//and returns back a string for the svg in the render function of each class
class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Shape choice needs to be made');
    }

}

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    render() {
        return `circle cx="150" cy="100" r="80" fill="${this.shapeColor}"`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    render(){
        return `polygon points="100 30, 200 200, 0 200" cx="150" cy="100" r="80" fill="${this.shapeColor}"`;
    }
}

class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    render() {
        return `rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"`;
    }
}

module.exports = {Shape, Circle, Triangle, Square};