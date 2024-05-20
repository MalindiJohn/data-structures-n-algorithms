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

// Testing the function
console.log(canJump([2, 3, 1, 1, 4])); // Output true
console.log(canJump([3, 2, 1, 0, 4])); // Output false
console.log(canJump([0])); // Output true