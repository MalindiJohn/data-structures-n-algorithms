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