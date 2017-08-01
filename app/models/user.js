function createUser(){

  let all = []

  return class User {
    constructor(name){
      this.id = undefined
      this.name = name
      all.push(this)
    }

    static get all(){
      return all
    }

    static find(id){
      return this.all.filter(user => user.id === id)[0]
    }

    static find_by_name(name){
      return this.all.filter(user => user.name === name)[0]
    }

    static find_or_create_by_name(name){
      let match = this.find_by_name(name)
      return match? match : new User(name)
    }

    destroy(){
      let index = User.all.indexOf(this)
      return User.all.splice(index,1)[0]
    }

  }
}

let User = createUser()
