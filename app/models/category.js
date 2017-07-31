

function createCategory(){
  let categoryId = 0
  let all = []
  return class Category {
    constructor(name){
      this.id = ++categoryId
      this.name = name
      all.push(this)
    }
    static get all(){
      return all
    }
  }
}

let Category = createCategory()
