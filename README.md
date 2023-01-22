# Simple README Generator

## Description

![badmath](https://img.shields.io/badge/JavaScript-100%25-%23)

Generate a standard README markdown file for your project from the command-line.

## User Story

As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Reporting issues](#reporting-issues)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
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

### Screenshots as needed?

## Contributors

## Reporting issues

## Contributing

## Tests

## Questions

## Credits

Trilogy

[`inquirer`](https://www.npmjs.com/package/inquirer)

[`axios`](https://www.npmjs.com/package/axios)

## License
