/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }

    return nums;

    
};

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([0])); // [0]