$('#player1-name').focus();

let game = new Game();
$('.start-game-button').attr('disabled', true);
$('.solution-input-button').attr('disabled', true);

$('.name-input').keyup(function(event) {
  const player1Name = $('#player1-name').val();
  const player2Name = $('#player2-name').val();
  const player3Name = $('#player3-name').val();
  if (player1Name && player2Name && player3Name) {
    $('.start-game-button').attr('disabled', false);
  }
});

$('#solution-input').keyup(function(event) {
  if(event.target.value) {
    $('.solution-input-button').attr('disabled', false);
  }
});

$('.start-game-button').on('click', function(event) {
  event.preventDefault(); 
  removeNewGameScreen();
  game.startGame(getPlayerNames());
})

$('.spin-button').on('click', function() {
  game.currentWheelValue = game.wheel.spinWheel()
  console.log(game.wheel)
})

$('.keyboard').on('click', function(event) {
  game.puzzle.checkLetterGuess(event);
  $(event.target).attr('disabled', true);
});


$('.solution-input-button').on('click', function() {
  event.preventDefault(); 
  const solution = $('#solution-input').val()
  game.guessPuzzle(solution);
});

$('#vowel-button').on('click', function(event) {
  game.buyAVowel(event.target);
});

function removeNewGameScreen() {
  $('.new-game-screen-container').toggle('display')
}

function getPlayerNames() {
  const player1Name = $('#player1-name').val();
  const player2Name = $('#player2-name').val();
  const player3Name = $('#player3-name').val();
  return [player1Name, player2Name, player3Name];
}
