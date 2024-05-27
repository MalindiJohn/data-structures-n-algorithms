/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    if (board.length === 0) {
        return;
    }

    let rows = board.length;
    let cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') {
            dfs(board, i, 0);
        }
        if (board[i][cols - 1] === 'O') {
            dfs(board, i, cols - 1);
        }
    }

    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') {
            dfs(board, 0, j);
        }
        if (board[rows - 1][j] === 'O') {
            dfs(board, rows - 1, j);
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === '1') {
                board[i][j] = 'O';
            }
        }
    }
    
};