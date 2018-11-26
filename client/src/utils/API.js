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
  },
  // returns trending movies, during the week, from movied
  movieTrend: function() {
    return axios.get("/api/movies/trending/");
  },
  // Saving movies to playlist CRUD methods
  getSavedMovies: function() {
    return axios.get('/api/movies')
  },
  getMovieById: function(movieId) {
    return axios.get(`/api/movies/${movieId}`)
  },
  saveMovie: function(movieData) {
    return axios.post('/api/movies', movieData)
  },
  updateMovie: function(movieId, movieData) {
    return axios.put(`/api/movies/${movieId}`, movieData)
  },
  deleteMovie: function(movieId) {
    return axios.delete(`/api/movies/${movieId}`)
  },
};
