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
    // after the player has spun wheel we want our wheel button to be disabled // after the game has checked the players guess we want the wheel button to be enabled 
  }

  guessLetter() {
    this.hasGuessed = true; // once the player has selected a letter key we then want to check the value of that key against the letters in our  answer array
    // once guessed we want our keys to then be disabled
    // after the user spins the wheel we want keys to be eneabled
  }

  buyAVowel() {
    this.roundScore -= 100; // if the user selects the buy a vowel button, their score for the round must be decreased by 100 // 
    // the vowel keys will be enabled and all other keys must be disabled
    // we want to check the value of the key they pressed and see if it matches any in our answer array
  }

  solvePuzzle() {
    this.hasSolved = true;
    // if its the players turn and they input a the answer to our phrase in our input // we then want that solve puzzle button enabled // we then want to check the value of our input against our answer if it is correct then we want to add all of their points for the round to their total score // then we would end the round if correct// if incorrect then we want to move to the next players turn
  }
}

if (typeof module === 'undefined') {
  module.exports = Player;
}