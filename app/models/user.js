
function createUser(){
  let userId = 0
  let all = []
  return class User {
    constructor(name){
      this.id = ++userId
      this.name = name
      all.push(this)
    }
    static get all(){
      return all
    }
  }
}

let User = createUser()
