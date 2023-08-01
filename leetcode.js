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