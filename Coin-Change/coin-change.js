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

const coins5 = [1];
const amount5 = 2;
console.log(coinChange(coins5, amount5)); // 2

const coins6 = [1, 2, 5];
const amount6 = 100;
console.log(coinChange(coins6, amount6)); // 20

const coins7 = [186, 419, 83, 408];
const amount7 = 6249;
console.log(coinChange(coins7, amount7)); // 20

const coins8 = [2, 5, 10, 1];
const amount8 = 27;
console.log(coinChange(coins8, amount8)); // 4

const coins9 = [1, 2, 5];
const amount9 = 100;
console.log(coinChange(coins9, amount9)); // 20

const coins10 = [1, 2, 5];
const amount10 = 100;
console.log(coinChange(coins10, amount10)); // 20