class Round {
  constructor(round) {
    this.currentRound = round, 
    this.roundOver = false, 
    this.puzzledSolved = false,
    this.winner = ''
    this.wheel = [];
  }

  getPuzzle() {

  } 

  getRoundWheel() {
    this.wheel = new Wheel(this.currentRound);
  }

  declareRoundWinner() {

  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.length);
    return this.wheel[randomIndex];
  }
}

// should instansiate a new puzzle for each round
// should instansiate a new wheel for each round

if (typeof module === 'undefined') {
  module.exports = Round;
}