/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    if (nums.length === 1) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
    
};