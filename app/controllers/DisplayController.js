class DisplayController extends ApplicationController {

  static render(html, selector){
    $(selector).empty()
    $(selector).append(html)
  }

}
