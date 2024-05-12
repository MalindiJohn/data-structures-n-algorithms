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