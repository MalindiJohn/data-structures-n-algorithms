/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length;
    let sum = n * (n + 1) / 2;
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }
    return sum;
    
};

// testing the function
let nums = [3, 0, 1];
console.log(missingNumber(nums)); // 2

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums)); // 8

nums = [0];
console.log(missingNumber(nums)); // 1

nums = [1];
console.log(missingNumber(nums)); // 0

nums = [0, 1];
console.log(missingNumber(nums)); // 2

nums = [1, 2];
console.log(missingNumber(nums)); // 0

nums = [0, 2];
console.log(missingNumber(nums)); // 1

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(missingNumber(nums)); // 11

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
console.log(missingNumber(nums)); // 10

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(missingNumber(nums)); // 12

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
console.log(missingNumber(nums)); // 11

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13];
console.log(missingNumber(nums)); // 11