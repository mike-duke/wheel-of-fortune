class Game {
  constructor() {
    this.gameOver = false;
    this.guess = '';
    this.instructions = '';
    this.currentRound = 1;
    this.puzzleBank = {};
  }

  getPlayers(playerArray) {
    this.player1 = new Player(playerArray[0]);
    this.player2 = new Player(playerArray[1]);
    this.player3 = new Player(playerArray[2]);
  }
  
  startRound() {
    let round = new Round(this.currentRound);

  }
  
  updateRound() { 
    this.currentRound++;

    // if a player has solved the puzzle then we want to move on to the next round // and then we want to update our current now to the next round, and get new data for our puzzle and wheel
  }

  getPuzzleBank() {
    let puzzle = new Puzzle();
    this.puzzleBank = puzzle.puzzleBank();
  }

// giveInstructions() {// our element that updates instruction text should indicate which players turn it is and tell them to spin the wheel// 'player1(name) spin the wheel'// after they spin the wheel we want to then want them to pick a letter from our key board// this should enable the buttons on the keyboard//  the buttons on the keyboard should be disabled after each selection// if their selection is correct then they can keep guessing  // }

// updateTotalScore() { // if player solves the puzzle we want to update the text of of their total score and we probaly want to save this value in a variable
  // }


// indicateTurn() { we would probably want to update the to call giveInstructions and tell the 'player' to spin the wheel, we may not need this method depending on how thorough the giveInstructions method is 
  // }

// indicateWinner() { // after our 4th round we want to compare the score of all 3 players // the player with the highest score will be our winner 
  // }

// endGame() { // after our winner has been declared we want gameOver to be true
  // }

}

module.exports = Game;