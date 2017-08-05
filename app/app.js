$(document).ready(function(){
  SessionController.initializeControllers()
  PageController.displayGameRoom()
  // CommentController.displayCommentForm() //TODO: wrap or find place to put this and line below.
  // DisplayController.render(Form.userName, "#username-input")
  setInterval(SessionController.syncGame, 250)
  })
