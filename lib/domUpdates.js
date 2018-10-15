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
    displayCategory(category) {
        $('.category-name').text(category)
    }

}

if (typeof module !== 'undefined') {
    module.exports = domUpdates;
  }