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

  checkLetterGuess(event) {
    let puzzleSquares = document.querySelectorAll('.puzzle-square');
    puzzleSquares.forEach((square) => {
      if (event.target.innerText === square.innerText) {
        square.classList.add('show-letter');
      }
    })
  }

  splitAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUpperCase();
    this.correctAnswerArray = upperCaseAnswer.split('');
    domUpdates.displayLetter(this.correctAnswerArray); 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}