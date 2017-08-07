class SeedController {


  static loadSeedImage(){
    $('#load-image').on('click', function(event){
      $('#api-image').children().remove()
      let category = $('#seed-category')[0].value
      let randomNum = Math.floor((Math.random() * 99) + 1)
      let randomPage = Math.floor((Math.random() * 5) + 1)
      SeedAdapter.show(category, randomNum, randomPage)
    })
  }

  static saveSeedData(){
    $('body').on('click', '#create-db-image', function(event){
      event.preventDefault()
      let category = $('#seed-category')[0].value
      let answer = $('#image-answer')[0].value
      let url = $('#current-image')[0].src
      SeedAdapter.create(category, answer, url)
    })
  }

  // static checkPassword(){
  //   $('body').on('submit', '#admin-password', function(event){
  //     event.preventDefault()
  //   })
  // }

  static initSeederPage(){
    $('#seeder-page').on('click', function(event){
      event.preventDefault()
      PageController.displaySeeder()
      SeedController.loadSeedImage()
      SeedController.saveSeedData()
    })
  }
}
