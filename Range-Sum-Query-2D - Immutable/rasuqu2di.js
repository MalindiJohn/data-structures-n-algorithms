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
    
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */