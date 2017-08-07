class PageController extends ApplicationController {

  static displayGameRoom(){
    let html = `
    <!-- Row1 -->
    <div class="row">

      <div id = "page-title-container">
        <h1 align="center">Game Room</h1>
      </div>

    </div>
    <!-- /Row1 -->

    <!-- Row2 -->
    <div class="row">

      <div id="status-container" class="game-div-js"></div>

    </div>
    <!-- /Row2 -->

    <!-- Row3 -->
    <div class="row">

      <!-- Guesses -->
      <div class="col-md-4">
        <div id="guess-container">
          <h3>Guesses:</h3>
            <div id="guess-list"  class="guesses-comments-image"></div>
        </div>
      </div>

      <!-- Image -->
      <div class="col-md-4">
        <div id="image-container" class="image-js">
          <h3>What the crop is this:</h3>
          <div id = "image-box" class="guesses-comments-image"></div>
        </div>
      </div>

      <!-- Comments -->
      <div class="col-md-4">
        <div id="comment-container">
          <h3>Comments:</h3>
          <div id="comment-list" class="guesses-comments-image"></div>
        </div>
      </div>

    </div>
    <!-- /Row3 -->

    <!-- Row4 -->
    <div id= "row4" class="row">

      <div class="col-md-4">
        <div id="guess-form" class="game-div-js"></div>
      </div>

      <div class="col-md-4">
        <div id="username-input">
          <label>Username:</label>
          <input id="user-name" type="text" name="guess[username]" value=""><br>
        </div>
      </div>

      <div class="col-md-4">
        <div id="comment-form">
          <form id="comment" action="#" method="post">
            <label>Comment:</label>
            <input type="text" name="comment" value="" required>
            <input type="submit" value="Chat">
          </form>
        </div>
      </div>

    </div>
    <!-- /Row4 -->

    <!-- Row4 -->
    <div class="row">
      <p id="footer">Flatiron School Module 3</p>
    </div>
    <!-- /Row4 -->
    `
    DisplayController.render(html, "#page-area")
  }

  static displaySeeder(){

    let html =
      `<div id = "seed-page-container" class="row page-title">
        <h1 align="center">Seed Room</h1>
        <div align="center" id="api-image"></div>
        <div align="center" id="load-button">
          <input id="seed-category" type="text" name="category" value="" placeholder="category">
          <input id="load-image" type="submit" name="submit" value="load image">
        </div>
      </div>`

    DisplayController.render(html, "#page-area")
  }

  init(){
  }
}
