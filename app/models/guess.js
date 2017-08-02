function createGuess(){

  let all = []

  return class Guess {
    constructor(game, user, text, correct){
      this.id = undefined
      this.game_id = game.id
      this.user_id = user.id
      this.text = text
      this.correct = correct
      all.push(this)
    }

    static get all(){
      return all
    }

    static find(id){
      return this.all.filter(guess => guess.id === id)[0]
    }

    destroy(){
      let index = Guess.all.indexOf(this)
      return Guess.all.splice(index,1)[0]
    }

  }
}

let Guess = createGuess()
