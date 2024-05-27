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

function dfs(board, i, j) {

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'O') {
        return;
    }

    board[i][j] = '1';

    dfs(board, i - 1, j);
    dfs(board, i + 1, j);
    dfs(board, i, j - 1);
    dfs(board, i, j + 1);

}

// testing the function
let board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];
solve(board);
console.log(board);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'X', 'X']
// ]

let board1 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X']
];
solve(board1);
console.log(board1);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'O', 'X']
// ]

let board2 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'O', 'X']
];
solve(board2);
console.log(board2);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'X', 'O', 'X']
// ]

let board3 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'O', 'O']
];
solve(board3);
console.log(board3);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'X', 'O', 'O']
// ]

let board4 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'O']
];
solve(board4);
console.log(board4);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'O', 'O']
// ]

let board5 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'O']
];
solve(board5);
console.log(board5);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'O', 'O']
// ]

let board6 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'O', 'O']
];
solve(board6);
console.log(board6);
// [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X']
// ]