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

  endRound(playerArray) {
    domUpdates.displayRoundSummay(playerArray);
    this.currentRound < 4 ? this.currentRound++ : false;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}