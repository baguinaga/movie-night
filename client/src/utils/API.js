import axios from "axios";

export default {
  login: function(loginCreds) {
    return axios.post("/api/users/login", loginCreds);
  },
  loginCheck: function() {
    return axios.get("/api/users/login");
  },
  logout: function() {
    return axios.get("/api/users/logout");
  },
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo);
  },
  // omdb find one movie by title/ w/ full plot summary
  movieInfo: function(movieTitle) {
    return axios.get(`/api/movies/details/${movieTitle}`);
  },
  // moviedb recommendations, send in movie title, get id on the server and return the recommendations
  movieRec: function(movieTitle) {
    return axios.get(`/api/movies/rec/${movieTitle}`);
  }
};
