const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Playlist.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  findById: function(req, res) {
    db.Playlist.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  create: function(req, res) {
    console.log(req.body);
    db.Playlist.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Playlist.findOneAndUpdate(
      { _id: req.params.id },
      { new: true, upsert: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    db.Playlist.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  }
};
