const domUpdates = {
    displayInstructions(name) {
        $('instruction-text').text(`${name} Spin the Wheel!`) 
    }, 
    displayPlayerNames(playerArray) {
        let names = document.querySelectorAll('.player-name')
        console.log(playerArray)
            names.forEach((name, i) => {
                console.log(i)
            name.innerText = playerArray[i]
        })
    }
}

if (typeof module !== 'undefined') {
    module.exports = domUpdates;
  }