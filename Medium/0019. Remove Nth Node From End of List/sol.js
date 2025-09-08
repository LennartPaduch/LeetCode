/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head.next && n > 0) return null

    let pRight = head;
    let pLeft = head;
    while (n-- !== 0) {
        pRight = pRight.next
    }

    if (!pRight) return head.next

    while (pRight.next) {
        pRight = pRight.next;
        pLeft = pLeft.next;
    }

    const tempNode = pLeft.next;
    pLeft.next = tempNode.next

    return head;
};

