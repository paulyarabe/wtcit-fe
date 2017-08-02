class CategoryAdapter {

  constructor() {
  }

  static index(){
    return fetch("http://localhost:3000/categories").then(resp => resp.json())
  }
}
