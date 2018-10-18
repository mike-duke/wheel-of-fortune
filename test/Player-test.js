const chai = require('chai');
const expect = chai.expect;
const Player = require('../lib/Player.js');

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player('Bob', 'one');
  })

  it('should instatiate a new Player class', () => {
    expect(player).to.be.an.instanceof(Player);
  })

  it('should have default values when it is instantiated', () => {

    expect(player.name).to.equal('Bob');
    expect(player.roundScore).to.equal(0);
    expect(player.totalScore).to.equal(0);
    expect(player.isTurn).to.equal(false);
    expect(player.hasSpun).to.equal(false);
    expect(player.hasGuessed).to.equal(false);
    expect(player.hasSolved).to.equal(false);
    expect(player.playerNumber).to.equal('one');
  })
});