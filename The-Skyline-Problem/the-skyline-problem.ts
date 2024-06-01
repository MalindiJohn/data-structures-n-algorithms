function getSkyline(buildings: number[][]): number[][] {

    let events: number[][] = [];
    for (let building of buildings) {
        let [left, right, height] = building;
        events.push([left, height]);
        events.push([right, -height]);
    }

    events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let result: number[][] = [];
    let pq = new PriorityQueue<number>((a, b) => b - a);
    pq.push(0);

    let prev = 0;
    for (let [x, h] of events) {
        if (h > 0) {
            pq.push(h);
        } else {
            pq.delete(-h);
        }

        let curr = pq.peek();
        if (curr !== prev) {
            result.push([x, curr]);
            prev = curr;
        }
    }

    return result;

};

// testing the function
console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]));
// [
//     [2, 10],
//     [3, 15],
//     [7, 12],
//     [12, 0],
//     [15, 10],
//     [20, 8],
//     [24, 0]
// ]

console.log(getSkyline([[0, 2, 3], [2, 5, 3]]));
// [
//     [0, 3],
//     [5, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]]));
// [
//     [1, 3],
//     [2, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1]]));
// [
//     [1, 3],
//     [2, 1],
//     [3, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2]]));
// [
//     [1, 3],
//     [2, 2],
//     [3, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2], [2, 3, 3]]));
// [
//     [1, 3],
//     [2, 3],
//     [3, 0]
// ]