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

  }
}

let Game = createGame()
