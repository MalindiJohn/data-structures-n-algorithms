/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let m = matrix.length;
    let n = matrix[0].length;
    
    let left = 0;
    let right = m * n - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = matrix[Math.floor(mid / n)][mid % n];
        
        if (midVal === target) {
            return true;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
    
};

// Testing the function
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;
console.log(searchMatrix(matrix, target)); // Output: true

target = 13;
console.log(searchMatrix(matrix, target)); // Output: false

target = 60;
console.log(searchMatrix(matrix, target)); // Output: true

target = 0;
console.log(searchMatrix(matrix, target)); // Output: false

target = 1;
console.log(searchMatrix(matrix, target)); // Output: true

target = 34;
console.log(searchMatrix(matrix, target)); // Output: true

target = 23;
console.log(searchMatrix(matrix, target)); // Output: true

target = 30;
console.log(searchMatrix(matrix, target)); // Output: true

target = 20;
console.log(searchMatrix(matrix, target)); // Output: true

target = 10;
console.log(searchMatrix(matrix, target)); // Output: true

target = 11;
console.log(searchMatrix(matrix, target)); // Output: true

target = 16;
console.log(searchMatrix(matrix, target)); // Output: true

target = 7;
console.log(searchMatrix(matrix, target)); // Output: true

target = 5;
console.log(searchMatrix(matrix, target)); // Output: true

target = 3;
console.log(searchMatrix(matrix, target)); // Output: true

target = 1;
console.log(searchMatrix(matrix, target)); // Output: true

target = 0;
console.log(searchMatrix(matrix, target)); // Output: false

target = 2;
console.log(searchMatrix(matrix, target)); // Output: false

