
function createImage(){
  let imageId = 0
  let all = []
  return class Image {
    constructor(url, answer_arr, category){
      this.id = ++imageId
      this.url = url
      this.answers = answer_arr
      this.categoryId = category.id
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
