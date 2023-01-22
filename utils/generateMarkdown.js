// function to generate markdown for README
function generateMarkdown(userAnswers) {
  let draftReadme = '';
  
  const topSection = 
  `# ${userAnswers.title}

  ## Description 


  `;
  
  draftReadme += topSection;

  // Return README markdown

  return draftReadme;
}

module.exports = generateMarkdown;
