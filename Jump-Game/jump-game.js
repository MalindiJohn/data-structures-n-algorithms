/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let n = nums.length;
    let maxReach = 0;

    for (let i = 0; i < n; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
    
};