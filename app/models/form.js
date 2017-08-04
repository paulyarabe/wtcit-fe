class Form {

  constructor() {
  }

  static get newGame(){
    return `<form id="start-game" action="index.html" method="post">
      <label>New Game Name:</label>
      <input type="text" name="game[name]" required><br>
      <label>Choose a Category:</label>
      <select class="category" name="game[categories]">
      ${Category.allHTML}
      </select><br>
      <input type="submit" value="Start Game">
      </form><br>`
  }

  static get userName(){
    return `
      <label>Username:</label>
      <input id="user-name" type="text" name="guess[username]" value=""><br>
      `
  }
  static get guess(){
    return `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input id="user-name" type="text" name="guess[username]" value=""><br>
      <label>Guess:</label>
      <input type="text" name="guess[text]" data-gameid="${Game.last.id}" value="" required>
      <input type="submit" value="Submit">
    </form>`
  }

  static get comment(){
    return `<form id="comment" action="#" method="post">
      <label>Comment:</label>
      <input type="text" name="comment" value="" required>
      <input type="submit" value="Chat">
    </form>`
  }
}
