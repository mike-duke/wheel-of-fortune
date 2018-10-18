const chai = require('chai');
const expect = chai.expect;
const Puzzle = require('../lib/Puzzle.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe('Puzzle', function() {

  let puzzle;

  beforeEach(() => {
    let puzzleObject = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description: 'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    }
    puzzle = new Puzzle(puzzleObject);
  })

  it('should instantiate a new Puzzle class', () => {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  })

  it('should have properties of numberOfWords, numberOfLetters, correctAnswer, and category from the passed puzzle object when created', () => {
    expect(puzzle.numberOfWords).to.equal(1);
    expect(puzzle.numberOfLetters).to.equal(8);
    expect(puzzle.correctAnswer).to.equal('Armchair');
    expect(puzzle.category).to.equal('Around The House');
  })

  it('should also have property of solved with a default value when created', () => {
    expect(puzzle.solved).to.equal(false);
  })

  it('should have a method to check the player\'s letter guess against the correctAnswer', () => {
    let event = {target: {innerText: 'A'}}
    puzzle.checkLetterGuess(event);

    expect(puzzle.correctLetters).to.be.an('array').that.includes('A');
  })

  it('should be able to check the player\'s solution guess against the correctAnswer', () => {
    expect(puzzle.checkSolution('Armchair')).to.equal(true);
    expect(puzzle.checkSolution('Easy Chair')).to.equal(false);
  })

  it('should have a property of correctAnswerArray that is empty by default', () => {
    expect(puzzle.correctAnswerArray).to.eql([]);
  })

  it('should be able to split the correct answer into an array of letters', () => {
    puzzle.splitAnswer();
    expect(puzzle.correctAnswerArray).to.eql(['A', 'R', 'M', 'C', 'H', 'A', 'I', 'R']);
  })
}); 