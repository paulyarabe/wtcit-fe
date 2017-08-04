class GuessController extends ApplicationController {

    createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let game = Game.last
        let userName = $("#user-name").val()
        let guessText = event.currentTarget[0].value
        event.currentTarget[0].value = ""
        GuessAdapter.create(userName, guessText, game)
        .then(guess => gameController.updateStatus(guess))
      })
    }

    init(){
      this.createGuess()
    }
}
