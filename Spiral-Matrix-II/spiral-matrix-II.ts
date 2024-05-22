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

// testing the function
console.log(generateMatrix(3)); // expected output: [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)); // expected output: [[1]]
console.log(generateMatrix(4)); // expected output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]