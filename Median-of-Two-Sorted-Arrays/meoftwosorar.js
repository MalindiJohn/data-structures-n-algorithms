/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let totalLength = nums1.length + nums2.length;
    let halfLength = Math.floor(totalLength / 2);
    let i = 0;
    let j = 0;
    let current = 0;
    let previous = 0;
    while (i + j <= halfLength) {
        previous = current;
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
            current = nums1[i];
            i++;
        } else {
            current = nums2[j];
            j++;
        }
    }
    if (totalLength % 2 === 0) {
        return (previous + current) / 2;
    } else {
        return current;
    }

    
};

// Testing the function
console.log(findMedianSortedArrays([1, 3], [2])); // Output 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output 0