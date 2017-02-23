const readline = require('readline-sync');
const Player = require('./lib/player');
const Game = require('./lib/game');

var nameOne = readline.question('Enter name for Player 1:\n>> ');
var nameTwo = readline.question('Enter name for Player 2:\n>> ');
var game = new Game();
var board = game.getBoard();
var maxVisit = game.getMaxVisit();
var visited = 0;
var players = [
  new Player(nameOne, 'X'),
  new Player(nameTwo, 'O')
];

for(var n=0; n<maxVisit; n++){
  game.printBoard(board);
  var player = players[n%2];
  var message = player.getName()
                + ", choose a box to place an '"
                + player.getMarker() + "' into:\n>> ";

  var choosen = Number(readline.question(message).trim());
  // check NaN and other invalid input
  if(choosen == NaN || choosen < 0 || choosen >9){
    game.exit('Invalid Input');
    console.log('choosen', choosen);
    console.log(board)
  }
  if(board[choosen-1] != choosen)
    game.exit('Already visited this path');

  board[choosen-1] = player.getMarker();
  if(game.didWin(board)){
    game.printBoard(board);
    console.log('Congratulations '+player.getName()+'! You have won.');
    break;
  }

  if(n == maxVisit - 1){
    game.printBoard(board);
    game.exit('Match is a draw');
  }
}
