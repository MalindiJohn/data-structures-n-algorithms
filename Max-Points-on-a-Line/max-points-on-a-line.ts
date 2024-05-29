function maxPoints(points: number[][]): number {

    if (points.length < 3) {
        return points.length;
    }

    let max = 0;

    for (let i = 0; i < points.length; i++) {

        let slopeMap = new Map<string, number>();
        let samePoint = 0;
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {

            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                samePoint++;
                continue;
            }

            let slope = getSlope(points[i], points[j]);
            slopeMap.set(slope, (slopeMap.get(slope) || 0) + 1);
            localMax = Math.max(localMax, slopeMap.get(slope));
        }

        max = Math.max(max, localMax + samePoint + 1);

    }

    return max;

};

function getSlope(p1: number[], p2: number[]): string {

    let dx = p2[0] - p1[0];
    let dy = p2[1] - p1[1];

    if (dx === 0) {
        return 'Infinity';
    }

    let gcd = getGCD(dx, dy);
    return (dy / gcd) + '/' + (dx / gcd);

}

function getGCD(a: number, b: number): number {

    if (b === 0) {
        return a;
    }

    return getGCD(b, a % b);

}

// testing the function
console.log(maxPoints([[1, 1], [2, 2], [3, 3]])); // expected output : 3
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]])); // expected output : 4
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [1, 1], [1, 1]])); // expected output : 5
console.log(maxPoints([[1, 1], [1, 1], [1, 1]])); // expected output : 3
console.log(maxPoints([[1, 1], [2, 2]])); // expected output : 2
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4]])); // expected output : 4
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]])); // expected output : 5
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]])); // expected output : 6
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]])); // expected output : 7
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8]])); // expected output : 8
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]])); // expected output : 9
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10]])); // expected output : 10
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11]])); // expected output : 11
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12]])); // expected output : 12
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13]])); // expected output : 13
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14]])); // expected output : 14
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15]])); // expected output : 15
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16]])); // expected output : 16
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17]])); // expected output : 17
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18]])); // expected output : 18
console.log(maxPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19]])); // expected output : 19