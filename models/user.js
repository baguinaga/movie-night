const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
  playlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Playlist"
    }
  ]
});

// Set up passport to
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
