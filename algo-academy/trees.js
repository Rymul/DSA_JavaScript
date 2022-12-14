/**
 * 700. Search in a Binary Search Tree
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
 * If such a node does not exist, return null.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (root === null) return null;

    if(val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val){
        return searchBST(root.right, val);
    } else {
        return root;
    }
};

let r = [4,2,7,1,3]
let v = 2
console.log(searchBST(r,v))
console.log([2,1,3], "Expected Output")

r = [4,2,7,1,3]
v = 5
console.log(searchBST(r,v))
console.log([], "Expected Output")




/**
 * 94. Binary Tree Inorder Traversal
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    // if(!root) return [];
    // let left = inorderTraversal(root.left);
    // let right = inorderTraversal(root.right);
    // let middle = root.val;
    // return [...left, middle, ...right];
    
    if(!root) return [];
    let left = inorderTraversal(root.left);
    left.push(root.val)
    let right = inorderTraversal(root.right);
    return left.concat(right);
};

let x = [1,null,2,3]
console.log(inorderTraversal(x))
console.log([1,3,2], "expected output")



/**
 * 102. Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];

    const queue = [{node: root, level: 0}];
    const output = [];

    while (queue.length > 0) {
        const {node, level} = queue.shift();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
        
        if(node.left !== null) queue.push({node: node.left, level: level+1});
        if(node.right !== null) queue.push({node: node.right, level: level+1});
    }
    return output
};

let y = [3,9,20,null,null,15,7]
console.log(levelOrder(y))
console.log([[3],[9,20],[15,7]], "expected output")




/**
 * 112. Path Sum
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    targetSum -= root.val;

    if(!root.left && !root.right) return targetSum === 0;
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum) 
};





/**
 * 1448. Count Good Nodes in Binary Tree
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var goodNodes = function(root, maxVal = root.val) {
    if(!root) return 0;

    let res = root.val >= maxVal ? 1 : 0;

    maxVal = Math.max(maxVal, root.val);
    res += goodNodes(root.left, maxVal);
    res += goodNodes(root.right, maxVal);

    return res;
  
};



/**
 * 199. Binary Tree Right Side View
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return [];
    const queue = [root];
    const output = [];

    while(queue.length > 0){
        const length = queue.length
        let rightSide = null;

        for(let i = 0; i < length; i++){
            const node = queue.shift();
            rightSide = node;
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        
        if(rightSide) output.push(rightSide.val)
    }
    return output;
};



/**
 * 39. Combination Sum
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. 
 * You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let res = [];

    const backtrack = function(i, cur, total){
        if(total === target){
            res.push([...cur])
            return;
        }
        if(i >= candidates.length || total > target) return;

        cur.push(candidates[i]);
        backtrack(i, cur, total+candidates[i]);
        cur.pop();
        backtrack(i+1, cur, total);
    }

    backtrack(0,[],0);
    return res;
};