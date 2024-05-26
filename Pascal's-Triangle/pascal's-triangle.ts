function generate(numRows: number): number[][] {

    let result: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        let row: number[] = [];
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }

    return result;

};

// testing the function
console.log(generate(5));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(6));
console.log(generate(7));
console.log(generate(8));
console.log(generate(9));
console.log(generate(10));
console.log(generate(11));
console.log(generate(12));
console.log(generate(13));
console.log(generate(14));
console.log(generate(15));
console.log(generate(16));
console.log(generate(17));
console.log(generate(18));
console.log(generate(19));
console.log(generate(20));
console.log(generate(21));
console.log(generate(22));
console.log(generate(23));
console.log(generate(24));
console.log(generate(25));