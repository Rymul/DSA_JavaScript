function inOrderArray(root) {
    if(root === null) return [];
    inOrderArray(root.left)
    console.log(root.val)
    inOrderArray(root.right)

}

function postOrderArray(root) {
    if(!root) return [];
    postOrderArray(root.left);
    postOrderArray(root.right);
    console.log(root.val);

}


module.exports = {
    inOrderArray,
    postOrderArray
};