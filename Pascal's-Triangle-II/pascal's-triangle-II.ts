function getRow(rowIndex: number): number[] {

    let result: number[] = [1];

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            result[j] = (result[j] || 0) + (result[j - 1] || 0);
        }
    }

    return result;

};