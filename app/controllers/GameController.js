class GameController extends ApplicationController {

  displayNewGameForm(){
    CategoryAdapter.index()
    .then(json => gameController.render(Form.newGame(json), '#new-game-container'))
  }

  displayGuessForm(){
    gameController.render(Form.guess(), '#guess-form')
    //$("#guess-container").css("display", "block")
  }

  syncGame(category, game){
    return GameAdapter.create(category, game)
  }

  createNewGame(){
    $("body").on('submit', '#start-game', function(event){
      event.preventDefault()
      let game = new Game(event.currentTarget[0].value)
      let category = new Category(event.currentTarget[1].value)
      gameController.syncGame(category, game)
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

  init(){

    // loadImageSeeder()
    this.displayNewGameForm() //TODO pull this out into a "session" controller
    this.createNewGame()
    this.resetPage()
  }
}
