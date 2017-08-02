class CommentController extends ApplicationController {

    displayCommentForm(){
      commentController.render(Form.comment(), '.comment-form')
    }

    createCommentHTML(){
      return `<ul>${Comment.all.map(comment => '<li>' + comment.text + '</li>').reverse().join("")}</ul>`
    }

    renderComment(comment, user){
      this.render(this.createCommentHTML(), "#comment-list")
    }

    createComment(){
      $('body').on('submit', '#comment', function(event){
        event.preventDefault()
        let user = User.find_or_create_by_name($('[name="username"]').val())
        let comment = new Comment(user, event.currentTarget[0].value)
        event.currentTarget[0].value = ""
        let header = new Headers
        header.set('Content-Type', 'application/json')
        fetch("http://localhost:3000/handle_comment", {
          method:"POST",
          headers: header,
          body: JSON.stringify({comment, user})
        }).then(resp => resp.json()).then(json => commentController.renderComment(json, user))
      })
    }

    init(){
      this.displayCommentForm()
      this.createComment()
    }
}
