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


// 108. Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function(nums) {
    if(nums.length === 1) return new TreeNode(nums[0]);
    if(nums.length === 0) return null;
    
    let middleIdx = Math.floor(nums.length/2);
    let root = new TreeNode(nums[middleIdx]);

    let left = nums.slice(0, middleIdx);
    root.left = sortedArrayToBST(left);
    let right = nums.slice(middleIdx+1, nums.length);
    root.right = sortedArrayToBST(right);

    return root;
};


// 58. Length of Last Word

var lengthOfLastWord = function(s) {
    let words = s.split(" ");
    let i = words.length - 1
    while (i >= 1){
        if (words[i] !== ""){
            break;
        } 
        i--
    }
    return words[i].length
};

console.log(lengthOfLastWord('Hello World'))


// 141. Linked List Cycle

var hasCycle = function(head) {
    if(head === null || head.next === null) return false;
    let [slow, fast] = [head, head];

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
};


// 205. Isomorphic Strings

var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) return false;
    let countS = {};
    let countT = {};
    let res = true
    
    for( i = 0; i < s.length; i++) {
        if(!countS[ s[i] ] && !countT[ t[i] ]){
            countS[ s[i] ] = t[i];
            countT[ t[i] ] = s[i];
        } else if ( countS[ s[i] ] !== t[i] || countT[ t[i] ] !== s[i]) {
            res = false;
        }
    }
    return res;
}

console.log(isIsomorphic('egg', 'add'))


// 206. Reverse Linked List

var reverseList = function(head) {
    
    if(head === null) return head;
    let node = head
    let prev = null
    
    while (node) {
        let temp = node.next
        node.next = prev
        prev = node
        node = temp
    }
    return prev
};


// 219. Contains Duplicate II

var containsNearbyDuplicate = function(nums, k) {
    let count = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (i - count[nums[i]] <= k) {
            return true;
        } else {
            count[nums[i]] = i;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))


// 226. Invert Binary Tree

var invertTree = function(root) {
    if(!root) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};


// 344. Reverse String

var reverseString = function(s) {
    for (let i = 0; i < s.length/2; i++) {
        let temp = s[i]
        s[i] = s[s.length-i-1]
        s[s.length-i-1] = temp
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]))


// 169. Majority Element

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

console.log(majorityElement([1,1,2,2,2,3]))


// 202. Happy Number

var isHappy = function(n) {
    let slow = n;
    let fast = n;
    
    while (true) {
        slow = sq(slow);
        fast = sq(sq(fast));
        if (slow === fast) break;
    }
    return slow === 1
};

function sq(num){
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(isHappy(10))


// 392. Is Subsequence

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    
    while(i < s.length) {
        if(j === t.length ) return false;
        if(s[i] === t[j]) {
            i++;
        }
        j++
    }
    return true;
};

console.log(isSubsequence("abc", "ahbgdc"))


// 412. Fizz Buzz

var fizzBuzz = function(n) {
    let ans = []
    for (let i = 1; i <= n; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            ans[i] = "FizzBuzz"
        } else if (i % 3 === 0){
            ans[i] = "Fizz"
        } else if (i % 5 === 0 ){
            ans[i] = "Buzz"
        } else {
            ans[i] = `${i}`
        }
    }
    ans.shift()
    return ans;
};

console.log(fizzBuzz(5))


// 67. Add Binary

var addBinary = function(a, b) {
    const arrA = a.split("").reverse();
    const arrB = b.split("").reverse();
    let carry = 0;
    let answer = [];
    let i = 0;
    const len = a.length > b.length ? a.length : b.length;

  while (i < len) {
    const x = arrA[i] ? +arrA[i] : 0;
    const y = arrB[i] ? +arrB[i] : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 2);
    answer.unshift(sum % 2);
    i++;
  }

  if (carry > 0) answer.unshift(carry);

  return answer.join("");
};