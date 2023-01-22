// dependencies
//  - external
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
//  - local
const generateMarkdown = require("./utils/generateMarkdown");
const getGitHub = require("./utils/getGitHub.js");

let title = "";

const questions = [
  {
    type: "input",
    name: "repo",
    message: "Enter your GitHub repository name for GitHub badges. Defaults to",
    default: "simple-readme-generator"
  },
  {
    type: "input",
    name: "title",
    message: "Enter your project title. Defaults to (GitHib repo name)"
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: ["MIT", "GPLv3", "APACHE 2.0", "BSD 3", "None"],
    default: "MIT",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username. Defaults to",
    default: "stevelab1"
  },
];

// write README file function
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize program function
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    console.log("Generating.... Please wait....");
    writeToFile("./generated/README.md", generateMarkdown({ ...userAnswers }));
  });
}

// function call to initialize program
init();
