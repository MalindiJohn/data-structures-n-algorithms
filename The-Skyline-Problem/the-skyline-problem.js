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

class PriorityQueue {
    
    constructor(compare) {
        this.compare = compare;
        this.values = [];
    }
    
    push(val) {
        this.values.push(val);
        this.values.sort(this.compare);
    }
    
    delete(val) {
        let index = this.values.indexOf(val);
        this.values.splice(index, 1);
    }
    
    peek() {
        return this.values[0];
    }
    
}

// testing the function
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
// [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
console.log(getSkyline([[0,2,3],[2,5,3]])); // [[0,3],[5,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3]])); // [[1,3],[2,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1]])); // [[1,3],[3,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1],[2,3,2]])); // [[1,3],[3,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1],[2,3,2],[2,3,3]])); // [[1,3],[3,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1],[2,3,2],[2,3,3],[3,4,1]])); // [[1,3],[3,0],[4,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1],[2,3,2],[2,3,3],[3,4,1],[3,4,2]])); // [[1,3],[3,2],[4,0]]
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3],[2,3,1],[2,3,2],[2,3,3],[3,4,1],[3,4,2],[3,4,3]])); // [[1,3],[3,3],[4,0]]