/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

/*
======== findNRooksSolution =======

*/


window.findNRooksSolution = function(n) {
  var solution = new Board({n : n});
  // var rows = solution.rows() 
  var numOfRooks = n;

  for (var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      solution.rows()[i][j] = 1; // add rook and reduce rook count
      numOfRooks--

      if(solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)){ // if there is conflict at the row or column, remove the rook
        solution.rows()[i][j] = 0;
        numOfRooks++
      }
    }
  }

  if(numOfRooks === 0){
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution.rows();
  }
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n : n});
  // var rows = solution.rows() 
  var numOfQueens = n;

  for (var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      solution.rows()[i][j] = 1; // add rook and reduce rook count
      numOfQueens--

      if(solution.hasRowConflictAt(i) || solution.hasColConflictAt(j) || solution.hasMajorDiagonalConflictAt(j) || solution.hasMinorDiagonalConflictAt(j)){ // if there is conflict at the row or column, remove the rook
        solution.rows()[i][j] = 0;
        numOfQueens++
      }
    }
  }

  if(numOfQueens === 0){
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    return solution.rows();
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
