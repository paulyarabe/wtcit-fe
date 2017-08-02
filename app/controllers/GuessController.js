class GuessController extends ApplicationController {

    createGuessHTML(){
      return `<ul>${Guess.all.map(guess => '<li>' + guess.text + '</li>').reverse().join("")}</ul>`
    }

    renderGuess(guess, user){
      if (guess.correct){
        imageController.stopCrop()
        let html = `<h3>${user.name} wins!!</h3><p>The answer was: ${guess.text}</p>`
        $("#alert-banner").css("background", "green")
        $("#guess").hide()
        this.render(html, "#alert-banner")
      }
      else {
        this.render(this.createGuessHTML(), "#guess-list")
      }
    }

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let image = Image.find(parseInt(event.currentTarget[1].dataset.imageid))
        let user = User.find_or_create_by_name(event.currentTarget[0].value)
        let guess = new Guess(image, user, event.currentTarget[1].value)
        event.currentTarget[1].value = ""
        let header = new Headers
        header.set('Content-Type', 'application/json')
        fetch("http://localhost:3000/validate_guess", {
          method:"POST",
          headers: header,
          body: JSON.stringify({guess, user})
        }).then(resp => resp.json()).then(json => guessController.renderGuess(json, user))
      })
    }

    init(){
      this.createGuess()
    }
}
