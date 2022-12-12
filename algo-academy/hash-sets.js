/**
 * Set Matrix Zeroes
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.
 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();

    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[0].length; c++){
            if(matrix[r][c] === 0){
                rows.add(r);
                cols.add(c);
            }
        }
    }

    for (let r = 0; r < matrix.length; r++){
        for (let c = 0; c < matrix[0].length; c++){
            if(rows.has(r) || cols.has(c)){
                matrix[r][c] = 0;
            }
        }
    }
    return matrix;
};

let m = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(m))
console.log([[1,0,1],[0,0,0],[1,0,1]], "Expected Output" )

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeroes(matrix))
console.log([[0,0,0,0],[0,4,5,0],[0,3,1,0]], "Expected Output" )



/**
 * Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const anagrams = {};

    for(let word of strs) {
        const key = letterCount(word);
        if(!anagrams[key]) anagrams[key] = [];
        anagrams[key].push(word);
    }

    return Object.values(anagrams);
};

const letterCount = function(word){
    const key = new Array(26).fill(0);

    for(let i = 0; i < word.length; i++){
        const charCode = word.charCodeAt(i) - "a".charCodeAt(0);
        key[charCode]++;
    }
    return key;
}


let s = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(s))
console.log([["bat"],["nat","tan"],["ate","eat","tea"]], "Expected Output" )



/**
 * Valid Sudoku
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */



/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    
    let row = {};
    let col = {};
    let box = {};

    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[0].length; c++){
            let currentVal = board[r][c];
            if(currentVal === ".") continue;

            const boxPos = `${Math.floor(r/3)}, ${Math.floor(c/3)}`;

            if(!row[r]) row[r] = new Set();
            if(!col[c]) col[c] = new Set();
            if(!box[boxPos]) box[boxPos] = new Set();

            if(row[r].has(currentVal) || col[c].has(currentVal) || box[boxPos].has(currentVal)) return false;

            row[r].add(currentVal);
            col[c].add(currentVal);
            box[boxPos].add(currentVal);

        }
    }
    return true

};

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
console.log(true, "Expected Output")

let b = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(b))
console.log(false, "Expected Output")