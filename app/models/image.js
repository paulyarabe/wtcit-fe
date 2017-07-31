
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
  }
}

let Image = createImage()
let rdj = new Image('https://s-media-cache-ak0.pinimg.com/originals/da/dc/d4/dadcd453713f86372e4297352939976b.jpg', 'Robert Downey Jr.', 2)

$(document).ready(function(){
  $('#imagefromAPI').append(`<img src="${rdj.url}" alt="placeholder" height="400px">`)
})
