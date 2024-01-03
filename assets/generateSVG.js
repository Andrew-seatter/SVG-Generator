const {
    Shape,
    Circle,
    Triangle,
    Square
} = require('./shapes');

// creates a class dependent on the answers chosen
const generateSVG = (answers) => {
    const newCircle = new Circle(answers.shapeColor, answers.shapeChoice);
    const newTriangle = new Triangle(answers.shapeColor, answers.shapeChoice);
    const newSquare = new Square(answers.shapeColor, answers.shapeChoice);


    //switch statement to choose which class to render
const newShape = (answers) => {
    switch (answers) {
        case 'Circle':
            return newCircle.render();
        case 'Triangle':
            return newTriangle.render();
        case 'Square':
            return newSquare.render();
    }
}

//returns certain font sizing and postioning depending on shape choice
const newText = (answers) => {
    switch (answers) {
        case 'Circle':
            return `text x="150" y="110" font-size="40" text-anchor="middle" fill=`;
        case 'Triangle':
            return `text x="100" y="150" font-size="40" text-anchor="middle" fill=`
        case 'Square':
            return `text x="100" y="150" font-size="40" text-anchor="middle" fill=`
    }
  }

  //returns whole svg file code
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
<${newShape(answers.shapeChoice)}"${answers.shapeColor}" />
  
          
        <${newText(answers.shapeChoice)}"${answers.color}">${answers.letters}</text>
          
    </svg>`;
}

module.exports = generateSVG;