var express        = require('express');
var router         = express.Router()
var methodOverride = require('method-override'); //just in case.

// controller requires
var postsCtrl = require('../controllers/postsController')

// 'Post' Routing:
router.route('/posts')
  .get(postsCtrl.indexPost)
  .post(postsCtrl.createPost);
router.route('/posts/:id')
  .get(postsCtrl.readPost)
  .put(postsCtrl.updatePost)
  .delete(postsCtrl.destroyPost);

// export routes
module.exports = router;