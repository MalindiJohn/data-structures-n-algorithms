function maxProfit(prices: number[]): number {

    let n = prices.length;
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[1][0] = Math.max(0, dp[0][1] + prices[1]);
    dp[1][1] = Math.max(dp[0][1], -prices[1]);
    for (let i = 2; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
    return dp[n - 1][0];

};

// testing the function
console.log(maxProfit([1, 2, 3, 0, 2])); // 3
console.log(maxProfit([1])); // 0
console.log(maxProfit([1, 2])); // 1