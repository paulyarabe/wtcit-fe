
function createGuess(){
  let guessId = 0
  let all = []
  return class Guess {
    constructor(imageId, userId, text, correct){
      this.id = ++guessId
      this.imageId = imageId
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
