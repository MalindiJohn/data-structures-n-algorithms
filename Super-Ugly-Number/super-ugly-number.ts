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
console.log(nthSuperUglyNumber(3, [2, 3, 5])); // 3
console.log(nthSuperUglyNumber(4, [2, 3, 5])); // 4
console.log(nthSuperUglyNumber(5, [2, 3, 5])); // 5
console.log(nthSuperUglyNumber(6, [2, 3, 5])); // 6
console.log(nthSuperUglyNumber(7, [2, 3, 5])); // 8
console.log(nthSuperUglyNumber(8, [2, 3, 5])); // 9
console.log(nthSuperUglyNumber(9, [2, 3, 5])); // 10
console.log(nthSuperUglyNumber(10, [2, 3, 5])); // 12
console.log(nthSuperUglyNumber(11, [2, 3, 5])); // 15
console.log(nthSuperUglyNumber(12, [2, 3, 5])); // 16
console.log(nthSuperUglyNumber(13, [2, 3, 5])); // 18
console.log(nthSuperUglyNumber(14, [2, 3, 5])); // 20
console.log(nthSuperUglyNumber(15, [2, 3, 5])); // 24