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