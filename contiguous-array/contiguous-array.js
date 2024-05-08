/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    let map = new Map();
    let max = 0;
    let count = 0;
    
    map.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        if (map.has(count)) {
            max = Math.max(max, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    
    return max;
    
};