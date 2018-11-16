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

module.exports = router;
