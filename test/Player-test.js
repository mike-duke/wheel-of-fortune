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

});