class GameController extends ApplicationController {

  createNewGameForm(json){
    let html = `<form id="start-game" action="index.html" method="post">
      <label>New Game Name:</label>
      <input type="text" name="game[name]" required><br>
      <label>Choose a Category:</label>
      <select class="category" name="game[categories]">
      ${json.map(category => `<option data-id=${category.id}>${category.name}</option>`).join("")}
      </select><br>
      <input type="submit" value="Start Game">
      </form><br>`
    gameController.render(html, '#new-game-container')
  }

  displayNewGameForm(){
    fetch("http://localhost:3000/categories")
    .then(resp => resp.json())
    .then(gameController.createNewGameForm)
  }

  createGuessForm(){
    let game_id = $("#game-image")[0].dataset.gameId
    let html = `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="guess[username]" value=""><br>
      <label>Guess:</label>
      <input type="text" name="guess[text]" data-gameid="${game_id}" value="" required><br>
      <input type="submit" value="guess!">
    </form>`
    gameController.render(html, '#guess-form')
    $("#guess-container").css("display", "block")
  }

  initializeNewGame(){
    $("body").on('submit', '#start-game', function(event){
      event.preventDefault()
      let game = new Game(event.currentTarget[0].value)
      let category = new Category(event.currentTarget[1].value)
      // $('#new-game-container').empty()
      $("#image-container").css("height", "300px")
      imageController.getImageAndGame(category, game)
      .then(gameController.createGuessForm)
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
    this.displayNewGameForm()
    this.initializeNewGame()
    this.resetPage()
  }
}
