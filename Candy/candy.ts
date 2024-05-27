function candy(ratings: number[]): number {

    let candies = Array(ratings.length).fill(1);

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

    return candies.reduce((acc, curr) => acc + curr, 0);

};

// testing the function
console.log(candy([1, 0, 2])); // expected 5
console.log(candy([1, 2, 2])); // expected 4
console.log(candy([1, 2, 3])); // expected 6
console.log(candy([3, 2, 1])); // expected 6
console.log(candy([1, 3, 2])); // expected 5
console.log(candy([1, 3, 4, 5, 2])); // expected 11
console.log(candy([1, 2, 3, 4, 5])); // expected 15
console.log(candy([5, 4, 3, 2, 1])); // expected 15
console.log(candy([5, 4, 3, 2, 1, 1])); // expected 16
console.log(candy([5, 4, 3, 2, 1, 1, 1])); // expected 17
console.log(candy([5, 4, 3, 2, 1, 1, 1, 1])); // expected 18
console.log(candy([5, 4, 3, 2, 1, 1, 1, 1, 1])); // expected 19
console.log(candy([5, 4, 3, 2, 1, 1, 1, 1, 1, 1])); // expected 20
console.log(candy([5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1])); // expected 21