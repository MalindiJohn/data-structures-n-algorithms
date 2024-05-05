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

function dfs(grid, i, j) {
    
    //if i or j is out of bounds or the current cell is water, return
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
        return;
    }

    // mark the current cell as visited
    grid[i][j] = '0';

    // visit the neighbors of the current cell
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
}



// testing the function
console.log(numIslands([
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
])); // 1
console.log(numIslands([
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
])); // 3
