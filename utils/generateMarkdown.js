// function to generate markdown for README
function generateMarkdown(userAnswers, gitData) {
  let draftReadme = "";

  const topSection = `# ${userAnswers.title}
  [![GitHub license](https://img.shields.io/github/license/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/blob/main/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/stargazers)
  ![GitHub top language](https://img.shields.io/github/languages/top/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor)
  [![GitHub forks](https://img.shields.io/github/forks/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/network)
  [![GitHub contributors](https://img.shields.io/github/contributors/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/graphs/contributors)
  [![GitHub issues](https://img.shields.io/github/issues/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/pulls)
  [![GitHub package version](https://img.shields.io/github/package-json/v/${userAnswers.username}/${userAnswers.repo})
  
  ## Description 
  ${userAnswers.description}

  `;

  let tOC = `## Table of Contents`;

  if (userAnswers.installation !== "") {
    tOC += `
  * [Installation](#installation)`;
  }

  if (userAnswers.usage !== "") {
    tOC += `
  * [Usage](#usage)`;
  }

  if (userAnswers.license !== "") {
    tOC += `
  * [License](#license)`;
  }

  if (userAnswers.contributing !== "") {
    tOC += `
  * [Contributing](#contributing)`;
  }

  if (userAnswers.tests !== "") {
    tOC += `
  * [Tests](#tests)`;
  }

  if (userAnswers.questions !== "") {
    tOC += `
  * [Questions](#questions) \n`;
  }

  const installationSection = `## Installation

  ${userAnswers.installation}

  `;

  const usageSection = `## Usage

  ${userAnswers.usage}

  `;

  const contributingSection = `## Contributing

  ${userAnswers.contributing}

  `;

  const testSection = `## Tests

  ${userAnswers.tests}

  `;

  const licenseSection = `## License

  This project is licensed under the ${userAnswers.license} license.

  `;

  let questionsSection = "";

  draftReadme += topSection;
  draftReadme += tOC;
  draftReadme += installationSection;
  draftReadme += usageSection;
  draftReadme += licenseSection;
  draftReadme += contributingSection;
  draftReadme += testSection;

  if (userAnswers.email || userAnswers.username) {
    questionsSection = `## Questions
    
    If you have any questions about the repo:

    `;

    if (userAnswers.username) {
      questionsSection += `


[![GitHub avatar](https://github.com/${userAnswers.username}.png?size=40)](https://github.com/${userAnswers.username})
GitHub: [@${userAnswers.username}](https://github.com/${userAnswers.username})

      `;
    }

    if (userAnswers.email) {
      questionsSection += `


Email: ${userAnswers.email}

      `;
    }
  }

  draftReadme += questionsSection;

  // Return README markdown
  return draftReadme;
}

module.exports = generateMarkdown;
