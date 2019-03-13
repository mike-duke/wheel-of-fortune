class Puzzle {
  constructor(puzzleObject) {
    this.numberOfWords = puzzleObject.number_of_words;
    this.numberOfLetters = puzzleObject.total_number_of_letters;
    this.correctAnswer = puzzleObject.correct_answer;
    this.firstWord = puzzleObject.first_word;
    this.correctAnswerArray = [];
    this.category = puzzleObject.category;
  }

  checkSolution(answerGuess) {
    const guess = answerGuess.toLowerCase();
    const correct = this.correctAnswer.toLowerCase();
    return guess === correct;
  }

  checkLetterGuess(event) {
    const guessCorrect = domUpdates.checkLetterGuess(event);
    if(guessCorrect.length) {
      domUpdates.enableBuyAVowel();
      domUpdates.disableKeyboard();
      domUpdates.displayInstructions('Spin Again, Buy a Vowel, or Guess the Puzzle');
    }
  }

  splitAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUpperCase();
    this.correctAnswerArray = upperCaseAnswer.split('');
    domUpdates.populatePuzzle(this.correctAnswerArray);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}