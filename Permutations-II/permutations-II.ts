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
console.log(permuteUnique([1, 2])); // expected [[1,2],[2,1]]
console.log(permuteUnique([1])); // expected [[1]]
console.log(permuteUnique([1, 2, 3, 4])); // expected [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]
console.log(permuteUnique([1, 2, 3, 4, 5])); // expected [[1,2,3,4,5],[1,2,3,5,4],[1,2,4,3,5],[1,2,4,5,3],[1,2,5,3,4],[1,2,5,4,3],[1,3,2,4,5],[1,3,2,5,4],[1,3,4,2,5],[1,3,4,5,2],[1,3,5,2,4],[1,3,5,4,2],[1,4,2,3,5],[1,4,2,5,3],[1,4,3,2,5],[1,4,3,5,2],[1,4,5,2,3],[1,4,5,3,2],[1,5,2,3,4],[1,5,2,4,3],[1,5,3,2,4],[1,5,3,4,2],[1,5,4,2,3],[1,5,4,3,2],[2,1,3,4,5],[2,1,3,5,4],[2,1,4,3,5],[2,1,4,5,3],[2,1,5,3,4],[2,1,5,4,3],[2,3,1,4,5],[2,3,1,5,4],[2,3,4,1,5],[2,3,4,5,1],[2,3,5,1,4],[2,3,5,4,1],[2,4,1,3,5],[2,4,1,5,3],[2,4,3,1,5],[2,4,3,5,1],[2,4,5,1,3],[2,4,5,3,1],[2,5,1,3,4],[2,5,1,4,3],[2,5,3,1,4],[2,5,3,4,1],[2,5,4,1,3],[2,5,4
console.log(permuteUnique([1, 2, 3, 4, 5, 6])); // expected [[1,2,3,4,5,6],[1,2,3,4,6,5],[1,2,3,5,4,6],[1,2,3,5,6,4],[1,2,3,6,4,5],[1,2,3,6,5,4],[1,2,4,3,5,6],[1,2,4,3,6,5],[1,2,4,5,3,6],[1,2,4,5,6,3],[1,2,4,6,3,5],[1,2,4,6,5,3],[1,2,5,3,4,6],[1,2,5,3,6,4],[1,2,5,4,3,6],[1,2,5,4,6,3],[1,2,5,6,3,4],[1,2,5,6,4,3],[1,2,6,3,4,5],[1,2,6,3,5,4],[1,2,6,4,3,5],[1,2,6,4,5,3],[1,2,6,5,3,4],[1,2,6,5,4,3],[1,3,2,4,5,6],[1,3,2,4,6,5],[1,3,2,5,4,6],[1,3,2,5,6,4],[1,3,2,6,4,5],[1,3,2,6,5,4],[1,3,4,2,5,6],[1,3,4,2,6,5],[1,3,4,5,2,6],[1,3,4,5,6,2],[1,3,4,6,2,5],[1,3,4,6,5,2],[1,3,5,2,4,6],[1,3,5,2,6,4],[1,3,5,4,2,6],[1,3,
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7])); // expected [[1,2,3,4,5,6,7],[1,2,3,4,5,7,6],[1,2,3,4,6,5,7],[1,2,3,4,6,7,5],[1,2,3,4,7,5,6],[1,2,3,4,7,6,5],[1,2,3,5,4,6,7],[1,2,3,5,4,7,6],[1,2,3,5,6,4,7],[1,2,3,5,6,7,4],[1,2,3,5,7,4,6],[1,2,3,5,7,6,4],[1,2,3,6,4,5,7],[1,2,3,6,4,7,5],[1,2,3,6,5,4,7],[1,2,3,6,5,7,4],[1,2,3,6,7,4,5],[1,2,3,6,7,5,4],[1,2,3,7,4,5,6],[1,2,3,7,4,6,5],[1,2,3,7,5,4,6],[1,2,3,7,5,6,4],[1,2,3,7,6,4,5],[1,2,3,7,6,5,4],[1,2,4,3,5,6,7],[1,2,4,3,5,7,6],[1,2,4,3,6,5,7],[1,2,4,3,6,7,5],[1,2,4,3,7,5,6],[1,2,4,3,7,6,5],[1,2,4,5,3,6,7],[1,2,4,5,3,7,6],[1,2,4,5,6,3,7],[1,2,4,5
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8])); // expected [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,8,7],[1,2,3,4,5,7,6,8],[1,2,3,4,5,7,8,6],[1,2,3,4,5,8,6,7],[1,2,3,4,5,8,7,6],[1,2,3,4,6,5,7,8],[1,2,3,4,6,5,8,7],[1,2,3,4,6,7,5,8],[1,2,3,4,6,7,8,5],[1,2,3,4,6,8,5,7],[1,2,3,4,6,8,7,5],[1,2,3,4,7,5,6,8],[1,2,3,4,7,5,8,6],[1,2,3,4,7,6,5,8],[1,2,3,4,7,6,8,5],[1,2,3,4,7,8,5,6],[1,2,3,4,7,8,6,5],[1,2,3,4,8,5,6,7],[1,2,3,4,8,5,7,6],[1,2,3,4,8,6,5,7],[1,2,3,4,8,6,7,5],[1,2,3,4,8,7,5,6],[1,2,3,4,8,7,6,5],[1,2,3,5,4,6,7,8],[1,2,3,5,4,6,8,7],[1,2,3,5,4,7,6,8],[1,2,3,5,4,7,8,6],[1,2,3,5,4,8,6,7],[1,
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,9,8],[1,2,3,4,5,6,8,7,9],[1,2,3,4,5,6,8,9,7],[1,2,3,4,5,6,9,7,8],[1,2,3,4,5,6,9,8,7],[1,2,3,4,5,7,6,8,9],[1,2,3,4,5,7,6,9,8],[1,2,3,4,5,7,8,6,9],[1,2,3,4,5,7,8,9,6],[1,2,3,4,5,7,9,6,8],[1,2,3,4,5,7,9,8,6],[1,2,3,4,5,8,6,7,9],[1,2,3,4,5,8,6,9,7],[1,2,3,4,5,8,7,6,9],[1,2,3,4,5,8,7,9,6],[1,2,3,4,5,8,9,6,7],[1,2,3,4,5,8,9,7,6],[1,2,3,4,5,9,6,7,8],[1,2,3,4,5,9,6,8,7],[1,2,3,4,5,9,7,6,8],[1,2,3,4,5,9,7,8,6],[1,2,3,4,5,9,8,6,7],[1,2,3,4,5,9,8,7,6],[1,2,3,4,6,5,7,8,9],[1,2,3,4,6,5,7
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,10,9],[1,2,3,4,5,6,7,9,8,10],[1,2,3,4,5,6,7,9,10,8],[1,2,3,4,5,6,7,10,8,9],[1,2,3,4,5,6,7,10,9,8],[1,2,3,4,5,6,8,7,9,10],[1,2,3,4,5,6,8,7,10,9],[1,2,3,4,5,6,8,9,7,10],[1,2,3,4,5,6,8,9,10,7],[1,2,3,4,5,6,8,10,7,9],[1,2,3,4,5,6,8,10,9,7],[1,2,3,4,5,6,9,7,8,10],[1,2,3,4,5,6,9,7,10,8],[1,2,3,4,5,6,9,8,7,10],[1,2,3,4,5,6,9,8,10,7],[1,2,3,4,5,6,9,10,7,8],[1,2,3,4,5,6,9,10,8,7],[1,2,3,4,5,6,10,7,8,9],[1,2,3,4,5,6,10,7,9,8],[1,2,3,4,5,6,10,8,7,9],[1,2,3,4,5,6,10,8,9,7],[1,2,3,4,5,6,10,9,7,8],[
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // expected [[1,2,3,4,5,6,7,8,9,10,11],[1,2,3,4,5,6,7,8,9,11,10],[1,2,3,4,5,6,7,8,10,9,11],[1,2,3,4,5,6,7,8,10,11,9],[1,2,3,4,5,6,7,8,11,9,10],[1,2,3,4,5,6,7,8,11,10,9],[1,2,3,4,5,6,7,9,8,10,11],[1,2,3,4,5,6,7,9,8,11,10],[1,2,3,4,5,6,7,9,10,8,11],[1,2,3,4,5,6,7,9,10,11,8],[1,2,3,4,5,6,7,9,11,8,10],[1,2,3,4,5,6,7,9,11,10,8],[1,2,3,4,5,6,7,10,8,9,11],[1,2,3,4,5,6,7,10,8,11,9],[1,2,3,4,5,6,7,10,9,8,11],[1,2,3,4,5,6,7,10,9,11,8],[1,2,3,4,5,6,7,10,11,8,9],[1,2,3,4,5,6,7,10,11,9,8],[1,2,3,4,5,6,7,11,8,9,10],[1,2,3,4,5,6,7,11,8,10,9],[1,2,3,4,5,6,7,11,9,
console.log(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected [[1,2,3,4,5,6,7,8,9,10,11,12],[1,2,3,4,5,6,7,8,9,10,12,11],[1,2,3,4,5,6,7,8,9,11,10,12],[1,2,3,4,5,6,7,8,9,11,12,10],[1,2,3,4,5,6,7,8,9,12,10,11],[1,2,3,4,5,6,7,8,9,12,11,10],[1,2,3,4,5,6,7,8,10,9,11,12],[1,2,3,4,5,6,7,8,10,9,12,11],[1,2,3,4,5,6,7,8,10,11,9,12],[1,2,3,4,5,6,7,8,10,11,12,9],[1,2,3,4,5,6,7,8,10,12,9,11],[1,2,3,4,5,6,7,8,10,12,11,9],[1,2,3,4,5,6,7,8,11,9,10,12],[1,2,3,4,5,6,7,8,11,9,12,10],[1,2,3,4,5,6,7,8,11,10,9,12],[1,2,3,4,5,6,7,8,11,10,12,9],[1,2,3,4,5,6,7,8,11,12,9,10],[1,2,3,4,5,6,7,8,11,12,10,9],[1,2,3,4,5,6,7,8,12,9,10,