class Game {
  constructor() {
    this.gameOver = false;
    this.puzzleBank = {};
    this.wheel;
    this.puzzle;
    this.currentWheelValue = 0;
    this.currentTurnIndex = 0;
    this.currentRound = 0;
    this.playerArray = [];
  }

  startGame(playerArray) {
    this.getPuzzleBank();
    this.playerArray = [new Player(playerArray[0], 'one'), new Player(playerArray[1], 'two'), new Player(playerArray[2], 'three')];
    this.playerArray[0].isTurn = true;
    this.startRound();
    domUpdates.displayInstructions((this.playerArray[0].name).toUpperCase());
    domUpdates.displayPlayerNames(this.playerArray);
    domUpdates.activatePlayer(this.playerArray[0].playerNumber);
  }

  startRound() {
    this.currentRound++;
    this.wheel = new Wheel();
    this.wheel.makeNewWheel(this.currentRound);
    this.puzzle = new Puzzle(this.puzzleBank[this.currentRound]);
    console.log(this.puzzle);
    this.puzzle.splitAnswer();
    domUpdates.displayCategory(this.puzzle.category)
    domUpdates.displayRound(this.currentRound);
  }
 
  updateRound() {
    this.currentRound++;
    this.playerArray.forEach((player) => {
      player.roundScore = 0;
      domUpdates.updateRoundScore(player);
    });
  }

  guessPuzzle(userGuess) {
    const puzzleSolved = this.puzzle.checkSolution(userGuess, this.currentTurnIndex);
    const currentPlayer = this.playerArray[this.currentTurnIndex];
    if (currentPlayer.isTurn && puzzleSolved) {
      console.log('winner!');
      currentPlayer.totalScore += currentPlayer.roundScore; 
      domUpdates.updateTotalScore(currentPlayer);
      // this.endRound();
      // show end of round dialog 
    } else {
      console.log('nope');
      // this.endTurn();
      // dispatch message
    }
  }

  getPuzzleBank() {
    for (let i = 1; i <= 4; i++) {
      const puzzleArray = Object.keys(data.puzzles).reduce((arr, puzzleKey) => {
        const whichPuzzle = data.puzzles[puzzleKey].puzzle_bank.filter((puzzle) => {
          if (i === 1) {
            return puzzle.total_number_of_letters < 10;
          } else if (i === 2) {
            return puzzle.total_number_of_letters >= 10 && puzzle.total_number_of_letters < 15;
          } else if (i === 3) {
            return puzzle.total_number_of_letters >= 15 && puzzle.total_number_of_letters < 20
          } else if (i === 4) {
            return puzzle.total_number_of_letters >= 20;
          }
        });
        return arr.concat(whichPuzzle)
      }, []);
      const randomPuzzleIndex = Math.floor(Math.random() * puzzleArray.length);
      this.puzzleBank[i] = puzzleArray[randomPuzzleIndex]
    }
  }

  checkLetter(event) {
    const correctLetterGuess = this.puzzle.checkLetterGuess(event);
    if (correctLetterGuess.length !== 0) {
      this.playerArray.forEach((player) => {
        if (player.isTurn) {
          player.roundScore += (this.wheel.currentValue * correctLetterGuess.length);
          domUpdates.updateRoundScore(player);
        }
      });
    } else {
      this.endTurn()
    }
    domUpdates.disableVowels();
  }

  buyAVowel() {
    const currentPlayer = this.playerArray[this.currentTurnIndex];
    if (currentPlayer.roundScore <= 0) {
      console.log('you can not afford that')
    } else {
      currentPlayer.roundScore -= 100;
      domUpdates.updateRoundScore(currentPlayer);
      domUpdates.enableVowels();
    }
  }

  endTurn() {
    domUpdates.deactivatePlayer(this.playerArray[this.currentTurnIndex].playerNumber);
    this.playerArray[this.currentTurnIndex].isTurn = false;
    if (this.currentTurnIndex < 2) {
      this.currentTurnIndex++;
    } else {
      this.currentTurnIndex = 0;
    }
    this.playerArray[this.currentTurnIndex].isTurn = true;
    domUpdates.displayInstructions(this.playerArray[this.currentTurnIndex].name);
    domUpdates.activatePlayer(this.playerArray[this.currentTurnIndex].playerNumber);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}