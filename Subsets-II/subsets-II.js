/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b);
    let result = [];
    let current = [];

    function backtrack(start) {
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            current.push(nums[i]);
            backtrack(i + 1);
            current.pop();
        }
    }

    backtrack(0);
    return result;
    
};

// testing the function
console.log(subsetsWithDup([1,2,2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]
console.log(subsetsWithDup([1,2,3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]