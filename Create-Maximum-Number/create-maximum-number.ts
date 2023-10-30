function maxNumber(nums1: number[], nums2: number[], k: number): number[] {

    let res = [];
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        let candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i));
        if (compare(candidate, 0, res, 0) > 0) {
            res = candidate;
        }
    }
    return res;

};

function maxArray(nums: number[], k: number): number[] {
    const n = nums.length;
    const stack = [];
    let drop = n - k;
    for (let num of nums) {
        while (drop && stack.length && stack[stack.length - 1] < num) {
            stack.pop();
            drop--;
        }
        stack.push(num);
    }
    return stack.slice(0, k);
}

function merge(nums1: number[], nums2: number[]): number[] {
    const res = [];
    let i = 0, j = 0;
    while (i < nums1.length || j < nums2.length) {
        res.push(compare(nums1, i, nums2, j) > 0 ? nums1[i++] : nums2[j++]);
    }
    return res;
}

function compare(nums1: number[], i: number, nums2: number[], j: number): number {
    const n = nums1.length, m = nums2.length;
    while (i < n && j < m) {
        const diff = nums1[i++] - nums2[j++];
        if (diff) {
            return diff;
        }
    }
    return (n - i) - (m - j);
}

// testing the function
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)); // expected [9, 8, 6, 5, 3]
console.log(maxNumber([6, 7], [6, 0, 4], 5)); // expected [6, 7, 6, 0, 4]
console.log(maxNumber([3, 9], [8, 9], 3)); // expected [9, 8, 9]
console.log(maxNumber([6, 7], [6, 0, 4], 2)); // expected [7, 6]
console.log(maxNumber([3, 9], [8, 9], 1)); // expected [9]
console.log(maxNumber([3, 9], [8, 9], 2)); // expected [9, 9]
console.log(maxNumber([3, 9], [8, 9], 3)); // expected [9, 8, 9]