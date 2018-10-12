const chai = require('chai');
const expect = chai.expect; 
const Board = require('../lib/Board.js'); 
// const spies = require('chai-spies'); 

// chai.use(spies); 

// global.domUpdates = require('..lib/domUpdates.js'); 

// chai.spy.on(global.domUpdates, [], () => true); 

describe('Board', () => {
let board; 

beforeEach(() => {
    board = new Board()
})

it('should instantiate a new Board class', () => {
    expect(board).to.be.an.instanceof(Board); 
})
}); 