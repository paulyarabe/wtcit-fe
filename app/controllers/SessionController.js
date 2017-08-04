class SessionController extends ApplicationController {

  constructor() {
  }

  static initializeControllers(){
    GameController.init();
    GuessController.init();
    ImageController.init();
    CommentController.init();
  }

  // static renderGuesses(){
  //   Guess.all.forEach(guess =>{
  //     GameController.updateStatus(guess)
  //   })
  // }

  // static joinGame(){
  //   GameAdapter.current()
  //   .then(json => {
  //     Category.constructMany(json.category);
  //     return json
  //   }).then(json => {
  //     if (json.game){
  //       SessionController.initializeControllers()
  //       new Image (json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
  //       new Game (json.game.id, Image.find(json.game.image_id), json.game.name, json.game.complete)
  //       User.constructMany(json.guess_users)
  //       User.constructMany(json.comment_users)
  //       Comment.constructMany(json.comments)
  //       Guess.constructMany(json.guesses)
  //       PageController.displayGameRoom()
  //       SessionController.renderGuesses()
  //       DisplayController.render(Comment.allHTML(),'#comment-list')
  //       ImageController.displayImage()
  //       GameController.displayGuessForm()
  //       GameController.displayGameName()
  //       CommentController.displayCommentForm()
  //       DisplayController.render(Form.userName, '#username-input')
  //     } else {
  //       PageController.displayGameRoom()
  //       SessionController.initializeControllers()
  //     }
  //   })
  // }

  static gameDoesNotExist(json){
    return !Game.find(json.game.id)
  }

  static storeGameData(json){
    User.constructMany(json.guess_users)
    User.constructMany(json.comment_users)
    Comment.constructMany(json.comments)
    Guess.constructMany(json.guesses)
  }

  static displayGameData(){
    DisplayController.render(Comment.allHTML(),'#comment-list')
    DisplayController.render(Guess.allHTML(),'#guess-list')
  }

  static storeNewGameAndImage(json){
    new Image (json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
    new Game (json.game.id, Image.find(json.game.image_id), json.game.name, json.game.complete)
  }

  static displayActiveGameView(){
    $('#status-container').empty()
    DisplayController.render(Form.guess, '#guess-form')
    ImageController.displayImage()
    DisplayController.render(Game.last.nameHTML, '#status-container')
  }

  static syncGame(){
    GameAdapter.current()
    .then(json => {
      Category.constructMany(json.category);
      return json
    }).then(json => {
        if (SessionController.gameDoesNotExist(json)){
          // Make sure that the last rails game and last front end game are the same id
            SessionController.storeNewGameAndImage(json)
        }
          SessionController.storeGameData(json) //TODO refactor into one function?
          SessionController.displayGameData()
          if (json.game.complete && !Game.last.complete){
            // Game from rails has been won, but last local game has not - end game
            DisplayController.render(Game.last.winningGuess.winnerHTML + Form.newGame, "#status-container")
            ImageController.stopCrop()
            $("#guess").hide()
            Game.last.complete = true
          } else if (!json.game.complete && Game.last.complete){
            // Game from rails has not been won, but last local game has not - new game has started
            // create new game in store
            // show image and start crop
            // clear win banner and new game form
            // show new game name
            // show enter guess form
          } // anything else means the game is over (Rails T/last local T) or game is in
            // progress (Rails F/last local F): updates above are sufficient



        // User.constructMany(json.guess_users)
        // User.constructMany(json.comment_users)
        // Comment.constructMany(json.comments)
        // Guess.constructMany(json.guesses)
        // DisplayController.render(Comment.allHTML(),'#comment-list')
        // SessionController.renderGuesses()

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
