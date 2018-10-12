const chai = require('chai');
const expect = chai.expect;
const Puzzle = require('../lib/Round.js');
// const spies = require('chai-spies');
// chai.use(spies);

// global.domUpdates = require('../lib/domUpdates.js');
// chai.spy.on(global.domUpdates, [], () => true);

describe('Puzzle', function() {

  let puzzle;

  beforeEach(() => {
    puzzle = new Puzzle();
  })

  it('should instantiate a new Round class', () => {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  })

})