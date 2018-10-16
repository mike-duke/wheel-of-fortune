const domUpdates = {
  displayInstructions(name) {
    $('.instruction-text').text(`${name} Spin the Wheel!`)
  },
  
  displayPlayerNames(playerArray) {
    let names = document.querySelectorAll('.player-name');
    let roundScores = document.querySelectorAll('.round-score');
    let totalScores = document.querySelectorAll('.total-score');
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
    let boxes = document.querySelectorAll('.puzzle-square')
    correctAnswerArray.forEach((letter, i) => {
      boxes[i].innerText = letter
    })
  },

  displayWheelValue(wheelValue) {
    $('.wheel-output').text(`$${wheelValue}`);
  },

  updateRoundScore(player) {
    let playerRoundScores = document.querySelectorAll('.round-score');
    playerRoundScores.forEach(playerScore => {
      if (playerScore.classList.contains(player.playerNumber)) {
        playerScore.innerText = player.roundScore; 
      }
    })
    
  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}