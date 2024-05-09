/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    let rows = board.length;
    let cols = board[0].length;
    
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = 0;
            for (let [dx, dy] of directions) {
                let x = i + dx;
                let y = j + dy;
                if (x >= 0 && x < rows && y >= 0 && y < cols && (board[x][y] === 1 || board[x][y] === 2)) {
                    liveNeighbors++;
                }
            }
            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = 2;
            } else if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 3;
            }
        }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] %= 2;
        }
    }

    
    
};