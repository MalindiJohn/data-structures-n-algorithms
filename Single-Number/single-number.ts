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