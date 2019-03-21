const domUpdates = {
  displayInstructions(message) {
    $('.instruction-text').text(message);
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

<<<<<<< HEAD

  displayRoundSummary() {
    console.log('winner!')
    $('.round-summary-container').toggle('display');
=======
  displayRoundSummary() {
    console.log('end round')
    // $('.round-summary-container').toggle();
>>>>>>> dc3b85615ea6472a947cc1a280cbfa2a8d97f38e
  },

  displayCategory(category) {
    $('.category-name').text(category)
  },

  populatePuzzle(correctAnswers) {
    const puzzleSquares = $('.puzzle-square');
    correctAnswers.forEach((letter, i) => {
      if(letter !== ' ') {
        $(puzzleSquares[i]).addClass('showPuzzleSquare');
        $(puzzleSquares[i]).text(letter);
        if(letter === '-') {
          $(puzzleSquares[i]).addClass('show-letter');
        }
      }
    });
  },

  displayWheelValue(wheelValue) {
<<<<<<< HEAD
    console.log(wheelValue)
=======
>>>>>>> dc3b85615ea6472a947cc1a280cbfa2a8d97f38e
    $('.wheel-output').text(`${wheelValue}`);
  },

  checkLetterGuess(event) {
    let correctGuess = [];
    $('.puzzle-square').each(function(i) {
      if($(event.target).text() === $(this).text()) {
        $(this).addClass('show-letter');
        correctGuess.push($(this).text());
      }
    });
    return correctGuess;
  },

  updateRoundScore(player) {
    let playerRoundScores = $('.round-score');
    $.each(playerRoundScores, (i, playerScore) => {
      if ($(playerScore).hasClass(player.playerNumber)) {
        playerScore.innerText = player.roundScore;
      }
    });
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

  disableKeyboard() {
    $('.keyboard-button').each(function(i) {
      $(this).attr('disabled', true);
    });
  },

  enableKeyboard() {
    $('.keyboard-button').each(function(i) {
      $(this).attr('disabled', false);
    });
  },

  disableBuyAVowel() {
    $('#vowel-button').attr('disabled', true);
  },

  enableBuyAVowel() {
    $('#vowel-button').attr('disabled', false);
  },

  disableVowels() {
    $('.keyboard-button').each(function(i) {
      if($(this).hasClass('vowel')) {
        $(this).attr('disabled', true);
      }
    });
  },

  enableVowels() {
    $('.keyboard-button').each(function(i) {
      if($(this).hasClass('vowel')) {
        $(this).attr('disabled', false);
      }
    });
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