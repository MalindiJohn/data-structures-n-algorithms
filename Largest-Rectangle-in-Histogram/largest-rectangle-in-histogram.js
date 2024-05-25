/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        let currentHeight = i === heights.length ? 0 : heights[i];

        while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
    
};

// testing the function
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
console.log(largestRectangleArea([2,4])); // 4
console.log(largestRectangleArea([4,2])); // 4
console.log(largestRectangleArea([2,1,2])); // 3
console.log(largestRectangleArea([1,2,2])); // 3
console.log(largestRectangleArea([2,2,1])); // 4
console.log(largestRectangleArea([2,2,2])); // 6
console.log(largestRectangleArea([2,2,2,2])); // 8
console.log(largestRectangleArea([2,2,2,2,2])); // 10
console.log(largestRectangleArea([2,2,2,2,2,2])); // 12
console.log(largestRectangleArea([2,2,2,2,2,2,2])); // 14
console.log(largestRectangleArea([2,2,2,2,2,2,2,2])); // 16
console.log(largestRectangleArea([2,2,2,2,2,2,2,2,2])); // 18
console.log(largestRectangleArea([2,2,2,2,2,2,2,2,2,2])); // 20
console.log(largestRectangleArea([2,2,2,2,2,2,2,2,2,2,2])); // 22
console.log(largestRectangleArea([2,2,2,2,2,2,2,2,2,2,2,2])); // 24