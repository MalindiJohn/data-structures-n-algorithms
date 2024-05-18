/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let result = [];
    
    function backtrack(start, target, path) {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }
    
    backtrack(0, target, []);
    return result;
    
};

// Testing the function
console.log(combinationSum([2, 3, 6, 7], 7)); // Output [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // Output [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // Output []