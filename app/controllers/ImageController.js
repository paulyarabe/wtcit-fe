class ImageController extends ApplicationController {

  static displayImage(crop=false){
    let image = Image.last
    DisplayController.render(image.html, '#image-box')
    if (crop){
      ImageController.startCrop(2)
    } else {
      $("#game-image").css("display", "block")
    }
  }

  static get imageSections(){
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

  static startCrop(interval){
    let sections = ImageController.imageSections
    $("#game-image").css("display", "block")
    $("#game-image").css("clip", `${sections[Math.floor(Math.random()*sections.length)]}`)
    window.cropInterval = setInterval(function(){
      $("#game-image").css("clip", `${sections[Math.floor(Math.random()*sections.length)]}`)
    }, interval*1000)
  }

  static stopCrop(){
    clearInterval(window.cropInterval)
    $("#game-image").css("clip", "auto")
  }

  static init(){
  }
}
