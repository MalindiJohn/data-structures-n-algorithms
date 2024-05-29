function findMin(nums: number[]): number {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }

    return nums[left];

};

// testing the function
console.log(findMin([3, 4, 5, 1, 2])); // expected output : 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // expected output : 0
console.log(findMin([11, 13, 15, 17])); // expected output : 11
console.log(findMin([2, 1])); // expected output : 1
console.log(findMin([1])); // expected output : 1
console.log(findMin([1, 2])); // expected output : 1
console.log(findMin([2, 1, 3])); // expected output : 1
console.log(findMin([3, 2, 1])); // expected output : 1
console.log(findMin([3, 1, 2])); // expected output : 1
console.log(findMin([2, 3, 1])); // expected output : 1
console.log(findMin([1, 3, 2])); // expected output : 1
console.log(findMin([1, 2, 3])); // expected output : 1
console.log(findMin([3, 1, 2, 4])); // expected output : 1
console.log(findMin([3, 2, 1, 4])); // expected output : 1
console.log(findMin([3, 2, 4, 1])); // expected output : 1
console.log(findMin([3, 4, 2, 1])); // expected output : 1
console.log(findMin([3, 4, 1, 2])); // expected output : 1
console.log(findMin([3, 1, 4, 2])); // expected output : 1
console.log(findMin([3, 1, 2, 4])); // expected output : 1
console.log(findMin([3, 4, 1, 2, 5])); // expected output : 1
console.log(findMin([3, 4, 2, 1, 5])); // expected output : 1
console.log(findMin([3, 2, 4, 1, 5])); // expected output : 1
console.log(findMin([3, 2, 1, 4, 5])); // expected output : 1
console.log(findMin([3, 4, 2, 5, 1])); // expected output : 1
console.log(findMin([3, 2, 4, 5, 1])); // expected output : 1