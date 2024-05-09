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



