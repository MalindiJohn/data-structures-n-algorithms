/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = max;
        max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(nums[i], temp * nums[i], min * nums[i]);
        result = Math.max(result, max);
    }

    return result;
    
};

// testing the function
console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0
console.log(maxProduct([-2])); // -2
console.log(maxProduct([2])); // 2
console.log(maxProduct([0])); // 0
console.log(maxProduct([0, 0])); // 0
console.log(maxProduct([0, 0, 0])); // 0
console.log(maxProduct([0, 0, 0, 0])); // 0
console.log(maxProduct([0, 0, 0, 0, 0])); // 0