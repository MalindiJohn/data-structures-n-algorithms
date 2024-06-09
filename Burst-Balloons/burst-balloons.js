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
console.log(maxCoins([1,2])); // 4
console.log(maxCoins([1,2,3])); // 12
console.log(maxCoins([1,2,3,4])); // 30
console.log(maxCoins([1,2,3,4,5])); // 60
console.log(maxCoins([7,1,5,3,6,4])); // 758
console.log(maxCoins([7,6,4,3,1])); // 139
console.log(maxCoins([1,3,2,8,4,9])); // 444
console.log(maxCoins([3,3,5,0,0,3,1,4])); // 400
console.log(maxCoins([1,2,4,2,5,7,2,4,9,0])); // 1080