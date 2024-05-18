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