var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  author: String,
  content: String
});

//Export Schema
module.exports = mongoose.model('Post', postSchema);