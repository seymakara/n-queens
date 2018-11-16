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
  var numOfRooks = n;

  for (var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      solution.rows()[i][j] = 1; // add rook and reduce rook count
      numOfRooks--

      if(solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)){ // if there is conflict at the row or column, remove the rook
        solution.rows()[i][j] = 0;
        numOfRooks++
      }

      if(numOfRooks === 0){
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
        return solution.rows();
      }
    }
  }

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n : n});
  var usedKeys = {}

  for (var i = 0; i < n; i++){ // generate index of columns to check if column has been used in the current iteration 
    usedKeys[i] = false;
  }

  var searchRookSolution = function(row){
    
    if (row === n ) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++){ 
      if (usedKeys[i]){ // if the column is used we skip that column and continue with the next.
        continue;
      }
      board.rows()[row][i] = 1;
      usedKeys[i] = true;  
      if(!board.hasAnyRooksConflicts()){
        searchRookSolution(row + 1); 
      }
      board.rows()[row][i] = 0;
      usedKeys[i] = false;      
    }
  }
 
  searchRookSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solutionCount = 0; //fixme
  var board = new Board({n : n});
  // var usedKeys = {}

  // for (var i = 0; i < n; i++){ // generate index of columns to check if column has been used in the current iteration 
  //   usedKeys[i] = false;
  // }

  var searchQueenSolution = function(row){
    if (row === n ) {
      return board.rows();
    }
    for (var i = 0; i < n; i++){ 
      // if (usedKeys[i]){ // if the column is used we skip that column and continue with the next.
      //   continue;
      // }
      board.rows()[row][i] = 1;
      // usedKeys[i] = true;  
      if(!board.hasAnyQueensConflicts()){
        return searchQueenSolution(row + 1); 
        board.rows()[row][i] = 0;
      }
      // usedKeys[i] = false;      
    }
  }
  searchQueenSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return board.rows();

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n : n});
  var usedKeys = {}

  for (var i = 0; i < n; i++){ // generate index of columns to check if column has been used in the current iteration 
    usedKeys[i] = false;
  }

  var searchQueenSolution = function(row){
    
    if (row === n ) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++){ 
      if (usedKeys[i]){ // if the column is used we skip that column and continue with the next.
        continue;
      }
      board.rows()[row][i] = 1;
      usedKeys[i] = true;  
      if(!board.hasAnyQueenConflictsOn(row, i)){
        searchQueenSolution(row + 1); 
      }
      board.rows()[row][i] = 0;
      usedKeys[i] = false;      
    }
  }
 
  searchQueenSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
