/*
Runtime beats 76.35 % of cpp submissions.
Runtime: 39 ms
Memory Usage: 71.2 MB
*/

class Solution
{
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        ListNode head(0);
        ListNode *p = &head;
        int sum, remainder = 0;
        while (l1 || l2 || remainder)
        {
            sum = 0;
            if (l1)
            {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2)
            {
                sum += l2->val;
                l2 = l2->next;
            }
            p->next = new ListNode((sum + remainder) % 10);
            p = p->next;
            remainder = (sum + remainder) / 10;
        }
        return head.next;
    }
};