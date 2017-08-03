class GameAdapter {

  constructor() {
  }

  static current(){
    return fetch("http://localhost:3000/games/current")
    .then()
  }

  static create(gameName, category){
    let header = new Headers
    header.set('Content-Type', 'application/json')
    return fetch("http://localhost:3000/games", {
      method:"POST",
      headers: header,
      body: JSON.stringify({gameName, category})
    })
    .then(resp => resp.json())
    .then(json => {
      new Game(json.game.id, json.image, json.game.name, json.game.complete);
      new Image(json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
      })
  }

}
