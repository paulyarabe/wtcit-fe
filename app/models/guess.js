function createGuess(){

  let all = []

  return class Guess {
    constructor(id, game, user, text, correct){
      this.id = id
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

    get user(){
      return User.all.filter(user => user.id === this.user_id)[0]
    }

    get game(){
      return Game.all.filter(game => game.id === this.game_id)[0]
    }

    get html(){
      return `<p>${this.user.name}: ${this.text}</p>`
      // return '<li>' + this.text + '</li>'
    }

    get winnerHTML(){
      return `<div id="win-banner"><h3>${this.user.name} wins ${Game.last.name}!!!</h3><p>The answer was: ${this.text}</p></div>`
    }

    static allHTML(game){
      return `<ul>${Guess.all.map(guess => {
        if(guess.game.id === game.id){
          return guess.html
        }
      }).reverse().join("")}</ul>`
    }

  }
}

let Guess = createGuess()
