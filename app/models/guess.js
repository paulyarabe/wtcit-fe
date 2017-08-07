function createGuess(){

  let all = []
  let allIds = []

  return class Guess {
    constructor(id, game, user, text, correct){
      this.id = id
      this.game_id = game.id
      this.user_id = user.id
      this.text = text
      this.correct = correct
      all.push(this)
      allIds.push(this.id)
    }

    static constructMany(json){
      json.forEach(guess => {
        if (!this.allIds.includes(guess.id)) {
          new Guess(guess.id, Game.find(guess.game_id), User.find(guess.user_id), guess.text, guess.correct)
        }
      })
    }

    static get all(){
      return all
    }

    static get allIds(){
      return allIds
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
      return `<p><strong>${this.user.name}:</strong> ${this.text}</p>`
      // return '<li>' + this.text + '</li>'
    }

    static allHTML(game){
      return `<ul>${Guess.all.map(guess => {
          return guess.html
      }).join("")}</ul>`

    }

    get winnerHTML(){
      return `<div id="win-banner" class='rounded'><h3>${this.user.name} wins ${Game.last.name}!!!</h3><p>The answer was: ${this.text}</p></div>`
    }

    static allHTML(game){
      return `<ul>${Guess.all.map(guess => {return guess.html}).reverse().join("")}</ul>`
    }

  }
}

let Guess = createGuess()
