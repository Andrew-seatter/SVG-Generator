const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSVG');
const {
  Shape,
  Circle,
  Triangle,
  Square
} = require('./lib/shapes');


//questions array for inquirer prompt
const questions = [
    {
      type: 'input',
      name: 'letters',
      message: 'Type up to 3 characters for your logo to have'  
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for your the letters in your logo'
    },
    {
        type: 'list',
        name:'shapeChoice',
        message: 'Choose a shape below',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color for your shape'
    }
]

//write file function to create svg file
 function writeToFile(fileName, contentText){
    fs.writeFile(fileName, contentText, (err) => {
      err ? console.log(err) : console.log('Generated your Logo')
    });
  }


function init() {
  inquirer.prompt(questions)
  .then((answers) => {
     const newLogo = generateSvg(answers);
     const newFileName = 'example.svg';
    

      writeToFile(newFileName, newLogo);
  });
}

//calling function upon starting the application
init();