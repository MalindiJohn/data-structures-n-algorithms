function maximalRectangle(matrix: string[][]): number {

    if (matrix.length === 0) {
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

function largestRectangleArea(heights: number[]): number {

    let stack: number[] = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            let height = heights[stack.pop()!];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;

};

// testing the function
console.log(maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
])); // expected 9

console.log(maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '0']
])); // expected 10