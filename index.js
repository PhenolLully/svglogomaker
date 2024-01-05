const filesystem = require("graceful-fs");
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");


class SVG{
  constructor(){
    this.text = ""
    this.shape = ""
  }
  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
  }
  setText(text, color){
    this.text = ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">SVG</text>`
  }
  setShape(shape){
    this.shape = shape.render()
  }
}

const { writeFile } = require('fs').promises;


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
{
  let shape;
  if(shapeImage == 'Circle'){
    shape = new Circle()
    shape.setColor(shapeColor)
  }else if(shapeImage == 'Triangle'){
    shape = new Triangle()
    shape.setColor(shapeColor)
  }else{
    shape = new Square()
    shape.setColor(shapeColor)
  }
  return`
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;
}


const init = () => {
  promptUser()

    .then((answers) => writeFile('Logo.svg', generateLogo(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();



