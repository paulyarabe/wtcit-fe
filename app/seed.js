function loadImageSeeder(){

  $('#load-image').on('click', function(event){
    $('#api-image').children().remove()
    let category = $('#seed-category')[0].value
    let randomNum = Math.floor((Math.random() * 99) + 1)
    let randomPage = Math.floor((Math.random() * 5) + 1)
    fetch(`https://pixabay.com/api/?key=6057872-ace21032695f6ad08f9b7a136&q=${category}&per_page=100&page=${randomPage}`).
    then(res => res.json()).
    then(json => {
      $('#api-image').prepend(`<div><img id="current-image"src='${json.hits[randomNum].webformatURL}'/><br>Answers: ${json.hits[randomNum].tags}<br><br><form action="index.html" method="post"><input type="text" id="image-answer" name="answer" value="" placeholder="answer"><input type="submit" id='create-db-image' name="submit" value="seed image"></form><br></div>`)
    })
  })

  $('body').on('click', '#create-db-image', function(event){
    event.preventDefault()
    let category = $('#seed-category')[0].value
    let answer = $('#image-answer')[0].value
    let url = $('#current-image')[0].src
    let header = new Headers
    header.set('Content-Type', 'application/json')
    fetch("http://localhost:3000/images", {
      method:"POST",
      headers: header,
      body: JSON.stringify({answer, url, category})
    }).then(resp => resp.json()).then(json => {
         $('#api-image').append(`<p>Image Created!</p><p>Image URL: ${json[0].image.url}</p><p>Image Answer: ${json[0].image.answer}</p><p>Database has ${json[1].count} photos in ${json[2].category} category</p>`)
       })
  })

}
