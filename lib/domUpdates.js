const domUpdates = {
  displayInstructions(name) {
    $('.instruction-text').text(`${name} Spin the Wheel!`)
  },

  displayPlayerNames(playerArray) {
    const names = $('.player-name').toArray();
    const roundScores = $('.round-score')[0];
    const totalScores = $('.total-score');

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
    let playerRoundScores = $('.round-score');
    $.each(playerRoundScores, (i, playerScore) => {
      if ($(playerScore).hasClass(player.playerNumber)) {
        playerScore.innerText = player.roundScore;
      }
    });
  },

  populatePuzzle(correctAnswers) {
    const puzzleSquares = $('.puzzle-square');
    for (let i = 0; i < correctAnswers.length; i++) {
      if(correctAnswers[i] !== ' ') {
        $(puzzleSquares[i]).addClass('showPuzzleSquare');
      }
    }
  },

  updateTotalScore(player) {
    player.totalScore += player.roundScore;
    let playerTotalScores = $('.total-score');
    $.each(playerTotalScores, (i, totalScore) => {
      if ($(totalScore).hasClass(player.playerNumber)) {
        $(totalScore).text(player.roundScore);
      }
    })
  },

  enableVowels() {
    $('.keyboard-button').each(function(i) {
      if($(this).hasClass('vowel')) {
        $(this).attr('disabled', false);
      }
    });
  },

  disableVowels() {
    $('.keyboard-button').each(function(i) {
      if($(this).hasClass('vowel')) {
        $(this).attr('disabled', true);
      }
    })
  },

  activatePlayer(playerNumber) {
    $(`.player-${playerNumber}-name`).parent().addClass('active');
  },

  deactivatePlayer(playerNumber) {
    $(`.player-${playerNumber}-name`).parent().removeClass('active');
  },

  disableLetter(target) {
    $(target).attr('disabled', true);
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}