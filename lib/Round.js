class Round {
  constructor(playerArray) {
    this.currentRound = 0, 
    this.roundOver = false, 
    this.puzzleSolved = false,
    this.winner = '',
    this.wheel = new Wheel(this.currentRound);
    this.puzzle = {};
    this.playerArray = playerArray;
  }
  
  startRound(roundPuzzle) {
    // this.puzzle.splitAnswer();
    this.currentRound++;
    console.log(roundPuzzle)
    this.puzzle = new Puzzle(roundPuzzle);
    domUpdates.displayCategory(this.puzzle.category)
    domUpdates.displayRound(this.currentRound);
    domUpdates.populatePuzzle(this.puzzle.correctAnswer.length);
  }

  endRound(playerArray) {
    domUpdates.displayRoundSummay(playerArray);
    this.currentRound < 4 ? this.currentRound++ : false;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}