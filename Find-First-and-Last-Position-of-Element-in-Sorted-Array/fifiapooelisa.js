/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let i = mid;
            let j = mid;
            while (i >= 0 && nums[i] === target) {
                i--;
            }
            while (j < nums.length && nums[j] === target) {
                j++;
            }
            result[0] = i + 1;
            result[1] = j - 1;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
    
};