/**
 * 200. Number of Islands
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
    let visited = new Set();

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(dfs(grid, row, col, visited)) count++;
        }
    }
    return count
};

const dfs = (grid, row, col, visited) => {
    if(!inBounds(grid, row, col)) return false;
    const pos = row + "," + col;
    if(visited.has(pos)) return false;
    if(grid[row][col] === "0") return false;

    visited.add(pos);

    const directions = [[1,0], [0,1], [-1,0], [0,-1]]

    for (let dir of directions) {
        const newRow = row+dir[0];
        const newCol = col+dir[1];

        dfs(grid, newRow, newCol, visited);
    }
    return true;
}

const inBounds = (grid, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
}

let g = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

console.log(numIslands(g))
console.log(1, "expected output")

let w = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

console.log(numIslands(w))
console.log(3, "expected output")