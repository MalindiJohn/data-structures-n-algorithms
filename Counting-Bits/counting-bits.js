/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    const dp = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    
    return dp;
    
};

// Testing the function
console.log(countBits(2)); // Output: [0,1,1]
console.log(countBits(5)); // Output: [0,1,1,2,1,2]
console.log(countBits(10)); // Output: [0,1,1,2,1,2,2,3,1,2,2]