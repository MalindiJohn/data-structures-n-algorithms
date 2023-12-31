/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {

    const n = nums.length;
    const sorted = nums.slice().sort((a, b) => a - b);
    let i = n - 1;
    for (let j = 1; j < n; j += 2) {
        nums[j] = sorted[i--];
    }
    for (let j = 0; j < n; j += 2) {
        nums[j] = sorted[i--];
    }

};

// testing the function
const nums1 = [1, 5, 1, 1, 6, 4];
wiggleSort(nums1);
console.log(nums1); // expected [1, 4, 1, 5, 1, 6]
const nums2 = [1, 3, 2, 2, 3, 1];
wiggleSort(nums2);
console.log(nums2); // expected [2, 3, 1, 3, 1, 2]