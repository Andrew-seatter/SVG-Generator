class Shape {
    constructor(letters, textColor, shapeColor){
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Shape choice needs to be made');
    }

}

class Circle extends Shape {
    constructor(letters, textColor, shapeColor, shapeChoice){
        super(letters, textColor, shapeColor);
        this.shapeChoice = shapeChoice;
    }

    render() {
        return `${shapeChoice}cx="150" cy="100" r="80" fill=${shapeColor}`;
    }
}

class Triangle extends Shape {
    constructor(letters, textColor, shapeColor, shapeChoice){
        super(letters, textColor, shapeColor);
        this.shapeChoice = shapeChoice;
    }

    render(){
        return `polygon points="100 30, 200 200, 0 200" cx="150" cy="100" r="80" fill=${shapeColor}`;
    }
}

class Square extends Shape {
    constructor(letters, textColor, shapeColor, shapeChoice){
        super(letters, textColor, shapeColor);
        this.shapeChoice = shapeChoice;
    }

    render() {
        return `rect x="50" y="20" width="150" height="150" fill=${shapeColor}`;
    }
}

module.exports = {Shape, Circle, Triangle, Square};