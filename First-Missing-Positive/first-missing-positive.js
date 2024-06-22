/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(A) {

    // handle scenario where there duplicate numbers i.e 1 in this array [1, 3, 6, 4, 1, 2]

    let n = A.length;

    for (let i = 0; i < n; i++) {
        while (A[i] > 0 && A[i] <= n && A[A[i] - 1] !== A[i]) {
            let temp = A[A[i] - 1];
            A[A[i] - 1] = A[i];
            A[i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        if (A[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
    
};

// Testing the function
console.log(firstMissingPositive([1, 2, 0])); // Output 3
console.log(firstMissingPositive([3, 4, -1, 1])); // Output 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output 1
console.log(firstMissingPositive([1])); // Output 2
console.log(firstMissingPositive([2])); // Output 1
console.log(firstMissingPositive([1, 2])); // Output 3
console.log(firstMissingPositive([2, 1])); // Output 3
console.log(firstMissingPositive([1, 3])); // Output 2
console.log(firstMissingPositive([3, 1])); // Output 2
console.log(firstMissingPositive([2, 3])); // Output 1
console.log(firstMissingPositive([3, 2])); // Output 1
console.log(firstMissingPositive([1, 2, 3])); // Output 4
console.log(firstMissingPositive([1, 3, 2])); // Output 4
console.log(firstMissingPositive([2, 1, 3])); // Output 4
console.log(firstMissingPositive([2, 3, 1])); // Output 4
console.log(firstMissingPositive([3, 1, 2])); // Output 4
console.log(firstMissingPositive([3, 2, 1])); // Output 4