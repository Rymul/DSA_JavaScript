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


// 389. Find the Difference

var findTheDifference = function(s, t) {
   s = s.split("").sort();
   t = t.split("").sort();
   
   for(let i = 0; i < s.length; i++){
       if( s[i] !== t[i]) {
           return t[i]
       }
   }
   return t[t.length -1] 
};


// 409. Longest Palindrome

 var longestPalindrome = function(s) {
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
      m.set(s[i], m.get(s[i]) + 1 || 1);
  }
  let numOfOdds = 0;
  for (let value of m.values()) {
      if (value % 2 === 1) {
          numOfOdds += 1;
      }
  }
  return numOfOdds > 0 ? s.length - numOfOdds + 1 : s.length;
};


// 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let current = res;
    let carry = 0

    while(l1 || l2 || carry){
        let sum = carry;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next
    }
    return res.next;
};


// 482. License Key Formatting

var licenseKeyFormatting = function(s, k) {
    s = s.replaceAll('-', '').toUpperCase().split('');
    for(let i = s.length - k; i >0; i -= k){
        s[i] = `-${s[i]}`
    }
    return s.join('');
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting("2-5g-3-J", 2))


// 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current = (nums[i] === 0) ? 0 : current + 1
        max = (current > max) ? current : max
    }
    return max
};

console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1,0,1,1]))


// 492. Construct the Rectangle

var constructRectangle = function(area) {
    let w = parseInt(Math.sqrt(area))
    while(!Number.isInteger(area/w)) w--
    return [area/w, w]
};

console.log(constructRectangle(4))
console.log(constructRectangle(83))


// 496. Next Greater Element I

var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }
        stack.push(num)
    }
    return nums1.map(num => map[num] || -1)
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))


// 500. Keyboard Row

var findWords = function(words) {
    const row1 = new Set('qwertyuiop');
    const row2 = new Set('asdfghjkl');
    const row3 = new Set('zxcvbnm');
    const res = [];

    for (let word of words) {
        if (canType(word, row1) || canType(word, row2) || canType(word, row3)) res.push(word);
    }
    
    return res;

    function canType(word, row) {
        for (let char of word) {
            if (!row.has(char.toLowerCase())) return false;
        }
        return true
    }    
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))


// 637. Average of Levels in Binary Tree

var averageOfLevels = function(root) {
    const sum = [];
const count = []
const traverse = (node, i) => {
    if(sum[i] === undefined) sum[i] = 0;
    if(count[i] === undefined) count[i] = 0;
    sum[i] += node.val;
    count[i]++;
    if(node.left) traverse(node.left, i + 1);
    if(node.right) traverse(node.right, i + 1)
}
traverse(root, 0)
for(let i = 0; i < sum.length; i++){
    sum[i] = sum[i] / count[i]
}
return sum;
};


// 222. Count Complete Tree Nodes

var countNodes = function(root) {
    if (root == null) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};


// 231. Power of Two

var isPowerOfTwo = function(n) {
    if (n == 0) return false;
    while (n != 1) {
        if (n%2 != 0) return false;
        n = n/2;
    }
    return true
};

console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))


// 234. Palindrome Linked List

var isPalindrome = function(head) {
    let s1 = s2 = '';
    let node = head;
    while (node != null) {
        s1 = `${s1}${node.val}`;
        s2 = `${node.val}${s2}`;
        node = node.next;
    }
    return s1 === s2;
};


// 404. Sum of Left Leaves

var sumOfLeftLeaves = function(root, isLeft) {
    if (!root) return 0
    if (!root.left && !root.right && isLeft) return root.val
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
};


// 414. Third Maximum Number

var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b) => b-a);
    return (nums.length <= 2)? nums[0] : nums[2];
};

console.log(thirdMax([1,2]))
console.log(thirdMax([2,2,3,1]))


// 5. Longest Palindromic Substring

var longestPalindrome = function(s) {
    let longest = '';
    const findLongestPalindrome = (str, i, j) => {
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        const cur1 = findLongestPalindrome(s, i, i);
        const cur2 = findLongestPalindrome(s, i, i + 1);
        const longer = cur1.length > cur2.length ? cur1 : cur2;
        if (longer.length > longest.length) {
            longest = longer;
        }
    }
    return longest;
};

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))


// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right ++;
    }
    return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))


// 217. Contains Duplicate

var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length
};

console.log(containsDuplicate([1,2,3,4,1]))
console.log(containsDuplicate([1,2,3,4,5]))


// 242. Valid Anagram

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counter = []
    for (let c of s) {
        counter[c] = counter[c] ? counter[c] + 1 : 1
    }
    for (let c of t) {
        if (!counter[c]) return false;
        counter[c] --;
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("dog", "cat"))


// 605. Can Place Flowers

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            n--;
            i++;
        }
    }
    return n === 0
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))


// 824. Goat Latin

var toGoatLatin = function(sentence) {
    const vowels = 'aeiouAEIOU'
    const arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i ++) {
        let word = arr[i];
        const first = word[0];
        if (!vowels.includes(first)) {
            word = word.slice(1) + first
        }
        word += 'ma'
        for (let j = -1; j < i; j++) {
            word += 'a'
        }
        arr[i] = word
    }
    return arr.join(' ')
};

console.log(toGoatLatin('I speak Goat Latin'))
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'))


// 860. Lemonade Change

var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 5) five++;
        else if (bill === 10) {
            ten++;
            if (five === 0) return false;
            else five--;
        } else {
            let change = 15;
            if (ten > 0) {
                ten--;
                change -= 10;
            }
            while (change > 0) {
                five--;
                if (five < 0) return false;
                change -= 5
            }
        }
    }
    return true
};

console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange([5,5,10,10,20]))


// 867. Transpose Matrix

var transpose = function(matrix) {
    let res = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let col = [];
        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
        }
        res.push(col);
    }
    return res;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
console.log(transpose([[1,4],[2,5],[3,6]]))


// 876. Middle of the Linked List

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
