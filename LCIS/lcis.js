/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

    if (nums.length === 0) return 0;
    
    let max = 1;
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] > nums[i - 1]) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
    
    return max;
    
};

console.log(findLengthOfLCIS([1,3,5,4,7])); // 3
console.log(findLengthOfLCIS([2,2,2,2,2])); // 1