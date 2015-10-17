// model requires
var Post = require('../models/postModel');

// INDEX
function indexPost(req, res){
  console.log('indexPost')
  Post.find(function(err, posts) {
    if (err) console.log(err);
    res.status(200).send(posts);
  })
}
// CREATE
function createPost(req, res){
  console.log('createPost');
  console.log('req.body:', req.body);
  var post = new Post(req.body);
  post.save(function(err) {
    if(err) res.json({messsage: '!! Can\'t create post:' + error});
    console.log(post);
    res.json(post);
  });
}
// SHOW
function readPost(req, res){
  console.log('readPost')
}
// UPDATE
function updatePost(req, res){
  console.log('updatePost')
}
// DELETE
function destroyPost(req, res){
  console.log('destroyPost')
}

// exports object. 
module.exports = {
  indexPost: indexPost,
  createPost: createPost,
  readPost: readPost,
  updatePost: updatePost,
  destroyPost: destroyPost
}