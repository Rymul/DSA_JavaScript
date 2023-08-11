// 83. Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
    if(!head) return head;
    let current = head;
    while(current.next !== null){
        let nextNode = current.next;
        if(current.val === nextNode.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};


// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
    return nums1
};

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3
console.log(merge(nums1, m, nums2, n))


// 94. Binary Tree Inorder Traversal

var inorderTraversal = function(root) {    
    if(!root) return [];
    let left = inorderTraversal(root.left);
    left.push(root.val)
    let right = inorderTraversal(root.right);
    return left.concat(right);
};


// 100. Same Tree

var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }
    if(p===null || q===null){
        return false
    }
    if(p.val !== q.val){
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right,q.right);
};


// 101. Symmetric Tree

var isSymmetric = function(root) {
    if(!root) return true;
    return dfs(root.left, root.right);
};

const dfs = (left, right) => {
    if(!left && !right) return true;
    if(left && !right || !left && right || left.val !== right.val) {
            return false;
    }
    return dfs(left.right, right.left) && dfs(left.left, right.right); 
};


// 104. Maximum Depth of Binary Tree

var maxDepth = function(root) {
    if(root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


// 112. Path Sum

var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    targetSum -= root.val;

    if(!root.left && !root.right) return targetSum === 0;
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum) 
};


// 118. Pascal's Triangle

var generate = function(numRows) {
    let res = []
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1))
        for (j = 0; j <= i; j++){
            if (j === 0 || j === i) {
                res[i][j] = 1
            } else {
                res[i][j] = res[i - 1][j - 1] + res[ i - 1][j]
            }
        }
    }
    return res
};

console.log(generate(5))


// 136. Single Number

var singleNumber = function(nums) {
    let res;
    
    for (let i = 0; i < nums.length; i++){
        res ^=nums[i]
    }
    return res
};

console.log(singleNumber([4,1,2,1,2]))


// 14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    let res = "";
    if (strs.length === 0) return res;
    
    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i];
        
        for(let j = 1; j < strs.length; j++) {
            if(char !== strs[j][i]) {
                return res;
            }
        }
        res = res + char;
    }
    return res;
};


console.log(longestCommonPrefix(["flower","flow","flight"]))


// 20. Valid Parentheses

var isValid = function(s) {
    const stack = [];
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for (let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        } else {
            if (stack[stack.length-1] === map[s[i]] ) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"))
console.log(isValid("(}"))


// 21. Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) {
    let current = new ListNode(-1);
    let tempHead = current;
    
    while(list1 || list2) {
        if(list1 === null || (list2 !== null && list1.val >= list2.val)){
            current.next = list2
            current = current.next
            list2 = list2.next
        } else {
            current.next = list1
            current = current.next
            list1 = list1.next
        }    
    }
    return tempHead.next
};


// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if(nums[i] === nums[i+1]){
            nums.splice(i, 1);
        } else {
            i++
        }
    }
    return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


// 69. Sqrt(x)

var mySqrt = function(x) {
    let sqrt = 0
    
    for(let i = 1; i * i <= x; i++){
        sqrt = i
    }
    return sqrt
};

console.log(mySqrt(36))
console.log(mySqrt(37))


// 70. Climbing Stairs

var climbStairs = function(n) {
    let arr = [0,1,2]
    
    for(let i = 3; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
};

console.log(climbStairs(3))
console.log(climbStairs(5))