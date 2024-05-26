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