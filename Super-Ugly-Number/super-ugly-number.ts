function nthSuperUglyNumber(n: number, primes: number[]): number {

    let dp = new Array(n);
    dp[0] = 1;

    let pointers = new Array(primes.length).fill(0);

    for (let i = 1; i < n; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < primes.length; j++) {
            dp[i] = Math.min(dp[i], dp[pointers[j]] * primes[j]);
        }
        for (let j = 0; j < primes.length; j++) {
            if (dp[i] === dp[pointers[j]] * primes[j]) {
                pointers[j]++;
            }
        }
    }

    return dp[n - 1];

};

// testing the function
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); // 32
console.log(nthSuperUglyNumber(1, [2, 3, 5])); // 1
console.log(nthSuperUglyNumber(2, [2, 3, 5])); // 2