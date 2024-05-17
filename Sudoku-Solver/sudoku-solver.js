/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === num) {
                return false;
            }
        }
        return true;
    }
    
    function solve() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(i, j, num.toString())) {
                            board[i][j] = num.toString();
                            if (solve()) {
                                return true;
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    solve();
};

// Testing the function
let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
solveSudoku(board);
console.log(board);
// Output [
//     ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
//     ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
//     ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
//     ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
//     ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
//     ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
//     ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
//     ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
//     ['3', '4', '5', '2', '8', '6', '1', '7', '9']
// ]
