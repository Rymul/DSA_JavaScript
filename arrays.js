/**
 * 169. Majority Element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort()
    let res = []
    let count = 1
    let max = 0
    
    if(nums.length === 1) return nums[0]
    
    for( let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            count++
        } else {
            count=1
        }
        if(max < count){
            res.push(nums[i])
            max = count
        }
    } 
    return res[res.length-1]
    
};

let numbers1 = [3,2,3]
console.log(majorityElement(numbers1))
console.log(3, "expected output")

let numbers2 = [2,2,1,1,1,2,2]
console.log(majorityElement(numbers2))
console.log(2, "expected output")