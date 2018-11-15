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
  }
};
