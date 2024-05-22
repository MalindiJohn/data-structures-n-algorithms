/**
Do not return anything, modify matrix in-place instead.
*/
function setZeroes(matrix: number[][]): void {

    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowHasZero = false;
    let firstColumnHasZero = false;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColumnHasZero = true;
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowHasZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }

    if (firstColumnHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

};

// testing the function
const matrix1: number[][] = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix1);
console.log(matrix1);
// expected output: [[1,0,1],[0,0,0],[1,0,1]]

const matrix2: number[][] = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix2);
console.log(matrix2);
// expected output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]