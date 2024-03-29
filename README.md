# Simple README Generator

[![GitHub license](https://img.shields.io/github/license/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/blob/main/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/stargazers)
  ![GitHub top language](https://img.shields.io/github/languages/top/stevelab1/simple-readme-generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/stevelab1/simple-readme-generator?style=flat&logo=appveyor)
  [![GitHub forks](https://img.shields.io/github/forks/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/network)
  [![GitHub contributors](https://img.shields.io/github/contributors/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/graphs/contributors)
  [![GitHub issues](https://img.shields.io/github/issues/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/stevelab1/simple-readme-generator)](https://github.com/stevelab1/simple-readme-generator/pulls)
  ![GitHub package version](https://img.shields.io/github/package-json/v/stevelab1/simple-readme-generator)

## Description

Generate a standard README markdown file for your project from the command-line.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Reporting issues](#reporting-issues)
- [Credits](#credits)
- [License](#license)

## Installation

Install the necessary dependencies:

```
npm i
```

## Usage

<!-- ### Instructions and examples for use: -->

1. Invoke README Generator using the following command:

```
node index.js
```

2. You will then be prompted for information to generate the README for your GitHub online repository via a series of questions that accept user input, including:

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

3. Finally, find the generated README in the \generated folder

## Reporting issues

### Suggesting features, improvements, bug fixes

https://github.com/stevelab1/simple-readme-generator/issues

## Credits

[`inquirer`](https://www.npmjs.com/package/inquirer)

[`axios`](https://www.npmjs.com/package/axios)

## License

  This project is licensed under the MIT license.
