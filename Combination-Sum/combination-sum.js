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
console.log(combinationSum([1], 1)); // Output [[1]]
console.log(combinationSum([1], 2)); // Output [[1, 1]]
console.log(combinationSum([1, 2], 3)); // Output [[1, 1, 1], [1, 2], [2, 1]]
console.log(combinationSum([1, 2], 4)); // Output [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2]]
console.log(combinationSum([1, 2, 3], 4)); // Output [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 3], [2, 1, 1], [2, 2], [3, 1]]
console.log(combinationSum([1, 2, 3], 5)); // Output [[1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 3], [1, 2, 2], [1, 2, 1], [1, 3, 1], [2, 1, 1, 1], [2, 1, 2], [2, 2, 1], [2, 3], [3, 1, 1], [3, 2]]
console.log(combinationSum([1, 2, 3], 6)); // Output [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 2], [1, 1, 1, 3], [1, 1, 2, 2], [1, 1, 2, 1], [1, 1, 3, 1], [1, 2, 1, 1, 1], [1, 2, 1, 2], [1, 2, 2, 1], [1, 2, 3], [1, 3, 1, 1], [1, 3, 2], [2, 1, 1, 1, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 1, 3], [2, 2, 1, 1], [2, 2, 2], [2, 3, 1], [3, 1, 1, 1], [3, 1, 2], [3, 2, 1], [3, 3]]
console.log(combinationSum([1, 2, 3], 7)); // Output [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 3], [1, 1, 1, 2, 2], [1, 1, 1, 3, 1], [1, 1, 2, 1, 1, 1], [1, 1, 2, 1, 2], [1, 1, 2, 2, 1], [1, 1, 2, 3], [1, 1, 3, 1, 1], [1, 1, 3, 2], [1, 2, 1, 1, 1, 1], [1, 2, 1, 1, 2], [1, 2, 1, 2, 1], [1, 2, 1, 3], [1, 2, 2, 1, 1], [1, 2, 2, 2], [1, 2, 3, 1], [1, 3, 1, 1, 1], [1, 3, 1, 2], [1, 3, 2, 1], [1, 3, 3], [2, 1, 1, 1, 1, 1], [2, 1, 1, 1, 2], [2, 1, 1, 2, 1], [2, 1, 1, 3], [2, 1, 2, 1, 1], [2, 1, 2, 2], [2, 1, 3, 1], [2, 2, 1, 1, 1], [2, 2, 1, 2], [2, 2, 2, 1], [2, 2, 3], [2, 3, 1, 1], [2,
