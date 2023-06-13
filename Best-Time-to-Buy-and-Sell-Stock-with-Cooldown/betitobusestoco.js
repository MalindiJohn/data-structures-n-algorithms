/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const n = prices.length;
    if (n < 2) return 0;
    
    const dp = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let profit = prices[i] - prices[j];
            if (j >= 2) {
                profit += dp[j - 2];
            }
            dp[i] = Math.max(dp[i], profit);
        }
        dp[i] = Math.max(dp[i], dp[i - 1]);
    }
    
    return dp[n - 1];
    
};

// testing the function
console.log(maxProfit([1,2,3,0,2])); // 3
console.log(maxProfit([1])); // 0
console.log(maxProfit([1,2])); // 1
console.log(maxProfit([1,2,3])); // 2
console.log(maxProfit([1,2,3,4])); // 3
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,1,5,3,6,4])); // 7
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1,3,2,8,4,9])); // 8
console.log(maxProfit([3,3,5,0,0,3,1,4])); // 6
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0])); // 13
console.log(maxProfit([1,3,2,8,4,9])); // 8
console.log(maxProfit([1,3,7,5,10,3])); // 9
console.log(maxProfit([1,2,3,4,5])); // 4