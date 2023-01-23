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
    name: "github",
    message: "Enter your GitHub username:",
    // message: "Enter your GitHub username. Defaults to",
    default: "stevelab1",
    // validate: (githubInput) => {
    //   if (githubInput) {
    //     return true;
    //   } else {
    //     console.log("Please enter your GitHub username!");
    //     return false;
    //   }
    // },
  },
  {
    type: "input",
    name: "repo",
    message: "Enter your repository name:",
    default: "simple-readme-generator",
    // validate: (repoInput) => {
    //   if (repoInput) {
    //     return true;
    //   } else {
    //     console.log("Please enter your GitHub repository name!");
    //     return false;
    //   }
    // },
  },
  {
    type: "list",
    name: "titleOption",
    message: "Select an option for your project title:",
    choices: [
      {
        name: "Use repository name",
        value: "repo",
      },
      {
        name: "Enter custom title",
        value: "custom",
      },
    ],
    validate: (userAnswers) => {
      if (!userAnswers.length) {
        return "You must select an option for the project title.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
    when: (answers) => answers.titleOption.includes("custom"),
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project:",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        }
        else {
            console.log("Please enter a description for your project!");
            return false;
        }
    }
},
{
    type: "input",
    name: "installation",
    message: "Enter the installation instructions for your project:",
    validate: installationInput => {
        if (installationInput) {
            return true;
        }
        else {
            console.log("Please enter installation instructions for your project!");
            return false;
        }
    }
},
{
    type: "input",
    name: "usage",
    message: "Enter the usage instructions for your project:",
    validate: usageInput => {
        if (usageInput) {
            return true;
        }
        else {
            console.log("Please enter usage instructions for your project!");
            return false;
        }
    }
},
{
    type: "input",
    name: "contributing",
    message: "Enter the contributing guidelines for your project:",
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        }
        else {
            console.log("Please enter contributing guidelines for your project!");
            return false;
        }
    }
},
{
    type: "input",
    name: "tests",
    message: "Enter the test instructions for your project:",
    validate: testsInput => {
        if (testsInput) {
            return true;
        }
        else {
            console.log("Please enter test instructions for your project!");
            return false;
        }
    }
},
  {
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: ["MIT", "GPLv3", "APACHE 2.0", "BSD 3", "None"],
    default: "MIT",
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
    if (userAnswers.titleOption.includes("repo")) {
      userAnswers.title = userAnswers.repo;
    }
    if (userAnswers.title === "") {
      userAnswers.title = userAnswers.repo;
    }

    writeToFile("./generated/README.md", generateMarkdown({ ...userAnswers }));
  });
}

// function call to initialize program
init();
