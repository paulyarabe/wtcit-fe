class GameController extends ApplicationController {

  displayNewGameForm(){
    DisplayController.render(Form.newGame(Category.all), '#new-game-container')
  }

  displayGameName(){
    let game = Game.last
    DisplayController.render(game.nameHTML, '#new-game-container')
  }

  displayGuessForm(){
    gameController.render(Form.guess(), '#guess-form')
  }

  createNewGame(){
    $("body").on('submit', '#start-game', function(event){
      event.preventDefault()
      let gameName = event.currentTarget[0].value
      let category = Category.find_by_name(event.currentTarget[1].value)
      GameAdapter.create(gameName, category)
      .then(gameController.displayGameName)
      .then(gameController.displayGuessForm)
      .then(imageController.displayImage)
    })

  }

  resetPage(){
    $("body").on("submit", "#reset-page-button", function(event){
      event.preventDefault()
      $(".game-div-js").empty()
      gameController.displayNewGameForm()
    })
  }

  updateStatus(guess){
    if (guess.correct){
      imageController.stopCrop()
      $("#guess").hide()
      this.render(guess.winnerHTML, "#alert-banner")
      DisplayController.render(Form.newGame(Category.all), '#new-game-container')
    }
    else {
      this.render(Guess.allHTML(guess.game), "#guess-list")
    }
  }

  init(){
    this.displayNewGameForm() //TODO pull this out into a "session" controller; needs to load all users!
    this.createNewGame()
    this.resetPage()
  }
}
