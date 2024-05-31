function calculateMinimumHP(dungeon: number[][]): number {

    let m = dungeon.length;
    let n = dungeon[0].length;

    let dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

    dp[m][n - 1] = 1;
    dp[m - 1][n] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let min = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
            dp[i][j] = Math.max(1, min);
        }
    }

    return dp[0][0];

};

// testing the function
console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])); // 7
console.log(calculateMinimumHP([[0]])); // 1
console.log(calculateMinimumHP([[100]])); // 1
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, 0]])); // 1
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, 1]])); // 1
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -1]])); // 2
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -2]])); // 3
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -3]])); // 4
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -4]])); // 5
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -5]])); // 6
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -6]])); // 7
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -7]])); // 8
console.log(calculateMinimumHP([[0, 0, 0], [0, 0, 0], [0, 0, -8]])); // 9