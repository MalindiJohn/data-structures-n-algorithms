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

// testing the function
console.log(subsetsWithDup([1, 2, 2])); // expected [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // expected [[],[0]]
console.log(subsetsWithDup([1, 1])); // expected [[],[1],[1,1]]