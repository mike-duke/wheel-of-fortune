$('.start-game-button').on('click', function() {
  event.preventDefault()
  let game = new Game();
  let playerArray = getPlayerNames();
  game.startGame(playerArray);
  game.updateRound();
  game.indicateTurn();
  game.giveInstructions();
  updateGameArea();
})

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