/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let n = nums.length;
    let jumps = 0;
    let currEnd = 0;
    let currFarthest = 0;

    for (let i = 0; i < n - 1; i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);

        if (i === currEnd) {
            jumps++;
            currEnd = currFarthest;
        }
    }

    return jumps;
    
};

// Testing the function
console.log(jump([2, 3, 1, 1, 4])); // Output 2
console.log(jump([2, 3, 0, 1, 4])); // Output 2
console.log(jump([1])); // Output 0
console.log(jump([1, 2])); // Output 1
console.log(jump([1, 1, 1, 1])); // Output 3
console.log(jump([1, 1, 1, 1, 1])); // Output 4
console.log(jump([1, 1, 1, 1, 1, 1])); // Output 5
console.log(jump([1, 1, 1, 1, 1, 1, 1])); // Output 6
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1])); // Output 7
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1, 1])); // Output 8
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // Output 9
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // Output 10