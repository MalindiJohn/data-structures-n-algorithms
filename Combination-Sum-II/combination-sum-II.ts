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
