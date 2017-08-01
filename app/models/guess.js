
function createGuess(){
  let guessId = 0
  let all = []
  return class Guess {
    constructor(image, user, text, correct){
      this.id = ++guessId
      this.imageId = image.id
      this.userId = user.id
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
