function subsetsWithDup(nums: number[]): number[][] {

    nums.sort((a, b) => a - b);

    let result: number[][] = [];
    let subset: number[] = [];

    function backtrack(start: number) {
        result.push([...subset]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            subset.push(nums[i]);
            backtrack(i + 1);
            subset.pop();
        }
    }

    backtrack(0);

    return result;

};