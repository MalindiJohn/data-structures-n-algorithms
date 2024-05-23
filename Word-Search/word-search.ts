function exist(board: string[][], word: string): boolean {

    function dfs(row: number, col: number, index: number): boolean {
        if (index === word.length) {
            return true;
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) {
            return false;
        }

        let temp = board[row][col];
        board[row][col] = '#';

        if (dfs(row + 1, col, index + 1) || dfs(row - 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1)) {
            return true;
        }

        board[row][col] = temp;

        return false;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;

};

// testing the function
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')); // expected true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE')); // expected true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB')); // expected false