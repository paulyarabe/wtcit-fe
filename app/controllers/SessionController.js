class SessionController extends ApplicationController {

  constructor() {
  }

  static initializeControllers(){
    GameController.init();
    GuessController.init();
    ImageController.init();
    CommentController.init();
  }

  static renderGuesses(){
    Guess.all.forEach(guess =>{
      GameController.updateStatus(guess)
    })
  }

  static syncGame(){
    GameAdapter.current()
    .then(json => {
      Category.constructMany(json.category);
      return json
    }).then(json => {
      if (json.game){
        SessionController.initializeControllers()
        new Image (json.image.id, json.image.url, json.image.answer, Category.find(json.image.category_id))
        new Game (json.game.id, Image.find(json.game.image_id), json.game.name, json.game.complete)
        User.constructMany(json.guess_users)
        User.constructMany(json.comment_users)
        Comment.constructMany(json.comments)
        Guess.constructMany(json.guesses)
        PageController.displayGameRoom()
        SessionController.renderGuesses()
        DisplayController.render(Comment.allHTML(Game.last),'#comment-list')
        ImageController.displayImage()
        GameController.displayGuessForm()
        GameController.displayGameName()
        CommentController.displayCommentForm()
        DisplayController.render(Form.userName, '#username-input')
      } else {
        PageController.displayGameRoom()
        SessionController.initializeControllers()
      }
    }
    )

      // if (json.game) {
      //   console.log('coming to you live from the last game')
      // } else {
      //   PageController.displayGameRoom()
      // }
    // })
    // get request to rails for:
    //  - the category list
    //  - the last created game
    //  - the image for that game
    //  - the users for that game (guess and comments)
    //  - the guesses for that game
    //  - the comments for that game
    // Render forms on page
    // Fill content in appropriately


  }



}
