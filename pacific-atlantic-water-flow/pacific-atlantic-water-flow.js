/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

    if (!heights || heights.length === 0 || heights[0].length === 0) {
        return [];
    }

    const rows = heights.length;
    const cols = heights[0].length;
    const pacific = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    const atlantic = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    const result = [];

    const dfs = (r, c, ocean) => {
        ocean[r][c] = true;
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || ocean[newRow][newCol] || heights[newRow][newCol] < heights[r][c]) {
                continue;
            }
            dfs(newRow, newCol, ocean);
        }
    };

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific);
        dfs(r, cols - 1, atlantic);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific);
        dfs(rows - 1, c, atlantic);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
    
};

// Testing the function 
const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(heights)); // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(pacificAtlantic([[1]]))

// Time Complexity: O(M * N), where M is the number of rows and N is the number of columns in the heights matrix.
// Space Complexity: O(M * N), where M is the number of rows and N is the number of columns in the heights matrix.
