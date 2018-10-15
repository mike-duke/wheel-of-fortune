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

  checkLetterGuess(letterGuess, event) {
    if (this.correctAnswerArray.includes(letterGuess)) {
      event.target.addClass('show-letter');
    }
  }

  displayLetter(letterIndex) {
    this.correctAnswerArray[letterIndex];
  }

  displayAnswer() {

  }

  splitAnswer() {
    this.correctAnswerArray = this.correctAnswer.split('');
  }
}