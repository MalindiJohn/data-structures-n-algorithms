/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    return quickSelect(nums, 0, nums.length - 1, k);
    
};

function quickSelect(nums, left, right, k) {

    if (left === right) {
        return nums[left];
    }
    
    let pivotIndex = left + Math.floor(Math.random() * (right - left));
    pivotIndex = partition(nums, left, right, pivotIndex);
    
    if (k === pivotIndex + 1) {
        return nums[pivotIndex];
    } else if (k < pivotIndex + 1) {
        return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k);
    }
    
}