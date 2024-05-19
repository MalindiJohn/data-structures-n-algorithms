/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let result = [];
    candidates.sort((a, b) => a - b);
    
    function backtrack(start, target, path) {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path);
            path.pop();
        }
    }
    
    backtrack(0, target, []);
    return result;
    
};

// testing the function
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // Output [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // Output [[1, 2, 2], [5]]
console.log(combinationSum2([2, 3, 6, 7], 7)); // Output [[7]]
console.log(combinationSum2([2, 3, 5], 8)); // Output [[3, 5]]
console.log(combinationSum2([2], 1)); // Output []
console.log(combinationSum2([1], 1)); // Output [[1]]
console.log(combinationSum2([1], 2)); // Output []
console.log(combinationSum2([1, 2], 3)); // Output [[1, 2]]
console.log(combinationSum2([1, 2], 4)); // Output []
console.log(combinationSum2([1, 2, 3], 4)); // Output [[1, 3]]
console.log(combinationSum2([1, 2, 3], 5)); // Output [[2, 3]]
console.log(combinationSum2([1, 2, 3], 6)); // Output [[1, 2, 3]]
console.log(combinationSum2([1, 2, 3], 7)); // Output []
console.log(combinationSum2([1, 2, 3], 8)); // Output []
console.log(combinationSum2([1, 2, 3], 9)); // Output []
console.log(combinationSum2([1, 2, 3], 10)); // Output []
console.log(combinationSum2([1, 2, 3], 11)); // Output []
console.log(combinationSum2([1, 2, 3], 12)); // Output []
console.log(combinationSum2([1, 2, 3], 13)); // Output []
console.log(combinationSum2([1, 2, 3], 14)); // Output []
console.log(combinationSum2([1, 2, 3], 15)); // Output []