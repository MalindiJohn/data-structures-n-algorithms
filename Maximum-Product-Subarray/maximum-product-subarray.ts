function maxProduct(nums: number[]): number {

    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        let tempMax = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(nums[i], max * nums[i], min * nums[i]);
        max = tempMax;

        result = Math.max(result, max);

    }

    return result;

};

// testing the function
console.log(maxProduct([2, 3, -2, 4])); // expected output : 6
console.log(maxProduct([-2, 0, -1])); // expected output : 0
console.log(maxProduct([-2])); // expected output : -2