class Puzzle {
  constructor(puzzleObject) {
    this.row1 = []; 
    this.row2 = []; 
    this.row3 = []; 
    this.row4 = []; 
    this.numberOfWords = puzzleObject.number_of_words;
    this.numberOfLetters = puzzleObject.total_number_of_letters;
    this.correctAnswer = puzzleObject.correct_answer;
    this.correctAnswerArray = [];
    this.category = puzzleObject.category;
    this.solved = false;
  }

  checkSolution(answerGuess) {
    if (this.correctAnswer === answerGuess) {
      this.solved = true;
    }
    return this.solved;
  }

  updateCategory() {
    // put category on the DOM
    //move to domUpdates
  }

  checkLetterGuess(event) {
    if (this.correctAnswerArray.includes(event.target.text())) {
      event.target.addClass('show-letter');
    }
    //move to domUpdates
  }

  displayLetter(letterIndex) {
    this.correctAnswerArray[letterIndex];
  }

  displayAnswer() {
    // display the full solution on the DOM if the player guesses the correct solution
    // move to domUpdates
  }

  splitAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUppercase();
    this.correctAnswerArray = upperCaseAnswer.split('');
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}