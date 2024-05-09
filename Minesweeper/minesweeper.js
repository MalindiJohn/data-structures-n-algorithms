/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {

    let row = click[0];
    let col = click[1];
    
    if (board[row][col] === 'M') {
        board[row][col] = 'X';
    } else {
        dfs(board, row, col);
    }
    
    return board;
    
};

function dfs(board, row, col) {
    
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== 'E') {
        return;
    }
    
    let mines = countMines(board, row, col);
    
    if (mines === 0) {
        board[row][col] = 'B';
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                dfs(board, row + i, col + j);
            }
        }
    } else {
        board[row][col] = mines.toString();
    }
    
}

function countMines(board, row, col) {
    
    let count = 0;
    
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (row + i >= 0 && row + i < board.length && col + j >= 0 && col + j < board[0].length && board[row + i][col + j] === 'M') {
                count++;
            }
        }
    }
    
    return count;
    
}

// testing the function
console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],['E', 'E', 'M', 'E', 'E'],['E', 'E', 'E', 'E', 'E'],['E', 'E', 'E', 'E', 'E']], [3, 0]));
// expected [['B', '1', 'E', '1', 'B'],['B', '1', 'M', '1', 'B'],['B', '1', '1', '1', 'B'],['B', 'B', 'B', 'B', 'B']]
console.log(updateBoard([['B', '1', 'E', '1', 'B'],['B', '1', 'M', '1', 'B'],['B', '1', '1', '1', 'B'],['B', 'B', 'B', 'B', 'B']], [1, 2]));





