class ImageController extends ApplicationController {

  displayImage(json_data, category, game){
    category.id = json_data.image.category_id
    let image = new Image(json_data.image.url, json_data.image.answer, category)
    image.id = json_data.image.id
    game.id = json_data.game.id
    game.image_id = image.id
    //TODO only set height below, let width be auto
    imageController.render(`<h3>Game: ${game.name}</h3>`, '#new-game-container')
    imageController.render(`<img src="${image.url}" id="game-image" data-id="${image.id}" data-game-id="${game.id}" alt="placeholder" height="300px" width="200px" style="position: absolute; display:none;">`, '#image-container')
    imageController.startCrop(2)
  }

  getImageAndGame(category, game){
    return fetch(`http://localhost:3000/categories/images?category=${category.name}&game=${game.name}`)
    .then(resp => resp.json())
    .then(json => imageController.displayImage(json, category, game))
  }

  get imageSections(){
    let h = parseInt($("#game-image").css("height"))
    let w = parseInt($("#game-image").css("width"))
    return [
      // Top left
      `rect(${h/3.0*0}px, ${w/3.0*1}px, ${h/3.0*1}px, ${w/3.0*0}px)`,
      // Top middle
      `rect(${h/3.0*0}px, ${w/3.0*2}px, ${h/3.0*1}px, ${w/3.0*1}px)`,
      // Top right
      `rect(${h/3.0*0}px, ${w/3.0*3}px, ${h/3.0*1}px, ${w/3.0*2}px)`,
      // Middle left
      `rect(${h/3.0*1}px, ${w/3.0*1}px, ${h/3.0*2}px, ${w/3.0*0}px)`,
      // Middle middle
      `rect(${h/3.0*1}px, ${w/3.0*2}px, ${h/3.0*2}px, ${w/3.0*1}px)`,
      // Middle right
      `rect(${h/3.0*1}px, ${w/3.0*3}px, ${h/3.0*2}px, ${w/3.0*2}px)`,
      // Bottom left
      `rect(${h/3.0*2}px, ${w/3.0*1}px, ${h/3.0*3}px, ${w/3.0*0}px)`,
      // Bottom middle
      `rect(${h/3.0*2}px, ${w/3.0*2}px, ${h/3.0*3}px, ${w/3.0*1}px)`,
      // Bottom left
      `rect(${h/3.0*2}px, ${w/3.0*3}px, ${h/3.0*3}px, ${w/3.0*2}px)`
    ]
  }

  startCrop(interval){
    $("#game-image").css("display", "block")
    let sections = this.imageSections
    $("#game-image").css("clip", `${sections[Math.floor(Math.random()*sections.length)]}`)
    window.cropInterval = setInterval(function(){
      $("#game-image").css("clip", `${sections[Math.floor(Math.random()*sections.length)]}`)
    }, interval*1000)
  }

  stopCrop(){
    clearInterval(window.cropInterval)
    $("#game-image").css("clip", "auto")
  }

  init(){
  }
}
