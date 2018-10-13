const domUpdates = {
    displayInstructions(name) {
        $('instruction-text').text(`${name} Spin the Wheel!`) 
    }
}

if (typeof module !== 'undefined') {
    module.exports = domUpdates;
  }