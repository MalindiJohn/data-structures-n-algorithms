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

const nums3 = [1, 3, 2, 2, 3];
wiggleSort(nums3);
console.log(nums3); // expected [2, 3, 1, 3, 2]

const nums4 = [1, 3, 2, 2, 3, 1, 3];
wiggleSort(nums4);
console.log(nums4); // expected [2, 3, 1, 3, 1, 3, 2]

const nums5 = [1, 3, 2, 2, 3, 1, 3, 1];
wiggleSort(nums5);
console.log(nums5); // expected [1, 3, 1, 3, 1, 3, 2, 2]

const nums6 = [1, 3, 2, 2, 3, 1, 3, 1, 3];
wiggleSort(nums6);
console.log(nums6); // expected [1, 3, 1, 3, 1, 3, 1, 3, 2]

const nums7 = [1, 3, 2, 2, 3, 1, 3, 1, 3, 1];
wiggleSort(nums7);
console.log(nums7); // expected [1, 3, 1, 3, 1, 3, 1, 3, 1, 2]

const nums8 = [1, 3, 2, 2, 3, 1, 3, 1, 3, 1, 3];
wiggleSort(nums8);
console.log(nums8); // expected [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2]

const nums9 = [1, 3, 2, 2, 3, 1, 3, 1, 3, 1, 3, 1];
wiggleSort(nums9);
console.log(nums9); // expected [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2]