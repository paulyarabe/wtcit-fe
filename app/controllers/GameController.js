class GameController extends ApplicationController {

  createGuessForm(image){
    let html = `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="username" value=""><br>
      <label>Guess:</label>
      <input type="text" data-imageid="${image.id}" name="guess" value="" required><br>
      <input type="submit" value="guess!">
    </form>`
    this.render(html, '.guessForm')
    $("#wrong-guess-section").css("display", "block")
  }

  createAndRenderImage(images, categoryId){
    let randomImage = Math.floor((Math.random() * 99) + 1)
    let imageUrl = images.hits[randomImage].webformatURL
    let imageAnswers = images.hits[randomImage].tags.split(",")
    let formattedAnswers = imageAnswers.map( answer => {
	     return answer.trim()
    })
    let image = new Image(imageUrl, formattedAnswers, categoryId)
    // style="position: absolute; display:none" TODO: add this back in??
    gameController.render(`<img src="${image.url}" id="game-image" alt="placeholder" height="400px"><p>${image.answers}</p>`, '#imagefromAPI')
    gameController.createGuessForm(image)
    imageController.startCrop(2)
  }

  getImage(category){
    let randomPage = Math.floor((Math.random() * 3) + 1)
    $.ajax({
         url: `https://pixabay.com/api/?key=6057872-ace21032695f6ad08f9b7a136&per_page=200&category=${category.name}&page=${randomPage}`,
         method: 'GET',
         success: function(data) {
           gameController.createAndRenderImage(data, category.id)
         }
    })
  }

  startGame(){
    $('#start-game').on('submit', function(event){
      event.preventDefault()
      let category = new Category(event.currentTarget[0].value)
      $('#start-game').empty()
      $("#imagefromAPI").css("height", "450px")
      gameController.getImage(category)
    })
  }

  init(){
    this.startGame()
  }
}
