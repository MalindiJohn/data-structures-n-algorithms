/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let m = board.length;
    let n = board[0].length;
    
    function backtrack(i, j, k) {
        if (k === word.length) {
            return true;
        }
        
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
            return false;
        }
        
        let temp = board[i][j];
        board[i][j] = '#';
        
        let found = backtrack(i + 1, j, k + 1) || backtrack(i - 1, j, k + 1) || backtrack(i, j + 1, k + 1) || backtrack(i, j - 1, k + 1);
        
        board[i][j] = temp;
        
        return found;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
    
};

// Testing the function
let board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
let word = 'ABCCED';
console.log(exist(board, word)); // Output: true

word = 'SEE';
console.log(exist(board, word)); // Output: true