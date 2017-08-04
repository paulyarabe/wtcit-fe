function createComment(){

  let all = []
  let allIds = []

  return class Comment {
    constructor(id, user, text, game={}){
      this.id = id
      this.user_id = user.id
      this.text = text
      this.game_id = game.id
      all.push(this)
      allIds.push(this.id)
    }

    static constructMany(json){
      json.forEach(comment => {
        if (!this.allIds.includes(comment.id)) {
          new Comment(comment.id, User.find(comment.user_id), comment.text, Game.find(comment.game_id))
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
      return this.all.filter(comment => comment.id === id)[0]
    }

    destroy(){
      let index = Comment.all.indexOf(this)
      return Comment.all.splice(index,1)[0]
    }

    get user(){
      return User.all.filter(user => user.id === this.user_id)[0]
    }

    get game(){
      return Game.all.filter(game => game.id === this.game_id)[0]
    }

    get html(){
      return `<p>${this.user.name}: ${this.text}<p>`
    }

    static allHTML(game){
      return `<ul>${Comment.all.map(comment => {
        // if(comment.game.id === game.id){

          return comment.html
        // }
      }).join("")}</ul>`

    }

  }
}

let Comment = createComment()
