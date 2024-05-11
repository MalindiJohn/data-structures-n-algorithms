/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {

    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    this.dp = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            this.dp[r][c] = matrix[r][c];
            if (r > 0) {
                this.dp[r][c] += this.dp[r - 1][c];
            }
            if (c > 0) {
                this.dp[r][c] += this.dp[r][c - 1];
            }
            if (r > 0 && c > 0) {
                this.dp[r][c] -= this.dp[r - 1][c - 1];
            }
        }
    }
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
    let sum = this.dp[row2][col2];
    if (row1 > 0) {
        sum -= this.dp[row1 - 1][col2];
    }
    if (col1 > 0) {
        sum -= this.dp[row2][col1 - 1];
    }
    if (row1 > 0 && col1 > 0) {
        sum += this.dp[row1 - 1][col1 - 1];
    }
    
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// Testing the function
const numMatrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11