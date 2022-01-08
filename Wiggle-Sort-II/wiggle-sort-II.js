/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {

    let n = nums.length;
    let mid = Math.floor((n + 1) / 2);
    let sorted = nums.slice().sort((a, b) => a - b);

    for (let i = 0, j = mid, k = n - 1; i < n; i++) {
        nums[i] = i % 2 === 0 ? sorted[--j] : sorted[k--];
    }
    
};