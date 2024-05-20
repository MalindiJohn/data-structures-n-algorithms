/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let n = nums.length;
    let jumps = 0;
    let currEnd = 0;
    let currFarthest = 0;

    for (let i = 0; i < n - 1; i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);

        if (i === currEnd) {
            jumps++;
            currEnd = currFarthest;
        }
    }

    return jumps;
    
};