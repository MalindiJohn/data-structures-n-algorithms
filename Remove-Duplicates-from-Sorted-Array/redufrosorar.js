/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;

};

// Testing the function
console.log(removeDuplicates([1, 1, 2])); // Output 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output 5
console.log(removeDuplicates([1, 1, 1])); // Output 1