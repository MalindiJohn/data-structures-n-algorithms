/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            break;
        }
        dp[i][0] = 1;
    }
    
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            break;
        }
        dp[0][i] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
    
};

// Testing the function
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));
// Output 1
console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]));
// Output 0
console.log(uniquePathsWithObstacles([[0, 0], [0, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
// Output 6
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 1]]));
// Output 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 1], [0, 0, 0]]));
// Output 1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [1, 0, 0], [0, 0, 0]]));
// Output 2
console.log(uniquePathsWithObstacles([[0, 0, 1], [0, 0, 0], [0, 0, 0]]));
// Output 3
console.log(uniquePathsWithObstacles([[0, 1, 0], [0, 0, 0], [0, 0, 0]]));
// Output 3
console.log(uniquePathsWithObstacles([[1, 0, 0], [0, 0, 0], [0, 0, 0]]));
// Output 0
console.log(uniquePathsWithObstacles([[1, 0, 0], [0, 0, 0], [0, 0, 1]]));
// Output 0
console.log(uniquePathsWithObstacles([[1, 0, 0], [0, 0, 0], [0, 1, 0]]));
// Output 0
console.log(uniquePathsWithObstacles([[1, 0, 0], [0, 0, 0], [1, 0, 0]]));
// Output 0