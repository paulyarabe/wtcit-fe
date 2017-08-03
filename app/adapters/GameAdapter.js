class GameAdapter {

  constructor() {
  }

  static create(category, game){
    return fetch(`http://localhost:3000/categories/images?category=${category.name}&game=${game.name}`)
    .then(resp => resp.json())
    // .then(json => {debugger})TODO: GameAdapter should update store
  }
}
