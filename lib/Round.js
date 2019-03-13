class Round {
  constructor(playerArray) {
    this.currentRound = 0, 
    this.roundOver = false, 
    this.puzzleSolved = false,
    this.winner = '',
    this.wheel = new Wheel();
    this.puzzle = {};
    this.playerArray = playerArray;
    this.correctAnswerArray = [];
    this.guess = '';
  }
  
  startRound(roundPuzzle) {
    this.currentRound++;
    this.wheel.makeNewWheel(this.currentRound)
    console.log(roundPuzzle)
    this.puzzle = new Puzzle(roundPuzzle);
    this.puzzle.splitAnswer();
    domUpdates.displayCategory(this.puzzle.category)
    domUpdates.displayRound(this.currentRound);
    domUpdates.populatePuzzle(this.puzzle.correctAnswerArray);
  }

  solvePuzzle(solution, currentTurn) {
    this.guess = solution.toLowerCase();
    const correct = this.puzzle.correctAnswer.toLowerCase();
    const currentPlayer = this.playerArray[currentTurn];
    console.log(this.puzzle)
    if (currentPlayer.isTurn === true && this.guess === correct) {
      console.log('winner!');
      currentPlayer.totalScore += currentPlayer.roundScore; 
      domUpdates.updateTotalScore(currentPlayer);
      this.endRound();
      // show end of round dialog 
    } else {
      this.endTurn();
      // dispatch message
    }
  }

  endRound(playerArray) {
    // domUpdates.displayRoundSummay(playerArray);
    if(this.currentRound < 4) {
      console.log('winner!')
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}