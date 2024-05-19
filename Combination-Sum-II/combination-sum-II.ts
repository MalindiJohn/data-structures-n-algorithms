function combinationSum2(candidates: number[], target: number): number[][] {

    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    const dfs = (target: number, start: number, path: number[]): void => {
        if (target < 0) return;
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            dfs(target - candidates[i], i + 1, path);
            path.pop();
        }
    };

    dfs(target, 0, []);
    return result;

};

// testing the function
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(combinationSum2(candidates, target)); // expected: [[1,1,6],[1,2,5],[1,7],[2,6]]
// Explanation: 1, 2, 5, and 7 are the only numbers that can be used to sum 8.
// 1 + 1 + 6 = 8
// 1 + 2 + 5 = 8
// 1 + 7 = 8
// 2 + 6 = 8
// Therefore, the result is [[1,1,6],[1,2,5],[1,7],[2,6]].

const candidates1 = [2, 5, 2, 1, 2];
const target1 = 5;
console.log(combinationSum2(candidates1, target1)); // expected: [[1,2,2],[5]]
// Explanation: 1, 2, and 5 are the only numbers that can be used to sum 5.
// 1 + 2 + 2 = 5
// 5 = 5
// Therefore, the result is [[1,2,2],[5]].

const candidates2 = [1, 1, 1, 1, 1];
const target2 = 3;
console.log(combinationSum2(candidates2, target2)); // expected: [[1,1,1]]
// Explanation: 1 is the only number that can be used to sum 3.
// 1 + 1 + 1 = 3
// Therefore, the result is [[1,1,1]].