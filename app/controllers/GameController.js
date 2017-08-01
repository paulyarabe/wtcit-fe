class GameController extends ApplicationController {

  createGuessForm(image){
    let html = `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="username" value=""><br>
      <label>Guess:</label>
      <input type="text" data-imageid="${image.id}" name="guess" value="" required><br>
      <input type="submit" value="guess!">
    </form>`
    gameController.render(html, '.guessForm')
    $("#wrong-guess-section").css("display", "block")
  }

  startGame(){
    $('#start-game').on('submit', function(event){
      event.preventDefault()
      let category = new Category(event.currentTarget[0].value)
      $('#start-game').empty()
      let img = new Image('https://s-media-cache-ak0.pinimg.com/originals/da/dc/d4/dadcd453713f86372e4297352939976b.jpg', ["robert downey jr.", "rdj", "robert downey junior"], category)
      gameController.render(imageController.createImageHTML(img), '#imagefromAPI')
      $("#imagefromAPI").css("height", "400px")
      gameController.createGuessForm(img)
      imageController.startCrop(2)
    })
  }

  init(){
    this.startGame()
  }
}
