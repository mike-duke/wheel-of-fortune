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

  getPuzzleBank() {
    let puzzleBank = {};
    for (let i = 1; i <= 4; i++) {
      let puzzleArray = Object.keys(data.puzzles).reduce((arr, puzzleKey) => {
        let whichPuzzle = data.puzzles[puzzleKey].puzzle_bank.filter((puzzle) => {
          let multiplier;
          if (i === 1) {
            return multiplier = puzzle.total_number_of_letters < 10;
          } else if (i === 2) {
            return multiplier = puzzle.total_number_of_letters >= 10 && puzzle.total_number_of_letters < 15;
          } else if (i === 3) {
            return multiplier = puzzle.total_number_of_letters >= 15 && puzzle.total_number_of_letters < 20
          } else if (i === 4) {
            return multiplier = puzzle.total_number_of_letters >= 20;
          }
        });
        return arr.concat(whichPuzzle)
      }, []);
      let randomPuzzleIndex = Math.floor(Math.random() * puzzleArray.length);
      puzzleBank[`round${i}`] = puzzleArray[randomPuzzleIndex]
    }
    return puzzleBank
  }
}


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}