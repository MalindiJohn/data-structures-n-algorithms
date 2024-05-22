function generateMatrix(n: number): number[][] {

    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    let num = 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = num++;
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = num++;
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            matrix[rowEnd][i] = num++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = num++;
        }
        colStart++;
    }

    return matrix;

};