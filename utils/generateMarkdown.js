// function to generate markdown for README
function generateMarkdown(userAnswers) {
  let draftReadme = '';

  // if (userAnswers.title === '') {
  //   userAnswers.title = userAnswers.repo
  // }
  
  const topSection = 
  `# ${userAnswers.title}
  [![GitHub license](https://img.shields.io/github/license/${userAnswers.github}/${userAnswers.repo})](https://github.com/${userAnswers.github}/${userAnswers.repo}/blob/master/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/${userAnswers.github}/${userAnswers.repo})](https://github.com/${userAnswers.github}/${userAnswers.repo}/stargazers)
  
  ## Description 
  ${userAnswers.description}

  `;
  
  const installationSection = 
  `## Installation

  ${userAnswers.installation}

  `;

  const usageSection = 
  `## Usage

  ${userAnswers.usage}

  `;

  const contributingSection = 
  `## Contributing

  ${userAnswers.contributing}

  `;

  const testSection = 
  `## Tests

  ${userAnswers.tests}

  `;

  const questionsSection = 
  `## Questions

  If you have any questions about the repo, open an issue or contact me directly at:

  ${userAnswers.email}

  `;

  const licenseSection = 
  `## License

  This project is licensed under the ${userAnswers.license} license.

  `;

  const creditsSection = 
  `## Credits

  ${userAnswers.github}

  `;

  draftReadme += topSection;
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
