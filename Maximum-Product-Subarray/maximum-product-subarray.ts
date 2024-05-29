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
console.log(maxProduct([0])); // expected output : 0
console.log(maxProduct([1])); // expected output : 1
console.log(maxProduct([-1])); // expected output : -1
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected output : 362880
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected output : 3628800
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // expected output : 39916800
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected output : 479001600
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // expected output : 6227020800
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // expected output : 87178291200
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // expected output : 1307674368000
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])); // expected output : 20922789888000
console.log(maxProduct([2, 3, -2, 4, 5, 6, 7, 8, 9])); // expected output : 362880
console.log(maxProduct([2, 3, -2, 4, 5, 6, 7, 8, 9, 10])); // expected output : 3628800
console.log(maxProduct([2, 3, -2, 4, 5, 6, 7, 8, 9, 10, 11])); // expected output : 39916800
console.log(maxProduct([2, 3, -2, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected output : 479001600
console.log(maxProduct([2, 3, -2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // expected output : 6227020800