/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    if (matrix.length === 0) {
        return false;
    }
    
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;

};

// testing the function
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
let target = 5;
console.log(searchMatrix(matrix, target)); // true

target = 20;
console.log(searchMatrix(matrix, target)); // false

target = 1;
console.log(searchMatrix(matrix, target)); // true

target = 30;
console.log(searchMatrix(matrix, target)); // true

target = 15;
console.log(searchMatrix(matrix, target)); // true

target = 18;
console.log(searchMatrix(matrix, target)); // true

target = 26;
console.log(searchMatrix(matrix, target)); // true

target = 23;
console.log(searchMatrix(matrix, target)); // true

target = 22;
console.log(searchMatrix(matrix, target)); // true