/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = Array(i + 1).fill(1);

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
    
};

// testing the function
console.log(generate(5));
// [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]
// ]

console.log(generate(1));
// [[1]]

console.log(generate(2));