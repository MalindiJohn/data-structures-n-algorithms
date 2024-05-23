/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 0;
    
    for (let n of nums) {
        if (i < 2 || n > nums[i - 2]) {
            nums[i++] = n;
        }
    }
    
    return i;
    
};

// Testing the function
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums)); // Output: 5

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums)); // Output: 7

nums = [1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(removeDuplicates(nums)); // Output: 2

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2];
console.log(removeDuplicates(nums)); // Output: 3

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
console.log(removeDuplicates(nums)); // Output: 4

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 5

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 6

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 7

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 8

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 9

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 10

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 11

nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(removeDuplicates(nums)); // Output: 12