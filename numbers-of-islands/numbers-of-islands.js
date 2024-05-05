/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    
    return count;
    
};