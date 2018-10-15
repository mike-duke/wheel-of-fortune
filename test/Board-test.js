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
    let puzzleObject = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description: 'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    }
    board = new Board(puzzleObject.category, puzzleObject.correct_answer);
  })

  it('should instantiate a new Board class', () => {
    expect(board).to.be.an.instanceof(Board); 
  })

  it('should have properties of correctAnswer and category from passed in arguments', () => {
    expect(board.correctAnswer).to.equal('Armchair');
    expect(board.category).to.equal('Around The House');
  })

  it('should have properties of rows one through four and correctAnswerArray that are empty by default', () => {
    expect(board.row1).to.eql([]);
    expect(board.row2).to.eql([]);
    expect(board.row3).to.eql([]);
    expect(board.row4).to.eql([]);
    expect(board.correctAnswerArray).to.eql([]);
  })

  it('should have a method to update the category on the DOM', () => {
    //chai spies for call to method
  })

  it('should have a method to display the letter guessed on the DOM', () => {
    //chai spies
  })

  it('should have a method to display the correct answer on the DOM', () => {
    // chai spies
  })

  it('should be able to split the correct answer into an array of letters', () => {
    board.splitAnswer();
    expect(board.correctAnswerArray).to.eql(['A', 'r', 'm', 'c', 'h', 'a', 'i', 'r']);
  })
}); 