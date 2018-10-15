const domUpdates = {
    displayInstructions(name) {
        $('.instruction-text').text(`${name} Spin the Wheel!`) 
    }, 
    displayPlayerNames(playerArray) {
        let names = document.querySelectorAll('.player-name')
            names.forEach((name, i) => {
            name.innerText = playerArray[i]
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
        console.log(correctAnswerArray)
            correctAnswerArray.forEach((letter, i) => {
                boxes[i].innerText = letter
            })
    }, 
    displayWheelValue(wheelValue) {
        $('.wheel-output').text(wheelValue); 
    }  

}

if (typeof module !== 'undefined') {
    module.exports = domUpdates;
  }