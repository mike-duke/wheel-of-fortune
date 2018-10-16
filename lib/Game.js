class Game {
  constructor() {
    this.gameOver = false;
    this.guess = '';
    this.instructions = '';
    this.currentRound = 1;
    this.puzzleBank = {};
    this.wheel;
    this.currentWheelValue = 0;
  }

  getPlayers(playerArray) { //rename?
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
  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.length);
    this.currentWheelValue = this.wheel[randomIndex];
    domUpdates.displayWheelValue(this.currentWheelValue);
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
    this.playerArray.forEach((player) => {
      if (player.isTurn && correctLetterGuess) {
        player.roundScore += (this.currentWheelValue * correctLetterGuess.length);
        domUpdates.updateRoundScore(player);
      }
    })
  }

  // giveInstructions() {// our element that updates instruction text should indicate which players turn it is and tell them to spin the wheel// 'player1(name) spin the wheel'// after they spin the wheel we want to then want them to pick a letter from our key board// this should enable the buttons on the keyboard//  the buttons on the keyboard should be disabled after each selection// if their selection is correct then they can keep guessing  // }

  // updateTotalScore() { // if player solves the puzzle we want to update the text of of their total score and we probaly want to save this value in a variable
  // }


  // indicateTurn() { we would probably want to update the to call giveInstructions and tell the 'player' to spin the wheel, we may not need this method depending on how thorough the giveInstructions method is 
  // }

  // indicateWinner() { // after our 4th round we want to compare the score of all 3 players // the player with the highest score will be our winner 
  // }

  // endGame() { // after our winner has been declared we want gameOver to be true
  // }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}