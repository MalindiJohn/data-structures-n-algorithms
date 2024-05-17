/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    
    return nums.length;

};

// Testing the function
console.log(searchInsert([1, 3, 5, 6], 5)); // Output 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output 4