/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
    
};

// testing the function
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // 3

const coins2 = [2];
const amount2 = 3;
console.log(coinChange(coins2, amount2)); // -1

const coins3 = [1];
const amount3 = 0;
console.log(coinChange(coins3, amount3)); // 0

const coins4 = [1];
const amount4 = 1;
console.log(coinChange(coins4, amount4)); // 1