class Round {
  constructor(round) {
    this.currentRound = round, 
    this.roundOver = false, 
    this.puzzledSolved = false,
    this.winner = ''
    this.wheel = new Wheel(this.currentRound);
  }

  declareRoundWinner() {

  }

  getWheelValue() {
    let wheelValue = this.wheel.spinWheel;
    return wheelValue;
  }
}

// should instansiate a new puzzle for each round
// should instansiate a new wheel for each round

if (typeof module !== 'undefined') {
  module.exports = Round;
}