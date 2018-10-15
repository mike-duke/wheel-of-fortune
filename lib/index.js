$('.start-game-button').on('click', function() {
  event.preventDefault()
  let game = new Game();
  console.log('click')
  removeNewGameScreen();
  let playerArray = getPlayerNames();
  game.getPlayers(playerArray); 
  // game.updateRound();
  // game.indicateTurn();
  // game.giveInstructions();
  // updateGameArea();
})

$('.spin-button').on('click', function() {
  game.spinWheel()
})

function removeNewGameScreen() {
  $('.new-game-screen-container').toggle('display')
}

function getPlayerNames() {
  let player1Name = $('#player1-name').val();
  let player2Name = $('#player2-name').val();
  let player3Name = $('#player3-name').val();
  return [player1Name, player2Name, player3Name];
}