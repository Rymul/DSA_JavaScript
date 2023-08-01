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