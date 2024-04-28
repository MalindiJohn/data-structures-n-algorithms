/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let result = [];
    let n = nums.length;
    let backtrack = (first) => {
        if (first === n) {
            result.push([...nums]);
        }
        for (let i = first; i < n; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1);
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }
    backtrack(0);
    return result;
    
};

console.log(permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
console.log(permute([0,1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]