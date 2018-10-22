class Puzzle {
  constructor(puzzleObject) {
    // this.numberOfWords = puzzleObject.number_of_words;
    // this.numberOfLetters = puzzleObject.total_number_of_letters;
    this.correctAnswer = puzzleObject.correct_answer;
    this.correctAnswerArray = this.splitAnswer();
    this.category = puzzleObject.category;
    // this.solved = false;
  }

  checkSolution(answerGuess) {
    return this.correctAnswer === answerGuess;
  }

  checkLetterGuess(event) {
    this.correctLetters = [];
    let puzzleSquares = $('.puzzle-square');
    $.each(puzzleSquares, (i, square) => {
      if ($(event.target).text() === $(square).text()) {
        $(square).addClass('show-letter');
        this.correctLetters.push(square);
      }
    })
    return this.correctLetters;
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