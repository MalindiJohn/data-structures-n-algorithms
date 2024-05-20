/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    let result = [];
    let n = nums.length;
    
    function backtrack(start) {
        if (start === n) {
            result.push([...nums]);
            return;
        }
        let used = new Set();
        for (let i = start; i < n; i++) {
            if (used.has(nums[i])) {
                continue;
            }
            used.add(nums[i]);
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    backtrack(0);
    return result;
    
};

// Testing the function
console.log(permuteUnique([1, 1, 2]));
// Output [
//     [1, 1, 2],
//     [1, 2, 1],
//     [2, 1, 1]
// ]
console.log(permuteUnique([1, 2, 3]));
// Output [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 2, 1],
//     [3, 1, 2]
// ]