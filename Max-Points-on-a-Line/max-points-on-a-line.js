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