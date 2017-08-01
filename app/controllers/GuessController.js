class GuessController extends ApplicationController {

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let imageId = parseInt(event.currentTarget[1].dataset.imageid)
        let newUser = new User(event.currentTarget[0].value)
        let newGuess = new Guess(imageId, newUser.id, event.currentTarget[1].value)
        event.currentTarget[1].value = ""
        let currentImage = Image.find(imageId)
        if (currentImage.answer.toLowerCase() === newGuess.text.toLowerCase()){
          console.log('You are correct!')
        }
        else {
          console.log("Try again!")
        }
      })
    }

    init(){
      this.createGuess()
    }
}
