/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    let result = [];
    let board = Array.from({length: n}, () => Array(n).fill('.'));
    
    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
    
};

// Testing the function
console.log(solveNQueens(4));
// Output [
//     ['.Q..','...Q','Q...','..Q.'],
//     ['..Q.','Q...','...Q','.Q..']
// ]
console.log(solveNQueens(1)); // Output [['Q']]