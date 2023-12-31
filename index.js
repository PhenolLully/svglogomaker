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
      message: 'Input text for logo(Only 3 characters)',
    }, 
    {
      type: 'input',
      name: 'textColor',
      message: 'Choose text color(Enter color keyword or hexadecimal)',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Choose shape color(Enter color keyword or hexadecimal)",
    },
    {
      type: 'list',
      name: 'shapeImage',
      message: 'Choose shape',
      choices: ['Circle', "Triangle", "Square"]
    }
  ]);
};

const generateLogo = ({ text, textColor, shapeColor, shapeImage}) =>
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



