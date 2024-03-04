/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

    console.log("a="+a+" b="+b);  

    // best answer
    // if(b === 0) {
    //     return a;
    // }
    // return getSum(a ^ b, (a & b) << 1);

    //return sum of int a & b without using operators + and -

    // Iterate until there's no carry
    //handles both positive and negative numbers
    while (b != 0) {
        // Calculate the carry
        let carry = a & b;

        // Calculate the sum without considering the carry
        a = a ^ b;

        // Shift the carry by one position to the left
        b = carry << 1;
    }

    // Return the result
    return a;
};

console.log("2+3="+getSum(2,3));//5
console.log("-1+0="+getSum(-1,0));//0