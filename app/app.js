$(document).ready(function(){
  loadCategories()
  gameController = new GameController()
  gameController.init()
  guessController = new GuessController()
  guessController.init()
  imageController = new ImageController()
  imageController.init()
})

function loadCategories(){ //TODO: refactor this into another controller
  const categories = ["animals", "backgrounds", "buildings", "business", "computer", "education", "feelings", "food", "health", "industry", "music", "nature", "people", "places", "religion", "science", "sports", "transportation", "travel", "fashion"]
  let categoriesHTML = ""
  categories.forEach( category => {
    categoriesHTML += `<option value=${category}>${category}</option>`
  })
  $('.category').append(categoriesHTML)
}
