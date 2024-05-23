function subsets(nums: number[]): number[][] {

    let result: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
        let n = result.length;
        for (let j = 0; j < n; j++) {
            result.push([...result[j], nums[i]]);
        }
    }

    return result;

};

// testing the function
console.log(subsets([1, 2, 3])); // expected [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // expected [[],[0]]
console.log(subsets([1])); // expected [[],[1]]