function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) break;
        dp[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) break;
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];

};

// testing the function
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]])); // expected output: 1
console.log(uniquePathsWithObstacles([[1, 0]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0], [0, 0]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 0]])); // expected output: 6
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 1], [0, 0, 0]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 1], [0, 1, 0]])); // expected output: 1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 0]])); // expected output: 3
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 0]])); // expected output: 3
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 1]])); // expected output: 1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 0]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 1]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 0]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 0]])); // expected output: 6
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 1]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 0]])); // expected output: 3
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 0]])); // expected output: 3
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 1]])); // expected output: 1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 0]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 1]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 0, 0]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [1, 1, 1]])); // expected output: 0
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 0]])); // expected output: 6
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 0, 1]])); // expected output: 2
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 0]])); // expected output: 3