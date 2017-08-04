class SessionController extends ApplicationController {

  constructor() {
  }

  static syncGame(){
    GameAdapter.current()
    .then(resp => resp.json())
    .then(json => {debugger})
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
