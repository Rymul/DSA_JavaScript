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

//Time complexity O(m * n) where m = rows and n = cols
//Space complexity O(m * n)



/**
 * 417. Pacific Atlantic Water Flow
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. 
 * The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 * The island is partitioned into a grid of square cells. 
 * You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. 
 * Water can flow from any cell adjacent to an ocean into the ocean.
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const pacific = new Set();
    const atlantic = new Set();
    const [ROWS, COLS] = [heights.length, heights[0].length];

    const dfs = (row, col, visited, prevHeight) => {
        const pos = row +","+ col;
        if(visited.has(pos) || !inGridBounds(heights, row, col) || heights[row][col] < prevHeight) {
            return
        }

        visited.add(pos);
        const directions = [[1,0], [0,1], [-1,0], [0,-1]];
        for(let dir of directions) {
            const newRow = row+dir[0];
            const newCol = col+dir[1];
            dfs(newRow, newCol, visited, heights[row][col]);
        }
    }

    for(let col=0; col < COLS; col++){
        dfs(0, col, pacific, heights[0][col]);
        dfs(ROWS-1, col, atlantic, heights[ROWS-1[col]]);
    }

    for(let row = 0; row < ROWS; row++){
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, COLS-1, atlantic, heights[row][COLS-1]);
    }
    let res = [];

    for(let pacificCoord of pacific){
        if(atlantic.has(pacificCoord)){
            const coord = pacificCoord.split(",");
            res.push(coord)
        }
    }

    return res;
};

const inGridBounds = (grid, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
}

let e = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(e))
console.log([[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]], "expected output")

let m = [[1]]
console.log(pacificAtlantic(m))
console.log([[0,0]], "expected output")