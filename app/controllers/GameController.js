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
      let html = `<h3>${User.find(guess.user_id).name} wins!!</h3><p>The answer was: ${guess.text}</p><form id="reset-page-button" action="#" method="post"><input type="submit" value="New Game"></form>`
      $("#alert-banner").css("background", "green")
      $("#guess").hide()
      this.render(html, "#alert-banner")
    }
    else {
      this.render(Guess.allHTML(), "#guess-list")
    }
  }

  init(){
    this.displayNewGameForm() //TODO pull this out into a "session" controller; needs to load all users!
    this.createNewGame()
    this.resetPage()
  }
}
