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

    static find(id){
      return this.all.filter(category => category.id === id)[0]
    }

    static find_by_name(name){
      return this.all.filter(category => category.name.toLowerCase() === name.toLowerCase())[0]
    }

    static find_or_create_by_name(name){
      let match = this.find_by_name(name)
      return match? match : new Category(name)
    }

    destroy(){
      let index = Category.all.indexOf(this)
      return Category.all.splice(index,1)[0]
    }

  }
}

let Category = createCategory()
