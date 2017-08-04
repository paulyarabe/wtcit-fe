class SessionController extends ApplicationController {

  constructor() {
  }

  static initializeControllers(){
    GameController.init();
    GuessController.init();
    ImageController.init();
    CommentController.init();
  }

  static renderGuesses(){
    Guess.all.forEach(guess =>{
      GameController.updateStatus(guess)
    })
  }

  static joinGame(){
    GameAdapter.current()
    .then(json => {
      Category.constructMany(json.category);
      return json
    }).then(json => {
      if (json.game){
        SessionController.initializeControllers()
        new Image (json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
        new Game (json.game.id, Image.find(json.game.image_id), json.game.name, json.game.complete)
        User.constructMany(json.guess_users)
        User.constructMany(json.comment_users)
        Comment.constructMany(json.comments)
        Guess.constructMany(json.guesses)
        PageController.displayGameRoom()
        SessionController.renderGuesses()
        DisplayController.render(Comment.allHTML(),'#comment-list')
        ImageController.displayImage()
        GameController.displayGuessForm()
        GameController.displayGameName()
        CommentController.displayCommentForm()
        DisplayController.render(Form.userName, '#username-input')
      } else {
        PageController.displayGameRoom()
        SessionController.initializeControllers()
      }
    })
  }


  static syncGame(){
    GameAdapter.current()
    .then(json => {
      Category.constructMany(json.category);
      return json
    }).then(json => {
        User.constructMany(json.guess_users)
        User.constructMany(json.comment_users)
        Comment.constructMany(json.comments)
        Guess.constructMany(json.guesses)
        DisplayController.render(Comment.allHTML(),'#comment-list')
        SessionController.renderGuesses()
      // if (json.game){
      //   SessionController.initializeControllers()
      //   new Image (json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
      //   new Game (json.game.id, Image.find(json.game.image_id), json.game.name, json.game.complete)
      //   // PageController.displayGameRoom()
      //   SessionController.renderGuesses()
      //   ImageController.displayImage()
      //   GameController.displayGuessForm()
      //   GameController.displayGameName()
      //   CommentController.displayCommentForm()
      //   DisplayController.render(Form.userName, '#username-input')
      // } else {
      //   PageController.displayGameRoom()
      //   SessionController.initializeControllers()
      // }
    })
  }



}
