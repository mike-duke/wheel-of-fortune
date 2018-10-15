class Board {
  constructor(category, correctAnswer) {
    this.row1 = []; 
    this.row2 = []; 
    this.row3 = []; 
    this.row4 = []; 
    this.category = category; 
    this.correctAnswer = correctAnswer;
    this.correctAnswerArray = [];
  }

  updateCategory() {

  }

  checkLetterGuess(event) {
    if (this.correctAnswerArray.includes(event.target.text())) {
      event.target.addClass('show-letter');
    }
  }

  displayLetter(letterIndex) {
    this.correctAnswerArray[letterIndex];
  }

  displayAnswer() {

  }

  splitAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUppercase();
    this.correctAnswerArray = upperCaseAnswer.split('');
  }
}