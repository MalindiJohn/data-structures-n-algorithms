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