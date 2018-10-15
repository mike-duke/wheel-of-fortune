class Puzzle {
  constructor(puzzleObject) {
    // this.numberOfWords = puzzleObject.number_of_words;
    // this.numberOfLetters = puzzleObject.total_number_of_letters;
    this.correctAnswer = puzzleObject.correct_answer;
    // this.category = puzzleObject.category;
    this.solved = false;
  }

  // checkGuess(letterGuess) {
  //   this.solution.includes(letterGuess) ? this.letterGuess = letterGuess : 'no match';
  //   //should this be in the board? 
  // }

  checkSolution(answerGuess) {
    if (this.correctAnswer === answerGuess) {
      this.solved = true;
    }
    return this.solved;
  }

}


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}