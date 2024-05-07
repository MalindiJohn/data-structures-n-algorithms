/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    return quickSelect(nums, 0, nums.length - 1, k);
    
};