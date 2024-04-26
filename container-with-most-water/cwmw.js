/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let max = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i < j) {
        const h = Math.min(height[i], height[j]);
        const w = j - i;
        max = Math.max(max, h * w);
        
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return max;
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1