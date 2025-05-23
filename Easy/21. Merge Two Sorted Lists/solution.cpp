// Runtime: 4 ms, faster than 93.61% of C++ online submissions for Merge Two Sorted Lists.
// Memory Usage: 15.1 MB, less than 8.67% of C++ online submissions for Merge Two Sorted Lists.

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        ListNode head(0);
        if (list1 && list2)
        {
            if (list1->val >= list2->val)
            {
                head.val = list2->val;
            }
            else if (list2->val >= list1->val)
            {
                head.val = list1->val;
            }
            ListNode *p = &head;
            int val;
            while (list1 || list2)
            {

                if (list1 && list2)
                {
                    if (list1->val <= list2->val)
                    {
                        val = list1->val;
                        list1 = list1->next;
                    }
                    else
                    {
                        val = list2->val;
                        list2 = list2->next;
                    }
                }
                else if (list1)
                {
                    val = list1->val;
                    list1 = list1->next;
                }
                else
                {
                    val = list2->val;
                    list2 = list2->next;
                }
                p->next = new ListNode(val);
                p = p->next;
            }
            return head.next;
        }
        if (list1)
            return list1;
        return list2;
    }
};