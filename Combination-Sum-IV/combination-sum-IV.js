/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {

    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }
    return dp[target];
    
};

// Testing the function
console.log(combinationSum4([1, 2, 3], 4)); // Output 7
console.log(combinationSum4([9], 3)); // Output 0
console.log(combinationSum4([1, 2, 3], 32)); // Output 181997601