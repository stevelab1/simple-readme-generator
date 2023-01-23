// function to generate markdown for README
function generateMarkdown(userAnswers) {
  let draftReadme = '';

  // if (userAnswers.title === '') {
  //   userAnswers.title = userAnswers.repo
  // }
  
  const topSection = 
  `# ${userAnswers.title}

  ## Description 


  `;
  
  draftReadme += topSection;

  // Return README markdown

  return draftReadme;
}

module.exports = generateMarkdown;
