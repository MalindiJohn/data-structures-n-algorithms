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