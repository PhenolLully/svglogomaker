// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Can you input 3 characters for your logo? ',
    }, 
    {
      type: 'input',
      name: 'textColor',
      message: 'Provide a color keyword or hexadecimal color for text',
    },
    {
      type: 'list',
      name: 'shapes',
      choices: ['Circle', "Triangle", "Square" ],
      message: 'Choose one of these shapes',
    },
    {
        type: 'list',
        name: 'shapeColor',
        choices: "Provide a color keyword or hexadecimal color for the shape you chose",
        message: 'what were the steps to install your project?',
    },
  ]);
};

const generateLogo = ({ text, textColor, shapes, shapecolor}) =>
`


`;



// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateLogo(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();



