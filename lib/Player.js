class Player {
  constructor(name, playerNumber) {
    this.name = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.isTurn = false;
    this.hasSpun = false;
    this.hasGuessed = false;
    this.hasSolved = false;
    this.playerNumber = playerNumber; 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}