const chai = require('chai');
const expect = chai.expect;
const Wheel = require('../lib/Wheel.js');

describe('Wheel', () => {


  it('should instantiate a new Wheel object', () => {
    let wheel = new Wheel(1);
    expect(wheel).to.be.an.instanceof(Wheel)
  })

  it('should make a new wheel when invoked', () => {
    let wheel = new Wheel(1);

    expect(wheel.makeNewWheel()).to.be.an('array');
  })
})