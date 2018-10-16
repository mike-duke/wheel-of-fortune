class Round {
  constructor(round) {
    this.currentRound = round, 
    this.roundOver = false, 
    this.puzzledSolved = false,
    this.winner = ''
    this.wheel = new Wheel(this.currentRound);
  }

  getWheelValue() {
    let wheelValue = this.wheel.spinWheel;
    return wheelValue;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}