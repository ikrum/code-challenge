module.exports = function () {
  /*
   * State of the board
   *
   * @method getBoard
   * @return {Array}
   */
  this.getBoard = function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };
  /*
   * Size of board and maximum path to visit
   *
   * @method getMaxVisit
   * @return {Number}
   */
  this.getMaxVisit = function () {
    return this.getBoard().length;
  };

  /*
   * In which condition someone will became winner
   *
   * @method getWinState
   * @return {Array}
   */
  this.getWinCondition = function () {
    return [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
  };

  /*
   * Check if someone Won or not
   *
   * @method didWin
   * @return {Boolean}
   */
  this.didWin = function (board) {
    var winCon = this.getWinCondition();

    for (var i = 0; i < winCon.length; i++) {
      var first  = board[winCon[i][0] - 1];
      var second = board[winCon[i][1] - 1];
      var third  = board[winCon[i][2] - 1];

      if (first === second && second === third)
        return true;
    }

    return false;
  };

  /*
   * Print the current board state
   *
   * @method printBoard
   */
  this.printBoard = function (board) {
    console.log('');
    var pos = 0;
    for (var i = 1; i <= this.getMaxVisit() / 3; i++) {
      var line = board[pos++] + ' | ' + board[pos++] + ' | ' + board[pos++];
      console.log(line);

      if (pos < board.length)
        console.log('­­­­­­­­­­­');
    }

    console.log('');
  };

  /*
   * Printing a message and exit the program
   *
   * @method exit
   * @param   {String} msg     - message to print
   */
  this.exit = function (msg) {
    if (msg)
      console.log(msg);
    process.exit(1);
  };
};
