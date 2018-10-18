class Game {
  constructor() {
    this.gameOver = false;
    this.guess = '';
    this.instructions = '';
    this.currentRound = 1;
    this.puzzleBank = {};
    this.wheel;
    this.currentWheelValue = 0;
    this.currentTurnIndex = 0;
  }

  getPlayers(playerArray) {
    this.playerArray = []
    let player1 = new Player(playerArray[0], 'one');
    let player2 = new Player(playerArray[1], 'two');
    let player3 = new Player(playerArray[2], 'three');
    player1.isTurn = true;
    this.playerArray.push(player1, player2, player3);
    domUpdates.displayInstructions(player1.name);
    domUpdates.displayPlayerNames(this.playerArray)
  }

  startRound() {
    let round = new Round(this.currentRound);
    this.getPuzzleBank();
    this.puzzle = new Puzzle(this.puzzleBank[this.currentRound]);
    let wheel = new Wheel();
    this.wheel = wheel.makeNewWheel(this.currentRound)
    domUpdates.displayCategory(this.puzzle.category)
    this.puzzle.splitAnswer();
    domUpdates.displayRound(this.currentRound);
    domUpdates.populatePuzzle(this.puzzle.correctAnswer.length);
  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.length);
    this.currentWheelValue = this.wheel[randomIndex];
    domUpdates.displayWheelValue(this.currentWheelValue);
    if (this.currentWheelValue === 'BANKRUPT' || this.currentWheelValue === 'LOSE A TURN') {
      this.endTurn()
    }
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
    let correctLetterGuess = this.puzzle.checkLetterGuess(event);
    if (correctLetterGuess.length !== 0) {
      this.playerArray.forEach((player) => {
        if (player.isTurn) {
          player.roundScore += (this.currentWheelValue * correctLetterGuess.length);
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