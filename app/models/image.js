function createImage(){

  let all = []

  return class Image {
    constructor(id, url, answer, category){
      this.id = id
      this.url = url
      this.answer = answer
      this.category_id = category.id
      all.push(this)
    }

    static get all(){
      return all
    }

    static find(id){
      return this.all.filter(function(image){
        return image.id === id
      })[0]
    }

    destroy(){
      let index = Image.all.indexOf(this)
      return Image.all.splice(index,1)[0]
    }

  }
}

let Image = createImage()
