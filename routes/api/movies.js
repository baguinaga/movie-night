const router = require("express").Router();
const axios = require("axios");

//matches with "/api/movies/details
router
  .route("/details/:title")
  .get(function(req, res) {
    axios
    .get(`https://www.omdbapi.com/?t=${req.params.title}&y=&plot=full&apikey=${process.env.OMDB_API_KEY}`)
    .then(movie => {
      res.json(movie.data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
  })


  router
  .route("/recommendations/:title")
  .get(function(req,res){
    axios
    .get("https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_API_KEY}&query=${req.params.title}&language=en-US&page=1&include_adult=false")
    
    .then(movie=> {
      res.json(movie.data.id);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    })
//sending searched id for recommendations
  .then(function(movieID) {
    axios
    .get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`)
    .then(movie => {
      res.json(movie.data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
  })
})
module.exports = router;
