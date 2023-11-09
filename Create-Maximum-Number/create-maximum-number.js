/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {

    let res = new Array(k).fill(0);

    for (let i = Math.max(0, k - nums2.length); i <= k && i <= nums1.length; i++) {
        let candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
        if (greater(candidate, 0, res, 0)) {
            res = candidate;
        }
    }

    return res;
    
};

function maxArray(nums, k) {
    let res = [];
    let drop = nums.length - k;
    for (let num of nums) {
        while (drop && res.length && res[res.length - 1] < num) {
            res.pop();
            drop--;
        }
        res.push(num);
    }
    return res.slice(0, k);
}

function merge(nums1, nums2, k) {
    let res = [];
    while (nums1.length + nums2.length) {
        let max = greater(nums1, 0, nums2, 0) ? nums1 : nums2;
        res.push(max.shift());
    }
    return res;
}

function greater(nums1, i, nums2, j) {
    while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
        i++;
        j++;
    }
    return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
}