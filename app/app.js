$(document).ready(function(){
  // Actions that happen on page load for all users joining page
  //PageController.displayGameRoom()

  SeedController.initSeederPage()
  SessionController.joinGame()
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
