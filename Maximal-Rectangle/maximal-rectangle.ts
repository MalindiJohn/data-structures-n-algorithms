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

};