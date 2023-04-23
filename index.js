// import shapes
const shapes = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color or hexadecimal number for your SVG logo',
        default() {
            return 'N/A';
        },
        validate: function (input) {
            // Check if input is a valid color keyword
            if (/^(red|orange|yellow|green|blue|purple|pink|black|white)$/.test(input)) {
                return true;
            }
            // Check if input is a valid hexadecimal number
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input)) {
                return true;
            }
            // If input is neither a valid color keyword nor a valid hexadecimal number, return an error message
            return 'Please enter a valid color keyword or hexadecimal number.';
        }
    },
    {
        type: "list",
        message: "Select a shape for your logo ",
        name: "shp",
        choices: [
            'circle',
            'triangle',
            'rectangle',
        ],
    },
    {
        type: 'input',
        name: 'text',
        message: "Type 3 characters for your logo",
        validate(charString) {
            console.log(charString);
            if (charString.length < 3) {
                return 'Must be at least 3 lines.';
            }
            return true;
        },
    }
];

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// Write user input to the README file
function writeToFile(fileName, data) {

    console.log("fileName is ", fileName);
    fs.writeFile('fileName', data, (err) =>
        err ? console.log(err) : console.log('Success! Generated logo.svg!')
    );
}

function init() {
    inquirer.prompt(questions)

        .then((answers) => {
            console.log(JSON.stringify(answers, null, ' '));

            const logo = shapes.generateLogo(answers);
            console.log ("Logo code is", logo);

            fs.writeFile('./output/logo.svg', logo, (err) =>
            err ? console.log(err) : console.log('Success! Generated logo.svg!')
        );

        });
};

init();
