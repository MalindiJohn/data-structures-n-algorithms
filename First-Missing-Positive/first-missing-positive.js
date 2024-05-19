/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    let n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
    
};

// Testing the function
console.log(firstMissingPositive([1, 2, 0])); // Output 3
console.log(firstMissingPositive([3, 4, -1, 1])); // Output 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output 1