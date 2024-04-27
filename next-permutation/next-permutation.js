/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let i = nums.length - 2;
    
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    
    if (i >= 0) {
        let j = nums.length - 1;
        
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let start = i + 1;
    let end = nums.length - 1;
    
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
    
    return nums;
};

console.log(nextPermutation([1,2,3])); // [1,3,2]
console.log(nextPermutation([3,2,1])); // [1,2,3] - this test case failed
console.log(nextPermutation([1,1,5])); // [1,5,1]