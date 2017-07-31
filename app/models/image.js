
function createImage(){
  let imageId = 0
  let all = []
  return class Image {
    constructor(url, answer, categoryId){
      this.id = ++imageId
      this.url = url
      this.answer = answer
      this.categoryId = categoryId
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

  }
}

let Image = createImage()
