function spiralOrder(matrix: number[][]): number[] {

    const result: number[] = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

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

// testing the function
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // expected [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // expected [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])); // expected [1,2,3,6,9,12,11,10,7,4,5,8]