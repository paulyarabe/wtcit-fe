$(document).ready(function(){
  // Actions that happen on page load for all users joining page
  //PageController.displayGameRoom()
  // SessionController.joinGame()
  SessionController.initializeControllers()
  PageController.displayGameRoom() //TODO: decide when to do this when there are multiple game rooms.
  CommentController.displayCommentForm() //TODO: wrap or find place to put this and line below.
  DisplayController.render(Form.userName, "#username-input")
  setInterval(SessionController.syncGame, 100)
  //CategoryAdapter.index() // TODO: remove this - this will be handled by GameAdapter.current()
  //.then(function(){
    // create controllers
    // gameController = new GameController();
    // gameController.init();
    // guessController = new GuessController();
    // guessController.init();
    // imageController = new ImageController();
    // imageController.init();
    // commentController = new CommentController();
    // commentController.init();
  })
// })
