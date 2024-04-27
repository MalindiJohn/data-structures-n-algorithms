/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    // first solution  - does not work with big test cases
    // let result = 0;
    // let sign = 1;
    
    // if (dividend < 0) {
    //     sign = -sign;
    //     dividend = -dividend;
    // }
    
    // if (divisor < 0) {
    //     sign = -sign;
    //     divisor = -divisor;
    // }
    
    // while (dividend >= divisor) {
    //     dividend -= divisor;
    //     result++;
    // }
    
    // if (sign < 0) {
    //     result = -result;
    // }
    
    // return Math.min(Math.max(-2147483648, result), 2147483647);

    //second solution - works with big test cases
    if (dividend === -2147483648 && divisor === -1) return 2147483647
    if(Math.abs(divisor) === 1) return dividend * divisor;

    let isNegative = false;
    let count = 0;

    if((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0))
        isNegative = true;
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    // if(divisor > dividend) return 0;
    // if(divisor === dividend) return isNegative ? -1 : 1;

    while(dividend >= divisor) {
        let x = 1;
        base = divisor;
        while (base <= (dividend >> 1)) {
            base = base << 1;
            x = x << 1;
        }
        count += x;
        dividend -= base;
    }

    if(isNegative) return -count;
    return count;
    
};

console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(0, 1)); // 0
console.log(divide(-2147483648, -1)); // 2147483647