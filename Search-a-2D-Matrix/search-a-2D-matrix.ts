function searchMatrix(matrix: number[][], target: number): boolean {

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
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // expected true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // expected false
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60)); // expected true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 0)); // expected false
console.log(searchMatrix([[1]], 0)); // expected false
console.log(searchMatrix([[1]], 1)); // expected true
console.log(searchMatrix([[1]], 2)); // expected false
console.log(searchMatrix([[1], [3]], 3)); // expected true
console.log(searchMatrix([[1], [3]], 2)); // expected false
console.log(searchMatrix([[1], [3], [5]], 5)); // expected true
console.log(searchMatrix([[1], [3], [5]], 4)); // expected false
console.log(searchMatrix([[1], [3], [5]], 6)); // expected false
console.log(searchMatrix([[1, 3, 5]], 5)); // expected true
console.log(searchMatrix([[1, 3, 5]], 4)); // expected false
console.log(searchMatrix([[1, 3, 5]], 6)); // expected false
console.log(searchMatrix([[1], [3], [5]], 1)); // expected true
console.log(searchMatrix([[1], [3], [5]], 3)); // expected true
console.log(searchMatrix([[1], [3], [5]], 5)); // expected true
console.log(searchMatrix([[1, 3, 5]], 1)); // expected true
console.log(searchMatrix([[1, 3, 5]], 3)); // expected true
console.log(searchMatrix([[1, 3, 5]], 5)); // expected true
console.log(searchMatrix([[1, 3, 5]], 0)); // expected false
console.log(searchMatrix([[1, 3, 5]], 2)); // expected false
console.log(searchMatrix([[1, 3, 5]], 4)); // expected false
console.log(searchMatrix([[1, 3, 5]], 6)); // expected false
console.log(searchMatrix([[1, 3, 5, 7, 9]], 1)); // expected true
console.log(searchMatrix([[1, 3, 5, 7, 9]], 3)); // expected true
console.log(searchMatrix([[1, 3, 5, 7, 9]], 5)); // expected true
console.log(searchMatrix([[1, 3, 5, 7, 9]], 7)); // expected true
console.log(searchMatrix([[1, 3, 5, 7, 9]], 9)); // expected true
console.log(searchMatrix([[1, 3, 5, 7, 9]], 0)); // expected false