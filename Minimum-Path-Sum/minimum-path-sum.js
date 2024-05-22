/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    dp[0][0] = grid[0][0];
    
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    
    return dp[m - 1][n - 1];
    
};

// Testing the function
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
// Output 7
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));
// Output 12
console.log(minPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Output 21