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

