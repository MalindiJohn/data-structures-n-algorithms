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

// testing the function
const nums1 = [3, 4, 6, 5];
const nums2 = [9, 1, 2, 5, 8, 3];
const k = 5;
console.log(maxNumber(nums1, nums2, k)); // [9, 8, 6, 5, 3]

const nums3 = [6, 7];
const nums4 = [6, 0, 4];
const k2 = 5;
console.log(maxNumber(nums3, nums4, k2)); // [6, 7, 6, 0, 4]

const nums5 = [3, 9];
const nums6 = [8, 9];
const k3 = 3;
console.log(maxNumber(nums5, nums6, k3)); // [9, 8, 9]

const nums7 = [6, 7, 5];
const nums8 = [4, 8, 1];
const k4 = 3;
console.log(maxNumber(nums7, nums8, k4)); // [8, 7, 5]

const nums9 = [3, 9, 9, 3, 9, 7, 9, 7, 0];
const nums10 = [3, 3, 8, 6, 5, 9, 1];
const k5 = 6;
console.log(maxNumber(nums9, nums10, k5)); // [9, 9, 9, 9, 8, 9]