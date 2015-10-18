angular.module('likeAngularApp')
       .controller('PhatController', PhatController);

       PhatController.$inject = ['$resource']

function PhatController ($resource) {
  var self = this;
  var Post = $resource('http://localhost:3000/posts/:id', { id: '@_id'})
  // may need a custom put request later on.

 this.posts = Post.query();

 








}