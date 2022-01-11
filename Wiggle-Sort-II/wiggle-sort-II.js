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

// testing the function
const nums = [1, 5, 1, 1, 6, 4];
wiggleSort(nums);
console.log(nums); // [1, 6, 1, 5, 1, 4]

const nums2 = [1, 3, 2, 2, 3, 1];
wiggleSort(nums2);
console.log(nums2); // [2, 3, 1, 3, 1, 2]