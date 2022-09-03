function solution(A, B) {
    // Implement your solution here

    // Create sets for each shop to identify unique candies
    let uniqueA = new Set(A);
    let uniqueB = new Set(B);

    // number of unique candies
    let totalUnique = new Set([...A, ...B]).size;

    // unique candies can be bought from each shop
    let canBuy = Math.min(uniqueA.size, A.length / 2) + Math.min(uniqueB.size, B.length / 2);

    // The maximum number types of candies to buy
    return Math.min(totalUnique, canBuy);

}

// testing
console.log(solution([1, 2, 3, 4], [3, 3, 3, 7])); // Output 4
console.log(solution([2, 2, 2, 2, 2, 2], [7, 4, 2, 5, 1, 2])); // Output 4
