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
console.log(combinationSum3(3, 2)); // Output: []
console.log(combinationSum3(9, 45)); // Output: [[1,2,3,4,5,6,7,8,9]]
console.log(combinationSum3(9, 46)); // Output: []
console.log(combinationSum3(9, 47)); // Output: []
console.log(combinationSum3(9, 48)); // Output: []
console.log(combinationSum3(9, 49)); // Output: []
console.log(combinationSum3(9, 50)); // Output: []
console.log(combinationSum3(9, 51)); // Output: []
console.log(combinationSum3(9, 52)); // Output: []
console.log(combinationSum3(9, 53)); // Output: []
console.log(combinationSum3(9, 54)); // Output: []
console.log(combinationSum3(9, 55)); // Output: []
console.log(combinationSum3(9, 56)); // Output: []
console.log(combinationSum3(9, 57)); // Output: []
console.log(combinationSum3(9, 58)); // Output: []
console.log(combinationSum3(9, 59)); // Output: []
console.log(combinationSum3(9, 60)); // Output: []
console.log(combinationSum3(9, 61)); // Output: []
console.log(combinationSum3(9, 62)); // Output: []