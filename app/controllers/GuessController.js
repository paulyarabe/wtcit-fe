class GuessController extends ApplicationController {

    createGuessHTML(){
      return `<ul>${Guess.all.map(guess => '<li>' + guess.text + '</li>').reverse().join("")}</ul>`
    }

    checkGuess(image, guess, user){
      if (image.answers.includes(guess.text)){
        imageController.stopCrop()
        let html = `<h3>${user.name} wins!!</h3><p>The answer was: ${guess.text}</p>`
        $("#alert-banner").css("background", "green")
        $("#guess").hide()
        this.render(html, "#alert-banner")
      }
      else {
        this.render(this.createGuessHTML(), "#wrong-guess-list")
      }
    }

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let image = Image.find(parseInt(event.currentTarget[1].dataset.imageid))
        let user = User.find_or_create_by_name(event.currentTarget[0].value)
        let guess = new Guess(image, user, event.currentTarget[1].value.toLowerCase())
        event.currentTarget[1].value = ""
        guessController.checkGuess(image, guess, user) //TODO Post request!
      })
    }

    init(){
      this.createGuess()
    }
}
