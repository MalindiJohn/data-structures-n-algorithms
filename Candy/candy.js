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
console.log(candy([3,2,1])); // 6
console.log(candy([3,2,1,2])); // 7
console.log(candy([3,2,1,2,3])); // 9
console.log(candy([3,2,1,2,3,4])); // 12
console.log(candy([3,2,1,2,3,4,5])); // 15
console.log(candy([3,2,1,2,3,4,5,6])); // 18
console.log(candy([3,2,1,2,3,4,5,6,7])); // 21
console.log(candy([3,2,1,2,3,4,5,6,7,8])); // 25
console.log(candy([3,2,1,2,3,4,5,6,7,8,9])); // 29
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10])); // 34
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11])); // 39
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12])); // 45
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13])); // 51
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14])); // 58
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); // 66
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])); // 75
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])); // 85
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])); // 96
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])); // 108
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])); // 121
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])); // 135
console.log(candy([3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])); // 150