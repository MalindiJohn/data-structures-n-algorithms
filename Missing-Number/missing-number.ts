function missingNumber(nums: number[]): number {

    let n: number = nums.length;
    let sum: number = n * (n + 1) / 2;

    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }

    return sum;

};