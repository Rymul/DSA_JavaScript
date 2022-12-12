/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for( let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        } else {
            if(stack[stack.length - 1] === map[s[i]]){
                stack.pop()
            } else if(s[i] !== ")" || s[i] !== "}" || s[i] !== "]") {
                continue;
            }    
            else {
                return false;
            }
        }
    }
    return stack.length === 0
 }

 let s = "()[]{}"
 console.log(isValid(s))


 let a = "({[abc]})"
 console.log(isValid(a))






/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const shorter = Math.min(height[right], height[left]);
        const area = (right - left) * shorter;
        if(area > maxWater) maxWater = area;

        height[left] >= height[right] ? right-- : left++;
    }
    return maxWater;
};

let h = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(h))

let w = [1,1]
console.log(maxArea(w))
 



/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let left = 0;
    let total = 0;
    let res = Infinity;

    for (let right = 0; right < nums.length; right++){
        total += nums[right];

        while(total >= target){
            res = Math.min(right-left+1, res)
            total -= nums[left]
            left++;
        }
    }
    return res === Infinity ? 0 : res;
};

let t = 7
let n = [2,3,1,2,4,3]
console.log(minSubArrayLen(t, n))

let target = 11
let array = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(target, array))