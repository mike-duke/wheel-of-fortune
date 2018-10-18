/* global $ */
 
const domUpdates = {
  displayInstructions(name) {
    $('.instruction-text').text(`${name} Spin the Wheel!`)
  },
  
  displayPlayerNames(playerArray) {
    let names = $('.player-name').toArray();
    let roundScores = $('.round-score')[0];
    let totalScores = $('.total-score');
    names.forEach((name, i) => {
      name.innerText = playerArray[i].name;
      roundScores[i].innerText = playerArray[i].roundScore;
      totalScores[i].innerText = playerArray[i].totalScore;
    })
  },

  displayRound(currentRound) {
    $('.round-text').text(currentRound);
  },

  displayCategory(category) {
    $('.category-name').text(category)
  },

  displayLetter(correctAnswerArray) {
    let boxes = $('.puzzle-square').toArray(); 

    correctAnswerArray.forEach((letter, i) => {
      boxes[i].innerText = letter
    })
  },

  displayWheelValue(wheelValue) {
    $('.wheel-output').text(`$${wheelValue}`);
  },

  updateRoundScore(player) {
    let playerRoundScores = $('.round-score').toArray();
    playerRoundScores.forEach(playerScore => {
      if (playerScore.classList.contains(player.playerNumber)) {
        playerScore.innerText = player.roundScore; 
      }
    }) 
  },

  populatePuzzle(length) {
    let puzzleSquareArray = $('.puzzle-square').toArray();
    $.each(puzzleSquareArray, (i, puzzleSquare) => {
      if (i < length) {
        $(puzzleSquare).addClass('showPuzzleSquare');
      }
    })
    // puzzleSquareArray.forEach((puzzleSquare, i) => {
    //   if (i < length) {
    //     puzzleSquare.classList.add('showPuzzleSquare');
    //   }
    // })
  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}