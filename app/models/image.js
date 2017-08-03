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

    static get last(){
      return all[all.length-1]
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

    get html(){
      return `<img src="${this.url}" id="game-image" data-id="${this.id}" alt="placeholder" height="400px" width="300px" style="position: absolute; display:none;">`
    }

  }
}

let Image = createImage()
