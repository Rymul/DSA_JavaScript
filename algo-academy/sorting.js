/**
 * 75. Sort Colors
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const count = new Array(3).fill(0)
    for(let color of nums){
        count[color]++;
    }

    let idx = 0
    for(let i = 0; i < count.length; i++){
        for(let j = 0; j < count[i]; j++){
            nums[idx] = i;
            idx++;
        }
    }
    return nums;
};

//Used Bucket sort

let nums = [2,0,2,1,1,0]
console.log(sortColors(nums))
console.log([0,0,1,1,2,2], "Expected Output")


let n = [2,0,1]
console.log(sortColors(n))
console.log([0,1,2], "Expected Output")
