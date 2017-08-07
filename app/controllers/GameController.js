class GameController extends ApplicationController {

  // static displayNewGameForm(){
  //   DisplayController.render(Form.newGame, '#status-container')
  //   DisplayController.render(Form.userName, '#username-input')
  // }

  // static displayGameName(){
  //   let game = Game.last
  //   DisplayController.render(game.nameHTML, '#status-container')
  // }

  // static displayGuessForm(){
  //   DisplayController.render(Form.guess, '#guess-form')
  // }

  static createNewGame(){
    $("body").on('submit', '#start-game', function(event){
      event.preventDefault()
      let gameName = event.currentTarget[0].value
      let category = Category.find_by_name(event.currentTarget[1].value)
      GameAdapter.create(gameName, category)
      .then(GameController.displayGameName)
      .then(GameController.displayGuessForm)
      .then(ImageController.displayImage)
    })

  }

  static resetPage(){
    $("body").on("submit", "#reset-page-button", function(event){
      event.preventDefault()
      $(".game-div-js").empty()
      gameController.displayNewGameForm()
    })
  }

  // static updateStatus(guess){
  //   DisplayController.render(Guess.allHTML(guess.game), "#guess-list")
  //   if (guess.correct){
  //     ImageController.stopCrop()
  //     $("#guess").hide()
  //     DisplayController.render(guess.winnerHTML + Form.newGame, "#status-container")
  //   }
  // }

  static init(){
    // this.displayNewGameForm() //TODO pull this out into a "session" controller; needs to load all users!
    this.createNewGame()
    this.resetPage()
  }
}
