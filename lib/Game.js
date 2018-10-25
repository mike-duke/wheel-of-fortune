class Game {
  constructor() {
    this.gameOver = false;
    this.guess = '';
    this.instructions = '';
    this.puzzleBank = {};
    this.wheel;
    this.currentWheelValue = 0;
    this.currentTurnIndex = 0;
    this.playerArray = [];
  }

  startGame(playerArray) {
    this.getPuzzleBank();
    this.playerArray = [new Player(playerArray[0], 'one'), new Player(playerArray[1], 'two'), new Player(playerArray[2], 'three')];
    this.playerArray[0].isTurn = true;
    this.round = new Round(this.playerArray);
    this.round.startRound(this.puzzleBank[1]);
    domUpdates.displayInstructions(this.playerArray[0]);
    domUpdates.displayPlayerNames(this.playerArray);
  }
 
  updateRound() {
    this.currentRound++;
    this.playerArray.forEach((player) => {
      player.roundScore = 0;
      domUpdates.updateRoundScore(player);
    })

  }

  getPuzzleBank() {
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
      this.puzzleBank[i] = puzzleArray[randomPuzzleIndex]
    }
  }

  checkLetter(event) {
    let correctLetterGuess = this.round.puzzle.checkLetterGuess(event);
    if (correctLetterGuess.length !== 0) {
      this.playerArray.forEach((player) => {
        if (player.isTurn) {
          console.log(this.round.wheel.currentValue)
          player.roundScore += (this.round.wheel.currentValue * correctLetterGuess.length);
          domUpdates.updateRoundScore(player);
        }
      })
    } else {
      this.endTurn()
    }
  }

  buyAVowel() {
    this.roundScore -= 100;
  }

  solvePuzzle(solution) {
    this.guess = solution;
    let currentPlayer = this.playerArray[this.currentTurnIndex];

    if (currentPlayer.isTurn === true && this.guess === this.puzzle.correctAnswer) {
      currentPlayer.totalScore += currentPlayer.roundScore; 
      domUpdates.updateTotalScore(currentPlayer);
      this.updateRound(); 
    } else {
      this.endTurn()
    }
  }

  endTurn() {
    this.playerArray[this.currentTurnIndex].isTurn = false;
    if (this.currentTurnIndex < 2) {
      this.currentTurnIndex++;
    } else {
      this.currentTurnIndex = 0;
    }
    this.playerArray[this.currentTurnIndex].isTurn = true;
    domUpdates.displayInstructions(this.playerArray[this.currentTurnIndex].name)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}