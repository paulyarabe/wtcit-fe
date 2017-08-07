class GuessAdapter {

  constructor() {
  }

  static create(userName, guessText, game){
    let header = new Headers
    header.set('Content-Type', 'application/json')
    return fetch(`http://${ipAddress}:3000/guesses`, {
      method:"POST",
      headers: header,
      body: JSON.stringify({userName, guessText, game})
    }).then(resp => resp.json())
      .then(json => {
        // Game.last.complete = json.game.complete;
        User.find_or_create(json.user);
        return new Guess(json.guess.id, json.game, json.user, json.guess.text, json.guess.correct)
      })
  }

}
