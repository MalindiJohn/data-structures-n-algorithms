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