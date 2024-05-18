function combinationSum(candidates: number[], target: number): number[][] {

    const result: number[][] = [];
    const dfs = (target: number, start: number, path: number[]): void => {
        if (target < 0) return;
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(target - candidates[i], i, path);
            path.pop();
        }
    };

    dfs(target, 0, []);
    return result;

};

// testing the function
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); // expected: [[2,2,3],[7]]
// Explanation: 2 and 3 are the only numbers that can be used to sum 7.
// 2 + 2 + 3 = 7
// 7 = 7
// Therefore, the result is [[2,2,3],[7]].

const candidates1 = [2, 3, 5];
const target1 = 8;
console.log(combinationSum(candidates1, target1)); // expected: [[2,2,2,2],[2,3,3],[3,5]]
// Explanation: 2, 3, and 5 are the only numbers that can be used to sum 8.
// 2 + 2 + 2 + 2 = 8
// 2 + 3 + 3 = 8
// 3 + 5 = 8
// Therefore, the result is [[2,2,2,2],[2,3,3],[3,5]].

const candidates2 = [2];
const target2 = 1;
console.log(combinationSum(candidates2, target2)); // expected: []
// Explanation: 2 is the only number that can be used to sum 1.
// But 2 is greater than 1, so there is no result.
// Therefore, the result is [].
