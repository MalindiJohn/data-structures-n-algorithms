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
console.log(findMedianSortedArrays([], [1])); // Output 1
console.log(findMedianSortedArrays([2], [])); // Output 2
console.log(findMedianSortedArrays([1, 3], [2, 4])); // Output 2.5
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6])); // Output 3.5
console.log(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6])); // Output 4
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6, 8])); // Output 4
console.log(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])); // Output 4.5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8])); // Output 5
console.log(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8, 10])); // Output 5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // Output 5.5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10])); // Output 6
console.log(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12])); // Output 6
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12])); // Output 6.5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12])); // Output 7
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12, 14])); // Output 7
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14])); // Output 7.5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14])); // Output 8
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14, 16])); // Output 8
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16])); // Output 8.5
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17], [2, 4, 6, 8, 10, 12, 14, 16])); // Output 9
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16, 18])); // Output 9
console.log(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17], [2, 4, 6, 8, 10, 12, 14, 16, 18])); // Output 9.5