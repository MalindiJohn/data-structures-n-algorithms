function maxCoins(nums: number[]): number {

    let n = nums.length;
    if (n === 0) return 0;

    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let len = 1; len <= n; len++) {
        for (let start = 0; start <= n - len; start++) {
            let end = start + len - 1;
            for (let i = start; i <= end; i++) {
                let coins = nums[i] * getValue(nums, start - 1) * getValue(nums, end + 1);
                coins += i !== start ? dp[start][i - 1] : 0;
                coins += i !== end ? dp[i + 1][end] : 0;
                dp[start][end] = Math.max(dp[start][end], coins);
            }
        }
    }

    return dp[0][n - 1];

};

function getValue(nums: number[], i: number): number {
    if (i < 0 || i >= nums.length) return 1;
    return nums[i];
}

// testing the function
console.log(maxCoins([3, 1, 5, 8])); // 167
console.log(maxCoins([1, 5])); // 10
console.log(maxCoins([1])); // 1
console.log(maxCoins([1, 2, 3])); // 12
console.log(maxCoins([3, 1, 5, 8])); // 167
console.log(maxCoins([1, 5, 8, 1])); // 65
console.log(maxCoins([1, 5, 8, 1, 1])); // 70
console.log(maxCoins([1, 5, 8, 1, 1, 1])); // 75
console.log(maxCoins([1, 5, 8, 1, 1, 1, 1])); // 80
console.log(maxCoins([1, 5, 8, 1, 1, 1, 1, 1])); // 85
console.log(maxCoins([1, 5, 8, 1, 1, 1, 1, 1, 1])); // 90