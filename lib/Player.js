class Player {
  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.isTurn = false;
    this.hasSpun = false;
    this.hasGuessed = false;
    this.hasSolved = false;
  }

  spinWheel() {
    this.hasSpun = true;
  }

  guessLetter() {
    this.hasGuessed = true;
  }

  buyAVowel() {
    this.roundScore -= 100;
  }

  solvePuzzle() {
    this.hasSolved = true;
  }
}