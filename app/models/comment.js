function createComment(){

  let all = []

  return class Comment {
    constructor(id, user, text, game={}){
      this.id = id
      this.user_id = user.id
      this.text = text
      this.game_id = game.id
      all.push(this)
    }

    static get all(){
      return all
    }

    static find(id){
      return this.all.filter(comment => comment.id === id)[0]
    }

    destroy(){
      let index = Comment.all.indexOf(this)
      return Comment.all.splice(index,1)[0]
    }

  }
}

let Comment = createComment()
