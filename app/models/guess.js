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

    get html(){
      return '<li>' + this.text + '</li>'
    }

    // static allHTML(gameId){
    //   return `<ul>${Guess.all.map(guess => {
    //     if(guess.game_id === gameId){
    //       return guess.html
    //     }
    //   }).reverse().join("")}</ul>`
    // }

    static allHTML(){
      return `<ul>${Guess.all.map(guess => { return guess.html }).reverse().join("")}</ul>`
    }

  }
}

let Guess = createGuess()
