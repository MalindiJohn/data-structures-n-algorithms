/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    
    return i;

};

// Testing the function
console.log(removeElement([3, 2, 2, 3], 3)); // Output 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output 5
console.log(removeElement([1], 1)); // Output 0
console.log(removeElement([1], 2)); // Output 1
console.log(removeElement([1, 1], 1)); // Output 0
console.log(removeElement([1, 1], 2)); // Output 2
console.log(removeElement([1, 1, 1], 1)); // Output 0
console.log(removeElement([1, 1, 1], 2)); // Output 3
console.log(removeElement([1, 1, 1, 1], 1)); // Output 0
console.log(removeElement([1, 1, 1, 1], 2)); // Output 4
console.log(removeElement([1, 1, 1, 1, 1], 1)); // Output 0
console.log(removeElement([1, 1, 1, 1, 1], 2)); // Output 5