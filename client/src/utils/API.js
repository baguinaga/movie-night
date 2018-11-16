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

//omdb

import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

//omdb single movie info
var infoURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=full&apikey=trilogy";
url = infoURL;

//TASTEDIVE

//const APIKEY = "323743-FresherT-KDDIZR1J"
//quota- 300
https://tastedive.com/api/similar?q=[movieTitle]&type=movies&limit=[how many we want]&k=[APIKEY]

//fandango


//const APIKEY = "yrtqpjj82hsfgar5v6d6rdzu"
//const secret= "2HtkTnxxyq"

var apiKey = "f77c80e6ca6916fa5bf4047e67f042fb";
    var userInput = $("#movie-input").val();
    var searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + userInput + "&language=en-US&page=1&include_adult=false";

    //for recs (from proj 1)
    var recURL = "https://api.themoviedb.org/3/movie/" + movieID + "/recommendations?api_key=" + apiKey + "&language=en-US&page=1"