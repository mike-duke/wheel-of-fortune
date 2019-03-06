$('#player1-name').focus();

let game = new Game();
$('.start-game-button').attr('disabled', true);

$('.name-input').keypress(function(event) {
  let player1Name = $('#player1-name').val();
  let player2Name = $('#player2-name').val();
  let player3Name = $('#player3-name').val();
  if (player1Name && player2Name && player3Name) {
    $('.start-game-button').attr('disabled', false);
  }
});

$('.start-game-button').on('click', function(event) {
  event.preventDefault(); 
  removeNewGameScreen();
  // let playerArray = getPlayerNames();
  game.startGame(getPlayerNames());
})

$('.spin-button').on('click', function() {
  console.log(game.round.wheel)
  game.currentWheelValue = game.round.wheel.spinWheel()
})

$('.keyboard').on('click', function() {
  game.checkLetter(event);
  $(event.target).attr('disabled', true);
});

$('.solution-input-button').on('click', function() {
  event.preventDefault(); 
  let solution = $('#solution-input').val()
  game.solvePuzzle(solution)
});

function removeNewGameScreen() {
  $('.new-game-screen-container').toggle('display')
}

function getPlayerNames() {
  let player1Name = $('#player1-name').val();
  let player2Name = $('#player2-name').val();
  let player3Name = $('#player3-name').val();
  return [player1Name, player2Name, player3Name];
}
