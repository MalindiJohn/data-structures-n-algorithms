/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {

    const n = nums.length;
    if (n === 0) return 0;
    
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            for (let k = i; k <= j; k++) {
                let left = i === 0 ? 1 : nums[i - 1];
                let right = j === n - 1 ? 1 : nums[j + 1];
                let before = i === k ? 0 : dp[i][k - 1];
                let after = k === j ? 0 : dp[k + 1][j];
                dp[i][j] = Math.max(dp[i][j], before + left * nums[k] * right + after);
            }
        }
    }
    
    return dp[0][n - 1];
    
};

// testing the function
console.log(maxCoins([3,1,5,8])); // 167
console.log(maxCoins([1,5])); // 10
console.log(maxCoins([1])); // 1