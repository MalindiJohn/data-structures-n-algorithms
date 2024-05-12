/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    const result = [];
    const combination = [];
    
    const backtrack = (start, target) => {
        if (combination.length === k && target === 0) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i <= 9; i++) {
            if (i > target) {
                break;
            }
            combination.push(i);
            backtrack(i + 1, target - i);
            combination.pop();
        }
    };
    
    backtrack(1, n);
    
    return result;
    
};

// Testing the function
console.log(combinationSum3(3, 7)); // Output: [[1,2,4]]
console.log(combinationSum3(3, 9)); // Output: [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // Output: []