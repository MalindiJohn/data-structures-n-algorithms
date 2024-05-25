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
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // expected 10
console.log(largestRectangleArea([2, 4])); // expected 4
console.log(largestRectangleArea([4, 2])); // expected 4
console.log(largestRectangleArea([4])); // expected 4
console.log(largestRectangleArea([])); // expected 0
console.log(largestRectangleArea([2, 1, 2])); // expected 3
console.log(largestRectangleArea([2, 1, 2, 1])); // expected 3
console.log(largestRectangleArea([2, 1, 2, 1, 2])); // expected 5
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1])); // expected 5
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2])); // expected 6
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2, 1])); // expected 6
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2, 1, 2])); // expected 6
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2, 1, 2, 1])); // expected 6
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])); // expected 10
console.log(largestRectangleArea([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1])); // expected 10