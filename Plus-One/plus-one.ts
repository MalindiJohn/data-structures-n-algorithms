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