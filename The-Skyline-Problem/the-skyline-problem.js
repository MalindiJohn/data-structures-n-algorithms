/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {

    let points = [];
    for (let building of buildings) {
        let [left, right, height] = building;
        points.push([left, height]);
        points.push([right, -height]);
    }
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    let result = [];
    let pq = new PriorityQueue((a, b) => b - a);
    pq.push(0);
    let prev = 0;
    for (let point of points) {
        let [x, h] = point;
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