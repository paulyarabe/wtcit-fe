class GuessController extends ApplicationController {

    static createGuess(){
      $('body').on('submit', '#guess', function(event){
        event.preventDefault()
        let game = Game.last
        let userName = $("#user-name").val()
        let guessText = event.currentTarget[0].value
        event.currentTarget[0].value = ""
        GuessAdapter.create(userName, guessText, game)
        .then(guess => GameController.updateStatus(guess))
      })
    }

    static init(){
      this.createGuess()
    }
}
