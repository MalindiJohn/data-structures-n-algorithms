/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

    let candies = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
    
};

// testing the function
console.log(candy([1,0,2])); // 5
console.log(candy([1,2,2])); // 4
console.log(candy([1,2,3])); // 6