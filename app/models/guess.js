
function createGuess(){
  let guessId = 0
  let all = []
  return class Guess {
    constructor(gameId, userId, text, correct){
      this.id = ++guessId
      this.gameId = gameId
      this.userId = userId
      this.text = text
      this.correct = correct
      all.push(this)
    }
    static get all(){
      return all
    }
  }
}

let Guess = createGuess()
