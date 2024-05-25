function search(nums: number[], target: number): boolean {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;

};

// testing the function
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // expected true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // expected false
console.log(search([1], 0)); // expected false
console.log(search([1], 1)); // expected true
console.log(search([1, 1], 0)); // expected false
console.log(search([1, 1], 1)); // expected true
console.log(search([1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)); // expected true
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0)); // expected false
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)); // expected true