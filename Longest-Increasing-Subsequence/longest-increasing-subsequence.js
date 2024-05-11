/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    const dp = new Array(nums.length).fill(1);
    let max = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    
    return max;
    
};

// Testing the function
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Output: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Output: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Output: 1
console.log(lengthOfLIS([4,10,4,3,8,9])); // Output: 3
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6])); // Output: 6
console.log(lengthOfLIS([1])); // Output: 1
console.log(lengthOfLIS([1,2])); // Output: 2
console.log(lengthOfLIS([2,1])); // Output: 1
console.log(lengthOfLIS([1,2,3])); // Output: 3
console.log(lengthOfLIS([3,2,1])); // Output: 1
console.log(lengthOfLIS([1,3,2])); // Output: 2
console.log(lengthOfLIS([1,2,1])); // Output: 2
console.log(lengthOfLIS([1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1,1,1,1])); // Output: 1
console.log(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])); // Output: 1
