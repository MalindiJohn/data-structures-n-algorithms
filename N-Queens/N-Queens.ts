function solveNQueens(n: number): string[][] {

    const result: string[][] = [];
    const board: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
    const cols = new Set<number>();
    const diag1 = new Set<number>();
    const diag2 = new Set<number>();

    const dfs = (row: number): void => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) continue;
            cols.add(col);
            diag1.add(row + col);
            diag2.add(row - col);
            board[row][col] = 'Q';
            dfs(row + 1);
            cols.delete(col);
            diag1.delete(row + col);
            diag2.delete(row - col);
            board[row][col] = '.';
        }
    };

    dfs(0);
    return result;

};