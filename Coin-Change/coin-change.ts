function coinChange(coins: number[], amount: number): number {

    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];

};

// testing the function
console.log(coinChange([1, 2, 5], 11)); // expected 3
console.log(coinChange([2], 3)); // expected -1
console.log(coinChange([1], 0)); // expected 0
console.log(coinChange([1], 1)); // expected 1
console.log(coinChange([1], 2)); // expected 2
console.log(coinChange([1, 2], 3)); // expected 2
console.log(coinChange([1, 2], 4)); // expected 2
console.log(coinChange([1, 2], 5)); // expected 3
console.log(coinChange([1, 2], 6)); // expected 3
console.log(coinChange([1, 2], 7)); // expected 4
console.log(coinChange([1, 2], 8)); // expected 4
console.log(coinChange([1, 2], 9)); // expected 5