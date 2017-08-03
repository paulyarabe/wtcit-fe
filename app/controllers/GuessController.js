class GuessController extends ApplicationController {

    renderGuess(guess, user){
      if (guess.correct){
        imageController.stopCrop()
        let html = `<h3>${user.name} wins!!</h3><p>The answer was: ${guess.text}</p><form id="reset-page-button" action="#" method="post"><input type="submit" value="New Game"></form>`
        $("#alert-banner").css("background", "green")
        $("#guess").hide()
        this.render(html, "#alert-banner")
      }
      else {
        this.render(Guess.allHTML(), "#guess-list")
      }
    }

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let game = Game.find(parseInt(event.currentTarget[1].dataset.gameid)) //TODO: let game = Game.find(Game.last.id)
        // let user = User.find_or_create_by_name(event.currentTarget[0].value) //TODO: fetch backend
        let user = UserAdapter.retrieve(event.currentTarget[0].value).then(User.find_or_create_by_json)
        let guess = new Guess(game, user, event.currentTarget[1].value)
        event.currentTarget[1].value = ""
        GuessAdapter.create(guess, user)
        .then(guess => gameController.updateStatus(guess))
      })
    }

    init(){
      this.createGuess()
    }
}
