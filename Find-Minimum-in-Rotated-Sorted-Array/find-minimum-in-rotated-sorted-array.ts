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