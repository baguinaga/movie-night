const router = require("express").Router();
const axios = require("axios");
const playlistController = require("../../controllers/playlistController");

//matches with "/api/movies/details/:title
router.route("/details/:title").get(function(req, res) {
  axios
    .get(
      `https://www.omdbapi.com/?t=${req.params.title}&y=&plot=full&apikey=${
        process.env.OMDB_API_KEY
      }`
    )
    .then(movie => {
      res.json(movie.data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
});

// matches with "/api/movies/trending/"
router.route("/trending").get(function(req, res) {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${
        process.env.MOVIEDB_API_KEY
      }`
    )
    .then(movie => {
      res.json(movie.data.results);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
});

//matches with "/api/movies/rec/:title
router.route("/rec/:title").get(function(req, res) {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.MOVIEDB_API_KEY
      }&query=${req.params.title}&language=en-US&page=1&include_adult=false`
    )
    .then(movie => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            movie.data.results[0].id
          }/recommendations?api_key=${
            process.env.MOVIEDB_API_KEY
          }&language=en-US&page=1`
        )
        .then(movie => {
          res.json(movie.data.results);
        })
        .catch(err => {
          console.log(err);
          return res.status(500).send(err);
        });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
});

//matches with "/api/movies/playlist
router
  .route("/playlist")
  .get(playlistController.findAll)
  .post(playlistController.create);

//matches with "/api/movies/:id"
router
  .route("/:id")
  .get(playlistController.findById)
  .put(playlistController.update)
  .delete(playlistController.remove);

module.exports = router;
