function permuteUnique(nums: number[]): number[][] {

    const result: number[][] = [];
    const visited: boolean[] = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);

    function backtrack(path: number[]) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue;
            }
            visited[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            visited[i] = false;
        }
    }

    backtrack([]);

    return result;

};

// testing the function
console.log(permuteUnique([1, 1, 2])); // expected [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // expected [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteUnique([1, 1, 1])); // expected [[1,1,1]]