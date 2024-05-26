function maxProfit(prices: number[]): number {

    let maxProfit = 0;

    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;

};

// testing the function
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expected 5
console.log(maxProfit([7, 6, 4, 3, 1])); // expected 0
console.log(maxProfit([1, 2])); // expected 1
console.log(maxProfit([2, 1])); // expected 0
console.log(maxProfit([1])); // expected 0
console.log(maxProfit([])); // expected 0
console.log(maxProfit([1, 2, 3, 4, 5])); // expected 4
console.log(maxProfit([1, 2, 3, 4, 5, 6])); // expected 5
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7])); // expected 6
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8])); // expected 7
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected 8
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected 9
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // expected 10
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected 11
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // expected 12
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // expected 13
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // expected 14
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])); // expected 15
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])); // expected 16
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])); // expected 17
console.log(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])); // expected 18