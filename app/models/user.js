function createUser(){

  let all = []
  let allIds = []

  return class User {
    constructor(id, name){
      this.id = id
      this.name = name
      all.push(this)
      allIds.push(this.id)
    }

    static constructMany(json){
      json.forEach(user => {
        if (!this.allIds.includes(user.id)) {
          new User(user.id, user.name)
        }
      })
    }

    static get all(){
      return all
    }

    static get allIds(){
      return allIds
    }

    static find(id){
      return this.all.filter(user => user.id === id)[0]
    }

    static find_by_name(name){
      return this.all.filter(user => user.name === name)[0]
    }

    static find_or_create(user){
      let match = User.find(user.id)
      return match ? match : new User(user.id, user.name)
    }

    destroy(){
      let index = User.all.indexOf(this)
      return User.all.splice(index,1)[0]
    }

  }
}

let User = createUser()
