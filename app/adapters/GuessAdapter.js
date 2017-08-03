class GuessAdapter {

  constructor(){

  }

  static create(guess, user){
    let header = new Headers
    header.set('Content-Type', 'application/json')
    return fetch("http://localhost:3000/guesses", {
      method:"POST",
      headers: header,
      body: JSON.stringify({guess, user})
    }).then(resp => resp.json())
  }

}
