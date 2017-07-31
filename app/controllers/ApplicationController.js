class ApplicationController {

  render(html, selector){
    $(selector).empty()
    $(selector).append(html)
  }

}
