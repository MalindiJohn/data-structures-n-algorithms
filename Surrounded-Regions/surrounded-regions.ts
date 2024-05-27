/**
Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {

    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = 'E';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    for (let i = 0; i < board.length; i++) {
        dfs(i, 0);
        dfs(i, board[0].length - 1);
    }

    for (let j = 0; j < board[0].length; j++) {
        dfs(0, j);
        dfs(board.length - 1, j);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = board[i][j] === 'E' ? 'O' : 'X';
        }
    }

};