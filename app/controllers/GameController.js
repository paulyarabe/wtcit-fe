class GameController extends ApplicationController {

  displayNewGameForm(){
    CategoryAdapter.index()
    .then(json => gameController.render(Form.newGame(json), '#new-game-container'))
  }

  displayGuessForm(){
    gameController.render(Form.guess(), '#guess-form')
  }

  createNewGame(){
    $("body").on('submit', '#start-game', function(event){
      event.preventDefault()
      let game = new Game(event.currentTarget[0].value)
      //TODO: let game = Game.find(Game.last.id)
      let category = new Category(event.currentTarget[1].value)
      GameAdapter.create(category, game)
      .then(json => imageController.displayImage(json, category, game))
      .then(gameController.displayGuessForm)
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

    // loadImageSeeder()
    this.displayNewGameForm() //TODO pull this out into a "session" controller; needs to load all users!
    this.createNewGame()
    this.resetPage()
  }
}
