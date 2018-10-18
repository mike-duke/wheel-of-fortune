const chai = require('chai');
const expect = chai.expect;
global.Player = require('../lib/Player.js'); 
global.Round = require('../lib/Round.js'); 
global.Wheel = require('../lib/Wheel.js'); 
global.Puzzle = require('../lib/Puzzle.js'); 
global.data = require('../lib/WheelData.js');
global.domUpdates = require('../lib/domUpdates.js');
const Game = require('../lib/Game.js'); 
const spies = require('chai-spies');
chai.use(spies);

chai.spy.on(global.domUpdates, ['displayInstructions', 'displayPlayerNames'], () => true);

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should instantiate a new Game class', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should get players names and give them instructions', () => { 

    game.getPlayers(['Bob', 'Laura', 'Tina']); 

    let playerArray = []
    let player1 = new Player('Bob', 'one');
    let player2 = new Player('Laura', 'two');
    let player3 = new Player('Tina', 'three');
    playerArray.push(player1, player2, player3);


    expect(domUpdates.displayInstructions).to.have.been.called(1); 
    expect(domUpdates.displayInstructions).to.have.been.called.with('Bob'); 
    expect(domUpdates.displayPlayerNames).to.have.been.called(1); 
    // expect(domUpdates.displayPlayerNames).to.have.been.called.with(playerArray); 
  }); 

  it('should have a bank of puzzles', () => {
     game.getPuzzleBank(); 

    expect(typeof game.puzzleBank).toEqual('object'); 
  }); 

  it.skip('should start each round with a wheel and puzzle', () => {
    game.startRound();
    let wheel = new Wheel() 


    expect(domUpdates.displayCategory).to.have.been.called(1); 
    expect(domUpdates.displayCategory).to.have.been.called.with('Phrase'); 


  }); 

  it.skip('should give us a value when we spin the wheel', () => {

    let result = game.spinWheel(); 

    expect(result).toEqual(700); 
    expect(domUpdates.displayWheelValue).to.have.been.called(1); 
    expect(domUpdates.dislayWheelValue).to.have.been.called.with(700); 
  }); 

  it.skip('should let the player buy a vowel', () => {
    game.buyAVowel()


  }); 

  it.skip('should update the players round score if they guess a correct letter', () => {
    
  }); 

  it('should end the players turn if they guess a letter that is not in our puzzle', () => {

  }); 

  it('should end a players turn if their spin value is "LOSE A TURN"', () => {

  }); 

  it('should end a players turn if their spin value is "BANKRUPTCY"', () => {

  }); 

  it('should update the players total score if they solve the puzzle', () => {

  }); 

  it('should get a new wheel and puzzle as we advance through rounds', () => {

  }); 

  it('should end the game if a player quits the game', () => {

  }); 

})