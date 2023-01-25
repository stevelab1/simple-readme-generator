const axios = require("axios");

const gitHubAPI = async (userAnswers) => {
  try {
    let [user, repo] = await Promise.all([
      axios.get(`https://api.github.com/users/${userAnswers.username}`),
      axios.get(
        `https://api.github.com/repos/${userAnswers.username}/${userAnswers.repo}`
      ),
    ]);
    return { user: user.data, repo: repo.data };
  } catch (error) {
    console.log(error);
  }
};
module.exports = gitHubAPI;

  
