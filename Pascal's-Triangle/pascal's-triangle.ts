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