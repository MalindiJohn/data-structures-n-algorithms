function plusOne(digits: number[]): number[] {

    const n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    return [1, ...digits];

};

// testing the function
console.log(plusOne([1, 2, 3])); // expected output: [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // expected output: [4,3,2,2]
console.log(plusOne([0])); // expected output: [1]
console.log(plusOne([9])); // expected output: [1,0]
console.log(plusOne([9, 9])); // expected output: [1,0,0]
console.log(plusOne([9, 9, 9])); // expected output: [1,0,0,0]
console.log(plusOne([1, 9, 9])); // expected output: [2]
console.log(plusOne([1, 9, 8])); // expected output: [1,9,9]
console.log(plusOne([1, 9, 0])); // expected output: [1,9,1]
console.log(plusOne([1, 0, 9])); // expected output: [1]
console.log(plusOne([1, 0, 0])); // expected output: [1,0,1]
console.log(plusOne([1, 0, 8])); // expected output: [1]
console.log(plusOne([1, 0, 7])); // expected output: [1]
console.log(plusOne([1, 0, 6])); // expected output: [1]
console.log(plusOne([1, 0, 5])); // expected output: [1]
console.log(plusOne([1, 0, 4])); // expected output: [1]
console.log(plusOne([1, 0, 3])); // expected output: [1]
console.log(plusOne([1, 0, 2])); // expected output: [1]
console.log(plusOne([1, 0, 1])); // expected output: [1]
console.log(plusOne([1, 0, 0])); // expected output: [1]
console.log(plusOne([1, 0, 9])); // expected output: [1]