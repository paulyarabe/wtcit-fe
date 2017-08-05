class CommentController extends ApplicationController {

    // static displayCommentForm(){
    //   DisplayController.render(Form.comment, '#comment-form')
    // }

    static createComment(){
      $('body').on('submit', '#comment', function(event){
        event.preventDefault()
        let userName = $('#user-name').val()
        let commentText = event.currentTarget[0].value
        let game = Game.last
        event.currentTarget[0].value = ""
        CommentAdapter.create(userName, commentText, game)
        .then(function() { DisplayController.render(Comment.allHTML(game), "#comment-list") })
      })
    }

    static init(){
      // this.displayCommentForm()
      this.createComment()
    }
}
