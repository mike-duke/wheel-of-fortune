/* global $ */

const domUpdates = {
  displayInstructions(name) {
    $('.instruction-text').text(`${name} Spin the Wheel!`)
  },

  displayPlayerNames(playerArray) {
    let names = $('.player-name').toArray();
    let roundScores = $('.round-score')[0];
    let totalScores = $('.total-score');

    $.each(names, (i, name) => {
      $(name).text(playerArray[i].name);
      $(roundScores[i]).text(playerArray[i].roundScore);
      $(totalScores[i]).text(playerArray[i].totalScore)
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

  populatePuzzle(correctAnswerArray) {
    let puzzleSquareArray = $('.puzzle-square').toArray();
    for (let i = 0; i < correctAnswerArray.length; i++) {
      if(correctAnswerArray[i] !== ' ') {
        $(puzzleSquareArray[i]).addClass('showPuzzleSquare');
      }
    }
  },

  updateTotalScore(player) {
    player.totalScore += player.roundScore;
    let playerTotalScores = $('.total-score').toArray();
    $.each(playerTotalScores, (i, totalScore) => {
      if ($(totalScore).hasClass(player.playerNumber)) {
        $(totalScore).text(player.roundScore);
      }
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}