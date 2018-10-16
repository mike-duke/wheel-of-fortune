const chai = require('chai');
const expect = chai.expect;
const Game = require('../lib/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['displayInstructions'], () => true);

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should instantiate a new Game class', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should tell a player to spin the wheel when it is their turn', () => {

    // game.giveInstructions('Noah'); 

    // expect(game.giveInstructions()).to.equal('Noah Spin the Wheel!'); 
    
    expect(domUpdates.displayInstructions).to.have.been.called(1); 
    expect(domUpdates.displayInstructions).to.have.been.called.with('Noah Spin the Wheel!'); 
  }); 

  // it('should tell the player ')

})