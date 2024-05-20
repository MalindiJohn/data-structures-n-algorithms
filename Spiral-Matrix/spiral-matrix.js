/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
    
};

// Testing the function
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Output [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// Output [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8]]));
// Output [1,2,3,4,8,7,6,5]
console.log(spiralOrder([[1, 2], [3, 4], [5, 6]]));
// Output [1,2,4,6,5,3]
console.log(spiralOrder([[1, 2, 3]]));
// Output [1,2,3]
console.log(spiralOrder([[1], [2], [3]]));
// Output [1,2,3]
console.log(spiralOrder([[1, 2, 3, 4, 5]]));
// Output [1,2,3,4,5]
console.log(spiralOrder([[1], [2], [3], [4], [5]]));
// Output [1,2,3,4,5]
console.log(spiralOrder([[1]]));
// Output [1]
console.log(spiralOrder([[1, 2]]));
// Output [1,2]
console.log(spiralOrder([[1], [2]]));
// Output [1,2]
console.log(spiralOrder([[1, 2, 3], [4, 5, 6]]));
// Output [1,2,3,6,5,4]
console.log(spiralOrder([[1, 2], [3, 4], [5, 6], [7, 8]]));
// Output [1,2,4,6,8,7,5,3]
console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]));
// Output [1,2,3,4,5,10,9,8,7,6]
console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]));
// Output [1,2,3,4,5,10,15,14,13,12,11,6,7,8,9]
console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]));
// Output [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));
// Output [1,2,3,6,9,12,11,10,7,4,5,8]