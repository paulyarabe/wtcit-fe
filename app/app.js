$(document).ready(function(){
  SessionController.initializeControllers()
  SeedController.initSeederPage()
  PageController.displayGameRoom()
  setInterval(SessionController.syncGame, 250)
  })
