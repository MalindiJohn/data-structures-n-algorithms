/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;
    
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    
    if (firstRowZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
    
};

// Testing the function
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix);
console.log(matrix);
// Output [
//     [1,0,1],
//     [0,0,0],
//     [1,0,1]
// ]

matrix1 = [ 
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(matrix1);
console.log(matrix1);
// Output [
//     [0,0,0,0],
//     [0,4,5,0],
//     [0,3,1,0]
// ]