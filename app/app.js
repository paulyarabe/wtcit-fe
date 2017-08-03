$(document).ready(function(){
  // Actions that happen on page load for all users joining page
  CategoryAdapter.index()
  .then(function(){
    // create controllers
    gameController = new GameController();
    gameController.init();
    guessController = new GuessController();
    guessController.init();
    imageController = new ImageController();
    imageController.init();
    commentController = new CommentController();
    commentController.init();
  })
})
