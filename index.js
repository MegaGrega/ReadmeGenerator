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
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    getReadMeInfo()
}

//Asynchronus Function to Ask Questions
async function getReadMeInfo() {
    //Prompts user with Question Array
    const info = await inquirer.prompt(questions)      
    //Writes the README.MD file                 
    await writeFileAsync("README.md",
        `Project Title: ${info.title}
        ${info.description}
        ${info.install}
        ${info.usage}
        ${info.contributions}
        ${info.tests}`
    )
}

// function call to initialize program
init();
