function findDuplicate(nums: number[]): number {

    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

};

// testing the function
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 1])); // 1
console.log(findDuplicate([1, 1, 2])); // 1
console.log(findDuplicate([2, 2, 2, 2, 2])); // 2
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])); // 9
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); // 10
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11])); // 11
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12])); // 12
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13])); // 13
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14])); // 14
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15])); // 15
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16])); // 16
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17])); // 17
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18])); // 18
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19])); // 19
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20])); // 20
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21])); // 21