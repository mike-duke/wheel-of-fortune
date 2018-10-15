$('.start-game-button').on('click', function() {
  event.preventDefault()
  console.log('click')
  removeNewGameScreen();
  // let game = new Game();
  // let playerArray = getPlayerNames();
  // game.startGame(playerArray);
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
  let player2Name = $('#player1-name').val();
  let player3Name = $('#player1-name').val();
  return [player1Name, player2Name, player3Name];
}

function updateGameArea() {
  let newGameArea = `
    main-page.html`;

  $('main').html(newGameArea);
}