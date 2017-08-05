class SessionController extends ApplicationController {

  constructor() {
  }

  static initializeControllers(){
    GameController.init();
    GuessController.init();
    ImageController.init();
    CommentController.init();
  }

  static gameDoesNotExist(json){
    return !Game.find(json.game.id)
  }

  static get pageLoad(){
    return !Game.all[0]
  }

  static updateUserDataAndActions(json){
    User.constructMany(json.guess_users)
    User.constructMany(json.comment_users)
    Comment.constructMany(json.comments)
    Guess.constructMany(json.guesses)
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
    ImageController.displayImage(true)
    DisplayController.render(Game.last.nameHTML, '#status-container')
  }

  static syncGame(){
    GameAdapter.current()
    .then(json => {
        if (SessionController.pageLoad){
          // Page was just loaded or refreshed
          Category.constructMany(json.category);
          SessionController.storeNewGameAndImage(json)
          SessionController.updateUserDataAndActions(json)
          // Check to see whether page is in middle of game or between games
          if (!Game.last.complete){
            // In middle of game, display page accordingly
            SessionController.displayActiveGameView()
          } else {
            // Not in middle of game, show data for last game and new game form
            ImageController.displayImage(false)
            DisplayController.render(Game.last.winningGuess.winnerHTML + Form.newGame, "#status-container")
          }
        } else {
          // Page has been loaded and data is being synced
          // update user, guess, and comment data/display
          SessionController.updateUserDataAndActions(json)
          // Check if the DOM game in progress was just completed and act accordingly
          if (!Game.last.complete && json.game.complete) {
            Game.last.complete = true
            ImageController.stopCrop()
            $("#guess").empty()
            DisplayController.render(Game.last.winningGuess.winnerHTML + Form.newGame, "#status-container")
          }
          // When the last DOM game is complete, check if a new game has been started and act accordingly
          else if (Game.last.complete && !json.game.complete) {
            clearInterval(window.cropInterval)
            Guess.all.length = 0
            SessionController.storeNewGameAndImage(json)
            SessionController.displayActiveGameView()
          }
        }
    })
  }



}
