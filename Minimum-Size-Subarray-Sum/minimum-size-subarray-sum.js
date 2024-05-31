/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Number.MAX_VALUE;
    
    while (right < nums.length) {
        sum += nums[right];
        right++;
        
        while (sum >= target) {
            min = Math.min(min, right - left);
            sum -= nums[left];
            left++;
        }
    }
    
    return min === Number.MAX_VALUE ? 0 : min;
    
};