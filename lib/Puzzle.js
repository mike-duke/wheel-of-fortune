class Puzzle {
  constructor(numberOfWords, numberOfLetters, solution) {
    this.numberOfWords = numberOfWords;
    this.numberOfLetters = numberOfLetters;
    this.letterGuess = '';
    this.solution = solution;
    this.solved = false
  }

  checkGuess(letterGuess) {
    this.solution.includes(letterGuess) ? this.letterGuess = letterGuess : 'no match';
  }

  checkSolution(solutionGuess) {
    this.solution === solutionGuess ? 'You win the round!' : 'change turn';
  }

  hasBeenSolved() {
    this.solved = true;
  }
}