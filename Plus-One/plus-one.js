/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    digits.unshift(1);
    
    return digits;
    
};

// Testing the function
console.log(plusOne([1, 2, 3]));
// Output [1,2,4]
console.log(plusOne([4, 3, 2, 1]));
// Output [4,3,2,2]
console.log(plusOne([0]));
// Output [1]
console.log(plusOne([9]));
// Output [1,0]
console.log(plusOne([9, 9]));
// Output [1,0,0]
console.log(plusOne([9, 9, 9]));
// Output [
//     1, 0, 0, 0
// ]
console.log(plusOne([1, 0, 0, 0]));
// Output [
//     1, 0, 0, 1
// ]
console.log(plusOne([1, 0, 9, 9]));
// Output [
//     1, 1, 0, 0
// ]
console.log(plusOne([1, 9, 9, 9]));
// Output [
//     2, 0, 0, 0
// ]
console.log(plusOne([9, 9, 9, 9]));
// Output [
//     1, 0, 0, 0, 0
// ]
console.log(plusOne([1, 0, 0, 0, 0]));
// Output [
//     1, 0, 0, 0, 1
// ]
console.log(plusOne([1, 0, 0, 9, 9]));
// Output [
//     1, 0, 1, 0, 0
// ]
console.log(plusOne([1, 0, 9, 9, 9]));
// Output [
//     1, 1, 0, 0, 0
// ]
console.log(plusOne([1, 9, 9, 9, 9]));
// Output [
//     2, 0, 0, 0, 0
// ]
console.log(plusOne([9, 9, 9, 9, 9]));
// Output [
//     1, 0, 0, 0, 0, 0
// ]