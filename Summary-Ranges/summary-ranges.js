/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let result = [];
    let i = 0;
    while (i < nums.length) {
        let start = i;
        i++;
        while (i < nums.length && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        let end = i - 1;
        if (start === end) {
            result.push(nums[start].toString());
        } else {
            result.push(nums[start] + '->' + nums[end]);
        }
    }
    return result;
    
};

// testing the function
let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums)); // ["0->2","4->5","7"]

nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums)); // ["0","2->4","6","8->9"]

nums = [];
console.log(summaryRanges(nums)); // []

nums = [-1];
console.log(summaryRanges(nums)); // ["-1"]

nums = [0];
console.log(summaryRanges(nums)); // ["0"]

nums = [0, 1, 2, 3, 4, 5];
console.log(summaryRanges(nums)); // ["0->5"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9];
console.log(summaryRanges(nums)); // ["0->5","7->9"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(summaryRanges(nums)); // ["0->5","7->10"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12];
console.log(summaryRanges(nums)); // ["0->5","7->10","12"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13];
console.log(summaryRanges(nums)); // ["0->5","7->10","12->13"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14];
console.log(summaryRanges(nums)); // ["0->5","7->10","12->14"]

nums = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15];
console.log(summaryRanges(nums)); // ["0->5","7->10","12->15"]