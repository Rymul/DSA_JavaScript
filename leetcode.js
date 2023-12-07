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


// 892. Surface Area of 3D Shapes

var surfaceArea = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let sum = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] > 0) sum += grid[i][j] * 4 + 2;
            if (i > 0) sum -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
            if (j > 0) sum -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
        }
    }
    return sum;
};

console.log(surfaceArea([[1,2],[3,4]]))
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]))


// 495. Teemo Attacking


var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;
    let res = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        res += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
    }
    return res;
};

console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))


// 203. Remove Linked List Elements

var removeElements = function(head, val) {
    if (!head) return head;
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    let cur = head;
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next
        }
    }
    return head;
};


// 228. Summary Ranges

var summaryRanges = function(nums) {
    const res = [];
    let i = 0;
    while (i < nums.length) {
        let beg = nums[i];
        let last;
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) i++
        last = nums[i];
        if (beg === last) {
            res.push(beg + '');
        } else {
            res.push(beg + '->' + last);
        }
        i++

    }
    return res;
};

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))


// 257. Binary Tree Paths

var binaryTreePaths = function(root) {
    let res = [];

    const dfs = (root, cur) => {
        if (!root) return;
        if (!root.left && !root.right) {
            res.push(cur + root.val);
            return;
        }
        dfs(root.left, cur + root.val + '->');
        dfs(root.right, cur + root.val + '->');
    }
    dfs(root, '')
    return res;
};


// 258. Add Digits

var addDigits = function(num) {
    let res = Infinity;
    if (num === 0) return 0;
    while (true) {
        if (res < 10) return res;
        digit = (num % 10) + Math.floor(num / 10);
        res = digit;
        num = digit
    }
};

console.log(addDigits(38))
console.log(addDigits(0))


// 1051. Height Checker

var heightChecker = function(heights) {
    let unExpected = 0
    let sorted = [...heights]
    sorted.sort((a,b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != sorted[i]) {
            unExpected += 1;
        }
    }
    return unExpected;
};

console.log(heightChecker([1,1,4,2,1,3]))
console.log(heightChecker([1,2,3,4,5]))


// 1089. Duplicate Zeros

var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            arr.splice(i,0,0);
            arr.pop();
            i += 1;
        }
    }
    return arr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
console.log(duplicateZeros([1,2,3]))


// 1122. Relative Sort Array

var relativeSortArray = function(arr1, arr2) {
    res = [];
    for (let i = 0; i < arr2.length; i++) {
        res = res.concat(arr1.filter((j) => j === arr2[i]));
        arr1 = arr1.filter((j) => j !== arr2[i]);
    }
    return res.concat(arr1.sort((a,b) => a - b));
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))


// 1002. Find Common Characters

var commonChars = function(words) {
    const res = [];
    const word = [...words[0]];

    for (let letter of word) {
        if (words.every(word => word.includes(letter))) {
            res.push(letter);
            words = words.map(word => word.replace(letter, ''))
        }
    }
    return res
};

console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))


// 657. Robot Return to Origin

var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }
    }
    return x === 0 && y === 0;
};

console.log(judgeCircle('UD'))
console.log(judgeCircle('RR'))


// 671. Second Minimum Node In a Binary Tree

var findSecondMinimumValue = function(root) {
    if (!root) return -1;
    const min1 = root.val;
    let min2 = Infinity;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (min1 < node.val && node.val < min2) min2 = node.val;
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return min2 === Infinity ? -1 : min2;
};


// 674. Longest Continuous Increasing Subsequence

var findLengthOfLCIS = function(nums) {
    if (nums.length < 2) return nums.length;
    let left = 0;
    let right = 0;
    let maxLength = 0;
    while (right < nums.length) {
        if (nums[right - 1] >= nums[right]) left = right;
        right++;
        maxLength = Math.max(right - left, maxLength);
    }
    return maxLength;
};

console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([3,3,3,3,3,3]))


// 746. Min Cost Climbing Stairs

var minCostClimbingStairs = function(cost) {
    let first = cost[0];
    let second = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let current = cost[i] + Math.min(first, second);
        first = second;
        second = current;
    }
    return Math.min(first, second);
};

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))


// 747. Largest Number At Least Twice of Others

var dominantIndex = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
            res = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }
    return first >= second * 2 ? res : -1;
};

console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([1,2,3,4]))


// 771. Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        obj[jewels[i]] = true;
    }
    for (let j = 0; j < stones.length; j++) {
        if (obj[stones[j]]) {
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))


// 680. Valid Palindrome II

var validPalindrome = function(s) {
    let low = 0;
    let high = s.length - 1;
    while (low < high) {
        if (s[low] !== s[high]) {
            return validPalindromeHelper(s, low + 1, high) || validPalindromeHelper(s, low, high - 1)
        }
        low++;
        high--;
    }
    return true
};

const validPalindromeHelper = (s, low, high) => {
    while (low < high) {
        if (s[low] !== s[high]) return false;
        low++;
        high--;
    }
    return true
}

console.log(validPalindrome('abca'))
console.log(validPalindrome('abc'))


// 572. Subtree of Another Tree

var isSubtree = function(root, subRoot) {
    if (!root) return !subRoot;
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSame = (root1, root2) => {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}


// 563. Binary Tree Tilt

var findTilt = function(root) {
    const tilt = { val : 0 };
    depthFirstSearch(root, tilt);
    return tilt.val
};

const depthFirstSearch = (root, tilt) => {
    if (!root) return 0;
    let left = depthFirstSearch(root.left, tilt);
    let right = depthFirstSearch(root.right, tilt);
    tilt.val += Math.abs(left - right);
    return root.val + left + right;
}


// 521. Longest Uncommon Subsequence I

var findLUSlength = function(a, b) {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length)
    }
};

console.log(findLUSlength('aba', 'cdc'))
console.log(findLUSlength('aba', 'aba'))


// 501. Find Mode in Binary Search Tree

var findMode = function(root) {
    const res = [];
    if (!root) return res;
    const obj = {};
    const queue = [root];
    let mode = 0;

    while (queue.length) {
        const cur = queue.shift();
        if (obj[cur.val]) {
            obj[cur.val] += 1;
        } else {
            obj[cur.val] = 1;
        }
        if (obj[cur.val] > mode) mode = obj[cur.val];
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }

    for (let num in obj) {
        if (obj[num] === mode) res.push(num);
    }    

    return res;
};


// 589. N-ary Tree Preorder Traversal

var preorder = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    for (let child of root.children) {
        preorder(child, res);
    }
    return res
};



// 590. N-ary Tree Postorder Traversal

var postorder = function(root, res = []) {
    if (!root) return res;
    for (let child of root.children) {
        postorder(child, res);
    }
    res.push(root.val);
    return res;
};



// 541. Reverse String II

var reverseStr = function(s, k) {
    const arr = s.split('')
    const k2 = k * 2
    for (let i = 0; i < arr.length -1; i += k2) {
        move(i, Math.min(i + k - 1, arr.length - 1));
    }
    return arr.join('');
    
    function move(start, end) {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
};

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))


// 575. Distribute Candies

var distributeCandies = function(candyType) {
    return Math.min(candyType.length / 2, new Set(candyType).size);
};

console.log(distributeCandies([1,1,2,2,3,3]))
console.log(distributeCandies([5,5,5,5]))


// 594. Longest Harmonious Subsequence

var findLHS = function(nums) {
    let map = {};
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
        if (map[nums[i] - 1]) maxLength = Math.max(maxLength, map[nums[i]] + map[nums[i] - 1]);
        if (map[nums[i] + 1]) maxLength = Math.max(maxLength, map[nums[i]] + map[nums[i] + 1]);
    }
    return maxLength;
};

console.log(findLHS([1,3,2,2,5,2,3,7]))
console.log(findLHS([1,1,1,1]))


// 599. Minimum Index Sum of Two Lists

var findRestaurant = function(list1, list2) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < list2.length; i++) {
        map.set(list2[i], i)
    }
    let i = 0;
    let min = Infinity;
    while (i < list1.length) {
        if (map.has(list1[i])) {
            let sum = i + map.get(list1[i]);
            if (min === sum) {
                res.push(list1[i]);
            } else if (sum < min) {
                res = [list1[i]];
                min = sum;
            }
        }
        i++;
    }
    return res;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))


// 728. Self Dividing Numbers

var selfDividingNumbers = function(left, right) {
    res = [];
    const selfDividing = (num) => {
        const s = num.toString();
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0' || num % parseInt(s[i])) return false;
        }
        return true;
    }

    for (i = left; i <= right; i++) {
        if (selfDividing(i)) {
            res.push(i)
        }
    }
    return res;
};

console.log(selfDividingNumbers(1, 22))
console.log(selfDividingNumbers(47, 85))



// 598. Range Addition II

var maxCount = function(m, n, ops) {
    let minRow = m;
    let minCol = n;

    for (let op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }
    return minRow * minCol;
};

console.log(maxCount(3, 3, [[2,2],[3,3]]))
console.log(maxCount(3, 3, [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]))


// 796. Rotate String

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal);
};

console.log(rotateString("abcde", "cdeab"))
console.log(rotateString("abcde", "abced"))


// 643. Maximum Average Subarray I

var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum); 
    }
    return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))


// 1071. Greatest Common Divisor of Strings

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    const divisor = (a,b) => (0 === b ? a : divisor(b, a % b));
    return str1.substring(0, divisor(str1.length, str2.length)); 
};

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("LEET", "CODE"))


// 1137. N-th Tribonacci Number

var tribonacci = function(n) {
    if (memo[n] !== undefined) return memo[n];
    return memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);   
};

const memo = {
    0: 0,
    1: 1,
    2: 1
};

console.log(tribonacci(4))
console.log(tribonacci(25))


// 263. Ugly Number

var isUgly = function(n) {
    if (n <= 0) return false;
    while (n != 1) {
        if (n % 2 === 0) {
            n /= 2
        } else if (n % 3 === 0) {
            n /= 3
        } else if (n % 5 === 0) {
            n /= 5
        } else {
            return false;
        }
    }
    return true;
};

console.log(isUgly(6))
console.log(isUgly(1))
console.log(isUgly(14))


// 506. Relative Ranks

var findRelativeRanks = function(score) {
    let rank = score.slice(0).sort((a,b) => b - a);
    return score.map((score, i) => {
        if (score === rank[0]) {
            return 'Gold Medal';
        } else if (score === rank[1]) {
            return 'Silver Medal';
        } else if (score === rank[2]) {
            return 'Bronze Medal';
        } else {
            return (rank.indexOf(score) + 1).toString();
        }
    })
};

console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))


// 682. Baseball Game

var calPoints = function(operations) {
    const stack = [];
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+': {
                const first = stack[stack.length - 2];
                const second = stack[stack.length - 1];
                stack.push(first + second);
                break;
            }
            case 'D': {
                const prev = stack[stack.length - 1];
                stack.push(prev * 2);
                break;
            }
            case 'C': {
                stack.pop();
                break;
            }
            default: {
                stack.push(Number(operations[i]));
                break;
            }
        }
    }
    return stack.reduce((prev, cur) => prev + cur, 0);
};

console.log(calPoints(["5","2","C","D","+"]))
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))


// 830. Positions of Large Groups

var largeGroupPositions = function(s) {
    let j = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            if (i - j + 1 >= 3) {
                res.push([j,i]);
            }
            j = i + 1;
        }
    }
    return res;
};

console.log(largeGroupPositions("abbxxxxzzy"))
console.log(largeGroupPositions("abc"))



// 938. Range Sum of BST

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    if (!root) return sum;
    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }
    if (root.val <= high && root.val >= low) {
        sum += root.val;
    }
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }
    return sum;
};


// 905. Sort Array By Parity

var sortArrayByParity = function(nums) {
    let res = [];
    nums.forEach(n => {
        n % 2 === 0 ? res.unshift(n) : res.push(n); 
    })
    return res;
};

console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([0]))



// 1160. Find Words That Can Be Formed by Characters

var countCharacters = function(words, chars) {
    let count = 0;
    for (let word of words) {
        let map = makeMap(chars);
        let isValid = true;
        for (let char of word) {
            if (map[char] > 0) {
                map[char] -= 1;
            } else {
                isValid = false;
            }
        }
        if (isValid) {
            count += word.length;
        }
    }
    return count;
};

const makeMap = (chars) => {
    let map = {};
    for (let i = 0; i < chars.length; i++) {
        if (!map[chars[i]]) {
            map[chars[i]] = 0;
        }
        map[chars[i]] += 1;
    }
    return map;
}

console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))


// 832. Flipping an Image

var flipAndInvertImage = function(image) {
    for (let row in image) {
        image[row] = image[row].reverse();
        image[row] = image[row].map(n => 1 - n);
    }
    return image  
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))



// 836. Rectangle Overlap

var isRectangleOverlap = function(rec1, rec2) {
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;
    
    return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1;
};


console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]))
console.log(isRectangleOverlap([0,0,1,1], [2,2,3,3]))



// 884. Uncommon Words from Two Sentences

var uncommonFromSentences = function(s1, s2) {
    let arr = [...s1.split(' '), ...s2.split(' ')];
    const obj = {};
    for (let i of arr) {
        if (i in obj) {
            obj[i] += 1;
        } else {
            obj[i] = 1;
        }
    }
    arr = []
    for (i in obj) {
        if (obj[i] === 1) {
            arr.push(i);
        }
    }
    return arr
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))


// 888. Fair Candy Swap

var fairCandySwap = function(aliceSizes, bobSizes) {
    let total = 0;
    const set = new Set();
    let sumAlice = 0;

    for (const num of aliceSizes) {
        total += num;
        sumAlice += num;
    }

    for (const num of bobSizes) {
        total += num;
        set.add(num);
    }
    
    const half = total / 2;

    for (const num of aliceSizes) {
        const remainder = sumAlice - num;
        const swap = half - remainder;
        if (set.has(swap)) {
            return [num, swap];
        }
    }
};

console.log(fairCandySwap([1,1], [2,2]))
console.log(fairCandySwap([2], [1,3]))



// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

var minPartitions = function(n) {
    return Math.max(...n)
};

console.log(minPartitions("32"))
console.log(minPartitions("82734"))
console.log(minPartitions("27346209830709182346"))



// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

var getTargetCopy = function(original, cloned, target) {
    if (original === null) {
        return null;
    }
    if (original === target) {
        return cloned;
    }
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)
};



// 1503. Last Moment Before All Ants Fall Out of a Plank

var getLastMoment = function(n, left, right) {
    let time = 0;
    for (let position of left) {
        time = Math.max(time, position);
    }
    for (let position of right) {
        time = Math.max(time, n - position);
    }
    return time;
};

console.log(getLastMoment(4, [4,3], [0,1]))
console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7]))



// 744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function(letters, target) {
    return letters.find(char => char > target) || letters[0];
};

console.log(nextGreatestLetter(["c","f","j"], "a"))
console.log(nextGreatestLetter(["x","x","y","y"], "z"))



// 806. Number of Lines To Write String

var numberOfLines = function(widths, s) {
    let lines = 1;
    let last = 0;
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const width = widths[s.charCodeAt(i) - base];
        last += width;
        if (last > 100) {
            lines++;
            last = width;
        }
    }
    return [lines, last];
};

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"))
console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"))



// 15. 3Sum

var threeSum = function(nums) {
    const res = [];
    if (nums.length < 3) return res;
    nums = nums.sort((a, b) => a - b);
    let target = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                res.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j + 1]) j++;
                while(nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }

        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))



// 7. Reverse Integer

var reverse = function(x) {
    let reversed = 0;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x !== 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    const res = sign * reversed;
    if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0;
    return res;
};

console.log(reverse(123))
console.log(reverse(-123))


// 844. Backspace String Compare

var backspaceCompare = function(s, t) {
    const backspace = (str) => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
               if (stack.length > 0) stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }
    return backspace(s) === backspace(t);
};

console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))



// 859. Buddy Strings

var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) {
        const set = new Set(s);
        return set.size < s.length
    }
    const diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i);
        if (diff.length > 2) return false;
    }
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};

console.log(buddyStrings('ab', 'ba'))
console.log(buddyStrings('ab', 'ab'))



// 821. Shortest Distance to a Character

var shortestToChar = function(s, c) {
    let res = [];
    let prev = Infinity;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) prev = i;
        res[i] = Math.abs(prev - i);
    }
    prev = Infinity;
    for (let i = s.length - 1; i >=0; i--) {
        if (s[i] === c) prev = i;
        res[i] = Math.min(res[i], prev - i);
    }
    return res;
};


console.log(shortestToChar("loveleetcode", "e"))
console.log(shortestToChar("aaab", "b"))



// 908. Smallest Range I

var smallestRangeI = function(nums, k) {
    let diff = 0;
    let arr = new Array(2);
    if (nums.length === 1) return diff;
    arr[0] = Math.max(...nums) - k;
    arr[1] = Math.min(...nums) + k;
    diff = arr[0] - arr[1];
    return diff < 0 ? 0 : diff;
};

console.log(smallestRangeI([0, 10], 2))
console.log(smallestRangeI([1, 3, 6], 3))



// 766. Toeplitz Matrix

var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i + 1][j + 1] !== matrix[i][j]) return false;
        }
    }
    return true;
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
console.log(isToeplitzMatrix([[1,2],[2,2]]))



// 17. Letter Combinations of a Phone Number

var letterCombinations = function(digits) {
    const phoneDigits = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",'6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"} 
    let res = [];
    if (!digits) return res;
    const dfs = (pos, str) => {
        if (pos === digits.length) {
            res.push(str);
        } else {
            let letters = phoneDigits[digits[pos]];
            for (let i = 0; i < letters.length; i++) {
                dfs(pos + 1, str + letters[i])
            }
        }
    }
    dfs(0, "")
    return res;
};

console.log(letterCombinations("23"))
console.log(letterCombinations("2"))



// 19. Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    for (i = 0; i < n; i++) {
        fast = fast.next
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};



// 2545. Sort the Students by Their Kth Score

var sortTheStudents = function(score, k) {
    score.sort((a,b) => b[k] - a[k]);
    return score;
};

console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2))
console.log(sortTheStudents([[3,4],[5,6]], 0))



// 2161. Partition Array According to Given Pivot

var pivotArray = function(nums, pivot) {
    let res = [];
    let i = 0;
    let j = nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    while (i < nums.length) {
        if (nums[i] < pivot) res[left++] = nums[i];
        if (nums[j] > pivot) res[right--] = nums[j];
        i++;
        j--;
    }
    while(left <= right) {
        res[left++] = pivot
    }
    return res;
};

console.log(pivotArray([9,12,5,10,14,3,10], 10))
console.log(pivotArray([-3,4,3,2], 2))



// 807. Max Increase to Keep City Skyline

var maxIncreaseKeepingSkyline = function(grid) {
    let res = 0;
    let rMax = new Array(grid.length).fill(0);
    let cMax = new Array(grid.length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            rMax[i] = Math.max(rMax[i], grid[i][j]);
            cMax[j] = Math.max(cMax[j], grid[i][j]);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            res += Math.min(rMax[i], cMax[j]) - grid[i][j];
        }
    }
    return res;
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))
console.log(maxIncreaseKeepingSkyline([[0,0,0],[0,0,0],[0,0,0]]))



// 922. Sort Array By Parity II

var sortArrayByParityII = function(nums) {
    let res = [];
    let even = 0;
    let odd = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res[even] = nums[i];
            even = even + 2;
        } else {
            res[odd] = nums[i];
            odd = odd + 2;
        }
    }
    return res;
};

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))



// 78. Subsets

var subsets = function(nums) {
    let res = [];
    let temp = [];
    let i = 0;

    function generatePowerSet(nums, i, temp) {
        if (i === nums.length) {
            res.push(temp);
            return
        }
        generatePowerSet(nums, i + 1, [...temp, nums[i]]);
        generatePowerSet(nums, i + 1, temp);
    }
    generatePowerSet(nums, i, temp);
    return res;
};

console.log(subsets([1,2,3]))
console.log(subsets([0]))



// 1561. Maximum Number of Coins You Can Get

var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0, j = piles.length - 2; i < j; i++, j -= 2) {
        res += piles[j];
    }
    return res;
};

console.log(maxCoins([2,4,1,2,7,8]))
console.log(maxCoins([2,4,5]))



// 33. Search in Rotated Sorted Array

var searchRotatedSorted = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[left] <= nums[middle]) {
            if (nums[left] <= target && target <= nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[middle] <= target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;
};

console.log(searchRotatedSorted([4,5,6,7,0,1,2], 0))
console.log(searchRotatedSorted([4,5,6,7,0,1,2], 3))



// 1630. Arithmetic Subarrays

var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];

    for (let i = 0; i < l.length; i++) {
        const arr = nums.slice(l[i], r[i] + 1);
        res.push(check(arr));
    }
    return res;
};

const check = (arr) => {
    arr.sort((a,b) => a - b);
    let difference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }
    return true;
}

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]))
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]))



// 1877. Minimize Maximum Pair Sum in Array

var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let left = 0
    let right = nums.length - 1;
    let minMaxSum = 0;
    
    while (left < right) {
        const currentSum = nums[left] + nums[right];
        minMaxSum = Math.max(minMaxSum, currentSum);
        left++;
        right--;
    }
    return minMaxSum;
};

console.log(minPairSum([3,5,2,3]))
console.log(minPairSum([3,5,4,2,4,6]))



// 2391. Minimum Amount of Time to Collect Garbage

var garbageCollection = function(garbage, travel) {
    let res = 0;
    for (const g of garbage) {
        res += g.length;
    }

    let [m, p, g] = [false, false, false];

    for (let i = travel.length; i > 0; i--) {
        m = m || garbage[i].includes('M');
        p = p || garbage[i].includes('P');
        g= g || garbage[i].includes('G');
        res += travel[i - 1] * (m + p + g);
    }
    return res;
};

console.log(garbageCollection(["G","P","GP","GG"], [2,4,3]))
console.log(garbageCollection(["MMM","PGM","GP"], [3,10]))



// 2079. Watering Plants

var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let newCapacity = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (newCapacity >= plants[i]) {
            steps += 1;
        } else {
            newCapacity = capacity;
            steps = steps + (2 * i + 1);
        }
        newCapacity = newCapacity - plants[i];
    }
    return steps;
};

console.log(wateringPlants([2,2,3,3], 5))
console.log(wateringPlants([1,1,1,4,2,3], 4))
