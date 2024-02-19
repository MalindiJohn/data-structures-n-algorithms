function searchMatrix(matrix: number[][], target: number): boolean {

    let row: number = 0;
    let col: number = matrix[0].length - 1;

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
console.log(searchMatrix([[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]], 5)); // expected output : true

console.log(searchMatrix([[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]], 20)); // expected output : false

console.log(searchMatrix([[]], 1)); // expected output : false

console.log(searchMatrix([[1]], 1)); // expected output : true

console.log(searchMatrix([[1, 3, 5]], 1)); // expected output : true

console.log(searchMatrix([[1, 3, 5]], 2)); // expected output : false

console.log(searchMatrix([[1], [3], [5]], 1)); // expected output : true

console.log(searchMatrix([[1], [3], [5]], 2)); // expected output : false

console.log(searchMatrix([[1, 4], [2, 5]], 2)); // expected output : true

console.log(searchMatrix([[1, 4], [2, 5]], 3)); // expected output : false

console.log(searchMatrix([[1, 4], [2, 5]], 5)); // expected output : true

console.log(searchMatrix([[1, 4], [2, 5]], 6)); // expected output : false