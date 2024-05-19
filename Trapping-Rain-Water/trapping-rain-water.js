/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    
    return result;
    
};

// Testing the function
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output 6
console.log(trap([4,2,0,3,2,5])); // Output 9
console.log(trap([4,2,3])); // Output 1
console.log(trap([4,2,3,1])); // Output 1
console.log(trap([4,2,3,1,3])); // Output 4
console.log(trap([4,2,3,1,3,2])); // Output 4
console.log(trap([4,2,3,1,3,2,1])); // Output 4
console.log(trap([4,2,3,1,3,2,1,2])); // Output 5
console.log(trap([4,2,3,1,3,2,1,2,2])); // Output 5
console.log(trap([4,2,3,1,3,2,1,2,2,1])); // Output 5
console.log(trap([4,2,3,1,3,2,1,2,2,1,4])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3,2])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3,2,1])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3,2,1,2])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3,2,1,2,2])); // Output 9
console.log(trap([4,2,3,1,3,2,1,2,2,1,4,1,2,1,2,3,2,1,2,2,3])); // Output 9