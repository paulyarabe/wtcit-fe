class GameController extends ApplicationController {

  createGuessForm(image){
    let html = `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="username" value=""><br>
      <label>Guess:</label>
      <input type="text" data-imageid="${image.id}" name="guess" value="" required><br>
      <input type="submit" value="guess!">
    </form>`
    this.render(html, '.guess-form')
    $("#guess-container").css("display", "block")
  }

  createAndRenderImage(json_data, category, game){
    category.id = json_data.category_id
    let image = new Image(json_data.url, json_data.answer, category)
    image.id = json_data.id
    game.image_id = image.id
    //TODO only set height below, let width be auto
    gameController.render(`<img src="${image.url}" id="game-image" alt="placeholder" height="300px" width="300px" style="position: absolute; display:none">`, '#image-container')
    gameController.createGuessForm(image)
    imageController.startCrop(2)
  }

  getImage(category, game){
    fetch(`http://localhost:3000/category?category=${category.name}`).
    then(resp => resp.json()).
    then(json => gameController.createAndRenderImage(json, category, game))
  }

  startGame(){
    $('#start-game').on('submit', function(event){
      // TODO: remove below once create game functions are done
      let game = new Game("Test Game")
      game.id = 1
      // TODO: delete above
      event.preventDefault()
      let category = new Category(event.currentTarget[0].value)
      $('#start-game').empty()
      $("#image-container").css("height", "450px")
      gameController.getImage(category, game)
    })
  }

  init(){
    this.startGame()
  }
}
