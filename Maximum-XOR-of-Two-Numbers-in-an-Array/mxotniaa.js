/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {

    let max = 0;
    let mask = 0;
    
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        const set = new Set();
        for (const num of nums) {
            set.add(num & mask);
        }
        const temp = max | (1 << i);
        for (const prefix of set) {
            if (set.has(temp ^ prefix)) {
                max = temp;
                break;
            }
        }
    }
    
    return max;
    
};