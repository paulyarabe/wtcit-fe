function createComment(){

  let all = []

  return class Comment {
    constructor(user, text){
      this.id = undefined
      this.user_id = user.id
      this.text = text
      this.game_id = undefined
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
