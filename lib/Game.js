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
    let player2 = new Player(playerArray[1],'two');
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
    console.log(this.puzzle)
    domUpdates.populatePuzzle(this.puzzle.correctAnswer.length);
  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.length);
    this.currentWheelValue = this.wheel[randomIndex];
    domUpdates.displayWheelValue(this.currentWheelValue);
    if (this.currentWheelValue === 'BANKRUPT' || this.currentWheelValue === 'LOSE A TURN') {
      console.log('hit me')
      this.endTurn()
    }
  }

  updateRound() {
    this.currentRound++;

    // if a player has solved the puzzle then we want to move on to the next round // and then we want to update our current now to the next round, and get new data for our puzzle and wheel
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
      console.log('end turn')
      this.endTurn()
    }
  }
  
  buyAVowel() {
    this.roundScore -= 100; // if the user selects the buy a vowel button, their score for the round must be decreased by 100 // 
    // the vowel keys will be enabled and all other keys must be disabled
    // we want to check the value of the key they pressed and see if it matches any in our answer array
  }

  solvePuzzle() {
    this.hasSolved = true;
    // if its the players turn and they input a the answer to our phrase in our input // we then want that solve puzzle button enabled // we then want to check the value of our input against our answer if it is correct then we want to add all of their points for the round to their total score // then we would end the round if correct// if incorrect then we want to move to the next players turn
  }
  
  endTurn() {
    this.playerArray[this.currentTurnIndex].isTurn = false;
    if (this.currentTurnIndex < 2) {
      this.currentTurnIndex++;
    } else {
      this.currentTurnIndex = 0;
    }
    this.playerArray[this.currentTurnIndex].isTurn = true;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}