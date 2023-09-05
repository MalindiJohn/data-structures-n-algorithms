/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {

    const n = nums.length;
    const res = new Array(n).fill(0);
    const sorted = [];
    
    for (let i = n - 1; i >= 0; i--) {
        const index = binarySearch(sorted, nums[i]);
        res[i] = index;
        sorted.splice(index, 0, nums[i]);
    }
    
    return res;
    
};