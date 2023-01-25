// function to generate markdown for README
function generateMarkdown(userAnswers) {
  let draftReadme = "";

  const topSection = `# ${userAnswers.title}
  [![GitHub license](https://img.shields.io/github/license/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/blob/main/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/${userAnswers.username}/${userAnswers.repo})](https://github.com/${userAnswers.username}/${userAnswers.repo}/stargazers)
  ![GitHub top language](https://img.shields.io/github/languages/top/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor)
  
  ## Description 
  ${userAnswers.description}

  `;

  let tOC = `## Table of Contents`;

  if (userAnswers.installation !== "") {
    tOC += `
  * [Installation](#installation)`;
  };

  if (userAnswers.usage !== "") {
    tOC += `
  * [Usage](#usage)`;
  };

  if (userAnswers.contributing !== "") {
    tOC += `
  * [Contributing](#contributing)`;
  };

  if (userAnswers.tests !== "") {
    tOC += `
  * [Tests](#tests)`;
  };

  if (userAnswers.questions !== "") {
    tOC += `
  * [Questions](#questions)`;
  };

  if (userAnswers.license !== "") {
    tOC += `
  * [License](#license) \n`;
  };

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

  const questionsSection = `## Questions

  If you have any questions about the repo, open an issue or contact me directly at:

  ${userAnswers.email}

  `;

  const licenseSection = `## License

  This project is licensed under the ${userAnswers.license} license.

  `;

  const creditsSection = `## Credits

  ${userAnswers.github}

  `;

  draftReadme += topSection;
  draftReadme += tOC;
  draftReadme += installationSection;
  draftReadme += usageSection;
  draftReadme += contributingSection;
  draftReadme += testSection;
  draftReadme += questionsSection;
  draftReadme += licenseSection;
  draftReadme += creditsSection;
  // Return README markdown
  return draftReadme;
}

module.exports = generateMarkdown;
