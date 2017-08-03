class GuessController extends ApplicationController {

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let game = Game.last
        let userName = event.currentTarget[0].value
        let guessText = event.currentTarget[1].value
        event.currentTarget[1].value = ""
        GuessAdapter.create(userName, guessText, game)
        .then(guess => gameController.updateStatus(guess))
      })
    }

    init(){
      this.createGuess()
    }
}
