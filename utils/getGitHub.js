const axios = require("axios");

const gitHubAPI = async (userAnswers) => {
  try {
    let [user, repo, avatar, profile] = await Promise.all([
      axios.get(`https://api.github.com/users/${userAnswers.username}`),
      axios.get(
        `https://api.github.com/repos/${userAnswers.username}/${userAnswers.repo}`
      ),
      axios.get(`https://api.github.com/users/${userAnswers.username}`).then(response => response.data.avatar_url),
      axios.get(`https://api.github.com/users/${userAnswers.username}`).then(response => response.data.html_url)
    ]);
    return { user: user.data, repo: repo.data, avatar, profile };
  } catch (error) {
    console.log(error);
  }
};
module.exports = gitHubAPI;

  
