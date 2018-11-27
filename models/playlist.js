const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const PlaylistSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: String
});

// This creates our model from the above schema, using mongoose's model method
const Playlist = mongoose.model("Playlist", PlaylistSchema);

// Export the Note model
module.exports = Playlist;
