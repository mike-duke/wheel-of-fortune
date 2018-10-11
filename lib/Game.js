class Game {
  constructor() {
    this.gameOver = false;
    this.guess = '';
    this.instructions = '';
    this.currentRound = 1;
  }

  startGame(playerArray) {
    let player1 = new Player(playerArray[0]);
    let player2 = new Player(playerArray[1]);
    let player3 = new Player(playerArray[2]);
    let round1 = new Round(this.currentRound);
  }

  // giveInstructions() {

  // }

  // updateTotalScore() {

  // }

  // updateRound() {

  // }

  // indicateTurn() {

  // }

  // indicateWinner() {

  // }

  // endGame() {

  // }

}

module.exports = Game;