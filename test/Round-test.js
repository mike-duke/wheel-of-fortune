const chai = require('chai');
const expect = chai.expect;
const Round = require('../lib/Round.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['displayWheelValue'], () => true);

describe('Round', function() {

  let round;

  beforeEach(() => {
    round = new Round();
  })

  it('should instantiate a new Round class', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 
  
  it('should return the value of the current wheel selection', () => {

    let result = round.getWheelValue()
    
    expect(result).to.equal(700)
    
    expect(domUpdates.displayWheelValue).to.have.been.called(1); 
    expect(domUpdates.displayWheelValue).to.have.been.called.with(700)
  })

})