function missingNumber(nums: number[]): number {

    let n: number = nums.length;
    let sum: number = n * (n + 1) / 2;

    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }

    return sum;

};

// testing the function
console.log(missingNumber([3, 0, 1])); // expected output : 2
console.log(missingNumber([0, 1])); // expected output : 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // expected output : 8
console.log(missingNumber([0])); // expected output : 1
console.log(missingNumber([1])); // expected output : 0
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8])); // expected output : 9
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])); // expected output : 8
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8, 9])); // expected output : 7
console.log(missingNumber([0, 1, 2, 3, 4, 5, 7, 8, 9])); // expected output : 6
console.log(missingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9])); // expected output : 5
console.log(missingNumber([0, 1, 2, 3, 5, 6, 7, 8, 9])); // expected output : 4
console.log(missingNumber([0, 1, 2, 4, 5, 6, 7, 8, 9])); // expected output : 3
console.log(missingNumber([0, 1, 3, 4, 5, 6, 7, 8, 9])); // expected output : 2
console.log(missingNumber([0, 2, 3, 4, 5, 6, 7, 8, 9])); // expected output : 1
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected output : 0
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // expected output : 9