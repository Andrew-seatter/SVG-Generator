const generateSVG = (answers) => {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
<${newShape(answers.shape)} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
  
          
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${answers.color}">${answers.letters}</text>
          
    </svg>`;
}

const newShape = (answers) => {
    switch (answers) {
        case 'Circle':
            return 'circle';
        case 'Triangle':
            return 'triangle';
        case 'Square':
            return 'square';
    }
}

module.exports = generateSVG;