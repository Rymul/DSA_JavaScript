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




/**
 * 35. Search Insert Position
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0
    for(i=0; i < nums.length; i++){
        if(nums[i] === target) {
            return i
        } else if(nums[i] < target && target < nums[i+1]) {
            return i+1
        } else if (i === nums.length-1) {
            return nums.length
        }
    }
};

let nums1 = [1,3,5,6]
let target1 = 5
console.log(searchInsert(nums1, target1))
console.log(2, "expected output")




/**
 * 724. Find Pivot Index
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. 
 * This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let totalSum = 0
    for(let i = 0; i < nums.length; i++) totalSum += nums[i]
    
    let leftSum = 0
    for(let j = 0; j < nums.length; j++) {
        if(leftSum === (totalSum - nums[j] - leftSum)) return j
        leftSum += nums[j]
    }
    return -1
};

let nums2 = [1,7,3,6,5,6]
console.log(pivotIndex(nums2))
console.log(3, "expected output")