function firstMissingPositive(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return nums.length + 1;

};

// testing the function
console.log(firstMissingPositive([1, 2, 0])); // expected: 3
console.log(firstMissingPositive([3, 4, -1, 1])); // expected: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // expected: 1
console.log(firstMissingPositive([1])); // expected: 2
console.log(firstMissingPositive([1, 1])); // expected: 2
console.log(firstMissingPositive([2, 2])); // expected: 1
console.log(firstMissingPositive([1, 2, 3])); // expected: 4
console.log(firstMissingPositive([1, 2, 3, 4])); // expected: 5
console.log(firstMissingPositive([2, 1, 3, 4])); // expected: 5
console.log(firstMissingPositive([2, 1, 3, 4, 5])); // expected: 6
console.log(firstMissingPositive([3, 4, -1, 1, 5])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6, 7])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6, 7, 8])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6, 7, 8, 9])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6, 7, 8, 9, 10])); // expected: 2
console.log(firstMissingPositive([3, 4, -1, 1, 5, 6, 7, 8, 9, 10, 11])); // expected: 2