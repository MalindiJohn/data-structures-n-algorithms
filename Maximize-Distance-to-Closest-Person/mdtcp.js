/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {

    let max = 0;
    let prev = -1;
    let next = 0;
    
    for (let i = 0; i < seats.length; i++) {
        
        if (seats[i] === 1) {
            prev = i;
        } else {
            while (next < seats.length && seats[next] === 0 || next < i) {
                next++;
            }
            
            let left = prev === -1 ? seats.length : i - prev;
            let right = next === seats.length ? seats.length : next - i;
            
            max = Math.max(max, Math.min(left, right));
        }
    }
    
    return max;
    
};

console.log(maxDistToClosest([1,0,0,0,1,0,1])); // 2
console.log(maxDistToClosest([1,0,0,0])); // 3