function createGame(){

  let all = []

  return class Game {
    constructor(name, image){
      this.id = undefined
      this.imageId = image.id
      this.name = name
      all.push(this)
    }

    static get all(){
      return all
    }

    static find(id){
      return this.all.filter(game => game.id === id)[0]
    }

    destroy(){
      let index = Game.all.indexOf(this)
      return Game.all.splice(index,1)[0]
    }

  }
}

let Game = createGame()
