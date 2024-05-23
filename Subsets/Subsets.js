/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let result = [];
    
    function backtrack(start, path) {
        result.push([...path]);
        
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    
    backtrack(0, []);
    
    return result;
    
};

// Testing the function
let nums = [1, 2, 3];
console.log(subsets(nums)); // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

nums = [0];
console.log(subsets(nums)); // Output: [[],[0]]

nums = [1, 2];
console.log(subsets(nums)); // Output: [[],[1],[1,2],[2]]