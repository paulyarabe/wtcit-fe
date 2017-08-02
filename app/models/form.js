class Form {

  constructor() {
  }

  static newGame(json){
    return `<form id="start-game" action="index.html" method="post">
      <label>New Game Name:</label>
      <input type="text" name="game[name]" required><br>
      <label>Choose a Category:</label>
      <select class="category" name="game[categories]">
      ${json.map(category => `<option data-id=${category.id}>${category.name}</option>`).join("")}
      </select><br>
      <input type="submit" value="Start Game">
      </form><br>`
  }

  static guess(){
    return `<form id="guess" action="#" method="post">
      <label>Username:</label>
      <input type="text" name="guess[username]" value=""><br>
      <label>Guess:</label>
      <input type="text" name="guess[text]" data-gameid="${Game.last.id}" value="" required><br>
      <input type="submit" value="guess!">
    </form>`
  }

  static comment(){
    return `<form id="comment" action="#" method="post">
      <label>Comment:</label>
      <input type="text" name="comment" value="" required><br>
      <input type="submit" value="Say something!">
    </form>`
  }
}