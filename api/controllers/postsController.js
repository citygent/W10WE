// model requires
var Post = require('../models/postModel');

// INDEX
function indexPost(req, res){
  console.log('indexPost')
  Post.find(function(err, posts) {
    if (err) res.json({messsage: '!! Can\'t find any posts:' + error});
    res.status(200).send(posts);
  })
}
// CREATE
function createPost(req, res){
  console.log('req.body:', req.body);
  var post = new Post(req.body);
  post.save(function(err) {
    if(err) res.json({messsage: '!! Can\'t create post:' + error});
    res.status(200).send(post);
  });
}
// SHOW
function readPost(req, res){
  var id = req.params.id;
  Post.findById({_id: id}, function(err, post) {
    if (err) res.json({messsage: '!! Can\'t find the post you\'re after:' + error});
    res.status(200).send(post);
  })
}
// UPDATE
function updatePost(req, res){
  console.log('updatePost')
  var id = req.params.id;
  Post.findById({_id: id}, function(err, post) {
    if (err) res.json({messsage: '!! Can\'t find the post you\'re trying to edit:' + error});
    if (req.body.author) post.author = req.body.author;
    if (req.body.content) post.content = req.body.content;
  // above are oneliners determining what needs updating, below saves this to the DB.
    post.save(function(err) {
      if (err) res.json({messsage: '!! Can\'t edit post:' + error});
      res.status(200).send(post)
    })
  })
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