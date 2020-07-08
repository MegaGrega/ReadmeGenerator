// Required Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project Title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions: ",
        name: "install"
    },
    {
        type: "input",
        message: "Usage Information: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributions: ",
        name: "contributions"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a License: ",
        choices: ["MIT", "Apache"],
        name: "license"
    }

];

// ReadMe Layout
const readMeText =`
# TITLE GOES HERE

## Description
        
## Table of Contents
        
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
        
## Installation
        
REPLACE THIS TEXT
        
## Usage 
        
REPLACE THIS TEXT
        
## Credits
        
REPLACE THIS TEXT
        
## License
        
REPLACE THIS TEXT
        
## Contributors
        
REPLACE THIS TEXT
        
## Tests
        
REPLACE THIS TEXT
        
## Questions
        
REPLACE THIS TEXT`

// Badge Choice 
function badge(info){
    //License Choice informs Badge Choice
    if(info.license === "MIT"){
        return "![MIT](https://img.shields.io/badge/license-MIT-green)"
    }
    if(info.license === "Apache"){
        return "https://img.shields.io/badge/license-Apache-blue"
    } 
}

//Asynchronus Function to Ask Question and Write File
async function initReadMeGen() {
    //Prompts user with Question Array
    const info = await inquirer.prompt(questions)
    // License Badge Choice
    const license = badge(info);
    //Writes the README.MD file
    await writeFileAsync("README.md",readMeText)           
}

// Initialize ReadMe Generator
initReadMeGen()



