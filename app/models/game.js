function createGame(){

  let all = []

  return class Game {
    constructor(id, image, name, complete){
      this.id = id
      this.image_id = image.id
      this.name = name
      this.complete = complete
      all.push(this)
    }

    static constructMany(json){
      json.forEach(game => {
        new Game(game.id, game.image_id, game.name)
      })
    }

    static get all(){
      return all
    }

    static get last(){
      return all[all.length-1]
    }

    static find(id){
      return this.all.filter(game => game.id === id)[0]
    }

    destroy(){
      let index = Game.all.indexOf(this)
      return Game.all.splice(index,1)[0]
    }

    get image(){
      return Image.all.filter(image => image.id === this.image_id)[0]
    }

    get nameHTML(){
      return `<h3 id="game-name">Game Name: ${this.name}</h3>`
    }

  }
}

let Game = createGame()
