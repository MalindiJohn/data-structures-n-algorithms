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