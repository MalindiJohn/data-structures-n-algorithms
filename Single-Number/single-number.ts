function singleNumber(nums: number[]): number {

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;

};

// testing the function
console.log(singleNumber([2, 2, 1])); // expected 1
console.log(singleNumber([4, 1, 2, 1, 2])); // expected 4
console.log(singleNumber([1])); // expected 1
console.log(singleNumber([1, 1, 2, 2, 3])); // expected 3
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4])); // expected 4
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5])); // expected 5
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6])); // expected 6
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7])); // expected 7
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8])); // expected 8
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9])); // expected 9
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9])); // expected 10
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10])); // expected 10
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10])); // expected 10
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11])); // expected 11
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11])); // expected 11
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12])); // expected 12
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12])); // expected 12
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13])); // expected 13