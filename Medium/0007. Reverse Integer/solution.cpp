// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Reverse Integer.
// Memory Usage: 5.9 MB, less than 33.59% of C++ online submissions for Reverse Integer.

class Solution
{
public:
    int reverse(int x)
    {
        if (x == 0)
            return 0;
        int z = x;
        int l = 0;
        while (z != 0)
        {
            int d = z % 10;
            if (l > INT_MAX / 10 || l == INT_MAX && d > INT_MAX % 10)
                return 0;
            if (l < INT_MIN / 10 || l == INT_MIN && d > INT_MIN % 10)
                return 0;
            l = l * 10 + d;
            z /= 10;
        }
        return l;
    }
};