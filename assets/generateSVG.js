const generateSVG = (answers) => {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
<${newShape(answers.shape)}"${answers.shapeColor}" />
  
          
        <${newText(answers.shape)}"${answers.color}">${answers.letters}</text>
          
    </svg>`;
}

const newShape = (answers) => {
    switch (answers) {
        case 'Circle':
            return 'circle cx="150" cy="100" r="80" fill=';
        case 'Triangle':
            return 'polygon points="100 30, 200 200, 0 200" cx="150" cy="100" r="80" fill=';
        case 'Square':
            return 'rect x="50" y="20" width="150" height="150" fill=';
    }
}

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

module.exports = generateSVG;