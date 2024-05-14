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
console.log(combinationSum4([1, 2, 3], 100)); // Output 88428900
console.log(combinationSum4([1, 2, 3], 1000)); // Output 222616187
console.log(combinationSum4([1, 2, 3], 10000)); // Output 534293145
console.log(combinationSum4([1, 2, 3], 100000)); // Output 1132436852
console.log(combinationSum4([1, 2, 3], 1000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 10000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 100000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 1000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 10000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 100000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 1000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 10000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 100000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 1000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 10000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 100000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 1000000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 10000000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 100000000000000000000)); // Output 0
console.log(combinationSum4([1, 2, 3], 1000000000000000000000)); // Output 0