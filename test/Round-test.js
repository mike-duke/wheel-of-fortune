const chai = require('chai');
const expect = chai.expect;
const Round = require('../lib/Round.js');
// const Game = require('.../lib/Game.js');
global.data = require('../lib/WheelData.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['displayWheelValue'], () => true);

describe('Round', function() {

  let round;

  beforeEach(() => {
    round = new Round(1);
  })

  it('should instantiate a new Round class', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have properties of currentRound, roundOver, puzzleSolved, winner, and wheel when it\'s instantiated', () => {
    expect(round.currentRound).to.equal(1);
    expect(round.roundOver).to.equal(false);
    expect(round.puzzleSolved).to.equal(false);
    expect(round.winner).to.equal('');
    expect(round.wheel).to.be.an('object');
  });

})