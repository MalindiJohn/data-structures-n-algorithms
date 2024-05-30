function findPeakElement(nums: number[]): number {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;

};

// testing the function
console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5
console.log(findPeakElement([1, 2, 3, 4])); // 3
console.log(findPeakElement([4, 3, 2, 1])); // 0
console.log(findPeakElement([1, 2, 3, 4, 5])); // 4
console.log(findPeakElement([1, 2, 3, 4, 5, 6])); // 5
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7])); // 6
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8])); // 7
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 8
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 9
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 10
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // 11
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 12
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // 13
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // 14