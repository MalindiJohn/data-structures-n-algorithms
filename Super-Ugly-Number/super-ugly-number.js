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