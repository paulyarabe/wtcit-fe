$(document).ready(function(){
  gameController = new GameController()
  gameController.init()
  guessController = new GuessController()
  guessController.init()
  imageController = new ImageController()
  imageController.init()
})

function cropImage(index){
  let h = parseInt($("#game-image").css("height"))
  let w = parseInt($("#game-image").css("width"))
  let sections = [
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
  setInterval(function(){
    let index = Math.floor(Math.random()*sections.length)
    $("#game-image").css("clip", `${sections[index]}`)
    console.log($("#game-image").css("clip"))
  }, 1000)
}

function unCropImage(){
  $("#game-image").css("position", "absolute")
  $("#game-image").css("clip", "auto")
}


// Seed Data
u = new User("david")
