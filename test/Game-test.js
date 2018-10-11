const chai = require('chai');
const expect = chai.expect;
const Game = require('../lib/Game.js');
// const spies = require('chai-spies');

// global.domUpdates = require('../lib/domUpdates.js')

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should instantiate a new Game class', () => {
    expect(game).to.be.an.instanceof(Game);
  })

})