class UserAdapter {

  constructor(){

  }

  static retrieve(userName){
    // find or create user
    return fetch(`http://localhost:3000/users?name=${userName}`)
    .then(resp => resp.json())
    // .then(json => {console.log(json); debugger})
  }

}
