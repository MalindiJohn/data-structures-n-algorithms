/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {

    const dp = new Array(n).fill(0);
    dp[0] = 1;
    
    const pointers = new Array(primes.length).fill(0);
    
    for (let i = 1; i < n; i++) {
        let min = Infinity;
        for (let j = 0; j < primes.length; j++) {
            min = Math.min(min, dp[pointers[j]] * primes[j]);
        }
        dp[i] = min;
        for (let j = 0; j < primes.length; j++) {
            if (dp[pointers[j]] * primes[j] === min) {
                pointers[j]++;
            }
        }
    }
    
    return dp[n - 1];
    
};

// testing the function
console.log(nthSuperUglyNumber(12, [2,7,13,19])); // 32
console.log(nthSuperUglyNumber(1, [2,3,5])); // 1
console.log(nthSuperUglyNumber(2, [2,3,5])); // 2
console.log(nthSuperUglyNumber(3, [2,3,5])); // 3
console.log(nthSuperUglyNumber(4, [2,3,5])); // 4
console.log(nthSuperUglyNumber(5, [2,3,5])); // 5
console.log(nthSuperUglyNumber(6, [2,3,5])); // 6
console.log(nthSuperUglyNumber(7, [2,3,5])); // 8
console.log(nthSuperUglyNumber(8, [2,3,5])); // 9
console.log(nthSuperUglyNumber(9, [2,3,5])); // 10
console.log(nthSuperUglyNumber(10, [2,3,5])); // 12
console.log(nthSuperUglyNumber(11, [2,3,5])); // 15
console.log(nthSuperUglyNumber(12, [2,3,5])); // 16
console.log(nthSuperUglyNumber(13, [2,3,5])); // 18
console.log(nthSuperUglyNumber(14, [2,3,5])); // 20