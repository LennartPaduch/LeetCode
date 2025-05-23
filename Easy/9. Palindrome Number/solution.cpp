/*
Your runtime beats 58.71 % of cpp submissions.
Your memory usage beats 91.55 % of cpp submissions.
Runtime: 18 ms
Memory Usage: 5.8 MB


*/

class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0 || x % 10 == 0 && x != 0)
            return false;
        long reversed = 0, n = x;
        while (x != 0)
        {
            reversed *= 10;
            reversed += x % 10;
            x /= 10;
        }
        return reversed == n;
    }
};
