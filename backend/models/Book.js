const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  year: Number,
  description: String,
  coverImage: String,
  bookURL: String,
});

module.exports = mongoose.model("Book", bookSchema);
