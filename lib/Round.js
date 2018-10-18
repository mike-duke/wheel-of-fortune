class Round {
  constructor(round) {
    this.currentRound = round, 
    this.roundOver = false, 
    this.puzzleSolved = false,
    this.winner = '',
    this.wheel = new Wheel(this.currentRound);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}