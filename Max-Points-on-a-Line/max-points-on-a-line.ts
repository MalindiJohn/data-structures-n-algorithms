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