const chai = require('chai'); 
const expect = chai.expect; 
const Player = require('../lib/Player.js'); 
// const spies = require('chai-spies'); 
// chai.use(spies); 

// global.domUpdates = require('../lib/domUpdates.js'); 

// chai.spy.on(global.domUpdates, [], () => true); 

describe('Player', () => {
let player; 

beforeEach(() => {
    player = new Player()
})

it('should instatiate a new Player class', () => {
expect(player).to.be.an.instanceof(Player); 
})

it('should be able to guess letters to towards solving the puzzle', () => {

}), 

it('should be able to buy a vowel', () => {

}), 

it('should be able to solve the puzzle', () => {
    
})

});