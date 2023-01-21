// dependencies
// external
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// local
const generateMarkdown = require("./utils/generateMarkdown");

// array of user prompt questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Project Title",
        
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Please enter your project title!");
                return false;
            }
        }
    },
];

// write README file function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize program function
function init() {
    inquirer.prompt(questions)
        .then((userAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./generated/README.md", generateMarkdown({ ...userAnswers }));
        })
}

// function call to initialize program
init();
