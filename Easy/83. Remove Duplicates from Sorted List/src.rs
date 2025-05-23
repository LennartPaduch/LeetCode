impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut current = &mut head;

        while let Some(ref mut node) = current {
            while node.next.is_some() && node.val == node.next.as_ref().unwrap().val {
                node.next = node.next.take().unwrap().next;
            }
            current = &mut node.next;
        }

        head
    }
}
