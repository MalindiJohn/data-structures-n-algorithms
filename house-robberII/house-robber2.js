/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    return Math.max(robHouses(nums.slice(0, nums.length - 1)), robHouses(nums.slice(1)));
    
};