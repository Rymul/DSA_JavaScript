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
