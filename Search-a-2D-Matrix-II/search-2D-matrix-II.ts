function searchMatrix(matrix: number[][], target: number): boolean {

    let row: number = 0;
    let col: number = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;

};