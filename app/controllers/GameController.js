class GameController extends ApplicationController {

  createGuessForm(image){
    let html = `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="username" value=""><br>
      <label>Guess:</label>
      <input type="text" data-imageid="${image.id}" name="guess" value=""><br>
      <input type="submit" value="guess!">
    </form>`
    gameController.render(html, '.guessForm')
  }

  startGame(){
    $('#start-game').on('submit', function(event){
      event.preventDefault()
      let category = new Category(event.currentTarget[0].value)
      let img = new Image('https://s-media-cache-ak0.pinimg.com/originals/da/dc/d4/dadcd453713f86372e4297352939976b.jpg', 'Robert Downey Jr.', category.id)
      gameController.render(`<img src="${img.url}" alt="placeholder" height="400px">`, '#imagefromAPI')
      gameController.createGuessForm(img)
    })
  }

  init(){
    this.startGame()
  }
}
