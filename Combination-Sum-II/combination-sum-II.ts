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