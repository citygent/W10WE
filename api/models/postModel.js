var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  author: String,
  authorAvatar: String,
  content: String,
  thumb: String,
  upvotes: Number,
  time: { type: Date, 
       default: Date.now }
});

//Export Schema
module.exports = mongoose.model('Post', postSchema);