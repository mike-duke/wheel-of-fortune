class Wheel {
  constructor() {
    this.hasBeenSpun = false;
    this.currentValue = '';
    this.values = [];
  }

  makeNewWheel(round) {
    let roundWheel = data.wheel.reduce((wheelArray, currentValue) => {
      let randomIndex = Math.floor(Math.random() * data.wheel.length)
      if (currentValue === 'BANKRUPT' && !wheelArray.includes('BANKRUPT')) {
        wheelArray.push(currentValue);
      } else if (round === 1 && (currentValue < 800 || currentValue === 'LOSE A TURN')) {
        wheelArray.splice(randomIndex, 0, currentValue);
      } else if (round === 2 && ((currentValue < 900 && currentValue > 500) || currentValue === 'LOSE A TURN')) {
        wheelArray.splice(randomIndex, 0, currentValue);
      } else if (round === 3 && ((currentValue <= 900 && currentValue > 600) || currentValue === 'LOSE A TURN')) {
        wheelArray.splice(randomIndex, 0, currentValue);
      } else if (round === 4 && ((currentValue <= 2500 && currentValue > 650) || currentValue === 'LOSE A TURN')) {
        wheelArray.splice(randomIndex, 0, currentValue);
      }
      return wheelArray
    }, [])
    this.values = roundWheel;
  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.values.length);
    this.currentValue = this.values[randomIndex];
    domUpdates.displayWheelValue(this.currentValue);
    domUpdates.enableKeyboard();
    domUpdates.disableVowels();
    domUpdates.displayInstructions('Guess a Letter!')
    // if (this.currentValue === 'BANKRUPT' || this.currentValue === 'LOSE A TURN') {
    //   this.endTurn()
    // }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}