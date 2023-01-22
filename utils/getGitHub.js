const axios = require("axios");

const gitHubAPI = {
  async getUser(userAnswers) {
    try {
      let response = await axios

        // e.g.: https://api.github.com/users/stevelab1
        .get(`https://api.github.com/users/${userAnswers.username}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getRepo(userAnswers) {
    try {
      let response = await axios.get(
        `https://api.github.com/repos/user-name/${userAnswers.repo}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = gitHubAPI;
