class CommentAdapter {

  constructor(){

  }

  static create(userName, commentText, game){
    let header = new Headers
    header.set('Content-Type', 'application/json')
    return fetch("http://localhost:3000/comments", {
      method:"POST",
      headers: header,
      body: JSON.stringify({userName, commentText, game})
    }).then(resp => resp.json())
      .then(json => {
        User.find_or_create(json.user);
        return new Comment(json.comment.id, json.user, json.comment.text, json.game)
      })
  }

}
