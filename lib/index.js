/* global $ */

$('#player1-name').focus();

let game = new Game();

$('.start-game-button').on('click', function() {
  event.preventDefault(); 
  removeNewGameScreen();
  let playerArray = getPlayerNames();
  game.getPlayers(playerArray); 
  game.getPuzzleBank(); 
  game.startRound();
  // game.indicateTurn();
  // game.giveInstructions();
})

$('.spin-button').on('click', function() {
  game.spinWheel()
})

$('.keyboard').on('click', function() {
  game.checkLetter(event)
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