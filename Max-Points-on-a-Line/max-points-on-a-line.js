/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {

    if (points.length < 3) {
        return points.length;
    }
    
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        let same = 0;
        let localMax = 0;
        for (let j = i + 1; j < points.length; j++) {
            let x = points[j][0] - points[i][0];
            let y = points[j][1] - points[i][1];
            if (x === 0 && y === 0) {
                same++;
                continue;
            }
            let gcd = getGCD(x, y);
            if (gcd !== 0) {
                x /= gcd;
                y /= gcd;
            }
            let key = `${x}/${y}`;
            map.set(key, (map.get(key) || 0) + 1);
            localMax = Math.max(localMax, map.get(key));
        }
        max = Math.max(max, localMax + same + 1);
    }
    
    return max;
    
};

function getGCD(a, b) {

    if (b === 0) {
        return a;
    }
    return getGCD(b, a % b);

}

// testing the function
console.log(maxPoints([[1,1],[2,2],[3,3]])); // 3
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])); // 4
console.log(maxPoints([[1,1],[2,2],[1,1],[2,2]])); // 4
console.log(maxPoints([[0,0],[1,1],[0,0]])); // 3
console.log(maxPoints([[0,0],[0,0]])); // 2
console.log(maxPoints([[0,0],[1,1],[1,-1]])); // 2
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2]])); // 3
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2]])); // 4
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2]])); // 5
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2],[2,2]])); // 6
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2],[2,2],[2,2]])); // 7
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]])); // 8
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]])); // 9
console.log(maxPoints([[0,0],[1,1],[1,-1],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]])); // 10