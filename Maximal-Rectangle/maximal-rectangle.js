/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {

    if (!matrix.length) {
        return 0;
    }

    let maxArea = 0;
    let heights = Array(matrix[0].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
    
};

// largest rectangle area function
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