/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        let col = new Set();
        let box = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.' && row.has(board[i][j])) {
                return false;
            }
            if (board[j][i] !== '.' && col.has(board[j][i])) {
                return false;
            }
            let rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let colIndex = 3 * (i % 3) + j % 3;
            if (board[rowIndex][colIndex] !== '.' && box.has(board[rowIndex][colIndex])) {
                return false;
            }
            row.add(board[i][j]);
            col.add(board[j][i]);
            box.add(board[rowIndex][colIndex]);
        }
    }
    
    return true;

};

// Testing the function
console.log(isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // Output true
console.log(isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // Output false