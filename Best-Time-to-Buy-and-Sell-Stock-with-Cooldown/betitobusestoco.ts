function maxProfit(prices: number[]): number {

    let n = prices.length;
    if (n < 2) return 0; // Add this line to handle cases where prices.length is less than 2

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
console.log(maxProfit([2, 1])); // 0
console.log(maxProfit([1, 2, 3, 0, 2])); // 3
console.log(maxProfit([1, 2, 4])); // 3
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 3, 2, 8, 4, 9])); // 8
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0