# Simple README Generator

## Description

![badmath](https://img.shields.io/badge/JavaScript-100%25-%23)

Generate a standard README markdown file for your project from the command-line.

## User Story

As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Demo

https://drive.google.com/file/d/1uZBhHqK6LH08tjWPOh4AB1DuTzUtR120/view?usp=sharing

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Reporting issues](#reporting-issues)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation

### Steps required to install project:

1. Follow the instructions on GitHub on how to clone https://github.com/stevelab1/simple-readme-generator.git to your local machine, e.g. run the following command in your terminal, then `cd` into the resulting directory:

```
git clone https://github.com/stevelab1/simple-readme-generator.git
```

2. Make sure you have node installed on your machine. To check you have, type in to your terminal:

```
node -v
```

3. Type in the following command to install
   the necessary dependencies:

```
npm i
```

## Usage

<!-- ### Instructions and examples for use: -->

4. Invoke README Generator using the following command:

```
node index.js
```

5. You will then be prompted for information to generate the README for your GitHub online repository via a series of questions that accept user input, including:

- GitHub username
<!-- in future allow (or other online repository) -->
- email address 
<!-- in future include more options (contact information (if any) for contributor / user questions) -->
- title of project
- project description 
<!-- (if any) -->
- license 
<!-- (if any) -->
- command to install any dependencies, `npm i` by default
- command to run any tests
- `usage` information
<!-- tips or info for user -->
- contributor guidelines

The program then generates a simple README.md file from your input with:

    * The title of your project
    * Sections entitled:
      * Description
      * Table of Contents
      * Installation
      * Usage
      * License
      * Contributing
      * Tests
      * Questions

6. Finally, find the generated README in the \generated folder


## Reporting issues

### Suggesting features, improvements, bug fixes

https://github.com/stevelab1/simple-readme-generator/issues

Issues on GitHub are used to track todos, bugs, feature requests, and more.

## Contributing

### Prerequisites

1. Git
1. A fork of the repo (for any contributions)
1. A clone of the [weather-pickmeup](https://github.com/stevelab1/weather-pickmeup) repo on your local machine
## Contributing Guidelines

### Create a branch

1. `git checkout main` from within your local `weather-pickmeup` repository
1. `git pull origin main` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change and test

1. Make changes and check in the browser or live server
1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile
1. Run Prettier or some other code linter and add meaningful, human-readable comments

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a succinct but meaningful commit message, such as `Fixed card header on iPhone 5SE`) to stage and commit your changes
1. Follow GitHub's instructions on how to push your changes to GitHub, for example with `git push origin my-branch`
1. Go to the [weather-pickmeup repo](https://github.com/stevelab1/weather-pickmeup) and you should see recently pushed branches
1. Follow GitHub's instructions
1. If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub (I will test this after adding index.html and test-deploy to GitHub Pages)

## Credits

Trilogy

[`inquirer`](https://www.npmjs.com/package/inquirer)

[`axios`](https://www.npmjs.com/package/axios)

## License
