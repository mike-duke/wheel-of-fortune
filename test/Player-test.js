const chai = require('chai'); 
const expect = chai.expect; 
const Player = require('../lib/Player.js'); 
 
describe('Player', () => {
let player; 

beforeEach(() => {
    player = new Player()
})

it('should instatiate a new Player class', () => {
expect(player).to.be.an.instanceof(Player); 
})

});